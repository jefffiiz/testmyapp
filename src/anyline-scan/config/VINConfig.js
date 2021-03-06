import license from './license';
export default {
  license: license,
  options: {
    camera: {
      captureResolution: '720',
    },
    flash: {
      mode: 'manual',
      alignment: 'bottom_left',
    },
    viewPlugin: {
      plugin: {
        id: 'VIN_ID',
        ocrPlugin: {
          vinConfig: {},
        },
      },
      cutoutConfig: {
        style: 'rect',
        width: 720,
        alignment: 'top_half',
        maxWidthPercent: '70%',
        ratioFromSize: {
          width: 62,
          height: 9,
        },
        strokeWidth: 1,
        strokeColor: 'FFFFFF',
        cornerRadius: 2,
        outerColor: '000000',
        outerAlpha: 0.3,
        feedbackStrokeColor: '0099FF',
      },
      scanFeedback: {
        animation: 'traverse_multi',
        animationDuration: 250,
        style: 'contour_rect',
        strokeWidth: 2,
        strokeColor: '0099FF',
        beepOnResult: false,
        vibrateOnResult: true,
        blinkAnimationOnResult: true,
        cancelOnResult: true,
      },
      cancelOnResult: true,
      reportingEnabled: true,
    },
  },
};
