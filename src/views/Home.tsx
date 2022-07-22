import heroBanner from "../assets/hero-banner.png";
import { drinksData } from "../data/drinks-data";
import { ShoppingCartIcon } from "../shared/icons";

export function Home() {
  return (
    <main>
      <section className="w-full px-4 bg-blur">
        <div className="py-[92px] mx-auto max-w-container flex items-center justify-between gap-14">
          <div>
            <h1 className="text-5xl leading-snug">
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
          <h2>Nossos cafés</h2>

          <div className="flex items-start gap-x-8 gap-y-10 flex-wrap mt-[54px]">
            {drinksData.map((drink) => (
              <div
                key={drink.id}
                className="w-64 bg-gray-100 flex flex-col items-center p-5 rounded-tl-md rounded-tr-[36px] rounded-bl-[36px] rounded-br-md"
              >
                <img src={drink.image} alt={drink.title} className="-mt-9" />
                <div className="mt-3 flex items-center flex-wrap gap-1">
                  {drink.tags.map((tag) => (
                    <span
                      key={`${drink.title}__${tag}`}
                      className="text-yellow-500 bg-yellow-100 rounded-full text-[10px] uppercase font-bold px-2 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h4 className="mt-4 text-xl leading-snug text-center">
                  {drink.title}
                </h4>
                <p className="text-center text-gray-600 leading-snug text-sm mt-2">
                  {drink.description}
                </p>
                <footer className="w-full mt-8 flex items-center justify-between px-1">
                  <p className="flex items-baseline gap-1">
                    <span className="text-sm leading-snug">R$</span>
                    <strong className="font-display text-2xl font-extrabold">
                      {drink.price}
                    </strong>
                  </p>

                  <div className="flex items-center gap-2">
                    <button
                      title="Adicione ao carrinho"
                      className="w-[38px] h-[38px] flex items-center justify-center rounded-md bg-purple-500 text-gray-100 transition-colors hover:bg-purple-700"
                    >
                      <ShoppingCartIcon size={22} weight="fill" />
                    </button>
                  </div>
                </footer>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
