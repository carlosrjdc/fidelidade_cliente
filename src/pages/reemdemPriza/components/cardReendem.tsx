import Image, { StaticImageData } from "next/image";
import { FaCoins } from "react-icons/fa";
import ConfirmReendem from "./confirmReendem";

type Props = {
  image: string;
  title: string
  description: string
  points: number

}

export default function CardReendem({ image, title, description, points }: Props) {
  return (
    <ConfirmReendem>
      <div className="w-[170px] rounded-xl border m-1">
        <div className="relative w-[170px] h-[200px]">
          <img src={image} alt="" className="w-full h-full rounded-t-xl object-cover" />
          <div className="w-full absolute bottom-0 bg-slate-500/80">
            <div className="flex items-center gap-2 ml-2">
              <p className="text-white font-semibold">{points}</p>
              <FaCoins size={15} color="white" />
            </div>
          </div>

        </div>
        <div className="bg-slate-700 text-white  p-2 rounded-b-xl w-[170px]">
          <strong className="py-2">{title}</strong>
          <p className="text-xs py-2">{description}</p>
        </div>
      </div>
    </ConfirmReendem>
  )
}