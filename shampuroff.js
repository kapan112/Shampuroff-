/* ============================================================
   ШампурOFF — script.js
   Динамическое меню, отзывы, анимации, галерея, параллакс
   ============================================================ */
"use strict";

/* ---------- Данные меню (распознаны с фотографий меню) ---------- */
const MENU = [
  {
    id: "grill", tab: "Шашлыки и стейки",
    groups: [
      { title: "Шашлыки и саджи", items: [
        { n: "Шашлык из свинины", w: "200 гр", p: 550, hit: true },
        { n: "Шашлык из курицы", w: "230 гр", p: 480 },
        { n: "Шашлык из баранины", w: "200 гр", p: 770 },
        { n: "Люля-кебаб из говядины", w: "190 гр", p: 590 },
        { n: "Люля-кебаб из курицы", w: "190 гр", p: 550 },
        { n: "Люля-кебаб из баранины", w: "190 гр", p: 750 },
        { n: "Садж с говядиной", w: "700 гр", p: 1500 },
        { n: "Садж со свининой", w: "700 гр", p: 1300 },
        { n: "Садж с бараниной", w: "700 гр", p: 1800 },
      ]},
      { title: "Стейки из говядины · указан вес сырого мяса", items: [
        { n: "Стейк Рибай", w: "100 гр", p: 1100 },
        { n: "Стейк Нью-Йорк", w: "100 гр", p: 940 },
        { n: "Стейк Филе Миньон", w: "100 гр", p: 920 },
      ]},
    ],
  },
  {
    id: "hot", tab: "Горячие блюда",
    groups: [
      { title: "Говядина и ягнёнок", items: [
        { n: "Томлёные говяжьи щёчки с картофельным пюре", w: "300 гр", p: 1100 },
        { n: "Жарёха с говядиной", w: "450 гр", p: 960, hit: true },
        { n: "Рёбра говяжьи Jack Daniel's", w: "380 гр", p: 1500, hit: true },
        { n: "Бифштекс из говядины", w: "300 гр", p: 900 },
        { n: "Колбаски гриль с картофелем фри (улитки)", w: "260 гр", p: 760 },
        { n: "Каре ягнёнка", w: "390 гр", p: 1800 },
      ]},
      { title: "Курица и свинина", items: [
        { n: "Куриная грудка с овощами в сливочном соусе карри", w: "230 гр", p: 630 },
        { n: "Печень куриная в сметане с печёным картофелем", w: "240 гр", p: 520 },
        { n: "Хрустящий куриный шницель с соусом терияки", w: "230 гр", p: 600 },
        { n: "Скоблянка из свинины с шампиньонами", w: "240 гр", p: 730 },
        { n: "Свиные рёбра в соусе BBQ", w: "260 гр", p: 790 },
        { n: "Жарёха со свининой", w: "450 гр", p: 760 },
        { n: "Колбаски гриль с картофельными дольками (купаты)", w: "260 гр", p: 690 },
      ]},
      { title: "Рыба и морепродукты", items: [
        { n: "Сибас на гриле", w: "250 гр", p: 850 },
        { n: "Дорадо на гриле", w: "250 гр", p: 780 },
        { n: "Стейк лосося", w: "200 гр", p: 1460 },
        { n: "Лосось в сливочном соусе", w: "220 гр", p: 1290 },
        { n: "Мидии в сливочном соусе", w: "350 гр", p: 990 },
        { n: "Мидии запечённые", w: "190 гр", p: 650, hit: true },
        { n: "Тигровые креветки Sweet Chili", w: "100 гр", p: 600 },
      ]},
    ],
  },
  {
    id: "starters", tab: "Закуски",
    groups: [
      { title: "Холодные закуски", items: [
        { n: "Карпаччо из говядины", d: "Говяжья вырезка, сыр пармезан, крем бальзамический, кедровый орех", w: "150 гр", p: 770 },
        { n: "Ростбиф Вителло Тоннато", d: "Ростбиф из говядины, соус Вителло Тоннато, вяленые томаты", w: "200 гр", p: 950 },
        { n: "Мясная доска", d: "Ассорти из мясных деликатесов", w: "350 гр", p: 1200 },
        { n: "Сырное плато", d: "Ассорти из пяти видов сыра с мёдом и орехами", w: "260 гр", p: 900 },
        { n: "Овощная нарезка", d: "Свежие овощи, зелень", w: "500 гр", p: 600 },
        { n: "Рыбное ассорти", d: "Ассорти из трёх видов рыб", w: "200 гр", p: 980 },
        { n: "Фруктовая ваза", w: "500 гр", p: 670 },
      ]},
      { title: "Брускетты", items: [
        { n: "Брускетта с ростбифом и вялеными томатами", w: "140 гр", p: 570 },
        { n: "Брускетта с лососем и яйцом пашот", w: "160 гр", p: 510 },
        { n: "Брускетта Капрезе", w: "140 гр", p: 470 },
      ]},
      { title: "Горячие закуски", items: [
        { n: "Кольца кальмаров", w: "160 гр", p: 400 },
        { n: "Кольца луковые", w: "140 гр", p: 340 },
        { n: "Креветки темпура (с/п)", w: "150 гр", p: 600 },
        { n: "Креветки к пиву", w: "250 гр", p: 650 },
        { n: "Крылышки BBQ", w: "250 гр", p: 470 },
        { n: "Крылышки Crunch", w: "260 гр", p: 490 },
        { n: "Крылышки на Chili's", w: "250 гр", p: 480 },
        { n: "Наггетсы куриные (с/п)", w: "160 гр", p: 390 },
        { n: "Чечил фри", w: "130 гр", p: 370 },
        { n: "Гренки бородинские", w: "150 гр", p: 300 },
        { n: "Сырные палочки", w: "150 гр", p: 450, hit: true },
      ]},
    ],
  },
  {
    id: "salads", tab: "Салаты и супы",
    groups: [
      { title: "Салаты", items: [
        { n: "Салат Цезарь с курочкой", hit: true, d: "Микс салат, хрустящие гренки, томаты черри, сыр пармезан, обжаренное куриное филе, оригинальный соус Цезарь", w: "260 гр", p: 570 },
        { n: "Салат Цезарь с тигровыми креветками", d: "Микс салат, хрустящие гренки, томаты черри, сыр пармезан, обжаренные тигровые креветки, оригинальный соус Цезарь", w: "260 гр", p: 640 },
        { n: "Салат Цезарь с лососем", d: "Микс салат, хрустящие гренки, томаты черри, сыр пармезан, лосось с/с, оригинальный соус Цезарь", w: "260 гр", p: 620 },
        { n: "Салат с уткой гриль и апельсинами", hit: true, d: "Микс салат, печёное утиное филе, томаты черри, апельсин, горчично-медовая заправка", w: "230 гр", p: 490 },
        { n: "Салат Греческий", d: "Микс салат, свежие овощи, маслины, сыр Фета, заправка на основе оливкового масла", w: "300 гр", p: 400 },
        { n: "Салат с морепродуктами в сливочном соусе", d: "Микс салат, тигровые креветки, кальмар, морской гребешок, фасоль стручковая, сливочный соус", w: "250 гр", p: 570 },
        { n: "Салат Корн", d: "Хрустящие баклажаны, томаты, кинза, фирменная заправка", w: "260 гр", p: 430 },
        { n: "Салат Гриль с мраморной говядиной", d: "Микс салат, обжаренные овощи, мраморная говядина, заправка на основе бальзамического уксуса", w: "260 гр", p: 590 },
        { n: "Салат с ростбифом и печёным картофелем", d: "Ростбиф из говядины, молодой печёный картофель, томаты черри, соус Вителло Тоннато", w: "240 гр", p: 820 },
        { n: "Салат Мясной дымок", d: "Говяжий язык, подкопчённая куриная грудка, болгарский перец, свежий огурец, чеснок, майонез, зелень", w: "240 гр", p: 450 },
        { n: "Салат Оливье с ростбифом", d: "Классический салат оливье с ростбифом из говядины", w: "250 гр", p: 620 },
        { n: "Салат Оливье с лососем", d: "Классический салат оливье со слабосолёным лососем", w: "250 гр", p: 600 },
      ]},
      { title: "Супы", items: [
        { n: "Том-ям с говядиной", w: "300 гр", p: 780 },
        { n: "Том-ям с морепродуктами", w: "300 гр", p: 750 },
        { n: "Рамен с говядиной", w: "300 гр", p: 570 },
      ]},
    ],
  },
  {
    id: "pizza", tab: "Пицца и паста",
    groups: [
      { title: "Пицца и хачапури", items: [
        { n: "Пицца Пепперони", w: "520 гр", p: 740 },
        { n: "Пицца 4 сыра", w: "500 гр", p: 800 },
        { n: "Пицца Дон-Бекон", w: "600 гр", p: 880 },
        { n: "Пицца с лососем в сливочном соусе", w: "500 гр", p: 920 },
        { n: "Пицца с тигровыми креветками", w: "500 гр", p: 850 },
        { n: "Пицца Hot Chilli", w: "520 гр", p: 880 },
        { n: "Пицца Маргарита", w: "500 гр", p: 650 },
        { n: "Пицца Курица и грибы", w: "550 гр", p: 670 },
        { n: "Пицца Курица терияки", w: "520 гр", p: 730 },
        { n: "Пицца По-азиатски", w: "520 гр", p: 720 },
        { n: "Пицца Гавайская", w: "520 гр", p: 630 },
        { n: "Пицца Морская", w: "530 гр", p: 920 },
        { n: "Пицца Сырный цыплёнок", w: "550 гр", p: 750 },
        { n: "Хачапури по-аджарски", w: "400 гр", p: 680 },
        { n: "Хачапури круглый с сыром и чесноком", w: "400 гр", p: 680 },
      ]},
      { title: "Паста", items: [
        { n: "Паста Карбонара", w: "260 гр", p: 500 },
        { n: "Паста с морепродуктами в томатном соусе", w: "250 гр", p: 730 },
        { n: "Паста Арабьята с тигровыми креветками", w: "250 гр", p: 530 },
        { n: "Паста Орзо с грибами", w: "260 гр", p: 500 },
      ]},
    ],
  },
  {
    id: "burgers", tab: "Бургеры и сеты",
    groups: [
      { title: "Сеты", items: [
        { n: "Сет Beer Fest", d: "Кольца кальмаров, кольца луковые, картофельные дольки, гренки бородинские, креветки темпура, крылышки Crunch, сырные палочки", w: "900 гр", p: 2500 },
        { n: "Сет Picnic", d: "Шашлык из свинины, баранины и курицы, люля-кебаб из говядины, курицы и баранины, крылышки BBQ, рёбра свиные", w: "1500 гр", p: 4500 },
        { n: "Beer Snack", d: "Сырные палочки, луковые кольца, гренки бородинские, кольца кальмара", w: "400 гр", p: 1500 },
      ]},
      { title: "Бургеры", items: [
        { n: "Гамбургер «Классический»", d: "С томатами, маринованным огурчиком и двумя фирменными соусами", w: "300 гр", p: 600 },
        { n: "Бургер «Мясник»", d: "С двумя котлетами, хрустящим беконом, красным луком и сыром чеддер", w: "500 гр", p: 920 },
        { n: "«Чикен» бургер", d: "С куриной котлетой, томатом и маринованным огурчиком", w: "300 гр", p: 630 },
        { n: "Бургер «Чак Норрис»", d: "С перчиком халапеньо, красным луком и соусом чили", w: "300 гр", p: 630 },
        { n: "Бургер «ШампурOFF»", d: "С печёным перцем, сыром моцарелла и вялеными томатами", w: "300 гр", p: 880 },
      ]},
      { title: "Дополнительно к бургерам", items: [
        { n: "Яйцо куриное", w: "1 шт", p: 60 },
        { n: "Котлеты из говядины", w: "150 гр", p: 270 },
        { n: "Котлеты из курицы", w: "150 гр", p: 230 },
        { n: "Сыр моцарелла", w: "60 гр", p: 100 },
        { n: "Сыр чеддер", w: "50 гр", p: 100 },
        { n: "Вяленые томаты", w: "30 гр", p: 100 },
        { n: "Перец халапеньо", w: "50 гр", p: 80 },
        { n: "Бекон", w: "50 гр", p: 90 },
      ]},
    ],
  },
  {
    id: "sides", tab: "Гарниры и соусы",
    groups: [
      { title: "Гарниры", items: [
        { n: "Кукуруза гриль", w: "160 гр", p: 270 },
        { n: "Спаржа в соево-чесночном соусе", w: "150 гр", p: 380 },
        { n: "Фасоль стручковая", w: "150 гр", p: 270 },
        { n: "Картофель печёный на углях", w: "150 гр", p: 280 },
        { n: "Овощи гриль", w: "170 гр", p: 440 },
        { n: "Овощной гарнир", w: "170 гр", p: 300 },
        { n: "Картофель фри", w: "170 гр", p: 260 },
        { n: "Картофельные дольки", w: "170 гр", p: 260 },
        { n: "Картофельное пюре", w: "150 гр", p: 220 },
        { n: "Шампиньоны гриль", w: "150 гр", p: 480 },
      ]},
      { title: "Соусы · 50 гр", items: [
        { n: "Кетчуп", p: 80 }, { n: "Соус сырный", p: 80 }, { n: "Соус BBQ", p: 80 },
        { n: "Соус ореховый", p: 80 }, { n: "Соус гранатовый", p: 80 }, { n: "Аджика", p: 80 },
        { n: "Соус острый", p: 80 }, { n: "Соус сметано-чесночный (с/п)", p: 80 },
        { n: "Соус тар-тар (с/п)", p: 80 }, { n: "Соус терияки", p: 80 },
        { n: "Соус кисло-сладкий", p: 80 }, { n: "Соус мясной", p: 80 },
      ]},
      { title: "Хлеб", items: [
        { n: "Булочка пшеничная", w: "50 гр", p: 80 },
        { n: "Булочка мультизлаковая", w: "50 гр", p: 80 },
        { n: "Лепёшка", w: "250 гр", p: 120 },
        { n: "Чиабатта пшеничная", w: "250 гр", p: 250 },
        { n: "Чиабатта ржаная", w: "250 гр", p: 250 },
      ]},
    ],
  },
  {
    id: "drinks", tab: "Напитки и десерты",
    groups: [
      { title: "Крафтовые лимонады · 1 л", items: [
        { n: "Тархун", p: 450 }, { n: "Арбуз — мята", p: 450 }, { n: "Цитрусовый", p: 450 },
        { n: "Тропический", p: 450 }, { n: "Малина — розмарин", p: 500 }, { n: "Мандарин — тимьян", p: 500 },
      ]},
      { title: "Морсы и прохладительные напитки", items: [
        { n: "Морс клюквенный", w: "0,2 / 1 л", p: "90 / 250" },
        { n: "Морс облепиховый", w: "0,2 / 1 л", p: "120 / 280" },
        { n: "Морс чёрная смородина", w: "0,2 / 1 л", p: "130 / 320" },
        { n: "Соки в ассортименте", w: "0,2 / 1 л", p: "150 / 380" },
        { n: "Кока-кола", w: "0,33 / 0,5 / 1,5 л", p: "150 / 250 / 400" },
        { n: "Спрайт", w: "0,33 / 0,5 / 1,5 л", p: "150 / 250 / 400" },
        { n: "Фанта", w: "0,33 / 0,5 / 1,5 л", p: "150 / 250 / 400" },
        { n: "Энергетический напиток", w: "0,5 л", p: 250 },
        { n: "Вода без газа", w: "0,5 / 1,5 л", p: "100 / 250" },
        { n: "Вода с газом", w: "0,5 / 1,5 л", p: "120 / 250" },
      ]},
      { title: "Чай и кофе", items: [
        { n: "Чёрный классический", w: "0,8 / 1 л", p: "180 / 220" },
        { n: "Эрл Грей с бергамотом", w: "0,8 / 1 л", p: "200 / 250" },
        { n: "Чёрный с чабрецом", w: "0,8 / 1 л", p: "220 / 250" },
        { n: "Зелёный классический", w: "0,8 / 1 л", p: "180 / 220" },
        { n: "Чайное ассорти", w: "0,8 / 1 л", p: "270 / 300" },
        { n: "Американо", w: "200 мл", p: 190 },
        { n: "Эспрессо", w: "200 мл", p: 150 },
        { n: "Капучино", w: "200 мл", p: 230 },
        { n: "Латте", w: "200 мл", p: 250 },
      ]},
      { title: "Десерты", items: [
        { n: "Тарталетка с малиной", w: "1 шт", p: 290 },
        { n: "Чизкейк в ассортименте", w: "1 шт", p: 250, hit: true },
        { n: "Шоколадный брауни", w: "1 шт", p: 300 },
        { n: "Мороженое в ассортименте", w: "80 гр", p: 190 },
      ]},
    ],
  },
];

/* ---------- Отзывы (распознаны с фотографий отзывов) ---------- */
const REVIEWS = [
  {
    name: "Вероника Паршукова", meta: "Знаток города 9 уровня · 19 октября 2024", stars: 5,
    text: "Неплохое тихое место! Удобно наличие двух отдельных VIP-залов, где можно уединиться своей компанией. Кухня когда как, всё зависит от повара! Александру респект: рёбра, салат из утки с апельсинами, тёплый салат с баклажанами — просто восторг! Как и многое другое!",
  },
  {
    name: "Рустам Габитов", meta: "Дегустатор 4 уровня · 29 октября 2023", stars: 5,
    text: "Ресторан огонь! Полный зал гостей — ни одного свободного столика. Официанты за 20 минут всё принесли. Всё очень вкусно. Но там что-то есть в лаваше завернутое, типа такосы или роллы куриные, вот они не сильно вкусные.",
  },
  {
    name: "Инна Ефремова", meta: "Знаток города 3 уровня · 20 июня 2023", stars: 5,
    text: "Благодарю вас, Шампуров, за сегодняшний ужин! По порядку: обслуживала милейшая, наипрекраснейшая девушка с улыбочкой и вниманием — спасибо вам, дивное создание! Низкий поклон поварам — шашлык, цезарь, сырные палочки, жарёха, махито…, а чизкейк манго — одно объедение и удовольствие, всё просто восхитительно! Благодарю за ваш труд! Успехов! Процветания!",
  },
  {
    name: "Рада Б.", meta: "Знаток города 3 уровня · 21 октября 2023", stars: 5,
    text: "Кухня великолепная! Обслуживание качественное! Официанты доброжелательные! Чисто, уютно, приятно посидеть, отдохнуть!",
  },
  {
    name: "Марина Касимова", meta: "Знаток города 9 уровня · 23 января 2020", stars: 5,
    text: "Очень хорошее заведение, можно с комфортом посидеть и поговорить, очень приятная атмосфера и кухня вкусная. Рекомендую для семейных пар с детками, приятно, что есть такое заведение.",
  },
];

/* ---------- Шеф рекомендует (фото реальных блюд) ---------- */
const CHEF = [
  { img: "img/mussels.jpg",  name: "Мидии запечённые",                 price: "650 ₽",  tag: "Хит гостей" },
  { img: "img/shashlik.jpg", name: "Шашлык из свинины",                price: "550 ₽",  tag: "С мангала" },
  { img: "img/fish.jpg",     name: "Сибас на гриле",                   price: "850 ₽",  tag: "На углях" },
  { img: "img/shrimp.jpg",   name: "Тигровые креветки Sweet Chili",    price: "600 ₽",  tag: "Морепродукты" },
  { img: "img/cheese.jpg",   name: "Сырное плато",                     price: "900 ₽",  tag: "К вину" },
  { img: "img/ducksalad.jpg",name: "Салат с уткой гриль и апельсинами",price: "490 ₽",  tag: "Хит гостей" },
  { img: "img/platter.jpg",  name: "Садж с говядиной",                 price: "1500 ₽", tag: "Для компании" },
  { img: "img/nuggets.jpg",  name: "Наггетсы куриные",                 price: "390 ₽",  tag: "Детям" },
];

const TICKER = [
  "Шашлык на углях", "Стейк Рибай", "Люля-кебаб", "Садж с бараниной",
  "Хачапури по-аджарски", "Том-ям", "Крафтовые лимонады", "Каре ягнёнка",
  "Пицца из печи", "Мидии запечённые", "Чизкейк", "Морс клюквенный",
];

/* ============================================================ */
document.addEventListener("DOMContentLoaded", () => {
  buildMenu();
  buildReviews();
  buildChef();
  buildTicker();
  initSearch();
  initProgress();
  initEmbers();
  initTilt();
  initPreloader();
  initNav();
  initSmoothScroll();
  initReveal();
  initCounters();
  initParallax();
  initMouseParallax();
  initLightbox();
  initRipple();
  initMagnetic();
  initToTop();
  initWishlist();
  initEmberCursor();
  initShare();
  document.getElementById("year").textContent = new Date().getFullYear();
});

/* ---------- Карточка блюда ---------- */
function renderDish(item) {
  const card = document.createElement("article");
  card.className = "dish" + (item.hit ? " has-badge" : "");
  const canFav = typeof item.p === "number";
  card.innerHTML = `
    ${item.hit ? `<span class="dish__badge">Хит гостей</span>` : ""}
    ${canFav ? `
      <button class="dish__fav" type="button" data-fav="${escapeAttr(item.n)}" data-price="${item.p}" aria-label="Добавить «${escapeAttr(item.n)}» в мой выбор" aria-pressed="false">
        <svg viewBox="0 0 24 24" width="15" height="15" stroke="currentColor" stroke-width="2" fill="none"><path d="M12 20s-7-4.4-9.5-8.8C.6 7.8 2 4 5.6 3.4 8 3 10 4.2 12 7c2-2.8 4-4 6.4-3.6C22 4 23.4 7.8 21.5 11.2 19 15.6 12 20 12 20z"/></svg>
      </button>` : ""}
    <div class="dish__top">
      <span class="dish__name">${item.n}</span>
      <span class="dish__dots" aria-hidden="true"></span>
      <span class="dish__price">${item.p}&thinsp;₽</span>
    </div>
    ${item.d ? `<p class="dish__desc">${item.d}</p>` : ""}
    ${item.w ? `<span class="dish__weight">${item.w}</span>` : ""}`;
  return card;
}

function escapeAttr(s) { return String(s).replace(/"/g, "&quot;"); }

/* ---------- Меню: табы и карточки ---------- */
function buildMenu() {
  const tabsBox = document.getElementById("menuTabs");
  const panelsBox = document.getElementById("menuPanels");

  MENU.forEach((cat, i) => {
    const tab = document.createElement("button");
    tab.className = "menu__tab" + (i === 0 ? " is-active" : "");
    tab.textContent = cat.tab;
    tab.setAttribute("role", "tab");
    tab.setAttribute("aria-selected", i === 0 ? "true" : "false");
    tab.setAttribute("aria-controls", "panel-" + cat.id);
    tab.addEventListener("click", () => activateTab(cat.id));
    tabsBox.appendChild(tab);

    const panel = document.createElement("div");
    panel.className = "menu__panel" + (i === 0 ? " is-active" : "");
    panel.id = "panel-" + cat.id;
    panel.setAttribute("role", "tabpanel");

    cat.groups.forEach((group) => {
      const g = document.createElement("div");
      g.className = "menu__group";
      g.innerHTML = `<h3 class="menu__group-title">${group.title}</h3>`;
      const grid = document.createElement("div");
      grid.className = "menu__grid";
      group.items.forEach((item) => grid.appendChild(renderDish(item)));
      g.appendChild(grid);
      panel.appendChild(g);
    });
    panelsBox.appendChild(panel);
  });

  function activateTab(id) {
    tabsBox.querySelectorAll(".menu__tab").forEach((t, i) => {
      const active = MENU[i].id === id;
      t.classList.toggle("is-active", active);
      t.setAttribute("aria-selected", active);
    });
    panelsBox.querySelectorAll(".menu__panel").forEach((p) => {
      p.classList.toggle("is-active", p.id === "panel-" + id);
    });
  }
}

/* ---------- Живой поиск по меню ---------- */
function initSearch() {
  const input = document.getElementById("menuSearch");
  const countEl = document.getElementById("menuCount");
  const tabsBox = document.getElementById("menuTabs");
  const panelsBox = document.getElementById("menuPanels");

  // Панель результатов поиска
  const resPanel = document.createElement("div");
  resPanel.className = "menu__panel";
  resPanel.id = "panel-search";
  panelsBox.appendChild(resPanel);

  // Плоский список всех блюд
  const ALL = [];
  MENU.forEach((cat) => cat.groups.forEach((g) =>
    g.items.forEach((item) => ALL.push({ ...item, group: g.title, cat: cat.tab }))));

  const norm = (s) => String(s).toLowerCase().replace(/ё/g, "е");

  input.addEventListener("input", () => {
    const q = norm(input.value.trim());

    if (q.length < 2) {
      // Возврат к вкладке, которая была активна до поиска
      resPanel.classList.remove("is-active");
      tabsBox.style.display = "";
      countEl.textContent = "";
      let idx = [...tabsBox.children].findIndex((t) => t.classList.contains("is-active"));
      if (idx < 0) idx = 0;
      tabsBox.children[idx].classList.add("is-active");
      panelsBox.children[idx].classList.add("is-active");
      return;
    }

    const found = ALL.filter((it) =>
      norm(it.n).includes(q) || (it.d && norm(it.d).includes(q)) || norm(it.group).includes(q));

    // Прячем вкладки и обычные панели, показываем результаты
    tabsBox.style.display = "none";
    panelsBox.querySelectorAll(".menu__panel").forEach((p) => p.classList.remove("is-active"));
    resPanel.classList.add("is-active");
    resPanel.innerHTML = "";

    if (!found.length) {
      countEl.textContent = "";
      resPanel.innerHTML = `<p class="menu__empty">Ничего не нашлось — попробуйте «шашлык», «пицца» или «десерт»</p>`;
      return;
    }

    const plural = (n) => n % 10 === 1 && n % 100 !== 11 ? "блюдо"
      : [2,3,4].includes(n % 10) && ![12,13,14].includes(n % 100) ? "блюда" : "блюд";
    countEl.textContent = `Найдено: ${found.length} ${plural(found.length)}`;

    const grid = document.createElement("div");
    grid.className = "menu__grid";
    found.forEach((item) => {
      const card = renderDish(item);
      const cat = document.createElement("span");
      cat.className = "dish__weight";
      cat.textContent = item.cat + " · " + item.group;
      card.appendChild(cat);
      grid.appendChild(card);
    });
    resPanel.appendChild(grid);
  });
}

/* ---------- Шеф рекомендует ---------- */
function buildChef() {
  const strip = document.getElementById("chefStrip");
  CHEF.forEach((c) => {
    const card = document.createElement("article");
    card.className = "chef__card";
    card.innerHTML = `
      <img src="${c.img}" alt="${c.name}" loading="lazy">
      <div class="chef__info">
        <span class="chef__tag">${c.tag}</span>
        <div class="chef__name">${c.name}</div>
        <div class="chef__price">${c.price}</div>
      </div>`;
    strip.appendChild(card);
  });
}

/* ---------- Бегущая строка ---------- */
function buildTicker() {
  const track = document.getElementById("tickerTrack");
  // Дублируем набор дважды для бесшовной анимации
  for (let i = 0; i < 2; i++) {
    TICKER.forEach((t) => {
      const s = document.createElement("span");
      s.className = "ticker__item";
      s.textContent = t;
      track.appendChild(s);
    });
  }
}

/* ---------- Индикатор прочтения ---------- */
function initProgress() {
  const bar = document.getElementById("progressbar");
  const update = () => {
    const h = document.documentElement;
    const max = h.scrollHeight - innerHeight;
    bar.style.width = (max > 0 ? (h.scrollTop / max) * 100 : 0) + "%";
  };
  window.addEventListener("scroll", update, { passive: true });
  update();
}

/* ---------- Угольки в hero (canvas) ---------- */
function initEmbers() {
  const canvas = document.getElementById("embers");
  if (!canvas || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const ctx = canvas.getContext("2d");
  const hero = document.getElementById("hero");
  const isMobile = matchMedia("(pointer: coarse)").matches;
  const COUNT = isMobile ? 22 : 44;
  let w, h, sparks = [], running = true, raf;

  const resize = () => {
    w = canvas.width = hero.clientWidth;
    h = canvas.height = hero.clientHeight;
  };
  const spawn = (init) => ({
    x: Math.random() * w,
    y: init ? Math.random() * h : h + 10,
    r: .8 + Math.random() * 2.2,
    vy: .35 + Math.random() * .9,
    vx: (Math.random() - .5) * .35,
    life: Math.random(),
    hue: 32 + Math.random() * 16,
  });
  const reset = () => { sparks = Array.from({ length: COUNT }, () => spawn(true)); };

  const tick = () => {
    if (!running) return;
    ctx.clearRect(0, 0, w, h);
    sparks.forEach((s, i) => {
      s.y -= s.vy;
      s.x += s.vx + Math.sin((s.y + i * 40) / 60) * .25;
      s.life += .012;
      const flicker = .35 + Math.abs(Math.sin(s.life * 6)) * .55;
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = `hsla(${s.hue}, 88%, 62%, ${flicker})`;
      ctx.shadowColor = `hsla(${s.hue}, 92%, 60%, .9)`;
      ctx.shadowBlur = 10;
      ctx.fill();
      if (s.y < -12) sparks[i] = spawn(false);
    });
    raf = requestAnimationFrame(tick);
  };

  resize(); reset(); tick();
  window.addEventListener("resize", () => { resize(); reset(); }, { passive: true });

  // Экономим ресурсы: анимация только пока hero на экране
  new IntersectionObserver(([en]) => {
    running = en.isIntersecting;
    if (running) tick(); else cancelAnimationFrame(raf);
  }).observe(hero);
}

/* ---------- 3D-наклон карточек ---------- */
function initTilt() {
  if (matchMedia("(pointer: coarse)").matches ||
      matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  document.querySelectorAll(".chef__card, .masonry__item").forEach((el) => {
    el.addEventListener("mousemove", (e) => {
      const r = el.getBoundingClientRect();
      const rx = ((e.clientY - r.top) / r.height - .5) * -7;
      const ry = ((e.clientX - r.left) / r.width - .5) * 9;
      el.style.transform = `perspective(700px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-4px)`;
    });
    el.addEventListener("mouseleave", () => { el.style.transform = ""; });
  });
}

/* ---------- Отзывы: слайдер ---------- */
function buildReviews() {
  const track = document.getElementById("revTrack");
  const dotsBox = document.getElementById("revDots");
  let index = 0;
  let timer;

  REVIEWS.forEach((r, i) => {
    const el = document.createElement("article");
    el.className = "review";
    el.innerHTML = `
      <div class="review__head">
        <div class="review__avatar" aria-hidden="true">${r.name.trim()[0]}</div>
        <div>
          <div class="review__name">${r.name}</div>
          <div class="review__meta">${r.meta}</div>
        </div>
        <div class="review__stars" aria-label="Оценка: ${r.stars} из 5">${"★".repeat(r.stars)}</div>
      </div>
      <p class="review__text">«${r.text}»</p>
      <div class="review__source">Отзыв с Яндекс Карт</div>`;
    track.appendChild(el);

    const dot = document.createElement("button");
    dot.className = "slider__dot" + (i === 0 ? " is-active" : "");
    dot.setAttribute("aria-label", "Отзыв " + (i + 1));
    dot.addEventListener("click", () => go(i, true));
    dotsBox.appendChild(dot);
  });

  const go = (i, manual) => {
    index = (i + REVIEWS.length) % REVIEWS.length;
    track.style.transform = `translateX(-${index * 100}%)`;
    dotsBox.querySelectorAll(".slider__dot").forEach((d, k) =>
      d.classList.toggle("is-active", k === index));
    if (manual) restart();
  };
  const restart = () => { clearInterval(timer); timer = setInterval(() => go(index + 1), 7000); };

  document.getElementById("revPrev").addEventListener("click", () => go(index - 1, true));
  document.getElementById("revNext").addEventListener("click", () => go(index + 1, true));

  // Свайпы на мобильных
  const viewport = document.getElementById("revViewport");
  let startX = 0;
  viewport.addEventListener("touchstart", (e) => { startX = e.touches[0].clientX; }, { passive: true });
  viewport.addEventListener("touchend", (e) => {
    const dx = e.changedTouches[0].clientX - startX;
    if (Math.abs(dx) > 45) go(index + (dx < 0 ? 1 : -1), true);
  }, { passive: true });

  restart();
}

/* ---------- Preloader ---------- */
function initPreloader() {
  const pre = document.getElementById("preloader");
  const done = () => setTimeout(() => pre.classList.add("is-done"), 500);
  if (document.readyState === "complete") done();
  else window.addEventListener("load", done);
  setTimeout(done, 3500); // страховка
}

/* ---------- Навигация ---------- */
function initNav() {
  const nav = document.getElementById("nav");
  const burger = document.getElementById("burger");
  const links = document.getElementById("navLinks");

  burger.addEventListener("click", () => {
    const open = nav.classList.toggle("is-open");
    burger.setAttribute("aria-expanded", open);
    document.body.style.overflow = open ? "hidden" : "";
  });
  links.addEventListener("click", (e) => {
    if (e.target.tagName === "A") {
      nav.classList.remove("is-open");
      burger.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
    }
  });
}

/* ---------- Плавная прокрутка ---------- */
function initSmoothScroll() {
  document.querySelectorAll("[data-scroll]").forEach((a) => {
    a.addEventListener("click", (e) => {
      const target = document.querySelector(a.getAttribute("href"));
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

/* ---------- Scroll Reveal (Intersection Observer) ---------- */
function initReveal() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (en.isIntersecting) {
        en.target.classList.add("is-visible");
        io.unobserve(en.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });

  document.querySelectorAll(".reveal").forEach((el, i) => {
    el.style.transitionDelay = (i % 5) * 0.08 + "s";
    io.observe(el);
  });
  // Hero появляется сразу
  requestAnimationFrame(() =>
    document.querySelectorAll(".reveal-hero").forEach((el) => el.classList.add("is-visible")));
}

/* ---------- Счётчики ---------- */
function initCounters() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (!en.isIntersecting) return;
      const el = en.target;
      const target = +el.dataset.count;
      const t0 = performance.now();
      const dur = 1600;
      const tick = (t) => {
        const k = Math.min((t - t0) / dur, 1);
        el.textContent = Math.round(target * (1 - Math.pow(1 - k, 3)));
        if (k < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
      io.unobserve(el);
    });
  }, { threshold: 0.6 });
  document.querySelectorAll("[data-count]").forEach((el) => io.observe(el));
}

/* ---------- Параллакс ленты ---------- */
function initParallax() {
  const img = document.querySelector("[data-parallax]");
  if (!img || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  let ticking = false;
  const update = () => {
    const rect = img.parentElement.getBoundingClientRect();
    const progress = (rect.top + rect.height / 2 - innerHeight / 2) / innerHeight;
    img.style.transform = `translateY(${progress * -60}px)`;
    ticking = false;
  };
  window.addEventListener("scroll", () => {
    if (!ticking) { requestAnimationFrame(update); ticking = true; }
  }, { passive: true });
  update();
}

/* ---------- Mouse-параллакс в hero ---------- */
function initMouseParallax() {
  const bg = document.querySelector(".hero__bg");
  if (!bg || matchMedia("(pointer: coarse)").matches ||
      matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  document.getElementById("hero").addEventListener("mousemove", (e) => {
    const x = (e.clientX / innerWidth - 0.5) * 14;
    const y = (e.clientY / innerHeight - 0.5) * 10;
    bg.style.transform = `translate(${-x}px, ${-y}px)`;
  });
}

/* ---------- Lightbox галереи ---------- */
function initLightbox() {
  const box = document.getElementById("lightbox");
  const img = document.getElementById("lbImg");
  const items = [...document.querySelectorAll(".masonry__item img")];
  let index = 0;

  const caption = document.getElementById("lbCaption");
  const open = (i) => {
    index = (i + items.length) % items.length;
    img.src = items[index].src;
    img.alt = items[index].alt;
    caption.textContent = items[index].alt;
    box.classList.add("is-open");
    box.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  };
  const close = () => {
    box.classList.remove("is-open");
    box.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  };

  items.forEach((el, i) => el.parentElement.addEventListener("click", () => open(i)));
  document.getElementById("lbClose").addEventListener("click", close);
  document.getElementById("lbPrev").addEventListener("click", () => open(index - 1));
  document.getElementById("lbNext").addEventListener("click", () => open(index + 1));
  box.addEventListener("click", (e) => { if (e.target === box) close(); });
  document.addEventListener("keydown", (e) => {
    if (!box.classList.contains("is-open")) return;
    if (e.key === "Escape") close();
    if (e.key === "ArrowLeft") open(index - 1);
    if (e.key === "ArrowRight") open(index + 1);
  });
}

/* ---------- Ripple-эффект на кнопках ----------
   Событие click (а не pointerdown/touchstart) специально:
   на iOS изменение DOM прямо в момент касания превращает
   переход по ссылке tel:/href в жест «удержать», а не «нажать».
   На click эффект запускается уже после того, как палец отпущен
   и звонок/переход по ссылке гарантированно начался по одному тапу. ---------- */
function initRipple() {
  document.querySelectorAll(".btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const rect = btn.getBoundingClientRect();
      const d = Math.max(rect.width, rect.height);
      const x = (e.clientX || rect.left + rect.width / 2) - rect.left - d / 2;
      const y = (e.clientY || rect.top + rect.height / 2) - rect.top - d / 2;
      const s = document.createElement("span");
      s.className = "ripple";
      s.style.width = s.style.height = d + "px";
      s.style.left = x + "px";
      s.style.top = y + "px";
      btn.appendChild(s);
      setTimeout(() => s.remove(), 700);
    });
  });
}

/* ---------- Магнитные кнопки ---------- */
function initMagnetic() {
  if (matchMedia("(pointer: coarse)").matches) return;
  document.querySelectorAll(".magnetic").forEach((el) => {
    el.addEventListener("mousemove", (e) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left - r.width / 2) * 0.22;
      const y = (e.clientY - r.top - r.height / 2) * 0.32;
      el.style.transform = `translate(${x}px, ${y}px)`;
    });
    el.addEventListener("mouseleave", () => { el.style.transform = ""; });
  });
}

/* ---------- Кнопка «Наверх» ---------- */
function initToTop() {
  const btn = document.getElementById("toTop");
  window.addEventListener("scroll", () => {
    btn.classList.toggle("is-visible", window.scrollY > 700);
  }, { passive: true });
  btn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
}


/* ============================================================
   Премиальные дополнения
   ============================================================ */

/* ---------- «Мой выбор»: список избранных блюд + заявка ---------- */
function initWishlist() {
  const STORE_KEY = "shampuroff_wishlist_v1";
  const fab = document.getElementById("wishlistFab");
  const fabCount = document.getElementById("wishlistCount");
  const modal = document.getElementById("wishlistModal");
  const closeBtn = document.getElementById("wishlistClose");
  const listBox = document.getElementById("wishlistList");
  const totalBox = document.getElementById("wishlistTotal");
  const sumEl = document.getElementById("wishlistSum");
  const actionsBox = document.getElementById("wishlistActions");
  const waLink = document.getElementById("wishlistWhatsapp");
  const vkLink = document.getElementById("wishlistVk");

  const loadState = () => {
    try {
      const raw = localStorage.getItem(STORE_KEY);
      return raw ? new Map(JSON.parse(raw)) : new Map();
    } catch { return new Map(); }
  };
  const saveState = () => {
    try { localStorage.setItem(STORE_KEY, JSON.stringify([...items])); } catch {}
  };

  const items = loadState(); // key: имя блюда -> цена

  const syncButtons = () => {
    document.querySelectorAll("[data-fav]").forEach((btn) => {
      const active = items.has(btn.dataset.fav);
      btn.classList.toggle("is-active", active);
      btn.setAttribute("aria-pressed", active);
    });
  };

  const renderList = () => {
    fabCount.textContent = items.size;
    fab.classList.toggle("is-visible", items.size > 0);

    if (!items.size) {
      listBox.innerHTML = `<p class="wishlist-modal__empty">Пока пусто. Нажмите ♡ на карточке блюда в меню — оно появится здесь.</p>`;
      totalBox.hidden = true;
      actionsBox.hidden = true;
      return;
    }

    listBox.innerHTML = "";
    let sum = 0;
    items.forEach((price, name) => {
      sum += price;
      const row = document.createElement("div");
      row.className = "wishlist-row";
      row.innerHTML = `
        <span class="wishlist-row__name">${name}</span>
        <span class="wishlist-row__price">${price}&thinsp;₽</span>
        <button class="wishlist-row__remove" type="button" data-remove="${name.replace(/"/g, "&quot;")}" aria-label="Убрать «${name}»">✕</button>`;
      listBox.appendChild(row);
    });
    totalBox.hidden = false;
    actionsBox.hidden = false;
    sumEl.textContent = sum.toLocaleString("ru-RU") + " ₽";

    const lines = [...items.entries()].map(([n, p]) => `• ${n} — ${p} ₽`).join("\n");
    const msg = `Здравствуйте! Хочу забронировать столик в ШампурOFF и предварительно заказать:\n${lines}\nИтого: ${sum} ₽`;
    waLink.href = `https://wa.me/79044877705?text=${encodeURIComponent(msg)}`;
    vkLink.href = `https://vk.ru/shampuroff.grillbar`;
  };

  const open_ = () => { modal.classList.add("is-open"); modal.setAttribute("aria-hidden", "false"); document.body.style.overflow = "hidden"; };
  const close_ = () => { modal.classList.remove("is-open"); modal.setAttribute("aria-hidden", "true"); document.body.style.overflow = ""; };

  document.addEventListener("click", (e) => {
    const favBtn = e.target.closest("[data-fav]");
    if (favBtn) {
      const name = favBtn.dataset.fav;
      const price = +favBtn.dataset.price;
      if (items.has(name)) items.delete(name); else items.set(name, price);
      saveState(); syncButtons(); renderList();
      return;
    }
    const rmBtn = e.target.closest("[data-remove]");
    if (rmBtn) {
      items.delete(rmBtn.dataset.remove);
      saveState(); syncButtons(); renderList();
    }
  });

  fab.addEventListener("click", open_);
  closeBtn.addEventListener("click", close_);
  modal.addEventListener("click", (e) => { if (e.target === modal) close_(); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape" && modal.classList.contains("is-open")) close_(); });

  // Меню строится динамически — карточки могут появляться после инициализации
  new MutationObserver(syncButtons).observe(document.getElementById("menuPanels"), { childList: true, subtree: true });

  syncButtons();
  renderList();
}

/* ---------- Курсор-уголёк (десктоп) ---------- */
function initEmberCursor() {
  if (matchMedia("(pointer: coarse)").matches ||
      matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const dot = document.getElementById("emberCursor");
  let raf = null, tx = 0, ty = 0, cx = 0, cy = 0, active = false;

  window.addEventListener("mousemove", (e) => {
    tx = e.clientX; ty = e.clientY;
    if (!active) { active = true; dot.classList.add("is-active"); loop(); }
    if (Math.random() < .35) spawnTrail(tx, ty);
  });
  window.addEventListener("mouseleave", () => { dot.classList.remove("is-active"); });

  function loop() {
    cx += (tx - cx) * .25;
    cy += (ty - cy) * .25;
    dot.style.transform = `translate(${cx - 4.5}px, ${cy - 4.5}px)`;
    raf = requestAnimationFrame(loop);
  }

  function spawnTrail(x, y) {
    const s = document.createElement("span");
    s.className = "ember-trail";
    const size = 3 + Math.random() * 4;
    s.style.width = s.style.height = size + "px";
    s.style.transform = `translate(${x - size / 2}px, ${y - size / 2}px)`;
    s.style.opacity = ".8";
    document.body.appendChild(s);
    const dx = (Math.random() - .5) * 26;
    const rise = 22 + Math.random() * 26;
    requestAnimationFrame(() => {
      s.style.transition = "transform 900ms ease-out, opacity 900ms ease-out";
      s.style.transform = `translate(${x - size / 2 + dx}px, ${y - size / 2 - rise}px)`;
      s.style.opacity = "0";
    });
    setTimeout(() => s.remove(), 950);
  }
}

/* ---------- Кнопка «Поделиться» (Web Share API с запасным вариантом) ---------- */
function initShare() {
  const share = async (title, text, url) => {
    if (navigator.share) {
      try { await navigator.share({ title, text, url }); return; } catch { return; }
    }
    try {
      await navigator.clipboard.writeText(url);
      alert("Ссылка скопирована — вставьте её в сообщение друзьям.");
    } catch {
      prompt("Скопируйте ссылку:", url);
    }
  };

  const heroBtn = document.getElementById("shareBtn");
  if (heroBtn) heroBtn.addEventListener("click", () =>
    share("ШампурOFF — гриль-бар в Радужном", "Кухня живого огня: шашлыки, стейки, пицца и десерты.", location.href));

  const lbBtn = document.getElementById("lbShare");
  if (lbBtn) lbBtn.addEventListener("click", () => {
    const img = document.getElementById("lbImg");
    share("ШампурOFF", img.alt || "Фото из гриль-бара ШампурOFF", location.href);
  });
}
