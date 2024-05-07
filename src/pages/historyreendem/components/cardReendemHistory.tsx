import { Badge } from "@/components/ui/badge";
import CardQrCodeValidation from "./cardQRCodeValidation";

type Props = {
  image: string;
  title: string
  date: string
  points: number
  rendem?: boolean
}

export default function CardRendemHistory({ image, title, date, points, rendem = true }: Props) {
  return (
    <CardQrCodeValidation>
      <div className=" flex justify-between items-center border px-1 py-1 rounded-2xl mx-2">
        <div className="flex items-center gap-4">
          <img src={image} alt="" className="w-20 h-20 rounded-lg object-cover" />
          <div className="flex flex-col gap-1">
            <div className="flex gap-2">
              <strong>{title}</strong>
              {rendem ? <Badge className="bg-green-500">Resgatado</Badge> : <Badge className="bg-red-500">A Resgatar</Badge>}
            </div>
            <span>{date}</span>
          </div>
        </div>
        <strong className="text-3xl">{points}</strong>
      </div>
    </CardQrCodeValidation>
  )
}