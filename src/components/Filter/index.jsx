import { useAppDispatch, useAppSelector } from "@/store"
import { useEffect, useState } from "react"
import arzhaan from '@/data/arzhaan2.json'
import { setIsModal } from "@/store/slices/mapSettings"
import { filterData, setFilterOpen, setQuery } from "@/store/slices/filterSettings"

const Filter = () => {
  const state = useAppSelector((state) => state.filterSettings)
  const dispatch = useAppDispatch()

  return (

    <div className="filter" >
      <button className="close-button" onClick={() => {
        dispatch(setFilterOpen(false))
      }} style={{ float: "right" }}>X</button>

      {
        state?.filteredData?.map(item => <div key={item.id} className="list__modal" onClick={() => {
          dispatch(setFilterOpen(false))
          dispatch(setQuery(""))
          dispatch(setIsModal(true))
        }}>{item.properties.description}</div>)
      }

    </div>)
}

export default Filter