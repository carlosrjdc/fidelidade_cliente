import CardRendemHistory from "./components/cardReendemHistory";

export default function HistoryRendem() {
  return (
    <div className="flex flex-col gap-2">
      <strong className="text-center py-4">HISTÓRICO</strong>
      <CardRendemHistory
        image="https://i.pinimg.com/474x/67/a3/c6/67a3c6dfe6326cc353585ec48f0b88b6.jpg"
        points={10}
        title="Teste"
        date="01/01/2021"
      />
      <CardRendemHistory
        image="https://i0.wp.com/www.canalmasculino.com.br/wp-content/uploads/2017/12/corte-cabelo-masculino-baguncado-liso-17-570x419.jpg?resize=570%2C419"
        points={10}
        title="Teste"
        date="01/01/2021"
      />
      <CardRendemHistory
        rendem={false}
        image="https://media.gettyimages.com/id/526651763/pt/foto/homem-suas-sobrancelhas-cortados-na-barbearia.jpg?s=612x612&w=gi&k=20&c=Ekwh8Xu1KuxteIoQBAKCc81rnoh9ywm3PYj6UJ23p6M="
        points={10}
        title="Teste"
        date="01/01/2021"
      />
      <CardRendemHistory
        image="https://img.freepik.com/fotos-premium/homem-fazendo-as-unhas-na-barbearia_138670-3825.jpg"
        points={10}
        title="Teste"
        date="01/01/2021" />
    </div>
  )
}