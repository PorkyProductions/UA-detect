import { getterForNavigator } from './navigator';

/**
 * Media Constraints Interface
 * @export
 * @interface MediaConstraints
 * @typedef {MediaConstraints}
 */
export interface MediaConstraints {
  /**
   * Grab Audio
   * @type {boolean}
   */
  readonly audio: boolean;
  readonly video:
    | boolean
    | {
        width?: {
          min?: number;
          ideal?: number;
          max?: number;
        };
        height?: {
          min?: number;
          ideal?: number;
          max?: number;
        };
        facingMode?:
          | string
          | {
              exact?: string;
            };
        deviceId?:
          | string
          | {
              exact?: string;
            };
      };
}

/**
 * Runs the function to get the permission from the user, and then return the selected media streams
 * @export
 * @async
 * @param {MediaConstraints} constraints
 * @returns {(Promise<MediaStream | unknown | undefined>)}
 */


export type MediaStreamResult = Promise<void | unknown | MediaStream | undefined>

export async function getMedia(
	constraints: MediaConstraints
): Promise<MediaStream | unknown | undefined> {
	let stream: MediaStream | null = null;
	try {
		stream ||= await getterForNavigator().mediaDevices.getUserMedia(constraints);
		return stream;
	} catch (err: Error | unknown) {
		return err;
	}
}

/**
 * Example camera return
 * @type {*}
 */
export const camera = getMedia({
	audio: false,
	video: true,
}).then(stream => stream);

/**
 * Example audio return
 *
 * @type {*}
 */
export const audio = getMedia({
	audio: true,
	video: false,
}).then(stream => stream);

/**
 * Example audio and camera retyrn
 * @type {*}
 */
export const audioAndCamera = getMedia({
	audio: true,
	video: true,
}).then(stream => stream);