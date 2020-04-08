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
    },
    viewPlugin: {
      plugin: {
        id: 'Meter_ID',
        meterPlugin: {
          scanMode: 'AUTO_ANALOG_DIGITAL_METER',
        },
      },
      cutoutConfig: {
        style: 'rect',
        alignment: 'top_half',
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
  },
};
