import license from './license';
export default {
  license: license,
  options: {
    camera: {
      captureResolution: '1080p',
    },
    flash: {
      mode: 'auto',
      alignment: 'bottom_right',
    },
    viewPlugin: {
      plugin: {
        id: 'Barcode_ID',
        barcodePlugin: {
          // "barcodeFormatOptions": ["CODABAR", "EAN_13", "UPC_A"]
        },
      },
      cutoutConfig: {
        style: 'rect',
        maxWidthPercent: '80%',
        maxHeightPercent: '80%',
        alignment: 'center',
        ratioFromSize: {
          width: 100,
          height: 80,
        },
        strokeWidth: 1,
        cornerRadius: 3,
        strokeColor: 'FFFFFF',
        outerColor: '000000',
        outerAlpha: 0.3,
        feedbackStrokeColor: '0099FF',
      },
      scanFeedback: {
        style: 'rect',
        strokeColor: '0099FF',
        fillColor: '220099FF',
        animationDuration: 150,
        blinkOnResult: true,
        beepOnResult: true,
        vibrateOnResult: true,
      },
      cancelOnResult: true,
    },
    doneButton: {
      // iOS only. Android uses hardware back button.
      title: 'OK',
      type: 'rect', // fullwidth, rect
      cornerRadius: 0,
      //"backgroundColor":"#EEEEEE", // default clearcolor
      textColor: 'FFFFFF',
      textColorHighlighted: 'CCCCCC',
      fontSize: 33,
      fontName: 'HelveticaNeue',
      positionXAlignment: 'center', // left,right,center - no affect on fullwidth
      positionYAlignment: 'bottom', // top, center, bottom
      offset: {
        x: 0, // postive -> right
        y: -88, // postive -> down
      },
    },
  },
};
