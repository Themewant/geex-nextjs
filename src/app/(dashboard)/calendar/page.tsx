import { DemoRecordForm } from "@/components/DemoRecords";
import Customizer from "@/components/Customizer";
import Header from "@/components/Header";
import HeaderActions from "@/components/HeaderActions";
import Sidebar from "@/components/Sidebar";
import GeexResources from "@/components/GeexResources";
export const metadata = { title: "Calendar - Geex Dashboard", icons: { icon: "/assets/img/favicon.svg" } };

export default function CalendarPage() {
  return (
    <>
      <GeexResources styles={["/assets/vendor/css/fullcalendar@5.2.0.css","/assets/vendor/css/bootstrap/bootstrap.css","/assets/css/style.css","/assets/css/calendar.css","https://cdn.jsdelivr.net/npm/@iconscout/unicons@4.0.8/css/line.min.css"]} scripts={["/assets/vendor/js/jquery/jquery-3.5.1.min.js","/assets/vendor/js/jquery/jquery-ui.js","/assets/vendor/js/bootstrap/bootstrap.min.js","/assets/vendor/js/fullcalendar@5.2.0.js","/assets/js/main.js"]} />
      <Header />
      <main className={"geex-main-content"}>
        <Sidebar />
        <Customizer />
        <div className={"geex-content"}>
          <div className={"geex-content__header"}>
            <div className={"geex-content__header__content"}>
              <h2 className={"geex-content__header__title"}>
                {"Calendar"}
              </h2>
              <p className={"geex-content__header__subtitle"}>
                {"Form Elements is used to style and format the input field"}
              </p>
            </div>
            <HeaderActions />
          </div>
          <div className={"geex-content__wrapper"}>
            <div className={"geex-content__section-wrapper"}>
              <div className={"geex-content__section geex-content__section--transparent geex-content__calendar"}>
                <button type="button" className="geex-btn geex-content__calendar__toggle" aria-controls="calendar-sidebar" aria-expanded="false">
                  <i className={"uil-bars"} />
                  {" Event List "}
                </button>
                <div id="calendar-sidebar" className="geex-content__calendar__sidebar">
                  <div className={"geex-content__calendar__sidebar__header"}>
                    <button className={"geex-btn geex-btn--primary geex-btn__add-modal"}>
                      <i className={"uil-plus"} />
                      {" New Event "}
                    </button>
                  </div>
                  <div className={"geex-content__calendar__sidebar__meeting"}>
                    <span className={"geex-content__calendar__sidebar__meeting__label"}>
                      {"My Schedule Today"}
                    </span>
                    <div className={"geex-content__calendar__sidebar__meeting__single"}>
                      <div className={"geex-content__calendar__sidebar__meeting__single__text"}>
                        <h4 className={"geex-content__calendar__sidebar__meeting__single__title"}>
                          {"Client Weekly Meeting"}
                        </h4>
                        <span className={"geex-content__calendar__sidebar__meeting__single__time"}>
                          {"09:00 AM - 10:00 AM"}
                        </span>
                      </div>
                      <div className={"geex-content__calendar__sidebar__meeting__single__tag"}>
                        <span className={"geex-content__calendar__sidebar__meeting__single__tag__item danger"}>
                          {" Urgent "}
                        </span>
                        <span className={"geex-content__calendar__sidebar__meeting__single__tag__item success"}>
                          {" Face to face "}
                        </span>
                      </div>
                      <div className={"geex-content__calendar__sidebar__meeting__single__author"}>
                        <div className={"geex-content__calendar__sidebar__meeting__single__author__img"}>
                          <img src={"/assets/img/avatar/chat/1.svg"} alt={"avatar"} />
                        </div>
                        <div className={"geex-content__calendar__sidebar__meeting__single__author__content"}>
                          <div className={"geex-content__calendar__sidebar__meeting__single__author__text"}>
                            <span className={"geex-content__calendar__sidebar__meeting__single__author__title"}>
                              {"John Braun"}
                            </span>
                            <a href="#calendar-event-title" data-calendar-feature className="geex-content__calendar__sidebar__meeting__single__author__btn">
                              {"View details"}
                            </a>
                          </div>
                          <div className={"geex-content__calendar__sidebar__meeting__single__author__icon"}>
                            <a href="#calendar-event-title" data-calendar-feature aria-label="View client weekly meeting details">
                              <i className={"uil-angle-right"} />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={"geex-content__calendar__sidebar__meeting__single"}>
                      <div className={"geex-content__calendar__sidebar__meeting__single__text"}>
                        <h4 className={"geex-content__calendar__sidebar__meeting__single__title"}>
                          {"Maintenance CenterLoad Balancer"}
                        </h4>
                        <span className={"geex-content__calendar__sidebar__meeting__single__time"}>
                          {"09:00 AM - 10:30 AM"}
                        </span>
                      </div>
                      <div className={"geex-content__calendar__sidebar__meeting__single__tag"}>
                        <span className={"geex-content__calendar__sidebar__meeting__single__tag__item primary"}>
                          {" Fixing "}
                        </span>
                        <span className={"geex-content__calendar__sidebar__meeting__single__tag__item warning"}>
                          {" Backend "}
                        </span>
                      </div>
                    </div>
                    <div className={"geex-content__calendar__sidebar__meeting__single"}>
                      <div className={"geex-content__calendar__sidebar__meeting__single__text"}>
                        <h4 className={"geex-content__calendar__sidebar__meeting__single__title"}>
                          {"Check Annual Report"}
                        </h4>
                        <span className={"geex-content__calendar__sidebar__meeting__single__time"}>
                          {"09:00 AM - 10:30 AM"}
                        </span>
                      </div>
                      <div className={"geex-content__calendar__sidebar__meeting__single__tag"}>
                        <span className={"geex-content__calendar__sidebar__meeting__single__tag__item info"}>
                          {" Report "}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className={"geex-content__calendar__sidebar__bottom"}>
                    <button type="button" data-calendar-agenda-toggle aria-expanded="false" aria-controls="calendar-day-agenda" className="geex-btn geex-content__calendar__sidebar__bottom__btn">
                      {"View More "}
                      <i className={"uil-arrow-right"} />
                    </button>
                  </div>
                  <section id="calendar-day-agenda" className="geex-calendar-agenda" hidden aria-label="Selected day schedule">
                    <label className="geex-calendar-date-label">
                      Select date
                      <input type="date" data-calendar-schedule-date />
                    </label>
                    <p data-calendar-empty>No events on this day.</p>
                    <ul data-calendar-agenda />
                  </section>
                </div>
                <div className="geex-content__calendar__content">
                  <div className={"geex-content__modal__form"}>
                    <div className={"geex-content__modal__form__header"}>
                      <h3 className={"geex-content__modal__form__title"}>
                        {"Add New Event"}
                      </h3>
                      <button type="button" className="geex-content__modal__form__close" aria-label="Close new event form">
                        <i className={"uil-times"} />
                      </button>
                    </div>
                    <DemoRecordForm scope="calendar" className="geex-content__modal__form__wrapper">
                      <div className={"geex-content__modal__form__item"}>
                        <input type={"text"} name="title" className={"geex-content__modal__form__input"} placeholder="Event Title" aria-label="Event Title" required maxLength={120} />
                      </div>
                      <div className={"geex-content__modal__form__item"}>
                        <textarea name="description" aria-label="Description" maxLength={500} className={"geex-content__modal__form__input geex-content__modal__form__input--textarea"} placeholder={"Event Description"} />
                      </div>
                      <div className={"geex-content__modal__form__item"}>
                        <label>Event date <input type="date" name="date" className="geex-content__modal__form__input" required /></label>
                      </div>
                      <div className="geex-content__modal__form__item">
                        <button type={"submit"} className={"geex-content__modal__form__submit"}>
                          Save Event
                        </button>
                      </div>
                    </DemoRecordForm>
                  </div>
                  <div id="geex-calendar" className="geex-calendar" />
                  <dialog className="geex-calendar-details" data-calendar-details aria-labelledby="calendar-event-title">
                    <h3 id="calendar-event-title" />
                    <p data-calendar-details-date />
                    <p data-calendar-details-description />
                    <form method="dialog">
                      <button type="submit" className="geex-btn geex-btn--primary">Close</button>
                    </form>
                  </dialog>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
