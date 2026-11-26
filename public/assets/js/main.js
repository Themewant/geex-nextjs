window.initializeGeexDashboard = function () {
 const $ = window.jQuery;
 if (!$) return;

  const memory = window.geexPreviewStorage ??= new Map();
  function readPreference(key) {
    if (memory.has(key)) return memory.get(key);
    try {
      return window.localStorage.getItem(key);
    } catch {
      return null;
    }
  }
  function writePreference(key, value) {
    try {
      window.localStorage.setItem(key, value);
      memory.delete(key);
    } catch {
      memory.set(key, value);
    }
  }

  const cleanups = [];
  function bindClick(target, handler) {
    target.on("click.geexPage", handler);
    cleanups.push(() => target.off("click.geexPage", handler));
  }

  function renderChart(chart) {
    if (!chart) return;
    const rendered = chart.render();
    cleanups.push(() => chart.destroy());
    rendered?.catch(error => {
      if (chart.el?.isConnected) console.error(error);
    });
  }


	const copyrightYear = new Date().getFullYear();
	document.querySelectorAll('[data-copyright-year]').forEach(function (element) {
		element.textContent = copyrightYear;
	});

	if (window.NiceSelect) {
		document.querySelectorAll('.geex-content select[aria-label]').forEach(function (select, index) {
			if (select.multiple || select.size > 1 || select.disabled) return;

			const instance = window.NiceSelect.bind(select, { searchable: false });
			const listId = 'geex-select-options-' + index;
			select.tabIndex = -1;
			select.setAttribute('aria-hidden', 'true');

			function syncDropdown() {
				const dropdown = instance.dropdown;
				const list = dropdown.querySelector('.list');
				const isOpen = dropdown.classList.contains('open');
				dropdown.setAttribute('role', 'combobox');
				dropdown.setAttribute('aria-label', select.getAttribute('aria-label'));
				dropdown.setAttribute('aria-controls', listId);
				dropdown.setAttribute('aria-expanded', String(isOpen));
				list.id = listId;
				list.setAttribute('role', 'listbox');
				list.querySelectorAll('.option').forEach(function (option, optionIndex) {
					option.id = listId + '-' + optionIndex;
					option.setAttribute('role', 'option');
					option.setAttribute('aria-selected', String(option.classList.contains('selected')));
				});
				const focused = isOpen && list.querySelector('.option.focus');
				if (focused) {
					dropdown.setAttribute('aria-activedescendant', focused.id);
				} else {
					dropdown.removeAttribute('aria-activedescendant');
				}
			}

			syncDropdown();
			const observer = new MutationObserver(syncDropdown);
			observer.observe(select.parentElement, {
				childList: true,
				subtree: true,
				attributes: true,
				attributeFilter: ['class'],
			});
			cleanups.push(() => { observer.disconnect(); instance.destroy(); });
		});
	}

	// LocalStorage JS
	let html = document.documentElement;
	let geexTheme = readPreference("theme");
	let geexThemeLayout = readPreference("layout");
	let geexThemeNavbar = readPreference("navbar");

	let darkMode = geexTheme === "dark";
	let rtlLayout = geexThemeLayout === "rtl";
	let topMenu = geexThemeNavbar === "top";

	// Theme Mode Toggle 
	if (geexTheme) {
		html.setAttribute("data-theme", geexTheme);

		if (geexTheme === "dark") {
			$(".geex-customizer__btn--light").removeClass("active");
			$(".geex-customizer__btn--dark").addClass("active");
			
		}
	}

	// Theme Layout Toggle
	if (geexThemeLayout) {

		html.setAttribute("dir", geexThemeLayout);

		if (geexThemeLayout === "rtl") {
			$(".geex-customizer__btn--ltr").removeClass("active");
			$(".geex-customizer__btn--rtl").addClass("active");
		}
	}

	// Theme Navbar Toggle
	if (geexThemeNavbar) {

		html.setAttribute("data-nav", geexThemeNavbar);

		if (geexThemeNavbar === "top") {
			$(".geex-customizer__btn--side").removeClass("active");
			$(".geex-customizer__btn--top").addClass("active");
		}
	}
	
	// Dark Theme
	function darkTheme(e) {
		let geexTheme = "dark";
		writePreference("theme", geexTheme);
		document.documentElement.setAttribute("data-theme", geexTheme);

		darkMode = true;
	}

	// Light Theme 
	function lightTheme(e) {
		let geexTheme = "light";
		writePreference("theme", geexTheme);
		document.documentElement.setAttribute("data-theme", geexTheme);

		darkMode = false;
	}
	
	// RTL Layout
	function rtlTheme(e) {
		let geexThemeLayout = "rtl";
		writePreference("layout", geexThemeLayout);
		document.documentElement.setAttribute("dir", geexThemeLayout);

		rtlLayout = true;
	}

	// LTR Layout
	function ltrTheme(e) {
		let geexThemeLayout = "ltr";
		writePreference("layout", geexThemeLayout);
		document.documentElement.setAttribute("dir", geexThemeLayout);

		rtlLayout = false;
	}
	
	// Top Navbar
	function topTheme(e) {
		let geexThemeNavbar = "top";
		writePreference("navbar", geexThemeNavbar);
		document.documentElement.setAttribute("data-nav", geexThemeNavbar);

		topMenu = true;
	}

	// Side Navbar
	function sideTheme(e) {
		let geexThemeNavbar = "side";
		writePreference("navbar", geexThemeNavbar);
		document.documentElement.setAttribute("data-nav", geexThemeNavbar);

		topMenu = false;
	}

	// Light Demo Add
	bindClick($(".geex-customizer__btn--light"), function() {
		$(".geex-customizer__btn--dark").removeClass("active");
		$(".geex-customizer__btn--light").addClass("active");

		lightTheme();
	})

	// Dark Demo Add
	bindClick($(".geex-customizer__btn--dark"), function() {
		$(".geex-customizer__btn--light").removeClass("active");
		$(".geex-customizer__btn--dark").addClass("active");

		darkTheme();
	})

	// LTR Layout Add
	bindClick($(".geex-customizer__btn--ltr"), function() {
		$(".geex-customizer__btn--rtl").removeClass("active");
		$(".geex-customizer__btn--ltr").addClass("active");

		ltrTheme();

		// if($("body").hasClass("layout-rtl")) {
		// 	$("body").removeClass("layout-rtl");
		// }
		// $('html').attr('dir', 'ltr');
		// $("body").addClass("layout-ltr");
	})

	// RTL Layout Add
	bindClick($(".geex-customizer__btn--rtl"), function() {
		$(".geex-customizer__btn--ltr").removeClass("active");
		$(".geex-customizer__btn--rtl").addClass("active");
		
		rtlTheme();
  	})

	// Side Navbar Add
	bindClick($(".geex-customizer__btn--side"), function() {
		$(".geex-customizer__btn--top").removeClass("active");
		$(".geex-customizer__btn--side").addClass("active");

		sideTheme();
	})

	// Top Navbar Add
	bindClick($(".geex-customizer__btn--top"), function() {
		$(".geex-customizer__btn--side").removeClass("active");
		$(".geex-customizer__btn--top").addClass("active");

		topTheme();
	})

	// Menu Active Class
	function addActiveClass(pageSlug) {
		let menuLinks = $('.geex-header__menu__link, .geex-sidebar__menu__link');
		menuLinks.removeClass('active');

		// Find the corresponding menu item and add the "active" class
		menuLinks.each(function () {
			let menuItemPath = $(this).attr('href');
			let menuItemName = menuItemPath.split('/').pop().split('.')[0];
			if (menuItemName === pageSlug || menuItemName + '#' === pageSlug) {
				let menuParent = $(this).closest('.has-children').find('ul').siblings('a');
				$(this).addClass('active');
				menuParent.addClass('active');
				menuParent.siblings('.geex-sidebar__submenu').show();

			} else if (pageSlug === '' || pageSlug === '#') {
				$('.geex-header__menu__link').first().addClass('active');
				$('.geex-sidebar__menu__link').first().addClass('active');
				
				$('.geex-header__menu__link').first().siblings('.geex-header__submenu').find('.geex-header__menu__link').first().addClass('active');
				$('.geex-header__menu__link').first().siblings('.geex-header__submenu').slideDown();
				
				$('.geex-sidebar__menu__link').first().siblings('.geex-sidebar__submenu').find('.geex-sidebar__menu__link').first().addClass('active');
				$('.geex-sidebar__menu__link').first().siblings('.geex-sidebar__submenu').slideDown();
			}
		});
	}
	
	// Get the path
	let path = window.location.pathname;
	let pathSegments = path.split('/');
	let pageSlug = pathSegments.filter(Boolean)[0] || '';

	addActiveClass(pageSlug);

	bindClick($(".geex-sidebar__menu__link"), function() {
		let $clickedItem = $(this);

        // Toggle active class and slideToggle for the clicked item's submenu
        $clickedItem.toggleClass("active");
        $clickedItem.siblings('.geex-sidebar__submenu').slideToggle();

        // Remove active class and slideUp for other menu items
        $(".geex-sidebar__menu__link").not($clickedItem).removeClass("active");
        $(".geex-sidebar__menu__link").not($clickedItem).siblings(".geex-sidebar__submenu").slideUp();
	})

  	// Customizer Toggle
	bindClick($(".geex-btn__customizer"), function() {
		$(".geex-customizer").toggleClass("active");
		$("body").addClass("overlay_active");
  	});

	// Customizer Close
	bindClick($(".geex-customizer-overlay, .geex-btn__customizer-close"), function() {
		$(".geex-customizer").removeClass("active");
		$("body").removeClass("overlay_active");
	})

  	// Sidebar Toggle
	bindClick($(".geex-btn__toggle-sidebar"), function(e) {
		e.preventDefault();
		$(".geex-sidebar").toggleClass("active");
		$(".geex-sidebar").animate({ 
			width: "toggle" 
		});
		$("body").addClass("overlay_active");
  	});

  	// Sidebar Close
	bindClick($(".geex-sidebar__close"), function(e) {
		e.preventDefault();
		$(".geex-sidebar").removeClass("active");
		$(".geex-sidebar").animate({ 
			width: "toggle" 
		});
		$("body").removeClass("overlay_active");
  	});

	// Datepicker Open
	bindClick($("#geex-content__filter__label"), function() {
		const input = $('#geex-content__filter__date');
    if (!input.hasClass('hasDatepicker')) {
      input.datepicker();
      cleanups.push(() => input.datepicker('destroy'));
    }
    input.datepicker('show');
  	});

  	// Content Toggle
	bindClick($(".geex-content__toggle__btn"), function(e) {
		e.preventDefault();
		$(this).toggleClass("active");
		$(this).siblings(".geex-content__toggle__content").slideToggle();
  	});

  	// Task Sidebar Toggle
	bindClick($(".geex-btn__toggle-task"), function(e) {
		e.preventDefault();
		$(this).toggleClass("active");
		$(".geex-content__todo__sidebar").slideToggle();
  	});

  	// Calendar Sidebar Toggle
	bindClick($(".geex-content__calendar__toggle"), function(e) {
		e.preventDefault();
		$(this).toggleClass("active");
		const sidebar = $(this).siblings(".geex-content__calendar__sidebar");
    $(this).attr("aria-expanded", String(!sidebar.is(":visible")));
    sidebar.stop(true, true).slideToggle();
  	});

  	// Chat Sidebar Toggle
	bindClick($(".geex-content__chat__toggle"), function(e) {
		e.preventDefault();
		$(this).toggleClass("active");
		$(".geex-content__chat__sidebar").slideToggle();
  	});

  	// Chat Action Toggle
	bindClick($(".geex-content__chat__action__toggle__btn"), function(e) {
		e.preventDefault();
		$(this).toggleClass("active");
		$(this).siblings(".geex-content__chat__action__toggle__content").slideToggle();
  	});

	// Quick Action popups
	const $quickActionLinks = $(".geex-content__header__quickaction__link");
	const $quickActionPopups = $(".geex-content__header__popup");
	bindClick($quickActionLinks.attr("aria-expanded", "false"), function (e) {
		e.preventDefault();
		const $link = $(this);
		const $popup = $link.siblings(".geex-content__header__popup");
		const willOpen = !$popup.hasClass("is-open");

		$quickActionLinks.not($link).attr("aria-expanded", "false");
		$quickActionPopups.not($popup).removeClass("is-open").prop("inert", true);
		$link.attr("aria-expanded", String(willOpen));
		$popup.toggleClass("is-open", willOpen).prop("inert", !willOpen);
	});


	// Add Todo
	bindClick($(".geex-btn__add-modal"), function() {
		$(".geex-content__modal__form").addClass("active");
		$("body").addClass("overlay_active");
  	})

	// Close Todo
	bindClick($(".geex-content__modal__form__close"), function() {
		$(".geex-content__modal__form").removeClass("active");
		$("body").removeClass("overlay_active");
  	})

  // Send a message into the current demo conversation.
  const chatInputs = $('.geex-content__chat__send input[name="chat"]');
  function sendChat(composer) {
    const input = composer.find('input[name="chat"]');
    const list = composer.prev('.geex-content__chat__list');
    const message = input.val().trim();
    if (!list.length || !message) return;
    const bubble = $('<div>', { class: 'geex-content__chat__list__single' });
    const text = $('<div>', { class: 'geex-content__chat__list__single__text' });
    text.append($('<span>', { class: 'geex-content__chat__list__single__title' }).text('You'));
    text.append($('<span>', { class: 'geex-content__chat__list__single__msg latest' }).text(message));
    bubble.append(text);
    list.append(bubble);
    input.val('').trigger('focus');
    list.scrollTop(list.prop('scrollHeight'));
  }
  bindClick($('.geex-content__chat__send .btn-send'), function() {
    sendChat($(this).closest('.geex-content__chat__send'));
  });
  function handleChatEnter(event) {
    if (event.key === "Enter" && !event.originalEvent?.isComposing) {
      event.preventDefault();
      sendChat($(this).closest('.geex-content__chat__send'));
    }
  }
  chatInputs.on('keydown.geexPage', handleChatEnter);
  cleanups.push(() => chatInputs.off('keydown.geexPage', handleChatEnter));

  // Chat Mute Toggle
	bindClick($(".geex-content__chat__header__filter__mute-btn"), function(e) {
		e.preventDefault();
		$(this).toggleClass("active");
	})

	// Chat Search Toggle
	bindClick($(".geex-content__chat__header__filter__btn"), function(e) {
		e.preventDefault();
		
		var $clickedItem = $(this);
    
		// Toggle the 'active' class on the clicked item
		$clickedItem.toggleClass("active");

		// Slide toggle the content of the clicked item
		$clickedItem.siblings(".geex-content__chat__header__filter__content").slideToggle();

		// Close the content of other items if they are open
		$(".geex-content__chat__header__filter__btn").not($clickedItem).removeClass("active");
		$(".geex-content__chat__header__filter__btn").not($clickedItem).siblings(".geex-content__chat__header__filter__content").slideUp();
	})

	// Toggle Input Type Password
	bindClick($(".toggle-password-type"), function(e) {
		e.preventDefault();
		const input = $(this).siblings("input");
	
		if (input.attr('type') === 'password') {
			$(this).removeClass("uil-eye");
			$(this).addClass("uil-eye-slash");
			input.attr('type', 'text');
		} else {
			$(this).addClass("uil-eye");
			$(this).removeClass("uil-eye-slash");
			input.attr('type', 'password');
		}
	});

	// Invoice Chat Toggle
	bindClick($(".geex-content__invoice__chat__toggler"), function(e) {
		e.preventDefault();
		var $invoiceChatContent = $(this).siblings('.geex-content__invoice__chat__wrapper');
	
		$invoiceChatContent.stop().animate({
			width: 'toggle', // toggles between 0% and 100%
			opacity: 'toggle' // toggles between 0 and 1
		}, 300); // Adjust the duration as needed
	});

  // Set a local launch date the first time the countdown demo opens.
  const countdown = document.getElementById("geex-countdown");
  if (countdown) {
    const dayLength = 86400000;
    const key = "geex-demo-launch-date";
    let deadline = Number(readPreference(key));
    if (!Number.isFinite(deadline) || deadline <= 0) {
      deadline = Date.now() + 7 * dayLength;
      writePreference(key, String(deadline));
    }
    const fields = ["days", "hours", "minutes", "seconds"].map(unit => countdown.querySelector(".geex-countdown__" + unit));
    const timer = setInterval(updateCountdown, 1000);
    cleanups.push(() => clearInterval(timer));
    updateCountdown();

    function updateCountdown() {
      const remaining = Math.max(0, deadline - Date.now());
      const seconds = Math.floor(remaining / 1000);
      const values = [Math.floor(seconds / 86400), Math.floor(seconds / 3600) % 24, Math.floor(seconds / 60) % 60, seconds % 60];
      fields.forEach((field, index) => { if (field) field.textContent = String(values[index]); });
      if (remaining === 0) clearInterval(timer);
    }
  }

  // Swiper Slider
	let swiperContainer = document.querySelector('.swiper-container');
	let swiper = swiperContainer && new Swiper(swiperContainer, {
		loop: true, // Enable loop mode for infinite sliding
		freeMode: true,
		reverseDirection: true,
		slidesPerView: 3,
		spaceBetween: 0,
		rtl: true,
		navigation: {
			nextEl: '.swiper-btn-next',
			prevEl: '.swiper-btn-prev',
		},
		breakpoints: {
			// when window width is >= 0px
			0: {
			  slidesPerView: 1,
			},
			// when window width is >= 1440px
			992: {
			  slidesPerView: 2,
			},
			// when window width is >= 1600px
			1600: {
			  slidesPerView: 3,
			}
		}
	});

	let testiContainer = document.querySelector('.testi-container');
	let testi = testiContainer && new Swiper(testiContainer, {
		loop: true, // Enable loop mode for infinite sliding
		freeMode: true,
		reverseDirection: true,
		slidesPerView: 1,
		spaceBetween: 0,
		navigation: {
			nextEl: '.swiper-btn-next',
			prevEl: '.swiper-btn-prev',
		},
	});

  if (swiper) cleanups.push(() => swiper.destroy(true, false));
  if (testi) cleanups.push(() => testi.destroy(true, false));

  // Calendar
  const calendarElement = document.getElementById("geex-calendar");
  if (calendarElement && window.FullCalendar) {
    const layout = calendarElement.closest(".geex-content__calendar");
    const dateInput = layout.querySelector("[data-calendar-schedule-date]");
    const agenda = layout.querySelector("[data-calendar-agenda]");
    const emptyAgenda = layout.querySelector("[data-calendar-empty]");
    const dialog = layout.querySelector("[data-calendar-details]");
    const newEventDate = layout.querySelector('input[name="date"]');
    const localDate = date => [date.getFullYear(), String(date.getMonth() + 1).padStart(2, "0"), String(date.getDate()).padStart(2, "0")].join("-");
    const formatDate = new Intl.DateTimeFormat(undefined, { dateStyle: "full" });
    const formatTime = new Intl.DateTimeFormat(undefined, { hour: "numeric", minute: "2-digit" });
    let selectedDay = localDate(new Date());

    function showEvent(event) {
      showDetails(event.title, formatDate.format(event.start)
        + (event.allDay ? " · All day" : " · " + formatTime.format(event.start)), event.extendedProps.description);
    }

    function showDetails(title, date, description) {
      dialog.querySelector("h3").textContent = title;
      dialog.querySelector("[data-calendar-details-date]").textContent = date;
      dialog.querySelector("[data-calendar-details-description]").textContent = description || "";
      if (!dialog.open) dialog.showModal();
    }

    function renderAgenda(events) {
      dateInput.value = selectedDay;
      newEventDate.value = selectedDay;
      const dayEvents = events.filter(event => event.start && localDate(event.start) === selectedDay)
        .sort((left, right) => left.start - right.start);
      const items = dayEvents.map(event => {
        const li = document.createElement("li");
        const button = document.createElement("button");
        const title = document.createElement("strong");
        const time = document.createElement("span");
        button.type = "button";
        title.textContent = event.title;
        time.textContent = event.allDay ? "All day" : formatTime.format(event.start);
        button.append(title, time);
        button.addEventListener("click", () => showEvent(event));
        li.append(button);
        return li;
      });
      agenda.replaceChildren(...items);
      emptyAgenda.hidden = items.length > 0;
      calendarElement.querySelectorAll("[data-date]").forEach(cell => {
        cell.classList.toggle("geex-calendar-selected", cell.dataset.date === selectedDay);
      });
    }

    const calendar = new window.FullCalendar.Calendar(calendarElement, {
      height: "auto",
      fixedWeekCount: false,
      headerToolbar: { left: "title prev,next", center: "", right: "dayGridMonth,timeGridWeek,timeGridDay" },
      dayMaxEvents: true,
      dayMaxEventRows: 3,
      events(info, success) {
        const events = [];
        for (let month = new Date(info.start.getFullYear(), info.start.getMonth(), 1);
          month < info.end;
          month.setMonth(month.getMonth() + 1)) {
          const date = day => localDate(new Date(month.getFullYear(), month.getMonth(), day));
          events.push(
            { title: "All Day Event", start: date(1), allDay: true },
            { title: "Long Event", start: date(7), end: date(10), allDay: true },
            { title: "Repeating Event", start: date(9) + "T16:00:00" },
            { title: "Repeating Event", start: date(16) + "T16:00:00" },
            { title: "Conference", start: date(23), end: date(25), allDay: true },
            { title: "Meeting", start: date(26) + "T10:30:00" },
            { title: "Lunch", start: date(26) + "T12:00:00" },
          );
        }
        success(events);
      },
      eventDisplay: "block",
      businessHours: { daysOfWeek: [1, 2, 3, 4, 5], startTime: "08:00", endTime: "16:30" },
      slotMinTime: "06:00:00",
      slotMaxTime: "21:00:00",
      dateClick(info) {
        selectedDay = localDate(info.date);
        renderAgenda(calendar.getEvents());
        if (agendaPanel.hidden) toggleAgenda();
      },
      datesSet(info) {
        if (selectedDay < localDate(info.start) || selectedDay >= localDate(info.end)) {
          selectedDay = localDate(calendar.getDate());
        }
        renderAgenda(calendar.getEvents());
      },
      eventsSet: renderAgenda,
      eventClick(info) { showEvent(info.event); },
      eventDidMount(info) {
        info.el.tabIndex = 0;
        info.el.setAttribute("role", "button");
        info.el.setAttribute("aria-label", info.event.title);
        info.el.addEventListener("keydown", event => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            showEvent(info.event);
          }
        });
      },
    });

    let localEvents;
    function loadLocalEvents() {
      localEvents?.remove();
      try {
        const records = JSON.parse(readPreference("geex-demo:calendar") || "[]");
        localEvents = calendar.addEventSource(records.map(record => ({
          id: record.id,
          title: record.title,
          start: record.date,
          allDay: true,
          description: record.description,
        })));
      } catch {}
    }
    function handleLocalEvent(event) {
      if (event.detail !== "calendar") return;
      const date = newEventDate.value;
      loadLocalEvents();
      if (date) {
        selectedDay = date;
        calendar.gotoDate(date);
        renderAgenda(calendar.getEvents());
      }
    }
    function selectDate() {
      if (!dateInput.value) return;
      selectedDay = dateInput.value;
      calendar.gotoDate(selectedDay);
      renderAgenda(calendar.getEvents());
    }
    loadLocalEvents();
    calendar.render();
    const agendaToggle = layout.querySelector("[data-calendar-agenda-toggle]");
    const agendaPanel = layout.querySelector("#calendar-day-agenda");
    function toggleAgenda() {
      agendaPanel.hidden = !agendaPanel.hidden;
      agendaToggle.setAttribute("aria-expanded", String(!agendaPanel.hidden));
    }
    bindClick($(agendaToggle), toggleAgenda);
    bindClick($(layout.querySelectorAll("[data-calendar-feature]")), function(event) {
      event.preventDefault();
      showDetails("Client Weekly Meeting", "09:00 AM - 10:00 AM", "Weekly face-to-face meeting with John Braun.");
    });
    bindClick($(layout.querySelector(".geex-btn__add-modal")), () => { newEventDate.value = selectedDay; });
    dateInput.addEventListener("change", selectDate);
    window.addEventListener("geex:demo-records", handleLocalEvent);
    cleanups.push(() => {
      dateInput.removeEventListener("change", selectDate);
      window.removeEventListener("geex:demo-records", handleLocalEvent);
      calendar.destroy();
    });
  }

  // Line Chart
	let lineOptions = {
		series: [
			{
				name: "Product One",
				data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 45],
			},

			{
				name: "Product Two",
				data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39, 51],
			},
		],

		chart: {
			fontFamily: "Jost, sans-serif",
			height: 335,
			type: "area",
			background: "transparent",
			toolbar: {
				show: false,
			},
		},

		xaxis: {
			type: "category",
			categories: [
				"14:00",
				"14:10",
				"14:20",
				"14:30",
				"14:40",
				"14:50",
				"14:60",
				"15:00",
				"15:10",
				"15:20",
				"15:30",
			],
			axisBorder: {
				show: false,
			},
			axisTicks: {
				show: false,
			},
			crosshairs: {
				show: false
			},
		},
		yaxis: {
			labels: {
				offsetX: -10
			},
			title: {
				style: {
				fontSize: "0px",
				},
			},
			min: 0,
			max: 75,
			tickAmount: 3,
		},
		colors: ["#FFBB54", "#00A389"],
		fill: {
			colors: ['transparent', 'transparent'],
			type: ['solid', 'solid'],
		},

		legend: {
			show: true,
			position: "top",
			horizontalAlign: "right",
		},
		stroke: {
			width: [5, 5],
			curve: "smooth",
		},
		markers: {
			show: false,
		},
		labels: {
			show: false,
		},
		dataLabels: {
			enabled: false,
		},
		
		grid: {
			show: true,
			xaxis: {
				lines: {
					show: true,
				},
			},
			yaxis: {
				lines: {
					show: true,
				},
			},  
			column: {
				opacity: 0.2
			}, 
		},

		tooltip: {
			enabled: true,
			custom: function({ series, seriesIndex, dataPointIndex, w }) {
				return '<div class="custom-tooltip">' +
				'<span class="custom-tooltip__title">' + w.globals.series[seriesIndex][dataPointIndex] + ' Request</span>' +
				'<span class="custom-tooltip__subtitle"> From ' + w.globals.seriesNames[seriesIndex] + '</span>' +
				'</div>';
			}
		},
		
		responsive: [
			{
				breakpoint: 1024,
				options: {
				chart: {
					height: 300,
				},
				},
			},
			{
				breakpoint: 1366,
				options: {
				chart: {
					height: 350,
				},
				},
			},
		],
		
	};

	let lineChartContainer = document.querySelector("#line-chart");
	let lineChart = lineChartContainer && new ApexCharts(lineChartContainer, lineOptions);
	renderChart(lineChart);


	// Line Chart
	let bitcoinOptions = {
		series: [
			{
				name: "Buy",
				data: [9400, 9200, 9700, 9400, 9200, 9600],
			},

			{
				name: "Sell",
				data: [9150, 9650, 9350, 9750, 9250, 9650],
			},
		],

		chart: {
			fontFamily: "Jost, sans-serif",
			height: 335,
			type: "area",
			background: "transparent",
			toolbar: {
				show: false,
			},
		},

		xaxis: {
			type: "category",
			categories: [
				"3:00 PM",
				"4:00 PM",
				"5:00 PM",
				"6:00 PM",
				"7:00 PM",
				"8:00 PM",
			],
			axisBorder: {
				show: false,
			},
			axisTicks: {
				show: false,
			},
			crosshairs: {
				show: false
			},
		},
		yaxis: {
			labels: {
				offsetX: -10
			},
			title: {
				style: {
					fontSize: "0px",
				},
			},
			min: 9100,
			max: 9800,
			tickAmount: 3,
			opposite: true,
		},
		colors: ["#00A389", "#FF5B5B"],
		fill: {
			colors: ['transparent', 'transparent'],
			type: ['solid', 'solid'],
		},

		legend: {
			show: true,
			position: "top",
			horizontalAlign: "right",
			fontSize: '16px',
      		fontWeight: 500,
		},
		stroke: {
			width: [5, 5],
			curve: "smooth",
		},
		markers: {
			show: false,
		},
		labels: {
			show: false,
		},
		dataLabels: {
			enabled: false,
		},
		
		grid: {
			show: true,
			xaxis: {
				lines: {
					show: true,
				},
			},
			yaxis: {
				lines: {
					show: true,
				},
				horizontalAlign: "right",	
			},  
			column: {
				opacity: 0.2
			}, 
		},

		tooltip: {
			enabled: true,
			custom: function({ series, seriesIndex, dataPointIndex, w }) {
				return '<div class="custom-tooltip">' +
				'<span class="custom-tooltip__title">' + w.globals.series[seriesIndex][dataPointIndex] + ' Request</span>' +
				'<span class="custom-tooltip__subtitle"> From ' + w.globals.seriesNames[seriesIndex] + '</span>' +
				'</div>';
			}
		},
		
		responsive: [
			{
				breakpoint: 1024,
				options: {
					chart: {
						height: 300,
					},
				},
			},
			{
				breakpoint: 1366,
				options: {
					chart: {
						height: 350,
					},
				},
			},
		],
		
	};

	// Bitcoin
	let bitcoinChartContainer = document.querySelector("#bitcoin-chart");
	let bitcoinChart = bitcoinChartContainer && new ApexCharts(bitcoinChartContainer, bitcoinOptions);
	renderChart(bitcoinChart);

	// Ethererum
	let ethererumChartContainer = document.querySelector("#ethererum-chart");
	let ethererumChart = ethererumChartContainer && new ApexCharts(ethererumChartContainer, bitcoinOptions);
	renderChart(ethererumChart);

	// Litecoin
	let litecoinChartContainer = document.querySelector("#litecoin-chart");
	let litecoinChart = litecoinChartContainer && new ApexCharts(litecoinChartContainer, bitcoinOptions);
	renderChart(litecoinChart);


	// Market Activity Chart
	let activityOptions = {
		series: [
			{
				name: "Your Profits",
				data: [23, 11, 22, 27, 13, 22, 37, 21],
			},

			{
				name: "Buys",
				data: [30, 25, 36, 30, 45, 35, 64, 52],
			},

			{
				name: "Sells",
				data: [70, 60, 43, 38, 40, 55, 24, 16],
			},
		],

		chart: {
			fontFamily: "Jost, sans-serif",
			height: 335,
			type: "area",
			background: "transparent",
			toolbar: {
				show: false,
			},
		},

		xaxis: {
			type: "category",
			categories: [
				"Sun",
				"Mon",
				"Tue",
				"Wed",
				"Thu",
				"Fri",
				"Sat",
			],
			axisBorder: {
				show: false,
			},
			axisTicks: {
				show: false,
			},
			crosshairs: {
				show: false
			},
		},
		yaxis: {
			labels: {
				offsetX: -10
			},
			title: {
				style: {
				fontSize: "0px",
				},
			},
			min: 0,
			max: 75,
			tickAmount: 3,
		},
		colors: ["#AB54DB", "#00A389", "#FF5B5B"],
		fill: {
			colors: ['transparent', 'transparent', 'transparent'],
			type: ['solid', 'solid', 'solid'],
		},

		legend: {
			show: true,
			position: "top",
			horizontalAlign: "left",
		},
		stroke: {
			width: [5, 5, 5],
			curve: "smooth",
		},
		markers: {
			show: false,
		},
		labels: {
			show: false,
		},
		dataLabels: {
			enabled: false,
		},
		
		grid: {
			show: true,
			xaxis: {
				lines: {
					show: true,
				},
			},
			yaxis: {
				lines: {
					show: true,
				},
			},  
			column: {
				opacity: 0.2
			}, 
		},

		tooltip: {
			enabled: true,
			custom: function ({ series, seriesIndex, dataPointIndex, w }) {
				// Calculate the percentage based on the max value
				let value = w.globals.series[seriesIndex][dataPointIndex]
				var maxValue = Math.max(...series[0]);
				var percentage = ((value / maxValue) * 10).toFixed(0);

				return '<div class="custom-tooltip">' +
				'<span class="custom-tooltip__title">' + percentage + '%</span>' +
				'<span class="custom-tooltip__subtitle">' + value + ' Visitors</span>' +
				'</div>';
			},
		},
		
		responsive: [
			{
				breakpoint: 1024,
				options: {
				chart: {
					height: 300,
				},
				},
			},
			{
				breakpoint: 1366,
				options: {
					chart: {
						height: 350,
					},
				},
			},
		],
		
	};

	let activityChartContainer = document.querySelector("#market-activity-chart");
	let activityChart = activityChartContainer && new ApexCharts(activityChartContainer, activityOptions);
	renderChart(activityChart);

	// Bar Chart
	let barOptions = {
		series: [{
			data: [40, 31, 40, 10, 40, 36, 32]
		}],
		chart: {
			height: 250,
			type: 'bar',
			toolbar: {
				show: false,
			},
		},
		colors: ["#AB54DB26"],
		plotOptions: {
		bar: {
			columnWidth: 50,
			borderRadius: 12,
		}
		},
		dataLabels: {
		enabled: false,
		},
		
		xaxis: {
			categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
			position: 'bottom',
			axisBorder: {
				show: false
			},
			axisTicks: {
				show: false
			},
			crosshairs: {
				show: false,
			},
			tooltip: {
				enabled: false,
			}
		},
		yaxis: {
			axisBorder: {
				show: false
			},
			axisTicks: {
				show: false,
			},
			labels: {
				show: false,
			},
		},

		grid: {
			show: false,
			padding: { left: -20, right: -20, top: 0, bottom: 0 },
		},

		tooltip: {
			enabled: true,

			custom: function ({ series, seriesIndex, dataPointIndex, w }) {
				// Calculate the percentage based on the max value
				let value = w.globals.series[seriesIndex][dataPointIndex]
				var maxValue = Math.max(...series[0]);
				var percentage = ((value / maxValue) * 10).toFixed(0);

				return '<div class="custom-tooltip">' +
				'<span class="custom-tooltip__title">' + percentage + '%</span>' +
				'<span class="custom-tooltip__subtitle">' + value + ' Visitors</span>' +
				'</div>';
			},
		},

	};

	let barChartContainer = document.querySelector("#column-chart");
	let barChart = barChartContainer && new ApexCharts(barChartContainer, barOptions);
	renderChart(barChart);

	// Pie Chart
	let pieOptions = {
		series: [44, 55, 41],
		labels: ['Fixed Servers', 'Down Servers', 'Running'],
		colors: ["#AB54DB", "#EF9A91", "#F1E6B9"],
		plotOptions: {
			pie: {
				expandOnClick: false,
				startAngle: 0,
				dataLabels: {
					enabled: false,
				},
				customScale: 1, // Adjust this value to control the series border radius
			},
			stroke: {
				width: 25, // Width of the stroke
				colors: ['transparent'], // Color of the stroke (use 'transparent' to make it invisible)
			},
		},
		chart: {
			height: '350px',
			type: 'donut',
		},
		responsive: [{
			breakpoint: 576,
			options: {
				chart: {
					height: '550px'
				}
			},
		}],
		legend: {
			show: true,
			position: "bottom",
			fontSize: '14px',
      		fontWeight: 500,
			formatter: function (seriesName, opts) {
				let data = opts.w.globals.seriesTotals[opts.seriesIndex];
				return seriesName + ":  " + data;
				// return `<div class="custom-legend-item">${seriesName} <span> ${data} </span></div>`;
			},
		},
		responsive: [{
			breakpoint: 480,
			options: {
				chart: {
					width: 200
				},
				legend: {
					position: 'bottom'
				}
			}
		}]
	};

	let pieChartContainer = document.querySelector("#pie-chart");
	let pieChart = pieChartContainer && new ApexCharts(pieChartContainer, pieOptions);
	renderChart(pieChart);


	// Summary Chart
	let summaryOptions = {
		series: [30, 34, 6, 30],
		labels: ['Ethereum', 'Litecoin', 'Ripple', 'Bitcoin'],
		colors: ["#00ADA3", "#374C98", "#23292F", "#FFBB54"],
		plotOptions: {
			pie: {
				expandOnClick: false,
				startAngle: 0,
				dataLabels: {
					enabled: false,
				},
				customScale: 1, // Adjust this value to control the series border radius
			},
			stroke: {
				width: 25, // Width of the stroke
				colors: ['transparent'], // Color of the stroke (use 'transparent' to make it invisible)
			},
		},
		chart: {
			height: '350px',
			type: 'donut',
		},
		responsive: [{
			breakpoint: 576,
			options: {
				chart: {
					height: '550px'
				}
			},
		}],
		legend: {
			show: true,
			position: "bottom",
			fontSize: '14px',
      		fontWeight: 500,
			formatter: function (seriesName, opts) {
				let data = opts.w.globals.seriesTotals[opts.seriesIndex];
				return seriesName + ":  " + data;
				// return `<div class="custom-legend-item">${seriesName} <span> ${data} </span></div>`;
			},
		},
		responsive: [{
			breakpoint: 480,
			options: {
				chart: {
					width: 200
				},
				legend: {
					position: 'bottom'
				}
			}
		}]
	};

	let summaryChartContainer = document.querySelector("#summary-chart");
	let summaryChart = summaryChartContainer && new ApexCharts(summaryChartContainer, summaryOptions);
	renderChart(summaryChart);

	// Stack Chart
	let stackOptions = {
		chart: {
			type: 'bar',
			height: 350,
			stacked: true,
			toolbar: {
				show: false,
			},
		},
		series: [
			{
				name: 'PRODUCT A',
				data: [2, 5, 1, 7, 2, 4, 1, 4],
				dataLabels: false,
			}, 
			{
				name: 'PRODUCT B',
				data: [1, 3, 2, 8, 3, 7, 3, 2],
				dataLabels: false,
			}, 
			{
				name: 'PRODUCT C',
				data: [1, 7, 5, 3, 2, 4, 5, 3],
				dataLabels: false,
			}
		], 
		xaxis: {
			type: "category",
			categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
			axisBorder: {
				show: false,
			},
			axisTicks: {
				show: false,
			},
			crosshairs: {
				show: false
			},
		},
		yaxis: {
			opposite: true,
			labels: {
				show: true,
				formatter: function (val) {
					return val + " AM";
				},
				offsetX: -17,
			},
			min: 0,
			max: 10,
			tickAmount: 5,
		},
		legend: {
			show: false,
		},
		grid: {
			show: false,
			padding: {
				left: -10,
				right: 0
			},
		},
		tooltip: {
			enabled: false,
		},
		dataLabels: {
			enabled: false,
		},
		plotOptions: {
			bar: {
				columnWidth: 18,
				borderRadius: 0
			}
		}
	};

	let stackChartContainer = document.querySelector("#stack-chart");
	let stackChart = stackChartContainer && new ApexCharts(stackChartContainer, stackOptions);
	renderChart(stackChart);

	// Income Chart
	let incomeOptions = {
		series: [{
			data: [40, 32, 45, 65, 23, 54, 23]
		}],
	
		chart: {
			height: 350,
			type: 'bar',
			toolbar: {
				show: false,
			}
		},
	
		colors: ["#1BD5FE"],
	
		fill: {
			type: "gradient",
			gradient: {
				type: "vertical",
				shadeIntensity: 1,
				opacityFrom: 1,
				opacityTo: 1,
				stops: [0, 100],
				gradientToColors: ["#216BDB"]
			}
		},
	
		plotOptions: {
			bar: {
				columnWidth: 50,
				borderRadius: 12,
			}
		},
	
		dataLabels: {
			enabled: false,
		},
	
		xaxis: {
			categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
			position: 'bottom',
			axisBorder: {
				show: false,
			},
			axisTicks: {
				show: false,
			},
			crosshairs: {
				show: false,
			},
			tooltip: {
				enabled: false,
			}
		},
	
		yaxis: {
			labels: {
				show: true,
				offsetX: 0
			},
			min: 0, // Set the min and max as actual category values.
			max: 70,
			tickAmount: 3,
		},
	
		grid: {
			show: true,
			padding: { left: 0, right: 0, top: 0, bottom: 0 },
		},
	
		tooltip: {
			enabled: true,
			custom: function ({ series, seriesIndex, dataPointIndex, w }) {
				// Calculate the percentage based on the max value
				let value = w.globals.series[seriesIndex][dataPointIndex]
				var maxValue = Math.max(...series[0]);
				var percentage = ((value / maxValue) * 10).toFixed(0);
				
				// Get the mouse position from the global variable or state
				var mouseX = window.mouseX || 0;
				var mouseY = window.mouseY || 0;
		  
				// Calculate the position of the tooltip above the bar
				var tooltipX = mouseX - 50;
				var tooltipY = mouseY - 30; // Adjust the offset as needed
		  
				return '<div class="custom-tooltip" style="left:' + tooltipX + 'px; top:' + tooltipY + 'px;">' +
				  '<span class="custom-tooltip__title">$' + percentage + '</span>' +
				  '<span class="custom-tooltip__subtitle">' + value + ' Visitors</span>' +
				  '</div>';
			},
		},
	};
	
	let incomeChartContainer = document.querySelector("#income-chart");
	let incomeChart = incomeChartContainer && new ApexCharts(incomeChartContainer, incomeOptions);
	renderChart(incomeChart);

	// Expense Chart
	let expenseOptions = {
		series: [{
			data: [40, 32, 45, 65, 23, 54, 23]
		}],
	
		chart: {
			height: 350,
			type: 'bar',
			toolbar: {
				show: false,
			},
		},
	
		colors: ["#FFBB54"],
	
		fill: {
			type: "gradient",
			gradient: {
				type: "vertical",
				shadeIntensity: 1,
				opacityFrom: 1,
				opacityTo: 1,
				stops: [0, 100],
				gradientToColors: ["#FF3300"]
			}
		},
	
		plotOptions: {
			bar: {
				columnWidth: 50,
				borderRadius: 12,
			}
		},
	
		dataLabels: {
			enabled: false,
		},
	
		xaxis: {
			categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
			position: 'bottom',
			axisBorder: {
				show: false,
			},
			axisTicks: {
				show: false,
			},
			crosshairs: {
				show: false,
			},
			tooltip: {
				enabled: false,
			}
		},
	
		yaxis: {
			labels: {
				show: true,
				offsetX: 0
			},
			min: 0, // Set the min and max as actual category values.
			max: 70,
			tickAmount: 3,
		},
	
		grid: {
			show: true,
			padding: { left: 0, right: 0, top: 0, bottom: 0 },
		},
	
		tooltip: {
			enabled: true,
			custom: function ({ series, seriesIndex, dataPointIndex, w }) {
				// Calculate the percentage based on the max value
				let value = w.globals.series[seriesIndex][dataPointIndex]
				var maxValue = Math.max(...series[0]);
				var percentage = ((value / maxValue) * 10).toFixed(0);
	
				// Get the mouse position from the global variable or state
				var mouseX = window.mouseX || 0;
				var mouseY = window.mouseY || 0;
		  
				// Calculate the position of the tooltip above the bar
				var tooltipX = mouseX - 50;
				var tooltipY = mouseY - 30; // Adjust the offset as needed
		  
				return '<div class="custom-tooltip" style="left:' + tooltipX + 'px; top:' + tooltipY + 'px;">' +
					'<span class="custom-tooltip__title">$' + percentage + '</span>' +
					'<span class="custom-tooltip__subtitle">' + value + ' Visitors</span>' +
					'</div>';
			},
		},
	};
	
	let expenseChartContainer = document.querySelector("#expense-chart");
	let expenseChart = expenseChartContainer && new ApexCharts(expenseChartContainer, expenseOptions);
	renderChart(expenseChart);



	if($("#chart-5").length){
		var options = {
			series: [80],
			chart: {
				height: 120,
				type: "radialBar",
			},
			plotOptions: {
				show: false,
				radialBar: {
					show: false,
					dataLabels: {
						show: false,
					}
				}
			},
			stroke: {
				width: 1, // Width of the stroke
				colors: ['transparent'], // Color of the stroke (use 'transparent' to make it invisible)
			},
			fill: {
				type: 'gradient',
				gradient: {
					shade: 'dark',
					type: 'horizontal',
					shadeIntensity: 1,
					gradientToColors: ['#0061FF'],
					inverseColors: true,
					opacityFrom: 1,
					opacityTo: .5,
					stops: [0, 100]
				}
			},
			labels: ["Median Ratio"]
		};
		var chart = new ApexCharts(document.querySelector("#chart-5"), options);
		renderChart(chart);
	};


	if($("#chart-6").length){
		var optionsTwo = {
			series: [50],
			chart: {
				height: 120,
				type: "radialBar",
			},
			plotOptions: {
			show: false,
			radialBar: {
				show: false,
				dataLabels: {
				show: false,
				}
			}
			},
			stroke: {
				width: 1, // Width of the stroke
				colors: ['transparent'], // Color of the stroke (use 'transparent' to make it invisible)
			},
			fill: {
				type: 'gradient',
				gradient: {
				shade: '#34A853',
				type: 'horizontal',
				shadeIntensity: 1,
				gradientToColors: ['#34A853'],
				inverseColors: true,
				opacityFrom: 1,
				opacityTo: 1,
				stops: [0, 100]
				}
			},
			labels: ["Median Ratio"]
		};
		var chart = new ApexCharts(document.querySelector("#chart-6"), optionsTwo);
		renderChart(chart);
	};

	if($("#chart-7").length){
		var optionsThree = {
			series: [70],
			chart: {
				height: 120,
				type: "radialBar",
			},
			plotOptions: {
				show: false,
				radialBar: {
					show: false,
					dataLabels: {
						show: false,
					}
				}
			},
			stroke: {
				width: 1, // Width of the stroke
				colors: ['transparent'], // Color of the stroke (use 'transparent' to make it invisible)
			},
			fill: {
				type: 'gradient',
				gradient: {
					shade: '#0364B8',
					type: 'horizontal',
					shadeIntensity: 1,
					gradientToColors: ['#0364B8'],
					inverseColors: true,
					opacityFrom: 1,
					opacityTo: 1,
					stops: [0, 100]
				}
			},
			labels: ["Median Ratio"]
		};
	
		var chart = new ApexCharts(document.querySelector("#chart-7"), optionsThree);
		renderChart(chart);
	};

	if($("#chart-8").length){
		var optionsFour = {
			series: [30],
			chart: {
				height: 120,
				type: "radialBar",
			},
			plotOptions: {
				show: false,
				radialBar: {
					show: false,
					dataLabels: {
					show: false,
					}
				}
			},
			stroke: {
				width: 1, // Width of the stroke
				colors: ['transparent'], // Color of the stroke (use 'transparent' to make it invisible)
			},
			fill: {
				type: 'gradient',
				gradient: {
					shade: '#8AD2F7',
					type: 'horizontal',
					shadeIntensity: 1,
					gradientToColors: ['#8AD2F7'],
					inverseColors: true,
					opacityFrom: 1,
					opacityTo: .5,
					stops: [0, 100]
				}
			},
			labels: ["Median Ratio"]
		};
		
		var chart = new ApexCharts(document.querySelector("#chart-8"), optionsFour);
		renderChart(chart);
	};


	// Kanban Board JS
	function initializeKanban() {
    const columns = ["one", "two", "three", "four", "five", "won"].map(id => document.getElementById(id)).filter(Boolean);
    if (!columns.length || typeof window.dragula !== "function") return;
    const drake = window.dragula(columns);
	
		drake.on('drag', function(el){
			el.classList.add('gu-transit');
		});
	
		drake.on('drop', function(el){
			el.classList.remove('gu-transit');
		});
    cleanups.push(() => drake.destroy());
  }
  initializeKanban();

  return () => {
    for (const dispose of cleanups.reverse()) dispose();
    document.body.classList.remove("overlay_active");
  };
};
