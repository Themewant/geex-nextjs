import { DemoRecordForm, DemoRecordList } from "@/components/DemoRecords";
import Customizer from "@/components/Customizer";
import Header from "@/components/Header";
import HeaderActions from "@/components/HeaderActions";
import Sidebar from "@/components/Sidebar";
import GeexResources from "@/components/GeexResources";
export const metadata = { title: "Contact - Geex Dashboard", icons: { icon: "/assets/img/favicon.svg" } };

export default function ContactPage() {
  return (
    <>
      <GeexResources styles={["/assets/vendor/css/fullcalendar@5.2.0.css","/assets/vendor/css/bootstrap/bootstrap.css","/assets/vendor/css/swiper.min.css","https://code.jquery.com/ui/1.12.1/themes/cupertino/jquery-ui.css","/assets/css/style.css","/assets/vendor/nice-select2/nice-select2.css","/assets/css/nice-select.css","https://cdn.jsdelivr.net/npm/@iconscout/unicons@4.0.8/css/line.min.css"]} scripts={["/assets/vendor/js/jquery/jquery-3.5.1.min.js","/assets/vendor/js/jquery/jquery-ui.js","/assets/vendor/js/bootstrap/bootstrap.min.js","/assets/vendor/js/swiper.min.js","/assets/vendor/js/fullcalendar@5.2.0.js","/assets/vendor/js/apexcharts.min.js","/assets/vendor/nice-select2/nice-select2.js","/assets/js/main.js"]} />
      <Header />
      <main className={"geex-main-content"}>
        <Sidebar />
        <Customizer />
        <div className={"geex-content"}>
          <div className={"geex-content__header"}>
            <div className={"geex-content__header__content"}>
              <h2 className={"geex-content__header__title"}>
                {"Contacts"}
              </h2>
              <p className={"geex-content__header__subtitle"}>
                {"Welcome to Geex Modern Admin Dashboard"}
              </p>
            </div>
            <HeaderActions />
          </div>
          <DemoRecordList scope="contact" label="Your Contacts" />
          <div className={"geex-content__wrapper"}>
            <div className={"geex-content__section-wrapper"}>
              <div className={"geex-content__section geex-content__section--transparent geex-content__todo"}>
                <div className={"geex-content__todo__content tab-content custom-al"} id={"geex-todo-task-content"}>
                  <div className={"tab-pane fade show active"} id={"geex-todo-task-content-important"}>
                    <div className={"geex-content__todo__header custom-al"}>
                      <div className={"geex-content__todo__header__title"}>
                        <button className={"geex-btn geex-btn--primary geex-btn__add-modal"}>
                          <i className={"uil-plus"} />
                          {" New Contact"}
                        </button>
                      </div>
                      <ul className={"nav nav-tabs geex-todo-tab geex-content__todo__header__filter"} id={"geex-todo-tab"} role={"tablist"}>
                        <li>
                          <button className={"geex-btn geex-btn--primary-transparent"}>
                            {"Favourites (20) "}
                            <i className={"uil uil-heart"} />
                          </button>
                        </li>
                        <li className={"geex-content__todo__header__filter__sortby"}>
                          <select aria-label={"Sort contacts"} defaultValue={"newest"}>
                            <option value={"newest"}>
                              {"Newest Contacts"}
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
                          <a href={"#"} id={"todo_list_tab"} className={""} data-bs-toggle={"tab"} data-bs-target={"#todo_list_content"} type={"button"} role={"tab"} aria-controls={"todo_list_content"} aria-selected={"false"}>
                            <i className={"uil-bars"} />
                          </a>
                        </li>
                        <li className={"nav-item"} role={"presentation"}>
                          <a href={"#"} id={"todo_grid_tab"} className={"active"} data-bs-toggle={"tab"} data-bs-target={"#todo_grid_content"} type={"button"} role={"tab"} aria-controls={"todo_grid_contant"} aria-selected={"false"}>
                            <i className={"uil-apps"} />
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className={"tab-content geex-transaction-content"}>
                      <div className={"tab-pane fade  "} id={"todo_list_content"} role={"tabpanel"} aria-labelledby={"todo_list_tab"}>
                        <div className={"geex-content__section geex-content__form table-responsive"}>
                          <table className={"table-reviews-geex-1"}>
                            <thead>
                              <tr style={{"width":"100%"}}>
                                <th style={{"width":"20%"}}>
                                  {"Name"}
                                </th>
                                <th style={{"width":"20%"}}>
                                  {"Designation"}
                                </th>
                                <th style={{"width":"20%"}}>
                                  {"Company"}
                                </th>
                                <th style={{"width":"20%"}}>
                                  {"Phone"}
                                </th>
                                <th style={{"width":"20%"}}>
                                  {"Email"}
                                </th>
                              </tr>
                            </thead>
                            <tbody className={""}>
                              <tr>
                                <td>
                                  <div className={"author-area"}>
                                    <div className={"profile-picture"}>
                                      <img src={"/assets/img/contact/01.png"} alt={"reviews"} />
                                    </div>
                                    <p>
                                      {"david millar"}
                                    </p>
                                  </div>
                                </td>
                                <td>
                                  <span className={"designation"}>
                                    {"(CEO)*"}
                                  </span>
                                </td>
                                <td>
                                  <span className={"name"}>
                                    {"ReacThemes"}
                                  </span>
                                </td>
                                <td>
                                  <a href={"tel:+4733378901"}>
                                    {"+8801265648289"}
                                  </a>
                                </td>
                                <td>
                                  <a href={"mailto:webmaster@example.com"}>
                                    {"millar@mail.com"}
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div className={"author-area"}>
                                    <div className={"profile-picture"}>
                                      <img src={"/assets/img/contact/02.png"} alt={"reviews"} />
                                    </div>
                                    <p>
                                      {"Brian Pfeffer"}
                                    </p>
                                  </div>
                                </td>
                                <td>
                                  <span className={"designation"}>
                                    {"Senior Developer"}
                                  </span>
                                </td>
                                <td>
                                  <span className={"name"}>
                                    {"ThemeWant"}
                                  </span>
                                </td>
                                <td>
                                  <a href={"tel:+4733378901"}>
                                    {"+880121238789"}
                                  </a>
                                </td>
                                <td>
                                  <a href={"mailto:webmaster@example.com"}>
                                    {"Brian@mail.com"}
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div className={"author-area"}>
                                    <div className={"profile-picture"}>
                                      <img src={"/assets/img/contact/03.png"} alt={"reviews"} />
                                    </div>
                                    <p>
                                      {"Tamim Iqbal"}
                                    </p>
                                  </div>
                                </td>
                                <td>
                                  <span className={"designation"}>
                                    {"Developer"}
                                  </span>
                                </td>
                                <td>
                                  <span className={"name"}>
                                    {"ReacThemes"}
                                  </span>
                                </td>
                                <td>
                                  <a href={"tel:+4733378901"}>
                                    {"+880125968789"}
                                  </a>
                                </td>
                                <td>
                                  <a href={"mailto:webmaster@example.com"}>
                                    {"Tamim@mail.com"}
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div className={"author-area"}>
                                    <div className={"profile-picture"}>
                                      <img src={"/assets/img/contact/04.png"} alt={"reviews"} />
                                    </div>
                                    <p>
                                      {"Mehadi Meraj"}
                                    </p>
                                  </div>
                                </td>
                                <td>
                                  <span className={"designation"}>
                                    {"Senior Designer"}
                                  </span>
                                </td>
                                <td>
                                  <span className={"name"}>
                                    {"ThemeWant"}
                                  </span>
                                </td>
                                <td>
                                  <a href={"tel:+4733378901"}>
                                    {"+880123235419"}
                                  </a>
                                </td>
                                <td>
                                  <a href={"mailto:webmaster@example.com"}>
                                    {"Mehadi@mail.com"}
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div className={"author-area"}>
                                    <div className={"profile-picture"}>
                                      <img src={"/assets/img/contact/05.png"} alt={"reviews"} />
                                    </div>
                                    <p>
                                      {"Sakib al Hasan"}
                                    </p>
                                  </div>
                                </td>
                                <td>
                                  <span className={"designation"}>
                                    {"Designer"}
                                  </span>
                                </td>
                                <td>
                                  <span className={"name"}>
                                    {"ReacThemes"}
                                  </span>
                                </td>
                                <td>
                                  <a href={"tel:+4733378901"}>
                                    {"+880123464239"}
                                  </a>
                                </td>
                                <td>
                                  <a href={"mailto:webmaster@example.com"}>
                                    {"Sakib@mail.com"}
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div className={"author-area"}>
                                    <div className={"profile-picture"}>
                                      <img src={"/assets/img/contact/06.png"} alt={"reviews"} />
                                    </div>
                                    <p>
                                      {"MR.John Lee"}
                                    </p>
                                  </div>
                                </td>
                                <td>
                                  <span className={"designation"}>
                                    {"Content Writer"}
                                  </span>
                                </td>
                                <td>
                                  <span className={"name"}>
                                    {"ThemeWant"}
                                  </span>
                                </td>
                                <td>
                                  <a href={"tel:+4733378901"}>
                                    {"+880123456889"}
                                  </a>
                                </td>
                                <td>
                                  <a href={"mailto:webmaster@example.com"}>
                                    {"John@mail.com"}
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div className={"author-area"}>
                                    <div className={"profile-picture"}>
                                      <img src={"/assets/img/contact/07.png"} alt={"reviews"} />
                                    </div>
                                    <p>
                                      {"Christopher"}
                                    </p>
                                  </div>
                                </td>
                                <td>
                                  <span className={"designation"}>
                                    {"(COO)"}
                                  </span>
                                </td>
                                <td>
                                  <span className={"name"}>
                                    {"ReacThemes"}
                                  </span>
                                </td>
                                <td>
                                  <a href={"tel:+4733378901"}>
                                    {"+880123468789"}
                                  </a>
                                </td>
                                <td>
                                  <a href={"mailto:webmaster@example.com"}>
                                    {"Christopher@mail.com"}
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div className={"author-area"}>
                                    <div className={"profile-picture"}>
                                      <img src={"/assets/img/contact/08.png"} alt={"reviews"} />
                                    </div>
                                    <p>
                                      {"MR.Christopher"}
                                    </p>
                                  </div>
                                </td>
                                <td>
                                  <span className={"designation"}>
                                    {"Central Usability Officer"}
                                  </span>
                                </td>
                                <td>
                                  <span className={"name"}>
                                    {"ThemeWant"}
                                  </span>
                                </td>
                                <td>
                                  <a href={"tel:+4733378901"}>
                                    {"+880123468789"}
                                  </a>
                                </td>
                                <td>
                                  <a href={"mailto:webmaster@example.com"}>
                                    {"Christopher@mail.com"}
                                  </a>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <div className={"tab-pane fade show active"} id={"todo_grid_content"} role={"tabpanel"} aria-labelledby={"todo_grid_tab"}>
                        <div className={"row g-40"}>
                          <div className={"col-xxl-3 col-xl-4 col-lg-4 col-md-6 col-sm-12"}>
                            <div className={"single-contact-grid-area"}>
                              <div className={"top-area"}>
                                <div className={"avatar"}>
                                  <img src={"/assets/img/contact/01.png"} alt={""} />
                                </div>
                                <div className={"action-area"}>
                                  <div className={"single"}>
                                    <i className={"uil uil-heart"} />
                                  </div>
                                  <div className={"single geex-content__chat__header__filter__btn"}>
                                    <i className={"uil uil-ellipsis-v"} />
                                  </div>
                                  <div className={"geex-content__chat__header__filter__content"}>
                                    <a className={"dropdown-item"} href={"#"}>
                                      {"view"}
                                    </a>
                                    <a className={"dropdown-item"} href={"#"}>
                                      {"Edit"}
                                    </a>
                                    <a className={"dropdown-item"} href={"#"}>
                                      {"Details"}
                                    </a>
                                  </div>
                                </div>
                              </div>
                              <div className={"details-area"}>
                                <h4 className={"name"}>
                                  {"Ahmed Leffler"}
                                </h4>
                                <span className={"designation"}>
                                  {"Central Usability Officer"}
                                </span>
                                <div className={"contact-wrapper"}>
                                  <a href={"#"} className={"single-contact"}>
                                    <i className={"uil uil-bag"} />
                                    <p>
                                      {"Highspeed Studios"}
                                    </p>
                                  </a>
                                  <a href={"#"} className={"single-contact"}>
                                    <i className={"uil uil-phone"} />
                                    <p>
                                      {"+012 345 689"}
                                    </p>
                                  </a>
                                  <a href={"#"} className={"single-contact"}>
                                    <i className={"uil uil-envelope"} />
                                    <p>
                                      {"tamara@mail.com"}
                                    </p>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className={"col-xxl-3 col-xl-4 col-lg-4 col-md-6 col-sm-12"}>
                            <div className={"single-contact-grid-area"}>
                              <div className={"top-area"}>
                                <div className={"avatar"}>
                                  <img src={"/assets/img/contact/02.png"} alt={"avatar"} />
                                </div>
                                <div className={"action-area"}>
                                  <div className={"single"}>
                                    <i className={"uil uil-heart"} />
                                  </div>
                                  <div className={"single geex-content__chat__header__filter__btn"}>
                                    <i className={"uil uil-ellipsis-v"} />
                                  </div>
                                  <div className={"geex-content__chat__header__filter__content"}>
                                    <a className={"dropdown-item"} href={"#"}>
                                      {"view"}
                                    </a>
                                    <a className={"dropdown-item"} href={"#"}>
                                      {"Edit"}
                                    </a>
                                    <a className={"dropdown-item"} href={"#"}>
                                      {"Details"}
                                    </a>
                                  </div>
                                </div>
                              </div>
                              <div className={"details-area"}>
                                <h4 className={"name"}>
                                  {"Brian Pfeffer"}
                                </h4>
                                <span className={"designation"}>
                                  {"Chief Tactics Supervisor"}
                                </span>
                                <div className={"contact-wrapper"}>
                                  <a href={"#"} className={"single-contact"}>
                                    <i className={"uil uil-bag"} />
                                    <p>
                                      {"Highspeed Studios"}
                                    </p>
                                  </a>
                                  <a href={"#"} className={"single-contact"}>
                                    <i className={"uil uil-phone"} />
                                    <p>
                                      {"+012 345 689"}
                                    </p>
                                  </a>
                                  <a href={"#"} className={"single-contact"}>
                                    <i className={"uil uil-envelope"} />
                                    <p>
                                      {"tamara@mail.com"}
                                    </p>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className={"col-xxl-3 col-xl-4 col-lg-4 col-md-6 col-sm-12"}>
                            <div className={"single-contact-grid-area"}>
                              <div className={"top-area"}>
                                <div className={"avatar"}>
                                  <img src={"/assets/img/contact/03.png"} alt={""} />
                                </div>
                                <div className={"action-area"}>
                                  <div className={"single"}>
                                    <i className={"uil uil-heart"} />
                                  </div>
                                  <div className={"single geex-content__chat__header__filter__btn"}>
                                    <i className={"uil uil-ellipsis-v"} />
                                  </div>
                                  <div className={"geex-content__chat__header__filter__content"}>
                                    <a className={"dropdown-item"} href={"#"}>
                                      {"view"}
                                    </a>
                                    <a className={"dropdown-item"} href={"#"}>
                                      {"Edit"}
                                    </a>
                                    <a className={"dropdown-item"} href={"#"}>
                                      {"Details"}
                                    </a>
                                  </div>
                                </div>
                              </div>
                              <div className={"details-area"}>
                                <h4 className={"name"}>
                                  {"Crhistine Zboncak"}
                                </h4>
                                <span className={"designation"}>
                                  {"UI Designer"}
                                </span>
                                <div className={"contact-wrapper"}>
                                  <a href={"#"} className={"single-contact"}>
                                    <i className={"uil uil-bag"} />
                                    <p>
                                      {"Highspeed Studios"}
                                    </p>
                                  </a>
                                  <a href={"#"} className={"single-contact"}>
                                    <i className={"uil uil-phone"} />
                                    <p>
                                      {"+012 345 689"}
                                    </p>
                                  </a>
                                  <a href={"#"} className={"single-contact"}>
                                    <i className={"uil uil-envelope"} />
                                    <p>
                                      {"tamara@mail.com"}
                                    </p>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className={"col-xxl-3 col-xl-4 col-lg-4 col-md-6 col-sm-12"}>
                            <div className={"single-contact-grid-area"}>
                              <div className={"top-area"}>
                                <div className={"avatar"}>
                                  <img src={"/assets/img/contact/04.png"} alt={""} />
                                </div>
                                <div className={"action-area"}>
                                  <div className={"single"}>
                                    <i className={"uil uil-heart"} />
                                  </div>
                                  <div className={"single geex-content__chat__header__filter__btn"}>
                                    <i className={"uil uil-ellipsis-v"} />
                                  </div>
                                  <div className={"geex-content__chat__header__filter__content"}>
                                    <a className={"dropdown-item"} href={"#"}>
                                      {"view"}
                                    </a>
                                    <a className={"dropdown-item"} href={"#"}>
                                      {"Edit"}
                                    </a>
                                    <a className={"dropdown-item"} href={"#"}>
                                      {"Details"}
                                    </a>
                                  </div>
                                </div>
                              </div>
                              <div className={"details-area"}>
                                <h4 className={"name"}>
                                  {"David Koelpin"}
                                </h4>
                                <span className={"designation"}>
                                  {"District Mobility Designer"}
                                </span>
                                <div className={"contact-wrapper"}>
                                  <a href={"#"} className={"single-contact"}>
                                    <i className={"uil uil-bag"} />
                                    <p>
                                      {"Highspeed Studios"}
                                    </p>
                                  </a>
                                  <a href={"#"} className={"single-contact"}>
                                    <i className={"uil uil-phone"} />
                                    <p>
                                      {"+012 345 689"}
                                    </p>
                                  </a>
                                  <a href={"#"} className={"single-contact"}>
                                    <i className={"uil uil-envelope"} />
                                    <p>
                                      {"tamara@mail.com"}
                                    </p>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className={"col-xxl-3 col-xl-4 col-lg-4 col-md-6 col-sm-12"}>
                            <div className={"single-contact-grid-area"}>
                              <div className={"top-area"}>
                                <div className={"avatar"}>
                                  <img src={"/assets/img/contact/05.png"} alt={""} />
                                </div>
                                <div className={"action-area"}>
                                  <div className={"single"}>
                                    <i className={"uil uil-heart"} />
                                  </div>
                                  <div className={"single geex-content__chat__header__filter__btn"}>
                                    <i className={"uil uil-ellipsis-v"} />
                                  </div>
                                  <div className={"geex-content__chat__header__filter__content"}>
                                    <a className={"dropdown-item"} href={"#"}>
                                      {"view"}
                                    </a>
                                    <a className={"dropdown-item"} href={"#"}>
                                      {"Edit"}
                                    </a>
                                    <a className={"dropdown-item"} href={"#"}>
                                      {"Details"}
                                    </a>
                                  </div>
                                </div>
                              </div>
                              <div className={"details-area"}>
                                <h4 className={"name"}>
                                  {"Erika Smitham"}
                                </h4>
                                <span className={"designation"}>
                                  {"Central Usability Officer"}
                                </span>
                                <div className={"contact-wrapper"}>
                                  <a href={"#"} className={"single-contact"}>
                                    <i className={"uil uil-bag"} />
                                    <p>
                                      {"Highspeed Studios"}
                                    </p>
                                  </a>
                                  <a href={"#"} className={"single-contact"}>
                                    <i className={"uil uil-phone"} />
                                    <p>
                                      {"+012 345 689"}
                                    </p>
                                  </a>
                                  <a href={"#"} className={"single-contact"}>
                                    <i className={"uil uil-envelope"} />
                                    <p>
                                      {"tamara@mail.com"}
                                    </p>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className={"col-xxl-3 col-xl-4 col-lg-4 col-md-6 col-sm-12"}>
                            <div className={"single-contact-grid-area"}>
                              <div className={"top-area"}>
                                <div className={"avatar"}>
                                  <img src={"/assets/img/contact/06.png"} alt={"avatar"} />
                                </div>
                                <div className={"action-area"}>
                                  <div className={"single"}>
                                    <i className={"uil uil-heart"} />
                                  </div>
                                  <div className={"single geex-content__chat__header__filter__btn"}>
                                    <i className={"uil uil-ellipsis-v"} />
                                  </div>
                                  <div className={"geex-content__chat__header__filter__content"}>
                                    <a className={"dropdown-item"} href={"#"}>
                                      {"view"}
                                    </a>
                                    <a className={"dropdown-item"} href={"#"}>
                                      {"Edit"}
                                    </a>
                                    <a className={"dropdown-item"} href={"#"}>
                                      {"Details"}
                                    </a>
                                  </div>
                                </div>
                              </div>
                              <div className={"details-area"}>
                                <h4 className={"name"}>
                                  {"Franklin Stiedemann"}
                                </h4>
                                <span className={"designation"}>
                                  {"Chief Tactics Supervisor"}
                                </span>
                                <div className={"contact-wrapper"}>
                                  <a href={"#"} className={"single-contact"}>
                                    <i className={"uil uil-bag"} />
                                    <p>
                                      {"Highspeed Studios"}
                                    </p>
                                  </a>
                                  <a href={"#"} className={"single-contact"}>
                                    <i className={"uil uil-phone"} />
                                    <p>
                                      {"+012 345 689"}
                                    </p>
                                  </a>
                                  <a href={"#"} className={"single-contact"}>
                                    <i className={"uil uil-envelope"} />
                                    <p>
                                      {"tamara@mail.com"}
                                    </p>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className={"col-xxl-3 col-xl-4 col-lg-4 col-md-6 col-sm-12"}>
                            <div className={"single-contact-grid-area"}>
                              <div className={"top-area"}>
                                <div className={"avatar"}>
                                  <img src={"/assets/img/contact/07.png"} alt={""} />
                                </div>
                                <div className={"action-area"}>
                                  <div className={"single"}>
                                    <i className={"uil uil-heart"} />
                                  </div>
                                  <div className={"single geex-content__chat__header__filter__btn"}>
                                    <i className={"uil uil-ellipsis-v"} />
                                  </div>
                                  <div className={"geex-content__chat__header__filter__content"}>
                                    <a className={"dropdown-item"} href={"#"}>
                                      {"view"}
                                    </a>
                                    <a className={"dropdown-item"} href={"#"}>
                                      {"Edit"}
                                    </a>
                                    <a className={"dropdown-item"} href={"#"}>
                                      {"Details"}
                                    </a>
                                  </div>
                                </div>
                              </div>
                              <div className={"details-area"}>
                                <h4 className={"name"}>
                                  {"Geovanny Bruen"}
                                </h4>
                                <span className={"designation"}>
                                  {"UI Designer"}
                                </span>
                                <div className={"contact-wrapper"}>
                                  <a href={"#"} className={"single-contact"}>
                                    <i className={"uil uil-bag"} />
                                    <p>
                                      {"Highspeed Studios"}
                                    </p>
                                  </a>
                                  <a href={"#"} className={"single-contact"}>
                                    <i className={"uil uil-phone"} />
                                    <p>
                                      {"+012 345 689"}
                                    </p>
                                  </a>
                                  <a href={"#"} className={"single-contact"}>
                                    <i className={"uil uil-envelope"} />
                                    <p>
                                      {"tamara@mail.com"}
                                    </p>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className={"col-xxl-3 col-xl-4 col-lg-4 col-md-6 col-sm-12"}>
                            <div className={"single-contact-grid-area"}>
                              <div className={"top-area"}>
                                <div className={"avatar"}>
                                  <img src={"/assets/img/contact/08.png"} alt={""} />
                                </div>
                                <div className={"action-area"}>
                                  <div className={"single"}>
                                    <i className={"uil uil-heart"} />
                                  </div>
                                  <div className={"single geex-content__chat__header__filter__btn"}>
                                    <i className={"uil uil-ellipsis-v"} />
                                  </div>
                                  <div className={"geex-content__chat__header__filter__content"}>
                                    <a className={"dropdown-item"} href={"#"}>
                                      {"view"}
                                    </a>
                                    <a className={"dropdown-item"} href={"#"}>
                                      {"Edit"}
                                    </a>
                                    <a className={"dropdown-item"} href={"#"}>
                                      {"Details"}
                                    </a>
                                  </div>
                                </div>
                              </div>
                              <div className={"details-area"}>
                                <h4 className={"name"}>
                                  {"John Okuneva"}
                                </h4>
                                <span className={"designation"}>
                                  {"District Mobility Designer"}
                                </span>
                                <div className={"contact-wrapper"}>
                                  <a href={"#"} className={"single-contact"}>
                                    <i className={"uil uil-bag"} />
                                    <p>
                                      {"Highspeed Studios"}
                                    </p>
                                  </a>
                                  <a href={"#"} className={"single-contact"}>
                                    <i className={"uil uil-phone"} />
                                    <p>
                                      {"+012 345 689"}
                                    </p>
                                  </a>
                                  <a href={"#"} className={"single-contact"}>
                                    <i className={"uil uil-envelope"} />
                                    <p>
                                      {"tamara@mail.com"}
                                    </p>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className={"col-xxl-3 col-xl-4 col-lg-4 col-md-6 col-sm-12"}>
                            <div className={"single-contact-grid-area"}>
                              <div className={"top-area"}>
                                <div className={"avatar"}>
                                  <img src={"/assets/img/contact/09.png"} alt={""} />
                                </div>
                                <div className={"action-area"}>
                                  <div className={"single"}>
                                    <i className={"uil uil-heart"} />
                                  </div>
                                  <div className={"single geex-content__chat__header__filter__btn"}>
                                    <i className={"uil uil-ellipsis-v"} />
                                  </div>
                                  <div className={"geex-content__chat__header__filter__content"}>
                                    <a className={"dropdown-item"} href={"#"}>
                                      {"view"}
                                    </a>
                                    <a className={"dropdown-item"} href={"#"}>
                                      {"Edit"}
                                    </a>
                                    <a className={"dropdown-item"} href={"#"}>
                                      {"Details"}
                                    </a>
                                  </div>
                                </div>
                              </div>
                              <div className={"details-area"}>
                                <h4 className={"name"}>
                                  {"Tamara Scevenko"}
                                </h4>
                                <span className={"designation"}>
                                  {"Central Usability Officer"}
                                </span>
                                <div className={"contact-wrapper"}>
                                  <a href={"#"} className={"single-contact"}>
                                    <i className={"uil uil-bag"} />
                                    <p>
                                      {"Highspeed Studios"}
                                    </p>
                                  </a>
                                  <a href={"#"} className={"single-contact"}>
                                    <i className={"uil uil-phone"} />
                                    <p>
                                      {"+012 345 689"}
                                    </p>
                                  </a>
                                  <a href={"#"} className={"single-contact"}>
                                    <i className={"uil uil-envelope"} />
                                    <p>
                                      {"tamara@mail.com"}
                                    </p>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className={"col-xxl-3 col-xl-4 col-lg-4 col-md-6 col-sm-12"}>
                            <div className={"single-contact-grid-area"}>
                              <div className={"top-area"}>
                                <div className={"avatar"}>
                                  <img src={"/assets/img/contact/10.png"} alt={"avatar"} />
                                </div>
                                <div className={"action-area"}>
                                  <div className={"single"}>
                                    <i className={"uil uil-heart"} />
                                  </div>
                                  <div className={"single geex-content__chat__header__filter__btn"}>
                                    <i className={"uil uil-ellipsis-v"} />
                                  </div>
                                  <div className={"geex-content__chat__header__filter__content"}>
                                    <a className={"dropdown-item"} href={"#"}>
                                      {"view"}
                                    </a>
                                    <a className={"dropdown-item"} href={"#"}>
                                      {"Edit"}
                                    </a>
                                    <a className={"dropdown-item"} href={"#"}>
                                      {"Details"}
                                    </a>
                                  </div>
                                </div>
                              </div>
                              <div className={"details-area"}>
                                <h4 className={"name"}>
                                  {"Thomas Wunsch"}
                                </h4>
                                <span className={"designation"}>
                                  {"Chief Tactics Supervisor"}
                                </span>
                                <div className={"contact-wrapper"}>
                                  <a href={"#"} className={"single-contact"}>
                                    <i className={"uil uil-bag"} />
                                    <p>
                                      {"Highspeed Studios"}
                                    </p>
                                  </a>
                                  <a href={"#"} className={"single-contact"}>
                                    <i className={"uil uil-phone"} />
                                    <p>
                                      {"+012 345 689"}
                                    </p>
                                  </a>
                                  <a href={"#"} className={"single-contact"}>
                                    <i className={"uil uil-envelope"} />
                                    <p>
                                      {"tamara@mail.com"}
                                    </p>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className={"col-xxl-3 col-xl-4 col-lg-4 col-md-6 col-sm-12"}>
                            <div className={"single-contact-grid-area"}>
                              <div className={"top-area"}>
                                <div className={"avatar"}>
                                  <img src={"/assets/img/contact/11.png"} alt={""} />
                                </div>
                                <div className={"action-area"}>
                                  <div className={"single"}>
                                    <i className={"uil uil-heart"} />
                                  </div>
                                  <div className={"single geex-content__chat__header__filter__btn"}>
                                    <i className={"uil uil-ellipsis-v"} />
                                  </div>
                                  <div className={"geex-content__chat__header__filter__content"}>
                                    <a className={"dropdown-item"} href={"#"}>
                                      {"view"}
                                    </a>
                                    <a className={"dropdown-item"} href={"#"}>
                                      {"Edit"}
                                    </a>
                                    <a className={"dropdown-item"} href={"#"}>
                                      {"Details"}
                                    </a>
                                  </div>
                                </div>
                              </div>
                              <div className={"details-area"}>
                                <h4 className={"name"}>
                                  {"Veronica Hodkiewicz"}
                                </h4>
                                <span className={"designation"}>
                                  {"UI Designer"}
                                </span>
                                <div className={"contact-wrapper"}>
                                  <a href={"#"} className={"single-contact"}>
                                    <i className={"uil uil-bag"} />
                                    <p>
                                      {"Highspeed Studios"}
                                    </p>
                                  </a>
                                  <a href={"#"} className={"single-contact"}>
                                    <i className={"uil uil-phone"} />
                                    <p>
                                      {"+012 345 689"}
                                    </p>
                                  </a>
                                  <a href={"#"} className={"single-contact"}>
                                    <i className={"uil uil-envelope"} />
                                    <p>
                                      {"tamara@mail.com"}
                                    </p>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className={"col-xxl-3 col-xl-4 col-lg-4 col-md-6 col-sm-12"}>
                            <div className={"single-contact-grid-area"}>
                              <div className={"top-area"}>
                                <div className={"avatar"}>
                                  <img src={"/assets/img/contact/12.png"} alt={""} />
                                </div>
                                <div className={"action-area"}>
                                  <div className={"single"}>
                                    <i className={"uil uil-heart"} />
                                  </div>
                                  <div className={"single geex-content__chat__header__filter__btn"}>
                                    <i className={"uil uil-ellipsis-v"} />
                                  </div>
                                  <div className={"geex-content__chat__header__filter__content"}>
                                    <a className={"dropdown-item"} href={"#"}>
                                      {"view"}
                                    </a>
                                    <a className={"dropdown-item"} href={"#"}>
                                      {"Edit"}
                                    </a>
                                    <a className={"dropdown-item"} href={"#"}>
                                      {"Details"}
                                    </a>
                                  </div>
                                </div>
                              </div>
                              <div className={"details-area"}>
                                <h4 className={"name"}>
                                  {"David Koelpin"}
                                </h4>
                                <span className={"designation"}>
                                  {"District Mobility Designer"}
                                </span>
                                <div className={"contact-wrapper"}>
                                  <a href={"#"} className={"single-contact"}>
                                    <i className={"uil uil-bag"} />
                                    <p>
                                      {"Highspeed Studios"}
                                    </p>
                                  </a>
                                  <a href={"#"} className={"single-contact"}>
                                    <i className={"uil uil-phone"} />
                                    <p>
                                      {"+012 345 689"}
                                    </p>
                                  </a>
                                  <a href={"#"} className={"single-contact"}>
                                    <i className={"uil uil-envelope"} />
                                    <p>
                                      {"tamara@mail.com"}
                                    </p>
                                  </a>
                                </div>
                              </div>
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
                          <select aria-label={"Sort contacts"} defaultValue={"newest"}>
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
                          <select aria-label={"Sort contacts"} defaultValue={"newest"}>
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
                          <select aria-label={"Sort contacts"} defaultValue={"newest"}>
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
              </div>
              <div className={"geex-content__modal__form"}>
                <div className={"geex-content__modal__form__header"}>
                  <h3 className={"geex-content__modal__form__title"}>
                    {"Add New Contact"}
                  </h3>
                  <button className={"geex-content__modal__form__close"}>
                    <i className={"uil-times"} />
                  </button>
                </div>
                <DemoRecordForm scope="contact" className="geex-content__modal__form__wrapper">
                  <div className={"geex-content__modal__form__item"}>
                    <input type={"text"} name="title" className={"geex-content__modal__form__input"} placeholder="Name" aria-label="Name" required maxLength={120} />
                  </div>
                  <div className={"geex-content__modal__form__item"}>
                    <input type={"text"} name="designation" className={"geex-content__modal__form__input"} placeholder="Designation" aria-label="Designation" maxLength={160} />
                  </div>
                  <div className={"geex-content__modal__form__item"}>
                    <input type={"text"} name="company" className={"geex-content__modal__form__input"} placeholder="Studio Name" aria-label="Studio Name" maxLength={160} />
                  </div>
                  <div className={"geex-content__modal__form__item"}>
                    <input type="tel" name="phone" className={"geex-content__modal__form__input"} placeholder="Phone Number" aria-label="Phone Number" maxLength={160} />
                  </div>
                  <div className={"geex-content__modal__form__item"}>
                    <input type="email" name="email" className={"geex-content__modal__form__input"} placeholder="Email Address" aria-label="Email Address" maxLength={160} />
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
      </main>










    </>
  );
}
