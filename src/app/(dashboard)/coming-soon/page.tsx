import Customizer from "@/components/Customizer";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import GeexResources from "@/components/GeexResources";
export const metadata = { title: "Coming Soon - Geex Dashboard", icons: { icon: "/assets/img/favicon.svg" } };

export default function ComingSoonPage() {
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
                <h3 className={"geex-content__error__subtitle"}>
                  {"Coming Soon"}
                </h3>
                <p className={"geex-content__error__desc"}>
                  {"We will return very soon"}
                </p>
                <div id={"geex-countdown"} className={"geex-countdown"}>
                  <ul className={"geex-countdown__wrapper"}>
                    <li>
                      <span className={"geex-countdown__days"} />
                      {"days"}
                    </li>
                    <li>
                      <span className={"geex-countdown__hours"} />
                      {"Hours"}
                    </li>
                    <li>
                      <span className={"geex-countdown__minutes"} />
                      {"Minutes"}
                    </li>
                    <li>
                      <span className={"geex-countdown__seconds"} />
                      {"Seconds"}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>




    </>
  );
}
