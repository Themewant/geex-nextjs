import Customizer from "@/components/Customizer";
import Header from "@/components/Header";
import HeaderActions from "@/components/HeaderActions";
import Sidebar from "@/components/Sidebar";
import GeexResources from "@/components/GeexResources";
export const metadata = { title: "Badge - Geex Dashboard", icons: { icon: "/assets/img/favicon.svg" } };

export default function BadgePage() {
  return (
    <>
      <GeexResources styles={["/assets/vendor/css/bootstrap/bootstrap.css","/assets/css/style.css","https://cdn.jsdelivr.net/npm/@iconscout/unicons@4.0.8/css/line.min.css"]} scripts={["/assets/vendor/js/jquery/jquery-3.5.1.min.js","/assets/vendor/js/jquery/jquery-ui.js","/assets/vendor/js/bootstrap/bootstrap.min.js","/assets/js/main.js"]} />
      <Header />
      <main className={"geex-main-content"}>
        <Sidebar />
        <Customizer />
        <div className={"geex-content"}>
          <div className={"geex-content__header"}>
            <div className={"geex-content__header__content"}>
              <h2 className={"geex-content__header__title"}>
                {"Badge/Label"}
              </h2>
              <p className={"geex-content__header__subtitle"}>
                {"Form Elements is used to style and format the input field"}
              </p>
            </div>
            <HeaderActions />
          </div>
          <div className={"geex-content__section geex-content__form"}>
            <div className={"geex-content__form__wrapper"}>
              <div className={"geex-content__form__wrapper__item geex-content__form__left"}>
                <div className={"geex-content__form__single"}>
                  <h4 className={"geex-content__form__single__label"}>
                    {"Mini badge for notification counters"}
                  </h4>
                  <div className={"geex-content__form__single__box"}>
                    <span className={"geex-badge geex-badge--danger geex-badge--mini"}>
                      {"2"}
                    </span>
                    <span className={"geex-badge geex-badge--warning geex-badge--mini"}>
                      {"84"}
                    </span>
                    <span className={"geex-badge geex-badge--info geex-badge--mini"}>
                      {"2"}
                    </span>
                  </div>
                </div>
                <div className={"geex-content__form__single"}>
                  <h4 className={"geex-content__form__single__label"}>
                    {"Text badge for status label"}
                  </h4>
                  <div className={"geex-content__form__single__box"}>
                    <span className={"geex-badge geex-badge--danger"}>
                      {"Badge"}
                    </span>
                    <span className={"geex-badge geex-badge--success"}>
                      {"Badge"}
                    </span>
                    <span className={"geex-badge geex-badge--warning"}>
                      {"Badge"}
                    </span>
                  </div>
                </div>
                <div className={"geex-content__form__single"}>
                  <h4 className={"geex-content__form__single__label"}>
                    {"Label with icon"}
                  </h4>
                  <div className={"geex-content__form__single__box"}>
                    <span className={"geex-badge geex-badge--label-icon geex-badge--danger-transparent"}>
                      <i className={"uil-arrow-down-right"} />
                      {"Label"}
                    </span>
                    <span className={"geex-badge geex-badge--label-icon geex-badge--success-transparent"}>
                      <i className={"uil-arrow-down-right"} />
                      {"Label"}
                    </span>
                    <span className={"geex-badge geex-badge--label-icon geex-badge--warning-transparent"}>
                      <i className={"uil-arrow-down-right"} />
                      {"Label"}
                    </span>
                    <span className={"geex-badge geex-badge--label-icon geex-badge--info-transparent"}>
                      <i className={"uil-arrow-down-right"} />
                      {"Label"}
                    </span>
                    <span className={"geex-badge geex-badge--label-icon geex-badge--primary-transparent"}>
                      <i className={"uil-arrow-down-right"} />
                      {"Label"}
                    </span>
                  </div>
                </div>
              </div>
              <div className={"geex-content__form__wrapper__item geex-content__form__right"}>
                <div className={"geex-content__form__single"}>
                  <h4 className={"geex-content__form__single__label"}>
                    {"File format Icon"}
                  </h4>
                  <div className={"geex-content__form__single__box"}>
                    <span className={"geex-badge geex-badge--dark geex-badge--icon"}>
                      <i className={"uil-grid"} />
                    </span>
                    <span className={"geex-badge geex-badge--pink geex-badge--icon"}>
                      <i className={"uil-image"} />
                    </span>
                    <span className={"geex-badge geex-badge--warning geex-badge--icon"}>
                      <i className={"uil-play"} />
                    </span>
                    <span className={"geex-badge geex-badge--success geex-badge--icon"}>
                      <i className={"uil-airplay"} />
                    </span>
                    <span className={"geex-badge geex-badge--info geex-badge--icon"}>
                      <i className={"uil-file-alt"} />
                    </span>
                    <span className={"geex-badge geex-badge--primary geex-badge--icon"}>
                      <i className={"uil-folder"} />
                    </span>
                    <span className={"geex-badge geex-badge--white geex-badge--icon"}>
                      <i className={"uil-arrow-right"} />
                    </span>
                  </div>
                </div>
                <div className={"geex-content__form__single"}>
                  <h4 className={"geex-content__form__single__label"}>
                    {"Tooltip"}
                  </h4>
                  <div className={"geex-content__form__single__box"}>
                    <div className={"geex-tooltip geex-tooltip--default"}>
                      <h5 className={"geex-tooltip__title"}>
                        {"24%"}
                      </h5>
                      <span className={"geex-tooltip__text"}>
                        {"982 Visitors"}
                      </span>
                    </div>
                    <div className={"geex-tooltip geex-tooltip--white"}>
                      <h5 className={"geex-tooltip__title"}>
                        {"48 Request"}
                      </h5>
                      <span className={"geex-tooltip__text"}>
                        {"From Web Server A"}
                      </span>
                    </div>
                  </div>
                </div>
                <div className={"geex-content__form__single"}>
                  <h4 className={"geex-content__form__single__label"}>
                    {"Label Legend"}
                  </h4>
                  <div className={"geex-content__form__single__box"}>
                    <span className={"geex-label geex-label--success"}>
                      {"Web Server A"}
                    </span>
                    <span className={"geex-label geex-label--primary"}>
                      {"Web Server B"}
                    </span>
                  </div>
                </div>
                <div className={"geex-content__form__single"}>
                  <h4 className={"geex-content__form__single__label"}>
                    {"Icon Transaction"}
                  </h4>
                  <div className={"geex-content__form__single__box"}>
                    <span className={"geex-badge geex-badge--danger-transparent geex-badge--transaction-icon"}>
                      <i className={"uil-arrow-down"} />
                    </span>
                    <span className={"geex-badge geex-badge--success-transparent geex-badge--transaction-icon"}>
                      <i className={"uil-arrow-up"} />
                    </span>
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
