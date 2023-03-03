import React, { useState } from "react";

const Modal = (params) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
    <button style={{position: "fixed", zIndex: 700}} onClick={() => setIsOpen(true)}>кнопка</button>
      {
        isOpen === true && (
          <div className="modal">
            <div className="modal__close" onClick={() => setIsOpen(false)}>X</div>

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
                    <li className="item__list">обеспечение информационной прозрачности качества образования (публикация материалов о качестве образования в Республике Тыва в специализированных изданиях, периодической печати, сети Интернет)</li>
                    <li className="item__list">разработка и издание, методической и иной литературы, в том числе периодической, по вопросам оценки качества образования</li>
                  </ul>
                </div>
              </div>
              <div className="modal__info__footer">
                <div className="contacts">
                  <div>
                    <h1>Контактные данные</h1>
                  </div>
                  <div className="address">
                    {
                      params.address
                    }
                  </div>
                  <div className="email">
                    {
                      params.email
                    }
                  </div>
                  <div className="phone">
                    {
                      params.phone
                    }
                  </div>
                  <div className="link__website">
                    <a href="https://vk.com/@visit_tuva-arzhaany-tuvy">Ссылка на cайт</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal__fade"></div>
          </div>
        )
      }

    </>

  )
};
export default Modal;