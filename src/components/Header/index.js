import { useAppDispatch, useAppSelector } from "@/store";
import { setIsModal } from "@/store/slices/mapSettings";
import React, { useState } from "react";


const Header = () => {
    const settings = useAppSelector((state) => state.mapSettings)
    const dispatch = useAppDispatch()

    return (

        <div className="header">

            <div className="container">

                <div className="form">

                    <form className="search__form">
                        <input
                            type="text"
                            placeholder="Поиск Аржаанов"
                            className="search__input"
                        />
                    </form>
                </div>
                <div className="button__container__search">
                    <input onClick={() => dispatch(setIsModal())}
                        type="button"
                        value="&#128270;"
                        className="btn__search" />

                </div>

                <div className="header__name">
                    <img src="https://zolord.ru/kartinki4/2019-07-22-15-32.jpg" style={{position: "absolute", objectFit: "fill", width: "5%", borderRadius: "25%", borderStyle: "solid"}} ></img>
                    <h1 className="header__website__name" style={{paddingLeft: "3em"}}>
                        Аржааны Тувы</h1>
                    <div className="header__filter__open__close" onClick={() => dispatch(setIsModal())}>
                        <svg stroke="currentColor"
                            fill="currentColor"
                            strokeWidth="0"
                            viewBox="0 0 512 512"
                            className="header__filter__open__close"
                            height="40" width="40" xmlns="http://www.w3.org/2000/svg">
                            <path d="M32 96v64h448V96H32zm0 128v64h448v-64H32zm0 128v64h448v-64H32z"></path>
                        </svg>
                    </div>


                </div>
            </div>



        </div>
    )

}

export default Header