import { ChangeEvent, ChangeEventHandler, useEffect, useState } from 'react'
import * as xlsx from 'xlsx'
import FileInput from './components/FileInput'
import { Form, Formik, FormikConfig, FormikHelpers } from 'formik'
import { IProject, IUnitProject, PROJECT, UNIT_PROJECT } from './util/form.util'
import styled from "@emotion/styled";
import ProjectTable from './components/ProjectTable'
import BtnSimple from './components/BtnSimle'
import { json_test_example } from './consts/example-file'
import dayjs from 'dayjs'
import { unitFields } from './consts/unit-fields.const'

function App() {


  const formikConfig: FormikConfig<IProject[]> = {
    initialValues: PROJECT,
    onSubmit: (values: any, formikHelpers: FormikHelpers<IProject[]>) => {
      console.log(values);
    }, onReset: () => {
      const input = document.getElementById('input-excel')

      if (input) {
        (input as HTMLInputElement).value = '';
      }
    }
  }


  const onClickImport = () => {
    const input = document.getElementById('input-excel')

    if (input) {
      input?.click()
    }
  }



  return (
    <>
      <Formik {...formikConfig} >
        {(formikProps) => {

          useEffect(() => {

            console.log('formikProps', JSON.stringify(formikProps.values));

          }, [formikProps.values])


         

          const parseArr = () => {
            const parsePrincipal = formikProps.values.map((item, index) => {
              const { units, projectId, ...rest } = item
              const index1 = units[0]
              const indx = {
                ...rest,
                ...index1
              }

              return {
                ...indx,
                units: units.slice(1)
              }
            })

            const prepareToDownload = parsePrincipal.map(data => {
              const buildingArray: any[] = [];

              // Extract main data
              const mainData: any = {
                joint_name: data.joint_name,
                deadline_property: dayjs(data.deadline_property).format('DD/MM/YYYY'),
                name_unit: data.name_unit,
                price_property: data.price_property,
                currency_price_property: data.currency_price_property[0].name,
                bathroom: data.bathroom,
                parking: data.parking,
                room: data.room,
                meter_construction_property: data.meter_construction_property,
                meter_land_property: data.meter_land_property,
              };
              buildingArray.push(mainData);
              // Extract units
              if (data.units) {
                data.units.forEach((unitData: any) => {
                  const unit: any = {
                    ...unitData,
                    // joint_name: data.joint_name,
                    // deadline_property: data.deadline_property,
                    currency_price_property: unitData.currency_price_property[0].name,
                  };

                  buildingArray.push(unit);
                });
              }
              return buildingArray
            }).flat().map(object => {
              const newObject: any = {};
          
              for (const field of unitFields) {
                  const originalName = field.originalName;
                  const newName = field.name;
                  newObject[originalName] = object[newName];
                  newObject[field.originalName] = object[field.value];
              }
          
              return newObject;
          });

            const onDownloadFile = () => {
              const workBook = xlsx.utils.book_new()
              const workSheet = xlsx.utils.json_to_sheet(prepareToDownload)
              xlsx.utils.book_append_sheet(workBook, workSheet, 'tested')
              xlsx.writeFile(workBook, 'testing.xlsx')
  
              // console.log(convertedArray);
            }
            onDownloadFile()

          }



          return (
            <Form>
              <ContainerButtton>
                <BtnSimple
                  onClick={onClickImport}
                >
                  Importar datos
                </BtnSimple>
                <BtnSimple
                  variant-custom='red'
                  type='reset'
                >
                  Borrar
                </BtnSimple>

                <BtnSimple
                  onClick={parseArr}
                  variant-custom='green' >
                  Descargar
                </BtnSimple>
              </ContainerButtton>
              <FileInput />
              <ContainertTable>
                {
                  formikProps.values.length >= 2 && (
                    <>
                      <ProjectTable />
                    </>
                  )
                }
              </ContainertTable>

            </Form>
          )
        }}
      </Formik>
    </>
  )
}

export default App;

const ContainertTable = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

const ContainerButtton = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 50px;
  gap: 30px;
`