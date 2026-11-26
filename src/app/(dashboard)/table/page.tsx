import Customizer from "@/components/Customizer";
import Header from "@/components/Header";
import HeaderActions from "@/components/HeaderActions";
import Sidebar from "@/components/Sidebar";
import GeexResources from "@/components/GeexResources";
export const metadata = { title: "Table - Geex Dashboard", icons: { icon: "/assets/img/favicon.svg" } };

export default function TablePage() {
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
                {"Table"}
              </h2>
              <p className={"geex-content__header__subtitle"}>
                {"Table Elements is used to style and format the input field"}
              </p>
            </div>
            <HeaderActions />
          </div>
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
      </main>




    </>
  );
}
