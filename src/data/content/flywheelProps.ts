import { FlyWheelProps } from "sections";

export const flywheelProps: FlyWheelProps = {
  title: "How to <span> boost your performance </span> with flawless data",

  description: [
    "Optimizing campaigns is hard, especially across all your channels, brands and agencies. Campaign-Meister ensures you and your team  have all the insights to boost your campaign performance. ",
    "Optimizing campaigns is hard, especially across all your channels, brands and agencies. Campaign-Meister ensures you and your team  have all the insights to boost your campaign performance. Optimizing campaigns is hard, especially across all your channels, brands and agencies. "
  ],
  cards: [
    {
      title: "Smart Start",
      description:
        "Use all your historic data to predict your Campaign Success Probability so you can optimise on it upfront.",
      image: {
        src: "/imgs/Smart_Start.png",
        alt: "Smart Start",
        width: 102,
        height: 102
      }
    },
    {
      title: "Smart Learning",
      description:
        "Gain advanced insights by combining campaign attribution, marketing mix modeling and learnings from validated experiments.",
      image: {
        src: "/imgs/Smart_Learning.png",
        alt: "Smart Learning",
        width: 102,
        height: 102
      }
    },
    {
      title: "Smart Flight",
      description:
        "Compare campaign tactics across all channels in real-time and proceed  with your winning tactics.",
      image: {
        src: "/imgs/Smart_Flight.png",
        alt: "Smart Flight",
        width: 102,
        height: 102
      }
    }
  ],
  image: {
    src: "/imgs/ASSET_diagram.png",
    alt: "Flywheel",
    width: 551,
    height: 551
  }
};
