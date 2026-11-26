import Link from "next/link";
import Customizer from "@/components/Customizer";
import Header from "@/components/Header";
import HeaderActions from "@/components/HeaderActions";
import Sidebar from "@/components/Sidebar";
import GeexResources from "@/components/GeexResources";
export const metadata = { title: "File Manager - Geex Dashboard", icons: { icon: "/assets/img/favicon.svg" } };

export default function KanbanPage() {
  return (
    <>
      <GeexResources styles={["/assets/vendor/css/fullcalendar@5.2.0.css","/assets/vendor/css/bootstrap/bootstrap.css","/assets/vendor/css/swiper.min.css","https://code.jquery.com/ui/1.12.1/themes/cupertino/jquery-ui.css","/assets/css/style.css","https://cdn.jsdelivr.net/npm/@iconscout/unicons@4.0.8/css/line.min.css"]} scripts={["/assets/vendor/js/jquery/jquery-3.5.1.min.js","/assets/vendor/js/jquery/jquery-ui.js","/assets/vendor/js/bootstrap/bootstrap.min.js","/assets/vendor/js/swiper.min.js","/assets/vendor/js/fullcalendar@5.2.0.js","/assets/vendor/js/apexcharts.min.js","/assets/vendor/js/dragula.js","/assets/js/main.js"]} />
      <Header />
      <main className={"geex-main-content"}>
        <Sidebar />
        <Customizer />
        <div className={"geex-content"}>
          <div className={"geex-content__header"}>
            <div className={"geex-content__header__content"}>
              <h2 className={"geex-content__header__title"}>
                {"Kanban"}
              </h2>
              <p className={"geex-content__header__subtitle"}>
                {"Welcome to Geex Modern Admin Dashboard"}
              </p>
            </div>
            <HeaderActions />
          </div>
          <div className={"kanban-inner-main-style"}>
            <Link href={"/"} className={"backto-home-btn"}>
              <i className={"uil-arrow-left"} />
              {" Back to Projects"}
            </Link>
            <div className={"kanban-between-area--wrapper-top"}>
              <div className={"left"}>
                <h1 className={"title"}>
                  {"Geex Dashboard Development"}
                </h1>
                <p>
                  {"Build Geex Dashboard based on UI Design. Good luck team!"}
                </p>
              </div>
              <div className={"right"}>
                <div className={"icons-area-left"}>
                  <i className={"uil-star"} />
                  <i className={"uil-square-full"} />
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
                <button className={"geex-btn geex-btn--primary"}>
                  <i className={"uil-plus"} />
                  {"Invite"}
                </button>
              </div>
            </div>
            <div className={"kanban-drag-and-drop-area-wrapper mt-50"}>
              <div className={"app"}>
                <table className={"kanban"}>
                  <tbody>
                    <tr className={"heading"} style={{"height":45}}>
                      <td>
                        <div className={"hasScrollbar"}>
                          <ul className={"stages"}>
                            <li className={"stage top-stage"}>
                              <span className={"stagename"}>
                                {"To-Do"}
                              </span>
                              <a href={"#"} className={"plus-icon"}>
                                <i className={"uil-plus"} />
                              </a>
                            </li>
                            <li className={"stage top-stage"}>
                              <span className={"stagename"}>
                                {"Work In Progress"}
                              </span>
                              <a href={"#"} className={"plus-icon"}>
                                <i className={"uil-plus"} />
                              </a>
                            </li>
                            <li className={"stage top-stage"}>
                              <span className={"stagename"}>
                                {"Under Review"}
                              </span>
                              <a href={"#"} className={"plus-icon"}>
                                <i className={"uil-plus"} />
                              </a>
                            </li>
                            <li className={"stage top-stage"}>
                              <span className={"stagename"}>
                                {"Done"}
                              </span>
                              <a href={"#"} className={"plus-icon"}>
                                <i className={"uil-plus"} />
                              </a>
                            </li>
                            <li className={"stage top-stage"}>
                              <span className={"stagename"}>
                                {"Revised"}
                              </span>
                              <a href={"#"} className={"plus-icon"}>
                                <i className={"uil-plus"} />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </td>
                    </tr>
                    <tr className={"content"}>
                      <td>
                        <div className={"deals"}>
                          <div className={"stages"}>
                            <div id={"one"} className={"stage"} data-stage-id={"1"}>
                              <div className={"deal"}>
                                <div className={"inner-content-kanban-wrapper"}>
                                  <span className={"bg-green"}>
                                    {"UI Design"}
                                  </span>
                                  <h6 className={"title"}>
                                    {" Revision 1: Fixing and Navbar at Page "}
                                  </h6>
                                  <p>
                                    {"Last update 42min ago"}
                                  </p>
                                  <div className={"thumb-edit-area"}>
                                    <div className={"img-area"}>
                                      <img src={"/assets/img/kanban/01.png"} alt={"kanban"} />
                                      <img src={"/assets/img/kanban/02.png"} alt={"kanban"} />
                                    </div>
                                    <div className={"edit-img"}>
                                      <img src={"/assets/img/kanban/20.png"} alt={"kanban"} />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className={"deal"}>
                                <div className={"inner-content-kanban-wrapper"}>
                                  <span className={"bg-p"}>
                                    {"Frontend"}
                                  </span>
                                  <h6 className={"title"}>
                                    {" Add About Us section in homepage "}
                                  </h6>
                                  <p>
                                    {"Last update 42min ago"}
                                  </p>
                                  <div className={"thumb-edit-area"}>
                                    <div className={"img-area"}>
                                      <img src={"/assets/img/kanban/03.png"} alt={"kanban"} />
                                      <img src={"/assets/img/kanban/04.png"} alt={"kanban"} />
                                    </div>
                                    <div className={"edit-img"}>
                                      <img src={"/assets/img/kanban/20.png"} alt={"kanban"} />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className={"deal"}>
                                <div className={"inner-content-kanban-wrapper"}>
                                  <span className={"bg-back"}>
                                    {"Backend"}
                                  </span>
                                  <h6 className={"title"}>
                                    {" Upgrade microserver batch 1st "}
                                  </h6>
                                  <p>
                                    {"Last update 42min ago"}
                                  </p>
                                  <div className={"thumb-edit-area"}>
                                    <div className={"img-area"}>
                                      <img src={"/assets/img/kanban/08.png"} alt={"kanban"} />
                                      <img src={"/assets/img/kanban/09.png"} alt={"kanban"} />
                                    </div>
                                    <div className={"edit-img"}>
                                      <img src={"/assets/img/kanban/20.png"} alt={"kanban"} />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div id={"two"} className={"stage"} data-stage-id={"2"}>
                              <div className={"deal"}>
                                <div className={"inner-content-kanban-wrapper"}>
                                  <span className={"bg-p"}>
                                    {"Frontend"}
                                  </span>
                                  <h6 className={"title"}>
                                    {" Add About Us section in homepage "}
                                  </h6>
                                  <p>
                                    {"Last update 42min ago"}
                                  </p>
                                  <div className={"thumb-edit-area"}>
                                    <div className={"img-area"}>
                                      <img src={"/assets/img/kanban/03.png"} alt={"kanban"} />
                                      <img src={"/assets/img/kanban/04.png"} alt={"kanban"} />
                                    </div>
                                    <div className={"edit-img"}>
                                      <img src={"/assets/img/kanban/20.png"} alt={"kanban"} />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className={"deal"}>
                                <div className={"inner-content-kanban-wrapper"}>
                                  <span className={"bg-green"}>
                                    {"UI Design"}
                                  </span>
                                  <h6 className={"title"}>
                                    {" Revision 1: Fixing Navbar at Dashboard "}
                                  </h6>
                                  <p>
                                    {"Last update 42min ago"}
                                  </p>
                                  <div className={"thumb-edit-area"}>
                                    <div className={"img-area"}>
                                      <img src={"/assets/img/kanban/05.png"} alt={"kanban"} />
                                      <img src={"/assets/img/kanban/06.png"} alt={"kanban"} />
                                    </div>
                                    <div className={"edit-img"}>
                                      <img src={"/assets/img/kanban/20.png"} alt={"kanban"} />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className={"deal"}>
                                <div className={"inner-content-kanban-wrapper"}>
                                  <span className={"bg-red"}>
                                    {"Bug Fixing"}
                                  </span>
                                  <h6 className={"title"}>
                                    {" Revision 1: Fixing Navbar at Dashboard "}
                                  </h6>
                                  <p>
                                    {"Last update 42min ago"}
                                  </p>
                                  <div className={"thumb-edit-area"}>
                                    <div className={"img-area"}>
                                      <img src={"/assets/img/kanban/05.png"} alt={"kanban"} />
                                      <img src={"/assets/img/kanban/06.png"} alt={"kanban"} />
                                    </div>
                                    <div className={"edit-img"}>
                                      <img src={"/assets/img/kanban/20.png"} alt={"kanban"} />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div id={"three"} className={"stage"} data-stage-id={"3"}>
                              <div className={"deal"}>
                                <div className={"inner-content-kanban-wrapper"}>
                                  <span className={"bg-green"}>
                                    {"UI Design"}
                                  </span>
                                  <h6 className={"title"}>
                                    {" Mobile Responsivity Avility "}
                                  </h6>
                                  <p>
                                    {"Last update 42min ago"}
                                  </p>
                                  <div className={"thumb-edit-area"}>
                                    <div className={"img-area"}>
                                      <img src={"/assets/img/kanban/14.png"} alt={"kanban"} />
                                      <img src={"/assets/img/kanban/15.png"} alt={"kanban"} />
                                    </div>
                                    <div className={"edit-img"}>
                                      <img src={"/assets/img/kanban/20.png"} alt={"kanban"} />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className={"deal"}>
                                <div className={"inner-content-kanban-wrapper"}>
                                  <span className={"bg-copy"}>
                                    {"Copywriting"}
                                  </span>
                                  <h6 className={"title"}>
                                    {" Revision 1: Fixing Navbar at Dashboard "}
                                  </h6>
                                  <p>
                                    {"Last update 42min ago"}
                                  </p>
                                  <div className={"thumb-edit-area"}>
                                    <div className={"img-area"}>
                                      <img src={"/assets/img/kanban/05.png"} alt={"kanban"} />
                                      <img src={"/assets/img/kanban/06.png"} alt={"kanban"} />
                                    </div>
                                    <div className={"edit-img"}>
                                      <img src={"/assets/img/kanban/20.png"} alt={"kanban"} />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className={"deal"}>
                                <div className={"inner-content-kanban-wrapper"}>
                                  <span className={"bg-red"}>
                                    {"Bug Fixing"}
                                  </span>
                                  <h6 className={"title"}>
                                    {" Revision 1: Fixing Navbar at Dashboard "}
                                  </h6>
                                  <p>
                                    {"Last update 42min ago"}
                                  </p>
                                  <div className={"thumb-edit-area"}>
                                    <div className={"img-area"}>
                                      <img src={"/assets/img/kanban/05.png"} alt={"kanban"} />
                                      <img src={"/assets/img/kanban/06.png"} alt={"kanban"} />
                                    </div>
                                    <div className={"edit-img"}>
                                      <img src={"/assets/img/kanban/20.png"} alt={"kanban"} />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div id={"four"} className={"stage"} data-stage-id={"4"}>
                              <div className={"deal"}>
                                <div className={"inner-content-kanban-wrapper"}>
                                  <span className={"bg-p"}>
                                    {"Frontend"}
                                  </span>
                                  <h6 className={"title"}>
                                    {" Create greetings for emails "}
                                  </h6>
                                  <p>
                                    {"Last update 42min ago"}
                                  </p>
                                  <div className={"thumb-edit-area"}>
                                    <div className={"img-area"}>
                                      <img src={"/assets/img/kanban/12.png"} alt={"kanban"} />
                                      <img src={"/assets/img/kanban/13.png"} alt={"kanban"} />
                                    </div>
                                    <div className={"edit-img"}>
                                      <img src={"/assets/img/kanban/20.png"} alt={"kanban"} />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className={"deal"}>
                                <div className={"inner-content-kanban-wrapper"}>
                                  <span className={"bg-red"}>
                                    {"Bug Fixing"}
                                  </span>
                                  <h6 className={"title"}>
                                    {" Revision 1: Fixing Navbar at Dashboard "}
                                  </h6>
                                  <p>
                                    {"Last update 42min ago"}
                                  </p>
                                  <div className={"thumb-edit-area"}>
                                    <div className={"img-area"}>
                                      <img src={"/assets/img/kanban/05.png"} alt={"kanban"} />
                                      <img src={"/assets/img/kanban/06.png"} alt={"kanban"} />
                                    </div>
                                    <div className={"edit-img"}>
                                      <img src={"/assets/img/kanban/20.png"} alt={"kanban"} />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div id={"five"} className={"stage"} data-stage-id={"5"}>
                              <div className={"deal"}>
                                <div className={"inner-content-kanban-wrapper"}>
                                  <span className={"bg-copy"}>
                                    {"UI Design"}
                                  </span>
                                  <h6 className={"title"}>
                                    {" Revision 1: Navbar at Dashboard Page "}
                                  </h6>
                                  <p>
                                    {"Last update 42min ago"}
                                  </p>
                                  <div className={"thumb-edit-area"}>
                                    <div className={"img-area"}>
                                      <img src={"/assets/img/kanban/16.png"} alt={"kanban"} />
                                      <img src={"/assets/img/kanban/17.png"} alt={"kanban"} />
                                    </div>
                                    <div className={"edit-img"}>
                                      <img src={"/assets/img/kanban/20.png"} alt={"kanban"} />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className={"deal"}>
                                <div className={"inner-content-kanban-wrapper"}>
                                  <span className={"bg-red"}>
                                    {"UI Design"}
                                  </span>
                                  <h6 className={"title"}>
                                    {" Fixing Navbar at mr Dashboard Page "}
                                  </h6>
                                  <p>
                                    {"Last update 42min ago"}
                                  </p>
                                  <div className={"thumb-edit-area"}>
                                    <div className={"img-area"}>
                                      <img src={"/assets/img/kanban/18.png"} alt={"kanban"} />
                                      <img src={"/assets/img/kanban/19.png"} alt={"kanban"} />
                                    </div>
                                    <div className={"edit-img"}>
                                      <img src={"/assets/img/kanban/20.png"} alt={"kanban"} />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </main>










    </>
  );
}
