import Customizer from "@/components/Customizer";
import Header from "@/components/Header";
import HeaderActions from "@/components/HeaderActions";
import Sidebar from "@/components/Sidebar";
import GeexResources from "@/components/GeexResources";
export const metadata = { title: "Typography - Geex Dashboard", icons: { icon: "/assets/img/favicon.svg" } };

export default function TypographyPage() {
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
                {"Typography"}
              </h2>
              <p className={"geex-content__header__subtitle"}>
                {"Form Elements is used to style and format the input field"}
              </p>
            </div>
            <HeaderActions />
          </div>
          <div className={"geex-content__section geex-content__typography"}>
            <div className={"geex-content__typography__wrapper"}>
              <div className={"geex-content__typography__wrapper__item d-flex justify-content-between gap-30"}>
                <div className={"geex-content__typography__single d-flex flex-column gap-20"}>
                  <h1 className={"geex-display-1"}>
                    {"Display 1"}
                  </h1>
                  <h1 className={"geex-display-2"}>
                    {"Display 2"}
                  </h1>
                  <h1 className={"geex-display-3"}>
                    {"Display 3"}
                  </h1>
                  <h1 className={"geex-display-4"}>
                    {"Display 4"}
                  </h1>
                </div>
                <div className={"geex-content__typography__single d-flex flex-column gap-20"}>
                  <h1>
                    {"H1 Heading"}
                  </h1>
                  <h2>
                    {"H2 Heading"}
                  </h2>
                  <h3>
                    {"H3 Heading"}
                  </h3>
                  <h4>
                    {"H4 Heading"}
                  </h4>
                  <h5>
                    {"H5 Heading"}
                  </h5>
                  <h6>
                    {"H6 Heading"}
                  </h6>
                </div>
                <div className={"geex-content__typography__single d-flex flex-column gap-20"}>
                  <p>
                    {"Paragraph Lead"}
                  </p>
                  <p className={"font-sm"}>
                    {"Paragraph"}
                  </p>
                  <p className={"font-sm semi-bold"}>
                    {"Paragraph Semi Bold"}
                  </p>
                  <p className={"font-sm bold"}>
                    {"Paragraph Bold"}
                  </p>
                  <p className={"font-xs"}>
                    {"Paragraph Small"}
                  </p>
                  <p className={"font-xs semi-bold"}>
                    {"Paragraph Small Semi Bold"}
                  </p>
                  <p className={"font-xs bold"}>
                    {"Paragraph Small Bold"}
                  </p>
                  <p className={"font-sm line-through"}>
                    {"Delete"}
                  </p>
                  <p className={"font-sm italic"}>
                    {"italicized"}
                  </p>
                  <p className={"font-sm underline"}>
                    {"Underline"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>




    </>
  );
}
