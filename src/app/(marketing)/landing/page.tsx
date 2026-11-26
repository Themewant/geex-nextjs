import Link from "next/link";
import GeexResources from "@/components/GeexResources";
export const metadata = { title: "Geex - Admin Dashboard Next.js Template", icons: { icon: "/landing-assets/images/fav.svg" } };

export default function LandingPage() {
  return (
    <>
      <GeexResources styles={["/assets/vendor/css/swiper.min.css","/assets/vendor/css/bootstrap/bootstrap.css","/landing-assets/css/plugins/fontawesome-6.css","/landing-assets/scss/style.css"]} scripts={["/assets/vendor/js/jquery/jquery-3.5.1.min.js","/assets/vendor/js/bootstrap/bootstrap.min.js","/assets/vendor/js/swiper.min.js","/landing-assets/js/plugins/gsap.min.js","/landing-assets/js/plugins/scrolltigger.js","/landing-assets/js/vendor/split-text.js","/landing-assets/js/vendor/split-type.js","/landing-assets/js/main.js"]} />
      <header className={"header-style-one header--sticky"}>
        <div className={"container"}>
          <div className={"row"}>
            <div className={"col-lg-12"}>
              <div className={"header-style-one-wrapper"}>
                <div className={"logo-area"}>
                  <Link href={"/landing"} className={"logo"}>
                    <img src={"/landing-assets/images/logo-1.svg"} alt={"logo"} />
                  </Link>
                </div>
                <nav className={"main-nav-area"}>
                  <ul className={"list-unstyled geex-desktop-menu"}>
                    <li className={"menu-item"}>
                      <a href={"#demos"} className={"geex-dropdown-main-element"}>
                        {"Start Tour"}
                      </a>
                    </li>
                    <li className={"menu-item"}>
                      <a href={"#demos"} className={"geex-dropdown-main-element"}>
                        {"Demos"}
                      </a>
                    </li>
                    <li className={"menu-item"}>
                      <a href={"#features"} className={"geex-dropdown-main-element"}>
                        {"Features"}
                      </a>
                    </li>
                  </ul>
                </nav>
                <div className={"button-area-start"}>
                  <a href={"https://themeforest.net/item/geex-bootstrap5-admin-dashboard-html-template/50415081?"} target={"_blank"} className={"rts-btn btn-primary"} rel={"noopener noreferrer"}>
                    <i className={"fa-regular fa-cart-shopping"} />
                    {" Purchase"}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className={"rts-banner-area rts-section-gap"}>
        <div className={"container"}>
          <div className={"row align-items-center"}>
            <div className={"col-lg-12 order-xl-1 order-lg-1 order-md-6 order-sm-2 order-2"}>
              <div className={"banner-one-content text-center"}>
                <h1 className={"title split-collab"}>
                  {"Geex "}
                  <span>
                    {" Admin "}
                    <br />
                    {" Dashboard"}
                  </span>
                  {" HTML Template"}
                </h1>
              </div>
              <ul className={"banner-feature-list"}>
                <li className={"item"}>
                  <div className={"icon"}>
                    <img src={"/landing-assets/images/banner/banner-icon-01.svg"} alt={""} />
                  </div>
                  <p className={"desc"}>
                    {"Unique Layout "}
                    <br />
                    {" design"}
                  </p>
                </li>
                <li className={"item"}>
                  <div className={"icon"}>
                    <img src={"/landing-assets/images/banner/banner-icon-02.svg"} alt={""} />
                  </div>
                  <p className={"desc"}>
                    {"Beautiful all "}
                    <br />
                    {" Device Responsive"}
                  </p>
                </li>
                <li className={"item"}>
                  <div className={"icon"}>
                    <img src={"/landing-assets/images/banner/banner-icon-03.svg"} alt={""} />
                  </div>
                  <p className={"desc"}>
                    {"24/7 Hours "}
                    <br />
                    {" Dedicated Support"}
                  </p>
                </li>
              </ul>
              <div className={"banner-button-area"}>
                <a href={"#demos"} className={"rts-btn btn-primary"}>
                  {" View Demos"}
                </a>
                <a href={"https://themeforest.net/item/geex-bootstrap5-admin-dashboard-html-template/50415081?"} className={"rts-btn btn-secondary"}>
                  {"Buy Now"}
                </a>
              </div>
              <div className={"banner-img-slider-area"}>
                <div className={"banner-img"}>
                  <img src={"/landing-assets/images/banner/laptop-10.webp"} alt={""} />
                </div>
                <div className={"banner-slider"}>
                  <div className={"swiper mySwiper-bannerSlide"}>
                    <div className={"swiper-wrapper"}>
                      <div className={"swiper-slide"}>
                        <div className={"img-area"}>
                          <img src={"/landing-assets/images/demos/01.webp"} alt={""} />
                        </div>
                      </div>
                      <div className={"swiper-slide"}>
                        <div className={"img-area"}>
                          <img src={"/landing-assets/images/demos/02.webp"} alt={""} />
                        </div>
                      </div>
                      <div className={"swiper-slide"}>
                        <div className={"img-area"}>
                          <img src={"/landing-assets/images/demos/01.webp"} alt={""} />
                        </div>
                      </div>
                      <div className={"swiper-slide"}>
                        <div className={"img-area"}>
                          <img src={"/landing-assets/images/demos/03.webp"} alt={""} />
                        </div>
                      </div>
                      <div className={"swiper-slide"}>
                        <div className={"img-area"}>
                          <img src={"/landing-assets/images/demos/04.webp"} alt={""} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={"banner-shape-area"}>
          <img className={"one"} src={"/landing-assets/images/banner/shape/01.svg"} alt={"svg-shape"} />
          <img className={"two"} src={"/landing-assets/images/banner/shape/02.svg"} alt={"svg-shape"} />
          <img className={"three"} src={"/landing-assets/images/banner/shape/03.svg"} alt={"svg-shape"} />
        </div>
      </div>
      <div id={"demos"} className={"rts-demos-area rts-section-gap2"}>
        <div className={"container"}>
          <div className={"row align-items-center"}>
            <div className={"col-lg-12 order-xl-1 order-lg-1 order-md-6 order-sm-2 order-2"}>
              <div className={"section-title-area text-center"}>
                <p className={"sub-title"}>
                  {"Unique Demos"}
                </p>
                <h2 className={"heading-title split-collab"}>
                  {"Beautiful Prebuilt Demos"}
                </h2>
                <p className={"desc split-collab"}>
                  {"Discover a world of elegance with our collection of beautiful, "}
                  <br />
                  {"hand-crafted designs ready to kickstart your journey"}
                </p>
              </div>
            </div>
          </div>
          <div className={"section-inner"}>
            <div className={"row justify-content-center align-items-center"}>
              <div className={"col-lg-6 col-md-6 col-sm-12"}>
                <div className={"demo-wrapper wow fadeIn"} data-wow-duration={"1.2s"} data-wow-delay={".5s"}>
                  <div className={"image-area"}>
                    <Link href={"/"} target={"_blank"} rel={"noopener noreferrer"}>
                      <img src={"/landing-assets/images/demos/01.webp"} alt={""} />
                    </Link>
                  </div>
                  <h3 className={"content"}>
                    <Link href={"/"} target={"_blank"} rel={"noopener noreferrer"}>
                      {"Default Demo"}
                    </Link>
                  </h3>
                </div>
              </div>
              <div className={"col-lg-6 col-md-6 col-sm-12"}>
                <div className={"demo-wrapper wow fadeIn"} data-wow-duration={"1.2s"} data-wow-delay={".5s"}>
                  <div className={"image-area"}>
                    <Link href={"/index-2"} target={"_blank"} rel={"noopener noreferrer"}>
                      <img src={"/landing-assets/images/demos/02.webp"} alt={""} />
                    </Link>
                  </div>
                  <h3 className={"content"}>
                    <Link href={"/index-2"} target={"_blank"} rel={"noopener noreferrer"}>
                      {"Banking Demo"}
                    </Link>
                  </h3>
                </div>
              </div>
              <div className={"col-lg-6 col-md-6 col-sm-12"}>
                <div className={"demo-wrapper wow fadeIn"} data-wow-duration={"1.2s"} data-wow-delay={".5s"}>
                  <div className={"image-area"}>
                    <Link href={"/index-3"} target={"_blank"} rel={"noopener noreferrer"}>
                      <img src={"/landing-assets/images/demos/03.webp"} alt={""} />
                    </Link>
                  </div>
                  <h3 className={"content"}>
                    <Link href={"/index-3"} target={"_blank"} rel={"noopener noreferrer"}>
                      {"Crypto Demo"}
                    </Link>
                  </h3>
                </div>
              </div>
              <div className={"col-lg-6 col-md-6 col-sm-12"}>
                <div className={"demo-wrapper wow fadeIn"} data-wow-duration={"1.2s"} data-wow-delay={".5s"}>
                  <div className={"image-area"}>
                    <Link href={"/index-4"} target={"_blank"} rel={"noopener noreferrer"}>
                      <img src={"/landing-assets/images/demos/04.webp"} alt={""} />
                    </Link>
                  </div>
                  <h3 className={"content"}>
                    <Link href={"/index-4"} target={"_blank"} rel={"noopener noreferrer"}>
                      {"Invoicing Demo"}
                    </Link>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={"rts-dark-light-area rts-section-gap2"}>
        <div className={"container"}>
          <div className={"row align-items-center"}>
            <div className={"col-lg-12 order-xl-1 order-lg-1 order-md-6 order-sm-2 order-2"}>
              <div className={"section-title-area text-center"}>
                <h2 className={"heading-title split-collab"}>
                  {"Dark & Light Modes"}
                </h2>
                <p className={"desc split-collab"}>
                  {"All the Pages supports the dark mode and your can switch "}
                  <br />
                  {" between dark & Light modes just with few steps in seconds!"}
                </p>
                <div className={"dark-light-image"}>
                  <img src={"/landing-assets/images/dark-light.png"} alt={""} />
                </div>
              </div>
            </div>
          </div>
          <div className={"section-inner"}>
            <div className={"row justify-content-center align-items-center"}>
              <div className={"col-lg-12"}>
                <div className={"image-area wow fadeIn"} data-wow-duration={"1.2s"} data-wow-delay={".5s"}>
                  <img src={"/landing-assets/images/img-light-dark.webp"} alt={""} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id={"app"} className={"rts-demos-area rts-section-gap app"}>
        <div className={"container"}>
          <div className={"row align-items-center"}>
            <div className={"col-lg-12 order-xl-1 order-lg-1 order-md-6 order-sm-2 order-2"}>
              <div className={"section-title-area text-center"}>
                <h2 className={"heading-title split-collab"}>
                  {"Prebuilt Apps"}
                </h2>
                <p className={"desc split-collab"}>
                  {"Discover a world of elegance with our collection of beautiful, "}
                  <br />
                  {"hand-crafted designs ready to kickstart your journey"}
                </p>
              </div>
            </div>
          </div>
          <div className={"section-inner"}>
            <div className={"row justify-content-center align-items-center"}>
              <div className={"col-lg-4 col-md-6 col-sm-12"}>
                <div className={"demo-wrapper wow fadeIn"} data-wow-duration={"1.2s"} data-wow-delay={".5s"}>
                  <div className={"image-area"}>
                    <Link href={"/todo"} target={"_blank"} rel={"noopener noreferrer"}>
                      <img src={"/landing-assets/images/inner/app-01.webp"} alt={""} />
                    </Link>
                  </div>
                  <h3 className={"content"}>
                    <Link href={"/todo"} target={"_blank"} rel={"noopener noreferrer"}>
                      {"Todo"}
                    </Link>
                  </h3>
                </div>
              </div>
              <div className={"col-lg-4 col-md-6 col-sm-12"}>
                <div className={"demo-wrapper wow fadeIn"} data-wow-duration={"1.2s"} data-wow-delay={".5s"}>
                  <div className={"image-area"}>
                    <Link href={"/chat"} target={"_blank"} rel={"noopener noreferrer"}>
                      <img src={"/landing-assets/images/inner/app-02.webp"} alt={""} />
                    </Link>
                  </div>
                  <h3 className={"content"}>
                    <Link href={"/chat"} target={"_blank"} rel={"noopener noreferrer"}>
                      {"Chat"}
                    </Link>
                  </h3>
                </div>
              </div>
              <div className={"col-lg-4 col-md-6 col-sm-12"}>
                <div className={"demo-wrapper wow fadeIn"} data-wow-duration={"1.2s"} data-wow-delay={".5s"}>
                  <div className={"image-area"}>
                    <Link href={"/calendar"} target={"_blank"} rel={"noopener noreferrer"}>
                      <img src={"/landing-assets/images/inner/app-03.webp"} alt={""} />
                    </Link>
                  </div>
                  <h3 className={"content"}>
                    <Link href={"/calendar"} target={"_blank"} rel={"noopener noreferrer"}>
                      {"Calender"}
                    </Link>
                  </h3>
                </div>
              </div>
              <div className={"col-lg-4 col-md-6 col-sm-12"}>
                <div className={"demo-wrapper wow fadeIn"} data-wow-duration={"1.2s"} data-wow-delay={".5s"}>
                  <div className={"image-area"}>
                    <Link href={"/file-manager"} target={"_blank"} rel={"noopener noreferrer"}>
                      <img src={"/landing-assets/images/inner/app-04.webp"} alt={""} />
                    </Link>
                  </div>
                  <h3 className={"content"}>
                    <Link href={"/file-manager"} target={"_blank"} rel={"noopener noreferrer"}>
                      {"File Manager"}
                    </Link>
                  </h3>
                </div>
              </div>
              <div className={"col-lg-4 col-md-6 col-sm-12"}>
                <div className={"demo-wrapper wow fadeIn"} data-wow-duration={"1.2s"} data-wow-delay={".5s"}>
                  <div className={"image-area"}>
                    <Link href={"/contact"} target={"_blank"} rel={"noopener noreferrer"}>
                      <img src={"/landing-assets/images/inner/app-05.webp"} alt={""} />
                    </Link>
                  </div>
                  <h3 className={"content"}>
                    <Link href={"/contact"} target={"_blank"} rel={"noopener noreferrer"}>
                      {"Contact"}
                    </Link>
                  </h3>
                </div>
              </div>
              <div className={"col-lg-4 col-md-6 col-sm-12"}>
                <div className={"demo-wrapper wow fadeIn"} data-wow-duration={"1.2s"} data-wow-delay={".5s"}>
                  <div className={"image-area"}>
                    <Link href={"/kanban"} target={"_blank"} rel={"noopener noreferrer"}>
                      <img src={"/landing-assets/images/inner/app-06.webp"} alt={""} />
                    </Link>
                  </div>
                  <h3 className={"content"}>
                    <Link href={"/kanban"} target={"_blank"} rel={"noopener noreferrer"}>
                      {"Kanban"}
                    </Link>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id={"inner"} className={"rts-demos-area rts-section-gap innerpages"}>
        <div className={"container"}>
          <div className={"row align-items-center"}>
            <div className={"col-lg-12 order-xl-1 order-lg-1 order-md-6 order-sm-2 order-2"}>
              <div className={"section-title-area text-center"}>
                <h2 className={"heading-title split-collab"}>
                  {"Beautiful Inner Pages"}
                </h2>
                <p className={"desc split-collab"}>
                  {"Discover a world of elegance with our collection of beautiful, "}
                  <br />
                  {"hand-crafted designs ready to kickstart your journey"}
                </p>
              </div>
            </div>
          </div>
          <div className={"section-inner"}>
            <div className={"row justify-content-center align-items-center"}>
              <div className={"col-lg-4 col-md-6 col-sm-12"}>
                <div className={"demo-wrapper wow fadeIn"} data-wow-duration={"1.2s"} data-wow-delay={".5s"}>
                  <div className={"image-area"}>
                    <Link href={"/blog"} target={"_blank"} rel={"noopener noreferrer"}>
                      <img src={"/landing-assets/images/inner/01.webp"} alt={""} />
                    </Link>
                  </div>
                  <h3 className={"content"}>
                    <Link href={"/blog"} target={"_blank"} rel={"noopener noreferrer"}>
                      {"Blog"}
                    </Link>
                  </h3>
                </div>
              </div>
              <div className={"col-lg-4 col-md-6 col-sm-12"}>
                <div className={"demo-wrapper wow fadeIn"} data-wow-duration={"1.2s"} data-wow-delay={".5s"}>
                  <div className={"image-area"}>
                    <Link href={"/faq"} target={"_blank"} rel={"noopener noreferrer"}>
                      <img src={"/landing-assets/images/inner/02.webp"} alt={""} />
                    </Link>
                  </div>
                  <h3 className={"content"}>
                    <Link href={"/faq"} target={"_blank"} rel={"noopener noreferrer"}>
                      {"FAQ"}
                    </Link>
                  </h3>
                </div>
              </div>
              <div className={"col-lg-4 col-md-6 col-sm-12"}>
                <div className={"demo-wrapper wow fadeIn"} data-wow-duration={"1.2s"} data-wow-delay={".5s"}>
                  <div className={"image-area"}>
                    <Link href={"/pricing"} target={"_blank"} rel={"noopener noreferrer"}>
                      <img src={"/landing-assets/images/inner/03.webp"} alt={""} />
                    </Link>
                  </div>
                  <h3 className={"content"}>
                    <Link href={"/pricing"} target={"_blank"} rel={"noopener noreferrer"}>
                      {"Pricing"}
                    </Link>
                  </h3>
                </div>
              </div>
              <div className={"col-lg-4 col-md-6 col-sm-12"}>
                <div className={"demo-wrapper wow fadeIn"} data-wow-duration={"1.2s"} data-wow-delay={".5s"}>
                  <div className={"image-area"}>
                    <Link href={"/testimonial"} target={"_blank"} rel={"noopener noreferrer"}>
                      <img src={"/landing-assets/images/inner/04.webp"} alt={""} />
                    </Link>
                  </div>
                  <h3 className={"content"}>
                    <Link href={"/testimonial"} target={"_blank"} rel={"noopener noreferrer"}>
                      {"Testimonial"}
                    </Link>
                  </h3>
                </div>
              </div>
              <div className={"col-lg-4 col-md-6 col-sm-12"}>
                <div className={"demo-wrapper wow fadeIn"} data-wow-duration={"1.2s"} data-wow-delay={".5s"}>
                  <div className={"image-area"}>
                    <Link href={"/terms"} target={"_blank"} rel={"noopener noreferrer"}>
                      <img src={"/landing-assets/images/inner/05.webp"} alt={""} />
                    </Link>
                  </div>
                  <h3 className={"content"}>
                    <Link href={"/terms"} target={"_blank"} rel={"noopener noreferrer"}>
                      {"Terms & Conditions"}
                    </Link>
                  </h3>
                </div>
              </div>
              <div className={"col-lg-4 col-md-6 col-sm-12"}>
                <div className={"demo-wrapper wow fadeIn"} data-wow-duration={"1.2s"} data-wow-delay={".5s"}>
                  <div className={"image-area"}>
                    <Link href={"/signin"} target={"_blank"} rel={"noopener noreferrer"}>
                      <img src={"/landing-assets/images/inner/06.webp"} alt={""} />
                    </Link>
                  </div>
                  <h3 className={"content"}>
                    <Link href={"/signin"} target={"_blank"} rel={"noopener noreferrer"}>
                      {"Sign In"}
                    </Link>
                  </h3>
                </div>
              </div>
              <div className={"col-lg-4 col-md-6 col-sm-12"}>
                <div className={"demo-wrapper wow fadeIn"} data-wow-duration={"1.2s"} data-wow-delay={".5s"}>
                  <div className={"image-area"}>
                    <Link href={"/error"} target={"_blank"} rel={"noopener noreferrer"}>
                      <img src={"/landing-assets/images/inner/07.webp"} alt={""} />
                    </Link>
                  </div>
                  <h3 className={"content"}>
                    <Link href={"/error"} target={"_blank"} rel={"noopener noreferrer"}>
                      {"Error"}
                    </Link>
                  </h3>
                </div>
              </div>
              <div className={"col-lg-4 col-md-6 col-sm-12"}>
                <div className={"demo-wrapper wow fadeIn"} data-wow-duration={"1.2s"} data-wow-delay={".5s"}>
                  <div className={"image-area"}>
                    <Link href={"/maintenance"} target={"_blank"} rel={"noopener noreferrer"}>
                      <img src={"/landing-assets/images/inner/08.webp"} alt={""} />
                    </Link>
                  </div>
                  <h3 className={"content"}>
                    <Link href={"/maintenance"} target={"_blank"} rel={"noopener noreferrer"}>
                      {"Maintenance"}
                    </Link>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id={"features"} className={"rts-features"}>
        <div className={"container"}>
          <div className={"row align-items-center"}>
            <div className={"col-lg-12 order-xl-1 order-lg-1 order-md-6 order-sm-2 order-2"}>
              <div className={"section-title-area text-center"}>
                <h2 className={"heading-title split-collab"}>
                  {"Features"}
                </h2>
                <p className={"desc split-collab"}>
                  {"Discover a world of elegance with our collection of "}
                  <br />
                  {" beautiful features"}
                </p>
              </div>
            </div>
          </div>
          <ul className={"all-features"}>
            <li className={"wow fadeInUp"} data-wow-duration={"1s"} data-wow-delay={".3s"} style={{"visibility":"visible","animationDuration":"1s","animationDelay":"0.3s","animationName":"fadeInUp"}}>
              <div>
                <img src={"/landing-assets/images/icon/19.png"} alt={"image"} loading={"lazy"} />
                <span>
                  {"Bootstrap 5 "}
                </span>
              </div>
            </li>
            <li className={"wow fadeInUp"} data-wow-duration={"1s"} data-wow-delay={".3s"} style={{"visibility":"visible","animationDuration":"1s","animationDelay":"0.3s","animationName":"fadeInUp"}}>
              <div>
                <img src={"/landing-assets/images/icon/18.png"} alt={"image"} loading={"lazy"} />
                <span>
                  {"CSS "}
                </span>
              </div>
            </li>
            <li className={"wow fadeInUp"} data-wow-duration={"1s"} data-wow-delay={".3s"} style={{"visibility":"visible","animationDuration":"1s","animationDelay":"0.3s","animationName":"fadeInUp"}}>
              <div>
                <img src={"/landing-assets/images/icon/saas.svg"} alt={"image"} loading={"lazy"} />
                <span>
                  {"Built With SASS "}
                </span>
              </div>
            </li>
            <li className={"wow fadeInUp"} data-wow-duration={"1s"} data-wow-delay={".3s"} style={{"visibility":"visible","animationDuration":"1s","animationDelay":"0.3s","animationName":"fadeInUp"}}>
              <div>
                <img src={"/landing-assets/images/icon/gulp.svg"} alt={"image"} loading={"lazy"} />
                <span>
                  {"Gulp "}
                </span>
              </div>
            </li>
            <li className={"wow fadeInUp"} data-wow-duration={"1s"} data-wow-delay={".3s"} style={{"visibility":"visible","animationDuration":"1s","animationDelay":"0.3s","animationName":"fadeInUp"}}>
              <div>
                <img src={"/landing-assets/images/icon/npm.svg"} alt={"image"} loading={"lazy"} />
                <span>
                  {"NPM "}
                </span>
              </div>
            </li>
            <li className={"wow fadeInUp"} data-wow-duration={"1s"} data-wow-delay={".3s"} style={{"visibility":"visible","animationDuration":"1s","animationDelay":"0.3s","animationName":"fadeInUp"}}>
              <div>
                <img src={"/landing-assets/images/icon/webpack.svg"} alt={"image"} loading={"lazy"} />
                <span>
                  {"Webpack "}
                </span>
              </div>
            </li>
            <li className={"wow fadeInUp"} data-wow-duration={"1s"} data-wow-delay={".3s"} style={{"visibility":"visible","animationDuration":"1s","animationDelay":"0.3s","animationName":"fadeInUp"}}>
              <div>
                <img src={"/landing-assets/images/icon/yarn.svg"} alt={"image"} loading={"lazy"} />
                <span>
                  {"Yarn "}
                </span>
              </div>
            </li>
            <li className={"wow fadeInUp"} data-wow-duration={"1s"} data-wow-delay={".3s"} style={{"visibility":"visible","animationDuration":"1s","animationDelay":"0.3s","animationName":"fadeInUp"}}>
              <div>
                <img src={"/landing-assets/images/icon/7.png"} alt={"image"} loading={"lazy"} />
                <span>
                  {"Clean Coded "}
                </span>
              </div>
            </li>
          </ul>
          <div className={"feature-section-bottom2"}>
            <div className={"feature-area"}>
              <div className={"row"}>
                <div className={"col-lg-4 col-md-6"}>
                  <div className={"features-wrapper"}>
                    <div className={"icon"}>
                      <img src={"/landing-assets/images/icon/13.svg"} alt={""} />
                    </div>
                    <div className={"content"}>
                      <h4 className={"title"}>
                        {"Expansive Knowledge"}
                      </h4>
                      <p className={"desc"}>
                        {"You can check any time our powerful documentation."}
                      </p>
                    </div>
                  </div>
                </div>
                <div className={"col-lg-4 col-md-6"}>
                  <div className={"features-wrapper"}>
                    <div className={"icon"}>
                      <img src={"/landing-assets/images/icon/14.svg"} alt={""} />
                    </div>
                    <div className={"content"}>
                      <h4 className={"title"}>
                        {"Proficient Support"}
                      </h4>
                      <p className={"desc"}>
                        {"Enjoy free lifetime reliable updates and six months free support."}
                      </p>
                    </div>
                  </div>
                </div>
                <div className={"col-lg-4 col-md-6"}>
                  <div className={"features-wrapper"}>
                    <div className={"icon"}>
                      <img src={"/landing-assets/images/icon/15.svg"} alt={""} />
                    </div>
                    <div className={"content"}>
                      <h4 className={"title"}>
                        {"Regular Updates"}
                      </h4>
                      <p className={"desc"}>
                        {"Enjoy free lifetime reliable updates going with your purchase."}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={"rts-footer-area"}>
        <div className={"container"}>
          <div className={"row align-items-center"}>
            <div className={"col-lg-12 order-xl-1 order-lg-1 order-md-6 order-sm-2 order-2"}>
              <div className={"section-title-area text-center"}>
                <h2 className={"heading-title split-collab"}>
                  {"Create an amazing Business "}
                  <br />
                  {" with geex today!"}
                </h2>
                <div className={"title-btn-area"}>
                  <a href={"https://themeforest.net/item/geex-bootstrap5-admin-dashboard-html-template/50415081?"} target={"_blank"} className={"rts-btn btn-primary"} rel={"noopener noreferrer"}>
                    <i className={"fa-regular fa-cart-shopping"} />
                    {" Purchase"}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={"footer-shape-image"}>
          <img src={"/landing-assets/images/footer/circle.svg"} alt={""} />
        </div>
      </div>
      <div className={"loader-wrapper"}>
        <div className={"loader"} />
        <div className={"loader-section section-left"} />
        <div className={"loader-section section-right"} />
      </div>
      <div className={"progress-wrap"}>
        <svg className={"progress-circle svg-content"} width={"100%"} height={"100%"} viewBox={"-1 -1 102 102"}>
          <path d={"M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"} style={{"transition":"stroke-dashoffset 10ms linear 0s","strokeDasharray":"307.919, 307.919","strokeDashoffset":"307.919"}} />
        </svg>
      </div>








    </>
  );
}
