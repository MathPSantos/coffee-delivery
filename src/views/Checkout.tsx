import { RadioGroup } from "@headlessui/react";
import { useState } from "react";

import {
  BankIcon,
  CreditCardIcon,
  CurrencyDollarIcon,
  MapPinLineIcon,
  MoneyIcon,
} from "../shared/icons";

import expresso from '../assets/drinks/expresso.png'

const PAYMENT_METHODS = [
  {
    id: "credit-card",
    label: "Cartão de crédito",
    Icon: CreditCardIcon,
  },
  {
    id: "debit-card",
    label: "Cartão de débito",
    Icon: BankIcon,
  },
  {
    id: "money",
    label: "Dinheiro",
    Icon: MoneyIcon,
  },
];

export function Checkout() {
  const [paymentMethod, setPaymentMethod] = useState("");

  return (
    <main className="w-full px-4 pt-10">
      <div className="mx-auto max-w-container grid grid-cols-12 gap-8">
        <div className="col-span-7">
          <h3>Complete seu pedido</h3>

          <div className="mt-4 bg-gray-100 p-10">
            <header className="flex items-start gap-2">
              <MapPinLineIcon size={22} className="text-yellow-500" />

              <div>
                <span className="text-gray-800">Endereço de Entrega</span>
                <p className="text-sm mt-0.5">
                  Informe o endereço onde deseja receber seu pedido
                </p>
              </div>
            </header>

            <form></form>
          </div>

          <div className="mt-4 bg-gray-100 p-10">
            <header className="flex items-start gap-2">
              <CurrencyDollarIcon size={22} className="text-purple-500" />

              <div>
                <span className="text-gray-800">Pagamento</span>
                <p className="text-sm mt-0.5">
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </p>
              </div>
            </header>

            <div className="mt-8">
              <div className="flex items-center">
                <RadioGroup
                  value={paymentMethod}
                  onChange={setPaymentMethod}
                  className="w-full"
                >
                  <RadioGroup.Label className="sr-only">
                    Método de pagamento
                  </RadioGroup.Label>

                  <div className="flex items-center gap-3">
                    {PAYMENT_METHODS.map(({ id, label, Icon }) => (
                      <RadioGroup.Option
                        key={id}
                        value={id}
                        className={({ active, checked }) =>
                          `${active ? "border-purple-500" : ""} ${
                            checked ? "" : ""
                          } flex items-center gap-3 bg-gray-300 rounded-md h-[52px] px-4 flex-1 border cursor-pointer transition-colors hover:bg-gray-400`
                        }
                      >
                        <Icon size={16} className="text-purple-500" />
                        <span className="uppercase text-xs leading-relaxed">
                          {label}
                        </span>
                      </RadioGroup.Option>
                    ))}
                  </div>
                </RadioGroup>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-5">
          <h3>Cafés selecionados</h3>

          <div className="mt-4 bg-gray-100 p-10 rounded-tl-md rounded-tr-[44px] rounded-bl-[44px] rounded-br-md">
            <div className="flex flex-col gap-6">
              <div className="flex items-start justify-between pb-8 border-b border-b-gray-300 mb-6">
                <div className="flex items-start gap-5">
                  <img src={expresso} alt="Café expresso" className="w-[64px]" />

                  <div>
                    <span className="text-gray-800">Café expresso</span>  
                  </div>
                </div>

                <span className="font-bold">R$9,90</span>
              </div>
            </div>

            <footer>
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between text-sm">
                  <span>Total de itens</span>
                  <span>29.7</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span>Taxa entrega</span>
                  <span>3.5</span>
                </div>
                <div className="flex items-center justify-between text-xl font-bold">
                  <span>Total</span>
                  <span>3.5</span>
                </div>
              </div>

              <button className="flex items-center justify-center w-full h-[42px] rounded-md bg-yellow-500 text-white uppercase mt-6 font-bold text-sm">Confirmar pedido</button>
            </footer>

          </div>
        </div>
      </div>
    </main>
  );
}
