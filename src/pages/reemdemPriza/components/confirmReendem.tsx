import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { FaCircleCheck } from "react-icons/fa6";

type Props = {
  children: React.ReactNode;
}

export default function ConfirmReendem({ children }: Props) {
  return (
    <Dialog>
      <DialogTrigger>
        {children}
      </DialogTrigger>
      <DialogContent>

        <div className="flex justify-center gap-2 flex-col items-center">
          <h1>Confirmação de resgate</h1>
          <FaCircleCheck size={50} />

          <p>Tem certeza que deseja resgatar este prêmio?</p>
          <div className="flex gap-2 mt-4"><Button>Sim</Button>
            <Button>Não</Button></div>
        </div>

      </DialogContent>
    </Dialog>
  )
}