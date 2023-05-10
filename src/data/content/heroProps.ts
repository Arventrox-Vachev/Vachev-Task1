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
    successTitle: "<span>Thank You</span> for joining",
    emailHolder: "Enter email",
    buttonText: "Join",
    validationImgs: {
      validImg: {
        src: "/imgs/check-image.png",
        alt: "valid",
        width: 24,
        height: 24
      },
      invalidImg: {
        src: "/imgs/x-image.png",
        alt: "valid",
        width: 24,
        height: 24
      }
    },
    policiesText: {
      TOS: "I agree to the <span>Terms & Conditions</span> and the <span>Privacy Policy</span>",
      newsLetter: "I want to subscribe to the newsletter "
    },
    image: {
      src: "/imgs/success-image.png",
      alt: "success",
      width: 97,
      height: 73
    }
  }
};
