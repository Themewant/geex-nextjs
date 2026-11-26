import Customizer from "@/components/Customizer";
import Header from "@/components/Header";
import HeaderActions from "@/components/HeaderActions";
import Sidebar from "@/components/Sidebar";
import GeexResources from "@/components/GeexResources";
export const metadata = { title: "Chat - Geex Dashboard", icons: { icon: "/assets/img/favicon.svg" } };

export default function ChatPage() {
  return (
    <>
      <GeexResources styles={["/assets/vendor/css/bootstrap/bootstrap.css","/assets/vendor/css/swiper.min.css","/assets/css/style.css","https://cdn.jsdelivr.net/npm/@iconscout/unicons@4.0.8/css/line.min.css"]} scripts={["/assets/vendor/js/jquery/jquery-3.5.1.min.js","/assets/vendor/js/jquery/jquery-ui.js","/assets/vendor/js/bootstrap/bootstrap.min.js","/assets/vendor/js/swiper.min.js","/assets/vendor/js/apexcharts.min.js","/assets/js/main.js"]} />
      <Header />
      <main className={"geex-main-content"}>
        <Sidebar />
        <Customizer />
        <div className={"geex-content"}>
          <div className={"geex-content__header"}>
            <div className={"geex-content__header__content"}>
              <h2 className={"geex-content__header__title"}>
                {"Chat"}
              </h2>
              <p className={"geex-content__header__subtitle"}>
                {"Form Elements is used to style and format the input field"}
              </p>
            </div>
            <HeaderActions />
          </div>
          <div className={"geex-content__wrapper"}>
            <div className={"geex-content__section-wrapper"}>
              <div className={"geex-content__section geex-content__section--transparent geex-content__chat"}>
                <button className={"geex-btn geex-content__chat__toggle"}>
                  <i className={"uil-bars"} />
                  {" Chat List "}
                </button>
                <div className={"geex-content__chat__sidebar"}>
                  <div className={"geex-content__chat__sidebar__searchform"}>
                    <div className={"geex-content__chat__sidebar__searchform__search"}>
                      <input type={"text"} placeholder={"Search"} className={"geex-content__header__btn"} />
                      <i className={"uil uil-search"} />
                    </div>
                    <button className={"geex-content__chat__sidebar__searchform__btn"}>
                      <i className={"uil-plus"} />
                    </button>
                  </div>
                  <ul className={"nav nav-tabs geex-content__chat__sidebar__tab mb-20"} role={"tablist"}>
                    <span className={"geex-content__chat__sidebar__tab__title"}>
                      {"Pinned Message"}
                    </span>
                    <li className={"nav-item"} role={"presentation"}>
                      <a href={"#"} className={"nav-link unread active"} id={"geex-chat-tab-1"} data-bs-toggle={"tab"} data-bs-target={"#geex-chat-content-1"} type={"button"} role={"tab"} aria-controls={"geex-chat-content-1"} aria-selected={"true"}>
                        <div className={"geex-chat-tab-single"}>
                          <div className={"geex-chat-tab-single__img"}>
                            <img src={"/assets/img/avatar/chat/1.svg"} alt={"avatar"} />
                            <span className={"geex-chat-tab-single__status"} />
                          </div>
                          <div className={"geex-chat-tab-single__content"}>
                            <div className={"geex-chat-tab-single__message"}>
                              <h4 className={"geex-chat-tab-single__title"}>
                                {"Robert Johanson"}
                              </h4>
                              <span className={"geex-chat-tab-single__subtitle"}>
                                {"Hi David, can you send your..."}
                              </span>
                            </div>
                            <div className={"geex-chat-tab-single__info"}>
                              <span className={"geex-chat-tab-single__info__time"}>
                                {"2min ago"}
                              </span>
                              <span className={"geex-chat-tab-single__info__count"}>
                                {"2"}
                              </span>
                            </div>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li className={"nav-item"} role={"presentation"}>
                      <a href={"#"} className={"nav-link"} id={"geex-chat-tab-2"} data-bs-toggle={"tab"} data-bs-target={"#geex-chat-content-2"} type={"button"} role={"tab"} aria-controls={"geex-chat-content-2"} aria-selected={"true"}>
                        <div className={"geex-chat-tab-single"}>
                          <div className={"geex-chat-tab-single__img"}>
                            <img src={"/assets/img/avatar/chat/1.svg"} alt={"avatar"} />
                            <span className={"geex-chat-tab-single__status active"} />
                          </div>
                          <div className={"geex-chat-tab-single__content"}>
                            <div className={"geex-chat-tab-single__message"}>
                              <h4 className={"geex-chat-tab-single__title"}>
                                {"Robert Johanson"}
                              </h4>
                              <span className={"geex-chat-tab-single__subtitle"}>
                                {"Hi David, can you send your..."}
                              </span>
                            </div>
                            <div className={"geex-chat-tab-single__info"}>
                              <svg width={"28"} height={"28"} viewBox={"0 0 28 28"} fill={"none"} xmlns={"http://www.w3.org/2000/svg"}>
                                <path d={"M23.6181 4.46941C23.4111 4.23957 23.1213 4.10135 22.8124 4.08517C22.5034 4.06898 22.2007 4.17613 21.9708 4.38308L11.1266 14.1422L6.07615 9.09175C5.96853 8.98032 5.83979 8.89144 5.69745 8.83029C5.55512 8.76915 5.40203 8.73697 5.24712 8.73562C5.09221 8.73427 4.93858 8.76379 4.7952 8.82245C4.65182 8.88111 4.52156 8.96774 4.41202 9.07729C4.30248 9.18683 4.21585 9.31709 4.15719 9.46047C4.09853 9.60385 4.06901 9.75747 4.07036 9.91238C4.0717 10.0673 4.10389 10.2204 4.16503 10.3627C4.22617 10.5051 4.31505 10.6338 4.42648 10.7414L10.2598 16.5747C10.4711 16.786 10.7554 16.9081 11.0541 16.9159C11.3528 16.9237 11.6431 16.8166 11.8651 16.6167L23.5318 6.11675C23.7617 5.90971 23.8999 5.61987 23.9161 5.31095C23.9323 5.00204 23.8251 4.69934 23.6181 4.46941Z"} fill={"#A3A3A3"} />
                                <path d={"M21.9695 11.3831L11.1253 21.1423L6.07482 16.0918C5.85478 15.8793 5.56008 15.7617 5.25419 15.7644C4.94829 15.767 4.65567 15.8897 4.43937 16.106C4.22306 16.3223 4.10036 16.6149 4.0977 16.9208C4.09504 17.2267 4.21264 17.5214 4.42515 17.7415L10.2585 23.5748C10.4698 23.786 10.7541 23.9082 11.0528 23.916C11.3515 23.9238 11.6418 23.8167 11.8638 23.6168L23.5305 13.1168C23.7534 12.908 23.8855 12.6201 23.8985 12.3149C23.9114 12.0098 23.8042 11.7117 23.5999 11.4847C23.3955 11.2578 23.1103 11.12 22.8054 11.101C22.5006 11.082 22.2005 11.1833 21.9695 11.3831Z"} fill={"#A3A3A3"} />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li className={"nav-item"} role={"presentation"}>
                      <a href={"#"} className={"nav-link unread"} id={"geex-chat-tab-3"} data-bs-toggle={"tab"} data-bs-target={"#geex-chat-content-3"} type={"button"} role={"tab"} aria-controls={"geex-chat-task-3"} aria-selected={"true"}>
                        <div className={"geex-chat-tab-single"}>
                          <div className={"geex-chat-tab-single__img"}>
                            <img src={"/assets/img/avatar/chat/1.svg"} alt={"avatar"} />
                            <span className={"geex-chat-tab-single__status"} />
                          </div>
                          <div className={"geex-chat-tab-single__content"}>
                            <div className={"geex-chat-tab-single__message"}>
                              <h4 className={"geex-chat-tab-single__title"}>
                                {"Chloe Jess"}
                              </h4>
                              <span className={"geex-chat-tab-single__subtitle"}>
                                {"I have done my task last week.."}
                              </span>
                            </div>
                            <div className={"geex-chat-tab-single__info"}>
                              <span className={"geex-chat-tab-single__info__time"}>
                                {"27 ago"}
                              </span>
                              <span className={"geex-chat-tab-single__info__count"}>
                                {"48"}
                              </span>
                            </div>
                          </div>
                        </div>
                      </a>
                    </li>
                  </ul>
                  <ul className={"nav nav-tabs geex-content__chat__sidebar__tab mb-20"} role={"tablist"}>
                    <span className={"geex-content__chat__sidebar__tab__title"}>
                      {"Recent Message"}
                    </span>
                    <li className={"nav-item"} role={"presentation"}>
                      <a href={"#"} className={"nav-link unread"} id={"geex-chat-tab-4"} data-bs-toggle={"tab"} data-bs-target={"#geex-chat-content-4"} type={"button"} role={"tab"} aria-controls={"geex-chat-content-4"} aria-selected={"true"}>
                        <div className={"geex-chat-tab-single"}>
                          <div className={"geex-chat-tab-single__img"}>
                            <img src={"/assets/img/avatar/chat/1.svg"} alt={"avatar"} />
                            <span className={"geex-chat-tab-single__status"} />
                          </div>
                          <div className={"geex-chat-tab-single__content"}>
                            <div className={"geex-chat-tab-single__message"}>
                              <h4 className={"geex-chat-tab-single__title"}>
                                {"Robert Johanson"}
                              </h4>
                              <span className={"geex-chat-tab-single__subtitle"}>
                                {"Hi David, can you send your..."}
                              </span>
                            </div>
                            <div className={"geex-chat-tab-single__info"}>
                              <span className={"geex-chat-tab-single__info__time"}>
                                {"2min ago"}
                              </span>
                              <span className={"geex-chat-tab-single__info__count"}>
                                {"2"}
                              </span>
                            </div>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li className={"nav-item"} role={"presentation"}>
                      <a href={"#"} className={"nav-link"} id={"geex-chat-tab-5"} data-bs-toggle={"tab"} data-bs-target={"#geex-chat-content-5"} type={"button"} role={"tab"} aria-controls={"geex-chat-content-5"} aria-selected={"true"}>
                        <div className={"geex-chat-tab-single"}>
                          <div className={"geex-chat-tab-single__img"}>
                            <img src={"/assets/img/avatar/chat/1.svg"} alt={"avatar"} />
                            <span className={"geex-chat-tab-single__status active"} />
                          </div>
                          <div className={"geex-chat-tab-single__content"}>
                            <div className={"geex-chat-tab-single__message"}>
                              <h4 className={"geex-chat-tab-single__title"}>
                                {"Robert Johanson"}
                              </h4>
                              <span className={"geex-chat-tab-single__subtitle"}>
                                {"Hi David, can you send your..."}
                              </span>
                            </div>
                            <div className={"geex-chat-tab-single__info"}>
                              <svg width={"28"} height={"28"} viewBox={"0 0 28 28"} fill={"none"} xmlns={"http://www.w3.org/2000/svg"}>
                                <path d={"M23.6181 4.46941C23.4111 4.23957 23.1213 4.10135 22.8124 4.08517C22.5034 4.06898 22.2007 4.17613 21.9708 4.38308L11.1266 14.1422L6.07615 9.09175C5.96853 8.98032 5.83979 8.89144 5.69745 8.83029C5.55512 8.76915 5.40203 8.73697 5.24712 8.73562C5.09221 8.73427 4.93858 8.76379 4.7952 8.82245C4.65182 8.88111 4.52156 8.96774 4.41202 9.07729C4.30248 9.18683 4.21585 9.31709 4.15719 9.46047C4.09853 9.60385 4.06901 9.75747 4.07036 9.91238C4.0717 10.0673 4.10389 10.2204 4.16503 10.3627C4.22617 10.5051 4.31505 10.6338 4.42648 10.7414L10.2598 16.5747C10.4711 16.786 10.7554 16.9081 11.0541 16.9159C11.3528 16.9237 11.6431 16.8166 11.8651 16.6167L23.5318 6.11675C23.7617 5.90971 23.8999 5.61987 23.9161 5.31095C23.9323 5.00204 23.8251 4.69934 23.6181 4.46941Z"} fill={"#A3A3A3"} />
                                <path d={"M21.9695 11.3831L11.1253 21.1423L6.07482 16.0918C5.85478 15.8793 5.56008 15.7617 5.25419 15.7644C4.94829 15.767 4.65567 15.8897 4.43937 16.106C4.22306 16.3223 4.10036 16.6149 4.0977 16.9208C4.09504 17.2267 4.21264 17.5214 4.42515 17.7415L10.2585 23.5748C10.4698 23.786 10.7541 23.9082 11.0528 23.916C11.3515 23.9238 11.6418 23.8167 11.8638 23.6168L23.5305 13.1168C23.7534 12.908 23.8855 12.6201 23.8985 12.3149C23.9114 12.0098 23.8042 11.7117 23.5999 11.4847C23.3955 11.2578 23.1103 11.12 22.8054 11.101C22.5006 11.082 22.2005 11.1833 21.9695 11.3831Z"} fill={"#A3A3A3"} />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li className={"nav-item"} role={"presentation"}>
                      <a href={"#"} className={"nav-link unread"} id={"geex-chat-tab-6"} data-bs-toggle={"tab"} data-bs-target={"#geex-chat-content-6"} type={"button"} role={"tab"} aria-controls={"geex-chat-content-6"} aria-selected={"true"}>
                        <div className={"geex-chat-tab-single"}>
                          <div className={"geex-chat-tab-single__img"}>
                            <img src={"/assets/img/avatar/chat/1.svg"} alt={"avatar"} />
                            <span className={"geex-chat-tab-single__status"} />
                          </div>
                          <div className={"geex-chat-tab-single__content"}>
                            <div className={"geex-chat-tab-single__message"}>
                              <h4 className={"geex-chat-tab-single__title"}>
                                {"Chloe Jess"}
                              </h4>
                              <span className={"geex-chat-tab-single__subtitle"}>
                                {"I have done my task last week.."}
                              </span>
                            </div>
                            <div className={"geex-chat-tab-single__info"}>
                              <span className={"geex-chat-tab-single__info__time"}>
                                {"27 ago"}
                              </span>
                              <span className={"geex-chat-tab-single__info__count"}>
                                {"48"}
                              </span>
                            </div>
                          </div>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className={"tab-content geex-content__chat__content"}>
                  <div className={"tab-pane fade show active"} id={"geex-chat-content-1"} role={"tabpanel"} aria-labelledby={"geex-chat-tab-1"}>
                    <div className={"geex-content__chat__content"}>
                      <div className={"geex-content__chat__header"}>
                        <div className={"geex-content__chat__header__img"}>
                          <img src={"/assets/img/avatar/chat/1.svg"} alt={"avatar"} />
                        </div>
                        <div className={"geex-content__chat__header__content"}>
                          <div className={"geex-content__chat__header__text"}>
                            <h4 className={"geex-content__chat__header__title"}>
                              {"Robert Johanson"}
                            </h4>
                            <span className={"geex-content__chat__header__subtitle"}>
                              <i className={"uil-users-alt"} />
                              {"24 Members "}
                            </span>
                          </div>
                          <ul className={"geex-content__chat__header__filter"}>
                            <li>
                              <a href={"#"} className={"geex-content__chat__header__filter__mute-btn"}>
                                <i className={"uil-bell-slash"} />
                              </a>
                            </li>
                            <li>
                              <a href={"#"} className={"geex-content__chat__header__filter__btn"}>
                                <i className={"uil-search"} />
                              </a>
                              <div className={"geex-content__chat__header__filter__content geex-content__header__searchform"}>
                                <input type={"text"} placeholder={"Search"} className={"geex-content__header__btn"} />
                                <i className={"uil uil-search"} />
                              </div>
                            </li>
                            <li>
                              <a href={"#"} className={"geex-content__chat__header__filter__btn"}>
                                <i className={"uil-info-circle"} />
                              </a>
                              <div className={"geex-content__chat__header__filter__content"}>
                                <ul className={"geex-content__chat__header__filter__content__list"}>
                                  <li className={"geex-content__chat__header__filter__content__list__item"}>
                                    {"Status: "}
                                    <span>
                                      {"Active"}
                                    </span>
                                    <span className={"status-icon"} />
                                  </li>
                                  <li className={"geex-content__chat__header__filter__content__list__item"}>
                                    {"Name: "}
                                    <a href={"#"} className={"geex-content__chat__header__filter__content__list__link"}>
                                      {"James Cameron"}
                                    </a>
                                  </li>
                                  <li className={"geex-content__chat__header__filter__content__list__item"}>
                                    {"Email: "}
                                    <a href={"#"} className={"geex-content__chat__header__filter__content__list__link"}>
                                      {"james@cameron.com"}
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </li>
                            <li>
                              <a href={"#"} className={"geex-content__chat__header__filter__btn"}>
                                <i className={"uil-ellipsis-v"} />
                              </a>
                              <div className={"geex-content__chat__header__filter__content"}>
                                <ul className={"geex-content__chat__header__filter__content__list"}>
                                  <li className={"geex-content__chat__header__filter__content__list__item"}>
                                    <a href={"#"} className={"geex-content__chat__header__filter__content__list__link"}>
                                      {"Mute Notification"}
                                    </a>
                                  </li>
                                  <li className={"geex-content__chat__header__filter__content__list__item"}>
                                    <a href={"#"} className={"geex-content__chat__header__filter__content__list__link"}>
                                      {"Change Background"}
                                    </a>
                                  </li>
                                  <li className={"geex-content__chat__header__filter__content__list__item"}>
                                    <a href={"#"} className={"geex-content__chat__header__filter__content__list__link"}>
                                      {"Change Emoji"}
                                    </a>
                                  </li>
                                  <li className={"geex-content__chat__header__filter__content__list__item"}>
                                    <a href={"#"} className={"geex-content__chat__header__filter__content__list__link"}>
                                      {"Block User"}
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className={"geex-content__chat__list"}>
                        <div className={"geex-content__chat__list__single"}>
                          <div className={"geex-content__chat__list__single__img"}>
                            <img src={"/assets/img/avatar/chat/1.svg"} alt={"avatar"} />
                            <span className={"active"} />
                          </div>
                          <div className={"geex-content__chat__list__single__text"}>
                            <span className={"geex-content__chat__list__single__title"}>
                              {"Ria Tamaguchi"}
                            </span>
                            <span className={"geex-content__chat__list__single__msg"}>
                              {"Hi everyone! Let’s start our discussion now about kick off meeting next week."}
                            </span>
                            <span className={"geex-content__chat__list__single__msg latest"}>
                              {"Is everyone ok about that schedule?"}
                            </span>
                          </div>
                        </div>
                        <div className={"geex-content__chat__list__single"}>
                          <div className={"geex-content__chat__list__single__img"}>
                            <img src={"/assets/img/avatar/chat/1.svg"} alt={"avatar"} />
                            <span className={"active"} />
                          </div>
                          <div className={"geex-content__chat__list__single__text"}>
                            <span className={"geex-content__chat__list__single__title"}>
                              {"Joe Takeshi"}
                            </span>
                            <span className={"geex-content__chat__list__single__msg latest"}>
                              {"Hi "}
                              <a href={"#"}>
                                {"@chloe"}
                              </a>
                              {", I agree with that schedule. I have accepted your meeting inviataition"}
                            </span>
                          </div>
                        </div>
                        <div className={"geex-content__chat__list__single active"}>
                          <div className={"geex-content__chat__list__single__img"}>
                            <img src={"/assets/img/avatar/chat/1.svg"} alt={"avatar"} />
                            <span className={"active"} />
                          </div>
                          <div className={"geex-content__chat__list__single__text"}>
                            <span className={"geex-content__chat__list__single__title"}>
                              {"David Bekam"}
                            </span>
                            <span className={"geex-content__chat__list__single__msg"}>
                              {"Hi everyone! Let’s start our discussion now about kick off meeting next week."}
                            </span>
                            <span className={"geex-content__chat__list__single__msg latest"}>
                              {"Is everyone ok about that schedule?"}
                            </span>
                          </div>
                        </div>
                        <div className={"geex-content__chat__list__single active"}>
                          <div className={"geex-content__chat__list__single__img"}>
                            <img src={"/assets/img/avatar/chat/1.svg"} alt={"avatar"} />
                            <span className={"active"} />
                          </div>
                          <div className={"geex-content__chat__list__single__text"}>
                            <span className={"geex-content__chat__list__single__title"}>
                              {"Joe Takeshi"}
                            </span>
                            <span className={"geex-content__chat__list__single__msg latest"}>
                              {"Is everyone ok about that schedule?"}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className={"geex-content__chat__send"}>
                        <div className={"geex-content__chat__send__input"}>
                          <input placeholder={"Type your message..."} name={"chat"} id={"chat"} defaultValue={""} />
                        </div>
                        <div className={"geex-content__chat__send__action"}>
                          <div className={"geex-content__chat__action__toggle__content"}>
                            <div className={"geex-content__chat__send__action__wrap"}>
                              <div className={"geex-content__chat__send__action__single"}>
                                <input type={"file"} />
                                <i className={"uil uil-camera"} />
                              </div>
                              <div className={"geex-content__chat__send__action__single"}>
                                <input type={"file"} />
                                <i className={"uil uil-link"} />
                              </div>
                            </div>
                          </div>
                          <button className={"geex-btn geex-content__chat__action__toggle__btn"}>
                            <i className={"uil-ellipsis-h"} />
                          </button>
                          <button type={"submit"} className={"btn-send"}>
                            <i className={"uil uil-message"} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={"tab-pane fade"} id={"geex-chat-content-2"} role={"tabpanel"} aria-labelledby={"geex-chat-tab-2"}>
                    <div className={"geex-content__chat__content"}>
                      <div className={"geex-content__chat__header"}>
                        <div className={"geex-content__chat__header__img"}>
                          <img src={"/assets/img/avatar/chat/1.svg"} alt={"avatar"} />
                        </div>
                        <div className={"geex-content__chat__header__content"}>
                          <div className={"geex-content__chat__header__text"}>
                            <h4 className={"geex-content__chat__header__title"}>
                              {"Robert Johanson"}
                            </h4>
                            <span className={"geex-content__chat__header__subtitle"}>
                              <i className={"uil-users-alt"} />
                              {"24 Members "}
                            </span>
                          </div>
                          <ul className={"geex-content__chat__header__filter"}>
                            <li>
                              <a href={"#"} className={"geex-content__chat__header__filter__mute-btn"}>
                                <i className={"uil-bell-slash"} />
                              </a>
                            </li>
                            <li>
                              <a href={"#"} className={"geex-content__chat__header__filter__btn"}>
                                <i className={"uil-search"} />
                              </a>
                              <div className={"geex-content__chat__header__filter__content geex-content__header__searchform"}>
                                <input type={"text"} placeholder={"Search"} className={"geex-content__header__btn"} />
                                <i className={"uil uil-search"} />
                              </div>
                            </li>
                            <li>
                              <a href={"#"} className={"geex-content__chat__header__filter__btn"}>
                                <i className={"uil-info-circle"} />
                              </a>
                              <div className={"geex-content__chat__header__filter__content"}>
                                <ul className={"geex-content__chat__header__filter__content__list"}>
                                  <li className={"geex-content__chat__header__filter__content__list__item"}>
                                    {"Status: "}
                                    <span>
                                      {"Active"}
                                    </span>
                                    <span className={"status-icon"} />
                                  </li>
                                  <li className={"geex-content__chat__header__filter__content__list__item"}>
                                    {"Name: "}
                                    <a href={"#"} className={"geex-content__chat__header__filter__content__list__link"}>
                                      {"James Cameron"}
                                    </a>
                                  </li>
                                  <li className={"geex-content__chat__header__filter__content__list__item"}>
                                    {"Email: "}
                                    <a href={"#"} className={"geex-content__chat__header__filter__content__list__link"}>
                                      {"james@cameron.com"}
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </li>
                            <li>
                              <a href={"#"} className={"geex-content__chat__header__filter__btn"}>
                                <i className={"uil-ellipsis-v"} />
                              </a>
                              <div className={"geex-content__chat__header__filter__content"}>
                                <ul className={"geex-content__chat__header__filter__content__list"}>
                                  <li className={"geex-content__chat__header__filter__content__list__item"}>
                                    <a href={"#"} className={"geex-content__chat__header__filter__content__list__link"}>
                                      {"Mute Notification"}
                                    </a>
                                  </li>
                                  <li className={"geex-content__chat__header__filter__content__list__item"}>
                                    <a href={"#"} className={"geex-content__chat__header__filter__content__list__link"}>
                                      {"Change Background"}
                                    </a>
                                  </li>
                                  <li className={"geex-content__chat__header__filter__content__list__item"}>
                                    <a href={"#"} className={"geex-content__chat__header__filter__content__list__link"}>
                                      {"Change Emoji"}
                                    </a>
                                  </li>
                                  <li className={"geex-content__chat__header__filter__content__list__item"}>
                                    <a href={"#"} className={"geex-content__chat__header__filter__content__list__link"}>
                                      {"Block User"}
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className={"geex-content__chat__list"}>
                        <div className={"geex-content__chat__list__single"}>
                          <div className={"geex-content__chat__list__single__img"}>
                            <img src={"/assets/img/avatar/chat/1.svg"} alt={"avatar"} />
                            <span className={"active"} />
                          </div>
                          <div className={"geex-content__chat__list__single__text"}>
                            <span className={"geex-content__chat__list__single__title"}>
                              {"Ria Tamaguchi"}
                            </span>
                            <span className={"geex-content__chat__list__single__msg"}>
                              {"Hi everyone! Let’s start our discussion now about kick off meeting next week."}
                            </span>
                            <span className={"geex-content__chat__list__single__msg latest"}>
                              {"Is everyone ok about that schedule?"}
                            </span>
                          </div>
                        </div>
                        <div className={"geex-content__chat__list__single"}>
                          <div className={"geex-content__chat__list__single__img"}>
                            <img src={"/assets/img/avatar/chat/1.svg"} alt={"avatar"} />
                            <span className={"active"} />
                          </div>
                          <div className={"geex-content__chat__list__single__text"}>
                            <span className={"geex-content__chat__list__single__title"}>
                              {"Joe Takeshi"}
                            </span>
                            <span className={"geex-content__chat__list__single__msg latest"}>
                              {"Hi "}
                              <a href={"#"}>
                                {"@chloe"}
                              </a>
                              {", I agree with that schedule. I have accepted your meeting inviataition"}
                            </span>
                          </div>
                        </div>
                        <div className={"geex-content__chat__list__single active"}>
                          <div className={"geex-content__chat__list__single__img"}>
                            <img src={"/assets/img/avatar/chat/1.svg"} alt={"avatar"} />
                            <span className={"active"} />
                          </div>
                          <div className={"geex-content__chat__list__single__text"}>
                            <span className={"geex-content__chat__list__single__title"}>
                              {"David Bekam"}
                            </span>
                            <span className={"geex-content__chat__list__single__msg"}>
                              {"Hi everyone! Let’s start our discussion now about kick off meeting next week."}
                            </span>
                            <span className={"geex-content__chat__list__single__msg latest"}>
                              {"Is everyone ok about that schedule?"}
                            </span>
                          </div>
                        </div>
                        <div className={"geex-content__chat__list__single active"}>
                          <div className={"geex-content__chat__list__single__img"}>
                            <img src={"/assets/img/avatar/chat/1.svg"} alt={"avatar"} />
                            <span className={"active"} />
                          </div>
                          <div className={"geex-content__chat__list__single__text"}>
                            <span className={"geex-content__chat__list__single__title"}>
                              {"Joe Takeshi"}
                            </span>
                            <span className={"geex-content__chat__list__single__msg latest"}>
                              {"Is everyone ok about that schedule?"}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className={"geex-content__chat__send"}>
                        <div className={"geex-content__chat__send__input"}>
                          <input placeholder={"Type your message..."} name={"chat"} id={"chat"} defaultValue={""} />
                        </div>
                        <div className={"geex-content__chat__send__action"}>
                          <div className={"geex-content__chat__action__toggle__content"}>
                            <div className={"geex-content__chat__send__action__wrap"}>
                              <div className={"geex-content__chat__send__action__single"}>
                                <input type={"file"} />
                                <i className={"uil uil-camera"} />
                              </div>
                              <div className={"geex-content__chat__send__action__single"}>
                                <input type={"file"} />
                                <i className={"uil uil-link"} />
                              </div>
                            </div>
                          </div>
                          <button className={"geex-btn geex-content__chat__action__toggle__btn"}>
                            <i className={"uil-ellipsis-h"} />
                          </button>
                          <button type={"submit"} className={"btn-send"}>
                            <i className={"uil uil-message"} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={"tab-pane fade"} id={"geex-chat-content-3"} role={"tabpanel"} aria-labelledby={"geex-chat-tab-3"}>
                    <div className={"geex-content__chat__content"}>
                      <div className={"geex-content__chat__header"}>
                        <div className={"geex-content__chat__header__img"}>
                          <img src={"/assets/img/avatar/chat/1.svg"} alt={"avatar"} />
                        </div>
                        <div className={"geex-content__chat__header__content"}>
                          <div className={"geex-content__chat__header__text"}>
                            <h4 className={"geex-content__chat__header__title"}>
                              {"Robert Johanson"}
                            </h4>
                            <span className={"geex-content__chat__header__subtitle"}>
                              <i className={"uil-users-alt"} />
                              {"24 Members "}
                            </span>
                          </div>
                          <ul className={"geex-content__chat__header__filter"}>
                            <li>
                              <a href={"#"} className={"geex-content__chat__header__filter__mute-btn"}>
                                <i className={"uil-bell-slash"} />
                              </a>
                            </li>
                            <li>
                              <a href={"#"} className={"geex-content__chat__header__filter__btn"}>
                                <i className={"uil-search"} />
                              </a>
                              <div className={"geex-content__chat__header__filter__content geex-content__header__searchform"}>
                                <input type={"text"} placeholder={"Search"} className={"geex-content__header__btn"} />
                                <i className={"uil uil-search"} />
                              </div>
                            </li>
                            <li>
                              <a href={"#"} className={"geex-content__chat__header__filter__btn"}>
                                <i className={"uil-info-circle"} />
                              </a>
                              <div className={"geex-content__chat__header__filter__content"}>
                                <ul className={"geex-content__chat__header__filter__content__list"}>
                                  <li className={"geex-content__chat__header__filter__content__list__item"}>
                                    {"Status: "}
                                    <span>
                                      {"Active"}
                                    </span>
                                    <span className={"status-icon"} />
                                  </li>
                                  <li className={"geex-content__chat__header__filter__content__list__item"}>
                                    {"Name: "}
                                    <a href={"#"} className={"geex-content__chat__header__filter__content__list__link"}>
                                      {"James Cameron"}
                                    </a>
                                  </li>
                                  <li className={"geex-content__chat__header__filter__content__list__item"}>
                                    {"Email: "}
                                    <a href={"#"} className={"geex-content__chat__header__filter__content__list__link"}>
                                      {"james@cameron.com"}
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </li>
                            <li>
                              <a href={"#"} className={"geex-content__chat__header__filter__btn"}>
                                <i className={"uil-ellipsis-v"} />
                              </a>
                              <div className={"geex-content__chat__header__filter__content"}>
                                <ul className={"geex-content__chat__header__filter__content__list"}>
                                  <li className={"geex-content__chat__header__filter__content__list__item"}>
                                    <a href={"#"} className={"geex-content__chat__header__filter__content__list__link"}>
                                      {"Mute Notification"}
                                    </a>
                                  </li>
                                  <li className={"geex-content__chat__header__filter__content__list__item"}>
                                    <a href={"#"} className={"geex-content__chat__header__filter__content__list__link"}>
                                      {"Change Background"}
                                    </a>
                                  </li>
                                  <li className={"geex-content__chat__header__filter__content__list__item"}>
                                    <a href={"#"} className={"geex-content__chat__header__filter__content__list__link"}>
                                      {"Change Emoji"}
                                    </a>
                                  </li>
                                  <li className={"geex-content__chat__header__filter__content__list__item"}>
                                    <a href={"#"} className={"geex-content__chat__header__filter__content__list__link"}>
                                      {"Block User"}
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className={"geex-content__chat__list"}>
                        <div className={"geex-content__chat__list__single"}>
                          <div className={"geex-content__chat__list__single__img"}>
                            <img src={"/assets/img/avatar/chat/1.svg"} alt={"avatar"} />
                            <span className={"active"} />
                          </div>
                          <div className={"geex-content__chat__list__single__text"}>
                            <span className={"geex-content__chat__list__single__title"}>
                              {"Ria Tamaguchi"}
                            </span>
                            <span className={"geex-content__chat__list__single__msg"}>
                              {"Hi everyone! Let’s start our discussion now about kick off meeting next week."}
                            </span>
                            <span className={"geex-content__chat__list__single__msg latest"}>
                              {"Is everyone ok about that schedule?"}
                            </span>
                          </div>
                        </div>
                        <div className={"geex-content__chat__list__single"}>
                          <div className={"geex-content__chat__list__single__img"}>
                            <img src={"/assets/img/avatar/chat/1.svg"} alt={"avatar"} />
                            <span className={"active"} />
                          </div>
                          <div className={"geex-content__chat__list__single__text"}>
                            <span className={"geex-content__chat__list__single__title"}>
                              {"Joe Takeshi"}
                            </span>
                            <span className={"geex-content__chat__list__single__msg latest"}>
                              {"Hi "}
                              <a href={"#"}>
                                {"@chloe"}
                              </a>
                              {", I agree with that schedule. I have accepted your meeting inviataition"}
                            </span>
                          </div>
                        </div>
                        <div className={"geex-content__chat__list__single active"}>
                          <div className={"geex-content__chat__list__single__img"}>
                            <img src={"/assets/img/avatar/chat/1.svg"} alt={"avatar"} />
                            <span className={"active"} />
                          </div>
                          <div className={"geex-content__chat__list__single__text"}>
                            <span className={"geex-content__chat__list__single__title"}>
                              {"David Bekam"}
                            </span>
                            <span className={"geex-content__chat__list__single__msg"}>
                              {"Hi everyone! Let’s start our discussion now about kick off meeting next week."}
                            </span>
                            <span className={"geex-content__chat__list__single__msg latest"}>
                              {"Is everyone ok about that schedule?"}
                            </span>
                          </div>
                        </div>
                        <div className={"geex-content__chat__list__single active"}>
                          <div className={"geex-content__chat__list__single__img"}>
                            <img src={"/assets/img/avatar/chat/1.svg"} alt={"avatar"} />
                            <span className={"active"} />
                          </div>
                          <div className={"geex-content__chat__list__single__text"}>
                            <span className={"geex-content__chat__list__single__title"}>
                              {"Joe Takeshi"}
                            </span>
                            <span className={"geex-content__chat__list__single__msg latest"}>
                              {"Is everyone ok about that schedule?"}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className={"geex-content__chat__send"}>
                        <div className={"geex-content__chat__send__input"}>
                          <input placeholder={"Type your message..."} name={"chat"} id={"chat"} defaultValue={""} />
                        </div>
                        <div className={"geex-content__chat__send__action"}>
                          <div className={"geex-content__chat__action__toggle__content"}>
                            <div className={"geex-content__chat__send__action__wrap"}>
                              <div className={"geex-content__chat__send__action__single"}>
                                <input type={"file"} />
                                <i className={"uil uil-camera"} />
                              </div>
                              <div className={"geex-content__chat__send__action__single"}>
                                <input type={"file"} />
                                <i className={"uil uil-link"} />
                              </div>
                            </div>
                          </div>
                          <button className={"geex-btn geex-content__chat__action__toggle__btn"}>
                            <i className={"uil-ellipsis-h"} />
                          </button>
                          <button type={"submit"} className={"btn-send"}>
                            <i className={"uil uil-message"} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={"tab-pane fade"} id={"geex-chat-content-4"} role={"tabpanel"} aria-labelledby={"geex-chat-tab-4"}>
                    <div className={"geex-content__chat__content"}>
                      <div className={"geex-content__chat__header"}>
                        <div className={"geex-content__chat__header__img"}>
                          <img src={"/assets/img/avatar/chat/1.svg"} alt={"avatar"} />
                        </div>
                        <div className={"geex-content__chat__header__content"}>
                          <div className={"geex-content__chat__header__text"}>
                            <h4 className={"geex-content__chat__header__title"}>
                              {"Robert Johanson"}
                            </h4>
                            <span className={"geex-content__chat__header__subtitle"}>
                              <i className={"uil-users-alt"} />
                              {"24 Members "}
                            </span>
                          </div>
                          <ul className={"geex-content__chat__header__filter"}>
                            <li>
                              <a href={"#"} className={"geex-content__chat__header__filter__mute-btn"}>
                                <i className={"uil-bell-slash"} />
                              </a>
                            </li>
                            <li>
                              <a href={"#"} className={"geex-content__chat__header__filter__btn"}>
                                <i className={"uil-search"} />
                              </a>
                              <div className={"geex-content__chat__header__filter__content geex-content__header__searchform"}>
                                <input type={"text"} placeholder={"Search"} className={"geex-content__header__btn"} />
                                <i className={"uil uil-search"} />
                              </div>
                            </li>
                            <li>
                              <a href={"#"} className={"geex-content__chat__header__filter__btn"}>
                                <i className={"uil-info-circle"} />
                              </a>
                              <div className={"geex-content__chat__header__filter__content"}>
                                <ul className={"geex-content__chat__header__filter__content__list"}>
                                  <li className={"geex-content__chat__header__filter__content__list__item"}>
                                    {"Status: "}
                                    <span>
                                      {"Active"}
                                    </span>
                                    <span className={"status-icon"} />
                                  </li>
                                  <li className={"geex-content__chat__header__filter__content__list__item"}>
                                    {"Name: "}
                                    <a href={"#"} className={"geex-content__chat__header__filter__content__list__link"}>
                                      {"James Cameron"}
                                    </a>
                                  </li>
                                  <li className={"geex-content__chat__header__filter__content__list__item"}>
                                    {"Email: "}
                                    <a href={"#"} className={"geex-content__chat__header__filter__content__list__link"}>
                                      {"james@cameron.com"}
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </li>
                            <li>
                              <a href={"#"} className={"geex-content__chat__header__filter__btn"}>
                                <i className={"uil-ellipsis-v"} />
                              </a>
                              <div className={"geex-content__chat__header__filter__content"}>
                                <ul className={"geex-content__chat__header__filter__content__list"}>
                                  <li className={"geex-content__chat__header__filter__content__list__item"}>
                                    <a href={"#"} className={"geex-content__chat__header__filter__content__list__link"}>
                                      {"Mute Notification"}
                                    </a>
                                  </li>
                                  <li className={"geex-content__chat__header__filter__content__list__item"}>
                                    <a href={"#"} className={"geex-content__chat__header__filter__content__list__link"}>
                                      {"Change Background"}
                                    </a>
                                  </li>
                                  <li className={"geex-content__chat__header__filter__content__list__item"}>
                                    <a href={"#"} className={"geex-content__chat__header__filter__content__list__link"}>
                                      {"Change Emoji"}
                                    </a>
                                  </li>
                                  <li className={"geex-content__chat__header__filter__content__list__item"}>
                                    <a href={"#"} className={"geex-content__chat__header__filter__content__list__link"}>
                                      {"Block User"}
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className={"geex-content__chat__list"}>
                        <div className={"geex-content__chat__list__single"}>
                          <div className={"geex-content__chat__list__single__img"}>
                            <img src={"/assets/img/avatar/chat/1.svg"} alt={"avatar"} />
                            <span className={"active"} />
                          </div>
                          <div className={"geex-content__chat__list__single__text"}>
                            <span className={"geex-content__chat__list__single__title"}>
                              {"Ria Tamaguchi"}
                            </span>
                            <span className={"geex-content__chat__list__single__msg"}>
                              {"Hi everyone! Let’s start our discussion now about kick off meeting next week."}
                            </span>
                            <span className={"geex-content__chat__list__single__msg latest"}>
                              {"Is everyone ok about that schedule?"}
                            </span>
                          </div>
                        </div>
                        <div className={"geex-content__chat__list__single"}>
                          <div className={"geex-content__chat__list__single__img"}>
                            <img src={"/assets/img/avatar/chat/1.svg"} alt={"avatar"} />
                            <span className={"active"} />
                          </div>
                          <div className={"geex-content__chat__list__single__text"}>
                            <span className={"geex-content__chat__list__single__title"}>
                              {"Joe Takeshi"}
                            </span>
                            <span className={"geex-content__chat__list__single__msg latest"}>
                              {"Hi "}
                              <a href={"#"}>
                                {"@chloe"}
                              </a>
                              {", I agree with that schedule. I have accepted your meeting inviataition"}
                            </span>
                          </div>
                        </div>
                        <div className={"geex-content__chat__list__single active"}>
                          <div className={"geex-content__chat__list__single__img"}>
                            <img src={"/assets/img/avatar/chat/1.svg"} alt={"avatar"} />
                            <span className={"active"} />
                          </div>
                          <div className={"geex-content__chat__list__single__text"}>
                            <span className={"geex-content__chat__list__single__title"}>
                              {"David Bekam"}
                            </span>
                            <span className={"geex-content__chat__list__single__msg"}>
                              {"Hi everyone! Let’s start our discussion now about kick off meeting next week."}
                            </span>
                            <span className={"geex-content__chat__list__single__msg latest"}>
                              {"Is everyone ok about that schedule?"}
                            </span>
                          </div>
                        </div>
                        <div className={"geex-content__chat__list__single active"}>
                          <div className={"geex-content__chat__list__single__img"}>
                            <img src={"/assets/img/avatar/chat/1.svg"} alt={"avatar"} />
                            <span className={"active"} />
                          </div>
                          <div className={"geex-content__chat__list__single__text"}>
                            <span className={"geex-content__chat__list__single__title"}>
                              {"Joe Takeshi"}
                            </span>
                            <span className={"geex-content__chat__list__single__msg latest"}>
                              {"Is everyone ok about that schedule?"}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className={"geex-content__chat__send"}>
                        <div className={"geex-content__chat__send__input"}>
                          <input placeholder={"Type your message..."} name={"chat"} id={"chat"} defaultValue={""} />
                        </div>
                        <div className={"geex-content__chat__send__action"}>
                          <div className={"geex-content__chat__action__toggle__content"}>
                            <div className={"geex-content__chat__send__action__wrap"}>
                              <div className={"geex-content__chat__send__action__single"}>
                                <input type={"file"} />
                                <i className={"uil uil-camera"} />
                              </div>
                              <div className={"geex-content__chat__send__action__single"}>
                                <input type={"file"} />
                                <i className={"uil uil-link"} />
                              </div>
                            </div>
                          </div>
                          <button className={"geex-btn geex-content__chat__action__toggle__btn"}>
                            <i className={"uil-ellipsis-h"} />
                          </button>
                          <button type={"submit"} className={"btn-send"}>
                            <i className={"uil uil-message"} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={"tab-pane fade"} id={"geex-chat-content-5"} role={"tabpanel"} aria-labelledby={"geex-chat-tab-5"}>
                    <div className={"geex-content__chat__content"}>
                      <div className={"geex-content__chat__header"}>
                        <div className={"geex-content__chat__header__img"}>
                          <img src={"/assets/img/avatar/chat/1.svg"} alt={"avatar"} />
                        </div>
                        <div className={"geex-content__chat__header__content"}>
                          <div className={"geex-content__chat__header__text"}>
                            <h4 className={"geex-content__chat__header__title"}>
                              {"Robert Johanson"}
                            </h4>
                            <span className={"geex-content__chat__header__subtitle"}>
                              <i className={"uil-users-alt"} />
                              {"24 Members "}
                            </span>
                          </div>
                          <ul className={"geex-content__chat__header__filter"}>
                            <li>
                              <a href={"#"} className={"geex-content__chat__header__filter__mute-btn"}>
                                <i className={"uil-bell-slash"} />
                              </a>
                            </li>
                            <li>
                              <a href={"#"} className={"geex-content__chat__header__filter__btn"}>
                                <i className={"uil-search"} />
                              </a>
                              <div className={"geex-content__chat__header__filter__content geex-content__header__searchform"}>
                                <input type={"text"} placeholder={"Search"} className={"geex-content__header__btn"} />
                                <i className={"uil uil-search"} />
                              </div>
                            </li>
                            <li>
                              <a href={"#"} className={"geex-content__chat__header__filter__btn"}>
                                <i className={"uil-info-circle"} />
                              </a>
                              <div className={"geex-content__chat__header__filter__content"}>
                                <ul className={"geex-content__chat__header__filter__content__list"}>
                                  <li className={"geex-content__chat__header__filter__content__list__item"}>
                                    {"Status: "}
                                    <span>
                                      {"Active"}
                                    </span>
                                    <span className={"status-icon"} />
                                  </li>
                                  <li className={"geex-content__chat__header__filter__content__list__item"}>
                                    {"Name: "}
                                    <a href={"#"} className={"geex-content__chat__header__filter__content__list__link"}>
                                      {"James Cameron"}
                                    </a>
                                  </li>
                                  <li className={"geex-content__chat__header__filter__content__list__item"}>
                                    {"Email: "}
                                    <a href={"#"} className={"geex-content__chat__header__filter__content__list__link"}>
                                      {"james@cameron.com"}
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </li>
                            <li>
                              <a href={"#"} className={"geex-content__chat__header__filter__btn"}>
                                <i className={"uil-ellipsis-v"} />
                              </a>
                              <div className={"geex-content__chat__header__filter__content"}>
                                <ul className={"geex-content__chat__header__filter__content__list"}>
                                  <li className={"geex-content__chat__header__filter__content__list__item"}>
                                    <a href={"#"} className={"geex-content__chat__header__filter__content__list__link"}>
                                      {"Mute Notification"}
                                    </a>
                                  </li>
                                  <li className={"geex-content__chat__header__filter__content__list__item"}>
                                    <a href={"#"} className={"geex-content__chat__header__filter__content__list__link"}>
                                      {"Change Background"}
                                    </a>
                                  </li>
                                  <li className={"geex-content__chat__header__filter__content__list__item"}>
                                    <a href={"#"} className={"geex-content__chat__header__filter__content__list__link"}>
                                      {"Change Emoji"}
                                    </a>
                                  </li>
                                  <li className={"geex-content__chat__header__filter__content__list__item"}>
                                    <a href={"#"} className={"geex-content__chat__header__filter__content__list__link"}>
                                      {"Block User"}
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className={"geex-content__chat__list"}>
                        <div className={"geex-content__chat__list__single"}>
                          <div className={"geex-content__chat__list__single__img"}>
                            <img src={"/assets/img/avatar/chat/1.svg"} alt={"avatar"} />
                            <span className={"active"} />
                          </div>
                          <div className={"geex-content__chat__list__single__text"}>
                            <span className={"geex-content__chat__list__single__title"}>
                              {"Ria Tamaguchi"}
                            </span>
                            <span className={"geex-content__chat__list__single__msg"}>
                              {"Hi everyone! Let’s start our discussion now about kick off meeting next week."}
                            </span>
                            <span className={"geex-content__chat__list__single__msg latest"}>
                              {"Is everyone ok about that schedule?"}
                            </span>
                          </div>
                        </div>
                        <div className={"geex-content__chat__list__single"}>
                          <div className={"geex-content__chat__list__single__img"}>
                            <img src={"/assets/img/avatar/chat/1.svg"} alt={"avatar"} />
                            <span className={"active"} />
                          </div>
                          <div className={"geex-content__chat__list__single__text"}>
                            <span className={"geex-content__chat__list__single__title"}>
                              {"Joe Takeshi"}
                            </span>
                            <span className={"geex-content__chat__list__single__msg latest"}>
                              {"Hi "}
                              <a href={"#"}>
                                {"@chloe"}
                              </a>
                              {", I agree with that schedule. I have accepted your meeting inviataition"}
                            </span>
                          </div>
                        </div>
                        <div className={"geex-content__chat__list__single active"}>
                          <div className={"geex-content__chat__list__single__img"}>
                            <img src={"/assets/img/avatar/chat/1.svg"} alt={"avatar"} />
                            <span className={"active"} />
                          </div>
                          <div className={"geex-content__chat__list__single__text"}>
                            <span className={"geex-content__chat__list__single__title"}>
                              {"David Bekam"}
                            </span>
                            <span className={"geex-content__chat__list__single__msg"}>
                              {"Hi everyone! Let’s start our discussion now about kick off meeting next week."}
                            </span>
                            <span className={"geex-content__chat__list__single__msg latest"}>
                              {"Is everyone ok about that schedule?"}
                            </span>
                          </div>
                        </div>
                        <div className={"geex-content__chat__list__single active"}>
                          <div className={"geex-content__chat__list__single__img"}>
                            <img src={"/assets/img/avatar/chat/1.svg"} alt={"avatar"} />
                            <span className={"active"} />
                          </div>
                          <div className={"geex-content__chat__list__single__text"}>
                            <span className={"geex-content__chat__list__single__title"}>
                              {"Joe Takeshi"}
                            </span>
                            <span className={"geex-content__chat__list__single__msg latest"}>
                              {"Is everyone ok about that schedule?"}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className={"geex-content__chat__send"}>
                        <div className={"geex-content__chat__send__input"}>
                          <input placeholder={"Type your message..."} name={"chat"} id={"chat"} defaultValue={""} />
                        </div>
                        <div className={"geex-content__chat__send__action"}>
                          <div className={"geex-content__chat__action__toggle__content"}>
                            <div className={"geex-content__chat__send__action__wrap"}>
                              <div className={"geex-content__chat__send__action__single"}>
                                <input type={"file"} />
                                <i className={"uil uil-camera"} />
                              </div>
                              <div className={"geex-content__chat__send__action__single"}>
                                <input type={"file"} />
                                <i className={"uil uil-link"} />
                              </div>
                            </div>
                          </div>
                          <button className={"geex-btn geex-content__chat__action__toggle__btn"}>
                            <i className={"uil-ellipsis-h"} />
                          </button>
                          <button type={"submit"} className={"btn-send"}>
                            <i className={"uil uil-message"} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={"tab-pane fade"} id={"geex-chat-content-6"} role={"tabpanel"} aria-labelledby={"geex-chat-tab-6"}>
                    <div className={"geex-content__chat__content"}>
                      <div className={"geex-content__chat__header"}>
                        <div className={"geex-content__chat__header__img"}>
                          <img src={"/assets/img/avatar/chat/1.svg"} alt={"avatar"} />
                        </div>
                        <div className={"geex-content__chat__header__content"}>
                          <div className={"geex-content__chat__header__text"}>
                            <h4 className={"geex-content__chat__header__title"}>
                              {"Robert Johanson"}
                            </h4>
                            <span className={"geex-content__chat__header__subtitle"}>
                              <i className={"uil-users-alt"} />
                              {"24 Members "}
                            </span>
                          </div>
                          <ul className={"geex-content__chat__header__filter"}>
                            <li>
                              <a href={"#"} className={"geex-content__chat__header__filter__mute-btn"}>
                                <i className={"uil-bell-slash"} />
                              </a>
                            </li>
                            <li>
                              <a href={"#"} className={"geex-content__chat__header__filter__btn"}>
                                <i className={"uil-search"} />
                              </a>
                              <div className={"geex-content__chat__header__filter__content geex-content__header__searchform"}>
                                <input type={"text"} placeholder={"Search"} className={"geex-content__header__btn"} />
                                <i className={"uil uil-search"} />
                              </div>
                            </li>
                            <li>
                              <a href={"#"} className={"geex-content__chat__header__filter__btn"}>
                                <i className={"uil-info-circle"} />
                              </a>
                              <div className={"geex-content__chat__header__filter__content"}>
                                <ul className={"geex-content__chat__header__filter__content__list"}>
                                  <li className={"geex-content__chat__header__filter__content__list__item"}>
                                    {"Status: "}
                                    <span>
                                      {"Active"}
                                    </span>
                                    <span className={"status-icon"} />
                                  </li>
                                  <li className={"geex-content__chat__header__filter__content__list__item"}>
                                    {"Name: "}
                                    <a href={"#"} className={"geex-content__chat__header__filter__content__list__link"}>
                                      {"James Cameron"}
                                    </a>
                                  </li>
                                  <li className={"geex-content__chat__header__filter__content__list__item"}>
                                    {"Email: "}
                                    <a href={"#"} className={"geex-content__chat__header__filter__content__list__link"}>
                                      {"james@cameron.com"}
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </li>
                            <li>
                              <a href={"#"} className={"geex-content__chat__header__filter__btn"}>
                                <i className={"uil-ellipsis-v"} />
                              </a>
                              <div className={"geex-content__chat__header__filter__content"}>
                                <ul className={"geex-content__chat__header__filter__content__list"}>
                                  <li className={"geex-content__chat__header__filter__content__list__item"}>
                                    <a href={"#"} className={"geex-content__chat__header__filter__content__list__link"}>
                                      {"Mute Notification"}
                                    </a>
                                  </li>
                                  <li className={"geex-content__chat__header__filter__content__list__item"}>
                                    <a href={"#"} className={"geex-content__chat__header__filter__content__list__link"}>
                                      {"Change Background"}
                                    </a>
                                  </li>
                                  <li className={"geex-content__chat__header__filter__content__list__item"}>
                                    <a href={"#"} className={"geex-content__chat__header__filter__content__list__link"}>
                                      {"Change Emoji"}
                                    </a>
                                  </li>
                                  <li className={"geex-content__chat__header__filter__content__list__item"}>
                                    <a href={"#"} className={"geex-content__chat__header__filter__content__list__link"}>
                                      {"Block User"}
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className={"geex-content__chat__list"}>
                        <div className={"geex-content__chat__list__single"}>
                          <div className={"geex-content__chat__list__single__img"}>
                            <img src={"/assets/img/avatar/chat/1.svg"} alt={"avatar"} />
                            <span className={"active"} />
                          </div>
                          <div className={"geex-content__chat__list__single__text"}>
                            <span className={"geex-content__chat__list__single__title"}>
                              {"Ria Tamaguchi"}
                            </span>
                            <span className={"geex-content__chat__list__single__msg"}>
                              {"Hi everyone! Let’s start our discussion now about kick off meeting next week."}
                            </span>
                            <span className={"geex-content__chat__list__single__msg latest"}>
                              {"Is everyone ok about that schedule?"}
                            </span>
                          </div>
                        </div>
                        <div className={"geex-content__chat__list__single"}>
                          <div className={"geex-content__chat__list__single__img"}>
                            <img src={"/assets/img/avatar/chat/1.svg"} alt={"avatar"} />
                            <span className={"active"} />
                          </div>
                          <div className={"geex-content__chat__list__single__text"}>
                            <span className={"geex-content__chat__list__single__title"}>
                              {"Joe Takeshi"}
                            </span>
                            <span className={"geex-content__chat__list__single__msg latest"}>
                              {"Hi "}
                              <a href={"#"}>
                                {"@chloe"}
                              </a>
                              {", I agree with that schedule. I have accepted your meeting inviataition"}
                            </span>
                          </div>
                        </div>
                        <div className={"geex-content__chat__list__single active"}>
                          <div className={"geex-content__chat__list__single__img"}>
                            <img src={"/assets/img/avatar/chat/1.svg"} alt={"avatar"} />
                            <span className={"active"} />
                          </div>
                          <div className={"geex-content__chat__list__single__text"}>
                            <span className={"geex-content__chat__list__single__title"}>
                              {"David Bekam"}
                            </span>
                            <span className={"geex-content__chat__list__single__msg"}>
                              {"Hi everyone! Let’s start our discussion now about kick off meeting next week."}
                            </span>
                            <span className={"geex-content__chat__list__single__msg latest"}>
                              {"Is everyone ok about that schedule?"}
                            </span>
                          </div>
                        </div>
                        <div className={"geex-content__chat__list__single active"}>
                          <div className={"geex-content__chat__list__single__img"}>
                            <img src={"/assets/img/avatar/chat/1.svg"} alt={"avatar"} />
                            <span className={"active"} />
                          </div>
                          <div className={"geex-content__chat__list__single__text"}>
                            <span className={"geex-content__chat__list__single__title"}>
                              {"Joe Takeshi"}
                            </span>
                            <span className={"geex-content__chat__list__single__msg latest"}>
                              {"Is everyone ok about that schedule?"}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className={"geex-content__chat__send"}>
                        <div className={"geex-content__chat__send__input"}>
                          <input placeholder={"Type your message..."} name={"chat"} id={"chat"} defaultValue={""} />
                        </div>
                        <div className={"geex-content__chat__send__action"}>
                          <div className={"geex-content__chat__action__toggle__content"}>
                            <div className={"geex-content__chat__send__action__wrap"}>
                              <div className={"geex-content__chat__send__action__single"}>
                                <input type={"file"} />
                                <i className={"uil uil-camera"} />
                              </div>
                              <div className={"geex-content__chat__send__action__single"}>
                                <input type={"file"} />
                                <i className={"uil uil-link"} />
                              </div>
                            </div>
                          </div>
                          <button className={"geex-btn geex-content__chat__action__toggle__btn"}>
                            <i className={"uil-ellipsis-h"} />
                          </button>
                          <button type={"submit"} className={"btn-send"}>
                            <i className={"uil uil-message"} />
                          </button>
                        </div>
                      </div>
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
