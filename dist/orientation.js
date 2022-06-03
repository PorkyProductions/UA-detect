/*

Copyright � 2022, PorkyProductions, and it's contributors.
Licensed under the Apache-2.0 License.

*/
//SCREEN ORIENTATION
let ORIENTATION_isLandscape = true;
const DetectScreenOrientation = () => {
    //detects orientation of device
    ORIENTATION_isLandscape = window.innerHeight <= window.innerWidth;
    return ORIENTATION_isLandscape;
};
window.addEventListener("resize", DetectScreenOrientation);
// Exports
export { DetectScreenOrientation, ORIENTATION_isLandscape };
