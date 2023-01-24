const Store = {
  men: [],
  women: {
    Fashion: "Women Fashion",
    sections: ["Clothes", "Jewelry", "Shoes"],
    clothes: [],
    Jewelry: [],
    shoe: [],
  },

  kids: [],
};

const allRandomWomen = [
  Store.women.clothes[Math.random() * Store.women.clothes.length + 1],
  Store.women.Jewelry[Math.random() * Store.women.Jewelry.length + 1],
  Store.women.shoe[Math.random() * Store.women.shoe.length + 1],
  Store.women.clothes[Math.random() * Store.women.clothes.length + 1],
  Store.women.Jewelry[Math.random() * Store.women.Jewelry.length + 1],
  Store.women.shoe[Math.random() * Store.women.shoe.length + 1],
];
