import license from './license';
export default {
  license: license,
  options: {
    camera: {
      captureResolution: '1080p',
    },
    flash: {
      mode: 'manual',
      alignment: 'bottom_right',
    },
    viewPlugin: {
      plugin: {
        id: 'CONTAINER_ID',
        ocrPlugin: {
          containerConfig: {
            scanMode: 'vertical',
          },
        },
      },
      cutoutConfig: {
        style: 'rect',
        maxWidthPercent: '10%',
        alignment: 'top_half',
        ratioFromSize: {
          width: 9,
          height: 62,
        },
        outerColor: '000000',
        outerAlpha: 0.3,
        strokeWidth: 1,
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
