import license from './license';
export default {
  license: license,
  camera: {
    captureResolution: '1080p',
    zoomGesture: true,
  },
  flash: {
    mode: 'manual',
    alignment: 'top_left',
  },
  viewPlugin: {
    plugin: {
      id: 'LicensePlate_ID',
      licensePlatePlugin: {},
      delayStartScanTime: 1000,
    },
    cutoutConfig: {
      style: 'rect',
      maxWidthPercent: '80%',
      maxHeightPercent: '80%',
      alignment: 'top_half',
      width: 720,
      ratioFromSize: {
        width: 2,
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
      animationDuration: 0,
      style: 'RECT',
      strokeWidth: 2,
      strokeColor: '0099FF',
      blinkOnResult: true,
      beepOnResult: true,
      vibrateOnResult: true,
    },
    cancelOnResult: true,
    delayStartScanTime: 2000,
  },
};
