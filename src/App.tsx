import { ChangeEvent, ChangeEventHandler, useEffect, useState } from 'react'
import * as xlsx from 'xlsx'
import FileInput from './components/FileInput'
import { Form, Formik, FormikConfig, FormikHelpers } from 'formik'
import { IProject, IUnitProject, PROJECT, UNIT_PROJECT } from './util/form.util'
import styled from "@emotion/styled";
import ProjectTable from './components/ProjectTable'
import BtnSimple from './components/BtnSimle'

function App() {


  const formikConfig: FormikConfig<IProject[]> = {
    initialValues: PROJECT,
    onSubmit: (values: any, formikHelpers: FormikHelpers<IProject[]>) => {
      console.log(values);
    },onReset: () => {
      const input = document.getElementById('input-excel')

    if(input) {
      (input as HTMLInputElement).value = '';
    }
    }
  }


  const onClickImport = () => {
    const input = document.getElementById('input-excel')

    if(input) {
      input?.click()
    }
  }



  return (
    <>
      <Formik {...formikConfig} >
        {(formikProps) => {

          useEffect(() => {

            console.log('formikProps', formikProps.values);

          }, [formikProps.values])

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