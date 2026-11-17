const printButton = document.querySelector('#print-leaflet');
printButton.addEventListener('click', () => window.print());
printButton.hidden = false;

const russianTranslations = {
  'anaphylaxis.html': {
    eyebrow: 'Аллергии и дыхание · Памятка школы', title: 'Тяжёлая аллергическая реакция',
    intro: 'У вашего ребёнка были признаки возможной аллергической реакции. Тяжёлая реакция требует неотложной помощи в больнице, даже если симптомы улучшились.',
    what: 'Что мы сделали', note: 'Сотрудники школы могут отметить оказанную помощь на распечатанной памятке.',
    actions: ['Позвонили по номеру 112 и сообщили о подозрении на анафилаксию.', 'Ввели адреналин с помощью автоинъектора.', 'Оставались рядом с ребёнком и наблюдали за его дыханием.'],
    home: 'Уход дома', homeLists: [['Положите ребёнка и не позволяйте ему вставать.', 'Если трудно дышать, ребёнок может слегка приподнять плечи или медленно сесть.', 'Не позволяйте ему вставать или ходить, даже если ему стало лучше.', 'Если через пять минут симптомы не улучшились, при наличии используйте второй автоинъектор.', 'Следуйте инструкции к устройству и сообщите бригаде скорой помощи время каждой дозы.'], ['Ребёнку нужна оценка в больнице, даже если ему стало лучше.', 'После этого передайте школе обновлённый план лечения аллергии и проверьте наличие назначенных запасных автоинъекторов и срок их годности.']],
    homeHeadings: ['После реакции'], red: 'Опасные признаки', redParagraphs: [], redLists: [['Немедленно используйте автоинъектор адреналина ребёнка, если он есть, и позвоните по номеру 112.', 'Скажите: «подозрение на анафилаксию». Следите за внезапным отёком горла или языка, затруднённым дыханием или глотанием, слабостью, обмяканием или потерей сознания.','Также может появиться сыпь.']]
  },
  'asthma.html': {
    eyebrow: 'Аллергии и дыхание · Памятка школы', title: 'Приступ астмы',
    intro: 'У вашего ребёнка были симптомы со стороны дыхания, которые могут быть связаны с астмой. Следуйте его плану действий при астме и организуйте наблюдение после приступа.',
    what: 'Что мы сделали', note: 'Сотрудники школы могут отметить оказанную помощь на распечатанной памятке.',
    actions: ['Помогли ребёнку сесть прямо и оставались рядом.', 'Помогли использовать назначенный препарат для снятия приступа.', 'Следовали плану действий при астме и организовали дальнейшую помощь.'],
    home: 'Уход дома', homeLists: [['Помогите ребёнку сесть прямо и оставайтесь рядом.', 'Используйте назначенный препарат для снятия приступа согласно плану действий при астме.', 'Используйте спейсер, если это предусмотрено инструкцией.', 'Сообщите бригаде скорой помощи, какое лекарство и когда было дано.'], ['Организуйте осмотр врача в течение двух дней после приступа, даже если ребёнок чувствует себя хорошо.', 'Проверьте, что в школе есть актуальный план действий при астме и известно, где находятся ингалятор и спейсер.']],
    homeHeadings: ['После приступа астмы'], red: 'Опасные признаки', redParagraphs: [], redLists: [['Позвоните по номеру 112, если ребёнку трудно дышать, ему становится хуже, во время приступа нет ингалятора для снятия приступа или состояние не улучшается после максимального лечения по его плану действий при астме.']]
  },
  'bites-and-stings.html': {
    eyebrow: 'Аллергии и дыхание · Памятка школы', title: 'Укусы и ужаления насекомых',
    intro: 'Сегодня вашего ребёнка укусило или ужалило насекомое. Небольшой отёк и зуд в области укуса встречаются часто. Следите за признаками аллергии и инфекции.',
    what: 'Что мы сделали', note: 'Сотрудники школы могут отметить оказанную помощь на распечатанной памятке.',
    actions: ['Осмотрели место укуса или ужаления.', 'Промыли участок водой с мылом.', 'Приложили холодный компресс, обёрнутый тканью.'],
    home: 'Уход дома', homeLists: [['Если в коже осталось жало пчелы, соскоблите его в сторону.', 'Промойте участок водой с мылом.', 'Для уменьшения отёка и зуда приложите холодный компресс, обёрнутый тканью.'], ['Небольшой отёк и зуд в области укуса встречаются часто. Обратитесь за медицинской помощью, если участок становится всё более горячим, болезненным или отёчным, появляется гной или у ребёнка поднимается температура.', 'Сообщите врачу, если ребёнка укусил клещ и появилась распространяющаяся круглая сыпь.']],
    homeHeadings: ['Как заметить признаки инфекции'], red: 'Опасные признаки', redParagraphs: [], redLists: [['Позвоните по номеру 112 при затруднённом дыхании, отёке губ или языка либо потере сознания.', 'Срочно обратитесь за помощью при ужалении во рту или горле, рядом с глазом или после нескольких ужалений.']]
  },
  'burns-and-scalds.html': {
    eyebrow: 'Травмы · Памятка школы', title: 'Ожоги и ошпаривания',
    intro: 'Сегодня ваш ребёнок получил ожог или ошпаривание. Размер, глубина, место и причина ожога помогают определить необходимую помощь.',
    what: 'Что мы сделали', note: 'Сотрудники школы могут отметить оказанную помощь на распечатанной памятке.',
    actions: ['Начали охлаждать ожог проточной водой.', 'Сняли свободную одежду или украшения рядом с ожогом.', 'Накрыли охлаждённый ожог или организовали медицинскую помощь.'],
    home: 'Уход дома', homeLists: [['Охлаждайте термический ожог прохладной проточной водой в течение 20 минут.', 'Осторожно снимите свободную одежду или украшения рядом с ожогом; прилипший материал оставьте на месте.', 'Сохраняйте остальные части тела ребёнка в тепле.', 'После охлаждения можно свободно накрыть ожог пищевой плёнкой до получения помощи. Не оборачивайте конечность.', 'Не наносите на ожог лёд, кремы или масла и не используйте липкие повязки.'], ['Не вскрывайте волдыри.', 'Следуйте полученным инструкциям по перевязке.', 'Обратитесь за советом, если ожог ухудшается или вы беспокоитесь о его заживлении.']],
    homeHeadings: ['Уход за небольшим ожогом после охлаждения'], red: 'Опасные признаки', redParagraphs: [], redLists: [['Немедленно обратитесь за помощью при очень большом или глубоком ожоге, ожоге лица, половых органов или ягодиц, а также при ожоге химическим веществом или электричеством.', 'Позвоните по номеру 112 при затруднённом дыхании после пожара или вдыхания дыма.', 'Срочно обратитесь за медицинской помощью, если вы не уверены в тяжести ожога.']]
  },
  'cuts-and-grazes.html': {
    eyebrow: 'Травмы · Памятка школы', title: 'Порезы и ссадины',
    intro: 'Сегодня ваш ребёнок получил порез или ссадину. Содержите участок в чистоте и наблюдайте за признаками инфекции в течение следующих дней.',
    what: 'Что мы сделали', note: 'Сотрудники школы могут отметить оказанную помощь на распечатанной памятке.',
    actions: ['Прижали рану, чтобы остановить кровотечение.', 'Промыли рану.', 'Накрыли рану повязкой.'],
    home: 'Уход дома', homeLists: [['Плотно прижмите рану чистой тканью или повязкой.', 'Если кровь проходит через повязку, положите сверху ещё одну и продолжайте прижимать.', 'Если в ране застрял предмет, не вынимайте его и прижимайте по обе стороны от него.'], ['Когда небольшая рана перестанет кровоточить, промойте её чистой водопроводной водой.', 'Очистите кожу вокруг водой с мылом, затем накройте рану стерильной повязкой.'], ['Смените повязку, если она намокла или испачкалась.', 'Обратитесь за медицинской помощью, если усиливаются боль, отёк или покраснение, появляется гной или у ребёнка поднимается температура.', 'Спросите врача, нужна ли прививка от столбняка после загрязнённой раны.']],
    homeHeadings: ['После остановки кровотечения', 'Наблюдение за раной в течение следующих дней'], red: 'Опасные признаки', redParagraphs: [], redLists: [['Позвоните по номеру 112, если кровотечение сильное и не останавливается.', 'Очень глубокая или большая рана, потеря чувствительности или невозможность двигать участком требуют срочной оценки.', 'Срочно обратитесь за советом после укуса, загрязнённой раны или если рана остаётся грязной после промывания.']]
  },
  'eye-injury.html': {
    eyebrow: 'Травмы · Памятка школы', title: 'Травмы глаз',
    intro: 'Сегодня ребёнок повредил глаз или почувствовал раздражение. Следите за сохраняющейся болью и любыми изменениями зрения.',
    what: 'Что мы сделали', note: 'Сотрудники школы могут отметить оказанную помощь на распечатанной памятке.',
    actions: ['Помогли ребёнку перестать тереть глаз.', 'Промыли глаз чистой водой.', 'Организовали дальнейшую оценку состояния.'],
    home: 'Уход дома', homeLists: [['Для промывания как можно лучше откройте веки и используйте большое количество чистой воды мягкой струёй не менее 20 минут.', 'Если это безопасно, возьмите с собой упаковку или этикетку химического вещества.', 'При попадании пыли промойте глаз чистой водой.', 'Не трите глаз и не вынимайте застрявший предмет.'], ['Обратитесь за советом, если небольшая травма не улучшилась в течение 24 часов или раньше, если вы беспокоитесь о ребёнке.', 'Не используйте контактные линзы, пока глаз не восстановится.']],
    homeHeadings: ['Наблюдение за изменениями зрения и болью'], red: 'Опасные признаки', redParagraphs: [], redLists: [['Немедленно обратитесь за помощью при попадании сильного химического вещества, застрявшем предмете, ударе на высокой скорости, сильной боли в глазу или любом изменении зрения.', 'Если сильное химическое вещество попало в глаз, немедленно начните промывание и продолжайте его, пока организуется помощь.']]
  },
  'head-injury.html': {
    eyebrow: 'Травмы · Памятка школы', title: 'Травма головы и ушибы',
    intro: 'Сегодня ребёнок ударился головой. Даже после лёгкого удара симптомы могут появиться позже. Внимательно наблюдайте за ребёнком в течение следующих 24 часов.',
    what: 'Что мы сделали', note: 'Сотрудники школы могут отметить оказанную помощь на распечатанной памятке.',
    actions: ['Приложили холодный компресс, обёрнутый тканью.', 'Наблюдали за симптомами после удара.', 'Обеспечили спокойный отдых.'],
    home: 'Уход дома', homeLists: [['Если домашнее наблюдение допустимо, взрослый должен находиться рядом с ребёнком не менее 24 часов.', 'Позвольте ребёнку отдыхать и спать, если он устал. Избегайте физической нагрузки. Уточните у врача, когда можно вернуться к физкультуре и контактным видам спорта.', 'При отёке на короткое время прикладывайте к месту удара холодный компресс, обёрнутый полотенцем.', 'При лёгкой головной боли можно использовать детский парацетамол, если он подходит ребёнку. Следуйте инструкции на упаковке.']],
    homeHeadings: [], red: 'Опасные признаки', redParagraphs: ['Позвоните по номеру 112 сейчас, если ребёнок:', 'Позвоните по номеру 112 после удара на высокой скорости или падения с высоты более 1 метра или 5 ступеней.', 'Срочно обратитесь за медицинской помощью, если ребёнка рвёт, у него кружится голова или появляется усиливающаяся либо не проходящая головная боль.'], redListAfterParagraphIndex: 1, redLists: [['Очень сонный, его трудно разбудить или у него судороги.', 'Выглядит растерянным, ведёт себя необычно, ему трудно говорить, понимать вас, видеть или ходить.', 'Из уха идёт кровь или из носа либо ушей выделяется прозрачная жидкость.']]
  },
  'nosebleed.html': {
    eyebrow: 'Травмы · Памятка школы', title: 'Носовое кровотечение',
    intro: 'Сегодня у вашего ребёнка пошла кровь из носа. Кровотечение может начаться снова, особенно если вскоре после этого ребёнок высморкается или будет трогать нос.',
    what: 'Что мы сделали', note: 'Сотрудники школы могут отметить оказанную помощь на распечатанной памятке.',
    actions: ['Помогли ребёнку сесть прямо и наклониться вперёд.', 'Помогли непрерывно прижать мягкую часть носа.', 'Засекли время кровотечения и проверили, остановилось ли оно.'],
    home: 'Уход дома', homeLists: [['Посадите ребёнка прямо, наклонив голову вперёд.', 'Попросите его дышать ртом и выплёвывать кровь, которая скапливается во рту.', 'Непрерывно сжимайте мягкую часть носа в течение 10–15 минут. Используйте таймер и не отпускайте нос для проверки.'], ['В течение следующих 24 часов избегайте сморкания, ковыряния в носу, горячих напитков и активных игр.', 'Спросите врача ребёнка о совете, если кровотечения повторяются, у ребёнка есть нарушение свёртывания крови или носовое кровотечение было у ребёнка младше двух лет.']],
    homeHeadings: ['Как уменьшить вероятность повторного кровотечения'], red: 'Опасные признаки', redParagraphs: [], redLists: [['Обратитесь в отделение неотложной помощи, если кровотечение продолжается более 10–15 минут, оно сильное, началось после удара по голове или ребёнок стал слабым или испытывает головокружение.', 'Позвоните по номеру 112 при серьёзных проблемах с дыханием.']]
  },
  'poisoning.html': {
    eyebrow: 'Неотложные ситуации · Памятка школы', title: 'Подозрение на отравление',
    intro: 'Ребёнок мог контактировать с вредным веществом. Некоторые симптомы появляются позже. При подозрении на контакт немедленно получите экстренную помощь.',
    what: 'Что мы сделали', note: 'Сотрудники школы могут отметить оказанную помощь на распечатанной памятке.',
    actions: ['Вызвали экстренную помощь.', 'Оставались рядом с ребёнком и наблюдали за его дыханием.', 'Определили вещество или сохранили упаковку для специалистов.'],
    home: 'Уход дома', homeLists: [['Оставайтесь рядом с ребёнком и наблюдайте за его дыханием.', 'Следуйте инструкциям специалистов экстренной помощи.', 'Не вызывайте рвоту и не давайте еду или питьё, если это не рекомендовал медицинский специалист.'], ['Если безопасно, сохраните упаковку продукта или контейнер лекарства.', 'Сообщите специалистам, что это было за вещество, какое количество могло попасть в организм, когда это произошло и какие симптомы вы заметили.', 'Возьмите этикетку или сфотографируйте её, если это можно сделать без задержки помощи.']],
    homeHeadings: ['Что сообщить специалистам экстренной помощи'], red: 'Опасные признаки', redParagraphs: [], redLists: [['Если вы думаете, что ребёнок проглотил, коснулся или вдохнул вредное вещество, немедленно получите экстренную помощь.', 'Особенно звоните по номеру 112, если ребёнок необычно сонный, у него проблемы с дыханием, судороги или потеря сознания.', 'Симптомы могут появиться не сразу, поэтому действуйте, даже если ребёнок выглядит хорошо.']]
  },
  'seizure.html': {
    eyebrow: 'Неотложные ситуации · Памятка школы', title: 'Судороги или приступ',
    intro: 'У ребёнка был эпизод, который мог быть судорожным приступом. Время начала и окончания, наблюдения сотрудников и восстановление ребёнка помогут врачу.',
    what: 'Что мы сделали', note: 'Сотрудники школы могут отметить оказанную помощь на распечатанной памятке.',
    actions: ['Засекли продолжительность эпизода.', 'Убрали опасные предметы и защитили голову ребёнка.', 'Оставались рядом во время восстановления и следовали плану действий, если он был доступен.'],
    home: 'Уход дома', homeLists: [['Отметьте время начала приступа.', 'Уберите опасные предметы и подложите что-нибудь мягкое под голову.', 'Перемещайте ребёнка только если он находится в опасности.', 'Не кладите предметы или пальцы в рот и не удерживайте ребёнка силой.', 'После прекращения судорог поверните ребёнка на бок, если он дышит, и оставайтесь рядом до восстановления.', 'Следуйте индивидуальному плану экстренной помощи, если вы обучены этому.', 'Не предлагайте еду или питьё, пока ребёнок полностью не восстановится.'], ['Сообщите врачу, сколько длился приступ, какие движения вы заметили и сколько продолжалось восстановление.', 'Если у ребёнка есть план действий при судорогах, сообщайте школе об изменениях.']],
    homeHeadings: ['Что записать и сообщить'], red: 'Опасные признаки', redParagraphs: [], redLists: [['Позвоните по номеру 112 при первом приступе, проблемах с дыханием после приступа, серьёзной травме, повторных приступах без восстановления или приступе, который длится дольше обычного.', 'Если вы не знаете обычную продолжительность приступов ребёнка, звоните, если приступ длится более пяти минут.']]
  },
  'sprains-and-strains.html': {
    eyebrow: 'Травмы · Памятка школы', title: 'Растяжения связок и мышц',
    intro: 'Сегодня ребёнок повредил сустав или мышцу. Боль и отёк могут меняться в течение следующих часов. Сильное растяжение и перелом могут выглядеть одинаково.',
    what: 'Что мы сделали', note: 'Сотрудники школы могут отметить оказанную помощь на распечатанной памятке.',
    actions: ['Остановили активность и дали повреждённому участку отдохнуть.', 'Приложили холодный компресс, обёрнутый тканью.', 'Поддержали или подняли повреждённый участок.'],
    home: 'Уход дома', homeLists: [['При лёгкой травме защищайте повреждённый участок и давайте ему отдыхать первые 2–3 дня.', 'Прикладывайте холодный компресс, обёрнутый полотенцем, до 20 минут каждые 2–3 часа и поднимайте участок, если это удобно.'], ['В первые дни избегайте тепла и массажа.', 'Когда боль позволит, поощряйте лёгкие движения, чтобы сустав не стал тугим.', 'Не допускайте ребёнка к физкультуре и спорту, пока обычные движения причиняют боль.', 'Обратитесь за советом, если состояние не улучшается или ребёнок продолжает хромать.']],
    homeHeadings: ['Возвращение к активности'], red: 'Опасные признаки', redParagraphs: [], redLists: [['Срочно обратитесь за оценкой, если ребёнок не может опираться на конечность или пользоваться ею, либо если усиливаются боль, синяк или отёк.', 'Обратитесь в отделение неотложной помощи, если конечность выглядит деформированной, онемела или стала холодной.']]
  },
  'suspected-fracture.html': {
    eyebrow: 'Травмы · Памятка школы', title: 'Возможный перелом руки или запястья',
    intro: 'Сегодня ребёнок повредил руку или запястье. Перелом может выглядеть как растяжение и при подозрении требует своевременной медицинской оценки.',
    what: 'Что мы сделали', note: 'Сотрудники школы могут отметить оказанную помощь на распечатанной памятке.',
    actions: ['Остановили активность и поддержали руку.', 'Приложили холодный компресс, обёрнутый тканью.', 'Организовали дальнейшую медицинскую оценку.'],
    home: 'Уход дома', homeLists: [['Поддерживайте руку в удобном положении, например с помощью полотенца как косынки.', 'Оставьте руку в этом положении и не пытайтесь её выпрямлять.', 'Снимите кольца или часы, если они снимаются легко, пока отёк не увеличился.', 'Прикладывайте холодный компресс, обёрнутый полотенцем, на срок до 20 минут.', 'Если есть рана, накройте её чистой повязкой.'], ['Сообщите врачу, если пальцы изменили цвет или онемели.', 'Следуйте инструкциям лечащей команды по уходу за гипсом и возвращению в школу или на физкультуру.']],
    homeHeadings: ['Наблюдение за пальцами в ожидании помощи'], red: 'Опасные признаки', redParagraphs: [], redLists: [['Возможный перелом требует своевременной медицинской оценки.', 'Обратитесь в отделение неотложной помощи, если рука или запястье выглядят деформированными, кисть онемела или покалывает либо видна кость.', 'Позвоните по номеру 112 при сильном кровотечении или если ребёнка нельзя безопасно переместить.']]
  },
  'swallowed-object.html': {
    eyebrow: 'Неотложные ситуации · Памятка школы', title: 'Проглоченный предмет, батарейка или магнит',
    intro: 'Ребёнок мог проглотить предмет. При проглатывании дисковой батарейки или магнита нужна экстренная оценка, даже если ребёнок выглядит здоровым.',
    what: 'Что мы сделали', note: 'Сотрудники школы могут отметить оказанную помощь на распечатанной памятке.',
    actions: ['Проверили, каким мог быть предмет.', 'Записали, когда он мог быть проглочен.', 'Организовали срочную медицинскую оценку.'],
    home: 'Уход дома', homeLists: [['Сообщите врачу, что было проглочено, когда это произошло и не был ли проглочен ещё какой-либо предмет.', 'Возьмите упаковку или такой же предмет, если он находится рядом.', 'Врач решит, нужны ли осмотр или рентген.'], ['Если ребёнка отпустили домой, следуйте инструкциям больницы.', 'Срочно вернитесь за помощью при затруднённом глотании, боли в шее или груди, рвоте, боли в животе или крови в рвоте либо стуле.', 'Позвоните по номеру 112, если стало трудно дышать.']],
    homeHeadings: ['Признаки, за которыми нужно следить после осмотра'], red: 'Опасные признаки', redParagraphs: [], redLists: [['Немедленно идите в отделение неотложной помощи при любом подозрении на проглоченную дисковую батарейку или магнит, даже если ребёнок выглядит здоровым.', 'Позвоните по номеру 112, если ребёнок не может дышать, говорить или эффективно кашлять.', 'При других проглоченных предметах срочно обратитесь за медицинской помощью.']]
  },
  'tooth-injury.html': {
    eyebrow: 'Травмы · Памятка школы', title: 'Выбитый зуб',
    intro: 'Ребёнок повредил рот и мог потерять зуб. Выбитый постоянный зуб требует неотложной стоматологической помощи.',
    what: 'Что мы сделали', note: 'Сотрудники школы могут отметить оказанную помощь на распечатанной памятке.',
    actions: ['Проверили, удалось ли найти зуб.', 'Сохранили найденный зуб в молоке для стоматолога.', 'Связались с родителем или организовали стоматологическую помощь.'],
    home: 'Уход дома', homeLists: [['Если выпал постоянный зуб, берите его за коронку — часть, обычно видимую над десной.', 'Если зуб загрязнён, осторожно промойте его молоком или физиологическим раствором.', 'Если зуб не удаётся легко вернуть в лунку, храните его в молоке и возьмите с собой.', 'Никогда не вставляйте молочный зуб обратно.'], ['Если вы не уверены, молочный это зуб или постоянный, храните его в молоке и спросите стоматолога.', 'Сообщите, когда произошла травма и удалось ли найти зуб.', 'Спросите о последующем наблюдении, даже если зуб уже был возвращён на место.']],
    homeHeadings: ['Что сообщить стоматологу'], red: 'Опасные признаки', redParagraphs: [], redLists: [['При выбитом зубе немедленно обратитесь к стоматологу.', 'Позвоните по номеру 112, если одновременно есть серьёзная травма головы или проблемы с дыханием.']]
  },
  'vomiting-diarrhoea.html': {
    eyebrow: 'Заболевания · Памятка школы', title: 'Рвота и диарея',
    intro: 'Сегодня у ребёнка была рвота или диарея. Главное, за чем нужно наблюдать дома, — пьёт ли ребёнок и мочится ли он обычно.',
    what: 'Что мы сделали', note: 'Сотрудники школы могут отметить оказанную помощь на распечатанной памятке.',
    actions: ['Отметили симптомы и время их начала.', 'Предложили небольшие глотки жидкости, если ребёнок мог пить.', 'Связались с родителем или опекуном.'],
    home: 'Уход дома', homeLists: [['Предлагайте небольшие порции жидкости часто, а не большое количество за один раз.', 'Признаки обезвоживания включают сухость во рту, тёмную мочу или более редкое мочеиспускание.', 'Фармацевт или педиатр может посоветовать раствор для пероральной регидратации.', 'Фруктовый сок и газированные напитки могут усилить диарею.'], ['Мойте руки водой с мылом, очищайте поверхности общей ванной комнаты и не пользуйтесь общими полотенцами.', 'Проверьте правила школы о возвращении ребёнка.', 'Согласно рекомендациям NHS, после последнего эпизода рвоты или диареи следует подождать не менее 48 часов.']],
    homeHeadings: ['Регидратация и возвращение в школу'], red: 'Опасные признаки', redParagraphs: [], redLists: [['Срочно обратитесь за советом, если ребёнок продолжает рвать и не может удерживать жидкость, мочится значительно реже или у него кровавая диарея.', 'Обратитесь в отделение неотложной помощи при зелёной рвоте или внезапной сильной боли в животе.', 'Позвоните по номеру 112, если ребёнок не реагирует или ему трудно дышать.']]
  }
};

const pageName = window.location.pathname.split('/').pop();
const translation = russianTranslations[pageName];
const emergencyText = { strong: 'Опасная для жизни ситуация?', detail: ' Вызовите скорую помощь на Кипре.', call: 'Позвонить 112' };

function setText(selector, value) {
  const element = document.querySelector(selector);
  if (element && value !== undefined) element.textContent = value;
}

function setListItems(selector, groups) {
  const lists = Array.from(document.querySelectorAll(selector));
  (groups || []).forEach((items, index) => {
    if (!lists[index]) return;
    lists[index].innerHTML = items.map(item => `<li>${item}</li>`).join('');
  });
}

function removeRussianCopies() {
  document.querySelectorAll('.russian-copy').forEach(element => element.remove());
}

function makeRussianList(items) {
  const list = document.createElement('ul');
  list.className = 'care-list';
  list.innerHTML = items.map(item => `<li>${item}</li>`).join('');
  return list;
}

function appendRedFlags(container) {
  const paragraphs = translation.redParagraphs || [];
  const lists = translation.redLists || [];
  const splitAt = translation.redListAfterParagraphIndex;
  const before = splitAt === undefined ? paragraphs : paragraphs.slice(0, splitAt);
  const after = splitAt === undefined ? [] : paragraphs.slice(splitAt);
  before.forEach(paragraph => {
    const element = document.createElement('p');
    element.textContent = paragraph;
    container.appendChild(element);
  });
  lists.forEach(items => container.appendChild(makeRussianList(items)));
  after.forEach(paragraph => {
    const element = document.createElement('p');
    element.textContent = paragraph;
    container.appendChild(element);
  });
}

function renderBilingual() {
  if (!translation) return;
  removeRussianCopies();
  document.documentElement.lang = 'en';
  document.body.classList.remove('russian-view');

  const head = document.querySelector('.leaf-head');
  const headCopy = document.createElement('div');
  headCopy.className = 'russian-copy bilingual-head';
  headCopy.innerHTML = `<p class="translation-label">Русский</p><p class="eyebrow">${translation.eyebrow}</p><h2>${translation.title}</h2><p>${translation.intro}</p>`;
  head.appendChild(headCopy);

  const cover = document.querySelector('.booklet-cover');
  const coverCopy = document.createElement('p');
  coverCopy.className = 'russian-copy cover-russian';
  coverCopy.textContent = translation.title;
  cover.appendChild(coverCopy);

  const firstSection = document.querySelector('.inside-left .leaf-content:first-child');
  const whatCopy = document.createElement('div');
  whatCopy.className = 'russian-copy';
  whatCopy.innerHTML = `<p class="translation-label">Русский</p><h3>${translation.what}</h3><p>${translation.note}</p>`;
  whatCopy.appendChild(makeRussianList(translation.actions));
  firstSection.appendChild(whatCopy);

  const homeSection = document.querySelector('.inside-left .leaf-content:nth-child(2)');
  const homeCopy = document.createElement('div');
  homeCopy.className = 'russian-copy';
  homeCopy.innerHTML = `<p class="translation-label">Русский</p><h3>${translation.home}</h3>`;
  translation.homeLists.forEach((items, index) => {
    if (index > 0 && translation.homeHeadings[index - 1]) {
      const heading = document.createElement('h4');
      heading.textContent = translation.homeHeadings[index - 1];
      homeCopy.appendChild(heading);
    }
    homeCopy.appendChild(makeRussianList(items));
  });
  homeSection.appendChild(homeCopy);

  const redSection = document.querySelector('.inside-right .danger');
  const redCopy = document.createElement('div');
  redCopy.className = 'russian-copy';
  redCopy.innerHTML = `<p class="translation-label">Русский</p><h3>${translation.red}</h3>`;
  appendRedFlags(redCopy);
  redSection.appendChild(redCopy);

  document.querySelectorAll('.emergency').forEach(emergency => {
    const copy = document.createElement('div');
    copy.className = 'russian-copy emergency-copy';
    copy.innerHTML = `<strong>${emergencyText.strong}</strong><span>${emergencyText.detail}</span><a href="tel:112">${emergencyText.call}</a>`;
    emergency.appendChild(copy);
  });

  setText('.booklet-cover p', 'Patient information leaflet · Памятка для родителей');
}

function makePrintEmergency(language) {
  const aside = document.createElement('aside');
  aside.className = 'emergency';
  const icon = document.querySelector('.emergency .alert-icon');
  if (icon) aside.appendChild(icon.cloneNode(true));
  const content = document.createElement('div');
  const russian = language === 'ru';
  content.innerHTML = `<strong>${russian ? emergencyText.strong : 'Life-threatening emergency?'}</strong><span>${russian ? emergencyText.detail : ' Call an ambulance in Cyprus.'}</span>`;
  aside.appendChild(content);
  const link = document.createElement('a');
  link.href = 'tel:112';
  link.textContent = russian ? emergencyText.call : 'Call 112';
  aside.appendChild(link);
  return aside;
}

function buildRussianPrintSide() {
  const side = document.createElement('section');
  side.className = 'print-side print-russian';

  const head = document.createElement('header');
  head.className = 'print-side-head';
  head.innerHTML = `<p class="eyebrow">${translation.eyebrow}</p><h1>${translation.title}</h1><p>${translation.intro}</p>`;
  side.appendChild(head);

  const columns = document.createElement('div');
  columns.className = 'print-columns';
  const left = document.createElement('div');

  const what = document.createElement('section');
  what.className = 'leaf-content';
  what.innerHTML = `<h2>${translation.what}</h2><p>${translation.note}</p>`;
  const actions = makeRussianList(translation.actions);
  actions.className = 'paper-checklist';
  what.appendChild(actions);
  what.insertAdjacentHTML('beforeend', '<p class="notes-label">Время происшествия и дополнительные заметки</p><div class="note-lines" aria-hidden="true"></div>');
  left.appendChild(what);

  const home = document.createElement('section');
  home.className = 'leaf-content';
  home.innerHTML = `<h2>${translation.home}</h2>`;
  translation.homeLists.forEach((items, index) => {
    if (index > 0 && translation.homeHeadings[index - 1]) {
      const heading = document.createElement('h3');
      heading.textContent = translation.homeHeadings[index - 1];
      home.appendChild(heading);
    }
    home.appendChild(makeRussianList(items));
  });
  left.appendChild(home);
  columns.appendChild(left);

  const right = document.createElement('div');
  right.appendChild(makePrintEmergency('ru'));
  const red = document.createElement('section');
  red.className = 'leaf-content danger';
  red.innerHTML = `<h2>${translation.red}</h2>`;
  appendRedFlags(red);
  right.appendChild(red);
  columns.appendChild(right);

  side.appendChild(columns);
  return side;
}

function buildLanguagePanel(language) {
  const russian = language === 'ru';
  const panel = document.createElement('section');
  panel.className = `print-language-panel print-${language}`;

  if (!russian) {
    const head = document.querySelector('.leaf-head').cloneNode(true);
    head.className = 'print-panel-head';
    head.querySelectorAll('.russian-copy').forEach(element => element.remove());
    panel.appendChild(head);
    const emergency = document.querySelector('.inside-right .print-emergency')?.cloneNode(true);
    if (emergency) panel.appendChild(emergency);
    const what = document.querySelector('.inside-left .leaf-content:first-child').cloneNode(true);
    const home = document.querySelector('.inside-left .leaf-content:nth-child(2)').cloneNode(true);
    const red = document.querySelector('.inside-right .danger').cloneNode(true);
    [what, home, red].forEach(section => {
      section.querySelectorAll('.russian-copy').forEach(element => element.remove());
      panel.appendChild(section);
    });
    return panel;
  }

  const head = document.createElement('header');
  head.className = 'print-panel-head';
  head.innerHTML = `<p class="eyebrow">${translation.eyebrow}</p><h1>${translation.title}</h1><p>${translation.intro}</p>`;
  panel.appendChild(head);
  panel.appendChild(makePrintEmergency('ru'));

  const what = document.createElement('section');
  what.className = 'leaf-content';
  what.innerHTML = `<h2>${translation.what}</h2><p>${translation.note}</p>`;
  const actions = makeRussianList(translation.actions);
  actions.className = 'paper-checklist';
  what.appendChild(actions);
  what.insertAdjacentHTML('beforeend', '<p class="notes-label">Время происшествия и дополнительные заметки</p><div class="note-lines" aria-hidden="true"></div>');
  panel.appendChild(what);

  const home = document.createElement('section');
  home.className = 'leaf-content';
  home.innerHTML = `<h2>${translation.home}</h2>`;
  translation.homeLists.forEach((items, index) => {
    if (index > 0 && translation.homeHeadings[index - 1]) {
      const heading = document.createElement('h3');
      heading.textContent = translation.homeHeadings[index - 1];
      home.appendChild(heading);
    }
    home.appendChild(makeRussianList(items));
  });
  panel.appendChild(home);

  const red = document.createElement('section');
  red.className = 'leaf-content danger';
  red.innerHTML = `<h2>${translation.red}</h2>`;
  appendRedFlags(red);
  panel.appendChild(red);
  return panel;
}

function buildPrintableBilingual() {
  if (!translation) return;
  document.querySelector('.print-bilingual')?.remove();
  const printable = document.createElement('div');
  printable.className = 'print-bilingual';

  const outside = document.querySelector('.booklet-outside').cloneNode(true);
  outside.className = 'print-outside';
  const inside = document.createElement('div');
  inside.className = 'print-inside';
  inside.append(buildLanguagePanel('en'), buildLanguagePanel('ru'));
  printable.append(outside, inside);
  document.body.appendChild(printable);
}

function applyLanguage(language) {
  if (language === 'bi') {
    renderBilingual();
    buildPrintableBilingual();
    document.querySelectorAll('[data-language]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.language === 'bi')));
    return;
  }
  const russian = language === 'ru' && translation;
  document.documentElement.lang = russian ? 'ru' : 'en';
  document.body.classList.toggle('russian-view', Boolean(russian));

  const labels = russian ? {
    back: '← Все памятки', print: 'Печать памятки', cover: 'Памятка для родителей',
    nav: 'Библиотека памяток', school: 'Сайт школы', emergency: emergencyText,
  } : {
    back: '← All leaflets', print: 'Print leaflet', cover: 'Patient information leaflet',
    nav: 'Leaflet library', school: 'School website', emergency: { strong: 'Life-threatening emergency?', detail: ' Call an ambulance in Cyprus.', call: 'Call 112' },
  };

  setText('.back', labels.back);
  setText('#print-leaflet', labels.print);
  setText('.booklet-cover p', labels.cover);
  document.querySelectorAll('.emergency strong').forEach(el => { el.textContent = labels.emergency.strong; });
  document.querySelectorAll('.emergency div span').forEach(el => { el.textContent = labels.emergency.detail; });
  document.querySelectorAll('.emergency a').forEach(el => { el.textContent = labels.emergency.call; });
  if (translation && russian) {
    setText('.leaf-head .eyebrow', translation.eyebrow);
    setText('.leaf-head h1', translation.title);
    setText('.leaf-head>p:last-child', translation.intro);
    setText('.booklet-cover h2', translation.title);
    setText('.inside-left .leaf-content:first-child h2', translation.what);
    setText('.notes-help', translation.note);
    setListItems('.paper-checklist', [translation.actions]);
    setText('.notes-label', 'Время происшествия и дополнительные заметки');
    setText('.inside-left .leaf-content:nth-child(2) h2', translation.home);
    const homeHeadings = Array.from(document.querySelectorAll('.inside-left .leaf-content:nth-child(2) h3'));
    (translation.homeHeadings || []).forEach((heading, index) => { if (homeHeadings[index]) homeHeadings[index].textContent = heading; });
    setListItems('.inside-left .leaf-content:nth-child(2) .care-list', translation.homeLists);
    setText('.inside-right .danger h2', translation.red);
    const redParagraphs = Array.from(document.querySelectorAll('.inside-right .danger>p'));
    (translation.redParagraphs || []).forEach((paragraph, index) => { if (redParagraphs[index]) redParagraphs[index].textContent = paragraph; });
    setListItems('.inside-right .danger .care-list', translation.redLists);
  } else if (translation) {
    window.location.reload();
  }

  document.querySelectorAll('[data-language]').forEach(button => {
    button.setAttribute('aria-pressed', String(button.dataset.language === (russian ? 'ru' : 'en')));
  });
  localStorage.setItem('ican_leaflet_language', russian ? 'ru' : 'en');
}

function addLanguageControls() {
  if (!translation) return;
  const actions = document.querySelector('.leaf-actions');
  if (!actions) return;
  const controls = document.createElement('div');
  controls.className = 'language-controls';
  controls.setAttribute('role', 'group');
  controls.setAttribute('aria-label', 'Leaflet language');
  controls.innerHTML = '<span>Format:</span><button type="button" data-language="bi" aria-pressed="true">English + Русский</button>';
  controls.querySelectorAll('[data-language]').forEach(button => button.addEventListener('click', () => applyLanguage(button.dataset.language)));
  actions.insertBefore(controls, printButton);
  applyLanguage('bi');
}

addLanguageControls();
