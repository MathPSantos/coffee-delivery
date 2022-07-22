import { useMemo } from "react";
import { ShoppingCartIcon } from "../../shared/icons";
import { formatNumberFormatPtBr } from "../../utils/numberFormat";

type Drink = {
  image: string;
  title: string;
  tags: string[];
  description: string;
  price: number;
};

interface DrinkItemProps {
  drink: Drink;
}

export function DrinkItem({ drink }: DrinkItemProps) {
  const formattedPrice = useMemo(
    () => formatNumberFormatPtBr(drink.price),
    [drink.price]
  );

  return (
    <div className="w-64 bg-gray-100 flex flex-col items-center p-5 rounded-tl-md rounded-tr-[36px] rounded-bl-[36px] rounded-br-md">
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
      <h4 className="mt-4 text-xl leading-snug text-center">{drink.title}</h4>
      <p className="text-center text-gray-600 leading-snug text-sm mt-2">
        {drink.description}
      </p>
      <footer className="w-full mt-8 flex items-center justify-between px-1">
        <p className="flex items-baseline gap-1">
          <span className="text-sm leading-snug">R$</span>
          <strong className="font-display text-2xl font-extrabold">
            {formattedPrice}
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
  );
}
