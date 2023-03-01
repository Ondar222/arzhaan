import { MapContainer, TileLayer, Marker, Popup, Polygon, Tooltip, GeoJSON} from 'react-leaflet'
import data from  '@/data/water-polygon.json'
import arzhaan from '@/data/arzhaan2.json'

const Map = () => {
  return (
    <MapContainer center={[51.505, 94]} zoom={13} scrollWheelZoom={true} style={{width: "100vw", height: "100vh"}}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {
        data.features.map((item) => <GeoJSON data={item}><Tooltip>{item.properties.NAME}</Tooltip></GeoJSON>)
      }

      {
        arzhaan.features.map((item) => <GeoJSON data={item}><Tooltip>{item.properties.NAME}</Tooltip></GeoJSON>)
      }

     
      <Marker position={[51.505, 94]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  )
}

export default Map