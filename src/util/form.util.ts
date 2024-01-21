import { C_CURRENCY } from "../consts/currency.const";

export const UNIT_PROJECT: IUnitProject = {
    id_unit: window.crypto.getRandomValues(new Uint32Array(1))[0],
    name_unit: "",
    room: 0,
    bathroom: 0,
    parking: 0,
    meter_land_property: "",
    meter_construction_property: "",
    currency_price_property: [C_CURRENCY.RD],
    price_property: "",
    currency_separation_property: [C_CURRENCY.RD],
    price_separation_property: "",
    sale_porcentaje_property: "",
    percent_commission_agent_seller: "",
    frames_property: [],
    doors_property: [],
    closets_property: [],
    cabinets_property: [],
    floors_property: [],
    roofs_property: [],
    windows_property: [],
    currency_maintenance_property: [C_CURRENCY.RD],
    maintenance_property: "",
    feature_property: [],
};

export const PROJECT: IProject[] = [{
    joint_name: '',
    deadline_property: '',
    projectId: window.crypto.getRandomValues(new Uint32Array(1))[0],
    units: [UNIT_PROJECT]
}]


export interface IProject {
    joint_name: string,
    deadline_property: string,
    projectId: number,
    units: IUnitProject[]
}

export interface ICurrency {
    code: string;
    name: string;
    label: string;
    value: string;
    id: number;
    description: string;
}

export interface IUnitProject {
    id_unit: number;
    name_unit: string;
    room: number;
    bathroom: number;
    parking: number;
    meter_land_property: string;
    meter_construction_property: string;
    currency_price_property: ICurrency[]; // Cambio aquí
    price_property: string;
    currency_separation_property: ICurrency[]; // Cambio aquí
    price_separation_property: string;
    sale_porcentaje_property: string;
    percent_commission_agent_seller: string;
    frames_property: string[];
    doors_property: string[];
    closets_property: string[];
    cabinets_property: string[];
    floors_property: string[];
    roofs_property: string[];
    windows_property: string[];
    currency_maintenance_property: ICurrency[]; // Cambio aquí
    maintenance_property: string;
    feature_property: string[];
}