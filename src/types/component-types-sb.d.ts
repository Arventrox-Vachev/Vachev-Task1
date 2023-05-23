import {StoryblokStory} from 'storyblok-generate-ts'

export interface AssetStoryblok {
  alt?: string;
  copyright?: string;
  id: number;
  filename: string;
  name: string;
  title?: string;
  focus?: string;
  [k: string]: any;
}

export interface FlywheelCardStoryblok {
  heading: string;
  description: string;
  cardImage: AssetStoryblok;
  _uid: string;
  component: "flywheel_card";
  [k: string]: any;
}

export interface FlywheelSectionStoryblok {
  heading: string;
  description: string;
  description2: string;
  flywheelImage: AssetStoryblok;
  flywheelCards: any[];
  _uid: string;
  component: "flywheel_section";
  [k: string]: any;
}

export interface FooterStoryblok {
  desktopDescription: string;
  mobileDescription: string;
  logo: any[];
  navItems: any[];
  desktopCopyright: string;
  mobileCopyright: string;
  _uid: string;
  component: "footer";
  [k: string]: any;
}

export interface FormInputStoryblok {
  _uid: string;
  component: "form_input";
  [k: string]: any;
}

export interface HeaderStoryblok {
  buttonText: string;
  logo: any[];
  _uid: string;
  component: "header";
  [k: string]: any;
}

export interface HeroSectionStoryblok {
  heading: string;
  subheading: string;
  subheading2: string;
  heroImage: AssetStoryblok;
  joinWaitingListForm: any[];
  _uid: string;
  component: "hero_section";
  [k: string]: any;
}

export interface IconCardStoryblok {
  heading: string;
  description: string;
  cardImage: AssetStoryblok;
  _uid: string;
  component: "iconCard";
  [k: string]: any;
}

export interface IconsSectionStoryblok {
  heading: string;
  mobileHeading: string;
  iconCards: any[];
  _uid: string;
  component: "icons_section";
  [k: string]: any;
}

export interface JoinWaitingListFormStoryblok {
  heading: string;
  successHeading: string;
  emailHolder: string;
  buttonText: string;
  tosText: string;
  newsletterText: string;
  desktopActiveImage: AssetStoryblok;
  mobileActiveImage: AssetStoryblok;
  invalidImage: AssetStoryblok;
  validImage: AssetStoryblok;
  successImage: AssetStoryblok;
  _uid: string;
  component: "joinWaitingListForm";
  [k: string]: any;
}

export type MultilinkStoryblok =
  | {
      cached_url?: string;
      linktype?: string;
      [k: string]: any;
    }
  | {
      id?: string;
      cached_url?: string;
      anchor?: string;
      linktype?: "story";
      story?: {
        name: string;
        created_at?: string;
        published_at?: string;
        id: number;
        uuid: string;
        content?: {
          [k: string]: any;
        };
        slug: string;
        full_slug: string;
        sort_by_date?: null | string;
        position?: number;
        tag_list?: string[];
        is_startpage?: boolean;
        parent_id?: null | number;
        meta_data?: null | {
          [k: string]: any;
        };
        group_id?: string;
        first_published_at?: string;
        release_id?: null | number;
        lang?: string;
        path?: null | string;
        alternates?: any[];
        default_full_slug?: null | string;
        translated_slugs?: null | any[];
        [k: string]: any;
      };
      [k: string]: any;
    }
  | {
      url?: string;
      cached_url?: string;
      anchor?: string;
      linktype?: "asset" | "url";
      [k: string]: any;
    }
  | {
      email?: string;
      linktype?: "email";
      [k: string]: any;
    };

export interface LinkStoryblok {
  linkHeading: string;
  link: MultilinkStoryblok;
  _uid: string;
  component: "Link";
  [k: string]: any;
}

export interface LogoStoryblok {
  text: string;
  image: AssetStoryblok;
  _uid: string;
  component: "logo";
  [k: string]: any;
}

export interface MailingSectionStoryblok {
  heading: string;
  backgroundImage: AssetStoryblok;
  joinWaitingListForm: any[];
  _uid: string;
  component: "mailing_section";
  [k: string]: any;
}

export interface NavContainerStoryblok {
  heading: string;
  linkItems: any[];
  _uid: string;
  component: "NavContainer";
  [k: string]: any;
}

export interface PageStoryblok {
  body?: any[];
  _uid: string;
  component: "page";
  uuid?: string;
  [k: string]: any;
}

export interface StepsCardStoryblok {
  heading: string;
  number: number;
  desktopSubheading: string;
  mobileSubheading?: string;
  description: string;
  cardImage: AssetStoryblok;
  _uid: string;
  component: "stepsCard";
  [k: string]: any;
}

export interface StepsSectionStoryblok {
  heading: string;
  stepsCards: any[];
  _uid: string;
  component: "steps_section";
  [k: string]: any;
}
