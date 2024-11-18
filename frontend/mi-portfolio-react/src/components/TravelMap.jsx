// src/components/TravelMap.jsx
import React, { useContext } from 'react';
import { MapContainer, TileLayer, Marker, Tooltip } from 'react-leaflet';
import ThemeContext from '../ThemeContext';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet.awesome-markers/dist/leaflet.awesome-markers.js';
import 'leaflet.awesome-markers/dist/leaflet.awesome-markers.css';
import '@fortawesome/fontawesome-free/css/all.css';
import '../assets/TravelMap.css';

//Importar Imagenes
import QuitoImage from 'https://res.cloudinary.com/dltfsttr7/image/upload/v1731947461/Quito_gag520.jpg';
import CuencaImage from '../assets/locations/Cuenca.jpg';
import CajamarcaImage from '../assets/locations/Cajamarca.jpg';
import LimaImage from '../assets/locations/Lima.jpg';
import IcaImage from '../assets/locations/Ica.jpg';
import ArequipaImage from '../assets/locations/Arequipa.jpg';
import LagotiticacaImage from '../assets/locations/Copacabana_Lagotiticaca.jpg';
import LaPazImage from '../assets/locations/La_paz.jpg';
import UyuniImage from '../assets/locations/Uyuni.jpg';
import VilazonImage from '../assets/locations/Villazon.jpg';
import LaQuiacaImage from '../assets/locations/La_quiaca.jpg';
import JujuyImage from '../assets/locations/Jujuy.jpg';
import TucumanImage from '../assets/locations/Tucuman.jpg';
import CordobaImage from '../assets/locations/Cordoba.jpg';
import MendozaImage from '../assets/locations/Mendoza.jpg';
import BuenosAiresImage from '../assets/locations/Buenos_Aires.jpg';
import ViedmaImage from '../assets/locations/Viedma.jpg';
import SanAntonioOesteImage from '../assets/locations/San_Antonio_Oeste.jpg';
import VillaTrafulImage from '../assets/locations/Villa_Traful.jpg';
import BarilocheImage from '../assets/locations/Bariloche.jpg';
import ElBolsonImage from '../assets/locations/El_Bolson.jpg';
import ElChaltenImage from '../assets/locations/El_chalten.jpg';
import GlaciarPeritoMorenoImage from '../assets/locations/Glaciar_Perito_Moreno.jpg';
import RioGallegosImage from '../assets/locations/Rio_Gallegos.jpg';
import UsuahiaImage from '../assets/locations/Ushuaia.jpg';
import MontevideoImage from '../assets/locations/Montevideo.jpg';
import PuntadelEsteImage from '../assets/locations/Punta_del_este.jpg';
import RochaImage from '../assets/locations/Rocha.jpg';
import CaboPolonioImage from '../assets/locations/Cabo_Polonio.jpg';
import PelotasImage from '../assets/locations/Pelotas.jpg';
import IguazuImage from '../assets/locations/Iguazu.jpg';
import FlorianopolisImage from '../assets/locations/Florianopolis.jpg';
import IlhaBelaImage from '../assets/locations/Ilhabella.jpg';
import RiodeJaneiroImage from '../assets/locations/Rio_de_Janeiro.jpg';
import ArraialdoCaboImage from '../assets/locations/Arraial_do_cabo.jpg';
import ManausImage from '../assets/locations/Manaus.jpg';
import LeticiaImage from '../assets/locations/Leticia.jpg';
import BogotaImage from '../assets/locations/Bogota.jpg';

const travelRoute = [
    { name: 'Quito', coords: [-0.1807, -78.4678], img: QuitoImage },
    { name: 'Cuenca', coords: [-2.9006, -79.0045], img: CuencaImage },
    { name: 'Cajamarca', coords: [-7.1617, -78.5127], img: CajamarcaImage },
    { name: 'Lima', coords: [-12.0464, -77.0428], img: LimaImage },
    { name: 'Ica', coords: [-14.0678, -75.7286], img: IcaImage },
    { name: 'Arequipa', coords: [-16.409, -71.5375], img: ArequipaImage },
    { name: 'Lago Titicaca - Copacabana', coords: [-16.1679, -69.0851], img: LagotiticacaImage },
    { name: 'La Paz', coords: [-16.5000, -68.1500], img: LaPazImage },
    { name: 'Uyuni', coords: [-20.4603, -66.8267], img: UyuniImage },
    { name: 'Vilazon', coords: [-22.0913, -65.5968], img: VilazonImage },
    { name: 'La Quiaca', coords: [-22.105, -65.5957], img: LaQuiacaImage },
    { name: 'Jujuy', coords: [-24.1858, -65.2995], img: JujuyImage },
    { name: 'Tucuman', coords: [-26.8083, -65.2176], img: TucumanImage },
    { name: 'Cordoba', coords: [-31.4201, -64.1888], img: CordobaImage },
    { name: 'Mendoza', coords: [-32.8895, -68.8458], img: MendozaImage },
    { name: 'Buenos Aires', coords: [-34.6037, -58.3816], img: BuenosAiresImage },
    { name: 'Viedma', coords: [-40.8135, -62.9967], img: ViedmaImage },
    { name: 'San Antonio Oeste', coords: [-40.7311, -64.9476], img: SanAntonioOesteImage },
    { name: 'Villa Traful', coords: [-40.661, -71.3967], img: VillaTrafulImage },
    { name: 'Bariloche', coords: [-41.1335, -71.3103], img: BarilocheImage },
    { name: 'El Bolson', coords: [-41.9603, -71.5333], img: ElBolsonImage },
    { name: 'El Chalten', coords: [-49.3315, -72.8863], img: ElChaltenImage },
    { name: 'Glaciar Perito Moreno', coords: [-50.495, -73.0533], img: GlaciarPeritoMorenoImage },
    { name: 'Rio Gallegos', coords: [-51.623, -69.2168], img: RioGallegosImage },
    { name: 'Ushuaia', coords: [-54.8019, -68.3029], img: UsuahiaImage }, ,
    { name: 'Montevideo', coords: [-34.9011, -56.1645], img: MontevideoImage },
    { name: 'Punta del Este', coords: [-34.9508, -54.9508], img: PuntadelEsteImage },
    { name: 'Rocha', coords: [-34.4823, -54.3334], img: RochaImage },
    { name: 'Cabo Polonio', coords: [-34.3995, -53.7817], img: CaboPolonioImage },
    { name: 'Pelotas', coords: [-31.7719, -52.342], img: PelotasImage },
    { name: 'Cataratas del Iguazu', coords: [-25.6953, -54.4367], img: IguazuImage },
    { name: 'Florianopolis', coords: [-27.5954, -48.548], img: FlorianopolisImage },
    { name: 'Ilhabela', coords: [-23.7785, -45.3584], img: IlhaBelaImage },
    { name: 'Rio de Janeiro', coords: [-22.9068, -43.1729], img: RiodeJaneiroImage },
    { name: 'Arraial do Cabo', coords: [-22.9671, -42.0263], img: ArraialdoCaboImage },
    { name: 'Manaus', coords: [-3.1190, -60.0217], img: ManausImage },
    { name: 'Leticia', coords: [-4.215, -69.9406], img: LeticiaImage },
    { name: 'Bogota', coords: [4.711, -74.0721], img: BogotaImage },
];

const createCustomIcon = (color, icon) => {
    return L.AwesomeMarkers.icon({
        icon: icon,
        markerColor: color,
        prefix: 'fa',
        iconColor: 'white',
    });
};

function TravelMap() {
    const { isDark } = useContext(ThemeContext);

    const tileLayerUrl = isDark
        ? 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png'
        : 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png';

    return (
        <section
            id="travel"
            className="py-12 bg-gray-100 dark:bg-gray-900"  // Cambié py-20 a py-12
            style={{ height: '600px' }}
        >
            <div className="max-w-5xl mx-auto px-4" style={{ height: '100%' }}>
                <h2 className="text-3xl font-bold text-center mb-8">
                    Lugares que he Visitado
                </h2>

                <MapContainer
                    center={[-20.0, -60.0]}
                    zoom={3}
                    scrollWheelZoom={false}
                    className="h-96 rounded-lg shadow-md map-container"
                >
                    <TileLayer
                        key={tileLayerUrl}
                        url={tileLayerUrl}
                        attribution='&copy; <a href="https://carto.com/attributions">CARTO</a>'
                    />

                    {travelRoute.map((location, index) => (
                        <Marker
                            key={index}
                            position={location.coords}
                            icon={createCustomIcon('blue', 'map-marker-alt')}
                        >
                            <Tooltip
                                direction="top"
                                offset={[0, -20]}
                                opacity={1}
                                className="tooltip"
                                permanent={false}
                            >
                                <div className="bg-white dark:bg-gray-veryDark bg-opacity-90 border rounded-lg p-2 text-sm text-gray-dark dark:text-gray-light text-center shadow-lg w-36 max-w-36 min-h-40 flex flex-col items-center justify-center">
                                    <h3 className="font-bold truncate">{location.name}</h3>
                                    {location.img && (
                                        <img
                                            src={location.img}
                                            alt={location.name}
                                            className="w-24 h-auto max-h-20 object-cover aspect-[4/3] rounded-md mt-1"
                                        />
                                    )}
                                </div>
                            </Tooltip>
                        </Marker>
                    ))}
                </MapContainer>
            </div>
        </section>
    );
}

export default TravelMap;