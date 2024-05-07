'use client'
import { Button } from '@/components/ui/button';
import React, { useState } from 'react'
import { Wheel } from 'react-custom-roulette'

const data = [
  { option: 'barba' },
  { option: '50% off' },
  { option: 'Cabelo' },
  { option: '10% Desconto' },
  { option: 'Barbar e Cabelo' },
]

export default function Roulette() {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);

  const handleSpinClick = () => {
    if (!mustSpin) {
      const newPrizeNumber = Math.floor(Math.random() * data.length);
      setPrizeNumber(2);
      setMustSpin(true);
    }
  }

  return (
    <div className='h-screen flex items-center justify-center flex-col gap-8'>
      <Wheel
        mustStartSpinning={mustSpin}
        prizeNumber={2}
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
          alert(`You got ${data[prizeNumber].option}`)
          setMustSpin(false);
        }}
      />
      <Button onClick={handleSpinClick}>SPIN</Button>
    </div>
  )
}