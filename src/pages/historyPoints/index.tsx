import PointsBox from "@/components/pointsBox";
import CardPoints from "./components/cardPontos";

export default function HistoryPoints() {
  return (
    <div>
      <PointsBox/>
      <div className="mt-2 flex flex-col justify-center gap-2">
      <CardPoints points={10} title="Teste" date="01/01/2021"/>
      <CardPoints points={-10} title="Teste" date="01/01/2021"/>
      <CardPoints points={10} title="Teste" date="01/01/2021"/>
      <CardPoints points={10} title="Teste" date="01/01/2021"/>
      <CardPoints points={-10} title="Teste" date="01/01/2021"/>

      </div>
    </div>
  )
}