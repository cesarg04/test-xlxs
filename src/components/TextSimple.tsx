import styled from "@emotion/styled";
import { Box, Tooltip, Typography } from "@mui/material";
import React, { forwardRef } from "react";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
type TSize =
  | "xx-title"
  | "x-title"
  | "title"
  | "sub-title"
  | "label"
  | "description";
interface IText {
  size: TSize;
  color:
    | "blue"
    | "blue-01"
    | "blue-02"
    | "gray"
    | "red"
    | "green"
    | "black"
    | "white"
    | "gray-02";
  weight?: "700" | "500" | "300" | "200" | "400" | "bold";
  font?: "inter" | "gotham";
  lineHeight?: "17px" | "24.2px" | "20px";
  truncate?: boolean;
  lineTruncate?: number;
  align?: "center" | "left" | "right";
  sx?: React.CSSProperties;
  uppercase?: boolean;
  capitalize?: boolean | "first" | "names";
  dangerouslySetInnerHTML?: any;
  required?: boolean;
  className?: string;
  msgtooltip?: string;
  component?: any;
  tooltipWithoutIcon?: boolean
}

interface TextSimpleProps extends IText {
  children?: React.ReactNode;
}

const TextSimple = forwardRef((props: TextSimpleProps, ref: any) => {
  const { truncate, lineTruncate, children, capitalize, ...rest } = props;

  const TruncatedText = styled.span`
    display: -webkit-box;
    -webkit-line-clamp: ${lineTruncate};
    -webkit-box-orient: vertical;
    overflow: hidden;
  `;

  if (truncate) {
    return (
      <TruncatedText ref={ref}>
        <Text component={"span"} {...rest}>
          {props.children}
        </Text>
        {props.msgtooltip && props.tooltipWithoutIcon === undefined &&(
          <Tooltip title={props.msgtooltip}>
            <CustomIconInfo />
          </Tooltip>
        )}
      </TruncatedText>
    );
  }

  return (
    <Tooltip title={ props.tooltipWithoutIcon && props.msgtooltip ? props.msgtooltip : '' } >

    <Text component={"span"} {...rest} ref={ref}>
      {children}
      {props.msgtooltip && props.tooltipWithoutIcon === undefined && (
        <Tooltip title={props.msgtooltip}>
          <CustomIconInfo />
        </Tooltip>
      )}
    </Text>
    </Tooltip>
  );
});

export default TextSimple;

const CustomIconInfo = styled(ErrorOutlineIcon)`
  font-size: 0.8rem;
  color: var(--m-color-blue-03);
  position: relative;
  top: 0.125rem;
  left: 0.125rem;
`;

const Generic = `
    font-family: var(--ff-inter);
    font-weight: 500;
    color: var(--text-blue);
    line-height: 20px;
    text-align: left;
    width: 100%;
`;

const color = (c: IText["color"]) => `color: var(--text-${c});`;
const weight = (c: IText["weight"]) => `font-weight: ${c};`;
const font = (c: IText["font"]) => `font-family: var(--ff-${c});`;
const lineHeight = (c: IText["lineHeight"]) => `line-height: ${c};`;
const align = (c: IText["align"]) => `text-align: ${c};`;
const uppercase = (c: IText["uppercase"]) => `text-transform: uppercase;`;
const required = (c: IText["required"]) => `
::after {
  content: " *";
  color: var(--m-color-red-01);
}`;
const capitalize = (c: IText["capitalize"]) => {
  if (c === "first") return `text-transform: capitalize;`;
  if (c === "names") return `text-transform: capitalize;`;
  return `text-transform: none;`;
};

const XXTitleSize = `
    font-size: 2.0625rem;
    ${weight("700")}
`;

const XTitleSize = `
    font-size: 1.8125rem;
    ${weight("700")}
`;

const TitleSize = `
    font-size: var(--fs-text-x-medium);
    ${weight("700")}
`;

const SubTitleSize = `
    font-size: var(--fs-text-medium);
`;

const LabelSize = `
    font-size: var(--fs-text-x-small);
`;

const DescriptionSize = `
    font-size: var(--fs-text-small);
`;

const Text = styled(Box)<IText>`
  ${Generic}
  ${(props) => props.size === "title" && TitleSize}
  ${(props) => props.size === "sub-title" && SubTitleSize}
    ${(props) => props.size === "label" && LabelSize}
    ${(props) => props.size === "description" && DescriptionSize}
    ${(props) => props.size === "xx-title" && XXTitleSize}
    ${(props) => props.size === "x-title" && XTitleSize}
    
    ${(props) => props.color && color(props.color)}
    ${(props) => props.weight && weight(props.weight)}
    ${(props) => props.font && font(props.font)}
    ${(props) => props.lineHeight && lineHeight(props.lineHeight)}
    ${(props) => props.align && align(props.align)}
    ${(props) => props.uppercase && uppercase(props.uppercase)}
    ${(props) => props.capitalize && capitalize(props.capitalize)}
    ${(props) => props.required && required(props.required)}
`;

export function capitalizeName(params: string, variant: "first" | "names") {
  if (variant === "first") {
    return params.charAt(0).toUpperCase() + params.toLowerCase().slice(1);
  }
  if (variant === "names") {
    return params
      .split(" ")
      .map((item) => {
        if (item.length > 2) {
          return item.charAt(0).toUpperCase() + item.slice(1);
        }
        return item.toLowerCase();
      })
      .join(" ");
  } else {
    return params.toLowerCase();
  }

  // ;const name = params.split(" ");
  // const nameCapitalized = name
  //   .map((item) => {
  //     if (variant === "first") {
  //       if (item.length > 2) {
  //         return item.charAt(0).toUpperCase() + item.slice(1);
  //       }
  //     }
  //     if (variant === "names") {
  //       if (item.length > 2) {
  //         return item.charAt(0).toUpperCase() + item.slice(1);
  //       }
  //     }

  //     return item.toLowerCase();
  //   })
  //   .join(" ")
  // return nameCapitalized;
}
