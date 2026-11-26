import Customizer from "@/components/Customizer";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import GeexResources from "@/components/GeexResources";
export const metadata = { title: "Blank - Geex Dashboard", icons: { icon: "/assets/img/favicon.svg" } };

export default function BlankPage() {
  return (
    <>
      <GeexResources styles={["/assets/vendor/css/bootstrap/bootstrap.css","/assets/css/style.css","https://cdn.jsdelivr.net/npm/@iconscout/unicons@4.0.8/css/line.min.css"]} scripts={["/assets/vendor/js/jquery/jquery-3.5.1.min.js","/assets/vendor/js/jquery/jquery-ui.js","/assets/vendor/js/bootstrap/bootstrap.min.js","/assets/js/main.js"]} />
      <Header />
      <main className={"geex-main-content"}>
        <Sidebar />
        <Customizer />
        <div className={"geex-content"}>
          <div className={"geex-content__section geex-content__blank"}>
            <div className={"geex-content__error__wrapper"}>
              <div className={"geex-content__error__content"} />
            </div>
          </div>
        </div>
      </main>




    </>
  );
}
