import InstagramIcon from "~/assets/icons/instagramIcon";
import facebookIcon from "~/assets/icons/facebookIcon";
import YoutubeIcon from "~/assets/icons/youtubeIcon";
import TikTokIcon from "~/assets/icons/tiktokIcon";
import { socialLinks } from "~/constants/social";

export const social = [
  {
    id: 1,
    icon: InstagramIcon,
    link: socialLinks.instagram,
  },
  {
    id: 2,
    icon: facebookIcon,
    link: socialLinks.facebook,
  },
  {
    id: 3,
    icon: YoutubeIcon,
    link: socialLinks.youtube,
  },
  {
    id: 4,
    icon: TikTokIcon,
    link: socialLinks.tiktok,
  },
];
