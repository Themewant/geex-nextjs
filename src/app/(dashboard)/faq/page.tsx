import Customizer from "@/components/Customizer";
import Header from "@/components/Header";
import HeaderActions from "@/components/HeaderActions";
import Sidebar from "@/components/Sidebar";
import GeexResources from "@/components/GeexResources";
export const metadata = { title: "Faq - Geex Dashboard", icons: { icon: "/assets/img/favicon.svg" } };

export default function FaqPage() {
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
                {"Faq"}
              </h2>
              <p className={"geex-content__header__subtitle"}>
                {"Form Elements is used to style and format the input field"}
              </p>
            </div>
            <HeaderActions />
          </div>
          <div className={"geex-content__faq"}>
            <div className={"geex-content__faq__wrapper"}>
              <div className={"row"}>
                <div className={"col-lg-6"}>
                  <div className={"geex-content__faq__single"} id={"faqAccordionOne"}>
                    <div className={"geex-content__faq__accordion__item"}>
                      <h2 className={"geex-content__faq__accordion__header"} id={"headingOne"}>
                        <button className={"geex-content__faq__accordion__button"} type={"button"} data-bs-toggle={"collapse"} data-bs-target={"#collapseOne"} aria-expanded={"true"} aria-controls={"collapseOne"}>
                          {" What are your core services UX design and branding firm? "}
                          <i className={"uil uil-angle-up"} />
                        </button>
                      </h2>
                      <div id={"collapseOne"} className={"geex-content__faq__accordion__content collapse show"} aria-labelledby={"headingOne"} data-bs-parent={"#faqAccordionOne"}>
                        <div className={"geex-content__faq__accordion__body"}>
                          {" However, our passion for branding and the demand from our clients led us to expand our offering to provide full-service brand design practice and web design and development of marketing websites. "}
                        </div>
                      </div>
                    </div>
                    <div className={"geex-content__faq__accordion__item"}>
                      <h2 className={"geex-content__faq__accordion__header"} id={"headingTwo"}>
                        <button className={"geex-content__faq__accordion__button collapsed"} type={"button"} data-bs-toggle={"collapse"} data-bs-target={"#collapseTwo"} aria-expanded={"false"} aria-controls={"collapseTwo"}>
                          {" Do you work with clients in different timezones? "}
                          <i className={"uil uil-angle-up"} />
                        </button>
                      </h2>
                      <div id={"collapseTwo"} className={"geex-content__faq__accordion__content collapse"} aria-labelledby={"headingTwo"} data-bs-parent={"#faqAccordionOne"}>
                        <div className={"geex-content__faq__accordion__body"}>
                          {" However, our passion for branding and the demand from our clients led us to expand our offering to provide full-service brand design practice and web design and development of marketing websites. "}
                        </div>
                      </div>
                    </div>
                    <div className={"geex-content__faq__accordion__item"}>
                      <h2 className={"geex-content__faq__accordion__header"} id={"headingThree"}>
                        <button className={"geex-content__faq__accordion__button collapsed"} type={"button"} data-bs-toggle={"collapse"} data-bs-target={"#collapseThree"} aria-expanded={"false"} aria-controls={"collapseThree"}>
                          {" What separates you from other branding agencies? "}
                          <i className={"uil uil-angle-up"} />
                        </button>
                      </h2>
                      <div id={"collapseThree"} className={"geex-content__faq__accordion__content collapse"} aria-labelledby={"headingThree"} data-bs-parent={"#faqAccordionOne"}>
                        <div className={"geex-content__faq__accordion__body"}>
                          {" However, our passion for branding and the demand from our clients led us to expand our offering to provide full-service brand design practice and web design "}
                        </div>
                      </div>
                    </div>
                    <div className={"geex-content__faq__accordion__item"}>
                      <h2 className={"geex-content__faq__accordion__header"} id={"headingTen"}>
                        <button className={"geex-content__faq__accordion__button collapsed"} type={"button"} data-bs-toggle={"collapse"} data-bs-target={"#collapseFour"} aria-expanded={"false"} aria-controls={"collapseFour"}>
                          {" How much does hiring you for a design project cost? "}
                          <i className={"uil uil-angle-up"} />
                        </button>
                      </h2>
                      <div id={"collapseFour"} className={"geex-content__faq__accordion__content collapse"} aria-labelledby={"headingFour"} data-bs-parent={"#faqAccordionOne"}>
                        <div className={"geex-content__faq__accordion__body"}>
                          {" However, our passion for branding and the demand from our clients led us to expand our offering to provide full-service brand design practice and web design and development of marketing websites. "}
                        </div>
                      </div>
                    </div>
                    <div className={"geex-content__faq__accordion__item"}>
                      <h2 className={"geex-content__faq__accordion__header"} id={"headingSix"}>
                        <button className={"geex-content__faq__accordion__button collapsed"} type={"button"} data-bs-toggle={"collapse"} data-bs-target={"#collapseSix"} aria-expanded={"false"} aria-controls={"collapseSix"}>
                          {" Can you help us redesign our B2B/enterprise software? "}
                          <i className={"uil uil-angle-up"} />
                        </button>
                      </h2>
                      <div id={"collapseSix"} className={"geex-content__faq__accordion__content collapse"} aria-labelledby={"headingSix"} data-bs-parent={"#faqAccordionOne"}>
                        <div className={"geex-content__faq__accordion__body"}>
                          {" However, our passion for branding and the demand from our clients led us to expand our offering to provide full-service brand design practice and web design "}
                        </div>
                      </div>
                    </div>
                    <div className={"geex-content__faq__accordion__item"}>
                      <h2 className={"geex-content__faq__accordion__header"} id={"headingFive"}>
                        <button className={"geex-content__faq__accordion__button collapsed"} type={"button"} data-bs-toggle={"collapse"} data-bs-target={"#collapseFive"} aria-expanded={"false"} aria-controls={"collapseFive"}>
                          {" Do you work with startups? "}
                          <i className={"uil uil-angle-up"} />
                        </button>
                      </h2>
                      <div id={"collapseFive"} className={"geex-content__faq__accordion__content collapse"} aria-labelledby={"headingFive"} data-bs-parent={"#faqAccordionOne"}>
                        <div className={"geex-content__faq__accordion__body"}>
                          {" However, our passion for branding and the demand from our clients led us to expand our offering to provide full-service brand design practice and web design "}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={"col-lg-6"}>
                  <div className={"geex-content__faq__single"} id={"faqAccordionTwo"}>
                    <div className={"geex-content__faq__accordion__item"}>
                      <h2 className={"geex-content__faq__accordion__header"} id={"headingSeven"}>
                        <button className={"geex-content__faq__accordion__button"} type={"button"} data-bs-toggle={"collapse"} data-bs-target={"#collapseSeven"} aria-expanded={"true"} aria-controls={"collapseSeven"}>
                          {" What are your core services UX design and branding firm? "}
                          <i className={"uil uil-angle-up"} />
                        </button>
                      </h2>
                      <div id={"collapseSeven"} className={"geex-content__faq__accordion__content collapse"} aria-labelledby={"headingSeven"} data-bs-parent={"#faqAccordionTwo"}>
                        <div className={"geex-content__faq__accordion__body"}>
                          {" However, our passion for branding and the demand from our clients led us to expand our offering to provide full-service brand design practice and web design and development of marketing websites. "}
                        </div>
                      </div>
                    </div>
                    <div className={"geex-content__faq__accordion__item"}>
                      <h2 className={"geex-content__faq__accordion__header"} id={"headingEight"}>
                        <button className={"geex-content__faq__accordion__button collapsed"} type={"button"} data-bs-toggle={"collapse"} data-bs-target={"#collapseEight"} aria-expanded={"false"} aria-controls={"collapseEight"}>
                          {" Do you work with clients in different timezones? "}
                          <i className={"uil uil-angle-up"} />
                        </button>
                      </h2>
                      <div id={"collapseEight"} className={"geex-content__faq__accordion__content collapse"} aria-labelledby={"headingEight"} data-bs-parent={"#faqAccordionTwo"}>
                        <div className={"geex-content__faq__accordion__body"}>
                          {" However, our passion for branding and the demand from our clients led us to expand our offering to provide full-service brand design practice and web design and development of marketing websites. "}
                        </div>
                      </div>
                    </div>
                    <div className={"geex-content__faq__accordion__item"}>
                      <h2 className={"geex-content__faq__accordion__header"} id={"headingNine"}>
                        <button className={"geex-content__faq__accordion__button collapsed"} type={"button"} data-bs-toggle={"collapse"} data-bs-target={"#collapseNine"} aria-expanded={"false"} aria-controls={"collapseNine"}>
                          {" What separates you from other branding agencies? "}
                          <i className={"uil uil-angle-up"} />
                        </button>
                      </h2>
                      <div id={"collapseNine"} className={"geex-content__faq__accordion__content collapse show"} aria-labelledby={"headingNine"} data-bs-parent={"#faqAccordionTwo"}>
                        <div className={"geex-content__faq__accordion__body"}>
                          {" However, our passion for branding and the demand from our clients led us to expand our offering to provide full-service brand design practice and web design "}
                        </div>
                      </div>
                    </div>
                    <div className={"geex-content__faq__accordion__item"}>
                      <h2 className={"geex-content__faq__accordion__header"} id={"headingTen"}>
                        <button className={"geex-content__faq__accordion__button collapsed"} type={"button"} data-bs-toggle={"collapse"} data-bs-target={"#collapseTen"} aria-expanded={"false"} aria-controls={"collapseTen"}>
                          {" How much does hiring you for a design project cost? "}
                          <i className={"uil uil-angle-up"} />
                        </button>
                      </h2>
                      <div id={"collapseTen"} className={"geex-content__faq__accordion__content collapse"} aria-labelledby={"headingTen"} data-bs-parent={"#faqAccordionTwo"}>
                        <div className={"geex-content__faq__accordion__body"}>
                          {" However, our passion for branding and the demand from our clients led us to expand our offering to provide full-service brand design practice and web design and development of marketing websites. "}
                        </div>
                      </div>
                    </div>
                    <div className={"geex-content__faq__accordion__item"}>
                      <h2 className={"geex-content__faq__accordion__header"} id={"headingEleven"}>
                        <button className={"geex-content__faq__accordion__button collapsed"} type={"button"} data-bs-toggle={"collapse"} data-bs-target={"#collapseEleven"} aria-expanded={"false"} aria-controls={"collapseEleven"}>
                          {" Can you help us redesign our B2B/enterprise software? "}
                          <i className={"uil uil-angle-up"} />
                        </button>
                      </h2>
                      <div id={"collapseEleven"} className={"geex-content__faq__accordion__content collapse"} aria-labelledby={"headingEleven"} data-bs-parent={"#faqAccordionTwo"}>
                        <div className={"geex-content__faq__accordion__body"}>
                          {" However, our passion for branding and the demand from our clients led us to expand our offering to provide full-service brand design practice and web design "}
                        </div>
                      </div>
                    </div>
                    <div className={"geex-content__faq__accordion__item"}>
                      <h2 className={"geex-content__faq__accordion__header"} id={"headingTwelve"}>
                        <button className={"geex-content__faq__accordion__button collapsed"} type={"button"} data-bs-toggle={"collapse"} data-bs-target={"#collapseTwelve"} aria-expanded={"false"} aria-controls={"collapseTwelve"}>
                          {" Do you work with startups? "}
                          <i className={"uil uil-angle-up"} />
                        </button>
                      </h2>
                      <div id={"collapseTwelve"} className={"geex-content__faq__accordion__content collapse"} aria-labelledby={"headingTwelve"} data-bs-parent={"#faqAccordionTwo"}>
                        <div className={"geex-content__faq__accordion__body"}>
                          {" However, our passion for branding and the demand from our clients led us to expand our offering to provide full-service brand design practice and web design "}
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
