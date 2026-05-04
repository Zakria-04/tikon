import electrician from "@/assets/images/electrician.png";
import paintRoller from "@/assets/images/paint-roller.png";
import plumber from "@/assets/images/plumber.png";
import gypsum from "@/assets/images/gypsum-board.png";
import tile from "@/assets/images/tile.png";
import closet from "@/assets/images/closet.png";
import renovation from "@/assets/images/renovation.png";
import ac from "@/assets/images/air-conditioner.png";

export const categories = [
  {
    name: "שיפוצים",
    bio: "שיפוץ ביתי",
    image: renovation,
  },
  {
    name: "חשמל",
    bio: "תיקוני חשמל",
    image: electrician,
  },
  {
    name: "צבע",
    bio: "צביעת בתים",
    image: paintRoller,
  },
  {
    name: "אינסטלציה",
    bio: "תיקוני צנרת",
    image: plumber,
  },

  {
    name: "מזגנים",
    bio: "ריצוף וחיפוי",
    image: ac,
  },
  {
    name: "ריצוף",
    bio: "ריצוף וחיפוי",
    image: tile,
  },
  {
    name: "נגרות",
    bio: "ארונות ומטבחים",
    image: closet,
  },
  {
    name: "גבס",
    bio: "עבודות גבס",
    image: gypsum,
  },
];

export const cities = ["תל אביב", "חיפה", "עכו", "נהריה", "כרמיאל"];
export const regions = ["צפון", "מרכז", "דרום"];
