import { MapContainer, TileLayer, Marker, Popup, Polygons, Tooltip, GeoJSON } from 'react-leaflet'
import arzhaan from '@/data/arzhaan2.json'
import Modal from '@/components/Modal'

const Map = () => {
  return (
    <MapContainer center={[51.505, 94]} zoom={13} scrollWheelZoom={true} style={{ width: "100vw", height: "100vh" }}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Modal
      title="Название"
      body="Деятельность"
      
      />
    
      {
        arzhaan.features.map((item) => <GeoJSON data={item}><Tooltip>{item.properties.NAME}</Tooltip></GeoJSON>)
      }

    </MapContainer>
  )
}

export default Map