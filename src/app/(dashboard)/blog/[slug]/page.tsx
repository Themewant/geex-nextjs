import { DemoRecordForm, DemoRecordList } from "@/components/DemoRecords";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts, blogPostPath } from "@/data/blog-posts";
import Customizer from "@/components/Customizer";
import Header from "@/components/Header";
import HeaderActions from "@/components/HeaderActions";
import Sidebar from "@/components/Sidebar";
import GeexResources from "@/components/GeexResources";
export function generateStaticParams() {
  return blogPosts.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const post = blogPosts.find(article => article.slug === slug);
  if (!post) notFound();

  return {
    title: `${post.title} - Geex Dashboard`,
    description: post.paragraphs[0],
    icons: { icon: "/assets/img/favicon.svg" },
  };
}

export default async function BlogDetailsPage({ params }: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const post = blogPosts.find(article => article.slug === slug);
  if (!post) notFound();

  const otherPosts = blogPosts.filter(article => article.slug !== slug);
  const sameCategory = otherPosts.filter(article => article.category === post.category);
  const related = [...sameCategory, ...otherPosts.filter(article => article.category !== post.category)].slice(0, 2);
  const topStories = otherPosts.slice(-4);

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
                {"Blog Details"}
              </h2>
              <p className={"geex-content__header__subtitle"}>
                <Link href="/blog">Back to Blog</Link>
              </p>
            </div>
            <HeaderActions />
          </div>
          <div className="geex-content__blog_details">
            <div className="row">
              <div className="col-xxl-9 col-xl-8 lg-mb-40">
                <article className="geex-content__blog_details__wrap">
                  <div className="geex-content__blog_details__img">
                    <img src={post.image} alt="" />
                  </div>
                  <div className="geex-content__blog_details__content">
                    <ul className="geex-content__blog_details__quickinfo">
                      <li className="geex-content__blog_details__quickinfo__item"><i className="uil-user" /> {post.author}</li>
                      <li className="geex-content__blog_details__quickinfo__item"><i className="uil-calender" /> <time dateTime={post.publishedAt}>{post.dateLabel}</time></li>
                      <li className="geex-content__blog_details__quickinfo__item"><i className="uil-tag" /> {post.category}</li>
                    </ul>
                    <h1 className="geex-content__blog_details__title">{post.title}</h1>
                    {post.paragraphs.map(paragraph => (
                      <p key={paragraph} className="geex-content__blog_details__description">{paragraph}</p>
                    ))}
                    <div className="geex-content__blog_details__news">
                      <h2 className="geex-content__blog_details__subtitle">You Might Also Like</h2>
                      <div className="geex-content__blog_details__news__inner">
                        {related.map(article => (
                          <div key={article.slug} className="geex-content__blog_details__news__story">
                            <div className="geex-content__blog_details__news__story__img">
                              <Link href={blogPostPath(article.slug)} aria-label={article.title}><img src={article.image} alt="" /></Link>
                            </div>
                            <div className="geex-content__blog_details__news__story__content">
                              <h3 className="geex-content__blog_details__news__story__title">
                                <Link href={blogPostPath(article.slug)}>{article.title}</Link>
                              </h3>
                              <span>{article.category}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className={"geex-content__blog_details__reply"}>
                      <h3 className={"geex-content__blog_details__subtitle"}>
                        {"Comment"}
                      </h3>
                      <ul className={"geex-content__blog_details__reply__inner"}>
                        <li className={"geex-content__blog_details__reply__wrapper"}>
                          <div className={"geex-content__blog_details__reply__img"}>
                            <img src={"/assets/img/avatar/user.svg"} alt={"author"} />
                          </div>
                          <div className={"geex-content__blog_details__reply__content"}>
                            <h5 className={"geex-content__blog_details__reply__content__title"}>
                              {"Esther Howard"}
                            </h5>
                            <a href={"#"} className={"geex-content__blog_details__reply__date"}>
                              {"2 Jul 2024"}
                            </a>
                            <p className={"geex-content__blog_details__reply__desc"}>
                              {"Efficiently simplify alternative customer service rather than efficient \"outside the box\" thinking. Dramatically deploy an expanded array of manufactured."}
                            </p>
                          </div>
                          <div className={"geex-content__blog_details__reply__btn"}>
                            <button>
                              <i className={"fa-regular fa-share"} />
                              {" Reply"}
                            </button>
                          </div>
                        </li>
                        <li className={"geex-content__blog_details__reply__wrapper"}>
                          <div className={"geex-content__blog_details__reply__img"}>
                            <img src={"/assets/img/avatar/user.svg"} alt={"author"} />
                          </div>
                          <div className={"geex-content__blog_details__reply__content"}>
                            <h5 className={"geex-content__blog_details__reply__content__title"}>
                              {"Esther Howard"}
                            </h5>
                            <a href={"#"} className={"geex-content__blog_details__reply__date"}>
                              {"2 Jul 2024"}
                            </a>
                            <p className={"geex-content__blog_details__reply__desc"}>
                              {"Efficiently simplify alternative customer service rather than efficient \"outside the box\" thinking. Dramatically deploy an expanded array of manufactured."}
                            </p>
                          </div>
                          <div className={"geex-content__blog_details__reply__btn"}>
                            <button>
                              <i className={"fa-regular fa-share"} />
                              {" Reply"}
                            </button>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className={"geex-content__blog_details__comment"}>
                      <h3 className={"geex-content__blog_details__subtitle"}>
                        {"Leave a Reply"}
                      </h3>
                      <p className={"geex-content__blog_details__comment__subtitle"}>
                        {"Your email address will not be published. Required fields are marked *"}
                      </p>
                      <DemoRecordList scope={`comment:${slug}`} label="Your Comments" />
                      <DemoRecordForm id="comment-form" scope={`comment:${slug}`} className="geex-content__blog_details__comment__form">
                        <div className={"geex-content__blog_details__comment__form__group"}>
                          <input type="text" name="title" aria-label="Name" className="form-item" placeholder="Name" maxLength={120} required />

                        </div>
                        <div className={"geex-content__blog_details__comment__form__group"}>
                          <textarea name="description" aria-label="Comment" maxLength={1500} placeholder="Comment" required />
                        </div>
                        <div className={"geex-content__blog_details__comment__form__group"}>
                          <button type={"submit"} className={"submit-btn"}>
                            {"Post Comments"}
                          </button>
                        </div>
                      </DemoRecordForm>
                    </div>
                  </div>
                </article>
              </div>
              <aside className="col-xxl-3 col-xl-4" aria-label="Top stories">
                <div className="geex-content__widget">
                  <div className="geex-content__widget__single">
                    <h2 className="geex-content__widget__title">Top Stories</h2>
                    <div className="geex-content__widget__content">
                      <div className="geex-content__widget__article__wrapper">
                        {topStories.map(article => (
                          <div key={article.slug} className="geex-content__widget__article">
                            <div className="geex-content__widget__article__img">
                              <Link href={blogPostPath(article.slug)} aria-label={article.title}><img src={article.image} alt="" /></Link>
                            </div>
                            <div className="geex-content__widget__article__content">
                              <div className="geex-content__widget__quickinfo">
                                <time dateTime={article.publishedAt}>{article.dateLabel}</time>
                              </div>
                              <h3 className="geex-content__widget__article__title">
                                <Link href={blogPostPath(article.slug)}>{article.title}</Link>
                              </h3>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
