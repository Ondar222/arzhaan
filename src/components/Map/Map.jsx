import { MapContainer, TileLayer, Marker, Popup, Polygon, Tooltip, GeoJSON } from 'react-leaflet'
import arzhaan from '@/data/arzhaan2.json'
import republicPolygons from '@/data/republicPolygons.json'
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
      style={{ width: "77vw", height: "80vh", margin: "auto" }}>
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
        arzhaan.features.map((item, index) => {
          console.log(item.geometry.coordinates)
          return (<Polygon 
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

      // eventHandlers={{
      //   click: () => {
      //     dispatch(setIsModal())
      //   }
      // }} 
      />
      



    </MapContainer>

  )
}

export default Map