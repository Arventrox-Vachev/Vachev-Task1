import { MailingProps } from "sections";

export const mailingProps: MailingProps = {
  title: "<span>Start</span> optimizing <span>now</span>",
  joinWaitingListFormProps: {
    title: "<span>Join</span> waiting list for access",
    successTitle: "<span>Thank You</span> for joining",
    emailHolder: "Enter email",
    buttonText: "Join",
    policiesText: {
      tOS: `I agree to the <a href="/">Terms & Conditions</a> and the <a href="">Privacy Policy</a>`,
      newsLetter: "I want to subscribe to the newsletter "
    },
    validationImgs: {
      validImg: "/imgs/check-image.png",
      invalidImg: "/imgs/x-image.png"
    },
    image: {
      src: "/imgs/success-image.png",
      alt: "success",
      width: 97,
      height: 73
    }
  }
};
