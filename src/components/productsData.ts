// simple shared product list used by both SubCategories and ProductDetails
const products = [
  {
    id: 1,
    title: "iQOO 15 (Legend, 12GB RAM, 256GB Storage)",
    price: 72999,
    priceDisplay: "₹72,999",
    mrp: "₹76,999",
    img: "https://i.pinimg.com/736x/9f/90/a5/9f90a52359773ca1f3242842d8d1d60b.jpg",
    images: [
      "https://i.pinimg.com/736x/9f/90/a5/9f90a52359773ca1f3242842d8d1d60b.jpg",
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=1200",
    ],
    offer: "5% off",
    brand: "iQOO",
    department: "Mobiles",
    rating: 4.5,
    sold: "300+ bought in past month",
    description:
      "Flagship performance, fast charging and pro-level cameras. Great for gamers and power users.",
    stock: true,
  },
  {
    id: 2,
    title: "OnePlus Nord 5",
    price: 31998,
    priceDisplay: "₹31,998",
    mrp: "₹34,999",
    img: "https://i.pinimg.com/736x/35/70/7e/35707e30ab4485a83b7444a5925fc96b.jpg",
    images: [
      "https://i.pinimg.com/736x/35/70/7e/35707e30ab4485a83b7444a5925fc96b.jpg",
      "https://images.unsplash.com/photo-1510552776732-41a5b81a7e4c?w=1200",
    ],
    offer: "9% off",
    brand: "OnePlus",
    department: "Mobiles",
    rating: 4.2,
    sold: "120+ bought in past month",
    description:
      "Balanced performance with clean software and great battery life.",
    stock: true,
  },
  {
    id: 3,
    title: "Samsung Galaxy Z Fold 6",
    price: 109999,
    priceDisplay: "₹1,09,999",
    mrp: "₹1,64,999",
    img: "https://i.pinimg.com/736x/f4/1a/76/f41a76e104c492ce47cfae7c1de03fc5.jpg",
    images: [
      "https://i.pinimg.com/736x/f4/1a/76/f41a76e104c492ce47cfae7c1de03fc5.jpg",
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1200",
    ],
    offer: "33% off",
    brand: "Samsung",
    department: "Mobiles",
    rating: 4.6,
    sold: "50+ bought in past month",
    description:
      "Cutting-edge foldable display with flagship specs and multitasking features.",
    stock: false,
  },
];

export default products;
