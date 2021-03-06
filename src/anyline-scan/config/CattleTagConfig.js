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
        id: 'OCR_COW',
        ocrPlugin: {
          cattleTagConfig: {},
        },
      },
      cutoutConfig: {
        style: 'rect',
        maxWidthPercent: '80%',
        maxHeightPercent: '80%',
        alignment: 'center',
        width: 600,
        ratioFromSize: {
          width: 1,
          height: 1,
        },
        strokeWidth: 2,
        cornerRadius: 10,
        strokeColor: 'FFFFFF',
        outerColor: '000000',
        outerAlpha: 0.3,
        feedbackStrokeColor: '0099FF',
        cropPadding: {
          x: 60,
          y: 60,
        },
        cropOffset: {
          x: 0,
          y: 0,
        },
      },
      cancelOnResult: true,
      scanFeedback: {
        style: 'rect',
        strokeWidth: 2,
        strokeColor: '0099FF',
        fillColor: '330099FF',
        cornerRadius: 0,
        beepOnResult: true,
        vibrateOnResult: true,
        blinkAnimationOnResult: true,
      },
    },
  },
};
