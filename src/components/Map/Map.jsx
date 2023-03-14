import { MapContainer, TileLayer, Marker, Popup, Polygon, Tooltip, GeoJSON } from 'react-leaflet'
import arzhaan from '@/data/arzhaan2.json'
import Modal from '@/components/Modal'
import { useAppDispatch, useAppSelector } from '@/store'
import { setIsModal } from '@/store/slices/mapSettings'
import TileLayers from './TileLayers'
import ArzhaanMarker from '../Arzhaans/ArzhaanMarker/ArzhaanMarker'




const Map = () => {

  const settings = useAppSelector((state) => state.mapSettings)
  const dispatch = useAppDispatch()
  
  
  navigator.geolocation.getCurrentPosition(position => {
    console.log(position)
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
      style={{ width: "77vw", height: "80vh", margin: "auto", cursor: "crosshair" }
    }
  
      
      
    >
      <TileLayers
        attribution='&copy;
         <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      
    

      <Modal
        title="Название"
    
        email="arzhaan@gmail.com"
        address="с.Пий-Хем"
        phone="+79967765636"

      />


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
          console.log(item.geometry.coordinates)
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