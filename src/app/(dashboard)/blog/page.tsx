import Link from "next/link";
import { blogPosts, blogPostPath } from "@/data/blog-posts";
import Customizer from "@/components/Customizer";
import Header from "@/components/Header";
import HeaderActions from "@/components/HeaderActions";
import Sidebar from "@/components/Sidebar";
import GeexResources from "@/components/GeexResources";
export const metadata = { title: "Blog - Geex Dashboard", icons: { icon: "/assets/img/favicon.svg" } };

export default function BlogPage() {
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
                {"Blog"}
              </h2>
              <p className={"geex-content__header__subtitle"}>
                Articles on business, finance, and technology
              </p>
            </div>
            <HeaderActions />
          </div>
          <div className={"geex-content__blog"}>
            <div className={"geex-content__blog__wrapper"}>
              <div className="row">
                {blogPosts.map(post => (
                  <div key={post.slug} className="col-xxl-3 col-xl-4 col-md-6 mb-25">
                    <article className="geex-content__blog__single">
                      <div className="geex-content__blog__single__img">
                        <Link href={blogPostPath(post.slug)} aria-label={post.title}>
                          <img src={post.image} alt="" />
                        </Link>
                      </div>
                      <div className="geex-content__blog__single__content">
                        <div className="geex-content__blog__single__quickinfo">
                          <span>{post.author}</span>
                          <time dateTime={post.publishedAt}>{post.dateLabel}</time>
                        </div>
                        <h5 className="geex-content__blog__single__title">
                          <Link href={blogPostPath(post.slug)}>{post.title}</Link>
                        </h5>
                      </div>
                    </article>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
