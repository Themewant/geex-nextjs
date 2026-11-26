import Customizer from "@/components/Customizer";
import Header from "@/components/Header";
import HeaderActions from "@/components/HeaderActions";
import Sidebar from "@/components/Sidebar";
import GeexResources from "@/components/GeexResources";
export const metadata = { title: "Testimonial - Geex Dashboard", icons: { icon: "/assets/img/favicon.svg" } };

export default function TestimonialPage() {
  return (
    <>
      <GeexResources styles={["/assets/vendor/css/bootstrap/bootstrap.css","/assets/vendor/css/swiper.min.css","/assets/css/style.css","https://cdn.jsdelivr.net/npm/@iconscout/unicons@4.0.8/css/line.min.css"]} scripts={["/assets/vendor/js/jquery/jquery-3.5.1.min.js","/assets/vendor/js/jquery/jquery-ui.js","/assets/vendor/js/bootstrap/bootstrap.min.js","/assets/vendor/js/swiper.min.js","/assets/js/main.js"]} />
      <Header />
      <main className={"geex-main-content"}>
        <Sidebar />
        <Customizer />
        <div className={"geex-content"}>
          <div className={"geex-content__header"}>
            <div className={"geex-content__header__content"}>
              <h2 className={"geex-content__header__title"}>
                {"Testimonial"}
              </h2>
              <p className={"geex-content__header__subtitle"}>
                {"Form Elements is used to style and format the input field"}
              </p>
            </div>
            <HeaderActions />
          </div>
          <div className={"geex-content__testimonial"}>
            <div className={"row gutter-40"}>
              <div className={"col-lg-4 col-sm-6 mb-40"}>
                <div className={"geex-content__testimonial__single"}>
                  <img src={"/assets/img/icon/quotes.svg"} alt={"image"} className={"geex-content__testimonial__single__quote"} />
                  <p className={"geex-content__testimonial__single__desc"}>
                    {"It’s like having a superpower! I’ve tried almost every alternative and competitor and found anything."}
                  </p>
                  <div className={"geex-content__testimonial__single__author"}>
                    <h6 className={"geex-content__testimonial__single__author__title"}>
                      {"Kevin Smith"}
                    </h6>
                    <span className={"geex-content__testimonial__single__author__subtitle"}>
                      {"Merchandising Market Manager"}
                    </span>
                    <img src={"/assets/img/testimonial/1.svg"} alt={"image"} className={"geex-content__testimonial__single__author__img"} />
                  </div>
                </div>
              </div>
              <div className={"col-lg-4 col-sm-6 mb-40"}>
                <div className={"geex-content__testimonial__single"}>
                  <img src={"/assets/img/icon/quotes.svg"} alt={"image"} className={"geex-content__testimonial__single__quote"} />
                  <p className={"geex-content__testimonial__single__desc"}>
                    {"It’s like having a superpower! I’ve tried almost every alternative and competitor and found anything."}
                  </p>
                  <div className={"geex-content__testimonial__single__author"}>
                    <h6 className={"geex-content__testimonial__single__author__title"}>
                      {"Jack David"}
                    </h6>
                    <span className={"geex-content__testimonial__single__author__subtitle"}>
                      {"Merchandising Market Manager"}
                    </span>
                    <img src={"/assets/img/testimonial/2.svg"} alt={"image"} className={"geex-content__testimonial__single__author__img"} />
                  </div>
                </div>
              </div>
              <div className={"col-lg-4 col-sm-6 mb-40"}>
                <div className={"geex-content__testimonial__single"}>
                  <img src={"/assets/img/icon/quotes.svg"} alt={"image"} className={"geex-content__testimonial__single__quote"} />
                  <p className={"geex-content__testimonial__single__desc"}>
                    {"It’s like having a superpower! I’ve tried almost every alternative and competitor and found anything."}
                  </p>
                  <div className={"geex-content__testimonial__single__author"}>
                    <h6 className={"geex-content__testimonial__single__author__title"}>
                      {"David Hollis"}
                    </h6>
                    <span className={"geex-content__testimonial__single__author__subtitle"}>
                      {"Merchandising Market Manager"}
                    </span>
                    <img src={"/assets/img/testimonial/3.svg"} alt={"image"} className={"geex-content__testimonial__single__author__img"} />
                  </div>
                </div>
              </div>
              <div className={"col-lg-4 col-sm-6 mb-40"}>
                <div className={"geex-content__testimonial__single"}>
                  <img src={"/assets/img/icon/quotes.svg"} alt={"image"} className={"geex-content__testimonial__single__quote"} />
                  <p className={"geex-content__testimonial__single__desc"}>
                    {"It’s like having a superpower! I’ve tried almost every alternative and competitor and found anything."}
                  </p>
                  <div className={"geex-content__testimonial__single__author"}>
                    <h6 className={"geex-content__testimonial__single__author__title"}>
                      {"Beau Alexander"}
                    </h6>
                    <span className={"geex-content__testimonial__single__author__subtitle"}>
                      {"Merchandising Market Manager"}
                    </span>
                    <img src={"/assets/img/testimonial/4.svg"} alt={"image"} className={"geex-content__testimonial__single__author__img"} />
                  </div>
                </div>
              </div>
              <div className={"col-lg-4 col-sm-6 mb-40"}>
                <div className={"geex-content__testimonial__single"}>
                  <img src={"/assets/img/icon/quotes.svg"} alt={"image"} className={"geex-content__testimonial__single__quote"} />
                  <p className={"geex-content__testimonial__single__desc"}>
                    {"It’s like having a superpower! I’ve tried almost every alternative and competitor and found anything."}
                  </p>
                  <div className={"geex-content__testimonial__single__author"}>
                    <h6 className={"geex-content__testimonial__single__author__title"}>
                      {"Noah Presley"}
                    </h6>
                    <span className={"geex-content__testimonial__single__author__subtitle"}>
                      {"Merchandising Market Manager"}
                    </span>
                    <img src={"/assets/img/testimonial/3.svg"} alt={"image"} className={"geex-content__testimonial__single__author__img"} />
                  </div>
                </div>
              </div>
              <div className={"col-lg-4 col-sm-6 mb-40"}>
                <div className={"geex-content__testimonial__single"}>
                  <img src={"/assets/img/icon/quotes.svg"} alt={"image"} className={"geex-content__testimonial__single__quote"} />
                  <p className={"geex-content__testimonial__single__desc"}>
                    {"It’s like having a superpower! I’ve tried almost every alternative and competitor and found anything."}
                  </p>
                  <div className={"geex-content__testimonial__single__author"}>
                    <h6 className={"geex-content__testimonial__single__author__title"}>
                      {"Sawyer Ford"}
                    </h6>
                    <span className={"geex-content__testimonial__single__author__subtitle"}>
                      {"Merchandising Market Manager"}
                    </span>
                    <img src={"/assets/img/testimonial/2.svg"} alt={"image"} className={"geex-content__testimonial__single__author__img"} />
                  </div>
                </div>
              </div>
              <div className={"col-lg-4 col-sm-6 mb-40"}>
                <div className={"geex-content__testimonial__single"}>
                  <img src={"/assets/img/icon/quotes.svg"} alt={"image"} className={"geex-content__testimonial__single__quote"} />
                  <p className={"geex-content__testimonial__single__desc"}>
                    {"It’s like having a superpower! I’ve tried almost every alternative and competitor and found anything."}
                  </p>
                  <div className={"geex-content__testimonial__single__author"}>
                    <h6 className={"geex-content__testimonial__single__author__title"}>
                      {"David Hollis"}
                    </h6>
                    <span className={"geex-content__testimonial__single__author__subtitle"}>
                      {"Merchandising Market Manager"}
                    </span>
                    <img src={"/assets/img/testimonial/1.svg"} alt={"image"} className={"geex-content__testimonial__single__author__img"} />
                  </div>
                </div>
              </div>
              <div className={"col-lg-4 col-sm-6 mb-40"}>
                <div className={"geex-content__testimonial__single"}>
                  <img src={"/assets/img/icon/quotes.svg"} alt={"image"} className={"geex-content__testimonial__single__quote"} />
                  <p className={"geex-content__testimonial__single__desc"}>
                    {"It’s like having a superpower! I’ve tried almost every alternative and competitor and found anything."}
                  </p>
                  <div className={"geex-content__testimonial__single__author"}>
                    <h6 className={"geex-content__testimonial__single__author__title"}>
                      {"Beau Alexander"}
                    </h6>
                    <span className={"geex-content__testimonial__single__author__subtitle"}>
                      {"Merchandising Market Manager"}
                    </span>
                    <img src={"/assets/img/testimonial/3.svg"} alt={"image"} className={"geex-content__testimonial__single__author__img"} />
                  </div>
                </div>
              </div>
              <div className={"col-lg-4 col-sm-6 mb-40"}>
                <div className={"geex-content__testimonial__single"}>
                  <img src={"/assets/img/icon/quotes.svg"} alt={"image"} className={"geex-content__testimonial__single__quote"} />
                  <p className={"geex-content__testimonial__single__desc"}>
                    {"It’s like having a superpower! I’ve tried almost every alternative and competitor and found anything."}
                  </p>
                  <div className={"geex-content__testimonial__single__author"}>
                    <h6 className={"geex-content__testimonial__single__author__title"}>
                      {"Noah Presley"}
                    </h6>
                    <span className={"geex-content__testimonial__single__author__subtitle"}>
                      {"Merchandising Market Manager"}
                    </span>
                    <img src={"/assets/img/testimonial/2.svg"} alt={"image"} className={"geex-content__testimonial__single__author__img"} />
                  </div>
                </div>
              </div>
              <div className={"col-lg-4 col-sm-6 md-mb-40"}>
                <div className={"geex-content__testimonial__single"}>
                  <img src={"/assets/img/icon/quotes.svg"} alt={"image"} className={"geex-content__testimonial__single__quote"} />
                  <p className={"geex-content__testimonial__single__desc"}>
                    {"It’s like having a superpower! I’ve tried almost every alternative and competitor and found anything."}
                  </p>
                  <div className={"geex-content__testimonial__single__author"}>
                    <h6 className={"geex-content__testimonial__single__author__title"}>
                      {"Jack David"}
                    </h6>
                    <span className={"geex-content__testimonial__single__author__subtitle"}>
                      {"Merchandising Market Manager"}
                    </span>
                    <img src={"/assets/img/testimonial/2.svg"} alt={"image"} className={"geex-content__testimonial__single__author__img"} />
                  </div>
                </div>
              </div>
              <div className={"col-lg-4 col-sm-6 ssm-mb-40"}>
                <div className={"geex-content__testimonial__single"}>
                  <img src={"/assets/img/icon/quotes.svg"} alt={"image"} className={"geex-content__testimonial__single__quote"} />
                  <p className={"geex-content__testimonial__single__desc"}>
                    {"It’s like having a superpower! I’ve tried almost every alternative and competitor and found anything."}
                  </p>
                  <div className={"geex-content__testimonial__single__author"}>
                    <h6 className={"geex-content__testimonial__single__author__title"}>
                      {"David Hollis"}
                    </h6>
                    <span className={"geex-content__testimonial__single__author__subtitle"}>
                      {"Merchandising Market Manager"}
                    </span>
                    <img src={"/assets/img/testimonial/3.svg"} alt={"image"} className={"geex-content__testimonial__single__author__img"} />
                  </div>
                </div>
              </div>
              <div className={"col-lg-4 col-sm-6"}>
                <div className={"geex-content__testimonial__single"}>
                  <img src={"/assets/img/icon/quotes.svg"} alt={"image"} className={"geex-content__testimonial__single__quote"} />
                  <p className={"geex-content__testimonial__single__desc"}>
                    {"It’s like having a superpower! I’ve tried almost every alternative and competitor and found anything."}
                  </p>
                  <div className={"geex-content__testimonial__single__author"}>
                    <h6 className={"geex-content__testimonial__single__author__title"}>
                      {"Beau Alexander"}
                    </h6>
                    <span className={"geex-content__testimonial__single__author__subtitle"}>
                      {"Merchandising Market Manager"}
                    </span>
                    <img src={"/assets/img/testimonial/4.svg"} alt={"image"} className={"geex-content__testimonial__single__author__img"} />
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
