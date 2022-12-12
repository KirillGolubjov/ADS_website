const languages = {
  "menu-link-1": { en: "Home", ru: "Главная" },
  "menu-link-2": { en: "About", ru: "О нас" },
  "menu-link-3": { en: "Services", ru: "Услуги" },
  "menu-link-4": { en: "Info", ru: "Инфо" },
  "menu-link-5": { en: "Contacts", ru: "Контакты" },
  info__title: {
    en: "AdsFuel Market is an online platform for advertising campaigns on the Internet.",
    ru: "Рекламная сеть AdsFuel Market – это онлайн платформа для проведения рекламных кампаний в интернет пространстве.",
  },
  "info__text-1": {
    en: "For AdsFuel Market, helping our customers and partners succeed is extremely important. Our passionate and experienced team successfully implements ideas and strategies. Before launching each advertising campaign, we will understand the task at hand in detail!",
    ru: "Для компании AdsFuel Market крайне важно помогать своим клиентам и партнерам добиваться успеха. Наша увлеченная своим делом опытная команда успешно реализует идеи и стратегии. Перед запуском каждой рекламной кампании мы детально разберемся в поставленной задаче!",
  },
  "info__text-2": {
    en: "Our team monitors trends in the market and improves in order to always meet the needs of our customers. AdsFuel Market uses popular advertising formats on the market, constantly improving TDS system with wide possibilities of targeting and optimization.",
    ru: "Наша команда следит за трендами на рынке и совершенствуется для того, чтобы всегда удовлетворять потребности наших клиентов. Компания AdsFuel Market использует востребованные рекламные форматы на рынке, постоянно совершенствующуюся TDS-систему с широкими возможностями таргетингов и оптимизации.",
  },
  "account-type-1": { en: "Account type", ru: "Пользователь" },
  "account-type-2": { en: "Advertiser", ru: "Рекламодатель" },
  "account-type-3": { en: "Web master", ru: "Вебмастер" },
  button: { en: "Send", ru: "Отправить" },
  footer__title: { en: "Contacts", ru: "Контакты" },
  general: { en: "General", ru: "Общие" },
  "footer__address-title": { en: "Address", ru: "Адрес" },
  "footer__address-text": {
    en: "Parda 4, Tallinn, Estonia",
    ru: "Парда 4,Таллин, Эстония",
  },
};

const maxImg = document.querySelector(".right-panel img");
const select = document.querySelector("select");
const allLang = ["en", "ru"];

select.addEventListener("change", changeURLLanguage);

//перенаправить на URL с указанием языка
function changeURLLanguage() {
  let lang = select.value;
  location.href = window.location.pathname + "#" + lang;
  location.reload();
}

function changeLanguage() {
  let hash = window.location.hash;
  hash = hash.substring(1);
  console.log(hash);
  if (!allLang.includes(hash)) {
    location.href = window.location.pathname + "#en";
    location.reload();
  }
  select.value = hash;

  for (let key in languages) {
    document.querySelector(".lng-" + key).innerHTML = languages[key][hash];
  }
}
changeLanguage();

const placeholder = document
  .getElementById("contact-name")
  .getAttribute("placeholder");

function changePlaceholder() {
  if (placeholder !== "undefined") {
    return (placeholder.innerHTML = "ФИО");
  }
}
console.log(changePlaceholder());
