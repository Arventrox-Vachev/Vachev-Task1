import { NextPage } from "next";
import { Hero, FlyWheel, Icons, Steps, JoinMailing } from "sections";
import { heroSectionProps, flywheelProps, iconsProps, mailingListProps, stepsProps } from "data";

const Home: NextPage = () => {
  return (
    <main>
      <Hero {...heroSectionProps} />
      <FlyWheel {...flywheelProps} />
      <Icons {...iconsProps} />
      <Steps {...stepsProps} />
      <JoinMailing {...mailingListProps} />
    </main>
  );
};

export default Home;
