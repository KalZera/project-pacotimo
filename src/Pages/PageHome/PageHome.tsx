import React, { FunctionComponent, useState } from "react";
import {
  Autocomplete,
  Card,
  SelectMonth,
  SelectYear,
  SelectDestiny,
  Button,
} from "Components";
import { Container, BoxFilter, BoxPromotions, BoxSelects,BoxButton } from "./styles";

import { useRequest } from "Hooks";
import { Requests, Promotion } from "Services";

interface Props {}

export const PageHome: FunctionComponent<Props> = () => {
  const [loadingIata, , iataCodes] = useRequest(Requests.iataCodes);
  const [loading, , flights] = useRequest(Requests.flights);
  const [loadingHotel, , hotels] = useRequest(Requests.hotels);
  const [loadingMonth, , months] = useRequest(Requests.months);
  const [loadingYear, , years] = useRequest(Requests.years);
  const [loadingPromo, , promos] = useRequest(Requests.promos);
  const [arrayDestiny, setDestiny] = useState<string[]>([]);
  const [month, setMonth] = useState<number>(0);
  const [year, setYear] = useState<number>(0);
  const [promoUpdate, setUpdatePromo] = useState<Promotion[] | undefined>();

  if (
    !!loadingIata ||
    !iataCodes ||
    !!loading ||
    !flights ||
    !!loadingHotel ||
    !hotels ||
    !!loadingPromo ||
    !promos
  ) {
    return null;
  }
  if (!!loadingMonth || !months || !!loadingYear || !years) {
    return null;
  }
  const updatePromo = () => {
    let promocao = promos;
    if (arrayDestiny.length !== 0) {
      promocao = promos.filter(
        (promo) => arrayDestiny.includes(promo.iata) && promo
      );
    }
    if (month !== 0) {
      const promocaoForMonths = promocao.filter(
        (promoMonth) => parseInt(promoMonth.goDate.split("/")[1]) - 1 === month
      );
      promocao = promocaoForMonths;
    }
    if (year !== 0) {
      const promocaoForYear = promocao.filter(
        (promoMonth) => parseInt(promoMonth.goDate.split("/")[2]) === year
      );
      promocao = promocaoForYear;
    }
    setUpdatePromo(promocao);
  };
  return (
    <>
      <Container>
        <BoxFilter>
          <BoxSelects>
            <label htmlFor="">Origem:</label>
            <Autocomplete options={iataCodes} placeholder={"Origem"} />
            <label htmlFor="">Destino:</label>
            {/* origem estatica só para que seja ocultado o destino de belo horizonte */}
            <SelectDestiny
              options={iataCodes}
              placeholder={"Destino"}
              setDestiny={setDestiny}
              origin="CNF"
            />
          </BoxSelects>
          <BoxSelects>
            <label htmlFor="">Mês da viagem:</label>
            <SelectMonth
              options={months}
              placeholder={"Mês da viagem"}
              setMonth={setMonth}
            />
            <label htmlFor="">Ano da viagem:</label>
            <SelectYear
              options={years}
              placeholder={"Ano da viagem"}
              setYear={setYear}
            />
          </BoxSelects>
          <BoxButton>
            <Button text="Buscar Promoção" onClick={updatePromo} />
          </BoxButton>
        </BoxFilter>
        <BoxPromotions>
            {!!promoUpdate
              ? promoUpdate.map((promo: Promotion) => (
                  <Card key={promo.city} promo={promo} />
                ))
              : promos.map((promo: Promotion) => (
                  <Card key={promo.city} promo={promo} />
                ))}
        </BoxPromotions>
      </Container>
    </>
  );
};
