import { title } from "process";
import { IoIosRemoveCircle } from "react-icons/io";
import { IoMdAddCircle } from "react-icons/io";

type Props = {
  points: number
  title: string
  date: string
}

export default function CardPoints({ points, title, date }: Props) {
  return (
    <div className=" flex justify-between items-center border px-1 py-2 rounded-2xl mx-2">
      <div className="flex items-center gap-4">
        {points > 0 ? <IoMdAddCircle size={50} color="gray" /> : <IoIosRemoveCircle size={50} color="gray"  />}
        <div className="flex flex-col gap-1">
          <strong>{title}</strong>
          <span>{date}</span>
        </div>
      </div>
      <strong className="text-3xl">{points}</strong>

    </div>
  )
}