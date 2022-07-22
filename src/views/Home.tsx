import { DrinkItem } from "../components/widgets/DrinkItem";

import heroBanner from "../assets/hero-banner.png";

import { drinksData } from "../data/drinks-data";
import {
  CoffeeIcon,
  PackageIcon,
  ShoppingCartIcon,
  TimerIcon,
} from "../shared/icons";

const FEATURES_HERO_LIST = [
  {
    Icon: ShoppingCartIcon,
    content: "Compra simples e segura",
    bgColor: "yellow-700",
  },
  {
    Icon: PackageIcon,
    content: "Embalagem mantém o café intacto",
    bgColor: "gray-700",
  },
  {
    Icon: TimerIcon,
    content: "Entrega rápida e rastreada",
    bgColor: "yellow-500",
  },
  {
    Icon: CoffeeIcon,
    content: "O café chega fresquinho até você",
    bgColor: "purple-500",
  },
];

export function Home() {
  return (
    <main>
      <section className="w-full px-4 bg-blur">
        <div className="py-[92px] mx-auto max-w-container flex items-center justify-between gap-14">
          <div>
            <h1 className="text-5xl leading-snug font-extrabold">
              Encontre o café perfeito para qualquer hora do dia
            </h1>
            <p className="text-xl leading-snug text-gray-800 mt-4">
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>
            <ul className="mt-16 grid grid-cols-2 gap-x-10 gap-y-5">
              {FEATURES_HERO_LIST.map((item) => (
                <li className="flex items-center gap-3">
                  <div
                    className={`flex items-center justify-center w-[32px] h-[32px] text-white rounded-full bg-${item.bgColor}`}
                  >
                    <item.Icon size={16} weight="fill" />
                  </div>

                  {item.content}
                </li>
              ))}
            </ul>
          </div>

          <img
            src={heroBanner}
            alt="Copo de café com fundo amarelo e sementes de café torrado"
          />
        </div>
      </section>

      <section className="w-full px-4">
        <div className="py-8 mx-auto max-w-container">
          <h2 className="text-gray-800 text-[32px] leading-snug font-extrabold">
            Nossos cafés
          </h2>

          <div className="flex items-start gap-x-8 gap-y-10 flex-wrap mt-[54px]">
            {drinksData.map((drink) => (
              <DrinkItem key={drink.id} drink={drink} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
