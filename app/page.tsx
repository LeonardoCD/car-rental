"use client";
import CarsFiltersOption from "@/components/Home/CarsFiltersOption";
import Hero from "@/components/Home/Hero";
import SearchInput from "@/components/Home/SearchInput";
import { CarType, getCarsList } from "@/services";
import { useEffect, useState } from "react";


export default function Home() {
  const [carList, setCarList] = useState<CarType[]>([]);

  useEffect(() => {
    getCarList_();
  }, []);

  const getCarList_ = async () => {
    const result = await getCarsList();
    console.log(result);

    setCarList(result.carList)
  };

  return (
    <div className="p-5 sm:px-10 md:px-20">
      <Hero />

      <SearchInput />

      <CarsFiltersOption />
    </div>
  );
}
