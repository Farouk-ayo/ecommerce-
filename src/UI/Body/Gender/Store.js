// MEN DRESS

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

// WOMEN DRESS

import Navyandwhite from "../../../assets/women/Navyandwhite.png";
import wnavyBlue from "../../../assets/women/wnavyBlue.png";
import wnavysuit from "../../../assets/women/wnavysuit.png";
import skirt from "../../../assets/women/skirt.png";
import wpolo from "../../../assets/women/wnavyBlue.png";

import blackDior from "../../../assets/women/blackDior.png";
import cartierBag from "../../../assets/women/cartierBag.png";
import nikeGym from "../../../assets/women/nikeGym.png";
import shoulderbag from "../../../assets/women/shoulderbag.png";
import sunMountain from "../../../assets/women/sunMountain.png";
import whitebag from "../../../assets/women/whitebag.png";

import blackShoe from "../../../assets/women/blackShoe.png";
import candycane from "../../../assets/women/candycane.png";
import livewireride from "../../../assets/women/livewireride.png";
import TonyBiancoBrazen from "../../../assets/women/TonyBiancoBrazen.png";
import winterFashion from "../../../assets/women/winterFashion.png";

import silverware from "../../../assets/women/silverware.png";

//KIDS
import Blackgown from "../../../assets/kids/Blackgown.png";
import DreamSleepSuit from "../../../assets/kids/DreamSleepSuit.png";
import LikeABossCamouflage from "../../../assets/kids/LikeABossCamouflage.png";
import ny from "../../../assets/kids/ny.png";
import rompersuit from "../../../assets/kids/rompersuit.png";
import cartoon from "../../../assets/kids/cartoon.png";

import assortmentkidstoys from "../../../assets/kids/assortmentkidstoys.png";
import babytoy from "../../../assets/kids/babytoy.png";
import fishercornpopper from "../../../assets/kids/fishercornpopper.png";
import girafeehead from "../../../assets/kids/girafeehead.png";
import leapfrogspin from "../../../assets/kids/Blackgown.png";
import playingtoys from "../../../assets/kids/playingtoys.png";
import polyTurtle from "../../../assets/kids/polyTurtle.png";
import toysTop from "../../../assets/kids/toysTop.png";
import toytrain from "../../../assets/kids/toytrain.png";
import toyvector from "../../../assets/kids/toyvector.png";

export const Store = {
  men: {
    Fashion: "Men Fashion",
    sections: ["Clothes", "Furniture", "Electronics", "Shoes"],
    Clothes: [
      [GreyBrownShirt, ""],
      GreyRusticLinen,
      GreyTShirt,
      longsleevedTshirt,
      RedPlainLong,
      sepiaBrownSuit,
      whiteHoodie,
      BlackHoodie,
      BlueLongsleeveTshirt,
    ],
    Furniture: [Bedroom, BarberChair, chair, Dinningtable],
    Electronics: [
      digitalclock,
      DjSpeaker,
      GameController,
      Headphone,
      Loudspeaker,
    ],
    Shoes: [sneakers, timberland, shoe1, shoeflash],
  },
  women: {
    Fashion: "Women Fashion",
    sections: ["Clothes", "Bags", "Shoes", "Jewelry"],
    Clothes: [Navyandwhite, wnavyBlue, wnavysuit, skirt, wpolo],
    Bags: [sunMountain, blackDior, cartierBag, whitebag, shoulderbag, nikeGym],
    Shoes: [
      blackShoe,
      candycane,
      livewireride,
      TonyBiancoBrazen,
      winterFashion,
    ],
    Jewelry: [silverware],
  },

  kids: {
    Fashion: "Kids Fashion",
    sections: ["Clothes", "Toys"],
    Clothes: [
      Blackgown,
      DreamSleepSuit,
      LikeABossCamouflage,
      ny,
      rompersuit,
      cartoon,
    ],
    Toys: [
      assortmentkidstoys,
      babytoy,
      fishercornpopper,
      girafeehead,
      leapfrogspin,
      playingtoys,
      polyTurtle,
      toysTop,
      toytrain,
      toyvector,
    ],
  },
};

export const allRandomMen = [
  Store.men.Clothes[Math.random() * Store.men.Clothes.length + 1],
  Store.men.Furniture[Math.random() * Store.men.Furniture.length + 1],
  Store.men.Shoes[Math.random() * Store.men.Shoes.length + 1],
  Store.men.Clothes[Math.random() * Store.men.Clothes.length + 1],
  Store.men.Electronics[Math.random() * Store.men.Electronics.length + 1],
  Store.men.Shoes[Math.random() * Store.men.Shoes.length + 1],
];

export const allRandomWomen = [
  Store.women.Clothes[Math.random() * Store.women.Clothes.length + 1],
  Store.women.Jewelry[Math.random() * Store.women.Jewelry.length + 1],
  Store.women.Bags[Math.random() * Store.women.Bags.length + 1],
  Store.women.Clothes[Math.random() * Store.women.Clothes.length + 1],
  Store.women.Shoes[Math.random() * Store.women.Shoes.length + 1],
  Store.women.Bags[Math.random() * Store.women.Bags.length + 1],
];

export const allRandomKids = [
  Store.kids.Clothes[Math.random() * Store.kids.Clothes.length + 1],
  Store.kids.Jewelry[Math.random() * Store.kids.Jewelry.length + 1],
  Store.kids.Shoes[Math.random() * Store.kids.Shoes.length + 1],
  Store.kids.Clothes[Math.random() * Store.kids.Clothes.length + 1],
  Store.kids.Jewelry[Math.random() * Store.kids.Jewelry.length + 1],
  Store.kids.Shoes[Math.random() * Store.kids.Shoes.length + 1],
];
