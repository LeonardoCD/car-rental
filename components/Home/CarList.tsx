import { CarType } from "@/services";
import React, { useState } from "react";
import CarCard from "./CarCard";
import BookingModal from "../CarBooking/BookingModal";

interface CarListProps {
  carList: CarType[];
}

export default function CarList({ carList }: CarListProps) {
  const [selectedCar, setSelectedCar] = useState<CarType>({} as CarType);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {carList.map((car: CarType, index) => (
        <div
          key={index}
          onClick={() => {
            (window as any).my_modal_2.showModal();
            setSelectedCar(car);
          }}
        >
          <CarCard car={car} />
        </div>
      ))}

      <dialog id="my_modal_2" className="modal">
        <BookingModal car={selectedCar} />
      </dialog>
    </div>
  );
}
