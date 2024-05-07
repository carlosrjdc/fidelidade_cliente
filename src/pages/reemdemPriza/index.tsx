import PointsBox from "@/components/pointsBox";
import CardReendem from "./components/cardReendem";

export default function ReemdemPriza() {
  return (
    <div>
      <PointsBox />
      <div className="flex flex-wrap gap-2 items-center justify-center mt-2">
        <CardReendem
          image="https://i0.wp.com/www.canalmasculino.com.br/wp-content/uploads/2017/12/corte-cabelo-masculino-baguncado-liso-17-570x419.jpg?resize=570%2C419"
          title="Corte de Cabelo"
          description="Corte de cabelo completo"
          points={800} />
        <CardReendem
          image="https://i.pinimg.com/474x/67/a3/c6/67a3c6dfe6326cc353585ec48f0b88b6.jpg"
          title="Barba"
          description="Barba Completa"
          points={400} />
        <CardReendem
          image="https://media.gettyimages.com/id/526651763/pt/foto/homem-suas-sobrancelhas-cortados-na-barbearia.jpg?s=612x612&w=gi&k=20&c=Ekwh8Xu1KuxteIoQBAKCc81rnoh9ywm3PYj6UJ23p6M="
          title="Sobrancelha"
          description=""
          points={250} />
        <CardReendem
          image="https://img.freepik.com/fotos-premium/homem-fazendo-as-unhas-na-barbearia_138670-3825.jpg"         
          title="Unhas"
          description="Unhas feitas"
          points={300} />
      </div>

    </div>
  )
}