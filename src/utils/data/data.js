import Mafe from "../../assets/FoodPhotos/Afrique/mafé.jpg";
import Pastel from "../../assets/FoodPhotos/Afrique/pastel.jpg";
import Yassa from "../../assets/FoodPhotos/Afrique/yassa.avif";
import Gombo from "../../assets/FoodPhotos/Afrique/gombo.jpg";
import Alloco from "../../assets/FoodPhotos/Afrique/alloco.jpg";
import Foufou from "../../assets/FoodPhotos/Afrique/foufou.jpg";
import Tiebou from "../../assets/FoodPhotos/Afrique/tiebou.png";

import Croque from "../../assets/FoodPhotos/Francais/croque.avif";
import Veau from "../../assets/FoodPhotos/Francais/blanquette veau.jpg";
import Gratin from "../../assets/FoodPhotos/Francais/gratin dauphinois.webp";
import Tartare from "../../assets/FoodPhotos/Francais/tartare.jpeg";
import Boeuf from "../../assets/FoodPhotos/Francais/Bourguignon.webp";

import Samousa from "../../assets/FoodPhotos/Indienne/samosa.avif";
import Biriyani from "../../assets/FoodPhotos/Indienne/biryani.jpg";
import Naan from "../../assets/FoodPhotos/Indienne/naan.png";
import Poulet from "../../assets/FoodPhotos/Indienne/pouletCurry.webp";
import Butter from "../../assets/FoodPhotos/Indienne/butterChicken.webp";

import Nem from "../../assets/FoodPhotos/Asiatique/nem.jfif";
import Riz from "../../assets/FoodPhotos/Asiatique/riz.webp";
import Udon from "../../assets/FoodPhotos/Asiatique/Yaki.jpg";
import Ramen from "../../assets/FoodPhotos/Asiatique/ramen.webp";
import Nouilles from "../../assets/FoodPhotos/Asiatique/nouilles.webp";

export const DishesByCuisine = {
  Africaine: [
    {
      id: 1,
      name: "Mafé",
      description:
        "Mafé délicieux accompagné de ses légumes et d'un bon poulet bien assaisonné",
      price: 12.99,
      image: Mafe,
      epice: 1,
    },
    {
      id: 2,
      name: "Pastel à la viande",
      description:
        "Délicieux beignets croustillants farcis à la viande assaisonnée",
      price: 6.99,
      image: Pastel,
      epice: 2,
    },
    {
      id: 3,
      name: "Poulet Yassa",
      description: "Poulet mariné aux oignons et au citron, servi avec du riz",
      price: 13.99,
      image: Yassa,
      epice: 1,
    },
    {
      id: 4,
      name: "Gombo",
      description:
        "Plat africain traditionnel à base de gombo et de viande en sauce",
      price: 11.99,
      image: Gombo,
      epice: 2,
    },
    {
      id: 5,
      name: "Alloco",
      description: "Bananes plantains frites, servies avec une sauce épicée",
      price: 5.99,
      image: Alloco,
      epice: 1,
    },
    {
      id: 6,
      name: "Foufou",
      description:
        "Pâte de manioc servie avec une sauce de viande ou de poisson",
      price: 8.99,
      image: Foufou,
      epice: 1,
    },
    {
      id: 7,
      name: "Tiebou",
      description:
        "Plat de riz au poisson et aux légumes, spécialité sénégalaise",
      price: 14.99,
      image: Tiebou,
      epice: 2,
    },
  ],
  Française: [
    {
      id: 8,
      name: "Croque-Monsieur",
      description: "Sandwich chaud au jambon et fromage gratiné",
      price: 7.99,
      image: Croque,
      epice: 0,
    },
    {
      id: 9,
      name: "Blanquette de veau",
      description: "Ragoût de veau mijoté dans une sauce crémeuse",
      price: 15.99,
      image: Veau,
      epice: 0,
    },
    {
      id: 10,
      name: "Gratin Dauphinois",
      description: "Pommes de terre gratinées à la crème et au fromage",
      price: 10.99,
      image: Gratin,
      epice: 0,
    },
    {
      id: 11,
      name: "Tartare de bœuf",
      description: "Viande de bœuf crue finement hachée et assaisonnée",
      price: 16.99,
      image: Tartare,
      epice: 1,
    },
    {
      id: 12,
      name: "Bœuf Bourguignon",
      description: "Bœuf mijoté au vin rouge avec des légumes",
      price: 17.99,
      image: Boeuf,
      epice: 0,
    },
  ],
  Indienne: [
    {
      id: 13,
      name: "Samossa",
      description: "Beignets croustillants farcis aux légumes ou à la viande",
      price: 5.99,
      image: Samousa,
      epice: 2,
    },
    {
      id: 14,
      name: "Biriyani",
      description: "Plat de riz épicé avec viande ou légumes",
      price: 12.99,
      image: Biriyani,
      epice: 3,
    },
    {
      id: 15,
      name: "Pain Naan",
      description: "Pain indien moelleux cuit au four tandoor",
      price: 3.99,
      image: Naan,
      epice: 0,
    },
    {
      id: 16,
      name: "Poulet Curry",
      description: "Poulet mijoté dans une sauce au curry",
      price: 13.99,
      image: Poulet,
      epice: 3,
    },
    {
      id: 17,
      name: "Butter Chicken",
      description: "Poulet mariné dans une sauce au beurre et aux épices",
      price: 14.99,
      image: Butter,
      epice: 2,
    },
  ],
  Asiatique: [
    {
      id: 18,
      name: "Nem",
      description: "Rouleaux frits farcis aux légumes et viande",
      price: 6.99,
      image: Nem,
      epice: 1,
    },
    {
      id: 19,
      name: "Riz Cantonais",
      description: "Riz sauté aux œufs, jambon et petits légumes",
      price: 9.99,
      image: Riz,
      epice: 1,
    },
    {
      id: 20,
      name: "Udon Yaki",
      description: "Nouilles épaisses sautées avec légumes et viande",
      price: 12.99,
      image: Udon,
      epice: 2,
    },
    {
      id: 21,
      name: "Ramen au Poulet",
      description: "Soupe de nouilles avec bouillon savoureux et poulet",
      price: 13.99,
      image: Ramen,
      epice: 2,
    },
    {
      id: 22,
      name: "Nouilles au Poulet",
      description: "Nouilles sautées avec légumes et morceaux de poulet",
      price: 11.99,
      image: Nouilles,
      epice: 1,
    },
  ],
};
