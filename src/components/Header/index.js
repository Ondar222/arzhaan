import { useAppDispatch, useAppSelector } from "@/store";
import { filterData, setFilterOpen, setQuery } from "@/store/slices/filterSettings";
import { setIsModal } from "@/store/slices/mapSettings";
import React, { useState} from "react";


const Header = () => {
    const filterSettings = useAppSelector((state) => state.filterSettings)
    const settings = useAppSelector((state) => state.mapSettings)
    const dispatch = useAppDispatch()

  

    return (

        <div className="header">

            <div className="container">
                <div className="header__name" style={{ width: "100%", display: "flex", flexDirection: "column" }}>

                    <h1 className="header__website__name" style={{ fontWeight: "500", width: "100%" }}>Аржааны Тувы</h1>


                </div>
                <div style={{ width: "30%", paddingTop: "16px" }}>
{/* 
                    <div className="form">
                        <form className="search__form">
                            <input

                                type="text"
                                placeholder="Поиск Аржаанов"
                                className="search__input"
                                value={searchTerm}
                                onFocus={() => { }}
                                onBlur={() => dispatch(setFilterOpen(false))}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                autoComplete="off"


                            />
                        </form>
                    </div> */}

                    <div className="button__container__search">
                        <input style={{width: "150px"}}
                            onClick={() => {
                                dispatch(filterData())
                                dispatch(setFilterOpen(true))
                            }}
                            type="button"
                            value="Список Аржаанов"
                            className="btn__search" />

                    </div>
                </div>




            </div>
        </div>



    )

}

export default Header