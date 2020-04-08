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
        id: 'IDPlugin_ID',
        idPlugin: {
          drivingLicenseConfig: {
            scanMode: 'AUTO',
          },
        },
      },
      cutoutConfig: {
        style: 'rect',
        maxWidthPercent: '99%',
        maxHeightPercent: '99%',
        alignment: 'center',
        offset: {
          x: 1,
          y: 0,
        },
        ratioFromSize: {
          width: 134,
          height: 85,
        },
        strokeWidth: 2,
        cornerRadius: 4,
        strokeColor: 'FFFFFF',
        outerAlpha: 0.3,
        outerColor: '000000',
        feedbackStrokeColor: '0099FF',
      },
      scanFeedback: {
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
