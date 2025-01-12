import Header from "../components/Header";
import Hero from "../components/Hero";
import Brands from "../components/Brands";
import WhatIsChatGpt from "../components/WhatIsChatGpt";
import FutureHere from "../components/FutureHere";
import WomanVR from "../components/WomanVR";
import Registration from "../components/Registration";
import Blog from "../components/Blog";
import Footer from "../components/Footer";
import AllRights from "../components/AllRights";

const Home = () => {
  return (
    <div>
      <section className="section header" id="header">
        <Header />
      </section>
      <section className="section hero_section" id="hero">
        <Hero />
      </section>
      <section className="section brands_section" id="brands">
        <Brands />
      </section>
      <section className="section what_is_chatgpt_section" id="what-is">
        <WhatIsChatGpt />
      </section>
      <section className="section future_here" id="future">
        <FutureHere />
      </section>
      <section className="section woman-vr">
        <WomanVR />
      </section>
      <section className="section registration">
        <Registration />
      </section>
      <section className="section blog">
        <Blog />
      </section>
      <section className="footer">
        <Footer />
      </section>
      <section className="allrights">
        <AllRights />
      </section>
    </div>
  );
};

export default Home;
