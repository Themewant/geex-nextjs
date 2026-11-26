import Customizer from "@/components/Customizer";
import Header from "@/components/Header";
import HeaderActions from "@/components/HeaderActions";
import Sidebar from "@/components/Sidebar";
import GeexResources from "@/components/GeexResources";
export const metadata = { title: "Chart - Geex Dashboard", icons: { icon: "/assets/img/favicon.svg" } };

export default function ChartPage() {
  return (
    <>
      <GeexResources styles={["/assets/vendor/css/bootstrap/bootstrap.css","/assets/css/style.css","https://cdn.jsdelivr.net/npm/@iconscout/unicons@4.0.8/css/line.min.css"]} scripts={["/assets/vendor/js/jquery/jquery-3.5.1.min.js","/assets/vendor/js/jquery/jquery-ui.js","/assets/vendor/js/bootstrap/bootstrap.min.js","/assets/vendor/js/apexcharts.min.js","/assets/js/main.js"]} />
      <Header />
      <main className={"geex-main-content"}>
        <Sidebar />
        <Customizer />
        <div className={"geex-content"}>
          <div className={"geex-content__header"}>
            <div className={"geex-content__header__content"}>
              <h2 className={"geex-content__header__title"}>
                {"Chart"}
              </h2>
              <p className={"geex-content__header__subtitle"}>
                {"Form Elements is used to style and format the input field"}
              </p>
            </div>
            <HeaderActions />
          </div>
          <div className={"geex-content__wrapper"}>
            <div className={"geex-content__section-wrapper"}>
              <div className={"row"}>
                <div className={"col-lg-6 mb-40"}>
                  <div className={"geex-content__section geex-content__server-request"}>
                    <div className={"geex-content__section__header"}>
                      <div className={"geex-content__section__header__title-part"}>
                        <h4 className={"geex-content__section__header__title"}>
                          {"Server Request"}
                        </h4>
                      </div>
                    </div>
                    <div className={"geex-content__section__content"}>
                      <div id={"line-chart"} className={"server-request-chart"} />
                    </div>
                  </div>
                </div>
                <div className={"col-lg-6 mb-40"}>
                  <div className={"geex-content__section"}>
                    <div id={"stack-chart"} />
                  </div>
                </div>
                <div className={"col-lg-6 md-mb-40"}>
                  <div className={"geex-content__section geex-content__visitor-count"}>
                    <div className={"geex-content__section__header"}>
                      <div className={"geex-content__section__header__title-part"}>
                        <h4 className={"geex-content__section__header__title"}>
                          {"Visitors"}
                        </h4>
                      </div>
                      <div className={"geex-content__section__header__content-part"}>
                        <div className={"geex-content__section__header__btn"}>
                          <a href="#column-chart" className={"geex-content__section__header__link"}>
                            {" View Chart "}
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className={"geex-content__section__content"}>
                      <div className={"geex-content__visitor-count__number"}>
                        <h2 className={"geex-content__visitor-count__number__title"}>
                          {"98,425k"}
                        </h2>
                        <div className={"geex-content__visitor-count__number__text"}>
                          <span className={"geex-content__visitor-count__number__subtitle"}>
                            {"+2.5%"}
                          </span>
                          <p className={"geex-content__visitor-count__number__desc"}>
                            {"Than last week"}
                          </p>
                        </div>
                      </div>
                      <div id={"column-chart"} />
                    </div>
                  </div>
                </div>
                <div className={"col-lg-6"}>
                  <div className={"geex-content__section geex-content__chat-summary"}>
                    <div className={"geex-content__section__header"}>
                      <div className={"geex-content__section__header__title-part"}>
                        <h4 className={"geex-content__section__header__title"}>
                          {"Chart Summary"}
                        </h4>
                      </div>
                      <div className={"geex-content__section__header__content-part"}>
                        <div className={"geex-content__section__header__btn"}>
                          <a href="/assets/geex-sample-report.csv" download className={"geex-content__section__header__link"}>
                            {" Download Report "}
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className={"geex-content__section__content"}>
                      <div id={"pie-chart"} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>





    </>
  );
}
