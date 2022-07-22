import logoImage from "../../assets/logo.svg"
import { MapPinIcon, ShoppingCartIcon } from "../../shared/icons"

export function Header() {
  return <header className="w-full px-4">
    <div className="max-w-container mx-auto py-8 flex justify-between items-center">
      <img src={logoImage} alt="" />

      <nav>
        <ul className="flex items-center gap-3">
          <li className="h-[38px] px-2 text-sm text-purple-700 flex items-center gap-1 bg-purple-100 rounded-md" title="Localização">
            <MapPinIcon size={22} weight="fill" className="text-purple-500 leading-snug" />
            São Paulo, SP
          </li>
          <li title="Carrinho" className="w-[38px] h-[38px] rounded-md flex items-center justify-center bg-yellow-100 cursor-pointer">
            <ShoppingCartIcon size={22} weight="fill" className="text-yellow-500" />
          </li>
        </ul>
      </nav>
    </div>
  </header>
}