import React from "react";
import { MapContainer, TileLayer, useMap, LayersControl, LayerGroup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Header from "../components/Header";

// Componente para adicionar a camada WMS
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
    <>
      <Header />

      <MapContainer
        center={[-14.441994, -50.596624]} // Coordenadas iniciais
        zoom={4.5}
        scrollWheelZoom={true}
        style={{
          height: "100vh",
          width: "100%",
        }}
      >
        <LayersControl position="topright">
          {/* Camada base: OpenStreetMap */}
          <LayersControl.Overlay checked name="OpenStreetMap">
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
          </LayersControl.Overlay>

          {/* Camada base: Google Satellite */}
          <LayersControl.Overlay name="Google Satellite">
            <TileLayer
              url="http://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}"
              attribution='&copy; <a href="https://www.google.com/maps">Google Satellite</a>'
            />
          </LayersControl.Overlay>

          {/* Camadas WMS da ANP */}
          <LayersControl.Overlay name="POLIGONO_PRESAL_PLSIRGAS">
            <WmsLayer
              url="https://gishub.anp.gov.br/geoserver/wms"
              layerName="BD_ANP:POLIGONO_PRESAL_PLSIRGAS"
            />
          </LayersControl.Overlay>

          <LayersControl.Overlay name="POCOS_SIRGAS">
            <WmsLayer
              url="https://gishub.anp.gov.br/geoserver/wms"
              layerName="BD_ANP:POCOS_SIRGAS"
            />
          </LayersControl.Overlay>

          <LayersControl.Overlay name="Limites Estaduais">
            <WmsLayer
              url="https://gishub.anp.gov.br/geoserver/wms"
              layerName="Basemap:Limites_Estaduais"
            />
          </LayersControl.Overlay>
        </LayersControl>
      </MapContainer>
    </>
  );
};

export default MapWithWmsLayer;
