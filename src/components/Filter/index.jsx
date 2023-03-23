import { useAppDispatch, useAppSelector } from "@/store"
import { useEffect, useState } from "react"
import arzhaan from '@/data/arzhaan2.json'
import { setIsModal } from "@/store/slices/mapSettings"
import { filterData, setFilterOpen, setQuery } from "@/store/slices/filterSettings"
import { getSelectedArzhaan } from "@/store/slices/selectedArzhaanSlice/service"

const Filter = (params) => {

  const dispatch = useAppDispatch()

  return (

    <div className="filter" >
      <button className="close-button" onClick={() => {
        dispatch(setFilterOpen(false))
      }} style={{ float: "right" }}>X</button>

      {
        params?.arzhaans?.map(item => {
        return <div key={item.id} className="list__modal" onClick={() => {
          dispatch(getSelectedArzhaan(item.id))
          dispatch(setFilterOpen(false))
          dispatch(setQuery(""))
          dispatch(setIsModal(true))
        }}>
          
          {item.attributes.properties.description}
          </div>})
      }

    </div>)
}

export default Filter