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
 * The language code obtained from the navigator.
 */
const lang: string = getterForNavigator().language;

/**
 * Represents the supported languages.
 */
export type Language =
  | 'Amharic'
  | 'Arabic'
  | 'Basque'
  | 'Bengali'
  | 'British English'
  | 'Brazillian Portuguese'
  | 'Bulgarian'
  | 'Catalan'
  | 'Cherokee'
  | 'Croatian'
  | 'Czech'
  | 'Danish'
  | 'Dutch'
  | 'American English'
  | 'Estonian'
  | 'Filipino'
  | 'Finnish'
  | 'French'
  | 'German'
  | 'Greek'
  | 'Gujarati'
  | 'Hebrew'
  | 'Hindi'
  | 'Hungarian'
  | 'Icelandic'
  | 'Indonesian'
  | 'Italian'
  | 'Japanese'
  | 'Kannada'
  | 'Korean'
  | 'Latvian'
  | 'Lithuanian'
  | 'Malay'
  | 'Malayalam'
  | 'Marathi'
  | 'Norwegian'
  | 'Polish'
  | 'Portugal Portuguese'
  | 'Romanian'
  | 'Russian'
  | 'PRC Chinese'
  | 'Serbian'
  | 'Slovak'
  | 'Slovenian'
  | 'Spanish'
  | 'Swahili'
  | 'Swedish'
  | 'Tamil'
  | 'Telugu'
  | 'Thai'
  | 'Taiwan Chinese'
  | 'Turkish'
  | 'Urdu'
  | 'Ukrainian'
  | 'Vietnamese'
  | 'Welsh'
  | undefined;

/**
 * Gets the language based on the navigator's language code.
 * @returns The determined language.
 */
export const getLang = (): Language => {
	if (/am/.test(lang)) {
		return 'Amharic';
	} else if (/ar/.test(lang)) {
		return 'Arabic';
	} else if (/eu/.test(lang)) {
		return 'Basque';
	} else if (/bn/.test(lang)) {
		return 'Bengali';
	} else if (/en-GB/.test(lang)) {
		return 'British English';
	} else if (/pt-BR/.test(lang)) {
		return 'Brazillian Portuguese';
	} else if (/bg/.test(lang)) {
		return 'Bulgarian';
	} else if (/ca/.test(lang)) {
		return 'Catalan';
	} else if (/chr/.test(lang)) {
		return 'Cherokee';
	} else if (/hr/.test(lang)) {
		return 'Croatian';
	} else if (/cs/.test(lang)) {
		return 'Czech';
	} else if (/da/.test(lang)) {
		return 'Danish';
	} else if (/ni/.test(lang)) {
		return 'Dutch';
	} else if (/en-US/.test(lang)) {
		return 'American English';
	} else if (/et/.test(lang)) {
		return 'Estonian';
	} else if (/fil/.test(lang)) {
		return 'Filipino';
	} else if (/fi/.test(lang)) {
		return 'Finnish';
	} else if (/fr/.test(lang)) {
		return 'French';
	} else if (/de/.test(lang)) {
		return 'German';
	} else if (/el/.test(lang)) {
		return 'Greek';
	} else if (/gu/.test(lang)) {
		return 'Gujarati';
	} else if (/iw/.test(lang)) {
		return 'Hebrew';
	} else if (/hi/.test(lang)) {
		return 'Hindi';
	} else if (/hu/.test(lang)) {
		return 'Hungarian';
	} else if (/is/.test(lang)) {
		return 'Icelandic';
	} else if (/id/.test(lang)) {
		return 'Indonesian';
	} else if (/it/.test(lang)) {
		return 'Italian';
	} else if (/ja/.test(lang)) {
		return 'Japanese';
	} else if (/kn/.test(lang)) {
		return 'Kannada';
	} else if (/ko/.test(lang)) {
		return 'Korean';
	} else if (/lv/.test(lang)) {
		return 'Latvian';
	} else if (/lt/.test(lang)) {
		return 'Lithuanian';
	} else if (/ms/.test(lang)) {
		return 'Malay';
	} else if (/ml/.test(lang)) {
		return 'Malayalam';
	} else if (/mr/.test(lang)) {
		return 'Marathi';
	} else if (/no/.test(lang)) {
		return 'Norwegian';
	} else if (/pl/.test(lang)) {
		return 'Polish';
	} else if (/pt-PT/.test(lang)) {
		return 'Portugal Portuguese';
	} else if (/ro/.test(lang)) {
		return 'Romanian';
	} else if (/ru/.test(lang)) {
		return 'Russian';
	} else if (/sr/.test(lang)) {
		return 'Serbian';
	} else if (/zh-CN/.test(lang)) {
		return 'PRC Chinese';
	} else if (/sk/.test(lang)) {
		return 'Slovak';
	} else if (/sl/.test(lang)) {
		return 'Slovenian';
	} else if (/es/.test(lang)) {
		return 'Spanish';
	} else if (/sw/.test(lang)) {
		return 'Swahili';
	} else if (/sv/.test(lang)) {
		return 'Swedish';
	} else if (/ta/.test(lang)) {
		return 'Tamil';
	} else if (/te/.test(lang)) {
		return 'Telugu';
	} else if (/th/.test(lang)) {
		return 'Thai';
	} else if (/zh-TW/.test(lang)) {
		return 'Taiwan Chinese';
	} else if (/tr/.test(lang)) {
		return 'Turkish';
	} else if (/ur/.test(lang)) {
		return 'Urdu';
	} else if (/uk/.test(lang)) {
		return 'Ukrainian';
	}
};