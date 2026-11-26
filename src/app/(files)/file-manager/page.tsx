import Customizer from "@/components/Customizer";
import Header from "@/components/Header";
import HeaderActions from "@/components/HeaderActions";
import Sidebar from "@/components/Sidebar";
import GeexResources from "@/components/GeexResources";
export const metadata = { title: "File Manager - Geex Dashboard", icons: { icon: "/assets/img/favicon.svg" } };

export default function FileManagerPage() {
  return (
    <>
      <GeexResources styles={["/assets/vendor/css/fullcalendar@5.2.0.css","/assets/vendor/css/bootstrap/bootstrap.css","/assets/vendor/css/swiper.min.css","https://code.jquery.com/ui/1.12.1/themes/cupertino/jquery-ui.css","/assets/css/style.css","/assets/vendor/nice-select2/nice-select2.css","/assets/css/nice-select.css","https://cdn.jsdelivr.net/npm/@iconscout/unicons@4.0.8/css/line.min.css"]} scripts={["/assets/vendor/js/jquery/jquery-3.5.1.min.js","/assets/vendor/js/jquery/jquery-ui.js","/assets/vendor/js/bootstrap/bootstrap.min.js","/assets/vendor/js/swiper.min.js","/assets/vendor/js/fullcalendar@5.2.0.js","/assets/vendor/js/apexcharts.min.js","/assets/vendor/js/dragula.js","/assets/vendor/nice-select2/nice-select2.js","/assets/js/main.js"]} />
      <Header />
      <main className={"geex-main-content"}>
        <Sidebar />
        <Customizer />
        <div className={"geex-content"}>
          <div className={"geex-content__header"}>
            <div className={"geex-content__header__content"}>
              <h2 className={"geex-content__header__title"}>
                {"File Manager"}
              </h2>
              <p className={"geex-content__header__subtitle"}>
                {"Welcome to Geex Modern Admin Dashboard"}
              </p>
            </div>
            <HeaderActions />
          </div>
          <div className={"row g-4"}>
            <div className={"col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12"}>
              <div className={"single-feature-card-area-start"}>
                <div className={"top-feature-wrapper"}>
                  <div className={"icon"}>
                    <img src={"/assets/img/feature/01.png"} alt={"feature"} />
                  </div>
                  <div className={"information"}>
                    <span>
                      {"Storage"}
                    </span>
                    <h5 className={"title"}>
                      {"Dropbox"}
                    </h5>
                  </div>
                </div>
                <div className={"space"}>
                  {"120Gb / 250Gb"}
                </div>
                <div id={"chart-5"} />
              </div>
            </div>
            <div className={"col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12"}>
              <div className={"single-feature-card-area-start"}>
                <div className={"top-feature-wrapper"}>
                  <div className={"icon"}>
                    <img src={"/assets/img/feature/02.png"} alt={"feature"} />
                  </div>
                  <div className={"information"}>
                    <span>
                      {"Storage"}
                    </span>
                    <h5 className={"title"}>
                      {"Google Drive"}
                    </h5>
                  </div>
                </div>
                <div className={"space"}>
                  {"120Gb / 250Gb"}
                </div>
                <div id={"chart-6"} />
              </div>
            </div>
            <div className={"col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12"}>
              <div className={"single-feature-card-area-start"}>
                <div className={"top-feature-wrapper"}>
                  <div className={"icon"}>
                    <img src={"/assets/img/feature/03.png"} alt={"feature"} />
                  </div>
                  <div className={"information"}>
                    <span>
                      {"Storage"}
                    </span>
                    <h5 className={"title"}>
                      {"One Drive"}
                    </h5>
                  </div>
                </div>
                <div className={"space"}>
                  {"120Gb / 250Gb"}
                </div>
                <div id={"chart-7"} />
              </div>
            </div>
            <div className={"col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12"}>
              <div className={"single-feature-card-area-start"}>
                <div className={"top-feature-wrapper"}>
                  <div className={"icon"}>
                    <img src={"/assets/img/feature/04.png"} alt={"feature"} />
                  </div>
                  <div className={"information"}>
                    <span>
                      {"Storage"}
                    </span>
                    <h5 className={"title"}>
                      {"iCloud"}
                    </h5>
                  </div>
                </div>
                <div className={"space"}>
                  {"120Gb / 250Gb"}
                </div>
                <div id={"chart-8"} />
              </div>
            </div>
          </div>
          <div className={" table-responsive geex-content__section geex-content__section--transparent geex-content__todo mt-50"}>
            <div className={"geex-content__todo__sidebar custom_al__file"}>
              <div className={"geex-content__todo__sidebar__label"}>
                <div className={"geex-content__todo__sidebar__text"}>
                  <span>
                    {"Categories"}
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
                <ul className={"nav nav-tabs geex-content__todo__sidebar__tab mb-20"} id={"geex-todo-task-tab"} role={"tablist"}>
                  <li className={"nav-item"} role={"presentation"}>
                    <button className={"nav-link active"} id={"geex-todo-task-tab-important"} data-bs-toggle={"tab"} data-bs-target={"#geex-todo-task-content-important"} type={"button"} role={"tab"} aria-controls={"geex-todo-task-content-important"} aria-selected={"true"}>
                      <img src={"/assets/img/file/01.png"} alt={""} />
                      {" All Files "}
                    </button>
                  </li>
                  <li className={"nav-item"} role={"presentation"}>
                    <button className={"nav-link"} id={"geex-todo-task-tab-completed"} data-bs-toggle={"tab"} data-bs-target={"#geex-todo-task-content-completed"} type={"button"} role={"tab"} aria-controls={"geex-todo-task-content-completed"} aria-selected={"false"}>
                      <img src={"/assets/img/file/02.png"} alt={""} />
                      {" Images "}
                    </button>
                  </li>
                  <li className={"nav-item"} role={"presentation"}>
                    <button className={"nav-link"} id={"geex-todo-task-tab-removed"} data-bs-toggle={"tab"} data-bs-target={"#geex-todo-task-content-removed"} type={"button"} role={"tab"} aria-controls={"geex-todo-task-content-removed"} aria-selected={"false"}>
                      <img src={"/assets/img/file/03.png"} alt={""} />
                      {" Video "}
                    </button>
                  </li>
                  <li className={"nav-item"} role={"presentation"}>
                    <button className={"nav-link"} id={"geex-todo-task-tab-due"} data-bs-toggle={"tab"} data-bs-target={"#geex-todo-task-content-due"} type={"button"} role={"tab"} aria-controls={"geex-todo-task-content-due"} aria-selected={"false"}>
                      <img src={"/assets/img/file/04.png"} alt={""} />
                      {" Music "}
                    </button>
                  </li>
                  <li className={"nav-item"} role={"presentation"}>
                    <button className={"nav-link"} id={"geex-todo-task-tab-due"} data-bs-toggle={"tab"} data-bs-target={"#geex-todo-task-content-documentation"} type={"button"} role={"tab"} aria-controls={"geex-todo-task-content-documentation"} aria-selected={"false"}>
                      <img src={"/assets/img/file/05.png"} alt={""} />
                      {" Document "}
                    </button>
                  </li>
                </ul>
                <div className={"geex-content__todo__sidebar__text"}>
                  <span>
                    {"Go To Folders"}
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
              <div className={"geex-content__todo__sidebar__label al__file"}>
                <ul className={"nav nav-tabs geex-content__todo__sidebar__tab"} id={"geex-todo-task-label"} role={"tablist"}>
                  <li className={"nav-item"} role={"presentation"}>
                    <button className={"nav-link primary active"} id={"team-task-tab"} data-bs-toggle={"tab"} data-bs-target={"#team-task-content"} type={"button"} role={"tab"} aria-controls={"team-task-content"} aria-selected={"true"}>
                      <img src={"/assets/img/file/06.png"} alt={""} />
                      {" Geex Assets "}
                    </button>
                  </li>
                  <li className={"nav-item"} role={"presentation"}>
                    <button className={"nav-link success"} id={"low-task-tab"} data-bs-toggle={"tab"} data-bs-target={"#low-task-content"} type={"button"} role={"tab"} aria-controls={"low-task-content"} aria-selected={"false"}>
                      <img src={"/assets/img/file/06.png"} alt={""} />
                      {" User Interface Propo... "}
                    </button>
                  </li>
                  <li className={"nav-item"} role={"presentation"}>
                    <button className={"nav-link warning"} id={"medium-task-tab"} data-bs-toggle={"tab"} data-bs-target={"#medium-task-content"} type={"button"} role={"tab"} aria-controls={"medium-task-content"} aria-selected={"false"}>
                      <img src={"/assets/img/file/06.png"} alt={""} />
                      {" Documentation of... "}
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            <div className={"geex-content__todo__content tab-content"} id={"geex-todo-task-content"}>
              <div className={"tab-pane fade show active"} id={"geex-todo-task-content-important"}>
                <div className={"geex-content__todo__header custom_al__file"}>
                  <div className={"geex-content__todo__header__title"}>
                    <div className={"title"}>
                      <i className={"uil-info-circle"} />
                      <h4>
                        {"File"}
                      </h4>
                    </div>
                    <span>
                      {"Eum fuga consequuntur ut et."}
                    </span>
                  </div>
                  <ul className={"nav nav-tabs geex-todo-tab geex-content__todo__header__filter"} id={"geex-todo-tab"} role={"tablist"}>
                    <li className={"geex-content__todo__header__filter__sortby"}>
                      <select aria-label={"Sort files"} defaultValue={"newest"}>
                        <option value={"newest"}>
                          {"Recent"}
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
                  </ul>
                </div>
                <div className={"file_manager_content__body"}>
                  <div className={"top_area_file__manager"}>
                    <div className={"left"}>
                      <div className={"image-logo"}>
                        <img src={"/assets/img/file/07.png"} alt={"file_manager"} />
                      </div>
                      <div className={"directory"}>
                        <span>
                          {"Storage /"}
                        </span>
                        <span>
                          {"Drive C /"}
                        </span>
                        <span>
                          {"Libary "}
                        </span>
                      </div>
                    </div>
                    <div className={"right"}>
                      <div className={"search-area"} style={{"position":"relative"}}>
                        <div className={"geex-content__header__quickaction__link"}>
                          <i className={"uil-search"} />
                        </div>
                        <div className={"geex-content__header__searchform geex-content__header__popup"}>
                          <input type={"text"} placeholder={"Search"} className={"geex-content__header__btn"} />
                          <i className={"uil uil-search"} />
                        </div>
                      </div>
                      <div className={"icons"}>
                        <i className={"uil-star"} />
                        <i className={"uil-square-full"} />
                      </div>
                    </div>
                  </div>
                  <div className={"mt-30 geex-content__section geex-content__form table-responsive"}>
                    <table className={"table-reviews-geex-1 custom_filemanager"}>
                      <thead>
                        <tr style={{"width":"100%"}}>
                          <th style={{"width":"40%"}}>
                            {"File Name"}
                          </th>
                          <th style={{"width":"15%"}}>
                            {"File Items"}
                          </th>
                          <th style={{"width":"30%"}}>
                            {"Last Modified"}
                          </th>
                          <th style={{"width":"15%"}}>
                            {"File Size"}
                          </th>
                        </tr>
                      </thead>
                      <tbody className={""}>
                        <tr>
                          <td>
                            <div className={"author-area"}>
                              <div className={"profile-picture"}>
                                <img src={"/assets/img/file/06.png"} alt={"reviews"} />
                              </div>
                              <p>
                                {"Geex Main Proposal Documents"}
                              </p>
                            </div>
                          </td>
                          <td>
                            <span className={"designation"}>
                              {"24 Folders"}
                            </span>
                          </td>
                          <td>
                            <span className={"name"}>
                              {"20min ago"}
                            </span>
                          </td>
                          <td>
                            <a href={"#"}>
                              {" 24,476 Mb "}
                            </a>
                          </td>
                        </tr>
                        <tr className={"odd"}>
                          <td>
                            <div className={"author-area"}>
                              <div className={"profile-picture"}>
                                <img src={"/assets/img/file/04.png"} alt={"reviews"} />
                              </div>
                              <p>
                                {"EnglishLesson1.mp3"}
                              </p>
                            </div>
                          </td>
                          <td>
                            <span className={"designation"}>
                              {"24 Folders"}
                            </span>
                          </td>
                          <td>
                            <span className={"name"}>
                              {"20min ago"}
                            </span>
                          </td>
                          <td>
                            <a href={"#"}>
                              {" 24,476 Mb "}
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className={"author-area"}>
                              <div className={"profile-picture"}>
                                <img src={"/assets/img/file/03.png"} alt={"reviews"} />
                              </div>
                              <p>
                                {"Take-a-look-my-garden.mp4"}
                              </p>
                            </div>
                          </td>
                          <td>
                            <span className={"designation"}>
                              {"24 Folders"}
                            </span>
                          </td>
                          <td>
                            <span className={"name"}>
                              {"20min ago"}
                            </span>
                          </td>
                          <td>
                            <a href={"#"}>
                              {" 24,476 Mb "}
                            </a>
                          </td>
                        </tr>
                        <tr className={"odd"}>
                          <td>
                            <div className={"author-area"}>
                              <div className={"profile-picture"}>
                                <img src={"/assets/img/file/05.png"} alt={"reviews"} />
                              </div>
                              <p>
                                {"Geex-Mobile.pdf"}
                              </p>
                            </div>
                          </td>
                          <td>
                            <span className={"designation"}>
                              {"24 Folders"}
                            </span>
                          </td>
                          <td>
                            <span className={"name"}>
                              {"20min ago"}
                            </span>
                          </td>
                          <td>
                            <a href={"#"}>
                              {" 24,476 Mb "}
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className={"author-area"}>
                              <div className={"profile-picture"}>
                                <img src={"/assets/img/file/02.png"} alt={"reviews"} />
                              </div>
                              <p>
                                {"Wash-hand.jpeg"}
                              </p>
                            </div>
                          </td>
                          <td>
                            <span className={"designation"}>
                              {"24 Folders"}
                            </span>
                          </td>
                          <td>
                            <span className={"name"}>
                              {"20min ago"}
                            </span>
                          </td>
                          <td>
                            <a href={"#"}>
                              {" 24,476 Mb "}
                            </a>
                          </td>
                        </tr>
                        <tr className={"odd"}>
                          <td>
                            <div className={"author-area"}>
                              <div className={"profile-picture"}>
                                <img src={"/assets/img/file/04.png"} alt={"reviews"} />
                              </div>
                              <p>
                                {"EnglishLesson1.mp3"}
                              </p>
                            </div>
                          </td>
                          <td>
                            <span className={"designation"}>
                              {"24 Folders"}
                            </span>
                          </td>
                          <td>
                            <span className={"name"}>
                              {"20min ago"}
                            </span>
                          </td>
                          <td>
                            <a href={"#"}>
                              {" 24,476 Mb "}
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className={"author-area"}>
                              <div className={"profile-picture"}>
                                <img src={"/assets/img/file/03.png"} alt={"reviews"} />
                              </div>
                              <p>
                                {"Take-a-look-my-garden.mp4"}
                              </p>
                            </div>
                          </td>
                          <td>
                            <span className={"designation"}>
                              {"24 Folders"}
                            </span>
                          </td>
                          <td>
                            <span className={"name"}>
                              {"20min ago"}
                            </span>
                          </td>
                          <td>
                            <a href={"#"}>
                              {" 24,476 Mb "}
                            </a>
                          </td>
                        </tr>
                        <tr className={"odd"}>
                          <td>
                            <div className={"author-area"}>
                              <div className={"profile-picture"}>
                                <img src={"/assets/img/file/05.png"} alt={"reviews"} />
                              </div>
                              <p>
                                {"Geex-Mobile.pdf"}
                              </p>
                            </div>
                          </td>
                          <td>
                            <span className={"designation"}>
                              {"24 Folders"}
                            </span>
                          </td>
                          <td>
                            <span className={"name"}>
                              {"20min ago"}
                            </span>
                          </td>
                          <td>
                            <a href={"#"}>
                              {" 24,476 Mb "}
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className={"author-area"}>
                              <div className={"profile-picture"}>
                                <img src={"/assets/img/file/02.png"} alt={"reviews"} />
                              </div>
                              <p>
                                {"Wash-hand.jpeg"}
                              </p>
                            </div>
                          </td>
                          <td>
                            <span className={"designation"}>
                              {"24 Folders"}
                            </span>
                          </td>
                          <td>
                            <span className={"name"}>
                              {"20min ago"}
                            </span>
                          </td>
                          <td>
                            <a href={"#"}>
                              {" 24,476 Mb "}
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className={"tab-pane fade"} id={"geex-todo-task-content-completed"}>
                <div className={"geex-content__todo__header custom_al__file"}>
                  <div className={"geex-content__todo__header__title"}>
                    <div className={"title"}>
                      <i className={"uil-info-circle"} />
                      <h4>
                        {"Images"}
                      </h4>
                    </div>
                    <span>
                      {"Eum fuga consequuntur ut et."}
                    </span>
                  </div>
                  <ul className={"nav nav-tabs geex-todo-tab geex-content__todo__header__filter"} id={"geex-todo-tab"} role={"tablist"}>
                    <li className={"geex-content__todo__header__filter__sortby"}>
                      <select aria-label={"Sort files"} defaultValue={"newest"}>
                        <option value={"newest"}>
                          {"Recent"}
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
                  </ul>
                </div>
                <div className={"file_manager_content__body"}>
                  <div className={"top_area_file__manager"}>
                    <div className={"left"}>
                      <div className={"image-logo"}>
                        <img src={"/assets/img/file/07.png"} alt={"file_manager"} />
                      </div>
                      <div className={"directory"}>
                        <span>
                          {"Storage /"}
                        </span>
                        <span>
                          {"Drive H /"}
                        </span>
                        <span>
                          {"Booking "}
                        </span>
                      </div>
                    </div>
                    <div className={"right"}>
                      <div className={"search-area"} style={{"position":"relative"}}>
                        <div className={"geex-content__header__quickaction__link"}>
                          <i className={"uil-search"} />
                        </div>
                        <div className={"geex-content__header__searchform geex-content__header__popup"}>
                          <input type={"text"} placeholder={"Search"} className={"geex-content__header__btn"} />
                          <i className={"uil uil-search"} />
                        </div>
                      </div>
                      <div className={"icons"}>
                        <i className={"uil-star"} />
                        <i className={"uil-square-full"} />
                      </div>
                    </div>
                  </div>
                  <div className={"mt-30 geex-content__section geex-content__form table-responsive"}>
                    <table className={"table-reviews-geex-1 custom_filemanager"}>
                      <thead>
                        <tr style={{"width":"100%"}}>
                          <th style={{"width":"40%"}}>
                            {"File Name"}
                          </th>
                          <th style={{"width":"15%"}}>
                            {"File Items"}
                          </th>
                          <th style={{"width":"30%"}}>
                            {"Last Modified"}
                          </th>
                          <th style={{"width":"15%"}}>
                            {"File Size"}
                          </th>
                        </tr>
                      </thead>
                      <tbody className={""}>
                        <tr>
                          <td>
                            <div className={"author-area"}>
                              <div className={"profile-picture"}>
                                <img src={"/assets/img/file/06.png"} alt={"reviews"} />
                              </div>
                              <p>
                                {"Geex Documents"}
                              </p>
                            </div>
                          </td>
                          <td>
                            <span className={"designation"}>
                              {"24 Folders"}
                            </span>
                          </td>
                          <td>
                            <span className={"name"}>
                              {"20min ago"}
                            </span>
                          </td>
                          <td>
                            <a href={"#"}>
                              {" 24,476 Mb "}
                            </a>
                          </td>
                        </tr>
                        <tr className={"odd"}>
                          <td>
                            <div className={"author-area"}>
                              <div className={"profile-picture"}>
                                <img src={"/assets/img/file/04.png"} alt={"reviews"} />
                              </div>
                              <p>
                                {"Bangla.mp3"}
                              </p>
                            </div>
                          </td>
                          <td>
                            <span className={"designation"}>
                              {"24 Folders"}
                            </span>
                          </td>
                          <td>
                            <span className={"name"}>
                              {"20min ago"}
                            </span>
                          </td>
                          <td>
                            <a href={"#"}>
                              {" 24,476 Mb "}
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className={"author-area"}>
                              <div className={"profile-picture"}>
                                <img src={"/assets/img/file/03.png"} alt={"reviews"} />
                              </div>
                              <p>
                                {"garden.mp4"}
                              </p>
                            </div>
                          </td>
                          <td>
                            <span className={"designation"}>
                              {"24 Folders"}
                            </span>
                          </td>
                          <td>
                            <span className={"name"}>
                              {"20min ago"}
                            </span>
                          </td>
                          <td>
                            <a href={"#"}>
                              {" 24,476 Mb "}
                            </a>
                          </td>
                        </tr>
                        <tr className={"odd"}>
                          <td>
                            <div className={"author-area"}>
                              <div className={"profile-picture"}>
                                <img src={"/assets/img/file/05.png"} alt={"reviews"} />
                              </div>
                              <p>
                                {"Mobile-Photo.pdf"}
                              </p>
                            </div>
                          </td>
                          <td>
                            <span className={"designation"}>
                              {"24 Folders"}
                            </span>
                          </td>
                          <td>
                            <span className={"name"}>
                              {"20min ago"}
                            </span>
                          </td>
                          <td>
                            <a href={"#"}>
                              {" 24,476 Mb "}
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className={"author-area"}>
                              <div className={"profile-picture"}>
                                <img src={"/assets/img/file/02.png"} alt={"reviews"} />
                              </div>
                              <p>
                                {"image_bg.jpeg"}
                              </p>
                            </div>
                          </td>
                          <td>
                            <span className={"designation"}>
                              {"24 Folders"}
                            </span>
                          </td>
                          <td>
                            <span className={"name"}>
                              {"20min ago"}
                            </span>
                          </td>
                          <td>
                            <a href={"#"}>
                              {" 24,476 Mb "}
                            </a>
                          </td>
                        </tr>
                        <tr className={"odd"}>
                          <td>
                            <div className={"author-area"}>
                              <div className={"profile-picture"}>
                                <img src={"/assets/img/file/04.png"} alt={"reviews"} />
                              </div>
                              <p>
                                {"EnglishLesson1.mp3"}
                              </p>
                            </div>
                          </td>
                          <td>
                            <span className={"designation"}>
                              {"24 Folders"}
                            </span>
                          </td>
                          <td>
                            <span className={"name"}>
                              {"20min ago"}
                            </span>
                          </td>
                          <td>
                            <a href={"#"}>
                              {" 24,476 Mb "}
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className={"author-area"}>
                              <div className={"profile-picture"}>
                                <img src={"/assets/img/file/03.png"} alt={"reviews"} />
                              </div>
                              <p>
                                {"Take-a-look-my-garden.mp4"}
                              </p>
                            </div>
                          </td>
                          <td>
                            <span className={"designation"}>
                              {"24 Folders"}
                            </span>
                          </td>
                          <td>
                            <span className={"name"}>
                              {"20min ago"}
                            </span>
                          </td>
                          <td>
                            <a href={"#"}>
                              {" 24,476 Mb "}
                            </a>
                          </td>
                        </tr>
                        <tr className={"odd"}>
                          <td>
                            <div className={"author-area"}>
                              <div className={"profile-picture"}>
                                <img src={"/assets/img/file/05.png"} alt={"reviews"} />
                              </div>
                              <p>
                                {"Geex-Mobile.pdf"}
                              </p>
                            </div>
                          </td>
                          <td>
                            <span className={"designation"}>
                              {"24 Folders"}
                            </span>
                          </td>
                          <td>
                            <span className={"name"}>
                              {"20min ago"}
                            </span>
                          </td>
                          <td>
                            <a href={"#"}>
                              {" 24,476 Mb "}
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className={"author-area"}>
                              <div className={"profile-picture"}>
                                <img src={"/assets/img/file/02.png"} alt={"reviews"} />
                              </div>
                              <p>
                                {"Wash-hand.jpeg"}
                              </p>
                            </div>
                          </td>
                          <td>
                            <span className={"designation"}>
                              {"24 Folders"}
                            </span>
                          </td>
                          <td>
                            <span className={"name"}>
                              {"20min ago"}
                            </span>
                          </td>
                          <td>
                            <a href={"#"}>
                              {" 24,476 Mb "}
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className={"tab-pane fade"} id={"geex-todo-task-content-removed"}>
                <div className={"geex-content__todo__header custom_al__file"}>
                  <div className={"geex-content__todo__header__title"}>
                    <div className={"title"}>
                      <i className={"uil-info-circle"} />
                      <h4>
                        {"Video"}
                      </h4>
                    </div>
                    <span>
                      {"Eum fuga consequuntur ut et."}
                    </span>
                  </div>
                  <ul className={"nav nav-tabs geex-todo-tab geex-content__todo__header__filter"} id={"geex-todo-tab"} role={"tablist"}>
                    <li className={"geex-content__todo__header__filter__sortby"}>
                      <select aria-label={"Sort files"} defaultValue={"newest"}>
                        <option value={"newest"}>
                          {"Recent"}
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
                  </ul>
                </div>
                <div className={"file_manager_content__body"}>
                  <div className={"top_area_file__manager"}>
                    <div className={"left"}>
                      <div className={"image-logo"}>
                        <img src={"/assets/img/file/07.png"} alt={"file_manager"} />
                      </div>
                      <div className={"directory"}>
                        <span>
                          {"Storage /"}
                        </span>
                        <span>
                          {"Drive B /"}
                        </span>
                        <span>
                          {"Tutor "}
                        </span>
                      </div>
                    </div>
                    <div className={"right"}>
                      <div className={"search-area"} style={{"position":"relative"}}>
                        <div className={"geex-content__header__quickaction__link"}>
                          <i className={"uil-search"} />
                        </div>
                        <div className={"geex-content__header__searchform geex-content__header__popup"}>
                          <input type={"text"} placeholder={"Search"} className={"geex-content__header__btn"} />
                          <i className={"uil uil-search"} />
                        </div>
                      </div>
                      <div className={"icons"}>
                        <i className={"uil-star"} />
                        <i className={"uil-square-full"} />
                      </div>
                    </div>
                  </div>
                  <div className={"mt-30 geex-content__section geex-content__form table-responsive"}>
                    <table className={"table-reviews-geex-1 custom_filemanager"}>
                      <thead>
                        <tr style={{"width":"100%"}}>
                          <th style={{"width":"40%"}}>
                            {"File Name"}
                          </th>
                          <th style={{"width":"15%"}}>
                            {"File Items"}
                          </th>
                          <th style={{"width":"30%"}}>
                            {"Last Modified"}
                          </th>
                          <th style={{"width":"15%"}}>
                            {"File Size"}
                          </th>
                        </tr>
                      </thead>
                      <tbody className={""}>
                        <tr>
                          <td>
                            <div className={"author-area"}>
                              <div className={"profile-picture"}>
                                <img src={"/assets/img/file/06.png"} alt={"reviews"} />
                              </div>
                              <p>
                                {"Proposal Documents"}
                              </p>
                            </div>
                          </td>
                          <td>
                            <span className={"designation"}>
                              {"24 Folders"}
                            </span>
                          </td>
                          <td>
                            <span className={"name"}>
                              {"20min ago"}
                            </span>
                          </td>
                          <td>
                            <a href={"#"}>
                              {" 24,476 Mb "}
                            </a>
                          </td>
                        </tr>
                        <tr className={"odd"}>
                          <td>
                            <div className={"author-area"}>
                              <div className={"profile-picture"}>
                                <img src={"/assets/img/file/04.png"} alt={"reviews"} />
                              </div>
                              <p>
                                {"SocialNetwork.mp3"}
                              </p>
                            </div>
                          </td>
                          <td>
                            <span className={"designation"}>
                              {"24 Folders"}
                            </span>
                          </td>
                          <td>
                            <span className={"name"}>
                              {"20min ago"}
                            </span>
                          </td>
                          <td>
                            <a href={"#"}>
                              {" 24,476 Mb "}
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className={"author-area"}>
                              <div className={"profile-picture"}>
                                <img src={"/assets/img/file/03.png"} alt={"reviews"} />
                              </div>
                              <p>
                                {"Take-a-look-my-garden.mp4"}
                              </p>
                            </div>
                          </td>
                          <td>
                            <span className={"designation"}>
                              {"24 Folders"}
                            </span>
                          </td>
                          <td>
                            <span className={"name"}>
                              {"20min ago"}
                            </span>
                          </td>
                          <td>
                            <a href={"#"}>
                              {" 24,476 Mb "}
                            </a>
                          </td>
                        </tr>
                        <tr className={"odd"}>
                          <td>
                            <div className={"author-area"}>
                              <div className={"profile-picture"}>
                                <img src={"/assets/img/file/05.png"} alt={"reviews"} />
                              </div>
                              <p>
                                {"Geex-Mobile.pdf"}
                              </p>
                            </div>
                          </td>
                          <td>
                            <span className={"designation"}>
                              {"24 Folders"}
                            </span>
                          </td>
                          <td>
                            <span className={"name"}>
                              {"20min ago"}
                            </span>
                          </td>
                          <td>
                            <a href={"#"}>
                              {" 24,476 Mb "}
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className={"author-area"}>
                              <div className={"profile-picture"}>
                                <img src={"/assets/img/file/02.png"} alt={"reviews"} />
                              </div>
                              <p>
                                {"Wash-hand.jpeg"}
                              </p>
                            </div>
                          </td>
                          <td>
                            <span className={"designation"}>
                              {"24 Folders"}
                            </span>
                          </td>
                          <td>
                            <span className={"name"}>
                              {"20min ago"}
                            </span>
                          </td>
                          <td>
                            <a href={"#"}>
                              {" 24,476 Mb "}
                            </a>
                          </td>
                        </tr>
                        <tr className={"odd"}>
                          <td>
                            <div className={"author-area"}>
                              <div className={"profile-picture"}>
                                <img src={"/assets/img/file/04.png"} alt={"reviews"} />
                              </div>
                              <p>
                                {"EnglishLesson1.mp3"}
                              </p>
                            </div>
                          </td>
                          <td>
                            <span className={"designation"}>
                              {"24 Folders"}
                            </span>
                          </td>
                          <td>
                            <span className={"name"}>
                              {"20min ago"}
                            </span>
                          </td>
                          <td>
                            <a href={"#"}>
                              {" 24,476 Mb "}
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className={"author-area"}>
                              <div className={"profile-picture"}>
                                <img src={"/assets/img/file/03.png"} alt={"reviews"} />
                              </div>
                              <p>
                                {"Take-a-look-my-garden.mp4"}
                              </p>
                            </div>
                          </td>
                          <td>
                            <span className={"designation"}>
                              {"24 Folders"}
                            </span>
                          </td>
                          <td>
                            <span className={"name"}>
                              {"20min ago"}
                            </span>
                          </td>
                          <td>
                            <a href={"#"}>
                              {" 24,476 Mb "}
                            </a>
                          </td>
                        </tr>
                        <tr className={"odd"}>
                          <td>
                            <div className={"author-area"}>
                              <div className={"profile-picture"}>
                                <img src={"/assets/img/file/05.png"} alt={"reviews"} />
                              </div>
                              <p>
                                {"Geex-Mobile.pdf"}
                              </p>
                            </div>
                          </td>
                          <td>
                            <span className={"designation"}>
                              {"24 Folders"}
                            </span>
                          </td>
                          <td>
                            <span className={"name"}>
                              {"20min ago"}
                            </span>
                          </td>
                          <td>
                            <a href={"#"}>
                              {" 24,476 Mb "}
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className={"author-area"}>
                              <div className={"profile-picture"}>
                                <img src={"/assets/img/file/02.png"} alt={"reviews"} />
                              </div>
                              <p>
                                {"Wash-hand.jpeg"}
                              </p>
                            </div>
                          </td>
                          <td>
                            <span className={"designation"}>
                              {"24 Folders"}
                            </span>
                          </td>
                          <td>
                            <span className={"name"}>
                              {"20min ago"}
                            </span>
                          </td>
                          <td>
                            <a href={"#"}>
                              {" 24,476 Mb "}
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className={"tab-pane fade"} id={"geex-todo-task-content-due"}>
                <div className={"geex-content__todo__header custom_al__file"}>
                  <div className={"geex-content__todo__header__title"}>
                    <div className={"title"}>
                      <i className={"uil-info-circle"} />
                      <h4>
                        {"Music"}
                      </h4>
                    </div>
                    <span>
                      {"Eum fuga consequuntur ut et."}
                    </span>
                  </div>
                  <ul className={"nav nav-tabs geex-todo-tab geex-content__todo__header__filter"} id={"geex-todo-tab"} role={"tablist"}>
                    <li className={"geex-content__todo__header__filter__sortby"}>
                      <select aria-label={"Sort files"} defaultValue={"newest"}>
                        <option value={"newest"}>
                          {"Recent"}
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
                  </ul>
                </div>
                <div className={"file_manager_content__body"}>
                  <div className={"top_area_file__manager"}>
                    <div className={"left"}>
                      <div className={"image-logo"}>
                        <img src={"/assets/img/file/07.png"} alt={"file_manager"} />
                      </div>
                      <div className={"directory"}>
                        <span>
                          {"Storage /"}
                        </span>
                        <span>
                          {"Drive G /"}
                        </span>
                        <span>
                          {"Cooking "}
                        </span>
                      </div>
                    </div>
                    <div className={"right"}>
                      <div className={"search-area"} style={{"position":"relative"}}>
                        <div className={"geex-content__header__quickaction__link"}>
                          <i className={"uil-search"} />
                        </div>
                        <div className={"geex-content__header__searchform geex-content__header__popup"}>
                          <input type={"text"} placeholder={"Search"} className={"geex-content__header__btn"} />
                          <i className={"uil uil-search"} />
                        </div>
                      </div>
                      <div className={"icons"}>
                        <i className={"uil-star"} />
                        <i className={"uil-square-full"} />
                      </div>
                    </div>
                  </div>
                  <div className={"mt-30 geex-content__section geex-content__form table-responsive"}>
                    <table className={"table-reviews-geex-1 custom_filemanager"}>
                      <thead>
                        <tr style={{"width":"100%"}}>
                          <th style={{"width":"40%"}}>
                            {"File Name"}
                          </th>
                          <th style={{"width":"15%"}}>
                            {"File Items"}
                          </th>
                          <th style={{"width":"30%"}}>
                            {"Last Modified"}
                          </th>
                          <th style={{"width":"15%"}}>
                            {"File Size"}
                          </th>
                        </tr>
                      </thead>
                      <tbody className={""}>
                        <tr>
                          <td>
                            <div className={"author-area"}>
                              <div className={"profile-picture"}>
                                <img src={"/assets/img/file/06.png"} alt={"reviews"} />
                              </div>
                              <p>
                                {"Geex Main Proposal Documents"}
                              </p>
                            </div>
                          </td>
                          <td>
                            <span className={"designation"}>
                              {"24 Folders"}
                            </span>
                          </td>
                          <td>
                            <span className={"name"}>
                              {"20min ago"}
                            </span>
                          </td>
                          <td>
                            <a href={"#"}>
                              {" 24,476 Mb "}
                            </a>
                          </td>
                        </tr>
                        <tr className={"odd"}>
                          <td>
                            <div className={"author-area"}>
                              <div className={"profile-picture"}>
                                <img src={"/assets/img/file/04.png"} alt={"reviews"} />
                              </div>
                              <p>
                                {"EnglishLesson1.mp3"}
                              </p>
                            </div>
                          </td>
                          <td>
                            <span className={"designation"}>
                              {"24 Folders"}
                            </span>
                          </td>
                          <td>
                            <span className={"name"}>
                              {"20min ago"}
                            </span>
                          </td>
                          <td>
                            <a href={"#"}>
                              {" 24,476 Mb "}
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className={"author-area"}>
                              <div className={"profile-picture"}>
                                <img src={"/assets/img/file/03.png"} alt={"reviews"} />
                              </div>
                              <p>
                                {"Take-a-look-my-garden.mp4"}
                              </p>
                            </div>
                          </td>
                          <td>
                            <span className={"designation"}>
                              {"24 Folders"}
                            </span>
                          </td>
                          <td>
                            <span className={"name"}>
                              {"20min ago"}
                            </span>
                          </td>
                          <td>
                            <a href={"#"}>
                              {" 24,476 Mb "}
                            </a>
                          </td>
                        </tr>
                        <tr className={"odd"}>
                          <td>
                            <div className={"author-area"}>
                              <div className={"profile-picture"}>
                                <img src={"/assets/img/file/05.png"} alt={"reviews"} />
                              </div>
                              <p>
                                {"Geex-Mobile.pdf"}
                              </p>
                            </div>
                          </td>
                          <td>
                            <span className={"designation"}>
                              {"24 Folders"}
                            </span>
                          </td>
                          <td>
                            <span className={"name"}>
                              {"20min ago"}
                            </span>
                          </td>
                          <td>
                            <a href={"#"}>
                              {" 24,476 Mb "}
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className={"author-area"}>
                              <div className={"profile-picture"}>
                                <img src={"/assets/img/file/02.png"} alt={"reviews"} />
                              </div>
                              <p>
                                {"Wash-hand.jpeg"}
                              </p>
                            </div>
                          </td>
                          <td>
                            <span className={"designation"}>
                              {"24 Folders"}
                            </span>
                          </td>
                          <td>
                            <span className={"name"}>
                              {"20min ago"}
                            </span>
                          </td>
                          <td>
                            <a href={"#"}>
                              {" 24,476 Mb "}
                            </a>
                          </td>
                        </tr>
                        <tr className={"odd"}>
                          <td>
                            <div className={"author-area"}>
                              <div className={"profile-picture"}>
                                <img src={"/assets/img/file/04.png"} alt={"reviews"} />
                              </div>
                              <p>
                                {"EnglishLesson1.mp3"}
                              </p>
                            </div>
                          </td>
                          <td>
                            <span className={"designation"}>
                              {"24 Folders"}
                            </span>
                          </td>
                          <td>
                            <span className={"name"}>
                              {"20min ago"}
                            </span>
                          </td>
                          <td>
                            <a href={"#"}>
                              {" 24,476 Mb "}
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className={"author-area"}>
                              <div className={"profile-picture"}>
                                <img src={"/assets/img/file/03.png"} alt={"reviews"} />
                              </div>
                              <p>
                                {"Take-a-look-my-garden.mp4"}
                              </p>
                            </div>
                          </td>
                          <td>
                            <span className={"designation"}>
                              {"24 Folders"}
                            </span>
                          </td>
                          <td>
                            <span className={"name"}>
                              {"20min ago"}
                            </span>
                          </td>
                          <td>
                            <a href={"#"}>
                              {" 24,476 Mb "}
                            </a>
                          </td>
                        </tr>
                        <tr className={"odd"}>
                          <td>
                            <div className={"author-area"}>
                              <div className={"profile-picture"}>
                                <img src={"/assets/img/file/05.png"} alt={"reviews"} />
                              </div>
                              <p>
                                {"Geex-Mobile.pdf"}
                              </p>
                            </div>
                          </td>
                          <td>
                            <span className={"designation"}>
                              {"24 Folders"}
                            </span>
                          </td>
                          <td>
                            <span className={"name"}>
                              {"20min ago"}
                            </span>
                          </td>
                          <td>
                            <a href={"#"}>
                              {" 24,476 Mb "}
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className={"author-area"}>
                              <div className={"profile-picture"}>
                                <img src={"/assets/img/file/02.png"} alt={"reviews"} />
                              </div>
                              <p>
                                {"Wash-hand.jpeg"}
                              </p>
                            </div>
                          </td>
                          <td>
                            <span className={"designation"}>
                              {"24 Folders"}
                            </span>
                          </td>
                          <td>
                            <span className={"name"}>
                              {"20min ago"}
                            </span>
                          </td>
                          <td>
                            <a href={"#"}>
                              {" 24,476 Mb "}
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className={"tab-pane fade"} id={"geex-todo-task-content-documentation"}>
                <div className={"geex-content__todo__header custom_al__file"}>
                  <div className={"geex-content__todo__header__title"}>
                    <div className={"title"}>
                      <i className={"uil-info-circle"} />
                      <h4>
                        {"Document"}
                      </h4>
                    </div>
                    <span>
                      {"Eum fuga consequuntur ut et."}
                    </span>
                  </div>
                  <ul className={"nav nav-tabs geex-todo-tab geex-content__todo__header__filter"} id={"geex-todo-tab"} role={"tablist"}>
                    <li className={"geex-content__todo__header__filter__sortby"}>
                      <select aria-label={"Sort files"} defaultValue={"newest"}>
                        <option value={"newest"}>
                          {"Recent"}
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
                  </ul>
                </div>
                <div className={"file_manager_content__body"}>
                  <div className={"top_area_file__manager"}>
                    <div className={"left"}>
                      <div className={"image-logo"}>
                        <img src={"/assets/img/file/07.png"} alt={"file_manager"} />
                      </div>
                      <div className={"directory"}>
                        <span>
                          {"Storage /"}
                        </span>
                        <span>
                          {"Manager A /"}
                        </span>
                        <span>
                          {"Plugins "}
                        </span>
                      </div>
                    </div>
                    <div className={"right"}>
                      <div className={"search-area"} style={{"position":"relative"}}>
                        <div className={"geex-content__header__quickaction__link"}>
                          <i className={"uil-search"} />
                        </div>
                        <div className={"geex-content__header__searchform geex-content__header__popup"}>
                          <input type={"text"} placeholder={"Search"} className={"geex-content__header__btn"} />
                          <i className={"uil uil-search"} />
                        </div>
                      </div>
                      <div className={"icons"}>
                        <i className={"uil-star"} />
                        <i className={"uil-square-full"} />
                      </div>
                    </div>
                  </div>
                  <div className={"mt-30 geex-content__section geex-content__form table-responsive"}>
                    <table className={"table-reviews-geex-1 custom_filemanager"}>
                      <thead>
                        <tr style={{"width":"100%"}}>
                          <th style={{"width":"40%"}}>
                            {"File Name"}
                          </th>
                          <th style={{"width":"15%"}}>
                            {"File Items"}
                          </th>
                          <th style={{"width":"30%"}}>
                            {"Last Modified"}
                          </th>
                          <th style={{"width":"15%"}}>
                            {"File Size"}
                          </th>
                        </tr>
                      </thead>
                      <tbody className={""}>
                        <tr>
                          <td>
                            <div className={"author-area"}>
                              <div className={"profile-picture"}>
                                <img src={"/assets/img/file/06.png"} alt={"reviews"} />
                              </div>
                              <p>
                                {"Geex Main Proposal Documents"}
                              </p>
                            </div>
                          </td>
                          <td>
                            <span className={"designation"}>
                              {"24 Folders"}
                            </span>
                          </td>
                          <td>
                            <span className={"name"}>
                              {"20min ago"}
                            </span>
                          </td>
                          <td>
                            <a href={"#"}>
                              {" 24,476 Mb "}
                            </a>
                          </td>
                        </tr>
                        <tr className={"odd"}>
                          <td>
                            <div className={"author-area"}>
                              <div className={"profile-picture"}>
                                <img src={"/assets/img/file/04.png"} alt={"reviews"} />
                              </div>
                              <p>
                                {"EnglishLesson1.mp3"}
                              </p>
                            </div>
                          </td>
                          <td>
                            <span className={"designation"}>
                              {"24 Folders"}
                            </span>
                          </td>
                          <td>
                            <span className={"name"}>
                              {"20min ago"}
                            </span>
                          </td>
                          <td>
                            <a href={"#"}>
                              {" 24,476 Mb "}
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className={"author-area"}>
                              <div className={"profile-picture"}>
                                <img src={"/assets/img/file/03.png"} alt={"reviews"} />
                              </div>
                              <p>
                                {"Take-a-look-my-garden.mp4"}
                              </p>
                            </div>
                          </td>
                          <td>
                            <span className={"designation"}>
                              {"24 Folders"}
                            </span>
                          </td>
                          <td>
                            <span className={"name"}>
                              {"20min ago"}
                            </span>
                          </td>
                          <td>
                            <a href={"#"}>
                              {" 24,476 Mb "}
                            </a>
                          </td>
                        </tr>
                        <tr className={"odd"}>
                          <td>
                            <div className={"author-area"}>
                              <div className={"profile-picture"}>
                                <img src={"/assets/img/file/05.png"} alt={"reviews"} />
                              </div>
                              <p>
                                {"Geex-Mobile.pdf"}
                              </p>
                            </div>
                          </td>
                          <td>
                            <span className={"designation"}>
                              {"24 Folders"}
                            </span>
                          </td>
                          <td>
                            <span className={"name"}>
                              {"20min ago"}
                            </span>
                          </td>
                          <td>
                            <a href={"#"}>
                              {" 24,476 Mb "}
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className={"author-area"}>
                              <div className={"profile-picture"}>
                                <img src={"/assets/img/file/02.png"} alt={"reviews"} />
                              </div>
                              <p>
                                {"Wash-hand.jpeg"}
                              </p>
                            </div>
                          </td>
                          <td>
                            <span className={"designation"}>
                              {"24 Folders"}
                            </span>
                          </td>
                          <td>
                            <span className={"name"}>
                              {"20min ago"}
                            </span>
                          </td>
                          <td>
                            <a href={"#"}>
                              {" 24,476 Mb "}
                            </a>
                          </td>
                        </tr>
                        <tr className={"odd"}>
                          <td>
                            <div className={"author-area"}>
                              <div className={"profile-picture"}>
                                <img src={"/assets/img/file/04.png"} alt={"reviews"} />
                              </div>
                              <p>
                                {"EnglishLesson1.mp3"}
                              </p>
                            </div>
                          </td>
                          <td>
                            <span className={"designation"}>
                              {"24 Folders"}
                            </span>
                          </td>
                          <td>
                            <span className={"name"}>
                              {"20min ago"}
                            </span>
                          </td>
                          <td>
                            <a href={"#"}>
                              {" 24,476 Mb "}
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className={"author-area"}>
                              <div className={"profile-picture"}>
                                <img src={"/assets/img/file/03.png"} alt={"reviews"} />
                              </div>
                              <p>
                                {"Take-a-look-my-garden.mp4"}
                              </p>
                            </div>
                          </td>
                          <td>
                            <span className={"designation"}>
                              {"24 Folders"}
                            </span>
                          </td>
                          <td>
                            <span className={"name"}>
                              {"20min ago"}
                            </span>
                          </td>
                          <td>
                            <a href={"#"}>
                              {" 24,476 Mb "}
                            </a>
                          </td>
                        </tr>
                        <tr className={"odd"}>
                          <td>
                            <div className={"author-area"}>
                              <div className={"profile-picture"}>
                                <img src={"/assets/img/file/05.png"} alt={"reviews"} />
                              </div>
                              <p>
                                {"Geex-Mobile.pdf"}
                              </p>
                            </div>
                          </td>
                          <td>
                            <span className={"designation"}>
                              {"24 Folders"}
                            </span>
                          </td>
                          <td>
                            <span className={"name"}>
                              {"20min ago"}
                            </span>
                          </td>
                          <td>
                            <a href={"#"}>
                              {" 24,476 Mb "}
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className={"author-area"}>
                              <div className={"profile-picture"}>
                                <img src={"/assets/img/file/02.png"} alt={"reviews"} />
                              </div>
                              <p>
                                {"Wash-hand.jpeg"}
                              </p>
                            </div>
                          </td>
                          <td>
                            <span className={"designation"}>
                              {"24 Folders"}
                            </span>
                          </td>
                          <td>
                            <span className={"name"}>
                              {"20min ago"}
                            </span>
                          </td>
                          <td>
                            <a href={"#"}>
                              {" 24,476 Mb "}
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
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
