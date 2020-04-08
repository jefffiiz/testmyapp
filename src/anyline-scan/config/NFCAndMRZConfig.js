import license from './license';
export default {
  license: license,
  options: {
    camera: {
      captureResolution: '1080p',
    },
    flash: {
      mode: 'manual',
      alignment: 'bottom_left',
    },
    viewPlugin: {
      plugin: {
        id: 'ID_NFC',
        nfcPlugin: {
          mrzConfig: {
            strictMode: false,
            cropAndTransformID: false,
            mrzFieldScanOptions: {},
          },
        },
      },
      cutoutConfig: {
        style: 'rect',
        maxWidthPercent: '90%',
        maxHeightPercent: '90%',
        alignment: 'center',
        ratioFromSize: {
          width: 125,
          height: 85,
        },
        strokeWidth: 2,
        cornerRadius: 4,
        strokeColor: 'FFFFFF',
        outerColor: '000000',
        outerAlpha: 0.3,
        cropPadding: {
          x: 0,
          y: 0,
        },
        cropOffset: {
          x: 0,
          y: 0,
        },
        feedbackStrokeColor: '0099FF',
        offset: {
          x: 0,
          y: 30,
        },
      },
      scanFeedback: {
        style: 'rect',
        strokeColor: '0099FF',
        strokeWidth: 2,
        blinkOnResult: true,
        beepOnResult: true,
        vibrateOnResult: true,
      },
      cancelOnResult: true,
    },
    cropAndTransformErrorMessage: 'Edges are not detected',
  },
};
