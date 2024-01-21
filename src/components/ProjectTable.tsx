import styled from "@emotion/styled";
import { Box, IconButton } from "@mui/material";
import { useEffect } from "react";
// import Calendar from "@icons-rf/calendar-icon.svg";
import dayjs from "dayjs";
import { O_CURRENCY } from "../consts/currency.const";
import TextSimple from "./TextSimple";
import HeaderColumnProject from "./HeaderColumnProject";
import { useFormikContext as useFormicContext } from "formik";
import { IProject } from "../util/form.util";
import MoneyFormat from "../helpers/money-format";
function ProjectTable() {
  const ctx = useFormicContext<IProject[]>();

  return (
    <Container>
      {ctx.values.map((item) => (
        <WrapperContent>
          <HeaderTable>
            <div>
              <TitleBuilding>{item.joint_name}</TitleBuilding>
            </div>
            <Spacing />
            <ContentDate>
              <TextSimple color="white" size="label">
                Fecha de entrega
              </TextSimple>
              <ButtonIconActionsHeader>
                {/* <Calendar /> */}
              </ButtonIconActionsHeader>
              <DateBuilding>
                <TextSimple color="blue-02" size="label">
                  {dayjs(item.deadline_property).format("DD/MM/YYYY")} 
                </TextSimple>
              </DateBuilding>
            </ContentDate>
          </HeaderTable>
          <HeaderColumnProject />
          {item.units.map((unit) => (
            <HeaderColumn className="body-table-project">
              <Section>{unit.name_unit}</Section>
              <Section>{unit.room}</Section>
              <Section>{unit.bathroom}</Section>
              <Section>{unit.parking}</Section>
              <Section>{unit.meter_construction_property}</Section>
              <Section>{unit.meter_land_property}</Section>
              <Section>
                {unit.currency_price_property[0].name}
                {MoneyFormat(unit.price_property)}
              </Section>
            </HeaderColumn>
          ))}
        </WrapperContent>
      ))}

    </Container>
  );
}

export default ProjectTable;

const TitleBuilding = styled.span`
  font-family: Inter;
  font-size: 13px;
  font-weight: 700;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: left;
  color: white;
  padding: 0 20px;
`;
const DateBuilding = styled.div`
  font-family: Inter;
  font-size: 13px;
  font-weight: 700;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: left;
  color: white;
  background-color: white;
  border-radius: 20px;
  padding: 0 10px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContentDate = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;
  margin-right: 20px;
`;

const ButtonIconActionsHeader = styled(IconButton)`
  svg {
    color: white;
    fill: white;
    height: 1.125rem;
    width: 1.125rem;
  }
`;

const Spacing = styled.div`
  flex: 1;
`;

const Container = styled.div`
  width: 100%;
  margin-top: 20px;
  border-radius: 20px;
  background: #fff;
  padding: 50px 40px;
`;

const WrapperContent = styled(Box)`
  border: 1px solid var(--m-color-blue-03);
  border-bottom: none;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  margin-bottom: 20px;
`;

const HeaderTable = styled.div`
  width: 100%;
  display: flex;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;

  flex-direction: row;
  height: 40px;
  background-color: var(--m-color-blue-03);
  align-items: center;
`;

const HeaderColumn = styled.div`
  width: 100%;

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
  }
`;

const Section = styled.div<{ duo?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  & > .error-icon {
    position: absolute;
    right: 10px;
    fill: #f6ca05;
  }
  height: 40px;
  background-color: white;
  color: var(--m-color-gray-02);
  font-family: Inter;
  font-size: 12px;
  font-weight: 700;
  * {
    border: none;
    font-family: Inter;
    font-size: 10px;
    font-weight: 700;
    line-height: 19px;
    letter-spacing: 0em;
    text-align: left;
    color: #949ca1;
  }
`;
