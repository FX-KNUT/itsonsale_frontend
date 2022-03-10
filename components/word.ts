// 이 파일은 components에서 사용할 단어들이나 다른 컴포넌트들을 선언하고 import해서 쓸 수 있게 만든 파일입니다.
import { Value } from "sass";
import Badges from "./main/sidebar/Badges";
import SearchForm from "./main/sidebar/SearchForm";

/* header에서 사용할 단어 */
export const LOGO = `It's on Sale!`;

/* sidebar에서 사용할 단어 */
export const SIDEBAR_CONTENTS = [Badges, SearchForm];

/* Badge Brand */
interface BADGEPROPS {
  brand: string;
  key: string;
}
export const BADGE_BRANDS: BADGEPROPS[] = [
  { brand: "CU", key: "cu" },
  { brand: "GS25", key: "gs25" },
  { brand: "7ELEVEN", key: "seven" },
  { brand: "MINISTOP", key: "ministop" },
  { brand: "EMART", key: "emart" },
];

/* select sales */
interface Sales {
  value: string;
  label: string;
}

export const SalesSort: Sales[] = [
  { value: "전체", label: "전체" },
  { value: "1+1", label: "1+1" },
  { value: "2+1", label: "2+1" },
]

/* Section */

/* product */
export const WON = "원";
