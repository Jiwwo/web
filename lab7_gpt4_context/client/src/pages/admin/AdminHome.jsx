import AdminHeader from "../../components/admin/AdminHeader";
import AdminHero from "../../components/admin/AdminHero";
import AdminBrands from "../../components/admin/AdminBrands";
import AdminFutureHere from "../../components/admin/AdminFutureHere";
import AdminWhatIsChatGpt from "../../components/admin/AdminWhatIsChatGpt";
import AdminWomanVr from "../../components/admin/AdminWomanVr";
import AdminRegistration from "../../components/admin/AdminRegistration";
import AdminBlog from "../../components/admin/AdminBlog";
import AdminFooter from "../../components/admin/AdminFooter";
import AdminAllRights from "../../components/admin/AdminAllRights";

import HeroContextProvider from "../../contexts/admin/HeroContext";
import HeaderContextProvider from "../../contexts/admin/HeaderContext";
import FutureHereContextProvider from "../../contexts/admin/FutureHereContext";
import BrandsContextProvider from "../../contexts/admin/BrandsContext";
import WhatIsChatGptContextProvider from "../../contexts/admin/WhatIsChatGpt";
import WomanVrContextProvider from "../../contexts/admin/WomanVrContext";
import RegistrationContextProvider from "../../contexts/admin/RegistrationContext";
import BlogContextProvider from "../../contexts/admin/BlogContext";
import FooterContextProvider from "../../contexts/admin/FooterContext";
import AllRightsContextProvider from "../../contexts/admin/AllRightsContext";

const AdminHome = () => {
  return (
    <div>
      <HeaderContextProvider>
        <AdminHeader />
      </HeaderContextProvider>
      <HeroContextProvider>
        <AdminHero />
      </HeroContextProvider>
      <BrandsContextProvider>
        <AdminBrands />
      </BrandsContextProvider>
      <WhatIsChatGptContextProvider>
        <AdminWhatIsChatGpt />
      </WhatIsChatGptContextProvider>
      <FutureHereContextProvider>
        <AdminFutureHere />
      </FutureHereContextProvider>
      <WomanVrContextProvider>
        <AdminWomanVr />
      </WomanVrContextProvider>
      <RegistrationContextProvider>
        <AdminRegistration />
      </RegistrationContextProvider>
      <BlogContextProvider>
        <AdminBlog />
      </BlogContextProvider>
      <FooterContextProvider>
        <AdminFooter />
      </FooterContextProvider>
      <AllRightsContextProvider>
        <AdminAllRights />
      </AllRightsContextProvider>
    </div>
  );
};

export default AdminHome;
