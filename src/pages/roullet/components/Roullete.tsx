'use client'
import dynamic from 'next/dynamic';
const Wheel = dynamic(() => import('react-custom-roulette').then((mod) => mod.Wheel), { ssr: false, });
import { Button } from '@/components/ui/button';
import { useState } from 'react';


export default function Roulette() {
  const data = [
    { option: 'barba' },
    { option: '50% off' },
    { option: 'Cabelo' },
    { option: '10% Desconto' },
    { option: 'Barbar e Cabelo' },
  ];

  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);

  const handleSpinClick = () => {
    if (!mustSpin) {
      const newPrizeNumber = Math.floor(Math.random() * data.length);
      setPrizeNumber(newPrizeNumber);
      setMustSpin(true);
    }
  };

  return (
    <div className='h-screen flex items-center justify-center flex-col gap-8'>
      {typeof window !== 'undefined' && (
        <Wheel
          mustStartSpinning={mustSpin}
          prizeNumber={prizeNumber}
          data={data}
          outerBorderColor="#f2f2f2"
          innerBorderColor="f2f2f2"
          textColors={["#ffffff"]}
          radiusLineColor='#f2f2f2'
          backgroundColors={[
            "#F22B35",
            "#F99533",
            "#24CA69",
            "#514E50",
            "#46AEFF",
            "#9145B7"
          ]}
          onStopSpinning={() => {
            alert(`Parabéns! Você ganhou: ${data[prizeNumber].option}`);
            setMustSpin(false);
          }}
        />
      )}
      <Button onClick={handleSpinClick}>RODAR</Button>
    </div>
  );
}
