import Customizer from "@/components/Customizer";
import Header from "@/components/Header";
import HeaderActions from "@/components/HeaderActions";
import Sidebar from "@/components/Sidebar";
import GeexResources from "@/components/GeexResources";
export const metadata = { title: "Navigation - Geex Dashboard", icons: { icon: "/assets/img/favicon.svg" } };

export default function NavigationPage() {
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
                {"Navigation"}
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
                <div className={"geex-content__form__single d-flex gap-20 justify-content-between"}>
                  <div className={"geex-content__form__single__left"}>
                    <h4 className={"geex-content__form__single-action__label"}>
                      {"Email"}
                    </h4>
                    <p className={"geex-content__form__single-action__text"}>
                      {"Welcome to Geex Modern Admin Dashboard"}
                    </p>
                  </div>
                  <div className={"geex-content__form__single__right d-flex gap-20"}>
                    <div className={"geex-content__header__searchform"}>
                      <input type={"text"} placeholder={"Search"} className={"geex-content__header__btn"} />
                      <i className={"uil uil-search"} />
                    </div>
                    <ul className={"geex-content__header__quickaction"}>
                      <li className={"geex-content__header__quickaction__item"}>
                        <a href={"#"} className={"geex-content__header__quickaction__link"}>
                          <img className={"notification-img"} src={"/assets/img/avatar/chat.svg"} alt={"chat"} />
                          <span className={"geex-content__header__badge"}>
                            {"84"}
                          </span>
                        </a>
                      </li>
                      <li className={"geex-content__header__quickaction__item"}>
                        <a href={"#"} className={"geex-content__header__quickaction__link"}>
                          <img className={"notification-img"} src={"/assets/img/avatar/notification.svg"} alt={"chat"} />
                          <span className={"geex-content__header__badge bg-info"}>
                            {"2"}
                          </span>
                        </a>
                      </li>
                      <li className={"geex-content__header__quickaction__item"}>
                        <a href={"#"} className={"geex-content__header__quickaction__link"}>
                          <img className={"user-img"} src={"/assets/img/avatar/user.svg"} alt={"user"} />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className={"geex-content__form__single d-flex gap-20 justify-content-between"}>
                  <div className={"geex-content__form__single__left"}>
                    <h4 className={"geex-content__form__single-action__label"}>
                      {"Dashboard"}
                    </h4>
                    <p className={"geex-content__form__single-action__text"}>
                      {"Welcome to Geex Modern Admin Dashboard"}
                    </p>
                  </div>
                  <div className={"geex-content__form__single__right d-flex gap-20"}>
                    <ul className={"geex-content__header__quickaction"}>
                      <li className={"geex-content__header__quickaction__item"}>
                        <a href={"#"} className={"geex-content__header__quickaction__link"}>
                          <i className={"uil uil-search"} />
                        </a>
                      </li>
                      <li className={"geex-content__header__quickaction__item"}>
                        <a href={"#"} className={"geex-content__header__quickaction__link"}>
                          <img className={"notification-img"} src={"/assets/img/avatar/chat.svg"} alt={"chat"} />
                          <span className={"geex-content__header__badge"}>
                            {"5"}
                          </span>
                        </a>
                      </li>
                      <li className={"geex-content__header__quickaction__item"}>
                        <a href={"#"} className={"geex-content__header__quickaction__link"}>
                          <img className={"notification-img"} src={"/assets/img/avatar/notification.svg"} alt={"chat"} />
                          <span className={"geex-content__header__badge bg-info"}>
                            {"15"}
                          </span>
                        </a>
                      </li>
                      <li className={"geex-content__header__quickaction__item"}>
                        <a href={"#"} className={"geex-content__header__quickaction__link"}>
                          <img className={"user-img"} src={"/assets/img/avatar/user.svg"} alt={"user"} />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className={"geex-content__form__single d-flex gap-20 justify-content-between"}>
                  <div className={"geex-content__form__single__left"}>
                    <p className={"geex-content__form__single__text"}>
                      {"Showing 4 of 256 data"}
                    </p>
                  </div>
                  <div className={"geex-content__form__single__right d-flex gap-20"}>
                    <ul className={"geex-content__pagination flex gap-10"}>
                      <li className={"geex-content__pagination__item"}>
                        <a href={"#"} className={"geex-content__pagination__link active"}>
                          {" 1 "}
                        </a>
                      </li>
                      <li className={"geex-content__pagination__item"}>
                        <a href={"#"} className={"geex-content__pagination__link"}>
                          {" 2 "}
                        </a>
                      </li>
                      <li className={"geex-content__pagination__item"}>
                        <a href={"#"} className={"geex-content__pagination__link"}>
                          {" 3 "}
                        </a>
                      </li>
                    </ul>
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
