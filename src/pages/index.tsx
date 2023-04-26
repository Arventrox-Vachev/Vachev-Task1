import { NextPage } from "next";
import { Hero, FlyWheel, Icons, Steps, JoinMailing } from "sections";

const Home: NextPage = () => {
  return (
    <main>
      <Hero />
      <FlyWheel />
      <Icons />
      <Steps />
      <JoinMailing />
    </main>
  );
};

export default Home;
