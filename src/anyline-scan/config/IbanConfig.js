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
        id: 'OCR_IBAN',
        ocrPlugin: {
          ocrConfig: {
            scanMode: 'LINE',
            languages: ['USNr.any'],
            charWhitelist: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890',
            minCharHeight: 25,
            maxCharHeight: 65,
            minConfidence: 70,
            validationRegex: '^[A-Z]{2}([0-9A-Z]\\s*){13,32}$',
          },
        },
      },
      cutoutConfig: {
        style: 'rect',
        maxWidthPercent: '80%',
        maxHeightPercent: '80%',
        alignment: 'center',
        width: 900,
        ratioFromSize: {
          width: 10,
          height: 1,
        },
        strokeWidth: 2,
        cornerRadius: 10,
        strokeColor: 'FFFFFF',
        outerColor: '000000',
        outerAlpha: 0.3,
        feedbackStrokeColor: '0099FF',
      },
      cancelOnResult: true,
      scanFeedback: {
        style: 'contour_underline',
        strokeColor: '0099FF',
        strokeWidth: 2,
        fillColor: '110099FF',
        beepOnResult: true,
        vibrateOnResult: true,
        blinkAnimationOnResult: true,
      },
    },
  },
};
