import { Header, HeaderMobile } from "~/components/Header";

const Home = () => {
  return (
    <>
      <HeaderMobile className="lg:hidden" />
      <Header className="hidden lg:flex" />
    </>
  );
};

export default Home;
