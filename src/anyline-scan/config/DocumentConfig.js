import license from './license';
export default {
  license: license,
  options: {
    camera: {
      captureResolution: '720p',
      pictureResolution: '1080p',
      pictureAspectRatios: ['16:9'],
    },
    flash: {
      mode: 'manual',
      alignment: 'bottom_left',
      offset: {
        x: 10,
        y: 0,
      },
    },

    viewPlugin: {
      plugin: {
        id: 'DOCUMENT',
        documentPlugin: {},
      },
      cutoutConfig: {
        style: 'rect',
        maxWidthPercent: '100%',
        maxHeightPercent: '100%',
        widthPercent: '100%',
        width: 1080,
        ratioFromSize: {
          width: 10,
          height: 18,
        },
        alignment: 'center',
        strokeWidth: 2,
        cornerRadius: 0,
        strokeColor: '00000000',
      },
      scanFeedback: {
        beepOnResult: true,
        vibrateOnResult: true,
        blinkAnimationOnResult: true,
      },
      cancelOnResult: true,
    },
    documentScannerUI: true,
    quality: 90,
  },
};
