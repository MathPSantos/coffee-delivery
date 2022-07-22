import expressoImg from "../assets/drinks/expresso.png";
import expressoAmericanoImg from "../assets/drinks/americano.png";
import expressoCremosoImg from "../assets/drinks/expresso_cremoso.png";
import cafeGeladoImg from "../assets/drinks/cafe_gelado.png";
import cafeLeiteImg from "../assets/drinks/cafe_com_leite.png";
import latteImg from "../assets/drinks/latte.png";
import capuccinoImg from "../assets/drinks/capuccino.png";
import macchiatoImg from "../assets/drinks/macchiato.png";
import mocaccinoImg from "../assets/drinks/mocaccino.png";
import chocolateQuenteImg from "../assets/drinks/chocolate_quente.png";
import cubanoImg from "../assets/drinks/cubano.png";
import havaianoImg from "../assets/drinks/havaiano.png";
import arabeImg from "../assets/drinks/arabe.png";
import irlandesImg from "../assets/drinks/irlandes.png";

export const drinksData = [
  {
    id: "1",
    title: "Expresso Tradicional",
    description: "O tradicional café feito com água quente e grãos moídos",
    image: expressoImg,
    price: 9.9,
    tags: ["Tradicional"],
  },
  {
    id: "2",
    title: "Expresso Americano",
    description: "Expresso diluído, menos intenso que o tradicional",
    image: expressoAmericanoImg,
    price: 9.9,
    tags: ["Tradicional"],
  },
  {
    id: "3",
    title: "Expresso Cremoso",
    description: "Café expresso tradicional com espuma cremosa",
    image: expressoCremosoImg,
    price: 9.9,
    tags: ["Tradicional"],
  },
  {
    id: "4",
    title: "Expresso Gelado",
    description: "Bebida preparada com café expresso e cubos de gelo",
    image: cafeGeladoImg,
    price: 9.9,
    tags: ["Tradicional", "Gelado"],
  },
  {
    id: "5",
    title: "Café com Leite",
    description: "Meio a meio de expresso tradicional com leite vaporizado",
    image: cafeLeiteImg,
    price: 9.9,
    tags: ["Tradicional", "Com Leite"],
  },
  {
    id: "6",
    title: "Latte",
    description:
      "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    image: latteImg,
    price: 9.9,
    tags: ["Tradicional", "Com Leite"],
  },
  {
    id: "7",
    title: "Capuccino",
    description:
      "Bebida com canela feita de doses iguais de café, leite e espuma",
    image: capuccinoImg,
    price: 9.9,
    tags: ["Tradicional", "Com Leite"],
  },
  {
    id: "8",
    title: "Macchiato",
    description:
      "Café expresso misturado com um pouco de leite quente e espuma",
    image: macchiatoImg,
    price: 9.9,
    tags: ["Tradicional", "Com Leite"],
  },
  {
    id: "9",
    title: "Mocaccino",
    description: "Café expresso com calda de chocolate, pouco leite e espuma",
    image: mocaccinoImg,
    price: 9.9,
    tags: ["Tradicional", "Com Leite"],
  },
  {
    id: "10",
    title: "Chocolate Quente",
    description: "Bebida feita com chocolate dissolvido no leite quente e café",
    image: chocolateQuenteImg,
    price: 9.9,
    tags: ["Especial", "Com leite"],
  },
  {
    id: "11",
    title: "Cubano",
    description:
      "Drink gelado de café expresso com rum, creme de leite e hortelã",
    image: cubanoImg,
    price: 9.9,
    tags: ["Especial", "Alcoólico", "Gelado"],
  },
  {
    id: "12",
    title: "Havaiano",
    description: "Bebida adocicada preparada com café e leite de coco",
    image: havaianoImg,
    price: 9.9,
    tags: ["Especial"],
  },
  {
    id: "13",
    title: "Árabe",
    description: "Bebida preparada com grãos de café árabe e especiarias",
    image: arabeImg,
    price: 9.9,
    tags: ["Especial"],
  },
  {
    id: "14",
    title: "Irlandês",
    description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
    image: irlandesImg,
    price: 9.9,
    tags: ["Especial", "Alcoólico"],
  },
];
