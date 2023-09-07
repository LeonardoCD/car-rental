"use client";
import CarList from "@/components/Home/CarList";
import CarsFiltersOption from "@/components/Home/CarsFiltersOption";
import Hero from "@/components/Home/Hero";
import SearchInput from "@/components/Home/SearchInput";
import { CarType, getCarsList } from "@/services";
import { useEffect, useState } from "react";

export default function Home() {
  const [carList, setCarList] = useState<CarType[]>([]);
  const [carOrgList, setCarOrgList] = useState<CarType[]>([]);

  useEffect(() => {
    getCarList_();
  }, []);

  const getCarList_ = async () => {
    const result = await getCarsList();

    setCarList(result.carLists);

    setCarOrgList(result.carLists);
  };

  const filterCarList = (brand: string) => {
    if (!brand) {
      setCarList(carOrgList);
      return;
    }

    const filterList = carOrgList.filter(
      (car: CarType) => car.carBrand === brand
    );

    setCarList(filterList);
  };

  const orderCarList = (order: number) => {
    if (!order) {
      setCarList(carOrgList);
      return;
    }
    const sortedData = [...carOrgList].sort((a, b) =>
      order === 1 ? b.price - a.price : a.price - b.price
    );

    setCarList(sortedData);
  };

  return (
    <div className="p-5 sm:px-10 md:px-20">
      <Hero />

      <SearchInput />

      <CarsFiltersOption
        carsList={carOrgList}
        setBrand={filterCarList}
        orderCarList={(value: number) => orderCarList(Number(value))}
      />

      <CarList carList={carList} />
    </div>
  );
}
