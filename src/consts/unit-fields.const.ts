export interface IUnitFields {
    name: string;
    value: string;
    originalName: string
}

export const unitFields: IUnitFields[] = [
    {
        name: 'Nombredeconjunto',
        value: 'joint_name',
        originalName: 'Nombre de conjunto'
    },
    {
        name: 'Fechadeentrega',
        value: 'deadline_property',
        originalName: 'Fecha de entrega'
    },
    {
        name: 'Nombreunidad',
        value: 'name_unit',
        originalName: 'Nombre de unidad'
    },
    {
        name: 'Precioventa',
        value: 'price_property',
        originalName: 'Precio de venta'
    },
    {
        name: 'Tipomoneda',
        value: 'currency_price_property',
        originalName: 'Tipo de moneda'
    },
    {
        name: 'Cantidadbanos',
        value: 'bathroom',
        originalName: 'Cantidad de baños'
    },
    {
        name: 'Cantidaddeparqueos',
        value: 'parking',
        originalName: 'Cantidad de parqueos'
    },
    {
        name: 'Cantidadhabitacion',
        value: 'room',
        originalName: 'Cantidad de habitaciones'
    },
    {
        name: 'Metrosconstruccion',
        value: 'meter_construction_property',
        originalName: 'Metros de construcción'
    },
    {
        name: 'Metrossolar',
        value: 'meter_land_property',
        originalName: 'Metros de solar'
    }
];