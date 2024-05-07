import Image, { StaticImageData } from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";

type Props = {
  image: StaticImageData;
  title:string
}

export default function CardMenu({ image, title }: Props) {
  return (
    <div className="w-full flex items-center border justify-between px-4 py-2 rounded-md">
      <Image className="rounded-full" src={image} alt="" width={50} height={50} />
      <strong>{title}</strong>
      <FaArrowRightLong size={25} />
    </div>
  )
}