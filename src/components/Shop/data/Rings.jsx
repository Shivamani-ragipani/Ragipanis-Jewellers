const ringsData = [
    {
      id: 4,
      name: "Blue Topaz Diamond Engagement Wedding Ring",
      price: { min: 339, max: 339 },
      originalPrice: 370,
      rating: 4,
      image: "/ragipanis imgs/rings/ring1.jpg",
      category: "Rings",
      metal: "White Gold",
      stone: "Topaz",
      carat: "18K",
      isNew: false,
      isSale: true,
      discount: 8,
      description: "This stunning engagement ring features a blue topaz center stone surrounded by diamonds in an 18KT white gold setting.",
      weight: 6
    },
    {
      id: 6,
      name: "Casual Thomas Diamond Ring Yellow Gold",
      price: { min: 149, max: 370 },
      rating: 5,
      image: "/ragipanis imgs/rings/ring2.jpg",
      category: "Rings",
      metal: "Yellow Gold",
      stone: "Diamond",
      carat: "22K",
      isNew: false,
      isSale: false,
      discount: 0,
      description: "The Thomas ring combines casual style with luxury, featuring diamonds set in 22KT yellow gold with a comfortable band.",
      weight: 7
    },
    {
      id: 9,
      name: "Elina Solitaire Ring Extra White Gold Ring",
      price: { min: 280, max: 280 },
      rating: 5,
      image: "/ragipanis imgs/rings/ring3.jpg",
      category: "Rings",
      metal: "White Gold",
      stone: "Diamond",
      carat: "24K",
      isNew: false,
      isSale: false,
      discount: 0,
      description: "The Elina solitaire ring features a stunning diamond in a classic 24KT white gold setting, perfect for engagements or special occasions.",
      weight: 8
    },
    {
      id: 16,
      name: "Emerald Cut Diamond Eternity Band",
      price: { min: 599, max: 599 },
      originalPrice: 650,
      rating: 5,
      image: "/ragipanis imgs/rings/ring5.jpg",
      category: "Rings",
      metal: "Platinum",
      stone: "Diamond",
      carat: "18K",
      isNew: false,
      isSale: true,
      discount: 8,
      description: "This luxurious eternity band features emerald-cut diamonds set in platinum, symbolizing never-ending love.",
      weight: 6
    },
  
  {
    id: 124,
    name: "Elegant Sapphire Gold Ring",
    price: { min: 25000, max: 30000 },
    rating: 4,
    image: "/ragipanis imgs/rings/ring6.jpg",
    category: "Rings",
    metal: "Yellow Gold",
    stone: "Sapphire",
    carat: "22KT",
    isNew: true,
    isSale: false,
    discount: 0,
    weight: 6,
    description:
      "A timeless sapphire ring crafted in 22KT yellow gold, perfect for any occasion.",
  },
    {
      id: 125,
      name: "Classic Emerald Platinum Ring",
      price: { min: 45000, max: 50000 },
      rating: 5,
      image: "/ragipanis imgs/rings/ring7.jpg",
      category: "Rings",
      metal: "Platinum",
      stone: "Emerald",
      carat: "24K",
      isNew: false,
      isSale: true,
      discount: 10,
      description: "A luxurious emerald ring set in platinum, ideal for special celebrations.",
      weight: 8
    },
    {
      id: 126,
      name: "Ruby Studded Designer Ring",
      price: { min: 20000, max: 25000 },
      rating: 4,
      image: "/ragipanis imgs/rings/ring8.jpg",
      category: "Rings",
      metal: "Rose Gold",
      stone: "Ruby",
      carat: "18K",
      isNew: true,
      isSale: false,
      discount: 0,
      description: "A designer ring featuring a ruby centerpiece, crafted in 18KT rose gold.",
      weight: 6
    },
    {
      id: 127,
      name: "Diamond Halo Engagement Ring",
      price: { min: 60000, max: 65000 },
      rating: 5,
      image: "/ragipanis imgs/rings/ring9.jpg",
      category: "Rings",
      metal: "White Gold",
      stone: "Diamond",
      carat: "22K",
      isNew: false,
      isSale: true,
      discount: 5,
      description: "A stunning diamond halo engagement ring in 22KT white gold, symbolizing eternal love.",
      weight: 7
    },
    ...Array.from({ length: 350 }, (_, i) => ({
      id: 128 + i,
      name: `Ring ${128 + i}`,
      price: { min: 100 + i * 10, max: 150 + i * 10 },
      rating: Math.floor(Math.random() * 5) + 1,
      image: `/ragipanis imgs/rings/ring${10 + i}.jpg`,
      category: "Rings",
      metal: ["White Gold", "Yellow Gold", "Rose Gold", "Platinum"][i % 4],
      stone: ["Diamond", "Ruby", "Emerald", "Sapphire"][i % 4],
      carat: ["14K", "18K", "22K", "24K"][Math.floor(Math.random() * 4)],
      isNew: i % 2 === 0,
      isSale: i % 3 === 0,
      discount: i % 3 === 0 ? 5 + (i % 5) : 0,
      description: `Description for Ring ${128 + i}`,
      weight: (() => {
        switch (["14K", "18K", "22K", "24K"][Math.floor(Math.random() * 4)]) {
          case "14K":
            return 5;
          case "18K":
            return 6;
          case "22K":
            return 7;
          case "24K":
            return 8;
        }
      })()
    }))
  
];
  
  export default ringsData