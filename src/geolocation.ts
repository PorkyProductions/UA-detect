export let lat: number;
export let lon: number;
navigator.geolocation.getCurrentPosition((position) => {
    lat = position.coords.latitude; 
    lon = position.coords.longitude;
    return lat && lon;
},
() => console.error(`Cannot get current position. This is either because the browser doesn't support it, or the user has denied access `)


);