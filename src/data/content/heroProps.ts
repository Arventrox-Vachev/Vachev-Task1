import { HeroProps } from "sections";

export const heroSectionProps: HeroProps = {
  title:
    "<span>The ugly truth: Your campaign data are a mess.</span> By fixing it, you can improve your campaign performance with over 25%.",
  subtitles: [
    "Optimizing campaigns is hard, especially if you lack trustworthy data. Unfortunately this is the case for more than 65% of the companies.",
    "Boost your  performance by fixing your data across all channels, brands and agencies."
  ],
  image: {
    src: "/imgs/hero.png",
    alt: "hero",
    width: 740,
    height: 499
  },
  joinWaitingListFormProps: {
    title: "<span>Join</span> waiting list for access",
    emailHolder: "Enter email",
    buttonText: "Join",
    policiesText: [
      "I agree to the <span>Terms & Conditions</span> and the <span>Privacy Policy</span>",
      "I want to subscribe to the newsletter "
    ]
  }
};
