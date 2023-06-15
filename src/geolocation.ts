/**
* @license
* Copyright 2023, PorkyProductions, and contributors
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
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
