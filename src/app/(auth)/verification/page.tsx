import Link from "next/link";
import DemoAuthForm from "@/components/DemoAuthForm";
import GeexResources from "@/components/GeexResources";
export const metadata = { title: "Two-Step Verification", icons: { icon: "/assets/img/favicon.svg" } };

export default function VerificationPage() {
  return (
    <>
      <GeexResources styles={["/assets/vendor/css/bootstrap/bootstrap.css","/assets/vendor/css/swiper.min.css","/assets/css/style.css","https://cdn.jsdelivr.net/npm/@iconscout/unicons@4.0.8/css/line.min.css"]} scripts={["/assets/vendor/js/jquery/jquery-3.5.1.min.js","/assets/vendor/js/jquery/jquery-ui.js","/assets/vendor/js/bootstrap/bootstrap.min.js","/assets/js/main.js"]} />
      <main className={"geex-content"}>
        <div className={"geex-content__authentication geex-content__authentication--forgot-password"}>
          <div className={"geex-content__authentication__content"}>
            <div className={"geex-content__authentication__content__wrapper"}>
              <div className={"geex-content__authentication__content__logo"}>
                <Link href={"/"}>
                  <img src={"/assets/img/logo.svg"} alt={""} />
                </Link>
              </div>
              <DemoAuthForm id={"signInForm"} className={"geex-content__authentication__form"} preview={"verification"}>
                <h2 className={"geex-content__authentication__title"}>
                  {"Two Step Verification 👋"}
                </h2>
                <p className="geex-content__authentication__desc">Enter six sample digits to preview verification.</p>
                <div className={"geex-content__authentication__form-group"}>
                  <p>Six-digit security code</p>
                  <div className={"geex-content__authentication__form-group__code"}>
                    <input type={"text"} id={"verificationCode1"} name={"verificationCode1"} aria-label="Digit 1" inputMode="numeric" pattern="[0-9]" maxLength={1} required />
                    <input type={"text"} id={"verificationCode2"} name={"verificationCode2"} aria-label="Digit 2" inputMode="numeric" pattern="[0-9]" maxLength={1} required />
                    <input type={"text"} id={"verificationCode3"} name={"verificationCode3"} aria-label="Digit 3" inputMode="numeric" pattern="[0-9]" maxLength={1} required />
                    <input type={"text"} id={"verificationCode4"} name={"verificationCode4"} aria-label="Digit 4" inputMode="numeric" pattern="[0-9]" maxLength={1} required />
                    <input type={"text"} id={"verificationCode5"} name={"verificationCode5"} aria-label="Digit 5" inputMode="numeric" pattern="[0-9]" maxLength={1} required />
                    <input type={"text"} id={"verificationCode6"} name={"verificationCode6"} aria-label="Digit 6" inputMode="numeric" pattern="[0-9]" maxLength={1} required />
                  </div>
                </div>
                <button type={"submit"} className={"geex-content__authentication__form-submit"}>
                  {"Verify My Account"}
                </button>
              </DemoAuthForm>
            </div>
          </div>
          <div className={"geex-content__authentication__img"}>
            <img src={"/assets/img/authentication.svg"} alt={""} />
          </div>
        </div>
      </main>




    </>
  );
}
