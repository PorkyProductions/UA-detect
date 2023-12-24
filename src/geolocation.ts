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

import { getterForNavigator } from './navigator';

/**
 * The latitude of the current geolocation.
 */
export let lat: number;

/**
 * The longitude of the current geolocation.
 */
export let lon: number;

/**
 * Gets the latitude using the Geolocation API.
 * @returns The current latitude.
 */
const latitudeGetter = (): number => {
	getterForNavigator().geolocation.getCurrentPosition(
		(position: GeolocationPosition): void => {
			lat = position.coords.latitude;
		},
		() => console.error(`Cannot get current latitude. This is either because the browser doesn't support it, or the user has denied access (UAD_${Math.round(Math.floor(Math.random() * 1000) + 1)})`)
	);
	return lat;
};

/**
 * Gets the longitude using the Geolocation API.
 * @returns The current longitude.
 */
const longitudeGetter = (): number => {
	getterForNavigator().geolocation.getCurrentPosition(
		(position: GeolocationPosition): void => {
			lon = position.coords.longitude;
		},
		() => console.error(`Cannot get current longitude. This is either because the browser doesn't support it, or the user has denied access (UAD_${Math.round(Math.floor(Math.random() * 1000) + 1)})`),
		undefined
	);
	return lon;
};

// Initialize the latitude and longitude values.
lat = latitudeGetter();
lon = longitudeGetter();
