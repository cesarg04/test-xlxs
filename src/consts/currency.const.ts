export const C_CURRENCY = {
    RD: {
      code: "RD",
      name: "RD",
      label: "RD$",
      value: "rd",
      id: 1,
      description: "pesos",
    },
    USD: {
      code: "USD",
      name: "US",
      label: "US$",
      value: "us",
      id: 2,
      description: "dólares",
    },
  };
  
  const { RD, USD } = C_CURRENCY;
  
  export const O_CURRENCY = {
    [RD.code]: C_CURRENCY.RD,
    [RD.description]: C_CURRENCY.RD,
    [RD.id]: C_CURRENCY.RD,
    [RD.label]: C_CURRENCY.RD,
    [RD.value]: C_CURRENCY.RD,
    [RD.name]: C_CURRENCY.RD,
  
    [USD.code]: C_CURRENCY.USD,
    [USD.description]: C_CURRENCY.USD,
    [USD.id]: C_CURRENCY.USD,
    [USD.label]: C_CURRENCY.USD,
    [USD.value]: C_CURRENCY.USD,
    [USD.name]: C_CURRENCY.USD
  }
   
  export const A_CURRENCY = [C_CURRENCY.RD,C_CURRENCY.USD];
  