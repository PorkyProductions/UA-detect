export interface MediaConstraints {
    audio: boolean
    video: boolean | {
        width?: {
            min?: number,
            ideal?: number,
            max?: number
        }
        height?: {
            min?: number,
            ideal?: number,
            max?: number
        }
        facingMode?: string | {
            exact?: string
        }
        deviceId?: string | {
            exact?: string
        }
    }
}

export async function getMedia(constraints: MediaConstraints): Promise<MediaStream | unknown | undefined> {
	let stream: MediaStream | null = null;
	try {
		stream = await navigator.mediaDevices.getUserMedia(constraints);
		return stream;
	} catch (err) {
		return err;
	}
}

export const camera = getMedia({
	audio: false,
	video: true
});

export const audio = getMedia({
	audio: true,
	video: false
});

export const audioAndCamera = getMedia({
	audio: true,
	video: true
});