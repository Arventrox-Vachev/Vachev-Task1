import { StepsProps } from "sections";

export const stepsProps = {
  title: "You can achieve this in just <span>three easy steps</span>",
  cards: [
    {
      number: 1,
      title: "Organize",
      desktopSubtitle: "Set up all your campaigns in one tool replacing hundreds of Excel Sheets",
      description:
        "Create Smart Campaigns with clear goals, objectives and tactics across all brands, channels and agencies. Import all historic campaigns and learn about your performance drivers immediately.",
      image: {
        src: "/imgs/step1-image.png",
        alt: "Organize",
        width: 193,
        height: 197
      }
    },
    {
      number: 2,
      title: "Analyze",
      desktopSubtitle: "Use validated data to see performance in customizable dashboards",
      description:
        "We combine all relevant data sources and ensure data quality through automated tests. Be informed upfront to any trend change through our automated anomaly detection.",
      image: {
        src: "/imgs/step2-image.png",
        alt: "Analyze",
        width: 193,
        height: 197
      }
    },
    {
      number: 3,
      title: "Optimize",
      desktopSubtitle: "Improve your campaign performance with 25% through Smart Insights",
      mobileSubtitle: "Improve your campaigns through actionable insights",
      description:
        "Our Smart Insights Engine will combine historic campaign performance, marketing mix modeling and validated learnings to give you a clear holistic understanding in marketing performance and incrementality.",
      image: {
        src: "/imgs/step3-image.png",
        alt: "Optimize",
        width: 193,
        height: 197
      }
    }
  ]
};
