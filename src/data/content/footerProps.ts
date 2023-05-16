import { FooterProps } from "collections";

const footerProps = {
  desktopDescription: "Boost your campaign performance with over 25% by fixing your campaign data",
  mobileDescription: "The art of Campaign Optimization",
  logo: {
    text: "CampaignMeister",
    image: {
      src: "/imgs/logo-image.png",
      alt: "Some text",
      width: 60.59,
      height: 28.24
    }
  },
  navItems: [
    {
      title: "Navigation",
      links: [
        "The art of optimizing",
        "Boost your campaigns",
        "Start optimizing now",
        "CampaignMeisters building blocks"
      ]
    },
    {
      title: "Legal",
      links: ["Privacy Policy", "Cookie Policy", "Terms & Conditions"]
    }
  ],

  desktopCopyright:
    "© 2022, CampaignMeister is a product of &nbsp; <span> Human Data Associates </span>",
  mobileCopyright: "CampaignMeister is a product of <span> Human Data Associates </span> © 2022"
};
