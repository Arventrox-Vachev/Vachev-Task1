import { HeaderProps } from "collections";

export const headerProps: HeaderProps = {
  buttonsText: { login: "Login", register: "Register", logout: "Logout" },
  logo: {
    title: "CampaignMeister",
    image: {
      src: "/imgs/logo-image.png",
      alt: "Some text",
      width: 60.59,
      height: 28.24
    }
  },
  registerForm: {
    heading: "Register",
    nameLabel: "Name",
    emailLabel: "Email",
    passwordLabel: "Password",
    nameHolder: "Enter your name",
    emailHolder: "Enter email address",
    passwordHolder: "Enter password",
    buttonText: "Register",
    validationImgs: {
      validImgSrc: "/imgs/check-image.png",
      invalidImgSrc: "/imgs/x-image.png"
    }
  },
  signInForm: {
    heading: "Login",
    emailLabel: "Email",
    passwordLabel: "Password",
    emailHolder: "Enter email address",
    passwordHolder: "Enter password",
    buttonText: "Login",
    validationImgs: {
      validImgSrc: "/imgs/check-image.png",
      invalidImgSrc: "/imgs/x-image.png"
    },
    discordImgSrc: "/imgs/discord-image.png",
    googleImgSrc: "/imgs/google-image.png"
  }
};
