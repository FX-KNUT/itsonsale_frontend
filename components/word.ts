import Sidebar from "./main/sidebar/Sidebar";
import Section from "./main/section/Section";
import Badges from "./main/sidebar/Badges";
import SearchForm from "./main/sidebar/SearchForm";

// header
export const LOGO = `It's on Sale!`;

// main
export const MAIN_CONTENTS = [Sidebar, Section];

// sidebar
export const SIDEBAR_CONTENTS = [Badges, SearchForm];

/* Badge Brand */
interface BADGEPROPS {
  brand: string;
  key: string;
}
export const BADGE_BRANDS: BADGEPROPS[] = [
  { brand: "CU", key: "cu" },
  { brand: "GS25", key: "gs25" },
  { brand: "7Eleven", key: "seven" },
  { brand: "MINISTOP", key: "ministop" },
  { brand: "EMART", key: "emart" },
];

// section
