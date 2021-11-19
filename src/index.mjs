import { Loader } from "@googlemaps/js-api-loader";

const loader = new Loader({
    apiKey: "AIzaSyCVl-lqqBQvxKAKAOFzFB5Vd_BOjXtR-D0",
    version: "weekly"
});
loader.load().then(() => {

  let map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 1.3521, lng: 103.8198 },
    clickableIcons: false,
    disableDefaultUI: true,
    zoom: 12,
  });

});

