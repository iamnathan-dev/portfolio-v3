import About from "./component/about";
import Hero from "./component/her";
import FeaturesClients from "./component/features";

export const HomePage = () => {
  return (
    <section>
      <Hero />
      <About />
      <FeaturesClients />
    </section>
  );
};
