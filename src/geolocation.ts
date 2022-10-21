export let lat: number;
export let lon: number;

const latitudeGetter = (): number => {
	navigator.geolocation.getCurrentPosition((position: GeolocationPosition): number => {
		lat = position.coords.latitude;
		return lat;
	},
	() => console.error(`Cannot get current latitude. This is either because the browser doesn't support it, or the user has denied access (UAD_${Math.round(Math.floor(Math.random() * 1000) + 1)})`)
	);
	return lat;
};

const longitiudeGetter = (): number => {
	navigator.geolocation.getCurrentPosition((position: GeolocationPosition) => {
		lon = position.coords.longitude;
		return lon;
	},
	() => console.error(`Cannot get current longitude. This is either because the browser doesn't support it, or the user has denied access (UAD_${Math.round(Math.floor(Math.random() * 1000) + 1)})`),
	undefined
	);
	return lon;
};

lat = latitudeGetter();
lon = longitiudeGetter();
