import Customizer from "@/components/Customizer";
import Header from "@/components/Header";
import HeaderActions from "@/components/HeaderActions";
import Sidebar from "@/components/Sidebar";
import GeexResources from "@/components/GeexResources";
export const metadata = { title: "Terms & Conditions - Geex Dashboard", icons: { icon: "/assets/img/favicon.svg" } };

export default function TermsPage() {
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
                {"Terms & Conditions"}
              </h2>
              <p className={"geex-content__header__subtitle"}>
                {"Form Elements is used to style and format the input field"}
              </p>
            </div>
            <HeaderActions />
          </div>
          <div className={"geex-content__section geex-content__terms"}>
            <div className={"geex-content__terms__wrapper"}>
              <h3 className={"geex-content__terms__title"}>
                {"Privacy Policy"}
              </h3>
              <p className={"geex-content__terms__desc"}>
                {"Your privacy is important to us. Any information submitted by the buyer for completing the transaction, delivering the product, informing about new product releases, and addressing any customer service issues are strictly confidential. We don’t share this information with anyone."}
              </p>
              <h3 className={"geex-content__terms__title"}>
                {"Payment"}
              </h3>
              <p className={"geex-content__terms__desc"}>
                {"To Purchase any of our products, you have the option of paying via PayPal or any major credit and debit cards. Extensions and Themes are licensed for one year at a time. After that you may renew your license to continue updates and support. We do not store your payment or credit card information for your security."}
              </p>
              <h3 className={"geex-content__terms__title"}>
                {"License Usage"}
              </h3>
              <p className={"geex-content__terms__desc"}>
                {"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}
              </p>
              <h3 className={"geex-content__terms__title"}>
                {"Product Updates"}
              </h3>
              <p className={"geex-content__terms__desc"}>
                {"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages"}
              </p>
              <h3 className={"geex-content__terms__title"}>
                {"Media"}
              </h3>
              <p className={"geex-content__terms__desc"}>
                {"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages"}
              </p>
              <h3 className={"geex-content__terms__title"}>
                {"Cookies"}
              </h3>
              <p className={"geex-content__terms__desc"}>
                {"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages"}
              </p>
              <h3 className={"geex-content__terms__title"}>
                {"Support"}
              </h3>
              <p className={"geex-content__terms__desc"}>
                {"Please, refer "}
                <a href={"#"}>
                  {"Support Policy"}
                </a>
                {" page for details."}
              </p>
              <p className={"geex-content__terms__desc"}>
                {"Last update: Dec 01, 2024"}
              </p>
            </div>
          </div>
        </div>
      </main>




    </>
  );
}
