const md = navigator.mediaDevices

describe('media component', () => {
    test('varible is grabing the md', () => {
        expect(md).toEqual(navigator.mediaDevices)
    })
    test('attempts to grab the stream', () => {
        async function getMedia(constraints) {
            let stream = null;
            try {
                stream = await navigator.mediaDevices.getUserMedia(constraints);
              /* use the stream */
            } catch (err) {
              /* handle the error */
            }
            expect(getMedia({audio: true, video: true})).toReturn()
        }
    })
})