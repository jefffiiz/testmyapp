import license from './license';
export default {
  license: license,
  options: {
    camera: {
      captureResolution: '720',
    },
    flash: {
      mode: 'manual',
      alignment: 'bottom_right',
    },
    viewPlugin: {
      plugin: {
        id: 'USNR_ID',
        ocrPlugin: {
          ocrConfig: {
            scanMode: 'AUTO',
          },
        },
      },
      cutoutConfig: {
        style: 'rect',
        width: 720,
        alignment: 'top_half',
        maxWidthPercent: '80%',
        ratioFromSize: {
          width: 720,
          height: 144,
        },
        strokeWidth: 2,
        strokeColor: 'FFFFFF',
        cornerRadius: 4,
        outerColor: '000000',
        outerAlpha: 0.5,
        feedbackStrokeColor: '0099FF',
        offset: {
          x: 0,
          y: -15,
        },
      },
      scanFeedback: {
        style: 'CONTOUR_RECT',
        strokeColor: '0099FF',
        fillColor: '220099FF',
        beepOnResult: true,
        vibrateOnResult: true,
        blinkAnimationOnResult: true,
      },
      cancelOnResult: true,
    },
  },
};
