import { useFormikContext } from "formik"
import { ChangeEvent, useEffect, useState } from "react"
import * as xlsx from 'xlsx'
import { IProject, IUnitProject } from "../util/form.util"
import { unitFields } from "../consts/unit-fields.const"
import { O_CURRENCY } from "../consts/currency.const"
import styled from '@emotion/styled'


const FileInput = () => {

    const [data, setData] = useState<any[]>([])

    const Ftx = useFormikContext<IProject[]>()

    const removeSpacesInKeys = (data: any[]): any[] => {
        return data.map((item) => {
            const newItem: { [key: string]: any } = {};

            Object.keys(item).forEach((key) => {
                const newKey = key.replace(/\s+/g, ''); // Remove spaces in key
                newItem[newKey] = item[key];
            });

            return newItem;
        });
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement> | undefined) => {

        const reader = new FileReader()

        if (e?.target.files) {
            reader.readAsBinaryString(e?.target?.files[0])
            reader.onload = (event: any) => {
                const data = event.target?.result;
                const workbook = xlsx.read(data, { type: 'binary', cellDates: true, cellNF: false, cellText: false })
                const sheetName = workbook.SheetNames[0];
                const sheet = workbook.Sheets[sheetName]
                const parsedData = xlsx.utils.sheet_to_json(sheet) as any;
                const data_parsed = removeSpacesInKeys(parsedData)
                console.log(data_parsed);
                setData(data_parsed)
            }
        }
    }

    const separateByBuildingWithChildren = (data: any[]): any[] => {
        const groupedData: any[] = [];
        let currentBuilding: any | null = null;

        data.forEach((item) => {
            if (item["Nombredeconjunto"]) {
                // Si es un nuevo edificio, actualiza el edificio actual
                currentBuilding = item;
                currentBuilding.units = [];
                groupedData.push(currentBuilding);
            } else if (currentBuilding) {
                // Si no es un edificio y hay un edificio actual, agrégalo a sus hijos
                currentBuilding.units.push(item);
            }
        });

        //  Change names to form
        return groupedData.map((building) => {
            const newBuilding: any = {};
            building.units = building.units.map((unit: any) => {
                const newUnit: any = {};
                unitFields.forEach((field) => {
                    newUnit[field.value] = unit[field.name];
                });
                return newUnit;
            });
            unitFields.forEach((field) => {
                newBuilding[field.value] = building[field.name];
            });
            newBuilding.units = building.units;
            return newBuilding;
        });
    };

    const removeUndefinedProperties = (obj: any): any => {
        return Object.entries(obj).reduce((acc, [key, value]) => {
          if (value !== undefined) {
            acc[key] = value;
          }
          return acc;
        }, {} as any);
      };



    useEffect(() => {
        if (data.length > 0) {

            const separed = separateByBuildingWithChildren(data)

            const parsed = separed.map(item => {
                const { joint_name, deadline_property, units, ...rest } = item;
                item.units.unshift(rest)
                Object.keys(rest).forEach(element => {
                    delete item[element]
                });
                item.units.forEach((field: any) => {
                    field.currency_price_property = [O_CURRENCY[field.currency_price_property]]
                });
                return item
            })

            Ftx.setValues(parsed)

        }

    }, [data])




    useEffect(() => {

        console.log(Ftx.values);

    }, [Ftx])


    return (
        <>
            <CustomInput
                type="file"
                onChange={handleChange}
                id="input-excel"

            />
        </>
    )
}

export default FileInput;

const CustomInput = styled.input`
    display: none;
`