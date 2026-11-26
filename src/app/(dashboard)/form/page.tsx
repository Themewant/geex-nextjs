import Customizer from "@/components/Customizer";
import Header from "@/components/Header";
import HeaderActions from "@/components/HeaderActions";
import Sidebar from "@/components/Sidebar";
import GeexResources from "@/components/GeexResources";
export const metadata = { title: "Form - Geex Dashboard", icons: { icon: "/assets/img/favicon.svg" } };

export default function FormPage() {
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
                {"Form"}
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
                <div className={"geex-content__form__single"}>
                  <h4 className={"geex-content__form__single__label"}>
                    {"Textarea"}
                  </h4>
                  <div className={"geex-content__form__single__box"}>
                    <textarea className={"form-control"} id={"geex-textarea1"} rows={5} />
                    <textarea className={"form-control"} id={"geex-textarea2"} rows={5} />
                  </div>
                </div>
                <div className={"geex-content__form__single"}>
                  <h4 className={"geex-content__form__single__label"}>
                    {"Search Box"}
                  </h4>
                  <div className={"geex-content__header__searchform"}>
                    <input type={"text"} placeholder={"Search"} className={"geex-content__header__btn"} />
                    <i className={"uil uil-search"} />
                  </div>
                </div>
                <div className={"geex-content__form__single"}>
                  <h4 className={"geex-content__form__single__label"}>
                    {"Checkbox"}
                  </h4>
                  <div className={"geex-content__form__single__box"}>
                    <div className={"form-check success"}>
                      <input className={"form-check-input"} type={"checkbox"} defaultValue={""} id={"geex-checkbox1"} />
                      <label className={"form-check-label"} htmlFor={"geex-checkbox1"}>
                        {" Checkbox 1 "}
                      </label>
                    </div>
                    <div className={"form-check warning"}>
                      <input className={"form-check-input"} type={"checkbox"} defaultValue={""} id={"geex-checkbox2"} />
                      <label className={"form-check-label"} htmlFor={"geex-checkbox2"}>
                        {" Checkbox 2 "}
                      </label>
                    </div>
                    <div className={"form-check danger"}>
                      <input className={"form-check-input"} type={"checkbox"} defaultValue={""} id={"geex-checkbox3"} />
                      <label className={"form-check-label"} htmlFor={"geex-checkbox3"}>
                        {" Checkbox 3 "}
                      </label>
                    </div>
                    <div className={"form-check info"}>
                      <input className={"form-check-input"} type={"checkbox"} defaultValue={""} id={"geex-checkbox4"} />
                      <label className={"form-check-label"} htmlFor={"geex-checkbox4"}>
                        {" Checkbox 4 "}
                      </label>
                    </div>
                    <div className={"form-check default"}>
                      <input className={"form-check-input"} type={"checkbox"} defaultValue={""} id={"geex-checkbox5"} />
                      <label className={"form-check-label"} htmlFor={"geex-checkbox5"}>
                        {" Checkbox 5 "}
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className={"geex-content__form__wrapper__item geex-content__form__right"}>
                <div className={"geex-content__form__single"}>
                  <h4 className={"geex-content__form__single__label"}>
                    {"Default Input"}
                  </h4>
                  <div className={"geex-content__form__single__box mb-20"}>
                    <input placeholder={"Insert amount"} className={"form-control"} id={"geex-input1"} />
                    <input placeholder={"Insert amount"} className={"form-control"} id={"geex-input2"} />
                  </div>
                  <div className={"geex-content__form__single__box"}>
                    <div className={"input-icon"}>
                      <i className={"uil uil-dollar-alt"} />
                      <input placeholder={"@ Insert amount"} className={"form-control"} id={"geex-input1"} />
                    </div>
                    <div className={"input-icon"}>
                      <i className={"uil uil-dollar-alt"} />
                      <input placeholder={"@ Insert amount"} className={"form-control"} id={"geex-input2"} />
                    </div>
                  </div>
                </div>
                <div className={"geex-content__form__single"}>
                  <h4 className={"geex-content__form__single__label"}>
                    {"Default Input With Label"}
                  </h4>
                  <div className={"geex-content__form__single__box mb-20"}>
                    <div className={"input-wrapper"}>
                      <label htmlFor={"geex-input-5"} className={"input-label"}>
                        {"Label"}
                      </label>
                      <input placeholder={"Insert amount"} className={"form-control"} id={"geex-input5"} />
                    </div>
                    <div className={"input-wrapper"}>
                      <label htmlFor={"geex-input-6"} className={"input-label"}>
                        {"Label"}
                      </label>
                      <input placeholder={"Insert amount"} className={"form-control"} id={"geex-input6"} />
                    </div>
                  </div>
                  <div className={"geex-content__form__single__box"}>
                    <div className={"input-wrapper input-icon"}>
                      <label htmlFor={"geex-input-7"} className={"input-label"}>
                        {"Label"}
                      </label>
                      <input placeholder={"Insert amount"} className={"form-control"} id={"geex-input7"} />
                      <i className={"uil uil-dollar-alt"} />
                    </div>
                    <div className={"input-wrapper input-icon"}>
                      <label htmlFor={"geex-input-8"} className={"input-label"}>
                        {"Label"}
                      </label>
                      <input placeholder={"Insert amount"} className={"form-control"} id={"geex-input8"} />
                      <i className={"uil uil-dollar-alt"} />
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
