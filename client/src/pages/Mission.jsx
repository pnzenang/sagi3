import { Contact, Hero, Services } from "../components";
import Wrapper from "../assets/wrappers/HomePage";
const Mission = () => {
  return (
    <Wrapper>
      <Hero />
      {/* <FeaturedProducts /> */}
      <Services />
      <Contact />
    </Wrapper>
  );
};
export default Mission;
