import { MapContainer, TileLayer, Marker, Popup, Polygon, Tooltip, GeoJSON, ZoomControl, LayersControl, useMapEvent } from 'react-leaflet'
import arzhaan from '@/data/arzhaan2.json'
import Modal from '@/components/Modal'
import { useAppDispatch, useAppSelector } from '@/store'
import { setIsModal } from '@/store/slices/mapSettings'
import TileLayers from './TileLayers'
import ArzhaanMarker from '@/components/Arzhaans/ArzhaanMarker/ArzhaanMarker'
import Filter from '@/components/Filter'

const Map = () => {
  const filter = useAppSelector((state) => state.filterSettings)
  const settings = useAppSelector((state) => state.mapSettings)
  const dispatch = useAppDispatch()

  navigator.geolocation.getCurrentPosition(position => {
    // console.log(position)
  }, error => {
    console.error(error)
  }, {
    timeout: 1000,
    maximumAge: 10000,
    enableHighAccuracy: true
  })

  return (

    <MapContainer
      center={[51.505, 94]}
      zoom={13}
      scrollWheelZoom={true}
      style={{ width: "77vw", height: "80vh", margin: "auto", cursor: "crosshair" }}
      zoomControl={false}
      layersControl={false}
      attributionControl={false}
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

      <Modal
        title="Название"

        email="arzhaan@gmail.com"
        address="с.Пий-Хем"
        phone="+79967765636"
      />

      {filter.isFilterOpen && <Filter />}


      {
        arzhaan.features.map((item, index) =>
          <ArzhaanMarker key={index} index={index}
            data={item}
          >
          </ArzhaanMarker>
        )
      }


      {
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
      }

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

  )
}

export default Map