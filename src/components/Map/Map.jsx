import { MapContainer, TileLayer, Marker, Popup, Polygon, Tooltip, GeoJSON, ZoomControl, LayersControl, useMapEvent } from 'react-leaflet'
import arzhaan from '@/data/arzhaan2.json'
import Modal from '@/components/Modal'
import { useAppDispatch, useAppSelector } from '@/store'
import { setIsModal } from '@/store/slices/mapSettings'
import TileLayers from './TileLayers'
import ArzhaanMarker from '@/components/Arzhaans/ArzhaanMarker/ArzhaanMarker'
import Filter from '@/components/Filter'
import { useEffect, useState } from 'react'
import parser from 'html-react-parser'
import { getSelectedArzhaan } from '@/store/slices/selectedArzhaanSlice/service'

export const getServerSideProps = async (context) => {
  const { id } = context.params
  const res = await fetch(`${process.env.APIpath}/api/features/${id}?populate=*`)
  const arzhaan = await res.json()
  return {
    props: { person: arzhaan.data }
  }
}

const Map = (params) => {
  const filter = useAppSelector((state) => state.filterSettings)
  const settings = useAppSelector((state) => state.mapSettings)
  const dispatch = useAppDispatch()

  const [dragging, setDragging] = useState(!settings.isModalOpen)
  const [scroll, setScroll] = useState(!settings.isModalOpen)

  navigator.geolocation.getCurrentPosition(position => {
    // console.log(position)
  }, error => {
    console.error(error)
  }, {
    timeout: 1000,
    maximumAge: 10000,
    enableHighAccuracy: true
  })

  const [title, setTitle] = useState()
  const [brief, setBrief] = useState()
  const [medicinal_properties, setmedicinal_properties] = useState()
  const [photo_materials, setphoto_materials] = useState()
  const [email, setemail] = useState()
  const [address, setaddress] = useState()
  const [phone, setphone] = useState()

  useEffect(() => {
    settings.isModalOpen ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'unset'
    setDragging(!settings.isModalOpen)
    setScroll(!settings.isModalOpen)
  }, [settings.isModalOpen])

  return (
    <>
      {settings.isModalOpen && <Modal
        address={parser(String(address))}
        phone={parser(String(phone))}
        title={title}
        brief={parser(String(brief))}
        medicinal_properties={parser(String(medicinal_properties))}
        photo_materials={parser(String(photo_materials))}
        email={parser(String(email))}
      />}
      <MapContainer
        center={[51.8, 94.15]}
        zoom={7}
        scrollWheelZoom={scroll}
        style={{ width: "77vw", height: "80vh", margin: "auto", cursor: "crosshair" }}
        zoomControl={false}
        layersControl={false}
        attributionControl={false}
        dragging={dragging}
      >

        {/* <TileLayers
        attribution='&copy;
         <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      /> */}


        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <ZoomControl position='bottomright' />
        {/* <LayersControl position='topright' /> */}




        {filter.isFilterOpen && <Filter arzhaans={params.arzhaans}/>}


        {
          arzhaan.features.map((item, index) =>
            <ArzhaanMarker key={index} index={index}
              data={item}
            >
            </ArzhaanMarker>
          )
        }


        {
          params.arzhaans.map((item, index) => {
            return (
              <Polygon
                color='red'
                key={index}

                positions={item.attributes.geometry.coordinates[0]}

                eventHandlers={{
                  click: () => {
                    dispatch(getSelectedArzhaan(item.id))

                    dispatch(setIsModal())
                  }
                }}
              />)
          })
        }

        {/* {
        arzhaan.features.map((item, index) => {
          return (<Polygon
            color='red'
            key={index}

            positions={item.geometry.coordinates[0]}

            eventHandlers={{
              click: () => {
                dispatch(setIsModal())
              }
            }}
          />)
        }
        )
      } */}

        <Polygon
          positions={[
            [
              [51.51, -0.12],
              [51.51, -0.13],
              [51.53, -0.13],
            ],
            [
              [51.51, -0.05],
              [51.51, -0.07],
              [51.53, -0.07],
            ],
          ]}


        />


      </MapContainer>
    </>


  )
}

export default Map