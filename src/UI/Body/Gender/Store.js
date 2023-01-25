export const Store = {
  men: {
    Fashion: "Men Fashion",
    sections: ["Clothes", "Furniture", "Jewelry", "Shoes"],
    clothes: [],
    Jewelry: [],
    shoe: [],
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
