import GreyBrownShirt from "../../../assets/men/GreyBrownShirt.png";
import GreyRusticLinen from "../../../assets/men/GreyRusticLinen.png";
import GreyTShirt from "../../../assets/men/GreyTShirt.png";
import longsleevedTshirt from "../../../assets/men/longsleevedTshirt.png";
import RedPlainLong from "../../../assets/men/RedPlainLong.png";
import sepiaBrownSuit from "../../../assets/men/sepiaBrownSuit.png";
import whiteHoodie from "../../../assets/men/whiteHoodie.png";
import BlackHoodie from "../../../assets/men/BlackHoodie.png";
import BlueLongsleeveTshirt from "../../../assets/men/BlueLongsleeveTshirt.png";

import Bedroom from "../../../assets/men/Bedroom.png";
import BarberChair from "../../../assets/men/BarberChair.png";
import chair from "../../../assets/men/chair.png";
import Dinningtable from "../../../assets/men/Dinningtable.png";

import digitalclock from "../../../assets/men/digitalclock.png";
import DjSpeaker from "../../../assets/men/DjSpeaker.png";
import GameController from "../../../assets/men/GameController.png";
import Headphone from "../../../assets/men/Headphone.png";
import Loudspeaker from "../../../assets/men/Loudspeaker.png";

import sneakers from "../../../assets/men/sneakers.png";
import timberland from "../../../assets/men/timberland.png";
import shoe1 from "../../../assets/shoe1.png";
import shoeflash from "../../../assets/shoeflash.png";

export const Store = {
  men: {
    Fashion: "Men Fashion",
    sections: ["Clothes", "Furniture", "Electronics", "Shoes"],
    clothes: [
      GreyBrownShirt,
      GreyRusticLinen,
      GreyTShirt,
      longsleevedTshirt,
      RedPlainLong,
      sepiaBrownSuit,
      whiteHoodie,
      BlackHoodie,
      BlueLongsleeveTshirt,
    ],
    furniture: [Bedroom, BarberChair, chair, Dinningtable],
    electronics: [
      digitalclock,
      DjSpeaker,
      GameController,
      Headphone,
      Loudspeaker,
    ],
    shoe: [sneakers, timberland, shoe1, shoeflash],
  },
  women: {
    Fashion: "Women Fashion",
    sections: ["Clothes", "Jewelry", "Shoes"],
    clothes: [],
    Jewelry: [],
    shoe: [],
  },

  kids: {
    Fashion: "Kids Fashion",
    sections: ["Clothes", "Furniture", "Toys", "shoes"],
    clothes: [],
    Jewelry: [],
    shoe: [],
  },
};

export const allRandomWomen = [
  Store.women.clothes[Math.random() * Store.women.clothes.length + 1],
  Store.women.Jewelry[Math.random() * Store.women.Jewelry.length + 1],
  Store.women.shoe[Math.random() * Store.women.shoe.length + 1],
  Store.women.clothes[Math.random() * Store.women.clothes.length + 1],
  Store.women.Jewelry[Math.random() * Store.women.Jewelry.length + 1],
  Store.women.shoe[Math.random() * Store.women.shoe.length + 1],
];

export const allRandomMen = [
  Store.men.clothes[Math.random() * Store.men.clothes.length + 1],
  Store.men.Jewelry[Math.random() * Store.men.Jewelry.length + 1],
  Store.men.shoe[Math.random() * Store.men.shoe.length + 1],
  Store.men.clothes[Math.random() * Store.men.clothes.length + 1],
  Store.men.Jewelry[Math.random() * Store.men.Jewelry.length + 1],
  Store.men.shoe[Math.random() * Store.men.shoe.length + 1],
];

export const allRandomKids = [
  Store.kids.clothes[Math.random() * Store.kids.clothes.length + 1],
  Store.kids.Jewelry[Math.random() * Store.kids.Jewelry.length + 1],
  Store.kids.shoe[Math.random() * Store.kids.shoe.length + 1],
  Store.kids.clothes[Math.random() * Store.kids.clothes.length + 1],
  Store.kids.Jewelry[Math.random() * Store.kids.Jewelry.length + 1],
  Store.kids.shoe[Math.random() * Store.kids.shoe.length + 1],
];
