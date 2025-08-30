const navLinks = [
  {
    id: "cocktails",
    title: "Cocktails",
  },
  {
    id: "about",
    title: "La Nostra Storia", // Our Story
  },
  {
    id: "work",
    title: "L’Arte del Bere", // The Art of Drinking
  },
  {
    id: "contact",
    title: "Contattaci", // Contact Us
  },
];

const cocktailLists = [
  {
    name: "Negroni Classico",
    country: "IT",
    detail: "90 ml",
    price: "€12",
  },
  {
    name: "Aperol Spritz",
    country: "IT",
    detail: "150 ml",
    price: "€10",
  },
  {
    name: "Amaro Montenegro",
    country: "IT",
    detail: "100 ml",
    price: "€15",
  },
  {
    name: "Limoncello Martini",
    country: "IT",
    detail: "120 ml",
    price: "€14",
  },
];

const mockTailLists = [
  {
    name: "Fragola Fresca",
    country: "IT",
    detail: "250 ml",
    price: "€8",
  },
  {
    name: "Pesca e Menta",
    country: "IT",
    detail: "250 ml",
    price: "€9",
  },
  {
    name: "Citrus Italiano",
    country: "IT",
    detail: "300 ml",
    price: "€8",
  },
  {
    name: "Lavanda Frizzante",
    country: "IT",
    detail: "250 ml",
    price: "€9",
  },
];

const profileLists = [
  {
    imgPath: "/images/profile1.png",
  },
  {
    imgPath: "/images/profile2.png",
  },
  {
    imgPath: "/images/profile3.png",
  },
  {
    imgPath: "/images/profile4.png",
  },
];

const featureLists = [
  "Autentici sapori italiani",
  "Ingredienti freschi e locali",
  "Serviti con eleganza",
  "Tradizione e innovazione nel bicchiere",
];

const goodLists = [
  "Ingredienti selezionati a mano",
  "Tecniche di miscelazione italiane",
  "Arte della mixology",
  "Gusto fresco in ogni sorso",
];

const storeInfo = {
  heading: "Dove Trovarci",
  address: "Via Roma 123, Milano, Italia",
  contact: {
    phone: "+39 055 987 6543",
    email: "ciao@italianobar.com",
  },
};

const openingHours = [
  { day: "Lun–Gio", time: "11:00 – 00:00" },
  { day: "Ven", time: "11:00 – 02:00" },
  { day: "Sab", time: "10:00 – 02:00" },
  { day: "Dom", time: "10:00 – 01:00" },
];

const socials = [
  {
    name: "Instagram",
    icon: "/images/insta.png",
    url: "#",
  },
  {
    name: "X (Twitter)",
    icon: "/images/x.png",
    url: "#",
  },
  {
    name: "Facebook",
    icon: "/images/fb.png",
    url: "#",
  },
];

const sliderLists = [
  {
    id: 1,
    name: "Negroni Sbagliato",
    image: "/images/drink1.png",
    title: "Un Classico con un Twist",
    description:
      "Creato a Milano, il Negroni Sbagliato unisce Prosecco, Vermouth e Campari per un gusto raffinato e leggermente frizzante.",
  },
  {
    id: 2,
    name: "Aperol Spritz",
    image: "/images/drink2.png",
    title: "Il Re dell’Aperitivo Italiano",
    description:
      "Un mix fresco di Aperol, Prosecco e soda: leggero, frizzante e perfetto per ogni tramonto estivo.",
  },
  {
    id: 3,
    name: "Bellini Veneziano",
    image: "/images/drink3.png",
    title: "Dolce, Fruttato, Elegante",
    description:
      "Prosecco e purea di pesca bianca creano un cocktail elegante, nato a Venezia per celebrare momenti speciali.",
  },
  {
    id: 4,
    name: "Limoncello Tonic",
    image: "/images/drink4.png",
    title: "Freschezza Mediterranea",
    description:
      "Un mix di Limoncello, acqua tonica e scorza di limone: fresco, frizzante e irresistibilmente italiano.",
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
