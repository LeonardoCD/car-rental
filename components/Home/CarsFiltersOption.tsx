import { CarType } from "@/services";
import React, { useEffect, useState } from "react";

interface CarFiltersOptionProps {
  carsList: CarType[];
  setBrand: (brand: string) => void;
  orderCarList: (order: number) => void
}

export default function CarsFiltersOption({
  carsList,
  setBrand,
  orderCarList,
}: CarFiltersOptionProps) {
  const [brandList, setBrandList] = useState<string[]>();
  const BrandSet = new Set<string>();

  useEffect(() => {
    if (carsList) filterCarsList();
  }, [carsList]);

  const filterCarsList = () => {
    carsList.forEach((car: CarType) => {
      BrandSet.add(car.carBrand);
    });

    console.log({ BrandSet });

    setBrandList(Array.from(BrandSet));
  };

  return (
    <div className="mt-10 flex items-center justify-between">
      <div>
        <h2 className="text-[30px] font-bold">Cars Catalog</h2>

        <h2>Explore our cars you might likes</h2>
      </div>

      <div className="flex gap-5">
        <select
          className="select select-bordered w-full max-w-xs"
          onChange={(e) => orderCarList(Number(e.target.value))}
        >
          <option value={0}>Price</option>

          <option value={-1}>Min to Max</option>

          <option value={1}>Max to Min</option>
        </select>

        <select
          className="select select-bordered w-full max-w-xs md:block hidden"
          onChange={(e) => setBrand(e.target.value)}
        >
          <option value="">Manufactural</option>

          {brandList &&
            brandList?.map((brand: string) => (
              <option key={brand} value={brand}>
                {brand}
              </option>
            ))}
        </select>
      </div>
    </div>
  );
}
