import heroBanner from "../assets/hero-banner.png";
import { DrinkItem } from "../components/widgets/DrinkItem";
import { drinksData } from "../data/drinks-data";
import { ShoppingCartIcon } from "../shared/icons";

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
              <li>Compra simples e segura</li>
              <li>Embalagem mantém o café intacto</li>
              <li>Entrega rápida e rastreada</li>
              <li>O café chega fresquinho até você</li>
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
