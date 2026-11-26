import Link from "next/link";
import Customizer from "@/components/Customizer";
import Header from "@/components/Header";
import HeaderActions from "@/components/HeaderActions";
import Sidebar from "@/components/Sidebar";
import GeexResources from "@/components/GeexResources";
export const metadata = { title: "Geex Dashboard", icons: { icon: "/assets/img/favicon.svg" } };

export default function DashboardPage() {
  return (
    <>
      <GeexResources styles={["/assets/vendor/css/bootstrap/bootstrap.css","/assets/vendor/css/swiper.min.css","/assets/css/style.css","https://cdn.jsdelivr.net/npm/@iconscout/unicons@4.0.8/css/line.min.css"]} scripts={["/assets/vendor/js/jquery/jquery-3.5.1.min.js","/assets/vendor/js/jquery/jquery-ui.js","/assets/vendor/js/bootstrap/bootstrap.min.js","/assets/vendor/js/swiper.min.js","/assets/vendor/js/apexcharts.min.js","/assets/vendor/js/dragula.js","/assets/js/main.js"]} />
      <Header />
      <main className={"geex-main-content"}>
        <Sidebar />
        <Customizer />
        <div className={"geex-content"}>
          <div className={"geex-content__header"}>
            <div className={"geex-content__header__content"}>
              <h2 className={"geex-content__header__title"}>
                {"Dashboard"}
              </h2>
              <p className={"geex-content__header__subtitle"}>
                {"Welcome to Geex Modern Admin Dashboard"}
              </p>
            </div>
            <HeaderActions />
          </div>
          <div className={"geex-content__wrapper"}>
            <div className={"geex-content__section-wrapper"}>
              <div className={"geex-content__feature mb-40"}>
                <div className={"geex-content__feature__card"}>
                  <div className={"geex-content__feature__card__text"}>
                    <p className={"geex-content__feature__card__subtitle"}>
                      {"Memory"}
                    </p>
                    <h4 className={"geex-content__feature__card__title"}>
                      {"200TB"}
                    </h4>
                    <span className={"geex-content__feature__card__badge"}>
                      {"+2.5%"}
                    </span>
                  </div>
                  <div className={"geex-content__feature__card__img"}>
                    <img src={"/assets/img/feature/feature-2.svg"} alt={"feature"} />
                  </div>
                </div>
                <div className={"geex-content__feature__card"}>
                  <div className={"geex-content__feature__card__text"}>
                    <p className={"geex-content__feature__card__subtitle"}>
                      {"Visitors"}
                    </p>
                    <h4 className={"geex-content__feature__card__title"}>
                      {"87,245k"}
                    </h4>
                    <span className={"geex-content__feature__card__badge danger-color"}>
                      {"-4.4%"}
                    </span>
                  </div>
                  <div className={"geex-content__feature__card__img"}>
                    <img src={"/assets/img/feature/feature-3.svg"} alt={"feature"} />
                  </div>
                </div>
                <div className={"geex-content__feature__card"}>
                  <div className={"geex-content__feature__card__text"}>
                    <p className={"geex-content__feature__card__subtitle"}>
                      {"New Users"}
                    </p>
                    <h4 className={"geex-content__feature__card__title"}>
                      {"4,750"}
                    </h4>
                    <span className={"geex-content__feature__card__badge"}>
                      {"+2.5%"}
                    </span>
                  </div>
                  <div className={"geex-content__feature__card__img"}>
                    <img src={"/assets/img/feature/feature-1.svg"} alt={"feature"} />
                  </div>
                </div>
              </div>
              <div className={"geex-content__section geex-content__server-request mb-40"}>
                <div className={"geex-content__section__header"}>
                  <div className={"geex-content__section__header__title-part"}>
                    <h4 className={"geex-content__section__header__title"}>
                      {"Server Request"}
                    </h4>
                  </div>
                </div>
                <div className={"geex-content__section__content"}>
                  <div id={"line-chart"} className={"server-request-chart"} />
                </div>
              </div>
              <div className={"geex-content__double-column mb-40"}>
                <div className={"geex-content__section geex-content__visitor-count"}>
                  <div className={"geex-content__section__header"}>
                    <div className={"geex-content__section__header__title-part"}>
                      <h4 className={"geex-content__section__header__title"}>
                        {"Visitors"}
                      </h4>
                    </div>
                    <div className={"geex-content__section__header__content-part"}>
                      <div className={"geex-content__section__header__btn"}>
                        <Link href="/chart" className={"geex-content__section__header__link"}>
                          {" View More "}
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className={"geex-content__section__content"}>
                    <div className={"geex-content__visitor-count__number"}>
                      <h2 className={"geex-content__visitor-count__number__title"}>
                        {"98,425k"}
                      </h2>
                      <div className={"geex-content__visitor-count__number__text"}>
                        <span className={"geex-content__visitor-count__number__subtitle"}>
                          {"+2.5%"}
                        </span>
                        <p className={"geex-content__visitor-count__number__desc"}>
                          {"Than last week"}
                        </p>
                      </div>
                    </div>
                    <div id={"column-chart"} />
                  </div>
                </div>
                <div className={"geex-content__section geex-content__chat-summary"}>
                  <div className={"geex-content__section__header"}>
                    <div className={"geex-content__section__header__title-part"}>
                      <h4 className={"geex-content__section__header__title"}>
                        {"Chart Summary"}
                      </h4>
                    </div>
                    <div className={"geex-content__section__header__content-part"}>
                      <div className={"geex-content__section__header__btn"}>
                        <a href="/assets/geex-sample-report.csv" download className={"geex-content__section__header__link"}>
                          {" Download Report "}
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className={"geex-content__section__content"}>
                    <div id={"pie-chart"} />
                  </div>
                </div>
              </div>
              <div className={"geex-content__section geex-content__section--transparent geex-content__review"}>
                <div className={"geex-content__section__header"}>
                  <div className={"geex-content__section__header__title-part"}>
                    <h4 className={"geex-content__section__header__title"}>
                      {"User Review"}
                    </h4>
                    <p className={"geex-content__section__header__subtitle"}>
                      {"Eum fuga consequuntur ut et."}
                    </p>
                  </div>
                  <div className={"geex-content__section__header__content-part"}>
                    <div className={"geex-content__section__header__btn geex-content__section__header__swiper-btn"}>
                      <div className={"swiper-btn swiper-btn-prev"}>
                        <i className={"uil-arrow-left"} />
                      </div>
                      <div className={"swiper-btn swiper-btn-next"}>
                        <i className={"uil-arrow-right"} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className={"geex-content__section__content"}>
                  <div className={"swiper-container"}>
                    <div className={"swiper-wrapper"}>
                      <div className={"swiper-slide"}>
                        <div className={"geex-content__review__single"}>
                          <div className={"geex-content__review__single__header"}>
                            <div className={"geex-content__review__single__header__img"}>
                              <img src={"/assets/img/testimonial/1.svg"} alt={"User"} />
                            </div>
                            <div className={"geex-content__review__single__header__text"}>
                              <h4 className={"geex-content__review__single__header__title"}>
                                {"John Doe"}
                              </h4>
                              <p className={"geex-content__review__single__header__subtitle"}>
                                {"4 days ago"}
                              </p>
                            </div>
                          </div>
                          <div className={"geex-content__review__single__content"}>
                            <p className={"geex-content__review__single__content__text"}>
                              {"Ab architecto provident ex accusantium deserunt. Aut aspernatur deleniti sit maiores ut id cum accusamus. Beatae n"}
                            </p>
                          </div>
                          <div className={"geex-content__review__single__bottom"}>
                            <a href={"#"} className={"geex-content__review__single__btn danger-color"}>
                              {"Archive"}
                            </a>
                            <a href={"#"} className={"geex-content__review__single__btn success-color"}>
                              {"Accept"}
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className={"swiper-slide"}>
                        <div className={"geex-content__review__single"}>
                          <div className={"geex-content__review__single__header"}>
                            <div className={"geex-content__review__single__header__img"}>
                              <img src={"/assets/img/testimonial/2.svg"} alt={"User"} />
                            </div>
                            <div className={"geex-content__review__single__header__text"}>
                              <h4 className={"geex-content__review__single__header__title"}>
                                {"Kevin Hunt"}
                              </h4>
                              <p className={"geex-content__review__single__header__subtitle"}>
                                {"6 days ago"}
                              </p>
                            </div>
                          </div>
                          <div className={"geex-content__review__single__content"}>
                            <p className={"geex-content__review__single__content__text"}>
                              {"Ab architecto provident ex accusantium deserunt. Aut aspernatur deleniti sit maiores ut id cum accusamus. Beatae n"}
                            </p>
                          </div>
                          <div className={"geex-content__review__single__bottom"}>
                            <a href={"#"} className={"geex-content__review__single__btn danger-color"}>
                              {"Archive"}
                            </a>
                            <a href={"#"} className={"geex-content__review__single__btn success-color"}>
                              {"Accept"}
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className={"swiper-slide"}>
                        <div className={"geex-content__review__single"}>
                          <div className={"geex-content__review__single__header"}>
                            <div className={"geex-content__review__single__header__img"}>
                              <img src={"/assets/img/testimonial/3.svg"} alt={"User"} />
                            </div>
                            <div className={"geex-content__review__single__header__text"}>
                              <h4 className={"geex-content__review__single__header__title"}>
                                {"Isabbelle"}
                              </h4>
                              <p className={"geex-content__review__single__header__subtitle"}>
                                {"7 days ago"}
                              </p>
                            </div>
                          </div>
                          <div className={"geex-content__review__single__content"}>
                            <p className={"geex-content__review__single__content__text"}>
                              {"Ab architecto provident ex accusantium deserunt. Aut aspernatur deleniti sit maiores ut id cum accusamus. Beatae n"}
                            </p>
                          </div>
                          <div className={"geex-content__review__single__bottom"}>
                            <a href={"#"} className={"geex-content__review__single__btn success-color"}>
                              {"Publish "}
                              <i className={"uil-arrow-right"} />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className={"swiper-slide"}>
                        <div className={"geex-content__review__single"}>
                          <div className={"geex-content__review__single__header"}>
                            <div className={"geex-content__review__single__header__img"}>
                              <img src={"/assets/img/testimonial/4.svg"} alt={"User"} />
                            </div>
                            <div className={"geex-content__review__single__header__text"}>
                              <h4 className={"geex-content__review__single__header__title"}>
                                {"Kevin Hunt"}
                              </h4>
                              <p className={"geex-content__review__single__header__subtitle"}>
                                {"6 days ago"}
                              </p>
                            </div>
                          </div>
                          <div className={"geex-content__review__single__content"}>
                            <p className={"geex-content__review__single__content__text"}>
                              {"Ab architecto provident ex accusantium deserunt. Aut aspernatur deleniti sit maiores ut id cum accusamus. Beatae n"}
                            </p>
                          </div>
                          <div className={"geex-content__review__single__bottom"}>
                            <a href={"#"} className={"geex-content__review__single__btn danger-color"}>
                              {"Archive"}
                            </a>
                            <a href={"#"} className={"geex-content__review__single__btn success-color"}>
                              {"Accept"}
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className={"swiper-slide"}>
                        <div className={"geex-content__review__single"}>
                          <div className={"geex-content__review__single__header"}>
                            <div className={"geex-content__review__single__header__img"}>
                              <img src={"/assets/img/testimonial/2.svg"} alt={"User"} />
                            </div>
                            <div className={"geex-content__review__single__header__text"}>
                              <h4 className={"geex-content__review__single__header__title"}>
                                {"Isabbelle"}
                              </h4>
                              <p className={"geex-content__review__single__header__subtitle"}>
                                {"7 days ago"}
                              </p>
                            </div>
                          </div>
                          <div className={"geex-content__review__single__content"}>
                            <p className={"geex-content__review__single__content__text"}>
                              {"Ab architecto provident ex accusantium deserunt. Aut aspernatur deleniti sit maiores ut id cum accusamus. Beatae n"}
                            </p>
                          </div>
                          <div className={"geex-content__review__single__bottom"}>
                            <a href={"#"} className={"geex-content__review__single__btn success-color"}>
                              {"Publish "}
                              <i className={"uil-arrow-right"} />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={"geex-content__widget"}>
              <div className={"geex-content__widget__single"}>
                <div className={"geex-content__widget__single__header"}>
                  <h4 className={"geex-content__widget__single__title"}>
                    {"Server Status"}
                  </h4>
                  <p className={"geex-content__widget__single__subtitle"}>
                    {"Consectetur et quo dolor vero."}
                  </p>
                </div>
                <div className={"geex-content__widget__single__content"}>
                  <div id={"stack-chart"} />
                </div>
              </div>
              <div className={"geex-content__widget__single"}>
                <div className={"geex-content__widget__single__header"}>
                  <h4 className={"geex-content__widget__single__title"}>
                    {"Recent Problems"}
                  </h4>
                  <p className={"geex-content__widget__single__subtitle"}>
                    {"Maiores dicta atque dolorem temporibus"}
                  </p>
                </div>
                <div className={"geex-content__widget__single__content"}>
                  <div className={"geex-content__widget__single__cta mb-30"}>
                    <div className={"geex-content__widget__single__cta__img"}>
                      <img src={"/assets/img/icon/google.svg"} alt={"google"} />
                    </div>
                    <div className={"geex-content__widget__single__cta__text"}>
                      <h4 className={"geex-content__widget__single__cta__title"}>
                        {"Google"}
                      </h4>
                      <a href={"https://www.google.com"} className={"geex-content__widget__single__cta__link"}>
                        {"https://www.google.com"}
                      </a>
                    </div>
                    <div className={"geex-content__widget__single__cta__status"}>
                      <a href={"#"} className={"geex-content__widget__single__cta__btn danger-bg"}>
                        {"Down"}
                      </a>
                    </div>
                  </div>
                  <div className={"geex-content__widget__single__cta mb-30"}>
                    <div className={"geex-content__widget__single__cta__img"}>
                      <img src={"/assets/img/icon/facebook.svg"} alt={"google"} />
                    </div>
                    <div className={"geex-content__widget__single__cta__text"}>
                      <h4 className={"geex-content__widget__single__cta__title"}>
                        {"Facebook"}
                      </h4>
                      <a href={"https://www.google.com"} className={"geex-content__widget__single__cta__link"}>
                        {"https://www.facebook.com"}
                      </a>
                    </div>
                    <div className={"geex-content__widget__single__cta__status"}>
                      <a href={"#"} className={"geex-content__widget__single__cta__btn success-bg"}>
                        {"Stable"}
                      </a>
                    </div>
                  </div>
                  <div className={"geex-content__widget__single__cta"}>
                    <div className={"geex-content__widget__single__cta__img"}>
                      <img src={"/assets/img/icon/youtube.svg"} alt={"google"} />
                    </div>
                    <div className={"geex-content__widget__single__cta__text"}>
                      <h4 className={"geex-content__widget__single__cta__title"}>
                        {"Youtube"}
                      </h4>
                      <a href={"https://www.google.com"} className={"geex-content__widget__single__cta__link"}>
                        {"https://www.youtube.com"}
                      </a>
                    </div>
                    <div className={"geex-content__widget__single__cta__status"}>
                      <a href={"#"} className={"geex-content__widget__single__cta__btn warning-bg"}>
                        {"Warning"}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className={"geex-content__widget__single"}>
                <div className={"geex-content__widget__single__header"}>
                  <h4 className={"geex-content__widget__single__title"}>
                    {"Latest Activity"}
                  </h4>
                  <p className={"geex-content__widget__single__subtitle"}>
                    {"Sit et tempora dicta omnis ab quia quo quo."}
                  </p>
                </div>
                <div className={"geex-content__widget__single__content"}>
                  <div className={"geex-content__widget__single__timeline"}>
                    <div className={"geex-content__widget__single__timeline__content"}>
                      <h4 className={"geex-content__widget__single__timeline__content__title"}>
                        {"January 2nd, 04:35 AM"}
                      </h4>
                      <p className={"geex-content__widget__single__timeline__content__subtitle"}>
                        {"Illum omnis quo illum nisi. Nesciunt est accusamus. Blanditiis nisi quae eum nisi similique. Modi consequuntur totam"}
                      </p>
                    </div>
                  </div>
                  <div className={"geex-content__widget__single__timeline"}>
                    <div className={"geex-content__widget__single__timeline__content"}>
                      <h4 className={"geex-content__widget__single__timeline__content__title"}>
                        {"January 4th, 06:19 AM"}
                      </h4>
                      <p className={"geex-content__widget__single__timeline__content__subtitle"}>
                        {"Corrupti unde qui molestiae labore ad adipisci veniam perspiciatis quasi. Quae labore vel."}
                      </p>
                    </div>
                  </div>
                  <div className={"geex-content__widget__single__timeline"}>
                    <div className={"geex-content__widget__single__timeline__content"}>
                      <h4 className={"geex-content__widget__single__timeline__content__title"}>
                        {"January 5th, 12:34 AM"}
                      </h4>
                      <p className={"geex-content__widget__single__timeline__content__subtitle"}>
                        {"Maiores doloribus qui. Repellat accusamus minima ipsa ipsam aut debitis quis sit voluptates. Amet necessitatibus non minus quaerat et quis."}
                      </p>
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
