import license from './license';
export default {
  license: license,
  options: {
    camera: {
      captureResolution: '1080',
    },
    flash: {
      mode: 'manual',
      alignment: 'bottom_right',
    },
    viewPlugin: {
      plugin: {
        id: 'OCR_VC',
        ocrPlugin: {
          ocrConfig: {
            scanMode: 'AUTO',
            charWhitelist: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789',
            validationRegex: '[A-Z0-9]{8}$',
            minConfidence: 75,
          },
        },
      },
      cutoutConfig: {
        style: 'rect',
        maxWidthPercent: '80%',
        maxHeightPercent: '80%',
        alignment: 'center',
        width: 540,
        ratioFromSize: {
          width: 5,
          height: 1,
        },
        strokeWidth: 2,
        cornerRadius: 10,
        strokeColor: 'FFFFFF',
        outerColor: '000000',
        outerAlpha: 0.3,
        feedbackStrokeColor: '0099FF',
      },
      scanFeedback: {
        style: 'contour_point',
        strokeWidth: 3,
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
