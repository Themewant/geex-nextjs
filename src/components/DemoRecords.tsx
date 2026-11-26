"use client";

import { useState, useSyncExternalStore, type FormEvent, type ReactNode } from "react";

const changeEvent = "geex:demo-records";
const empty = "[]";
declare global {
  interface Window { geexPreviewStorage?: Map<string, string> }
}

type RecordEntry = { id: string; title: string; description?: string; date?: string; done?: boolean };

function subscribe(callback: () => void) {
  window.addEventListener(changeEvent, callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener(changeEvent, callback);
    window.removeEventListener("storage", callback);
  };
}

function key(scope: string) {
  return `geex-demo:${scope}`;
}

function read(scope: string) {
  try {
    return window.geexPreviewStorage?.get(key(scope)) ?? window.localStorage.getItem(key(scope)) ?? empty;
  } catch {
    return empty;
  }
}

function decode(snapshot: string): RecordEntry[] {
  try {
    const values: unknown = JSON.parse(snapshot);
    return Array.isArray(values) ? values.filter(value => typeof value?.id === "string" && typeof value.title === "string") : [];
  } catch {
    return [];
  }
}

function save(scope: string, records: RecordEntry[]) {
  const name = key(scope);
  const snapshot = JSON.stringify(records);
  let persistent = true;
  try {
    window.localStorage.setItem(name, snapshot);
    window.geexPreviewStorage?.delete(name);
  } catch {
    persistent = false;
    (window.geexPreviewStorage ??= new Map()).set(name, snapshot);
  }
  window.dispatchEvent(new CustomEvent(changeEvent, { detail: scope }));
  return persistent;
}

export function DemoRecordList({ scope, label }: { scope: string; label: string }) {
  const records = decode(useSyncExternalStore(subscribe, () => read(scope), () => empty));
  const [message, setMessage] = useState("");
  if (!records.length) return null;

  function update(id: string, remove: boolean) {
    try {
      const latest = decode(read(scope));
      save(scope, remove ? latest.filter(entry => entry.id !== id) : latest.map(entry => entry.id === id ? { ...entry, done: !entry.done } : entry));
    } catch {
      setMessage("Unable to update browser storage.");
    }
  }

  return (
    <section className="geex-demo-records" aria-label={label}>
      <h3>{label}</h3>
      <ul>
        {records.map(entry => (
          <li key={entry.id}>
            <div>
              {scope === "todo" ? (
                <label><input type="checkbox" checked={!!entry.done} onChange={() => update(entry.id, false)} /> {entry.title}</label>
              ) : <strong>{entry.title}</strong>}
              {entry.description && <p>{entry.description}</p>}
            </div>
            <button type="button" className="geex-demo-remove" aria-label={`Remove ${entry.title}`} onClick={() => update(entry.id, true)}>Remove</button>
          </li>
        ))}
      </ul>
      {message && <p role="status">{message}</p>}
    </section>
  );
}

export function DemoRecordForm({ scope, className, children, id }: { scope: string; className: string; children: ReactNode; id?: string }) {
  const [message, setMessage] = useState("");
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const fields = new FormData(form);
    const field = (name: string) => String(fields.get(name) ?? "").trim();
    const title = field("title");
    if (!title || (scope.startsWith("comment:") && !field("description"))) {
      setMessage("Complete the required fields.");
      return;
    }
    const description = scope === "contact"
      ? ["designation", "company", "phone", "email"].map(field).filter(Boolean).join(" · ")
      : field("description");
    try {
      const persistent = save(scope, [{
        id: crypto.randomUUID(),
        title,
        description,
        ...(scope === "calendar" ? { date: field("date") } : {}),
      }, ...decode(read(scope))]);
      form.reset();
      setMessage(persistent ? "Saved in this browser." : "Saved for this preview session.");
      if (scope === "todo" || scope === "contact" || scope === "calendar") {
        form.closest(".geex-content__modal__form")?.classList.remove("active");
        document.body.classList.remove("overlay_active");
      }
    } catch {
      setMessage("Browser storage is unavailable.");
    }
  }

  return (
    <form id={id} className={className} method="post" onSubmit={submit}>
      {children}
      <p role="status">{message}</p>
    </form>
  );
}
