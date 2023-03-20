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
                      Республика Тыва расположена в центре Азии, на юге Восточной Сибири, в верховьях Енисея.
                      Это уникальное по своей истории, природе и культуре место.
                      
                      Наиболее крупные из них — горячие источники Уш-Белдир (Северный аржаан) и Тарыс (Южный аржаан) в горах восточной Тывы на хребте Академика Обручева с температурой воды от +52...+85 °С.
                      Население республики широко использует холодные аржааны Шивилиг, Уургайлыг, Когээн-Булак, Хемчик, Кара-Суг, Торгалыг, Улаатай, Маннайлыг и др. Для лечебных целей используется значительная часть степных озер с соленой водой: Дус-Холь, Чедер, Бай-Холь.
                       Минеральные источники, озера Тывы имеют уникальные свойства и находятся в особых природно-климатических условиях, в живописных местах Тувы.
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