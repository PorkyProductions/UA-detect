/*

Copyright � 2022, PorkyProductions, and it's contributors.
Licensed under the Apache-2.0 License.

*/

//SCREEN ORIENTATION
let orientationIsLandscape: boolean = true;

const DetectScreenOrientation = (): boolean => {
  //detects orientation of device
  orientationIsLandscape = window.innerHeight <= window.innerWidth;
  return orientationIsLandscape;
};

window.addEventListener("resize", DetectScreenOrientation);


// Exports

export { DetectScreenOrientation, orientationIsLandscape as ORIENTATION_isLandscape };
