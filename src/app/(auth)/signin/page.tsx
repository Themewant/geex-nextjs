import Link from "next/link";
import DemoAuthForm from "@/components/DemoAuthForm";
import GeexResources from "@/components/GeexResources";
export const metadata = { title: "SignIn - Geex Dashboard", icons: { icon: "/assets/img/favicon.svg" } };

export default function SigninPage() {
  return (
    <>
      <GeexResources styles={["/assets/vendor/css/bootstrap/bootstrap.css","/assets/vendor/css/swiper.min.css","/assets/css/style.css","https://cdn.jsdelivr.net/npm/@iconscout/unicons@4.0.8/css/line.min.css"]} scripts={["/assets/vendor/js/jquery/jquery-3.5.1.min.js","/assets/vendor/js/jquery/jquery-ui.js","/assets/vendor/js/bootstrap/bootstrap.min.js","/assets/js/main.js"]} />
      <main className={"geex-content"}>
        <div className={"geex-content__authentication"}>
          <div className={"geex-content__authentication__content"}>
            <div className={"geex-content__authentication__content__wrapper"}>
              <div className={"geex-content__authentication__content__logo"}>
                <Link href={"/"}>
                  <img className={"logo-lite"} src={"/assets/img/logo-dark.svg"} alt={"logo"} />
                  <img className={"logo-dark"} src={"/assets/img/logo-lite.svg"} alt={"logo"} />
                </Link>
              </div>
              <DemoAuthForm id={"signInForm"} className={"geex-content__authentication__form"} preview={"signin"}>
                <h2 className={"geex-content__authentication__title"}>
                  {"Sign In to Your Account 👋"}
                </h2>
                <p className="geex-content__authentication__desc">Account demo. Use sample details to try the form.</p>
                <div className={"geex-content__authentication__form-group"}>
                  <label htmlFor={"emailSignIn"}>
                    {"Your Email"}
                  </label>
                  <input type={"email"} id={"emailSignIn"} name={"emailSignIn"} placeholder={"Enter Your Email"} required />
                  <i className={"uil-envelope"} />
                </div>
                <div className={"geex-content__authentication__form-group"}>
                  <div className={"geex-content__authentication__label-wrapper"}>
                    <label htmlFor={"loginPassword"}>
                      {"Your Password"}
                    </label>
                    <Link href={"/forgot-password"}>
                      {"Forgot Password?"}
                    </Link>
                  </div>
                  <input type={"password"} id={"loginPassword"} name={"loginPassword"} placeholder={"Password"} required />
                  <i className={"uil-eye toggle-password-type"} />
                </div>
                <div className={"geex-content__authentication__form-group custom-checkbox"}>
                  <input type={"checkbox"} className={"geex-content__authentication__checkbox-input"} id={"rememberMe"} />
                  <label className={"geex-content__authentication__checkbox-label"} htmlFor={"rememberMe"}>
                    {"Remember Me"}
                  </label>
                </div>
                <button type={"submit"} className={"geex-content__authentication__form-submit"}>
                  {"Sign In"}
                </button>
                <div className={"geex-content__authentication__form-footer"}>
                  {" Doesn't have any account? "}
                  <Link href={"/signup"}>
                    {"Sign Up"}
                  </Link>
                </div>
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
