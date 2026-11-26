import { DemoRecordForm, DemoRecordList } from "@/components/DemoRecords";
import Customizer from "@/components/Customizer";
import Header from "@/components/Header";
import HeaderActions from "@/components/HeaderActions";
import Sidebar from "@/components/Sidebar";
import GeexResources from "@/components/GeexResources";
export const metadata = { title: "Todo - Geex Dashboard", icons: { icon: "/assets/img/favicon.svg" } };

export default function TodoPage() {
  return (
    <>
      <GeexResources styles={["/assets/vendor/css/bootstrap/bootstrap.css","/assets/vendor/css/swiper.min.css","/assets/css/style.css","/assets/vendor/nice-select2/nice-select2.css","/assets/css/nice-select.css","https://cdn.jsdelivr.net/npm/@iconscout/unicons@4.0.8/css/line.min.css"]} scripts={["/assets/vendor/js/jquery/jquery-3.5.1.min.js","/assets/vendor/js/jquery/jquery-ui.js","/assets/vendor/js/bootstrap/bootstrap.min.js","/assets/vendor/js/swiper.min.js","/assets/vendor/js/apexcharts.min.js","/assets/vendor/nice-select2/nice-select2.js","/assets/js/main.js"]} />
      <Header />
      <main className={"geex-main-content"}>
        <Sidebar />
        <Customizer />
        <div className={"geex-content"}>
          <div className={"geex-content__header"}>
            <div className={"geex-content__header__content"}>
              <h2 className={"geex-content__header__title"}>
                {"Todo"}
              </h2>
              <p className={"geex-content__header__subtitle"}>
                {"Form Elements is used to style and format the input field"}
              </p>
            </div>
            <HeaderActions />
          </div>
          <DemoRecordList scope="todo" label="Your Tasks" />
          <div className={"geex-content__wrapper"}>
            <div className={"geex-content__section-wrapper"}>
              <button className={"geex-btn geex-btn__toggle-task"}>
                <i className={"uil-bars"} />
                {" Task List "}
              </button>
              <div className={"geex-content__section geex-content__section--transparent geex-content__todo"}>
                <div className={"geex-content__todo__sidebar"}>
                  <div className={"geex-content__todo__sidebar__label"}>
                    <button className={"geex-btn geex-btn--primary geex-btn__add-modal"}>
                      <i className={"uil-plus"} />
                      {" New Task "}
                    </button>
                    <ul className={"nav nav-tabs geex-content__todo__sidebar__tab mb-20"} id={"geex-todo-task-tab"} role={"tablist"}>
                      <li className={"nav-item"} role={"presentation"}>
                        <button className={"nav-link active"} id={"geex-todo-task-tab-important"} data-bs-toggle={"tab"} data-bs-target={"#geex-todo-task-content-important"} type={"button"} role={"tab"} aria-controls={"geex-todo-task-content-important"} aria-selected={"true"}>
                          <i className={"uil-info-circle"} />
                          {"Important"}
                        </button>
                      </li>
                      <li className={"nav-item"} role={"presentation"}>
                        <button className={"nav-link"} id={"geex-todo-task-tab-completed"} data-bs-toggle={"tab"} data-bs-target={"#geex-todo-task-content-completed"} type={"button"} role={"tab"} aria-controls={"geex-todo-task-content-completed"} aria-selected={"false"}>
                          <svg width={"28"} height={"28"} viewBox={"0 0 28 28"} fill={"none"} xmlns={"http://www.w3.org/2000/svg"}>
                            <path d={"M23.6181 4.46941C23.4111 4.23957 23.1213 4.10135 22.8124 4.08517C22.5034 4.06898 22.2007 4.17613 21.9708 4.38308L11.1266 14.1422L6.07615 9.09175C5.96853 8.98032 5.83979 8.89144 5.69745 8.83029C5.55512 8.76915 5.40203 8.73697 5.24712 8.73562C5.09221 8.73427 4.93858 8.76379 4.7952 8.82245C4.65182 8.88111 4.52156 8.96774 4.41202 9.07729C4.30248 9.18683 4.21585 9.31709 4.15719 9.46047C4.09853 9.60385 4.06901 9.75747 4.07036 9.91238C4.0717 10.0673 4.10389 10.2204 4.16503 10.3627C4.22617 10.5051 4.31505 10.6338 4.42648 10.7414L10.2598 16.5747C10.4711 16.786 10.7554 16.9081 11.0541 16.9159C11.3528 16.9237 11.6431 16.8166 11.8651 16.6167L23.5318 6.11675C23.7617 5.90971 23.8999 5.61987 23.9161 5.31095C23.9323 5.00204 23.8251 4.69934 23.6181 4.46941Z"} fill={"#A3A3A3"} />
                            <path d={"M21.9695 11.3831L11.1253 21.1423L6.07482 16.0918C5.85478 15.8793 5.56008 15.7617 5.25419 15.7644C4.94829 15.767 4.65567 15.8897 4.43937 16.106C4.22306 16.3223 4.10036 16.6149 4.0977 16.9208C4.09504 17.2267 4.21264 17.5214 4.42515 17.7415L10.2585 23.5748C10.4698 23.786 10.7541 23.9082 11.0528 23.916C11.3515 23.9238 11.6418 23.8167 11.8638 23.6168L23.5305 13.1168C23.7534 12.908 23.8855 12.6201 23.8985 12.3149C23.9114 12.0098 23.8042 11.7117 23.5999 11.4847C23.3955 11.2578 23.1103 11.12 22.8054 11.101C22.5006 11.082 22.2005 11.1833 21.9695 11.3831Z"} fill={"#A3A3A3"} />
                          </svg>
                          {" Completed"}
                        </button>
                      </li>
                      <li className={"nav-item"} role={"presentation"}>
                        <button className={"nav-link"} id={"geex-todo-task-tab-removed"} data-bs-toggle={"tab"} data-bs-target={"#geex-todo-task-content-removed"} type={"button"} role={"tab"} aria-controls={"geex-todo-task-content-removed"} aria-selected={"false"}>
                          <i className={"uil-trash-alt"} />
                          {"Removed"}
                        </button>
                      </li>
                      <li className={"nav-item"} role={"presentation"}>
                        <button className={"nav-link"} id={"geex-todo-task-tab-due"} data-bs-toggle={"tab"} data-bs-target={"#geex-todo-task-content-due"} type={"button"} role={"tab"} aria-controls={"geex-todo-task-content-due"} aria-selected={"false"}>
                          <i className={"uil-ellipsis-h"} />
                          {"Due Soon"}
                        </button>
                      </li>
                    </ul>
                    <div className={"geex-content__todo__sidebar__text"}>
                      <span>
                        {"Label"}
                      </span>
                      <a href={"#"} className={"geex-content__chat__header__filter__btn active"}>
                        <i className={"uil-ellipsis-h"} />
                      </a>
                      <div className={"geex-content__chat__header__filter__content"}>
                        <ul className={"geex-content__chat__header__filter__content__list"}>
                          <li className={"geex-content__chat__header__filter__content__list__item"}>
                            <a href={"#"} className={"geex-content__chat__header__filter__content__list__link"}>
                              {"Edit"}
                            </a>
                          </li>
                          <li className={"geex-content__chat__header__filter__content__list__item"}>
                            <a href={"#"} className={"geex-content__chat__header__filter__content__list__link"}>
                              {"Delete"}
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className={"geex-content__todo__sidebar__label"}>
                    <ul className={"nav nav-tabs geex-content__todo__sidebar__tab"} id={"geex-todo-task-label"} role={"tablist"}>
                      <li className={"nav-item"} role={"presentation"}>
                        <button className={"nav-link primary active"} id={"team-task-tab"} data-bs-toggle={"tab"} data-bs-target={"#team-task-content"} type={"button"} role={"tab"} aria-controls={"team-task-content"} aria-selected={"true"}>
                          <i className={"uil uil-tag-alt"} />
                          {"Team"}
                        </button>
                      </li>
                      <li className={"nav-item"} role={"presentation"}>
                        <button className={"nav-link success"} id={"low-task-tab"} data-bs-toggle={"tab"} data-bs-target={"#low-task-content"} type={"button"} role={"tab"} aria-controls={"low-task-content"} aria-selected={"false"}>
                          <i className={"uil uil-tag-alt"} />
                          {"Low"}
                        </button>
                      </li>
                      <li className={"nav-item"} role={"presentation"}>
                        <button className={"nav-link warning"} id={"medium-task-tab"} data-bs-toggle={"tab"} data-bs-target={"#medium-task-content"} type={"button"} role={"tab"} aria-controls={"medium-task-content"} aria-selected={"false"}>
                          <i className={"uil uil-tag-alt"} />
                          {"Medium"}
                        </button>
                      </li>
                      <li className={"nav-item"} role={"presentation"}>
                        <button className={"nav-link info"} id={"high-task-tab"} data-bs-toggle={"tab"} data-bs-target={"#high-task-content"} type={"button"} role={"tab"} aria-controls={"high-task-content"} aria-selected={"false"}>
                          <i className={"uil uil-tag-alt"} />
                          {"High"}
                        </button>
                      </li>
                    </ul>
                    <div className={"geex-content__todo__sidebar__label__add"}>
                      <i className={"uil-plus-circle"} />
                      <input className={""} type={"text"} placeholder={"Add Label"} />
                    </div>
                  </div>
                </div>
                <div className={"geex-content__todo__content tab-content"} id={"geex-todo-task-content"}>
                  <div className={"tab-pane fade show active"} id={"geex-todo-task-content-important"}>
                    <div className={"geex-content__todo__header"}>
                      <div className={"geex-content__todo__header__title"}>
                        <i className={"uil-info-circle"} />
                        <h4>
                          {" Important Task"}
                        </h4>
                      </div>
                      <ul className={"nav nav-tabs geex-todo-tab geex-content__todo__header__filter"} id={"geex-todo-tab"} role={"tablist"}>
                        <li className={"geex-content__todo__header__filter__sortby"}>
                          <select aria-label={"Sort tasks"} defaultValue={"newest"}>
                            <option value={"newest"}>
                              {"Newest"}
                            </option>
                            <option value={"oldest"}>
                              {"Oldest"}
                            </option>
                            <option value={"name"}>
                              {"Name"}
                            </option>
                          </select>
                          <i className={"uil-angle-down"} />
                        </li>
                        <li className={"nav-item"} role={"presentation"}>
                          <a href={"#"} id={"todo_list_tab"} className={"active"} data-bs-toggle={"tab"} data-bs-target={"#todo_list_content"} type={"button"} role={"tab"} aria-controls={"todo_list_content"} aria-selected={"false"}>
                            <i className={"uil-bars"} />
                          </a>
                        </li>
                        <li className={"nav-item"} role={"presentation"}>
                          <a href={"#"} id={"todo_grid_tab"} data-bs-toggle={"tab"} data-bs-target={"#todo_grid_content"} type={"button"} role={"tab"} aria-controls={"todo_grid_contant"} aria-selected={"false"}>
                            <i className={"uil-apps"} />
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className={"tab-content geex-transaction-content"}>
                      <div className={"tab-pane fade show active"} id={"todo_list_content"} role={"tabpanel"} aria-labelledby={"todo_list_tab"}>
                        <div className={"geex-content__todo__list"}>
                          <div className={"geex-content__todo__list__single"}>
                            <div className={"geex-content__todo__list__single__checkbox"}>
                              <input type={"checkbox"} name={"todo-1"} id={"todo-1"} />
                              <label htmlFor={"todo-1"}>
                                <i className={"uil-check"} />
                              </label>
                            </div>
                            <div className={"geex-content__todo__list__single__text"}>
                              <span className={"geex-content__todo__list__single__subtitle"}>
                                {"January 24th, 2021 04:25 PM"}
                              </span>
                              <h4 className={"geex-content__todo__list__single__title"}>
                                {"Create custom floating action buttton in Geex Mobile"}
                              </h4>
                            </div>
                            <div className={"geex-content__todo__list__single__tag"}>
                              <a href={"#"} className={"geex-content__todo__list__single__tag__item primary"}>
                                <i className={"uil uil-tag-alt"} />
                                {" Team "}
                              </a>
                              <a href={"#"} className={"geex-content__todo__list__single__tag__item warning"}>
                                <i className={"uil uil-tag-alt"} />
                                {" Important "}
                              </a>
                            </div>
                            <div className={"geex-content__todo__list__single__author"}>
                              <a href={"#"} className={"geex-content__todo__list__single__author__img"}>
                                <img src={"/assets/img/avatar/todo/1.svg"} alt={"avatar"} />
                              </a>
                              <a href={"#"} className={"geex-content__todo__list__single__author__img"}>
                                <img src={"/assets/img/avatar/todo/2.svg"} alt={"avatar"} />
                              </a>
                              <a href={"#"} className={"geex-content__todo__list__single__author__img"}>
                                <img src={"/assets/img/avatar/todo/3.svg"} alt={"avatar"} />
                              </a>
                            </div>
                          </div>
                          <div className={"geex-content__todo__list__single"}>
                            <div className={"geex-content__todo__list__single__checkbox"}>
                              <input type={"checkbox"} name={"todo-2"} id={"todo-2"} />
                              <label htmlFor={"todo-2"}>
                                <i className={"uil-check"} />
                              </label>
                            </div>
                            <div className={"geex-content__todo__list__single__text"}>
                              <span className={"geex-content__todo__list__single__subtitle"}>
                                {"January 24th, 2021 04:25 PM"}
                              </span>
                              <h4 className={"geex-content__todo__list__single__title"}>
                                {"Revision 1 : Remove background in main banner Geex Website"}
                              </h4>
                            </div>
                            <div className={"geex-content__todo__list__single__tag"}>
                              <a href={"#"} className={"geex-content__todo__list__single__tag__item primary"}>
                                <i className={"uil uil-tag-alt"} />
                                {" Team "}
                              </a>
                              <a href={"#"} className={"geex-content__todo__list__single__tag__item danger"}>
                                <i className={"uil uil-tag-alt"} />
                                {" High "}
                              </a>
                            </div>
                            <div className={"geex-content__todo__list__single__author"}>
                              <a href={"#"} className={"geex-content__todo__list__single__author__img"}>
                                <img src={"/assets/img/avatar/todo/4.svg"} alt={"avatar"} />
                              </a>
                              <a href={"#"} className={"geex-content__todo__list__single__author__img"}>
                                <img src={"/assets/img/avatar/todo/5.svg"} alt={"avatar"} />
                              </a>
                            </div>
                          </div>
                          <div className={"geex-content__todo__list__single"}>
                            <div className={"geex-content__todo__list__single__checkbox"}>
                              <input type={"checkbox"} name={"todo-3"} id={"todo-3"} />
                              <label htmlFor={"todo-3"}>
                                <i className={"uil-check"} />
                              </label>
                            </div>
                            <div className={"geex-content__todo__list__single__text"}>
                              <span className={"geex-content__todo__list__single__subtitle"}>
                                {"January 24th, 2021 04:25 PM"}
                              </span>
                              <h4 className={"geex-content__todo__list__single__title"}>
                                {"Fix login & register form design "}
                              </h4>
                            </div>
                            <div className={"geex-content__todo__list__single__tag"}>
                              <a href={"#"} className={"geex-content__todo__list__single__tag__item success"}>
                                <i className={"uil uil-tag-alt"} />
                                {" Low "}
                              </a>
                            </div>
                            <div className={"geex-content__todo__list__single__author"}>
                              <a href={"#"} className={"geex-content__todo__list__single__author__img"}>
                                <img src={"/assets/img/avatar/todo/5.svg"} alt={"avatar"} />
                              </a>
                            </div>
                          </div>
                          <div className={"geex-content__todo__list__single"}>
                            <div className={"geex-content__todo__list__single__checkbox"}>
                              <input type={"checkbox"} name={"todo-4"} id={"todo-4"} />
                              <label htmlFor={"todo-4"}>
                                <i className={"uil-check"} />
                              </label>
                            </div>
                            <div className={"geex-content__todo__list__single__text"}>
                              <span className={"geex-content__todo__list__single__subtitle"}>
                                {"January 24th, 2021 04:25 PM"}
                              </span>
                              <h4 className={"geex-content__todo__list__single__title"}>
                                {"Add “cart icon” at Geex Ecommerce Page"}
                              </h4>
                            </div>
                            <div className={"geex-content__todo__list__single__tag"}>
                              <a href={"#"} className={"geex-content__todo__list__single__tag__item primary"}>
                                <i className={"uil uil-tag-alt"} />
                                {" Team "}
                              </a>
                              <a href={"#"} className={"geex-content__todo__list__single__tag__item warning"}>
                                <i className={"uil uil-tag-alt"} />
                                {" Important "}
                              </a>
                            </div>
                            <div className={"geex-content__todo__list__single__author"}>
                              <a href={"#"} className={"geex-content__todo__list__single__author__img"}>
                                <img src={"/assets/img/avatar/todo/7.svg"} alt={"avatar"} />
                              </a>
                              <a href={"#"} className={"geex-content__todo__list__single__author__img"}>
                                <img src={"/assets/img/avatar/todo/8.svg"} alt={"avatar"} />
                              </a>
                              <a href={"#"} className={"geex-content__todo__list__single__author__img"}>
                                <img src={"/assets/img/avatar/todo/9.svg"} alt={"avatar"} />
                              </a>
                            </div>
                          </div>
                          <div className={"geex-content__todo__list__single"}>
                            <div className={"geex-content__todo__list__single__checkbox"}>
                              <input type={"checkbox"} name={"todo-5"} id={"todo-5"} />
                              <label htmlFor={"todo-5"}>
                                <i className={"uil-check"} />
                              </label>
                            </div>
                            <div className={"geex-content__todo__list__single__text"}>
                              <span className={"geex-content__todo__list__single__subtitle"}>
                                {"January 24th, 2021 04:25 PM"}
                              </span>
                              <h4 className={"geex-content__todo__list__single__title"}>
                                {"Attend weekly meeting Geex Design Team"}
                              </h4>
                            </div>
                            <div className={"geex-content__todo__list__single__tag"}>
                              <a href={"#"} className={"geex-content__todo__list__single__tag__item success"}>
                                <i className={"uil uil-tag-alt"} />
                                {" Low "}
                              </a>
                            </div>
                            <div className={"geex-content__todo__list__single__author"}>
                              <a href={"#"} className={"geex-content__todo__list__single__author__img"}>
                                <img src={"/assets/img/avatar/todo/10.svg"} alt={"avatar"} />
                              </a>
                            </div>
                          </div>
                          <div className={"geex-content__todo__list__single"}>
                            <div className={"geex-content__todo__list__single__checkbox"}>
                              <input type={"checkbox"} name={"todo-6"} id={"todo-6"} />
                              <label htmlFor={"todo-6"}>
                                <i className={"uil-check"} />
                              </label>
                            </div>
                            <div className={"geex-content__todo__list__single__text"}>
                              <span className={"geex-content__todo__list__single__subtitle"}>
                                {"January 24th, 2021 04:25 PM"}
                              </span>
                              <h4 className={"geex-content__todo__list__single__title"}>
                                {"Redesign navigation bar in Geex Landing page"}
                              </h4>
                            </div>
                            <div className={"geex-content__todo__list__single__tag"}>
                              <a href={"#"} className={"geex-content__todo__list__single__tag__item warning"}>
                                <i className={"uil uil-tag-alt"} />
                                {" Medium "}
                              </a>
                            </div>
                            <div className={"geex-content__todo__list__single__author"}>
                              <a href={"#"} className={"geex-content__todo__list__single__author__img"}>
                                <img src={"/assets/img/avatar/todo/11.svg"} alt={"avatar"} />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={"tab-pane fade"} id={"todo_grid_content"} role={"tabpanel"} aria-labelledby={"todo_grid_tab"}>
                        <div className={"geex-content__todo__list geex-content__todo__list--grid"}>
                          <div className={"geex-content__todo__list__single"}>
                            <div className={"geex-content__todo__list__single__checkbox"}>
                              <input type={"checkbox"} name={"todo-11"} id={"todo-11"} />
                              <label htmlFor={"todo-11"}>
                                <i className={"uil-check"} />
                              </label>
                            </div>
                            <div className={"geex-content__todo__list__single__text"}>
                              <span className={"geex-content__todo__list__single__subtitle"}>
                                {"January 24th, 2021 04:25 PM"}
                              </span>
                              <h4 className={"geex-content__todo__list__single__title"}>
                                {"Create custom floating action buttton in Geex Mobile"}
                              </h4>
                            </div>
                            <div className={"geex-content__todo__list__single__tag"}>
                              <a href={"#"} className={"geex-content__todo__list__single__tag__item primary"}>
                                <i className={"uil uil-tag-alt"} />
                                {" Team "}
                              </a>
                              <a href={"#"} className={"geex-content__todo__list__single__tag__item warning"}>
                                <i className={"uil uil-tag-alt"} />
                                {" Important "}
                              </a>
                            </div>
                            <div className={"geex-content__todo__list__single__author"}>
                              <a href={"#"} className={"geex-content__todo__list__single__author__img"}>
                                <img src={"/assets/img/avatar/todo/1.svg"} alt={"avatar"} />
                              </a>
                              <a href={"#"} className={"geex-content__todo__list__single__author__img"}>
                                <img src={"/assets/img/avatar/todo/2.svg"} alt={"avatar"} />
                              </a>
                              <a href={"#"} className={"geex-content__todo__list__single__author__img"}>
                                <img src={"/assets/img/avatar/todo/3.svg"} alt={"avatar"} />
                              </a>
                            </div>
                          </div>
                          <div className={"geex-content__todo__list__single"}>
                            <div className={"geex-content__todo__list__single__checkbox"}>
                              <input type={"checkbox"} name={"todo-12"} id={"todo-12"} />
                              <label htmlFor={"todo-12"}>
                                <i className={"uil-check"} />
                              </label>
                            </div>
                            <div className={"geex-content__todo__list__single__text"}>
                              <span className={"geex-content__todo__list__single__subtitle"}>
                                {"January 24th, 2021 04:25 PM"}
                              </span>
                              <h4 className={"geex-content__todo__list__single__title"}>
                                {"Revision 1 : Remove background in main banner Geex Website"}
                              </h4>
                            </div>
                            <div className={"geex-content__todo__list__single__tag"}>
                              <a href={"#"} className={"geex-content__todo__list__single__tag__item primary"}>
                                <i className={"uil uil-tag-alt"} />
                                {" Team "}
                              </a>
                              <a href={"#"} className={"geex-content__todo__list__single__tag__item danger"}>
                                <i className={"uil uil-tag-alt"} />
                                {" High "}
                              </a>
                            </div>
                            <div className={"geex-content__todo__list__single__author"}>
                              <a href={"#"} className={"geex-content__todo__list__single__author__img"}>
                                <img src={"/assets/img/avatar/todo/4.svg"} alt={"avatar"} />
                              </a>
                              <a href={"#"} className={"geex-content__todo__list__single__author__img"}>
                                <img src={"/assets/img/avatar/todo/5.svg"} alt={"avatar"} />
                              </a>
                            </div>
                          </div>
                          <div className={"geex-content__todo__list__single"}>
                            <div className={"geex-content__todo__list__single__checkbox"}>
                              <input type={"checkbox"} name={"todo-13"} id={"todo-13"} />
                              <label htmlFor={"todo-13"}>
                                <i className={"uil-check"} />
                              </label>
                            </div>
                            <div className={"geex-content__todo__list__single__text"}>
                              <span className={"geex-content__todo__list__single__subtitle"}>
                                {"January 24th, 2021 04:25 PM"}
                              </span>
                              <h4 className={"geex-content__todo__list__single__title"}>
                                {"Fix login & register form design "}
                              </h4>
                            </div>
                            <div className={"geex-content__todo__list__single__tag"}>
                              <a href={"#"} className={"geex-content__todo__list__single__tag__item success"}>
                                <i className={"uil uil-tag-alt"} />
                                {" Low "}
                              </a>
                            </div>
                            <div className={"geex-content__todo__list__single__author"}>
                              <a href={"#"} className={"geex-content__todo__list__single__author__img"}>
                                <img src={"/assets/img/avatar/todo/5.svg"} alt={"avatar"} />
                              </a>
                            </div>
                          </div>
                          <div className={"geex-content__todo__list__single"}>
                            <div className={"geex-content__todo__list__single__checkbox"}>
                              <input type={"checkbox"} name={"todo-14"} id={"todo-14"} />
                              <label htmlFor={"todo-14"}>
                                <i className={"uil-check"} />
                              </label>
                            </div>
                            <div className={"geex-content__todo__list__single__text"}>
                              <span className={"geex-content__todo__list__single__subtitle"}>
                                {"January 24th, 2021 04:25 PM"}
                              </span>
                              <h4 className={"geex-content__todo__list__single__title"}>
                                {"Add “cart icon” at Geex Ecommerce Page"}
                              </h4>
                            </div>
                            <div className={"geex-content__todo__list__single__tag"}>
                              <a href={"#"} className={"geex-content__todo__list__single__tag__item primary"}>
                                <i className={"uil uil-tag-alt"} />
                                {" Team "}
                              </a>
                              <a href={"#"} className={"geex-content__todo__list__single__tag__item warning"}>
                                <i className={"uil uil-tag-alt"} />
                                {" Important "}
                              </a>
                            </div>
                            <div className={"geex-content__todo__list__single__author"}>
                              <a href={"#"} className={"geex-content__todo__list__single__author__img"}>
                                <img src={"/assets/img/avatar/todo/7.svg"} alt={"avatar"} />
                              </a>
                              <a href={"#"} className={"geex-content__todo__list__single__author__img"}>
                                <img src={"/assets/img/avatar/todo/8.svg"} alt={"avatar"} />
                              </a>
                              <a href={"#"} className={"geex-content__todo__list__single__author__img"}>
                                <img src={"/assets/img/avatar/todo/9.svg"} alt={"avatar"} />
                              </a>
                            </div>
                          </div>
                          <div className={"geex-content__todo__list__single"}>
                            <div className={"geex-content__todo__list__single__checkbox"}>
                              <input type={"checkbox"} name={"todo-15"} id={"todo-15"} />
                              <label htmlFor={"todo-15"}>
                                <i className={"uil-check"} />
                              </label>
                            </div>
                            <div className={"geex-content__todo__list__single__text"}>
                              <span className={"geex-content__todo__list__single__subtitle"}>
                                {"January 24th, 2021 04:25 PM"}
                              </span>
                              <h4 className={"geex-content__todo__list__single__title"}>
                                {"Attend weekly meeting Geex Design Team"}
                              </h4>
                            </div>
                            <div className={"geex-content__todo__list__single__tag"}>
                              <a href={"#"} className={"geex-content__todo__list__single__tag__item success"}>
                                <i className={"uil uil-tag-alt"} />
                                {" Low "}
                              </a>
                            </div>
                            <div className={"geex-content__todo__list__single__author"}>
                              <a href={"#"} className={"geex-content__todo__list__single__author__img"}>
                                <img src={"/assets/img/avatar/todo/10.svg"} alt={"avatar"} />
                              </a>
                            </div>
                          </div>
                          <div className={"geex-content__todo__list__single"}>
                            <div className={"geex-content__todo__list__single__checkbox"}>
                              <input type={"checkbox"} name={"todo-16"} id={"todo-16"} />
                              <label htmlFor={"todo-16"}>
                                <i className={"uil-check"} />
                              </label>
                            </div>
                            <div className={"geex-content__todo__list__single__text"}>
                              <span className={"geex-content__todo__list__single__subtitle"}>
                                {"January 24th, 2021 04:25 PM"}
                              </span>
                              <h4 className={"geex-content__todo__list__single__title"}>
                                {"Redesign navigation bar in Geex Landing page"}
                              </h4>
                            </div>
                            <div className={"geex-content__todo__list__single__tag"}>
                              <a href={"#"} className={"geex-content__todo__list__single__tag__item warning"}>
                                <i className={"uil uil-tag-alt"} />
                                {" Medium "}
                              </a>
                            </div>
                            <div className={"geex-content__todo__list__single__author"}>
                              <a href={"#"} className={"geex-content__todo__list__single__author__img"}>
                                <img src={"/assets/img/avatar/todo/11.svg"} alt={"avatar"} />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={"geex-content__todo__footer"}>
                      <div className={"geex-content__todo__footer__text"}>
                        {"Showing 4 of 256 data"}
                      </div>
                      <div className={"geex-content__todo__footer__pagination"}>
                        <ul className={"geex-pagination"}>
                          <li className={"geex-pagination__item"}>
                            <a href={"#"} className={"geex-pagination__link active"}>
                              {"1"}
                            </a>
                          </li>
                          <li className={"geex-pagination__item"}>
                            <a href={"#"} className={"geex-pagination__link"}>
                              {"2"}
                            </a>
                          </li>
                          <li className={"geex-pagination__item"}>
                            <a href={"#"} className={"geex-pagination__link"}>
                              {"3"}
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className={"tab-pane fade"} id={"geex-todo-task-content-completed"}>
                    <div className={"geex-content__todo__header"}>
                      <div className={"geex-content__todo__header__title"}>
                        <i className={"uil-info-circle"} />
                        <h4>
                          {" Completed Task"}
                        </h4>
                      </div>
                      <ul className={"nav nav-tabs geex-todo-tab geex-content__todo__header__filter"} id={"geex-todo-tab-completed"} role={"tablist"}>
                        <li className={"geex-content__todo__header__filter__sortby"}>
                          <select aria-label={"Sort tasks"} defaultValue={"newest"}>
                            <option value={"newest"}>
                              {"Newest"}
                            </option>
                            <option value={"oldest"}>
                              {"Oldest"}
                            </option>
                            <option value={"name"}>
                              {"Name"}
                            </option>
                          </select>
                          <i className={"uil-angle-down"} />
                        </li>
                        <li className={"nav-item"} role={"presentation"}>
                          <a href={"#"} id={"todo_list_tab-completed"} className={"active"} data-bs-toggle={"tab"} data-bs-target={"#todo_list_content-completed"} type={"button"} role={"tab"} aria-controls={"todo_list_content-completed"} aria-selected={"false"}>
                            <i className={"uil-bars"} />
                          </a>
                        </li>
                        <li className={"nav-item"} role={"presentation"}>
                          <a href={"#"} id={"todo_grid_tab-completed"} data-bs-toggle={"tab"} data-bs-target={"#todo_grid_content-completed"} type={"button"} role={"tab"} aria-controls={"todo_grid_contant"} aria-selected={"false"}>
                            <i className={"uil-apps"} />
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className={"tab-content geex-transaction-content"}>
                      <div className={"tab-pane fade show active"} id={"todo_list_content-completed"} role={"tabpanel"} aria-labelledby={"todo_list_tab-completed"}>
                        <div className={"geex-content__todo__list"}>
                          <div className={"geex-content__todo__list__single"}>
                            <div className={"geex-content__todo__list__single__checkbox"}>
                              <input type={"checkbox"} name={"completed-todo-1"} id={"completed-todo-1"} />
                              <label htmlFor={"completed-todo-1"}>
                                <i className={"uil-check"} />
                              </label>
                            </div>
                            <div className={"geex-content__todo__list__single__text"}>
                              <span className={"geex-content__todo__list__single__subtitle"}>
                                {"January 24th, 2021 04:25 PM"}
                              </span>
                              <h4 className={"geex-content__todo__list__single__title"}>
                                {"Create custom floating action buttton in Geex Mobile"}
                              </h4>
                            </div>
                            <div className={"geex-content__todo__list__single__tag"}>
                              <a href={"#"} className={"geex-content__todo__list__single__tag__item primary"}>
                                <i className={"uil uil-tag-alt"} />
                                {" Team "}
                              </a>
                              <a href={"#"} className={"geex-content__todo__list__single__tag__item warning"}>
                                <i className={"uil uil-tag-alt"} />
                                {" Important "}
                              </a>
                            </div>
                            <div className={"geex-content__todo__list__single__author"}>
                              <a href={"#"} className={"geex-content__todo__list__single__author__img"}>
                                <img src={"/assets/img/avatar/todo/1.svg"} alt={"avatar"} />
                              </a>
                              <a href={"#"} className={"geex-content__todo__list__single__author__img"}>
                                <img src={"/assets/img/avatar/todo/2.svg"} alt={"avatar"} />
                              </a>
                              <a href={"#"} className={"geex-content__todo__list__single__author__img"}>
                                <img src={"/assets/img/avatar/todo/3.svg"} alt={"avatar"} />
                              </a>
                            </div>
                          </div>
                          <div className={"geex-content__todo__list__single"}>
                            <div className={"geex-content__todo__list__single__checkbox"}>
                              <input type={"checkbox"} name={"completed-todo-2"} id={"completed-todo-2"} />
                              <label htmlFor={"completed-todo-2"}>
                                <i className={"uil-check"} />
                              </label>
                            </div>
                            <div className={"geex-content__todo__list__single__text"}>
                              <span className={"geex-content__todo__list__single__subtitle"}>
                                {"January 24th, 2021 04:25 PM"}
                              </span>
                              <h4 className={"geex-content__todo__list__single__title"}>
                                {"Revision 1 : Remove background in main banner Geex Website"}
                              </h4>
                            </div>
                            <div className={"geex-content__todo__list__single__tag"}>
                              <a href={"#"} className={"geex-content__todo__list__single__tag__item primary"}>
                                <i className={"uil uil-tag-alt"} />
                                {" Team "}
                              </a>
                              <a href={"#"} className={"geex-content__todo__list__single__tag__item danger"}>
                                <i className={"uil uil-tag-alt"} />
                                {" High "}
                              </a>
                            </div>
                            <div className={"geex-content__todo__list__single__author"}>
                              <a href={"#"} className={"geex-content__todo__list__single__author__img"}>
                                <img src={"/assets/img/avatar/todo/4.svg"} alt={"avatar"} />
                              </a>
                              <a href={"#"} className={"geex-content__todo__list__single__author__img"}>
                                <img src={"/assets/img/avatar/todo/5.svg"} alt={"avatar"} />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={"tab-pane fade"} id={"todo_grid_content-completed"} role={"tabpanel"} aria-labelledby={"todo_grid_tab-completed"}>
                        <div className={"geex-content__todo__list geex-content__todo__list--grid"}>
                          <div className={"geex-content__todo__list__single"}>
                            <div className={"geex-content__todo__list__single__checkbox"}>
                              <input type={"checkbox"} name={"completed-todo-11"} id={"completed-todo-11"} />
                              <label htmlFor={"completed-todo-11"}>
                                <i className={"uil-check"} />
                              </label>
                            </div>
                            <div className={"geex-content__todo__list__single__text"}>
                              <span className={"geex-content__todo__list__single__subtitle"}>
                                {"January 24th, 2021 04:25 PM"}
                              </span>
                              <h4 className={"geex-content__todo__list__single__title"}>
                                {"Create custom floating action buttton in Geex Mobile"}
                              </h4>
                            </div>
                            <div className={"geex-content__todo__list__single__tag"}>
                              <a href={"#"} className={"geex-content__todo__list__single__tag__item primary"}>
                                <i className={"uil uil-tag-alt"} />
                                {" Team "}
                              </a>
                              <a href={"#"} className={"geex-content__todo__list__single__tag__item warning"}>
                                <i className={"uil uil-tag-alt"} />
                                {" Important "}
                              </a>
                            </div>
                            <div className={"geex-content__todo__list__single__author"}>
                              <a href={"#"} className={"geex-content__todo__list__single__author__img"}>
                                <img src={"/assets/img/avatar/todo/1.svg"} alt={"avatar"} />
                              </a>
                              <a href={"#"} className={"geex-content__todo__list__single__author__img"}>
                                <img src={"/assets/img/avatar/todo/2.svg"} alt={"avatar"} />
                              </a>
                              <a href={"#"} className={"geex-content__todo__list__single__author__img"}>
                                <img src={"/assets/img/avatar/todo/3.svg"} alt={"avatar"} />
                              </a>
                            </div>
                          </div>
                          <div className={"geex-content__todo__list__single"}>
                            <div className={"geex-content__todo__list__single__checkbox"}>
                              <input type={"checkbox"} name={"completed-todo-12"} id={"completed-todo-12"} />
                              <label htmlFor={"completed-todo-12"}>
                                <i className={"uil-check"} />
                              </label>
                            </div>
                            <div className={"geex-content__todo__list__single__text"}>
                              <span className={"geex-content__todo__list__single__subtitle"}>
                                {"January 24th, 2021 04:25 PM"}
                              </span>
                              <h4 className={"geex-content__todo__list__single__title"}>
                                {"Revision 1 : Remove background in main banner Geex Website"}
                              </h4>
                            </div>
                            <div className={"geex-content__todo__list__single__tag"}>
                              <a href={"#"} className={"geex-content__todo__list__single__tag__item primary"}>
                                <i className={"uil uil-tag-alt"} />
                                {" Team "}
                              </a>
                              <a href={"#"} className={"geex-content__todo__list__single__tag__item danger"}>
                                <i className={"uil uil-tag-alt"} />
                                {" High "}
                              </a>
                            </div>
                            <div className={"geex-content__todo__list__single__author"}>
                              <a href={"#"} className={"geex-content__todo__list__single__author__img"}>
                                <img src={"/assets/img/avatar/todo/4.svg"} alt={"avatar"} />
                              </a>
                              <a href={"#"} className={"geex-content__todo__list__single__author__img"}>
                                <img src={"/assets/img/avatar/todo/5.svg"} alt={"avatar"} />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={"tab-pane fade"} id={"geex-todo-task-content-removed"}>
                    <div className={"geex-content__todo__header"}>
                      <div className={"geex-content__todo__header__title"}>
                        <i className={"uil-info-circle"} />
                        <h4>
                          {" Removed Task"}
                        </h4>
                      </div>
                      <ul className={"nav nav-tabs geex-todo-tab geex-content__todo__header__filter"} id={"geex-todo-removed"} role={"tablist"}>
                        <li className={"geex-content__todo__header__filter__sortby"}>
                          <select aria-label={"Sort tasks"} defaultValue={"newest"}>
                            <option value={"newest"}>
                              {"Newest"}
                            </option>
                            <option value={"oldest"}>
                              {"Oldest"}
                            </option>
                            <option value={"name"}>
                              {"Name"}
                            </option>
                          </select>
                          <i className={"uil-angle-down"} />
                        </li>
                        <li className={"nav-item"} role={"presentation"}>
                          <a href={"#"} id={"todo_list_tab-removed"} className={"active"} data-bs-toggle={"tab"} data-bs-target={"#todo_list_content-removed"} type={"button"} role={"tab"} aria-controls={"todo_list_content-removed"} aria-selected={"false"}>
                            <i className={"uil-bars"} />
                          </a>
                        </li>
                        <li className={"nav-item"} role={"presentation"}>
                          <a href={"#"} id={"todo_grid_tab-removed"} data-bs-toggle={"tab"} data-bs-target={"#todo_grid_content-removed"} type={"button"} role={"tab"} aria-controls={"todo_grid_contant-removed"} aria-selected={"false"}>
                            <i className={"uil-apps"} />
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className={"tab-content geex-transaction-content"}>
                      <div className={"tab-pane fade show active"} id={"todo_list_content-removed"} role={"tabpanel"} aria-labelledby={"todo_list_tab-removed"}>
                        <div className={"geex-content__todo__list"}>
                          <div className={"geex-content__todo__list__single"}>
                            <div className={"geex-content__todo__list__single__checkbox"}>
                              <input type={"checkbox"} name={"removed-todo-1"} id={"removed-todo-1"} />
                              <label htmlFor={"removed-todo-1"}>
                                <i className={"uil-check"} />
                              </label>
                            </div>
                            <div className={"geex-content__todo__list__single__text"}>
                              <span className={"geex-content__todo__list__single__subtitle"}>
                                {"January 24th, 2021 04:25 PM"}
                              </span>
                              <h4 className={"geex-content__todo__list__single__title"}>
                                {"Create custom floating action buttton in Geex Mobile"}
                              </h4>
                            </div>
                            <div className={"geex-content__todo__list__single__tag"}>
                              <a href={"#"} className={"geex-content__todo__list__single__tag__item primary"}>
                                <i className={"uil uil-tag-alt"} />
                                {" Team "}
                              </a>
                              <a href={"#"} className={"geex-content__todo__list__single__tag__item warning"}>
                                <i className={"uil uil-tag-alt"} />
                                {" Important "}
                              </a>
                            </div>
                            <div className={"geex-content__todo__list__single__author"}>
                              <a href={"#"} className={"geex-content__todo__list__single__author__img"}>
                                <img src={"/assets/img/avatar/todo/1.svg"} alt={"avatar"} />
                              </a>
                              <a href={"#"} className={"geex-content__todo__list__single__author__img"}>
                                <img src={"/assets/img/avatar/todo/2.svg"} alt={"avatar"} />
                              </a>
                              <a href={"#"} className={"geex-content__todo__list__single__author__img"}>
                                <img src={"/assets/img/avatar/todo/3.svg"} alt={"avatar"} />
                              </a>
                            </div>
                          </div>
                          <div className={"geex-content__todo__list__single"}>
                            <div className={"geex-content__todo__list__single__checkbox"}>
                              <input type={"checkbox"} name={"removed-todo-2"} id={"removed-todo-2"} />
                              <label htmlFor={"removed-todo-2"}>
                                <i className={"uil-check"} />
                              </label>
                            </div>
                            <div className={"geex-content__todo__list__single__text"}>
                              <span className={"geex-content__todo__list__single__subtitle"}>
                                {"January 24th, 2021 04:25 PM"}
                              </span>
                              <h4 className={"geex-content__todo__list__single__title"}>
                                {"Revision 1 : Remove background in main banner Geex Website"}
                              </h4>
                            </div>
                            <div className={"geex-content__todo__list__single__tag"}>
                              <a href={"#"} className={"geex-content__todo__list__single__tag__item primary"}>
                                <i className={"uil uil-tag-alt"} />
                                {" Team "}
                              </a>
                              <a href={"#"} className={"geex-content__todo__list__single__tag__item danger"}>
                                <i className={"uil uil-tag-alt"} />
                                {" High "}
                              </a>
                            </div>
                            <div className={"geex-content__todo__list__single__author"}>
                              <a href={"#"} className={"geex-content__todo__list__single__author__img"}>
                                <img src={"/assets/img/avatar/todo/4.svg"} alt={"avatar"} />
                              </a>
                              <a href={"#"} className={"geex-content__todo__list__single__author__img"}>
                                <img src={"/assets/img/avatar/todo/5.svg"} alt={"avatar"} />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={"tab-pane fade"} id={"todo_grid_content-removed"} role={"tabpanel"} aria-labelledby={"todo_grid_tab-removed"}>
                        <div className={"geex-content__todo__list geex-content__todo__list--grid"}>
                          <div className={"geex-content__todo__list__single"}>
                            <div className={"geex-content__todo__list__single__checkbox"}>
                              <input type={"checkbox"} name={"removed-todo-11"} id={"removed-todo-11"} />
                              <label htmlFor={"removed-todo-11"}>
                                <i className={"uil-check"} />
                              </label>
                            </div>
                            <div className={"geex-content__todo__list__single__text"}>
                              <span className={"geex-content__todo__list__single__subtitle"}>
                                {"January 24th, 2021 04:25 PM"}
                              </span>
                              <h4 className={"geex-content__todo__list__single__title"}>
                                {"Create custom floating action buttton in Geex Mobile"}
                              </h4>
                            </div>
                            <div className={"geex-content__todo__list__single__tag"}>
                              <a href={"#"} className={"geex-content__todo__list__single__tag__item primary"}>
                                <i className={"uil uil-tag-alt"} />
                                {" Team "}
                              </a>
                              <a href={"#"} className={"geex-content__todo__list__single__tag__item warning"}>
                                <i className={"uil uil-tag-alt"} />
                                {" Important "}
                              </a>
                            </div>
                            <div className={"geex-content__todo__list__single__author"}>
                              <a href={"#"} className={"geex-content__todo__list__single__author__img"}>
                                <img src={"/assets/img/avatar/todo/1.svg"} alt={"avatar"} />
                              </a>
                              <a href={"#"} className={"geex-content__todo__list__single__author__img"}>
                                <img src={"/assets/img/avatar/todo/2.svg"} alt={"avatar"} />
                              </a>
                              <a href={"#"} className={"geex-content__todo__list__single__author__img"}>
                                <img src={"/assets/img/avatar/todo/3.svg"} alt={"avatar"} />
                              </a>
                            </div>
                          </div>
                          <div className={"geex-content__todo__list__single"}>
                            <div className={"geex-content__todo__list__single__checkbox"}>
                              <input type={"checkbox"} name={"removed-todo-12"} id={"removed-todo-12"} />
                              <label htmlFor={"removed-todo-12"}>
                                <i className={"uil-check"} />
                              </label>
                            </div>
                            <div className={"geex-content__todo__list__single__text"}>
                              <span className={"geex-content__todo__list__single__subtitle"}>
                                {"January 24th, 2021 04:25 PM"}
                              </span>
                              <h4 className={"geex-content__todo__list__single__title"}>
                                {"Revision 1 : Remove background in main banner Geex Website"}
                              </h4>
                            </div>
                            <div className={"geex-content__todo__list__single__tag"}>
                              <a href={"#"} className={"geex-content__todo__list__single__tag__item primary"}>
                                <i className={"uil uil-tag-alt"} />
                                {" Team "}
                              </a>
                              <a href={"#"} className={"geex-content__todo__list__single__tag__item danger"}>
                                <i className={"uil uil-tag-alt"} />
                                {" High "}
                              </a>
                            </div>
                            <div className={"geex-content__todo__list__single__author"}>
                              <a href={"#"} className={"geex-content__todo__list__single__author__img"}>
                                <img src={"/assets/img/avatar/todo/4.svg"} alt={"avatar"} />
                              </a>
                              <a href={"#"} className={"geex-content__todo__list__single__author__img"}>
                                <img src={"/assets/img/avatar/todo/5.svg"} alt={"avatar"} />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={"tab-pane fade"} id={"geex-todo-task-content-due"}>
                    <div className={"geex-content__todo__header"}>
                      <div className={"geex-content__todo__header__title"}>
                        <i className={"uil-info-circle"} />
                        <h4>
                          {" Due Task"}
                        </h4>
                      </div>
                      <ul className={"nav nav-tabs geex-todo-tab geex-content__todo__header__filter"} id={"geex-todo-tab-due"} role={"tablist"}>
                        <li className={"geex-content__todo__header__filter__sortby"}>
                          <select aria-label={"Sort tasks"} defaultValue={"newest"}>
                            <option value={"newest"}>
                              {"Newest"}
                            </option>
                            <option value={"oldest"}>
                              {"Oldest"}
                            </option>
                            <option value={"name"}>
                              {"Name"}
                            </option>
                          </select>
                          <i className={"uil-angle-down"} />
                        </li>
                        <li className={"nav-item"} role={"presentation"}>
                          <a href={"#"} id={"todo_list_tab-due"} className={"active"} data-bs-toggle={"tab"} data-bs-target={"#todo_list_content-due"} type={"button"} role={"tab"} aria-controls={"todo_list_content-due"} aria-selected={"false"}>
                            <i className={"uil-bars"} />
                          </a>
                        </li>
                        <li className={"nav-item"} role={"presentation"}>
                          <a href={"#"} id={"todo_grid_tab-due"} data-bs-toggle={"tab"} data-bs-target={"#todo_grid_content-due"} type={"button"} role={"tab"} aria-controls={"todo_grid_contant-due"} aria-selected={"false"}>
                            <i className={"uil-apps"} />
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className={"tab-content geex-transaction-content"}>
                      <div className={"tab-pane fade show active"} id={"todo_list_content-due"} role={"tabpanel"} aria-labelledby={"todo_list_tab-due"}>
                        <div className={"geex-content__todo__list"}>
                          <div className={"geex-content__todo__list__single"}>
                            <div className={"geex-content__todo__list__single__checkbox"}>
                              <input type={"checkbox"} name={"due-todo-1"} id={"due-todo-1"} />
                              <label htmlFor={"due-todo-1"}>
                                <i className={"uil-check"} />
                              </label>
                            </div>
                            <div className={"geex-content__todo__list__single__text"}>
                              <span className={"geex-content__todo__list__single__subtitle"}>
                                {"January 24th, 2021 04:25 PM"}
                              </span>
                              <h4 className={"geex-content__todo__list__single__title"}>
                                {"Create custom floating action buttton in Geex Mobile"}
                              </h4>
                            </div>
                            <div className={"geex-content__todo__list__single__tag"}>
                              <a href={"#"} className={"geex-content__todo__list__single__tag__item primary"}>
                                <i className={"uil uil-tag-alt"} />
                                {" Team "}
                              </a>
                              <a href={"#"} className={"geex-content__todo__list__single__tag__item warning"}>
                                <i className={"uil uil-tag-alt"} />
                                {" Important "}
                              </a>
                            </div>
                            <div className={"geex-content__todo__list__single__author"}>
                              <a href={"#"} className={"geex-content__todo__list__single__author__img"}>
                                <img src={"/assets/img/avatar/todo/1.svg"} alt={"avatar"} />
                              </a>
                              <a href={"#"} className={"geex-content__todo__list__single__author__img"}>
                                <img src={"/assets/img/avatar/todo/2.svg"} alt={"avatar"} />
                              </a>
                              <a href={"#"} className={"geex-content__todo__list__single__author__img"}>
                                <img src={"/assets/img/avatar/todo/3.svg"} alt={"avatar"} />
                              </a>
                            </div>
                          </div>
                          <div className={"geex-content__todo__list__single"}>
                            <div className={"geex-content__todo__list__single__checkbox"}>
                              <input type={"checkbox"} name={"due-todo-2"} id={"due-todo-2"} />
                              <label htmlFor={"due-todo-2"}>
                                <i className={"uil-check"} />
                              </label>
                            </div>
                            <div className={"geex-content__todo__list__single__text"}>
                              <span className={"geex-content__todo__list__single__subtitle"}>
                                {"January 24th, 2021 04:25 PM"}
                              </span>
                              <h4 className={"geex-content__todo__list__single__title"}>
                                {"Revision 1 : Remove background in main banner Geex Website"}
                              </h4>
                            </div>
                            <div className={"geex-content__todo__list__single__tag"}>
                              <a href={"#"} className={"geex-content__todo__list__single__tag__item primary"}>
                                <i className={"uil uil-tag-alt"} />
                                {" Team "}
                              </a>
                              <a href={"#"} className={"geex-content__todo__list__single__tag__item danger"}>
                                <i className={"uil uil-tag-alt"} />
                                {" High "}
                              </a>
                            </div>
                            <div className={"geex-content__todo__list__single__author"}>
                              <a href={"#"} className={"geex-content__todo__list__single__author__img"}>
                                <img src={"/assets/img/avatar/todo/4.svg"} alt={"avatar"} />
                              </a>
                              <a href={"#"} className={"geex-content__todo__list__single__author__img"}>
                                <img src={"/assets/img/avatar/todo/5.svg"} alt={"avatar"} />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={"tab-pane fade"} id={"todo_grid_content-due"} role={"tabpanel"} aria-labelledby={"todo_grid_tab-due"}>
                        <div className={"geex-content__todo__list geex-content__todo__list--grid"}>
                          <div className={"geex-content__todo__list__single"}>
                            <div className={"geex-content__todo__list__single__checkbox"}>
                              <input type={"checkbox"} name={"due-todo-11"} id={"due-todo-11"} />
                              <label htmlFor={"due-todo-11"}>
                                <i className={"uil-check"} />
                              </label>
                            </div>
                            <div className={"geex-content__todo__list__single__text"}>
                              <span className={"geex-content__todo__list__single__subtitle"}>
                                {"January 24th, 2021 04:25 PM"}
                              </span>
                              <h4 className={"geex-content__todo__list__single__title"}>
                                {"Create custom floating action buttton in Geex Mobile"}
                              </h4>
                            </div>
                            <div className={"geex-content__todo__list__single__tag"}>
                              <a href={"#"} className={"geex-content__todo__list__single__tag__item primary"}>
                                <i className={"uil uil-tag-alt"} />
                                {" Team "}
                              </a>
                              <a href={"#"} className={"geex-content__todo__list__single__tag__item warning"}>
                                <i className={"uil uil-tag-alt"} />
                                {" Important "}
                              </a>
                            </div>
                            <div className={"geex-content__todo__list__single__author"}>
                              <a href={"#"} className={"geex-content__todo__list__single__author__img"}>
                                <img src={"/assets/img/avatar/todo/1.svg"} alt={"avatar"} />
                              </a>
                              <a href={"#"} className={"geex-content__todo__list__single__author__img"}>
                                <img src={"/assets/img/avatar/todo/2.svg"} alt={"avatar"} />
                              </a>
                              <a href={"#"} className={"geex-content__todo__list__single__author__img"}>
                                <img src={"/assets/img/avatar/todo/3.svg"} alt={"avatar"} />
                              </a>
                            </div>
                          </div>
                          <div className={"geex-content__todo__list__single"}>
                            <div className={"geex-content__todo__list__single__checkbox"}>
                              <input type={"checkbox"} name={"due-todo-12"} id={"due-todo-12"} />
                              <label htmlFor={"due-todo-12"}>
                                <i className={"uil-check"} />
                              </label>
                            </div>
                            <div className={"geex-content__todo__list__single__text"}>
                              <span className={"geex-content__todo__list__single__subtitle"}>
                                {"January 24th, 2021 04:25 PM"}
                              </span>
                              <h4 className={"geex-content__todo__list__single__title"}>
                                {"Revision 1 : Remove background in main banner Geex Website"}
                              </h4>
                            </div>
                            <div className={"geex-content__todo__list__single__tag"}>
                              <a href={"#"} className={"geex-content__todo__list__single__tag__item primary"}>
                                <i className={"uil uil-tag-alt"} />
                                {" Team "}
                              </a>
                              <a href={"#"} className={"geex-content__todo__list__single__tag__item danger"}>
                                <i className={"uil uil-tag-alt"} />
                                {" High "}
                              </a>
                            </div>
                            <div className={"geex-content__todo__list__single__author"}>
                              <a href={"#"} className={"geex-content__todo__list__single__author__img"}>
                                <img src={"/assets/img/avatar/todo/4.svg"} alt={"avatar"} />
                              </a>
                              <a href={"#"} className={"geex-content__todo__list__single__author__img"}>
                                <img src={"/assets/img/avatar/todo/5.svg"} alt={"avatar"} />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={"geex-content__modal__form"}>
                  <div className={"geex-content__modal__form__header"}>
                    <h3 className={"geex-content__modal__form__title"}>
                      {"Add New Task"}
                    </h3>
                    <button className={"geex-content__modal__form__close"}>
                      <i className={"uil-times"} />
                    </button>
                  </div>
                  <DemoRecordForm scope="todo" className="geex-content__modal__form__wrapper">
                    <div className={"geex-content__modal__form__item"}>
                      <input type={"text"} name="title" className={"geex-content__modal__form__input"} placeholder="Title" aria-label="Title" required maxLength={120} />
                    </div>
                    <div className={"geex-content__modal__form__item"}>
                      <textarea name="description" aria-label="Description" maxLength={500} className={"geex-content__modal__form__input geex-content__modal__form__input--textarea"} placeholder={"Description"} />
                    </div>
                    <div className={"geex-content__modal__form__item"}>
                      <h4 className={"geex-content__modal__form__item__title"}>
                        {"Labels"}
                      </h4>
                      <div className={"geex-content__modal__form__item__single"}>
                        <input type={"checkbox"} id={"geex-content__modal__team"} name={"geex-content__modal__team"} defaultValue={"Team"} />
                        <label htmlFor={"geex-content__modal__team"}>
                          {"Team"}
                        </label>
                      </div>
                      <div className={"geex-content__modal__form__item__single"}>
                        <input type={"checkbox"} id={"geex-content__modal__important"} name={"geex-content__modal__important"} defaultValue={"Important"} />
                        <label htmlFor={"geex-content__modal__important"}>
                          {"Important"}
                        </label>
                      </div>
                      <div className={"geex-content__modal__form__item__single"}>
                        <input type={"checkbox"} id={"geex-content__modal__high"} name={"geex-content__modal__high"} defaultValue={"High"} />
                        <label htmlFor={"geex-content__modal__high"}>
                          {"High"}
                        </label>
                      </div>
                      <div className={"geex-content__modal__form__item__single"}>
                        <input type={"checkbox"} id={"geex-content__modal__medium"} name={"geex-content__modal__medium"} defaultValue={"Medium"} />
                        <label htmlFor={"geex-content__modal__medium"}>
                          {"Medium"}
                        </label>
                      </div>
                      <div className={"geex-content__modal__form__item__single"}>
                        <input type={"checkbox"} id={"geex-content__modal__low"} name={"geex-content__modal__low"} defaultValue={"Low"} />
                        <label htmlFor={"geex-content__modal__low"}>
                          {"Low"}
                        </label>
                      </div>
                    </div>
                    <div className={"geex-content__modal__form__item"}>
                      <button type={"submit"} className={"geex-content__modal__form__submit"}>
                        {"Submit"}
                      </button>
                    </div>
                  </DemoRecordForm>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>







    </>
  );
}
