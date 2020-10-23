import axios from "axios";
import { to } from "await-to-js";

import {
  IataCode,
  Flight,
  Hotel,
  Month,
  Year,
  Promotion,
} from "./types";
import {convertDate} from './Functions'

const flights = async (): Promise<Flight[]> => {
  const request = await axios.get("/flights");
  const { data } = request;
  return data;
};

const iataCodes = async (): Promise<IataCode[]> => {
  const request = await axios.get(`/iataCodes/`);
  const { data } = request;
  return data;
};

const hotels = async (): Promise<Hotel[]> => {
  const request = await axios.get(`/hotels/`);
  const { data } = request;
  return data;
};

const promos = async (): Promise<Promotion[]> => {
  const [err, promotions] = await to(
    Promise.all([hotels(), flights(), iataCodes()]).then((val) => {
      const hotelsRequest = val[0];
      const flightsRequest = val[1];
      const cities = val[2];
      return cities.map((city: IataCode) => {
        let obj;
        const hotelsInCity = hotelsRequest.filter(
          (hotel) => hotel.iata === city.id
        );
        if (hotelsInCity.length !== 0) {
          const hotelCheap: Hotel = hotelsInCity.sort(
            (a, b) => a.pricePerNight - b.pricePerNight
          )[0];
          const flightsToCity = flightsRequest.filter(
            (flight) => flight.arrivalAirport === city.id
          );
          const flightCheap = flightsToCity.sort(
            (a, b) => a.price - b.price
          )[0];
          obj = {
            city: city.city,
            iata: city.id,
            imageCity: city.imageUrl,
            hotel: hotelCheap.name || "",
            pricePerNight: hotelCheap.pricePerNight || 0,
            flightCompany: flightCheap.company,
            flightPrice: flightCheap.price,
            totalPrice: flightCheap.price + hotelCheap.pricePerNight,
            goDate: convertDate(flightCheap.inboundDate),
            backDate: convertDate(flightCheap.outboundDate),
          };
        }
        return obj;
      });
    })
  );
  if (!!err) {
		throw err;
  }
  if(!promotions){
    throw Error('Cannot start a journey');
  }
  return promotions.filter((promotion:any) => promotion !== undefined);
};

const months = async (): Promise<Month[]> => {
  return [
    { id: 0, name: "Janeiro" },
    { id: 1, name: "Fevereiro" },
    { id: 2, name: "Março" },
    { id: 3, name: "Abril" },
    { id: 4, name: "Maio" },
    { id: 5, name: "Junho" },
    { id: 6, name: "Julho" },
    { id: 7, name: "Agosto" },
    { id: 8, name: "Setembro" },
    { id: 9, name: "Outubro" },
    { id: 10, name: "Novembro" },
    { id: 11, name: "Dezembro" },
  ];
};

const years = async (): Promise<Year[]> => {
  return [
    { id: 2020, year: 2020 },
    { id: 2021, year: 2021 },
    { id: 2022, year: 2022 },
    { id: 2023, year: 2023 },
    { id: 2024, year: 2024 },
    { id: 2025, year: 2025 },
    { id: 2026, year: 2026 },
    { id: 2027, year: 2027 },
    { id: 2028, year: 2028 },
    { id: 2029, year: 2029 },
    { id: 2030, year: 2030 },
    { id: 2031, year: 2031 },
  ];
};

export const Requests = { flights, iataCodes, hotels, months, years, promos };
