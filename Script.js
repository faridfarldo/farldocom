(function () {
  var menuToggle = document.getElementById("menuToggle");
  var mainMenu = document.getElementById("mainMenu");
  var dropdownToggles = document.querySelectorAll("[data-nav-dropdown]");
  var modalTriggers = document.querySelectorAll("[data-modal-open]");
  var modalCloseButtons = document.querySelectorAll("[data-modal-close]");
  var web3Forms = document.querySelectorAll(".web3-form");
  var activeModal = null;

  if (menuToggle && mainMenu) {
    menuToggle.addEventListener("click", function () {
      var isOpen = mainMenu.classList.contains("show");
      mainMenu.classList.toggle("show");
      menuToggle.setAttribute("aria-expanded", String(!isOpen));
    });
  }

  function closeDropdowns() {
    dropdownToggles.forEach(function (toggle) {
      var parent = toggle.closest(".nav-dropdown");

      if (!parent) {
        return;
      }

      parent.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  }

  dropdownToggles.forEach(function (toggle) {
    toggle.addEventListener("click", function (event) {
      var parent = toggle.closest(".nav-dropdown");
      var shouldOpen = parent && !parent.classList.contains("is-open");

      event.preventDefault();
      closeDropdowns();

      if (parent && shouldOpen) {
        parent.classList.add("is-open");
        toggle.setAttribute("aria-expanded", "true");
      }
    });
  });

  document.addEventListener("click", function (event) {
    if (!event.target.closest(".nav-dropdown")) {
      closeDropdowns();
    }
  });

  function slugifyHeading(text) {
    return text
      .toLowerCase()
      .replace(/[^\u0600-\u06FFa-z0-9\s-]/g, "")
      .trim()
      .replace(/\s+/g, "-");
  }

  function renderServicePage() {
    var article = document.getElementById("serviceArticleContent");
    var outline = document.getElementById("serviceOutlineList");
    var faqList = document.getElementById("serviceFaqList");

    if (!article || !outline || !faqList) {
      return;
    }

    var services = {
      "google-ads": {
        label: "گوگل ادز",
        title: "گوگل ادز بین‌المللی برای جذب بیمار آماده تصمیم",
        lead: "اگر می‌خواهی دقیقاً در لحظه‌ای دیده شوی که بیمار بین‌المللی دنبال درمان، کلینیک یا پزشک مناسب می‌گردد، این سرویس روی جذب تقاضای واقعی و قابل اندازه‌گیری تمرکز دارد.",
        sections: [
          {
            heading: "این سرویس دقیقاً چه مسئله‌ای را حل می‌کند؟",
            paragraphs: [
              "گوگل ادز زمانی موثر است که مخاطب از قبل مسئله‌اش را می‌شناسد و دنبال راه‌حل می‌گردد. در گردشگری سلامت این یعنی حضور در لحظه‌ای که بیمار بین‌المللی درمان، پزشک یا کلینیک را جست‌وجو می‌کند.",
              "تمرکز این سرویس فقط روی آوردن ترافیک نیست؛ هدف، ساختن مسیری روشن از سرچ تا ثبت لید و در نهایت رزرو است. به همین دلیل طراحی کمپین، پیام، صفحه فرود و ترکینگ باید از ابتدا در یک مسیر واحد چیده شوند."
            ],
            subSections: [
              {
                heading: "ارزش این سرویس برای برند شما",
                paragraphs: [
                  "مزیت اصلی گوگل ادز در نیت بالای کاربر است. یعنی کمپین مقابل کسی قرار می‌گیرد که همین حالا قصد بررسی درمان را دارد، نه مخاطبی که صرفاً در حال مرور محتواست.",
                  "برای همین این سرویس برای برندهایی مناسب است که می‌خواهند ورودی باکیفیت‌تری داشته باشند و بتوانند کیفیت لید را به‌صورت دقیق‌تری اندازه بگیرند."
                ]
              },
              {
                heading: "چه خروجی‌ای از اجرا انتظار می‌رود؟",
                paragraphs: [
                  "ساختار منظم کمپین، پیشنهاد روشن برای صفحه فرود، اتصال فرم و تماس به رهگیری و گزارش قابل اتکا از خروجی‌های اصلی این همکاری هستند.",
                  "در عمل این سرویس باید به تصمیم‌گیری بهتر درباره بودجه، بازار هدف و پیام تبلیغاتی کمک کند."
                ]
              }
            ]
          },
          {
            heading: "روند اجرای کار",
            paragraphs: [
              "کار از تحلیل بازار، زبان جست‌وجو، نوع درمان و ظرفیت واقعی پاسخ‌گویی شروع می‌شود. بعد ساختار کمپین و نیازهای صفحه فرود مشخص می‌شود و در نهایت داده‌ها برای بهینه‌سازی وارد چرخه تصمیم‌گیری می‌شوند."
            ],
            subSections: [
              {
                heading: "مرحله اول: تحلیل بازار و کلمات کلیدی",
                paragraphs: [
                  "در این مرحله کشور هدف، زبان، درمان‌های اولویت‌دار و کلمات کلیدی با نیت بالا بررسی می‌شوند تا کمپین بر اساس واقعیت بازار شروع شود."
                ]
              },
              {
                heading: "مرحله دوم: ساخت کمپین و لندینگ",
                paragraphs: [
                  "متن تبلیغ، ساختار گروه‌های تبلیغاتی و پیام صفحه فرود باید هماهنگ باشند تا کاربر بعد از کلیک دقیقاً همان چیزی را ببیند که انتظار دارد."
                ]
              },
              {
                heading: "مرحله سوم: رهگیری و بهینه‌سازی",
                paragraphs: [
                  "فرم، تماس، واتساپ یا CRM به کمپین متصل می‌شود تا کمپین فقط با هزینه سنجیده نشود و داده واقعی روی بهینه‌سازی اثر بگذارد."
                ]
              }
            ]
          }
        ],
        faq: [
          ["چه بودجه‌ای برای شروع مناسب است؟", "بودجه به بازار هدف، هزینه کلیک و تعداد درمان‌های اولویت‌دار بستگی دارد. بهتر است بودجه را بر اساس ظرفیت فروش و کیفیت لید تعریف کنیم."],
          ["آیا بدون صفحه فرود هم می‌شود شروع کرد؟", "بله، اما معمولاً نتیجه ضعیف‌تر است. صفحه فرود اختصاصی تقریباً همیشه نرخ تبدیل بهتری از هدایت ترافیک به صفحه اصلی دارد."],
          ["چه زمانی نتیجه اولیه دیده می‌شود؟", "معمولاً در چند روز اول داده اولیه جمع می‌شود و بعد از یکی دو چرخه بهینه‌سازی تصویر دقیق‌تری از کیفیت لید به دست می‌آید."]
        ]
      },
      "meta-ads": {
        label: "متا ادز",
        title: "متا ادز بین‌المللی برای ساخت تقاضا و جذب لید درمانی",
        lead: "برای سرویس‌هایی که نیاز به نمایش تصویری، اعتمادسازی سریع و تولید لید از بازارهای بین‌المللی دارند، متا ادز یکی از موثرترین کانال‌هاست.",
        sections: [
          {
            heading: "متا ادز در این صنعت چه مسئله‌ای را حل می‌کند؟",
            paragraphs: [
              "در بسیاری از درمان‌ها، کاربر قبل از اقدام به زمان بیشتری برای دیدن نمونه، تصویر، روایت و اعتمادسازی نیاز دارد. متا ادز دقیقاً برای همین نقطه موثر است.",
              "این سرویس کمک می‌کند پیام برند در قالب ویدیو، تصویر و فرم به مخاطب درست برسد و از مرحله توجه به سمت ثبت درخواست حرکت کند."
            ],
            subSections: [
              {
                heading: "چرا این سرویس مهم است؟",
                paragraphs: [
                  "برای خدماتی که صرفاً با جست‌وجوی مستقیم پیش نمی‌روند، متا ادز می‌تواند نقش ساخت تقاضا و آماده‌سازی بازار را بازی کند.",
                  "اگر محتوای خلاقه، روایت بیمار یا مزیت درمانی روشن داشته باشی، این کانال می‌تواند لیدهای باکیفیتی بسازد."
                ]
              }
            ]
          },
          {
            heading: "روند اجرای کار",
            paragraphs: [
              "در این سرویس شناخت بازار، طراحی خلاقه و تحلیل کیفیت لید باید کنار هم جلو بروند. بدون این هماهنگی، کمپین صرفاً خرج می‌کند اما تصویر روشنی از ارزش واقعی نمی‌دهد."
            ],
            subSections: [
              {
                heading: "مرحله اول: شناخت پرسونای درمانی",
                paragraphs: ["سن، دغدغه، کشور هدف، نوع درمان و زبان مخاطب مشخص می‌شود تا کمپین از ابتدا برای مخاطب واقعی ساخته شود."]
              },
              {
                heading: "مرحله دوم: ساخت خلاقه و فرم",
                paragraphs: ["پیام، تصویر، ویدیو، لیدفرم یا مسیر پیام‌دهی طوری طراحی می‌شود که اصطکاک کاربر کمتر و نرخ اقدام بیشتر شود."]
              },
              {
                heading: "مرحله سوم: تحلیل و اصلاح",
                paragraphs: ["فقط قیمت لید بررسی نمی‌شود؛ کیفیت پیگیری، سرعت پاسخ و احتمال رزرو هم باید وارد تصمیم‌گیری شوند."]
              }
            ]
          }
        ],
        faq: [
          ["آیا متا ادز برای همه خدمات درمانی مناسب است؟", "نه همیشه. برای برخی درمان‌ها گوگل ادز نیت بالاتری دارد، اما برای خدماتی که نیاز به معرفی و اعتمادسازی دارند متا ادز بسیار خوب عمل می‌کند."],
          ["آیا محتوای پیج هم مهم است؟", "بله. وقتی کاربر روی تبلیغ کلیک می‌کند، پیج یا لندینگ باید اعتبار برند را تایید کند."],
          ["آیا بازارهای مختلف را باید جدا اجرا کرد؟", "در اغلب موارد بله. هم زبان، هم پیام و هم خلاقه بهتر است برای هر بازار جدا تنظیم شود."]
        ]
      },
      "tiktok-ads": {
        label: "تیک‌تاک ادز",
        title: "تیک‌تاک ادز برای آگاهی‌سازی سریع و ورودی‌های تازه بازار",
        lead: "وقتی بخواهی در بازارهای جوان‌تر، پرتحرک‌تر و ویدیومحور دیده شوی، تیک‌تاک می‌تواند کانال رشد متفاوتی برای برند گردشگری سلامت باشد.",
        sections: [
          {
            heading: "این سرویس کجا باید استفاده شود؟",
            paragraphs: [
              "تیک‌تاک بیشتر برای جایی مناسب است که هنوز بازار تو را کامل نمی‌شناسد و نیاز به جلب توجه اولیه، ساخت Awareness و تولید علاقه اولیه وجود دارد.",
              "نقش این سرویس معمولاً مکمل است؛ یعنی در کنار گوگل یا متا می‌تواند ورودی‌های تازه‌تری به قیف فروش اضافه کند."
            ],
            subSections: [
              {
                heading: "مزیت اصلی تیک‌تاک چیست؟",
                paragraphs: [
                  "سرعت تست خلاقه و قدرت ویدیو در جلب توجه مهم‌ترین مزیت این کانال است. اگر پیام برند درست بسته‌بندی شود، می‌توان خیلی سریع‌تر وارد ذهن مخاطب شد."
                ]
              }
            ]
          },
          {
            heading: "روند اجرای کار",
            paragraphs: [
              "در این سرویس ابتدا بازار و زاویه روایت مشخص می‌شود، بعد چند ایده ویدیویی تست می‌شوند و در نهایت بودجه روی زاویه‌های برنده متمرکز می‌شود."
            ],
            subSections: [
              {
                heading: "تعریف مخاطب و بازار",
                paragraphs: ["مشخص می‌شود روی کدام کشور، سن و دغدغه درمانی تمرکز داریم تا محتوا از ابتدا هدفمند باشد."]
              },
              {
                heading: "طراحی هوک و سناریو",
                paragraphs: ["سه ثانیه اول ویدیو و زاویه روایت باید طوری طراحی شوند که کاربر را نگه دارند و او را به اقدام نزدیک کنند."]
              },
              {
                heading: "تست و مقیاس‌پذیری",
                paragraphs: ["چند نسخه هم‌زمان اجرا می‌شود تا الگوهای بهتر شناسایی و بودجه به‌درستی توزیع شود."]
              }
            ]
          }
        ],
        faq: [
          ["آیا تیک‌تاک مستقیماً لید می‌دهد؟", "گاهی بله، اما در بسیاری پروژه‌ها نقش آن بیشتر ساخت آگاهی و آماده‌سازی مخاطب برای کانال‌های دیگر است."],
          ["برای این سرویس حتماً ویدیو لازم است؟", "بله. بدون محتوای ویدیویی متناسب، این سرویس عملاً مزیت خودش را از دست می‌دهد."],
          ["برای چه درمان‌هایی مناسب‌تر است؟", "برای درمان‌هایی که روایت، تجربه بیمار و جذابیت بصری دارند معمولاً بهتر جواب می‌دهد."]
        ]
      },
      "vk-yandex": {
        label: "VK و Yandex",
        title: "تبلیغات VK و Yandex برای بازار روس‌زبان",
        lead: "اگر بازار هدف تو روسیه یا مخاطبان روس‌زبان هستند، باید کانال‌هایی را انتخاب کنی که واقعاً در رفتار روزمره آن‌ها حضور دارند.",
        sections: [
          {
            heading: "چرا برای این بازار به سرویس اختصاصی نیاز است؟",
            paragraphs: [
              "برای بازار روس‌زبان صرفاً ترجمه کمپین عمومی کافی نیست. رسانه، پیام، لحن و حتی شیوه پیگیری باید با واقعیت همان بازار هماهنگ شود.",
              "این سرویس برای ساختن حضور دقیق‌تر در اکوسیستم رسانه‌ای مخاطب روس‌زبان طراحی شده است."
            ],
            subSections: [
              {
                heading: "ارزش اصلی این رویکرد",
                paragraphs: [
                  "وقتی رسانه درست انتخاب شود، پیام هم دقیق‌تر دریافت می‌شود و کیفیت لید هدر نمی‌رود. این سرویس کمک می‌کند بودجه در رسانه‌ای صرف شود که مخاطب واقعاً در آن حضور دارد."
                ]
              }
            ]
          },
          {
            heading: "روند اجرای کار",
            paragraphs: [
              "ابتدا بازار و زیرساخت پاسخ‌گویی بررسی می‌شود، بعد پیام بومی طراحی می‌شود و در نهایت رسانه و مسیر دریافت لید اجرا و پایش می‌شود."
            ],
            subSections: [
              {
                heading: "تحلیل مخاطب روس‌زبان",
                paragraphs: ["کشور، زبان، حساسیت‌های ارتباطی و مدل تصمیم‌گیری مخاطب روشن می‌شود."]
              },
              {
                heading: "طراحی پیام و صفحه بومی",
                paragraphs: ["پیام تبلیغ و صفحه مقصد باید متناسب با انتظار بازار هدف تنظیم شوند، نه صرفاً ترجمه کلمه‌به‌کلمه."]
              },
              {
                heading: "اجرا و پایش کیفیت لید",
                paragraphs: ["بعد از اجرا، کیفیت رزرو و نرخ تبدیل هم‌زمان با حجم لید سنجیده می‌شود."]
              }
            ]
          }
        ],
        faq: [
          ["آیا این بازار نیاز به صفحه فرود جدا دارد؟", "در بیشتر موارد بله. صفحه فرود بومی‌شده اعتماد و نرخ تبدیل را بهتر می‌کند."],
          ["آیا زبان روسی در پیگیری لازم است؟", "اگر بازار اصلی روس‌زبان است، پاسخ‌گویی به همان زبان یک مزیت جدی است."],
          ["می‌شود این سرویس را کنار گوگل ادز اجرا کرد؟", "بله، و معمولاً ترکیب کانال‌ها نتیجه کامل‌تری می‌دهد."]
        ]
      },
      "crm-optimization": {
        label: "CRM",
        title: "بهینه‌سازی CRM بین‌المللی برای پیگیری دقیق لیدها",
        lead: "اگر لید وارد می‌شود اما بخشی از آن در مسیر تماس، پیگیری و بستن فروش از دست می‌رود، مشکل اغلب از CRM و فرآیندهای بعد از جذب شروع می‌شود.",
        sections: [
          {
            heading: "این سرویس چه چیزی را بهتر می‌کند؟",
            paragraphs: [
              "بهینه‌سازی CRM یعنی نظم‌دادن به مسیر ورود لید، تخصیص به تیم، زمان پاسخ‌گویی، ثبت فعالیت‌ها و گزارش‌گیری.",
              "هدف این است که هیچ لید باکیفیتی بی‌صاحب نماند و مدیر مجموعه بتواند تصویر دقیقی از کل قیف فروش ببیند."
            ],
            subSections: [
              {
                heading: "ارزش اصلی برای مجموعه",
                paragraphs: [
                  "وقتی داده‌ها استاندارد ثبت شوند و پیگیری‌ها ساختار داشته باشند، هم مارکتینگ بهتر تصمیم می‌گیرد، هم فروش دقیق‌تر عمل می‌کند."
                ]
              }
            ]
          },
          {
            heading: "روند اجرای کار",
            paragraphs: [
              "ابتدا وضعیت فعلی CRM و رفتار تیم بررسی می‌شود، بعد Pipeline و فیلدها بازطراحی می‌شوند و در نهایت اتوماسیون و آموزش روی همان ساختار اجرا می‌شود."
            ],
            subSections: [
              {
                heading: "ممیزی وضعیت فعلی",
                paragraphs: ["نقطه‌های شکست در ثبت، تخصیص و Follow-up شناسایی می‌شوند."]
              },
              {
                heading: "طراحی ساختار جدید",
                paragraphs: ["مرحله‌ها، مالک لید، فیلدها و گزارش‌ها بر اساس واقعیت عملیاتی مجموعه تعریف می‌شوند."]
              },
              {
                heading: "یکپارچه‌سازی و آموزش",
                paragraphs: ["فرم‌ها، تماس‌ها و ابزارهای دیگر به سیستم وصل می‌شوند و تیم با فرآیند جدید کار می‌کند."]
              }
            ]
          }
        ],
        faq: [
          ["اگر الان CRM نداریم از صفر می‌شود شروع کرد؟", "بله. اتفاقاً این سرویس برای راه‌اندازی از صفر هم مناسب است و ساختار را از ابتدا درست می‌چیند."],
          ["اگر CRM داریم ولی تیم از آن استفاده نمی‌کند چه؟", "در این حالت مسئله فقط ابزار نیست؛ باید فرآیند و تجربه استفاده برای تیم هم بازطراحی شود."],
          ["آیا گزارش درآمد هم می‌شود ساخت؟", "بله، اگر داده فروش به‌درستی ثبت شود می‌توان گزارش‌های کامل‌تری هم ساخت."]
        ]
      },
      "website-design": {
        label: "طراحی وب‌سایت",
        title: "طراحی وب‌سایت گردشگری سلامت با تمرکز بر نرخ تبدیل",
        lead: "این سرویس فقط ساختن یک سایت زیبا نیست؛ هدف، ساختن یک وب‌سایت چندزبانه است که اعتماد ایجاد کند، سوال‌های بیمار را جواب بدهد و او را به اقدام نزدیک‌تر کند.",
        sections: [
          {
            heading: "یک سایت خوب در این صنعت چه کاری انجام می‌دهد؟",
            paragraphs: [
              "سایت در گردشگری سلامت باید هم‌زمان چند نقش داشته باشد: معرفی درمان، نمایش اعتبار پزشک یا کلینیک، کاهش ابهام کاربر و هدایت او به اقدام واضح مثل فرم، تماس یا واتساپ.",
              "برای همین ساختار اطلاعات، تجربه کاربری و جای‌گذاری CTA از ظاهر صرف مهم‌تر می‌شوند."
            ],
            subSections: [
              {
                heading: "چرا این سرویس مهم است؟",
                paragraphs: [
                  "اگر سایت فقط ویترین باشد ولی نتواند کاربر را به تصمیم نزدیک کند، در عمل بخشی از هزینه مارکتینگ هدر می‌رود. این سرویس سایت را به ابزار فروش تبدیل می‌کند."
                ]
              }
            ]
          },
          {
            heading: "روند اجرای کار",
            paragraphs: [
              "کار از تحلیل نیاز و معماری صفحات شروع می‌شود، بعد ساختار محتوا و مسیر کاربر طراحی می‌شود و در پایان پیاده‌سازی، بهینه‌سازی و اتصال به ابزارهای بازاریابی انجام می‌گیرد."
            ],
            subSections: [
              {
                heading: "معماری محتوا و صفحات",
                paragraphs: ["صفحات اصلی، لندینگ‌ها و CTA ها بر اساس نیاز بازار و مدل جذب بیمار مشخص می‌شوند."]
              },
              {
                heading: "طراحی تجربه کاربر",
                paragraphs: ["ترتیب سکشن‌ها، اعتمادسازی، فرم‌ها و مسیر اقدام طوری طراحی می‌شود که اصطکاک کاربر کمتر شود."]
              },
              {
                heading: "پیاده‌سازی و اتصال به مارکتینگ",
                paragraphs: ["نسخه نهایی با تمرکز بر ریسپانسیو بودن، سرعت و رهگیری ساخته می‌شود."]
              }
            ]
          }
        ],
        faq: [
          ["آیا این سرویس شامل تولید محتوا هم می‌شود؟", "بسته به مدل همکاری می‌تواند شامل ساختار محتوا، بازنویسی یا فقط طراحی و پیاده‌سازی باشد."],
          ["چند صفحه برای شروع کافی است؟", "معمولاً با صفحات اصلی، چند لندینگ سرویس و صفحه تماس می‌شود شروع کرد و بعد توسعه داد."],
          ["آیا سایت باید چندزبانه باشد؟", "اگر بازار هدف بین‌المللی داری، تقریباً بله. بهتر است زبان‌ها و صفحه‌ها از ابتدا اصولی طراحی شوند."]
        ]
      },
      "influencer-marketing": {
        label: "اینفلوئنسر مارکتینگ",
        title: "اینفلوئنسر مارکتینگ بین‌المللی برای اعتمادسازی و ورود نرم به بازار",
        lead: "وقتی خدمت درمانی نیاز به اعتمادسازی اجتماعی دارد، همکاری با اینفلوئنسر درست می‌تواند مسیر شناخت برند را کوتاه‌تر کند.",
        sections: [
          {
            heading: "این سرویس چه نقشی در رشد برند دارد؟",
            paragraphs: [
              "در گردشگری سلامت، انتخاب اینفلوئنسر نباید صرفاً بر اساس فالوئر باشد. مهم‌تر از آن تناسب مخاطب، نوع اعتبار و اثرگذاری واقعی روی تصمیم مخاطب است.",
              "این سرویس برای ساختن همکاری‌هایی طراحی شده که علاوه بر دیده‌شدن، بتوان اثر آن‌ها را سنجید و در مسیر فروش از آن استفاده کرد."
            ],
            subSections: [
              {
                heading: "چرا این رویکرد مهم است؟",
                paragraphs: [
                  "وقتی اینفلوئنسر با مخاطب درست، پیام درست و CTA روشن انتخاب شود، برند زودتر اعتماد می‌گیرد و ورودی‌های باکیفیت‌تری به دست می‌آورد."
                ]
              }
            ]
          },
          {
            heading: "روند اجرای کار",
            paragraphs: [
              "در این سرویس ابتدا هدف همکاری مشخص می‌شود، بعد اینفلوئنسرهای مناسب ارزیابی می‌شوند و در نهایت سناریوی انتشار و سنجش عملکرد طراحی می‌شود."
            ],
            subSections: [
              {
                heading: "تعریف هدف کمپین",
                paragraphs: ["مشخص می‌شود که تمرکز روی اعتمادسازی، Awareness یا جذب لید است."]
              },
              {
                heading: "انتخاب و ارزیابی اینفلوئنسر",
                paragraphs: ["هم تناسب بازار و هم سبک روایت بررسی می‌شود تا انتخاب بر اساس فیت واقعی باشد."]
              },
              {
                heading: "طراحی سناریو و اندازه‌گیری",
                paragraphs: ["پیام، CTA و مدل سنجش نتیجه از قبل طراحی می‌شود تا اثر همکاری قابل ارزیابی بماند."]
              }
            ]
          }
        ],
        faq: [
          ["آیا اینفلوئنسر مارکتینگ مستقیماً فروش می‌سازد؟", "گاهی بله، اما در بسیاری موارد نقش اصلی آن اعتمادسازی و آماده‌کردن بازار برای کانال‌های بعدی است."],
          ["با چند اینفلوئنسر باید شروع کرد؟", "معمولاً بهتر است با تعداد محدود اما انتخاب‌شده شروع شود تا کیفیت همکاری و نتایج روشن بماند."],
          ["چه نوع محتوایی بهتر جواب می‌دهد؟", "محتوایی که تجربه، توضیح واقعی و CTA واضح داشته باشد معمولاً موثرتر است."]
        ]
      },
      "call-center": {
        label: "کال سنتر",
        title: "راه‌اندازی کال سنتر و تیم فروش حرفه‌ای برای بستن لیدها",
        lead: "اگر ورودی لید داری اما سیستم پاسخ‌گویی منظم، سریع و قابل سنجش نداری، بخش بزرگی از فرصت فروش از همین‌جا از دست می‌رود.",
        sections: [
          {
            heading: "این سرویس چه تاثیری روی فروش دارد؟",
            paragraphs: [
              "در بازار گردشگری سلامت، فاصله بین ثبت فرم و اولین تماس می‌تواند تعیین‌کننده باشد. طراحی درست تیم پاسخ‌گویی، اسکریپت و Follow-up مستقیماً روی نرخ تبدیل اثر می‌گذارد.",
              "این سرویس برای ساخت یا بازطراحی همین بخش طراحی شده تا فروش از حالت سلیقه‌ای خارج و قابل مدیریت شود."
            ],
            subSections: [
              {
                heading: "چرا برای مجموعه مهم است؟",
                paragraphs: [
                  "حتی بهترین کمپین هم اگر به سیستم پاسخ‌گویی درست نرسد، بازدهی کامل نمی‌سازد. کال سنتر خوب کیفیت ورودی را به رزرو نزدیک‌تر می‌کند."
                ]
              }
            ]
          },
          {
            heading: "روند اجرای کار",
            paragraphs: [
              "ابتدا فرایند فعلی بررسی می‌شود، بعد ساختار تیم و استاندارد پیگیری تعریف می‌شود و در نهایت آموزش و پایش داده‌ها انجام می‌گیرد."
            ],
            subSections: [
              {
                heading: "ممیزی فرایند فعلی",
                paragraphs: ["ضعف‌های زمان پاسخ، اسکریپت و پیگیری مشخص می‌شود."]
              },
              {
                heading: "طراحی ساختار و SLA",
                paragraphs: ["نقش‌ها، مراحل پیگیری و شاخص‌های عملکرد بر اساس ظرفیت تیم تنظیم می‌شوند."]
              },
              {
                heading: "آموزش و بازبینی",
                paragraphs: ["تیم با استانداردهای جدید شروع به کار می‌کند و بعد عملکرد با داده واقعی اصلاح می‌شود."]
              }
            ]
          }
        ],
        faq: [
          ["اگر تیم فروش داریم، باز هم این سرویس لازم است؟", "اگر سیستم فعلی ساختارمند و قابل سنجش نیست، بله. اغلب مسئله کمبود نیرو نیست، بلکه نبود فرآیند است."],
          ["آیا اسکریپت تماس هم طراحی می‌شود؟", "بله، معمولاً بخشی از خروجی این سرویس طراحی چارچوب تماس و Follow-up است."],
          ["این سرویس بدون CRM هم جواب می‌دهد؟", "تا حدی بله، اما بهترین نتیجه زمانی است که با CRM یکپارچه اجرا شود."]
        ]
      }
    };

    var serviceSlugs = {
      gad: "google-ads",
      "google-ads": "google-ads",
      "meta-ads": "meta-ads",
      mad: "meta-ads",
      "tiktok-ads": "tiktok-ads",
      tad: "tiktok-ads",
      "vk-yandex": "vk-yandex",
      crm: "crm-optimization",
      "crm-optimization": "crm-optimization",
      "website-design": "website-design",
      website: "website-design",
      "influencer-marketing": "influencer-marketing",
      influencer: "influencer-marketing",
      "call-center": "call-center",
      callcenter: "call-center"
    };

    var fallbackKey = "website-design";
    var params = new URLSearchParams(window.location.search);
    var serviceKey = params.get("service");
    var pathParts = window.location.pathname.split("/").filter(Boolean);
    var lastPart = pathParts[pathParts.length - 1] || "";
    var slugCandidate = lastPart === "index.html" ? pathParts[pathParts.length - 2] || "" : lastPart.replace(/\.html$/i, "");
    var slugKey = serviceSlugs[slugCandidate];
    var activeKey = services[serviceKey] ? serviceKey : (services[slugKey] ? slugKey : fallbackKey);
    var service = services[activeKey];

    function setText(id, value) {
      var node = document.getElementById(id);

      if (node) {
        node.textContent = value;
      }
    }

    function renderArticle(sections) {
      article.innerHTML = sections.map(function (section) {
        var sectionId = slugifyHeading(section.heading);
        var sectionHtml = '<section id="' + sectionId + '"><h2>' + section.heading + '</h2>';

        section.paragraphs.forEach(function (paragraph) {
          sectionHtml += "<p>" + paragraph + "</p>";
        });

        if (section.subSections) {
          section.subSections.forEach(function (subSection) {
            var subId = slugifyHeading(subSection.heading);
            sectionHtml += '<h3 id="' + subId + '">' + subSection.heading + "</h3>";

            subSection.paragraphs.forEach(function (paragraph) {
              sectionHtml += "<p>" + paragraph + "</p>";
            });
          });
        }

        sectionHtml += "</section>";
        return sectionHtml;
      }).join("");
    }

    function renderOutline() {
      var headings = article.querySelectorAll("h2, h3");

      outline.innerHTML = Array.prototype.map.call(headings, function (heading) {
        if (!heading.id) {
          heading.id = slugifyHeading(heading.textContent);
        }

        return '<li><a href="#' + heading.id + '">' + heading.textContent + "</a></li>";
      }).join("");
    }

    function renderFaq(items) {
      faqList.innerHTML = items.map(function (item, index) {
        return '<details class="service-faq__item"' + (index === 0 ? " open" : "") + '><summary>' + item[0] + "</summary><p>" + item[1] + "</p></details>";
      }).join("");
    }

    document.title = service.title + " | Farldo";
    setText("breadcrumbService", service.title);
    setText("serviceTitle", service.title);
    setText("serviceLead", service.lead);
    renderArticle(service.sections);
    renderOutline();
    renderFaq(service.faq);
  }

  renderServicePage();

  function clearFormStatus(container) {
    if (!container) {
      return;
    }

    var status = container.querySelector(".form-status");

    if (!status) {
      return;
    }

    status.textContent = "";
    status.classList.remove("is-success", "is-error");
  }

  function openModal(modal) {
    if (!modal) {
      return;
    }

    clearFormStatus(modal);
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    activeModal = modal;
  }

  function closeModal(modal) {
    if (!modal) {
      return;
    }

    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    activeModal = null;
  }

  modalTriggers.forEach(function (trigger) {
    trigger.addEventListener("click", function () {
      var modalId = trigger.getAttribute("data-modal-open");
      openModal(document.getElementById(modalId));
    });
  });

  modalCloseButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      closeModal(button.closest(".site-modal"));
    });
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      closeDropdowns();
    }

    if (event.key === "Escape" && activeModal) {
      closeModal(activeModal);
    }
  });

  function setFormLoading(form, isLoading) {
    var submitButton = form.querySelector('button[type="submit"]');
    var fields = form.querySelectorAll("input:not([type=\"hidden\"]):not(.form-botcheck), select, textarea, button");

    fields.forEach(function (field) {
      field.disabled = isLoading;
    });

    if (submitButton) {
      submitButton.textContent = isLoading
        ? "\u062f\u0631 \u062d\u0627\u0644 \u0627\u0631\u0633\u0627\u0644..."
        : submitButton.getAttribute("data-default-text");
    }
  }

  function updateFormStatus(form, message, type) {
    var status = form.querySelector(".form-status");

    if (!status) {
      return;
    }

    status.textContent = message || "";
    status.classList.remove("is-success", "is-error");

    if (type) {
      status.classList.add(type === "success" ? "is-success" : "is-error");
    }
  }

  web3Forms.forEach(function (form) {
    var submitButton = form.querySelector('button[type="submit"]');

    if (submitButton && !submitButton.getAttribute("data-default-text")) {
      submitButton.setAttribute("data-default-text", submitButton.textContent);
    }

    form.addEventListener("submit", function (event) {
      event.preventDefault();
      clearFormStatus(form);
      var formData = new FormData(form);
      setFormLoading(form, true);

      fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      })
        .then(function (response) {
          return response.json();
        })
        .then(function (result) {
          if (result.success) {
            updateFormStatus(
              form,
              form.getAttribute("data-success-message") || "\u0641\u0631\u0645 \u0628\u0627 \u0645\u0648\u0641\u0642\u06cc\u062a \u0627\u0631\u0633\u0627\u0644 \u0634\u062f.",
              "success"
            );

            if (form.getAttribute("data-reset-on-success") === "true") {
              form.reset();
            }

            if (form.getAttribute("data-close-on-success") === "true") {
              setTimeout(function () {
                closeModal(form.closest(".site-modal"));
              }, 900);
            }

            return;
          }

          updateFormStatus(
            form,
            result.message || "\u0627\u0631\u0633\u0627\u0644 \u0641\u0631\u0645 \u0646\u0627\u0645\u0648\u0641\u0642 \u0628\u0648\u062f. \u062f\u0648\u0628\u0627\u0631\u0647 \u062a\u0644\u0627\u0634 \u06a9\u0646\u06cc\u062f.",
            "error"
          );
        })
        .catch(function () {
          updateFormStatus(
            form,
            "\u0627\u0631\u0633\u0627\u0644 \u0641\u0631\u0645 \u0627\u0646\u062c\u0627\u0645 \u0646\u0634\u062f. \u0627\u062a\u0635\u0627\u0644 \u0627\u06cc\u0646\u062a\u0631\u0646\u062a \u06cc\u0627 \u062a\u0646\u0638\u06cc\u0645\u0627\u062a \u0641\u0631\u0645 \u0631\u0627 \u0628\u0631\u0631\u0633\u06cc \u06a9\u0646\u06cc\u062f.",
            "error"
          );
        })
        .finally(function () {
          setFormLoading(form, false);
        });
    });
  });
})();
