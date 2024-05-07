import CardMenu from "./components/cardMenu"
import awards from "../../assets/awards.jpg"
import PointsBox from "../../components/pointsBox"

export default function MenuPage() {
  return (
    <div>
      <PointsBox/>
      <ul className="flex flex-col mt-2 gap-2">
        <li><a href="/resgate"><CardMenu title="LISTA DE PRÊMIOS" image={awards} /></a></li>
        <li><a href="/pontos"><CardMenu title="HISTÓRICO PONTOS" image={awards} /></a></li>
        <li><a href="/premios"><CardMenu title="HISTÓRICO RESGATE" image={awards} /></a></li>
      </ul>
    </div>
  )
}