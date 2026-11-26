import Customizer from "@/components/Customizer";
import Header from "@/components/Header";
import HeaderActions from "@/components/HeaderActions";
import Sidebar from "@/components/Sidebar";
import GeexResources from "@/components/GeexResources";
export const metadata = { title: "Color - Geex Dashboard", icons: { icon: "/assets/img/favicon.svg" } };

export default function ColorPage() {
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
                {"Color"}
              </h2>
              <p className={"geex-content__header__subtitle"}>
                {"Form Elements is used to style and format the input field"}
              </p>
            </div>
            <HeaderActions />
          </div>
          <div className={"geex-content__section geex-content__form"}>
            <div className={"geex-content__form__wrapper flex flex-column gap-20"}>
              <h4 className={"geex-content__form__title"}>
                {"Theme Color"}
              </h4>
              <div className={"geex-content__form__wrapper__item d-flex flex-wrap gap-30 mb-50"}>
                <div className={"geex-content__form__color"}>
                  <h4 className={"geex-content__form__color__label"}>
                    {"Primary"}
                  </h4>
                  <div className={"geex-content__form__color__box primary-bg"} />
                </div>
                <div className={"geex-content__form__color"}>
                  <h4 className={"geex-content__form__color__label"}>
                    {"Secondary"}
                  </h4>
                  <div className={"geex-content__form__color__box secondary-bg"} />
                </div>
                <div className={"geex-content__form__color"}>
                  <h4 className={"geex-content__form__color__label"}>
                    {"Quatinery"}
                  </h4>
                  <div className={"geex-content__form__color__box quatinery-bg"} />
                </div>
                <div className={"geex-content__form__color"}>
                  <h4 className={"geex-content__form__color__label"}>
                    {"Tertiary"}
                  </h4>
                  <div className={"geex-content__form__color__box tertiary-bg"} />
                </div>
                <div className={"geex-content__form__color"}>
                  <h4 className={"geex-content__form__color__label"}>
                    {"Success"}
                  </h4>
                  <div className={"geex-content__form__color__box success-bg"} />
                </div>
                <div className={"geex-content__form__color"}>
                  <h4 className={"geex-content__form__color__label"}>
                    {"Danger"}
                  </h4>
                  <div className={"geex-content__form__color__box danger-bg"} />
                </div>
                <div className={"geex-content__form__color"}>
                  <h4 className={"geex-content__form__color__label"}>
                    {"Warning"}
                  </h4>
                  <div className={"geex-content__form__color__box warning-bg"} />
                </div>
                <div className={"geex-content__form__color"}>
                  <h4 className={"geex-content__form__color__label"}>
                    {"Info"}
                  </h4>
                  <div className={"geex-content__form__color__box info-bg"} />
                </div>
                <div className={"geex-content__form__color"}>
                  <h4 className={"geex-content__form__color__label"}>
                    {"Body"}
                  </h4>
                  <div className={"geex-content__form__color__box body-bg"} />
                </div>
                <div className={"geex-content__form__color"}>
                  <h4 className={"geex-content__form__color__label"}>
                    {"Dark"}
                  </h4>
                  <div className={"geex-content__form__color__box dark-bg"} />
                </div>
                <div className={"geex-content__form__color"}>
                  <h4 className={"geex-content__form__color__label"}>
                    {"Sec"}
                  </h4>
                  <div className={"geex-content__form__color__box sec-bg"} />
                </div>
                <div className={"geex-content__form__color"}>
                  <h4 className={"geex-content__form__color__label"}>
                    {"Grey 3"}
                  </h4>
                  <div className={"geex-content__form__color__box grayThree-bg"} />
                </div>
                <div className={"geex-content__form__color"}>
                  <h4 className={"geex-content__form__color__label"}>
                    {"Grey 2"}
                  </h4>
                  <div className={"geex-content__form__color__box grayTwo-bg"} />
                </div>
                <div className={"geex-content__form__color"}>
                  <h4 className={"geex-content__form__color__label"}>
                    {"Section"}
                  </h4>
                  <div className={"geex-content__form__color__box section-bg"} />
                </div>
                <div className={"geex-content__form__color"}>
                  <h4 className={"geex-content__form__color__label"}>
                    {"White"}
                  </h4>
                  <div className={"geex-content__form__color__box white-bg"} />
                </div>
                <div className={"geex-content__form__color"}>
                  <h4 className={"geex-content__form__color__label"}>
                    {"Grey 1"}
                  </h4>
                  <div className={"geex-content__form__color__box grayOne-bg"} />
                </div>
              </div>
              <h4 className={"geex-content__form__title"}>
                {"Theme Color"}
              </h4>
              <div className={"geex-content__form__wrapper__item d-flex flex-wrap gap-30"}>
                <div className={"geex-content__form__color"}>
                  <h4 className={"geex-content__form__color__label"}>
                    {"Primary"}
                  </h4>
                  <div className={"geex-content__form__color__box transparent primary-bg"} />
                </div>
                <div className={"geex-content__form__color"}>
                  <h4 className={"geex-content__form__color__label"}>
                    {"Secondary"}
                  </h4>
                  <div className={"geex-content__form__color__box transparent secondary-bg"} />
                </div>
                <div className={"geex-content__form__color"}>
                  <h4 className={"geex-content__form__color__label"}>
                    {"Quatinery"}
                  </h4>
                  <div className={"geex-content__form__color__box transparent quatinery-bg"} />
                </div>
                <div className={"geex-content__form__color"}>
                  <h4 className={"geex-content__form__color__label"}>
                    {"Tertiary"}
                  </h4>
                  <div className={"geex-content__form__color__box transparent tertiary-bg"} />
                </div>
                <div className={"geex-content__form__color"}>
                  <h4 className={"geex-content__form__color__label"}>
                    {"Success"}
                  </h4>
                  <div className={"geex-content__form__color__box transparent success-bg"} />
                </div>
                <div className={"geex-content__form__color"}>
                  <h4 className={"geex-content__form__color__label"}>
                    {"Danger"}
                  </h4>
                  <div className={"geex-content__form__color__box transparent danger-bg"} />
                </div>
                <div className={"geex-content__form__color"}>
                  <h4 className={"geex-content__form__color__label"}>
                    {"Warning"}
                  </h4>
                  <div className={"geex-content__form__color__box transparent warning-bg"} />
                </div>
                <div className={"geex-content__form__color"}>
                  <h4 className={"geex-content__form__color__label"}>
                    {"Info"}
                  </h4>
                  <div className={"geex-content__form__color__box transparent info-bg"} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>




    </>
  );
}
