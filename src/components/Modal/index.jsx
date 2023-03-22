import { setIsModal } from "@/store/slices/mapSettings";
import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/store";


const Modal = (params) => {
  const settings = useAppSelector((state) => state.mapSettings)
  const dispatch = useAppDispatch()
  useEffect(() => {
    // console.log(settings)
  }, [])

  return (
    <>
      {
        settings.isModalOpen === true && (
          <div className="modal">
            <div className="modal__close" onClick={() => dispatch(setIsModal())}>X</div>

            <div className="modal__container">
              <div className="modal__info__header">
                {
                  params.title
                }
              </div>
              <div className="modal__info__body">
                <div className="modal__info__deyatelnost">
                  {
                    params.body
                  }
                </div>
                <div className="modal__list">
                  <div>
                    <h3>Информация о минеральных источниках</h3>
                  </div>
                  <div>
                    <p>
                    {params.location}
                    </p>                  
                  </div>
                  <div>
                    <p>
                    {params.brief}
                    </p>
                  </div>
                  <div>
                    {params.medicinal_properties}
                  </div>
                  <div>
                  {params.photo_materials}
                  </div>

                </div>

              </div>
              <div className="modal__footer">
                <div className="modal__contacts">
                  <h3>Контактная информация</h3>
                  <p>
                    {
                      params.address
                    }
                  </p>
                  <p>
                    {
                      params.phone
                    }
                  </p>
                  <p>
                    {
                      params.email
                    }
                  </p>
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