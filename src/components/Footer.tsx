import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className={"geex-footer"}>
        <div className={"geex-footer__wrap"}>
          <div className={"geex-footer__copyright"}>
            <p>
              <span>
                {"© "}
                <span data-copyright-year={""}>
                  {"2026"}
                </span>
              </span>
              <a href={"#"}>
                {"ThemeWant"}
              </a>
            </p>
          </div>
          <ul className={"geex-footer__menu"}>
            <li className={"geex-footer__meu__item"}>
              <Link href={"/terms"}>
                {"Privacy"}
              </Link>
            </li>
            <li className={"geex-footer__meu__item"}>
              <Link href={"/blog"}>
                {"Blog"}
              </Link>
            </li>
            <li className={"geex-footer__meu__item"}>
              <Link href={"/faq"}>
                {"Faq"}
              </Link>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}
