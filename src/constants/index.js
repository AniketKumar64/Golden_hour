const navLinks = [
  { id: "drinks", title: "Drinks" },
  { id: "about", title: "Story" },
  { id: "work", title: "Making" },
  { id: "contact", title: "Contact" },
];


const cocktailLists = [
  { name: "Fruit Punch Special", country: "IT", detail: "90 ml", price: "€5" },
  { name: "Orange Sparkle", country: "IT", detail: "150 ml", price: "€4" },
  { name: "Sweet Berry Mix", country: "IT", detail: "100 ml", price: "€6" },
  { name: "Lemon Delight", country: "IT", detail: "120 ml", price: "€5" },
];

const mockTailLists = [
  { name: "Fresh Strawberry Splash", country: "IT", detail: "250 ml", price: "€3" },
  { name: "Peach & Mint Twist", country: "IT", detail: "250 ml", price: "€3.5" },
  { name: "Citrus Sunshine", country: "IT", detail: "300 ml", price: "€3" },
  { name: "Sparkling Lavender Lemonade", country: "IT", detail: "250 ml", price: "€3.5" },
];

const profileLists = [
  { imgPath: "/images/profile1.png" },
  { imgPath: "/images/profile2.png" },
  { imgPath: "/images/profile3.png" },
  { imgPath: "/images/profile4.png" },
];

const featureLists = [
  "Yummy and Fun Flavors",
  "Fresh and Natural Ingredients",
  "Served with a Smile",
  "Creative and Colorful Drinks",
];

const goodLists = [
  "Picked with Care",
  "Fun Mixing Recipes",
  "Cool Drink Creations",
  "Every Sip is a Smile",
];

const storeInfo = {
  heading: "Visit Us",
  address: "123 Roma Street, Milan, Italy",
  contact: {
    phone: "+39 055 987 6543",
    email: "hello@funbar.com",
  },
};

const openingHours = [
  { day: "Mon–Thu", time: "11:00 AM – 10:00 PM" },
  { day: "Fri", time: "11:00 AM – 11:00 PM" },
  { day: "Sat", time: "10:00 AM – 11:00 PM" },
  { day: "Sun", time: "10:00 AM – 9:00 PM" },
];

const socials = [
  { name: "Instagram", icon: "/images/insta.png", url: "#" },
  { name: "X (Twitter)", icon: "/images/x.png", url: "#" },
  { name: "Facebook", icon: "/images/fb.png", url: "#" },
];

const sliderLists = [
  {
    id: 1,
    name: "Fruity Fun Mix",
    image: "/images/drink1.png",
    title: "A Yummy Surprise",
    description:
      "A colorful mix of fruit flavors that makes every sip taste like a party in your mouth.",
  },
  {
    id: 2,
    name: "Orange Sparkle",
    image: "/images/drink2.png",
    title: "Bubbly and Bright",
    description:
      "A cheerful orange drink that’s fizzy and full of smiles, perfect for any sunny day.",
  },
  {
    id: 3,
    name: "Peachy Dream",
    image: "/images/drink3.png",
    title: "Sweet and Smooth",
    description:
      "A gentle mix of peach flavor that feels like a soft hug in a glass.",
  },
  {
    id: 4,
    name: "Lemon Zing",
    image: "/images/drink4.png",
    title: "Crisp and Refreshing",
    description:
      "A zippy lemon drink that’s sparkling and fun, giving you a burst of happiness.",
  },
];

export {
  navLinks,
  cocktailLists,
  mockTailLists,
  profileLists,
  featureLists,
  goodLists,
  openingHours,
  storeInfo,
  socials,
  sliderLists,
};
