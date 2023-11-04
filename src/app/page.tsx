import { EventTracker } from "~/components/EventTracker";
import { Header, HeaderMobile } from "~/components/Header";

const Home = () => {
  return (
    <>
      <HeaderMobile className="lg:hidden" />
      <Header className="hidden lg:flex" />
      <EventTracker />
    </>
  );
};

export default Home;
