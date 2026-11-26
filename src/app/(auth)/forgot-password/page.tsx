import Link from "next/link";
import DemoAuthForm from "@/components/DemoAuthForm";
import GeexResources from "@/components/GeexResources";
export const metadata = { title: "Forgot Password - Geex Dashboard", icons: { icon: "/assets/img/favicon.svg" } };

export default function ForgotPasswordPage() {
  return (
    <>
      <GeexResources styles={["/assets/vendor/css/bootstrap/bootstrap.css","/assets/vendor/css/swiper.min.css","/assets/css/style.css","https://cdn.jsdelivr.net/npm/@iconscout/unicons@4.0.8/css/line.min.css"]} scripts={["/assets/vendor/js/jquery/jquery-3.5.1.min.js","/assets/vendor/js/jquery/jquery-ui.js","/assets/vendor/js/bootstrap/bootstrap.min.js","/assets/js/main.js"]} />
      <main className={"geex-content"}>
        <div className={"geex-content__authentication geex-content__authentication--forgot-password"}>
          <div className={"geex-content__authentication__content"}>
            <div className={"geex-content__authentication__content__wrapper"}>
              <div className={"geex-content__authentication__content__logo"}>
                <Link href={"/"}>
                  <img className={"logo-lite"} src={"/assets/img/logo-dark.svg"} alt={"logo"} />
                  <img className={"logo-dark"} src={"/assets/img/logo-lite.svg"} alt={"logo"} />
                </Link>
              </div>
              <DemoAuthForm id={"signInForm"} className={"geex-content__authentication__form"} preview={"forgot-password"}>
                <h2 className={"geex-content__authentication__title"}>
                  {"Forgot your password? 👋"}
                </h2>
                <p className={"geex-content__authentication__desc"}>
                  {"Please enter the email address associated with your account and We will email you a link to reset your password."}
                </p>
                <div className={"geex-content__authentication__form-group"}>
                  <label htmlFor={"emailSignIn"}>
                    {"Email Address"}
                  </label>
                  <input type={"email"} id={"emailSignIn"} name={"emailSignIn"} placeholder={"Enter Your Email"} required />
                  <i className={"uil-envelope"} />
                </div>
                <button type={"submit"} className={"geex-content__authentication__form-submit"}>
                  {"Forget Password"}
                </button>
                <Link href={"/signin"} className={"geex-content__authentication__form-submit return-btn"}>
                  {"Back to Login"}
                </Link>
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
