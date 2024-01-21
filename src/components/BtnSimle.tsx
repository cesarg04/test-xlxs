import styled from "@emotion/styled";
import { Button, ButtonBaseProps, CircularProgress, Tooltip } from "@mui/material";
import React from "react";

interface BtbSimpleProps {
    "variant-custom"?: "red" | "blue-main" | "green" | "gray" | "mute" | "yellow";
    text?: string;
    children?: React.ReactNode;
    onClick?: () => void;
    rounded?: boolean;
    type?: "submit" | "reset" | "button" | undefined;
    endIcon?: React.ReactNode;
    weight?: string;
    disabled?: boolean;
    id?: string;
    noWrap?: boolean;
    isLoading?: boolean
    shading?: string;
    msgtooltip?: string
    ref?: React.RefObject<HTMLButtonElement>
    startIcon?: React.ReactNode
}

const BtnSimple = (props: BtbSimpleProps) => {
    return (
        <Tooltip title={props.msgtooltip ? props.msgtooltip : ''} >
            <BTN
                {...props}
                variant="contained"
                // @ts-ignore
                rounded={props.rounded + ""}
                variant-custom={props["variant-custom"]}
                endIcon={props?.endIcon}
                startIcon={props.startIcon}
            >
                {
                    props.isLoading
                        ? <ContainerLoading>Cargando... <CircularProgress size={'1rem'} color="inherit" /></ContainerLoading>
                        : props.children
                }
                {/* {props.children} */}
            </BTN>
        </Tooltip>
    );
};

export default BtnSimple;

const genericStyles = `
    border-radius: 50px;
    height: 30px;
    font-family: var(--ff-inter);
    font-weight: 500;
    text-transform: none;
    padding: 0.5625rem 1.25rem;
    font-size: var(--fs-text-x-small);
    line-height: 1.5rem;
    box-shadow: none;
    letter-spacing: 0.02857em;
    &:hover{
        box-shadow: none;
    }
    &:focus{
        box-shadow: none;
    }
`;

const Red = `
    background-color: var(--m-color-red-01);
    color: white;
    &:hover{
        background-color: var(--m-color-red-01);
    }
`;

const Blue = `
    background-color: var(--m-color-blue-03);
    color: white;
    &:hover{
        background-color: var(--m-color-blue-03);
    }
`;

const Green = `
    background-color: var(--m-color-green-01);
    color: white;
    &:hover{
        background-color: var(--m-color-green-01);
    }
`;

const Gray = `
    background-color: var(--m-color-gray-02);
    color: white;
    &:hover{
        background-color: var(--m-color-gray-02);
    }
`;

const Yellow = `
    background-color: var(--m-color-yellow-01);
    color: white;
    &:hover{
        background-color: var(--m-color-yellow-hover);
    }
`

const Mute = `
    display: none;
`;

const BTN = styled(Button) <BtbSimpleProps>`
  ${genericStyles}
  ${(props) => props["variant-custom"] === "red" && Red}
    ${(props) => props["variant-custom"] === "blue-main" && Blue}
    ${(props) => props["variant-custom"] === "green" && Green}
    ${(props) => props["variant-custom"] === "gray" && Gray}
    ${(props) => props["variant-custom"] === "mute" && Mute}
    ${ (props) => props["variant-custom"]  === 'yellow'  && Yellow}
    ${(props) => props.rounded && "border-radius: 50px;"}
    ${(props) => props.weight && `font-weight: ${props.weight};`}
    ${(props) => props.disabled && `opacity: 0.5;`}
    ${(props) => props.noWrap && `white-space: nowrap;`}
    ${(props) => props.shading == 'true' && `box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;`}
`;


const ContainerLoading = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
`