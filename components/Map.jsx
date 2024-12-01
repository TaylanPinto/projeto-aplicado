import React from "react";
import { MapContainer, TileLayer, useMap, LayersControl, Marker, Popup, LayerGroup, Circle, FeatureGroup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const WmsLayer = ({ url, layerName }) => {
  const map = useMap();

  React.useEffect(() => {
    if (map) {
      // Adiciona a camada WMS ao mapa
      const wmsLayer = L.tileLayer.wms(url, {
        layers: layerName,
        format: "image/png", // Formato da imagem
        transparent: true, // Se a camada deve ser transparente
      });
      wmsLayer.addTo(map);

      // Cleanup: Remove a camada ao desmontar
      return () => {
        map.removeLayer(wmsLayer);
      };
    }
  }, [map, url, layerName]);

  return null; // Este componente apenas adiciona a camada ao mapa
};

const MapWithWmsLayer = () => {
  return (
    <MapContainer
      center={[-14.441994,-50.596624]} // Coordenadas iniciais
      zoom={4.5}
      scrollWheelZoom={true}
      style={{ height: "100vh", width: "100%" }}
    >
      
      <LayersControl position="topright">
      <LayersControl.Overlay name="Marker">
      </LayersControl.Overlay>

      <LayersControl.Overlay checked name="OpenStreetMap">
        <LayerGroup>
            {/* Camada base OSL */}
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
        </LayerGroup>
        </LayersControl.Overlay>

       <LayersControl.Overlay checked name="Google Maps">
        <LayerGroup>
            {/* Camada base Google Satellite */}
            <TileLayer
                url="http://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}"
                attribution='&copy; <a href="https://www.google.com/maps">Google Maps</a>'
            />
        </LayerGroup>
        </LayersControl.Overlay>
    </LayersControl>


      {/* Camadas WMS */}
      <WmsLayer
        url="http://localhost:8080/geoserver/wms"
        layerName="projectSenai:Limites_Estaduais"
      />

        <WmsLayer
        url="http://localhost:8080/geoserver/wms"
        layerName="projectSenai:POCOS_SIRGAS"
      />

    </MapContainer>
  );
};

export default MapWithWmsLayer;
