import { MailingProps } from "sections";

export const mailingProps: MailingProps = {
  title: "<span>Start</span> optimizing <span>now</span>",
  joinWaitingListFormProps: {
    title: "<span>Join</span> waiting list for access",
    successTitle: "<span>Thank You</span> for joining",
    emailHolder: "Enter email",
    buttonText: "Join",
    policiesText: {
      TOS: `I agree to the <a href="/">Terms & Conditions</a> and the <a href="">Privacy Policy</a>`,
      newsLetter: "I want to subscribe to the newsletter "
    },
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
    image: {
      src: "/imgs/success-image.png",
      alt: "success",
      width: 97,
      height: 73
    }
  }
};
