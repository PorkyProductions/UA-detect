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
const lang: string = window.navigator.language;

export type Language = 'Amharic' | 'Arabic' | 'Basque' | 'Bengali' | 'British English' | 'Brazillian Portuguese' | 'Bulgarian' | 'Catalan' | 'Cherokee' | 'Croatian' | 'Czech' | 'Danish' | 'Dutch' | 'American English' | 'Estonian' | 'Filipino' | 'Finnish' | 'French' | 'German' | 'Greek' | 'Gujarati' | 'Hebrew' | 'Hindi' | 'Hungarian' | 'Icelandic' | 'Indonesian' | 'Italian' | 'Japanese' | 'Kannada' | 'Korean' | 'Latvian' | 'Lithuanian' | 'Malay' | 'Malayalam' | 'Marathi' | 'Norwegian' | 'Polish' | 'Portugal Portuguese' | 'Romanian' | 'Russian' | 'PRC Chinese' | 'Serbian' | 'Slovak' | 'Slovenian' | 'Spanish' | 'Swahili' | 'Swedish' | 'Tamil' | 'Telugu' | 'Thai' | 'Taiwan Chinese' | 'Turkish' | 'Urdu' | 'Ukrainian' | 'Vietnamese' | 'Welsh' | undefined

export const getLang = (): Language => {
	if (/am/.test(lang)) {
		return 'Amharic';
	} if (/ar/.test(lang)) {
		return 'Arabic';
	} if (/eu/.test(lang)) {
		return 'Basque';
	} if (/bn/.test(lang)) {
		return 'Bengali';
	} if (/en-GB/.test(lang)) {
		return 'British English';
	} if (/pt-BR/.test(lang)) {
		return 'Brazillian Portuguese';
	} if (/bg/.test(lang)) {
		return 'Bulgarian';
	} if (/ca/.test(lang)) {
		return 'Catalan';
	} if (/chr/.test(lang)) {
		return 'Cherokee';
	} if (/hr/.test(lang)) {
		return 'Croatian';
	} if (/cs/.test(lang)) {
		return 'Czech';
	} if (/da/.test(lang)) {
		return 'Danish';
	} if (/ni/.test(lang)) {
		return 'Dutch';
	} if (/en-US/.test(lang)) {
		return 'American English';
	} if (/et/.test(lang)) {
		return 'Estonian';
	} if (/fil/.test(lang)) {
		return 'Filipino';
	} if (/fi/.test(lang)) {
		return 'Finnish';
	} if (/fr/.test(lang)) {
		return 'French';
	} if (/de/.test(lang)) {
		return 'German';
	} if (/el/.test(lang)) {
		return 'Greek';
	} if (/gu/.test(lang)) {
		return 'Gujarati';
	} if (/iw/.test(lang)) {
		return 'Hebrew';
	} if (/hi/.test(lang)) {
		return 'Hindi';
	} if (/hu/.test(lang)) {
		return 'Hungarian';
	} if (/is/.test(lang)) {
		return 'Icelandic';
	} if (/id/.test(lang)) {
		return 'Indonesian';
	} if (/it/.test(lang)) {
		return 'Italian';
	} if (/ja/.test(lang)) {
		return 'Japanese';
	} if (/kn/.test(lang)) {
		return 'Kannada';
	} if (/ko/.test(lang)) {
		return 'Korean';
	} if (/lv/.test(lang)) {
		return 'Latvian';
	} if (/lt/.test(lang)) {
		return 'Lithuanian';
	} if (/ms/.test(lang)) {
		return 'Malay';
	} if (/ml/.test(lang)) {
		return 'Malayalam';
	} if (/mr/.test(lang)) {
		return 'Marathi';
	} if (/no/.test(lang)) {
		return 'Norwegian';
	} if (/pl/.test(lang)) {
		return 'Polish';
	} if (/pt-PT/.test(lang)) {
		return 'Portugal Portuguese';
	} if (/ro/.test(lang)) {
		return 'Romanian';
	} if (/ru/.test(lang)) {
		return 'Russian';
	} if (/sr/.test(lang)) {
		return 'Serbian';
	} if (/zh-CN/.test(lang)) {
		return 'PRC Chinese';
	} if (/sk/.test(lang)) {
		return 'Slovak';
	} if (/sl/.test(lang)) {
		return 'Slovenian';
	} if (/es/.test(lang)) {
		return 'Spanish';
	} if (/sw/.test(lang)) {
		return 'Swahili';
	} if (/sv/.test(lang)) {
		return 'Swedish';
	} if (/ta/.test(lang)) {
		return 'Tamil';
	} if (/te/.test(lang)) {
		return 'Telugu';
	} if (/th/.test(lang)) {
		return 'Thai';
	} if (/zh-TW/.test(lang)) {
		return 'Taiwan Chinese';
	} if (/tr/.test(lang)) {
		return 'Turkish';
	} if (/ur/.test(lang)) {
		return 'Urdu';
	} if (/uk/.test(lang)) {
		return 'Ukrainian';
	} if (/vi/.test(lang)) {
		return 'Vietnamese';
	} if (/cy/.test(lang)) {
		return 'Welsh';
	} else {
		console.error(`After checking against 56 paramaters, the language could not be determined. (UAD_${Math.round(Math.floor(Math.random() * 1000) + 1)})`);
	}
	return;
};

export const language = getLang();