import GeexScripts from "./GeexScripts";

export default function GeexResources({ styles, scripts }: { styles: string[]; scripts: string[] }) {
  return (
    <>
      {styles.map(href => <link key={href} rel="stylesheet" href={href} precedence="geex" />)}
      <GeexScripts sources={scripts} />
    </>
  );
}
