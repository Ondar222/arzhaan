import { setIsModal } from "@/store/slices/mapSettings";
import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/store";

const Modal = (params) => {
  const settings = useAppSelector((state) => state.mapSettings)
  const dispatch = useAppDispatch()
  useEffect(() => {
    console.log(settings)
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
                  <ul className="list">
                    <li className="item__list">обеспечение функционирования региональной системы оценки качества образования в Республике Тыва</li>
                    <li className="item__list">организационно-технологическое и информационное обеспечение проведения государственной (итоговой) аттестации выпускников XI(XII) классов образовательных организаций</li>
                    <li className="item__list">изучение информационных потребностей системы дошкольного, общего, дополнительного и профессионального образования</li>
                    <li className="item__list">разработка и издание, методической и иной литературы, в том числе периодической, по вопросам оценки качества образования</li>
                  </ul>
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