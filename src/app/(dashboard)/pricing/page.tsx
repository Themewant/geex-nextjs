import Link from "next/link";
import Customizer from "@/components/Customizer";
import Header from "@/components/Header";
import HeaderActions from "@/components/HeaderActions";
import Sidebar from "@/components/Sidebar";
import GeexResources from "@/components/GeexResources";
export const metadata = { title: "Pricing - Geex Dashboard", icons: { icon: "/assets/img/favicon.svg" } };

export default function PricingPage() {
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
                {"Pricing"}
              </h2>
              <p className={"geex-content__header__subtitle"}>
                {"Form Elements is used to style and format the input field"}
              </p>
            </div>
            <HeaderActions />
          </div>
          <div className={"geex-content__pricing"}>
            <div className={"geex-content__pricing__wrapper"}>
              <div className={"row"}>
                <div className={"col-lg-4 mb-40"}>
                  <div className={"geex-content__pricing__single"}>
                    <div className={"geex-content__pricing__header"}>
                      <span className={"geex-content__pricing__badge"}>
                        {"Gold"}
                      </span>
                      <div className={"geex-content__pricing__tag"}>
                        <span className={"geex-content__pricing__currency"}>
                          {"$"}
                        </span>
                        <span className={"geex-content__pricing__amount"}>
                          {"250"}
                        </span>
                        <span className={"geex-content__pricing__period"}>
                          {"per month"}
                        </span>
                      </div>
                      <span className={"geex-content__pricing__subtitle"}>
                        {"Grow your business with ease."}
                      </span>
                    </div>
                    <div className={"geex-content__pricing__body"}>
                      <ul className={"geex-content__pricing__feature"}>
                        <li className={"geex-content__pricing__feature__list active"}>
                          <i className={"uil-check"} />
                          <span className={"geex-content__pricing__feature__text"}>
                            {"Business Solution"}
                          </span>
                        </li>
                        <li className={"geex-content__pricing__feature__list active"}>
                          <i className={"uil-check"} />
                          <span className={"geex-content__pricing__feature__text"}>
                            {"24/7 Consultant Service"}
                          </span>
                        </li>
                        <li className={"geex-content__pricing__feature__list"}>
                          <i className={"uil-check"} />
                          <span className={"geex-content__pricing__feature__text"}>
                            {"Great Customer Support"}
                          </span>
                        </li>
                        <li className={"geex-content__pricing__feature__list"}>
                          <i className={"uil-check"} />
                          <span className={"geex-content__pricing__feature__text"}>
                            {"Market Growth Solution"}
                          </span>
                        </li>
                        <li className={"geex-content__pricing__feature__list"}>
                          <i className={"uil-check"} />
                          <span className={"geex-content__pricing__feature__text"}>
                            {"24/7 Consultant Service"}
                          </span>
                        </li>
                      </ul>
                      <div className={"geex-content__pricing__btn-part"}>
                        <Link className="geex-content__pricing__btn" href="/signup">
                          {"Try for Free"}
                        </Link>
                      </div>
                      <span className={"geex-content__pricing__profit"}>
                        {"$999 billed annually. Save $189."}
                      </span>
                    </div>
                  </div>
                </div>
                <div className={"col-lg-4 mb-40"}>
                  <div className={"geex-content__pricing__single active"}>
                    <div className={"geex-content__pricing__header"}>
                      <span className={"geex-content__pricing__badge"}>
                        {"Platinum"}
                      </span>
                      <div className={"geex-content__pricing__tag"}>
                        <span className={"geex-content__pricing__currency"}>
                          {"$"}
                        </span>
                        <span className={"geex-content__pricing__amount"}>
                          {"125"}
                        </span>
                        <span className={"geex-content__pricing__period"}>
                          {"per month"}
                        </span>
                      </div>
                      <span className={"geex-content__pricing__subtitle"}>
                        {"Grow your business with ease."}
                      </span>
                    </div>
                    <div className={"geex-content__pricing__body"}>
                      <ul className={"geex-content__pricing__feature"}>
                        <li className={"geex-content__pricing__feature__list active"}>
                          <i className={"uil-check"} />
                          <span className={"geex-content__pricing__feature__text"}>
                            {"Business Solution"}
                          </span>
                        </li>
                        <li className={"geex-content__pricing__feature__list active"}>
                          <i className={"uil-check"} />
                          <span className={"geex-content__pricing__feature__text"}>
                            {"24/7 Consultant Service"}
                          </span>
                        </li>
                        <li className={"geex-content__pricing__feature__list"}>
                          <i className={"uil-check"} />
                          <span className={"geex-content__pricing__feature__text"}>
                            {"Great Customer Support"}
                          </span>
                        </li>
                        <li className={"geex-content__pricing__feature__list"}>
                          <i className={"uil-check"} />
                          <span className={"geex-content__pricing__feature__text"}>
                            {"Market Growth Solution"}
                          </span>
                        </li>
                        <li className={"geex-content__pricing__feature__list"}>
                          <i className={"uil-check"} />
                          <span className={"geex-content__pricing__feature__text"}>
                            {"24/7 Consultant Service"}
                          </span>
                        </li>
                      </ul>
                      <div className={"geex-content__pricing__btn-part"}>
                        <Link className="geex-content__pricing__btn" href="/signup">
                          {"Try for Free"}
                        </Link>
                      </div>
                      <span className={"geex-content__pricing__profit"}>
                        {"$999 billed annually. Save $189."}
                      </span>
                    </div>
                  </div>
                </div>
                <div className={"col-lg-4 mb-40"}>
                  <div className={"geex-content__pricing__single"}>
                    <div className={"geex-content__pricing__header"}>
                      <span className={"geex-content__pricing__badge"}>
                        {"Diamond"}
                      </span>
                      <div className={"geex-content__pricing__tag"}>
                        <span className={"geex-content__pricing__currency"}>
                          {"$"}
                        </span>
                        <span className={"geex-content__pricing__amount"}>
                          {"149"}
                        </span>
                        <span className={"geex-content__pricing__period"}>
                          {"per month"}
                        </span>
                      </div>
                      <span className={"geex-content__pricing__subtitle"}>
                        {"Grow your business with ease."}
                      </span>
                    </div>
                    <div className={"geex-content__pricing__body"}>
                      <ul className={"geex-content__pricing__feature"}>
                        <li className={"geex-content__pricing__feature__list active"}>
                          <i className={"uil-check"} />
                          <span className={"geex-content__pricing__feature__text"}>
                            {"Business Solution"}
                          </span>
                        </li>
                        <li className={"geex-content__pricing__feature__list active"}>
                          <i className={"uil-check"} />
                          <span className={"geex-content__pricing__feature__text"}>
                            {"24/7 Consultant Service"}
                          </span>
                        </li>
                        <li className={"geex-content__pricing__feature__list"}>
                          <i className={"uil-check"} />
                          <span className={"geex-content__pricing__feature__text"}>
                            {"Great Customer Support"}
                          </span>
                        </li>
                        <li className={"geex-content__pricing__feature__list"}>
                          <i className={"uil-check"} />
                          <span className={"geex-content__pricing__feature__text"}>
                            {"Market Growth Solution"}
                          </span>
                        </li>
                        <li className={"geex-content__pricing__feature__list"}>
                          <i className={"uil-check"} />
                          <span className={"geex-content__pricing__feature__text"}>
                            {"24/7 Consultant Service"}
                          </span>
                        </li>
                      </ul>
                      <div className={"geex-content__pricing__btn-part"}>
                        <Link className="geex-content__pricing__btn" href="/signup">
                          {"Try for Free"}
                        </Link>
                      </div>
                      <span className={"geex-content__pricing__profit"}>
                        {"$999 billed annually. Save $189."}
                      </span>
                    </div>
                  </div>
                </div>
                <div className={"col-lg-4 md-mb-40"}>
                  <div className={"geex-content__pricing__single"}>
                    <div className={"geex-content__pricing__header"}>
                      <span className={"geex-content__pricing__badge"}>
                        {"Titanium"}
                      </span>
                      <div className={"geex-content__pricing__tag"}>
                        <span className={"geex-content__pricing__currency"}>
                          {"$"}
                        </span>
                        <span className={"geex-content__pricing__amount"}>
                          {"199"}
                        </span>
                        <span className={"geex-content__pricing__period"}>
                          {"per month"}
                        </span>
                      </div>
                      <span className={"geex-content__pricing__subtitle"}>
                        {"Grow your business with ease."}
                      </span>
                    </div>
                    <div className={"geex-content__pricing__body"}>
                      <ul className={"geex-content__pricing__feature"}>
                        <li className={"geex-content__pricing__feature__list active"}>
                          <i className={"uil-check"} />
                          <span className={"geex-content__pricing__feature__text"}>
                            {"Business Solution"}
                          </span>
                        </li>
                        <li className={"geex-content__pricing__feature__list active"}>
                          <i className={"uil-check"} />
                          <span className={"geex-content__pricing__feature__text"}>
                            {"24/7 Consultant Service"}
                          </span>
                        </li>
                        <li className={"geex-content__pricing__feature__list"}>
                          <i className={"uil-check"} />
                          <span className={"geex-content__pricing__feature__text"}>
                            {"Great Customer Support"}
                          </span>
                        </li>
                        <li className={"geex-content__pricing__feature__list"}>
                          <i className={"uil-check"} />
                          <span className={"geex-content__pricing__feature__text"}>
                            {"Market Growth Solution"}
                          </span>
                        </li>
                        <li className={"geex-content__pricing__feature__list"}>
                          <i className={"uil-check"} />
                          <span className={"geex-content__pricing__feature__text"}>
                            {"24/7 Consultant Service"}
                          </span>
                        </li>
                      </ul>
                      <div className={"geex-content__pricing__btn-part"}>
                        <Link className="geex-content__pricing__btn" href="/signup">
                          {"Try for Free"}
                        </Link>
                      </div>
                      <span className={"geex-content__pricing__profit"}>
                        {"$999 billed annually. Save $189."}
                      </span>
                    </div>
                  </div>
                </div>
                <div className={"col-lg-4 md-mb-40"}>
                  <div className={"geex-content__pricing__single"}>
                    <div className={"geex-content__pricing__header"}>
                      <span className={"geex-content__pricing__badge"}>
                        {"Platinum"}
                      </span>
                      <div className={"geex-content__pricing__tag"}>
                        <span className={"geex-content__pricing__currency"}>
                          {"$"}
                        </span>
                        <span className={"geex-content__pricing__amount"}>
                          {"125"}
                        </span>
                        <span className={"geex-content__pricing__period"}>
                          {"per month"}
                        </span>
                      </div>
                      <span className={"geex-content__pricing__subtitle"}>
                        {"Grow your business with ease."}
                      </span>
                    </div>
                    <div className={"geex-content__pricing__body"}>
                      <ul className={"geex-content__pricing__feature"}>
                        <li className={"geex-content__pricing__feature__list active"}>
                          <i className={"uil-check"} />
                          <span className={"geex-content__pricing__feature__text"}>
                            {"Business Solution"}
                          </span>
                        </li>
                        <li className={"geex-content__pricing__feature__list active"}>
                          <i className={"uil-check"} />
                          <span className={"geex-content__pricing__feature__text"}>
                            {"24/7 Consultant Service"}
                          </span>
                        </li>
                        <li className={"geex-content__pricing__feature__list"}>
                          <i className={"uil-check"} />
                          <span className={"geex-content__pricing__feature__text"}>
                            {"Great Customer Support"}
                          </span>
                        </li>
                        <li className={"geex-content__pricing__feature__list"}>
                          <i className={"uil-check"} />
                          <span className={"geex-content__pricing__feature__text"}>
                            {"Market Growth Solution"}
                          </span>
                        </li>
                        <li className={"geex-content__pricing__feature__list"}>
                          <i className={"uil-check"} />
                          <span className={"geex-content__pricing__feature__text"}>
                            {"24/7 Consultant Service"}
                          </span>
                        </li>
                      </ul>
                      <div className={"geex-content__pricing__btn-part"}>
                        <Link className="geex-content__pricing__btn" href="/signup">
                          {"Try for Free"}
                        </Link>
                      </div>
                      <span className={"geex-content__pricing__profit"}>
                        {"$999 billed annually. Save $189."}
                      </span>
                    </div>
                  </div>
                </div>
                <div className={"col-lg-4"}>
                  <div className={"geex-content__pricing__single active"}>
                    <div className={"geex-content__pricing__header"}>
                      <span className={"geex-content__pricing__badge"}>
                        {"Diamond"}
                      </span>
                      <div className={"geex-content__pricing__tag"}>
                        <span className={"geex-content__pricing__currency"}>
                          {"$"}
                        </span>
                        <span className={"geex-content__pricing__amount"}>
                          {"149"}
                        </span>
                        <span className={"geex-content__pricing__period"}>
                          {"per month"}
                        </span>
                      </div>
                      <span className={"geex-content__pricing__subtitle"}>
                        {"Grow your business with ease."}
                      </span>
                    </div>
                    <div className={"geex-content__pricing__body"}>
                      <ul className={"geex-content__pricing__feature"}>
                        <li className={"geex-content__pricing__feature__list active"}>
                          <i className={"uil-check"} />
                          <span className={"geex-content__pricing__feature__text"}>
                            {"Business Solution"}
                          </span>
                        </li>
                        <li className={"geex-content__pricing__feature__list active"}>
                          <i className={"uil-check"} />
                          <span className={"geex-content__pricing__feature__text"}>
                            {"24/7 Consultant Service"}
                          </span>
                        </li>
                        <li className={"geex-content__pricing__feature__list"}>
                          <i className={"uil-check"} />
                          <span className={"geex-content__pricing__feature__text"}>
                            {"Great Customer Support"}
                          </span>
                        </li>
                        <li className={"geex-content__pricing__feature__list"}>
                          <i className={"uil-check"} />
                          <span className={"geex-content__pricing__feature__text"}>
                            {"Market Growth Solution"}
                          </span>
                        </li>
                        <li className={"geex-content__pricing__feature__list"}>
                          <i className={"uil-check"} />
                          <span className={"geex-content__pricing__feature__text"}>
                            {"24/7 Consultant Service"}
                          </span>
                        </li>
                      </ul>
                      <div className={"geex-content__pricing__btn-part"}>
                        <Link className="geex-content__pricing__btn" href="/signup">
                          {"Try for Free"}
                        </Link>
                      </div>
                      <span className={"geex-content__pricing__profit"}>
                        {"$999 billed annually. Save $189."}
                      </span>
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
