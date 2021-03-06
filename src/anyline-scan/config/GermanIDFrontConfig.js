import license from './license';
export default {
  license: license,
  options: {
    camera: {
      captureResolution: '720',
      defaultCamera: 'BACK',
    },
    flash: {
      mode: 'manual',
      alignment: 'bottom_left',
    },
    viewPlugin: {
      plugin: {
        id: 'plugin',
        idPlugin: {
          germanIdFrontConfig: {},
        },
      },
      cutoutConfig: {
        style: 'rect',
        maxWidthPercent: '99%',
        maxHeightPercent: '100%',
        alignment: 'center',
        ratioFromSize: {
          width: 560,
          height: 354,
        },
        strokeWidth: 2,
        cornerRadius: 4,
        strokeColor: 'FFFFFF',
        outerColor: '000000',
        outerAlpha: 0.3,
        feedbackStrokeColor: '0099FF',
      },
      scanFeedback: {
        fillColor: '220099FF',
        style: 'CONTOUR_POINT',
        strokeColor: '0099FF',
        strokeWidth: 2,
        blinkOnResult: true,
        beepOnResult: true,
        vibrateOnResult: true,
      },
      cancelOnResult: true,
    },
  },
};
