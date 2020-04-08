import license from './license';
export default {
  license: license,
  options: {
    camera: {
      captureResolution: '720p',
    },
    flash: {
      mode: 'manual',
      alignment: 'top_left',
    },
    viewPlugin: {
      plugin: {
        id: 'DIAL_METER',
        meterPlugin: {
          scanMode: 'DIAL_METER',
        },
      },
      cutoutConfig: {
        style: 'rect',
        maxWidthPercent: '90%',
        maxHeightPercent: '90%',
        alignment: 'top_half',
        ratioFromSize: {
          width: 125,
          height: 85,
        },
        offset: {
          x: 0,
          y: 15,
        },
        cropPadding: {
          x: 0,
          y: 0,
        },
        cropOffset: {
          x: 0,
          y: 0,
        },
        strokeWidth: 2,
        cornerRadius: 4,
        strokeColor: 'FFFFFF',
        outerColor: '000000',
        outerAlpha: 0.3,
        feedbackStrokeColor: '0099FF',
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
    nativeBarcodeEnabled: true,
  },
};
