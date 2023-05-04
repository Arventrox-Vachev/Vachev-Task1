import { NextPage } from "next";
import { Hero, FlyWheel, Icons, Steps, Mailing } from "sections";
import { heroSectionProps, flywheelProps, iconsProps, mailingProps, stepsProps } from "data";

const Home: NextPage = () => {
  return (
    <main>
      <Hero {...heroSectionProps} />
      <FlyWheel {...flywheelProps} />
      <Icons {...iconsProps} />
      <Steps {...stepsProps} />
      <Mailing {...mailingProps} />
    </main>
  );
};

export default Home;
