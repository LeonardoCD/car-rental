import request, { gql } from "graphql-request";

export type CarType = {
  carBrand: string;
  carType: string;
  carvAvg: number;
  createdAt: string;
  id: string;
  name: string;
  price: number;
  seat: number;
  updatedAt: string;
  image: {
    url: string;
  };
};

export interface CarList {
  carLists: CarType[];
}

export const getCarsList = async () => {
  const query = gql`
    query CarLists {
      carLists {
        carBrand
        carType
        carvAvg
        createdAt
        id
        name
        price
        seat
        updatedAt
        image {
          url
        }
      }
    }
  `;

  const response: CarList = await request(
    "https://api-sa-east-1.hygraph.com/v2/clm5clb4r36t801t1h2qo8atz/master",
    query
  );

  return response;
};
