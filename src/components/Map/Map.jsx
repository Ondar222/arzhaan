import { MapContainer, TileLayer, Marker, Popup, Polygons, Tooltip, GeoJSON } from 'react-leaflet'
import arzhaan from '@/data/arzhaan2.json'
import Modal from '@/components/Modal'
import { useAppDispatch, useAppSelector } from '@/store'
import { setIsModal } from '@/store/slices/mapSettings'

const Map = () => {
  const settings = useAppSelector((state) => state.mapSettings)
  const dispatch = useAppDispatch()
  return (
    <MapContainer
      center={[51.505, 94]}
      zoom={13}
      scrollWheelZoom={true}
      style={{ width: "77vw", height: "80vh", margin: "auto"}}>
      <TileLayer
        attribution='&copy;
         <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Modal
        title="Название"
        body="Деятельность"
        email="arzhaan@gmail.com"
        address="с.Пий-Хем"
        phone="+79967765636"
        

      />

      {
        arzhaan.features.map((item) =>
          <GeoJSON data={item} eventHandlers={{click: () => {
            dispatch(setIsModal())
          }}} ><Tooltip>{item.properties.NAME}</Tooltip></GeoJSON>)

      }

    </MapContainer>
  )
}

export default Map