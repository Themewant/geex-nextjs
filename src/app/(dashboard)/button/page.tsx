import Customizer from "@/components/Customizer";
import Header from "@/components/Header";
import HeaderActions from "@/components/HeaderActions";
import Sidebar from "@/components/Sidebar";
import GeexResources from "@/components/GeexResources";
export const metadata = { title: "Button - Geex Dashboard", icons: { icon: "/assets/img/favicon.svg" } };

export default function ButtonPage() {
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
                {"Button"}
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
                <div className={"geex-content__form__single d-flex gap-10"}>
                  <button className={"geex-btn"}>
                    <i className={"uil-plus"} />
                    {" New Message"}
                  </button>
                  <button className={"geex-btn geex-btn--dark"}>
                    <i className={"uil-plus"} />
                    {" New Message"}
                  </button>
                  <button className={"geex-btn geex-btn--primary"}>
                    <i className={"uil-plus"} />
                    {" New Message"}
                  </button>
                </div>
                <div className={"geex-content__form__single d-flex gap-10"}>
                  <button className={"geex-btn geex-btn--transparent"}>
                    <i className={"uil-plus"} />
                    {" New Message"}
                  </button>
                  <button className={"geex-btn geex-btn--dark-transparent"}>
                    <i className={"uil-plus"} />
                    {" New Message"}
                  </button>
                  <button className={"geex-btn geex-btn--primary-transparent"}>
                    <i className={"uil-plus"} />
                    {" New Message"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>




    </>
  );
}
