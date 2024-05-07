import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { FaCircleCheck } from "react-icons/fa6";

type Props = {
  children: React.ReactNode;
}

export default function CardQrCodeValidation({ children }: Props) {
  return (
    <Dialog>
      <DialogTrigger>
        {children}
      </DialogTrigger>
      <DialogContent className="w-72">

        <div className="flex justify-center gap-2 flex-col items-center">
          <FaCircleCheck size={50} />
          <h1>76656YHJGGFSA5</h1>

      <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=76656YHJGGFSA5" alt="QR Code" />
        </div>

      </DialogContent>
    </Dialog>
  )
}