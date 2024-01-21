import styled from "@emotion/styled";
import React from "react";
// import Bed from "@icons-rf/properties-item/bed.svg";
// import Bath from "@icons-rf/properties-item/bath.svg";
// import Card from "@icons-rf/properties-item/carro.svg";
// import Casa2 from "@icons-rf/properties-item/casa2.svg";
// import Medida from "@icons-rf/properties-item/medida.svg";
// import Price1 from "@icons-rf/price-1.icon.svg";
// import Price2 from "@icons-rf/price-2.icon.svg";
function HeaderColumnProject() {
  const HeaderColumnObject = [
    {
      label: "Nombre",
      icon: null,
      size: "12%",
      show: true,
    },
    {
      label: "Hab.",
      icon: null,
      size: "7%",
      show: true,
    },
    {
      label: "Baños",
      icon: null,
      size: "7%",
      show: true,
    },
    {
      label: "Parq.",
      icon: null,
      size: "7%",
      show: true,
    },
    {
      label: "M² Solar.",
      icon: null,
      size: "8%",
      show: true,
    },
    {
      label: "M² Const.",
      icon: null,
      size: "8%",
      show: true,
    },
    {
      label: "Precio",
      icon: null,
      size: "33%",
      show: true,
    },
  ];

  return (
    <HeaderColumn>
      {HeaderColumnObject.map((item, index) => {
        return (
          <Section
            key={index}
            style={{
              display: item.show ? "flex" : "none",
            }}
          >
            {item.label}
            {/* {index === 0 && item.label} */}
          </Section>
        );
      })}
    </HeaderColumn>
  );
}

export default HeaderColumnProject;

const HeaderColumn = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  height: 40px;
  background-color: #f5f5f5;
  display: grid;
  grid-template-columns: 0.8fr 0.5fr 0.5fr 0.5fr 0.5fr 0.5fr 1.2fr;
  & > div {
    border-left: 1px solid var(--m-color-blue-03);
    border-bottom: 1px solid var(--m-color-blue-03);
    padding: 0 5px;
  }
  & > div:first-of-type {
    border-left: none;
    justify-content: flex-start;
    padding: 0 20px;
  }

  & > div {
    justify-content: center;
  }
  & > div:last-of-type {
    display: none;
  }
`;

const Section = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  height: 40px;
  color: var(--m-color-blue-03);
  font-family: gotham;
  font-weight: 700;
  font-size: 11px;
  align-items: center;
  svg {
    margin-right: 5px;
    width: 20px;
    height: 20px;
  }
`;
