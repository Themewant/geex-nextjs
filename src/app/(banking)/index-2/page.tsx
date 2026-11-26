import Customizer from "@/components/Customizer";
import Header from "@/components/Header";
import HeaderActions from "@/components/HeaderActions";
import Sidebar from "@/components/Sidebar";
import GeexResources from "@/components/GeexResources";
export const metadata = { title: "Banking - Geex Dashboard", icons: { icon: "/assets/img/favicon.svg" } };

export default function Index2Page() {
  return (
    <>
      <GeexResources styles={["/assets/vendor/css/bootstrap/bootstrap.css","https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css","/assets/css/style.css","https://cdn.jsdelivr.net/npm/@iconscout/unicons@4.0.8/css/line.min.css"]} scripts={["/assets/vendor/js/jquery/jquery-3.5.1.min.js","/assets/vendor/js/jquery/jquery-ui.js","/assets/vendor/js/bootstrap/bootstrap.min.js","/assets/vendor/js/apexcharts.min.js","/assets/vendor/js/dragula.js","/assets/js/main.js"]} />
      <Header />
      <main className={"geex-main-content"}>
        <Sidebar />
        <Customizer />
        <div className={"geex-content"}>
          <div className={"geex-content__header"}>
            <div className={"geex-content__header__content"}>
              <h2 className={"geex-content__header__title"}>
                {"Banking"}
              </h2>
              <p className={"geex-content__header__subtitle"}>
                {"Welcome to Geex Modern Admin Dashboard"}
              </p>
            </div>
            <HeaderActions />
          </div>
          <div className={"geex-content__wrapper"}>
            <div className={"geex-content__section-wrapper"}>
              <div className={"geex-content__double-column mb-40"}>
                <div className={"geex-content__section geex-content__income-count"}>
                  <div className={"geex-content__section__header"}>
                    <div className={"geex-content__section__header__title-part"}>
                      <h4 className={"geex-content__section__header__title"}>
                        {"Income"}
                      </h4>
                    </div>
                  </div>
                  <div className={"geex-content__section__content"}>
                    <div className={"geex-content__section__content__top"}>
                      <div className={"geex-content__section__content__top__left"}>
                        <h4 className={"geex-content__section__content__amount increment"}>
                          <i className={"uil uil-angle-up"} />
                          {" +4,6% "}
                        </h4>
                        <p className={"geex-content__section__content__subtitle"}>
                          {"Bigger than last week"}
                        </p>
                      </div>
                      <div className={"geex-content__section__content__top__right"}>
                        <h4 className={"geex-content__section__content__price"}>
                          {"$1,572.68"}
                        </h4>
                      </div>
                    </div>
                    <div id={"income-chart"} className={"column-chart"} />
                  </div>
                </div>
                <div className={"geex-content__section geex-content__expense-count"}>
                  <div className={"geex-content__section__header"}>
                    <div className={"geex-content__section__header__title-part"}>
                      <h4 className={"geex-content__section__header__title"}>
                        {"Expense"}
                      </h4>
                    </div>
                  </div>
                  <div className={"geex-content__section__content"}>
                    <div className={"geex-content__section__content__top"}>
                      <div className={"geex-content__section__content__top__left"}>
                        <h4 className={"geex-content__section__content__amount decrement"}>
                          <i className={"uil uil-angle-down"} />
                          {" -2.5% "}
                        </h4>
                        <p className={"geex-content__section__content__subtitle"}>
                          {"Bigger than last week"}
                        </p>
                      </div>
                      <div className={"geex-content__section__content__top__right"}>
                        <h4 className={"geex-content__section__content__price"}>
                          {"$802.16"}
                        </h4>
                      </div>
                    </div>
                    <div id={"expense-chart"} />
                  </div>
                </div>
              </div>
              <div className={"geex-content__section geex-content__transaction"}>
                <div className={"geex-content__section__header"}>
                  <div className={"geex-content__section__header__title-part"}>
                    <h4 className={"geex-content__section__header__title"}>
                      {"All Transaction"}
                    </h4>
                  </div>
                  <div className={"geex-content__section__header__content-part"}>
                    <ul className={"nav nav-tabs geex-transaction-tab"} id={"geex-transaction-tab"} role={"tablist"}>
                      <li className={"nav-item"} role={"presentation"}>
                        <button className={"nav-link active"} id={"transaction-history-tab"} data-bs-toggle={"tab"} data-bs-target={"#transaction-history-content"} type={"button"} role={"tab"} aria-controls={"transaction-history-content"} aria-selected={"true"}>
                          {"History"}
                        </button>
                      </li>
                      <li className={"nav-item"} role={"presentation"}>
                        <button className={"nav-link"} id={"transaction-upcoming-tab"} data-bs-toggle={"tab"} data-bs-target={"#transaction-upcoming-content"} type={"button"} role={"tab"} aria-controls={"transaction-upcoming-content"} aria-selected={"false"}>
                          {"Upcoming"}
                        </button>
                      </li>
                      <li className={"nav-item"} role={"presentation"}>
                        <button className={"nav-link"} id={"transaction-request-tab"} data-bs-toggle={"tab"} data-bs-target={"#transaction-request-content"} type={"button"} role={"tab"} aria-controls={"transaction-request-content"} aria-selected={"false"}>
                          {"Request"}
                        </button>
                      </li>
                    </ul>
                    <ul className={"geex-transaction-filter filter-part"}>
                      <li>
                        <label htmlFor={"filterDate"} id={"geex-content__filter__label"}>
                          <i className={"uil-calendar-alt"} />
                        </label>
                        <input type={"date"} id={"geex-content__filter__date"} name={"filterDate"} />
                      </li>
                      <li>
                        <a href={"#"} className={"geex-content__toggle__btn"}>
                          <i className={"uil-search"} />
                        </a>
                        <div className={"geex-content__toggle__content geex-content__header__searchform"}>
                          <input type={"text"} placeholder={"Search"} className={"geex-content__header__btn"} />
                          <i className={"uil uil-search"} />
                        </div>
                      </li>
                      <li>
                        <a href={"#"} className={"geex-content__toggle__btn"}>
                          <i className={"uil-filter"} />
                        </a>
                        <div className={"geex-content__toggle__content filter-popup"}>
                          <a href={"#"}>
                            {"Name"}
                          </a>
                          <a href={"#"}>
                            {"Date"}
                          </a>
                          <a href={"#"}>
                            {"Amount"}
                          </a>
                          <a href={"#"}>
                            {"Last Modified"}
                          </a>
                          <button className={"geex-btn geex-btn--sm"}>
                            {"Apply Filters"}
                          </button>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className={"geex-content__section__content"}>
                  <div className={"tab-content geex-transaction-content"} id={"geex-transaction-content"}>
                    <div className={"tab-pane fade show active"} id={"transaction-history-content"} role={"tabpanel"} aria-labelledby={"transaction-history-tab"}>
                      <div className={"transaction-content"}>
                        <div className={"transaction-type"}>
                          <div className={"transaction-type__single decrement"}>
                            <div className={"transaction-type__single__icon"}>
                              <i className={"uil uil-arrow-down"} />
                            </div>
                            <div className={"transaction-type__single__content"}>
                              <h4 className={"transaction-type__single__content__title"}>
                                {"Paypal Transfer"}
                              </h4>
                              <p className={"transaction-type__single__content__subtitle"}>
                                {"November 24th, 2020 at 2:45 AM"}
                              </p>
                            </div>
                          </div>
                          <div className={"transaction-type__single decrement"}>
                            <div className={"transaction-type__single__icon"}>
                              <i className={"uil uil-arrow-down"} />
                            </div>
                            <div className={"transaction-type__single__content"}>
                              <h4 className={"transaction-type__single__content__title"}>
                                {"Upgrade Storage Plan"}
                              </h4>
                              <p className={"transaction-type__single__content__subtitle"}>
                                {"November 24th, 2020 at 2:45 AM"}
                              </p>
                            </div>
                          </div>
                          <div className={"transaction-type__single increment"}>
                            <div className={"transaction-type__single__icon"}>
                              <i className={"uil uil-arrow-up"} />
                            </div>
                            <div className={"transaction-type__single__content"}>
                              <h4 className={"transaction-type__single__content__title"}>
                                {"Bank Transfer"}
                              </h4>
                              <p className={"transaction-type__single__content__subtitle"}>
                                {"September 5th, 2020 at 11:56 AM"}
                              </p>
                            </div>
                          </div>
                          <div className={"transaction-type__single decrement"}>
                            <div className={"transaction-type__single__icon"}>
                              <i className={"uil uil-arrow-down"} />
                            </div>
                            <div className={"transaction-type__single__content"}>
                              <h4 className={"transaction-type__single__content__title"}>
                                {"Youtube Monthly Subcrition"}
                              </h4>
                              <p className={"transaction-type__single__content__subtitle"}>
                                {"September 5th, 2020 at 11:56 AM"}
                              </p>
                            </div>
                          </div>
                          <div className={"transaction-type__single increment"}>
                            <div className={"transaction-type__single__icon"}>
                              <i className={"uil uil-arrow-up"} />
                            </div>
                            <div className={"transaction-type__single__content"}>
                              <h4 className={"transaction-type__single__content__title"}>
                                {"Bank Transfer"}
                              </h4>
                              <p className={"transaction-type__single__content__subtitle"}>
                                {"September 5th, 2020 at 11:56 AM"}
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className={"transaction-type"}>
                          <div className={"transaction-type__single"}>
                            <div className={"transaction-type__single__icon"}>
                              <img src={"/assets/img/avatar/t1.svg"} alt={"user"} />
                            </div>
                            <div className={"transaction-type__single__content"}>
                              <h4 className={"transaction-type__single__content__title"}>
                                {"Thomas Edison"}
                              </h4>
                              <p className={"transaction-type__single__content__subtitle"}>
                                {"@thomasedis"}
                              </p>
                            </div>
                            <div className={"transaction-type__single__rate"}>
                              <span className={"decrement"}>
                                {"- $98.21"}
                              </span>
                            </div>
                          </div>
                          <div className={"transaction-type__single"}>
                            <div className={"transaction-type__single__icon"}>
                              <img src={"/assets/img/icon/dropbox.svg"} alt={"user"} />
                            </div>
                            <div className={"transaction-type__single__content"}>
                              <h4 className={"transaction-type__single__content__title"}>
                                {"Dropbox"}
                              </h4>
                              <p className={"transaction-type__single__content__subtitle"}>
                                {"November"}
                              </p>
                            </div>
                            <div className={"transaction-type__single__rate"}>
                              <span className={"increment"}>
                                {"+ $200"}
                              </span>
                            </div>
                          </div>
                          <div className={"transaction-type__single"}>
                            <div className={"transaction-type__single__icon"}>
                              <img src={"/assets/img/avatar/t2.svg"} alt={"user"} />
                            </div>
                            <div className={"transaction-type__single__content"}>
                              <h4 className={"transaction-type__single__content__title"}>
                                {"Louis Khun"}
                              </h4>
                              <p className={"transaction-type__single__content__subtitle"}>
                                {"@thomasedis"}
                              </p>
                            </div>
                            <div className={"transaction-type__single__rate"}>
                              <span className={"increment"}>
                                {"+ $500"}
                              </span>
                            </div>
                          </div>
                          <div className={"transaction-type__single"}>
                            <div className={"transaction-type__single__icon"}>
                              <img src={"/assets/img/icon/youtube.svg"} alt={"user"} />
                            </div>
                            <div className={"transaction-type__single__content"}>
                              <h4 className={"transaction-type__single__content__title"}>
                                {"Youtube"}
                              </h4>
                              <p className={"transaction-type__single__content__subtitle"}>
                                {"September"}
                              </p>
                            </div>
                            <div className={"transaction-type__single__rate"}>
                              <span className={"decrement"}>
                                {"- $200"}
                              </span>
                            </div>
                          </div>
                          <div className={"transaction-type__single"}>
                            <div className={"transaction-type__single__icon"}>
                              <img src={"/assets/img/avatar/t3.svg"} alt={"user"} />
                            </div>
                            <div className={"transaction-type__single__content"}>
                              <h4 className={"transaction-type__single__content__title"}>
                                {"Isabella Sirait"}
                              </h4>
                              <p className={"transaction-type__single__content__subtitle"}>
                                {"@thomasedis"}
                              </p>
                            </div>
                            <div className={"transaction-type__single__rate"}>
                              <span className={"increment"}>
                                {"+ $500"}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={"tab-pane fade"} id={"transaction-upcoming-content"} role={"tabpanel"} aria-labelledby={"transaction-upcoming-tab"}>
                      <div className={"transaction-content"}>
                        <div className={"transaction-type"}>
                          <div className={"transaction-type__single increment"}>
                            <div className={"transaction-type__single__icon"}>
                              <i className={"uil uil-arrow-up"} />
                            </div>
                            <div className={"transaction-type__single__content"}>
                              <h4 className={"transaction-type__single__content__title"}>
                                {"Bank Transfer"}
                              </h4>
                              <p className={"transaction-type__single__content__subtitle"}>
                                {"September 5th, 2020 at 11:56 AM"}
                              </p>
                            </div>
                          </div>
                          <div className={"transaction-type__single decrement"}>
                            <div className={"transaction-type__single__icon"}>
                              <i className={"uil uil-arrow-down"} />
                            </div>
                            <div className={"transaction-type__single__content"}>
                              <h4 className={"transaction-type__single__content__title"}>
                                {"Youtube Monthly Subcrition"}
                              </h4>
                              <p className={"transaction-type__single__content__subtitle"}>
                                {"September 5th, 2020 at 11:56 AM"}
                              </p>
                            </div>
                          </div>
                          <div className={"transaction-type__single increment"}>
                            <div className={"transaction-type__single__icon"}>
                              <i className={"uil uil-arrow-up"} />
                            </div>
                            <div className={"transaction-type__single__content"}>
                              <h4 className={"transaction-type__single__content__title"}>
                                {"Bank Transfer"}
                              </h4>
                              <p className={"transaction-type__single__content__subtitle"}>
                                {"September 5th, 2020 at 11:56 AM"}
                              </p>
                            </div>
                          </div>
                          <div className={"transaction-type__single decrement"}>
                            <div className={"transaction-type__single__icon"}>
                              <i className={"uil uil-arrow-down"} />
                            </div>
                            <div className={"transaction-type__single__content"}>
                              <h4 className={"transaction-type__single__content__title"}>
                                {"Paypal Transfer"}
                              </h4>
                              <p className={"transaction-type__single__content__subtitle"}>
                                {"November 24th, 2020 at 2:45 AM"}
                              </p>
                            </div>
                          </div>
                          <div className={"transaction-type__single decrement"}>
                            <div className={"transaction-type__single__icon"}>
                              <i className={"uil uil-arrow-down"} />
                            </div>
                            <div className={"transaction-type__single__content"}>
                              <h4 className={"transaction-type__single__content__title"}>
                                {"Upgrade Storage Plan"}
                              </h4>
                              <p className={"transaction-type__single__content__subtitle"}>
                                {"November 24th, 2020 at 2:45 AM"}
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className={"transaction-type"}>
                          <div className={"transaction-type__single"}>
                            <div className={"transaction-type__single__icon"}>
                              <img src={"/assets/img/avatar/t1.svg"} alt={"user"} />
                            </div>
                            <div className={"transaction-type__single__content"}>
                              <h4 className={"transaction-type__single__content__title"}>
                                {"Thomas Edison"}
                              </h4>
                              <p className={"transaction-type__single__content__subtitle"}>
                                {"@thomasedis"}
                              </p>
                            </div>
                            <div className={"transaction-type__single__rate"}>
                              <span className={"decrement"}>
                                {"- $98.21"}
                              </span>
                            </div>
                          </div>
                          <div className={"transaction-type__single"}>
                            <div className={"transaction-type__single__icon"}>
                              <img src={"/assets/img/icon/dropbox.svg"} alt={"user"} />
                            </div>
                            <div className={"transaction-type__single__content"}>
                              <h4 className={"transaction-type__single__content__title"}>
                                {"Dropbox"}
                              </h4>
                              <p className={"transaction-type__single__content__subtitle"}>
                                {"November"}
                              </p>
                            </div>
                            <div className={"transaction-type__single__rate"}>
                              <span className={"increment"}>
                                {"+ $200"}
                              </span>
                            </div>
                          </div>
                          <div className={"transaction-type__single"}>
                            <div className={"transaction-type__single__icon"}>
                              <img src={"/assets/img/avatar/t2.svg"} alt={"user"} />
                            </div>
                            <div className={"transaction-type__single__content"}>
                              <h4 className={"transaction-type__single__content__title"}>
                                {"Louis Khun"}
                              </h4>
                              <p className={"transaction-type__single__content__subtitle"}>
                                {"@thomasedis"}
                              </p>
                            </div>
                            <div className={"transaction-type__single__rate"}>
                              <span className={"increment"}>
                                {"+ $500"}
                              </span>
                            </div>
                          </div>
                          <div className={"transaction-type__single"}>
                            <div className={"transaction-type__single__icon"}>
                              <img src={"/assets/img/icon/youtube.svg"} alt={"user"} />
                            </div>
                            <div className={"transaction-type__single__content"}>
                              <h4 className={"transaction-type__single__content__title"}>
                                {"Youtube"}
                              </h4>
                              <p className={"transaction-type__single__content__subtitle"}>
                                {"September"}
                              </p>
                            </div>
                            <div className={"transaction-type__single__rate"}>
                              <span className={"decrement"}>
                                {"- $200"}
                              </span>
                            </div>
                          </div>
                          <div className={"transaction-type__single"}>
                            <div className={"transaction-type__single__icon"}>
                              <img src={"/assets/img/avatar/t3.svg"} alt={"user"} />
                            </div>
                            <div className={"transaction-type__single__content"}>
                              <h4 className={"transaction-type__single__content__title"}>
                                {"Isabella Sirait"}
                              </h4>
                              <p className={"transaction-type__single__content__subtitle"}>
                                {"@thomasedis"}
                              </p>
                            </div>
                            <div className={"transaction-type__single__rate"}>
                              <span className={"increment"}>
                                {"+ $500"}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={"tab-pane fade"} id={"transaction-request-content"} role={"tabpanel"} aria-labelledby={"transaction-request-tab"}>
                      <div className={"transaction-content"}>
                        <div className={"transaction-type"}>
                          <div className={"transaction-type__single increment"}>
                            <div className={"transaction-type__single__icon"}>
                              <i className={"uil uil-arrow-up"} />
                            </div>
                            <div className={"transaction-type__single__content"}>
                              <h4 className={"transaction-type__single__content__title"}>
                                {"Bank Transfer"}
                              </h4>
                              <p className={"transaction-type__single__content__subtitle"}>
                                {"September 5th, 2020 at 11:56 AM"}
                              </p>
                            </div>
                          </div>
                          <div className={"transaction-type__single decrement"}>
                            <div className={"transaction-type__single__icon"}>
                              <i className={"uil uil-arrow-down"} />
                            </div>
                            <div className={"transaction-type__single__content"}>
                              <h4 className={"transaction-type__single__content__title"}>
                                {"Paypal Transfer"}
                              </h4>
                              <p className={"transaction-type__single__content__subtitle"}>
                                {"November 24th, 2020 at 2:45 AM"}
                              </p>
                            </div>
                          </div>
                          <div className={"transaction-type__single increment"}>
                            <div className={"transaction-type__single__icon"}>
                              <i className={"uil uil-arrow-up"} />
                            </div>
                            <div className={"transaction-type__single__content"}>
                              <h4 className={"transaction-type__single__content__title"}>
                                {"Bank Transfer"}
                              </h4>
                              <p className={"transaction-type__single__content__subtitle"}>
                                {"September 5th, 2020 at 11:56 AM"}
                              </p>
                            </div>
                          </div>
                          <div className={"transaction-type__single decrement"}>
                            <div className={"transaction-type__single__icon"}>
                              <i className={"uil uil-arrow-down"} />
                            </div>
                            <div className={"transaction-type__single__content"}>
                              <h4 className={"transaction-type__single__content__title"}>
                                {"Youtube Monthly Subcrition"}
                              </h4>
                              <p className={"transaction-type__single__content__subtitle"}>
                                {"September 5th, 2020 at 11:56 AM"}
                              </p>
                            </div>
                          </div>
                          <div className={"transaction-type__single decrement"}>
                            <div className={"transaction-type__single__icon"}>
                              <i className={"uil uil-arrow-down"} />
                            </div>
                            <div className={"transaction-type__single__content"}>
                              <h4 className={"transaction-type__single__content__title"}>
                                {"Upgrade Storage Plan"}
                              </h4>
                              <p className={"transaction-type__single__content__subtitle"}>
                                {"November 24th, 2020 at 2:45 AM"}
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className={"transaction-type"}>
                          <div className={"transaction-type__single"}>
                            <div className={"transaction-type__single__icon"}>
                              <img src={"/assets/img/avatar/t2.svg"} alt={"user"} />
                            </div>
                            <div className={"transaction-type__single__content"}>
                              <h4 className={"transaction-type__single__content__title"}>
                                {"Louis Khun"}
                              </h4>
                              <p className={"transaction-type__single__content__subtitle"}>
                                {"@thomasedis"}
                              </p>
                            </div>
                            <div className={"transaction-type__single__rate"}>
                              <span className={"increment"}>
                                {"+ $500"}
                              </span>
                            </div>
                          </div>
                          <div className={"transaction-type__single"}>
                            <div className={"transaction-type__single__icon"}>
                              <img src={"/assets/img/icon/youtube.svg"} alt={"user"} />
                            </div>
                            <div className={"transaction-type__single__content"}>
                              <h4 className={"transaction-type__single__content__title"}>
                                {"Youtube"}
                              </h4>
                              <p className={"transaction-type__single__content__subtitle"}>
                                {"September"}
                              </p>
                            </div>
                            <div className={"transaction-type__single__rate"}>
                              <span className={"decrement"}>
                                {"- $200"}
                              </span>
                            </div>
                          </div>
                          <div className={"transaction-type__single"}>
                            <div className={"transaction-type__single__icon"}>
                              <img src={"/assets/img/avatar/t3.svg"} alt={"user"} />
                            </div>
                            <div className={"transaction-type__single__content"}>
                              <h4 className={"transaction-type__single__content__title"}>
                                {"Isabella Sirait"}
                              </h4>
                              <p className={"transaction-type__single__content__subtitle"}>
                                {"@thomasedis"}
                              </p>
                            </div>
                            <div className={"transaction-type__single__rate"}>
                              <span className={"increment"}>
                                {"+ $500"}
                              </span>
                            </div>
                          </div>
                          <div className={"transaction-type__single"}>
                            <div className={"transaction-type__single__icon"}>
                              <img src={"/assets/img/avatar/t1.svg"} alt={"user"} />
                            </div>
                            <div className={"transaction-type__single__content"}>
                              <h4 className={"transaction-type__single__content__title"}>
                                {"Thomas Edison"}
                              </h4>
                              <p className={"transaction-type__single__content__subtitle"}>
                                {"@thomasedis"}
                              </p>
                            </div>
                            <div className={"transaction-type__single__rate"}>
                              <span className={"decrement"}>
                                {"- $98.21"}
                              </span>
                            </div>
                          </div>
                          <div className={"transaction-type__single"}>
                            <div className={"transaction-type__single__icon"}>
                              <img src={"/assets/img/icon/dropbox.svg"} alt={"user"} />
                            </div>
                            <div className={"transaction-type__single__content"}>
                              <h4 className={"transaction-type__single__content__title"}>
                                {"Dropbox"}
                              </h4>
                              <p className={"transaction-type__single__content__subtitle"}>
                                {"November"}
                              </p>
                            </div>
                            <div className={"transaction-type__single__rate"}>
                              <span className={"increment"}>
                                {"+ $200"}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={"geex-content__section__header__btn"}>
                    <a href={"#"} className={"geex-btn load-more-btn"}>
                      {" Load More "}
                      <i className={"uil uil-angle-down"} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className={"geex-content__widget"}>
              <div className={"geex-content__widget__single mb-20"}>
                <div className={"geex-content__widget__single__mastercard"}>
                  <div className={"geex-content__widget__single__mastercard__top"}>
                    <div className={"single-content mb-30"}>
                      <div className={"geex-content__widget__single__mastercard__top__content"}>
                        <p className={"geex-content__widget__single__mastercard__top__subtitle"}>
                          {"Your Balance"}
                        </p>
                        <h2 className={"geex-content__widget__single__mastercard__top__title"}>
                          {"$ 9,425"}
                        </h2>
                      </div>
                      <div className={"geex-content__widget__single__mastercard__top__icon"}>
                        <a href={"#"}>
                          <i className={"uil uil-ellipsis-h"} />
                        </a>
                      </div>
                    </div>
                    <div className={"single-content"}>
                      <div className={"geex-content__widget__single__mastercard__top__content"}>
                        <span>
                          {"2451 **** **** ****"}
                        </span>
                      </div>
                      <div className={"geex-content__widget__single__mastercard__top__date"}>
                        <span>
                          {"02/21"}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className={"geex-content__widget__single__mastercard__bottom single-content"}>
                    <div className={"geex-content__widget__single__mastercard__bottom__content"}>
                      <p className={"geex-content__widget__single__mastercard__bottom__subtitle"}>
                        {"Name"}
                      </p>
                      <h2 className={"geex-content__widget__single__mastercard__bottom__title"}>
                        {"David Bekam"}
                      </h2>
                    </div>
                    <div className={"geex-content__widget__single__mastercard__bottom__icon"}>
                      <img src={"/assets/img/icon/mastercard-icon.svg"} alt={"mastercard"} />
                      <span className={"card-name"}>
                        {"Mastersef"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className={"geex-content__widget__single mb-20"}>
                <div className={"geex-content__widget__single__header"}>
                  <h4 className={"geex-content__widget__single__title"}>
                    {"Recent Transfer"}
                  </h4>
                  <p className={"geex-content__widget__single__subtitle"}>
                    {"Maiores dicta atque dolorem temporibus "}
                  </p>
                </div>
                <div className={"geex-content__widget__single__content"}>
                  <ul className={"geex-content__widget__single__transfer-img"}>
                    <li className={"geex-content__widget__single__transfer-img__single trending"}>
                      <a href={"#"} className={"geex-content__widget__single__transfer-img__link"}>
                        <img src={"/assets/img/avatar/t1.svg"} alt={"user"} />
                      </a>
                    </li>
                    <li className={"geex-content__widget__single__transfer-img__single transparent"}>
                      <a href={"#"} className={"geex-content__widget__single__transfer-img__link"}>
                        <img src={"/assets/img/avatar/t2.svg"} alt={"user"} />
                      </a>
                    </li>
                    <li className={"geex-content__widget__single__transfer-img__single trending"}>
                      <a href={"#"} className={"geex-content__widget__single__transfer-img__link"}>
                        <img src={"/assets/img/avatar/t3.svg"} alt={"user"} />
                      </a>
                    </li>
                    <li className={"geex-content__widget__single__transfer-img__single"}>
                      <a href={"#"} className={"geex-content__widget__single__transfer-img__link"}>
                        <i className={"uil uil-navigator"} />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className={"geex-content__widget__single"}>
                <div className={"geex-content__widget__single__header"}>
                  <h4 className={"geex-content__widget__single__title"}>
                    {"Spending Categories"}
                  </h4>
                  <p className={"geex-content__widget__single__subtitle"}>
                    {"Maiores dicta atque dolorem temporibus"}
                  </p>
                </div>
                <div className={"geex-content__widget__single__content"}>
                  <div className={"geex-content__widget__single__progress primary mb-30"}>
                    <div className={"geex-content__widget__single__progress__icon"}>
                      <i className={"uil uil-info-circle"} />
                    </div>
                    <div className={"geex-content__widget__single__progress__text"}>
                      <h4 className={"geex-content__widget__single__progress__title"}>
                        {"Installment"}
                      </h4>
                      <div className={"geex-content__widget__single__progressbar"}>
                        <div className={"geex-content__widget__single__progressbar__inner"} style={{"width":"80%"}} />
                      </div>
                      <p className={"geex-content__widget__single__progress__subtitle"}>
                        <span>
                          {"$ 420.26 Used"}
                        </span>
                        {" /from $ 1,000"}
                      </p>
                    </div>
                  </div>
                  <div className={"geex-content__widget__single__progress success mb-30"}>
                    <div className={"geex-content__widget__single__progress__icon"}>
                      <i className={"uil uil-info-circle"} />
                    </div>
                    <div className={"geex-content__widget__single__progress__text"}>
                      <h4 className={"geex-content__widget__single__progress__title"}>
                        {"Restaurant"}
                      </h4>
                      <div className={"geex-content__widget__single__progressbar"}>
                        <div className={"geex-content__widget__single__progressbar__inner"} style={{"width":"80%"}} />
                      </div>
                      <p className={"geex-content__widget__single__progress__subtitle"}>
                        <span>
                          {"$ 420.26 Used"}
                        </span>
                        {" /from $ 1,000"}
                      </p>
                    </div>
                  </div>
                  <div className={"geex-content__widget__single__progress warning mb-30"}>
                    <div className={"geex-content__widget__single__progress__icon"}>
                      <i className={"uil uil-info-circle"} />
                    </div>
                    <div className={"geex-content__widget__single__progress__text"}>
                      <h4 className={"geex-content__widget__single__progress__title"}>
                        {"Transport"}
                      </h4>
                      <div className={"geex-content__widget__single__progressbar"}>
                        <div className={"geex-content__widget__single__progressbar__inner"} style={{"width":"65%"}} />
                      </div>
                      <p className={"geex-content__widget__single__progress__subtitle"}>
                        <span>
                          {"$ 420.26 Used"}
                        </span>
                        {" /from $ 1,000"}
                      </p>
                    </div>
                  </div>
                  <div className={"geex-content__widget__single__progress info mb-30"}>
                    <div className={"geex-content__widget__single__progress__icon"}>
                      <i className={"uil uil-info-circle"} />
                    </div>
                    <div className={"geex-content__widget__single__progress__text"}>
                      <h4 className={"geex-content__widget__single__progress__title"}>
                        {"Holiday"}
                      </h4>
                      <div className={"geex-content__widget__single__progressbar"}>
                        <div className={"geex-content__widget__single__progressbar__inner"} style={{"width":"70%"}} />
                      </div>
                      <p className={"geex-content__widget__single__progress__subtitle"}>
                        <span>
                          {"$ 420.26 Used"}
                        </span>
                        {" /from $ 1,000"}
                      </p>
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
