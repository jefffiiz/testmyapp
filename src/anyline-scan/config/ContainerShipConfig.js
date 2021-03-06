import license from './license';
export default {
  license: license,
  options: {
    camera: {
      captureResolution: '1080p',
    },
    flash: {
      mode: 'manual',
      alignment: 'bottom_right',
    },
    viewPlugin: {
      plugin: {
        id: 'CONTAINER_ID',
        ocrPlugin: {
          containerConfig: {},
        },
      },
      cutoutConfig: {
        style: 'rect',
        width: 720,
        maxWidthPercent: '80%',
        alignment: 'top_half',
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
        blinkOnResult: true,
        beepOnResult: true,
        vibrateOnResult: true,
      },
      cancelOnResult: true,
    },
  },
};
