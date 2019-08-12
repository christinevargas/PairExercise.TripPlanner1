const { activity, hotel, restaurant } = require("./marker");

const mapboxgl = require("mapbox-gl");

mapboxgl.accessToken =
  "pk.eyJ1IjoidmFyZ2FzY2giLCJhIjoiY2p6OG1jd3AyMDFodzNtcGxqeGJjNXg3dSJ9.hLd1DvWEw62NLwOrrX25fw";

const map = new mapboxgl.Map({
  container: "map",
  center: [-87.6354, 41.8885], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

const newElement = document.createElement("div");
newElement.style.width = "255px";
newElement.style.height = "170px";
newElement.style.backgroundImage =
  "url(data:image/png;base64,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)";
new mapboxgl.Marker(newElement).setLngLat([-87.641, 41.895]).addTo(map);

module.exports = map;
