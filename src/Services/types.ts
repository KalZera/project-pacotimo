export interface IataCode {
  id: string;
  city: string;
  imageUrl: string;
}

export interface Flight {
  id: string;
  company: string;
  price: number;
  departureAirport: string;
  arrivalAirport: string;
  outboundDate: number;
  inboundDate: number;
}

export interface Hotel {
  id: string;
  name:string;
  iata:string;
  pricePerNight:number;
}

export interface Promotion {
  city: string,
  iata: string,
  imageCity: string,
  hotel: string,
  pricePerNight: number,
  flightCompany: string,
  flightPrice: number,
  totalPrice: number,
  goDate: string,
  backDate: string,
}
export interface RequestPromotion {
  textInput:string[],
  month:number;
  year:number;
}

export interface Month {
  id:number;
  name: string;
}
export interface Year {
  id:number;
  year: number;
}
