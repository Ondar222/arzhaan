import dynamic from "next/dynamic"
import 'leaflet/dist/leaflet.css'

const Map = dynamic(() => import("./Map"), { ssr: false })

export default Map