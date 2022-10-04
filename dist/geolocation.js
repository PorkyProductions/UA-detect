export let lat;
export let lon;
const latitudeGetter = () => {
    navigator.geolocation.getCurrentPosition((position) => {
        lat = position.coords.latitude;
        return lat;
    }, () => console.error(`Cannot get current latitude. This is either because the browser doesn't support it, or the user has denied access `));
    return lat;
};
const longitiudeGetter = () => {
    navigator.geolocation.getCurrentPosition((position) => {
        lon = position.coords.longitude;
        return lon;
    }, () => console.error(`Cannot get current longitude. This is either because the browser doesn't support it, or the user has denied access`), undefined);
    return lon;
};
lat = latitudeGetter();
lon = longitiudeGetter();
