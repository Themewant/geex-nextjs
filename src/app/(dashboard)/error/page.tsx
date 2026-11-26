import Link from "next/link";
import Customizer from "@/components/Customizer";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import GeexResources from "@/components/GeexResources";
export const metadata = { title: "Error - Geex Dashboard", icons: { icon: "/assets/img/favicon.svg" } };

export default function ErrorPage() {
  return (
    <>
      <GeexResources styles={["/assets/vendor/css/bootstrap/bootstrap.css","/assets/css/style.css","https://cdn.jsdelivr.net/npm/@iconscout/unicons@4.0.8/css/line.min.css"]} scripts={["/assets/vendor/js/jquery/jquery-3.5.1.min.js","/assets/vendor/js/jquery/jquery-ui.js","/assets/vendor/js/bootstrap/bootstrap.min.js","/assets/js/main.js"]} />
      <Header />
      <main className={"geex-main-content"}>
        <Sidebar />
        <Customizer />
        <div className={"geex-content"}>
          <div className={"geex-content__section geex-content__error"}>
            <div className={"geex-content__error__wrapper"}>
              <div className={"geex-content__error__content"}>
                <h2 className={"geex-content__error__title"}>
                  {"404"}
                </h2>
                <h3 className={"geex-content__error__subtitle"}>
                  {"Page Not Found"}
                </h3>
                <p className={"geex-content__error__desc"}>
                  {"Sorry, the page you seems looking for, has been moved, redirected or removed permanently."}
                </p>
                <Link className={"geex-btn"} href={"/"}>
                  {" Back to Homepage"}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>




    </>
  );
}
