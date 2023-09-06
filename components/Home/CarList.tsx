import { CarType } from '@/services'
import React from 'react'
import CarCard from './CarCard';

interface CarListProps {
  carList: CarType[];
}

export default function CarList({carList}: CarListProps) {
  return (
    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
      {carList.map((car:CarType, index ) =>(
        <div key={index}>
          <CarCard car={car}/>
        </div>
      ))}
    </div>
  )
}
