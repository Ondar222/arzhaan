import { setIsModal } from "@/store/slices/mapSettings";
import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/store";
import parser from 'html-react-parser'


const Modal = (params) => {
  const selectedArzhaan = useAppSelector((state) => state.selectedArzhaan)
  const settings = useAppSelector((state) => state.mapSettings)
  const dispatch = useAppDispatch()

  useEffect(() => {
    console.log(selectedArzhaan)
  }, [])

  return (
    <>
      {
        settings.isModalOpen === true && (

          <div className="modal">
            <div className="modal__fade" onClick={() => dispatch(setIsModal())}></div>
            <div className="modal__close" onClick={() => {
              
              dispatch(setIsModal())
            }
            }>X</div>

            <div className="modal__container">
              <div className="modal__info__header">
                {
                  parser(String(selectedArzhaan?.data?.attributes?.properties?.description))
                }
              </div>
              <div className="modal__info__body">
                <div className="modal__info__deyatelnost">

                </div>
                <div className="modal__list">
                  <div>
                    <h3>Информация о минеральных источниках</h3>
                  </div>
                  <div>
                      {parser(String(selectedArzhaan?.data?.attributes?.properties?.location))}
                  </div>
                  <div>
                      {parser(String(selectedArzhaan?.data?.attributes?.properties?.brief))}
                  </div>
                  <div>
                    {parser(String(selectedArzhaan?.data?.attributes?.properties?.medicinal_properties))}
                  </div>
                  <div>
                    {parser(String(selectedArzhaan?.data?.attributes?.properties?.photo_materials))}
                  </div>

                </div>

              </div>
              <div className="modal__footer">
                <div className="modal__contacts">
                  <h3>Контактная информация</h3>
                 
                    {
                      parser(String(selectedArzhaan?.data?.attributes?.properties?.address))
                    }
                    {
                      parser(String(selectedArzhaan?.data?.attributes?.properties?.phone))
                    }
                    {
                      parser(String(selectedArzhaan?.data?.attributes?.properties?.email))
                    }
                </div>
              </div>
            </div>
          </div>

        )
      }

    </>

  )
};
export default Modal;