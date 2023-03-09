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
                  <div>
                    <h3>Информация об организации горячего питания</h3>
                  </div>
                  <div>
                    <p>
                      В целях реализации Послания Президента Российской Федерации Федеральному Собранию от 15.01.2020 г в части организации бесплатного горячего питания для обучающихся начальных классов, в соответствии с Федеральным законом 01.03.2020 года № 47 –ФЗ «О внесении изменений в Федеральный закон «О качестве и безопасности пищевых продуктов» и ст.37 ФЗ «Об образовании в Российской Федерации»,
                      Порядком обеспечения бесплатного горячего питания обучающихся начального общего образования в муниципальных общеобразовательных организациях города Кызыла (утверждён Постановлением Мэрии города Кызыла № 664 от27.11.2020) проведены мероприятия по организации горячего питания обучающихся начальной школы. Питанием охвачены 1313 учащихся начальных классов.
                      Питание осуществляется из расчёта 64,56 рублей на одного ребёнка.
                      Ведётся систематический анализ состояния питания детей со стороны надзорных органов, строго соблюдаются требования СанПиНа в вопросах организации горячего питания.
                      Качество пищи ежедневно проверяется поваром, медицинской сестрой и членами бракеражной комиссии.
                      Родители учащихся ежемесячно принимают участие в акции «Родительский контроль».
                    </p>
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