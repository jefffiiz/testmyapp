import license from './license';
export default {
  license: license,
  options: {
    camera: {
      captureResolution: '720p',
    },
    flash: {
      mode: 'manual',
      alignment: 'bottom_right',
      imageOn: 'flash_on',
      imageOff: 'flash_off',
    },
    viewPlugin: {
      plugin: {
        id: 'TIN',
        ocrPlugin: {
          tinConfig: {},
        },
      },
      cutoutConfig: {
        style: 'rect',
        width: 720,
        alignment: 'center',
        maxWidthPercent: '80%',
        ratioFromSize: {
          width: 720,
          height: 144,
        },
        outerColor: '000000',
        outerAlpha: 0.3,
        strokeWidth: 2,
        strokeColor: 'FFFFFF',
        cornerRadius: 2,
        feedbackStrokeColor: '0099FF',
      },
      scanFeedback: {
        animation: 'traverse_multi',
        animationDuration: 250,
        style: 'contour_rect',
        strokeWidth: 2,
        strokeColor: '0099FF',
        beepOnResult: true,
        vibrateOnResult: true,
        blinkAnimationOnResult: true,
      },
      cancelOnResult: true,
    },
  },
};
