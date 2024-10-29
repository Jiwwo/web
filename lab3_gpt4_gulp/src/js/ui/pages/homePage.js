import initHeader from "./../components/initHeader.js";
import initHero from "./../components/initHero.js";
import initBrands from "./../components/initBrands.js";
import initWhatIsGpt from "./../components/initWhatIsGpt.js";
import initFutureHere from "./../components/initFutureHere.js";
import initBurger from "./../components/initBurger.js";
import initVR_person from "../components/init_VR.js";
import initRegistration from "../components/initRegistration.js";
import initBlog from "../components/initBlog.js";
import initFooter from "../components/initFooter.js";
import initAllRights from "../components/initAllRights.js";

const createHomePageTemplate = (rootNode) => {
  // формируем шаблон базовых секций для дальнейшего монтирования в них
  // соответствующих разделов
  const template = `
    <section class="section header"></section>
    <section class="section hero_section"></section>
    <section class="section brands_section"></section>
    <section class="section what_is_chatgpt_section"></section>
    <section class="section future_here"></section>
    <section class="section woman_vr"></section>
    <section class="section registration"></section>
    <section class="section blog"></section>
    <section class="section footer"></section>
    <section class="section allRights"></section>
  `;

  rootNode.insertAdjacentHTML("beforeend", template); 
};

const homePage = () => {
  // инициализация элементов страницы
  const rootNode = document.querySelector("#root");
  createHomePageTemplate(rootNode);

  // инициализация шапки страницы с мок датой
  const headerNode = rootNode.querySelector(".header");
  initHeader(headerNode);

  // инициализация хиро раздела
  const heroNode = rootNode.querySelector(".hero_section");
  initHero(heroNode);

  // инициализация хиро раздела
  const brandsNode = rootNode.querySelector(".brands_section");
  initBrands(brandsNode);

  // инициализация хиро раздела
  const whatIsGptNode = rootNode.querySelector(".what_is_chatgpt_section");
  initWhatIsGpt(whatIsGptNode);

  // инициализация раздела "Будущее наступило" с мок датой
  const futureHereNode = rootNode.querySelector(".future_here");
  initFutureHere(futureHereNode);

  const VR_personNode = rootNode.querySelector(".woman_vr");
  initVR_person(VR_personNode);

  const registrationNode = rootNode.querySelector(".registration");
  initRegistration(registrationNode);

  const blogNode = rootNode.querySelector(".blog");
  initBlog(blogNode);

  const FooterNode = rootNode.querySelector(".footer");
  initFooter(FooterNode);

  const allRightsNode = rootNode.querySelector(".allRights");
  initAllRights(allRightsNode);

  // инициализация бургера для адаптивного меню
  initBurger(headerNode);
};

export default homePage;