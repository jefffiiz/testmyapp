export default {
  license:
    'eyJzY29wZSI6WyJBTEwiXSwicGxhdGZvcm0iOlsiaU9TIiwiQW5kcm9pZCIsIldpb' +
    'mRvd3MiLCJKUyIsIldlYiJdLCJ2YWxpZCI6IjIwMjAtMDUtMDciLCJtYWpvclZlcn' +
    'Npb24iOjMsIm1heERheXNOb3RSZXBvcnRlZCI6NSwic2hvd1dhdGVybWFyayI6dHJ' +
    '1ZSwicGluZ1JlcG9ydGluZyI6dHJ1ZSwiZGVidWdSZXBvcnRpbmciOiJvcHQtb3V0' +
    'IiwidG9sZXJhbmNlRGF5cyI6NSwic2hvd1BvcFVwQWZ0ZXJFeHBpcnkiOnRydWUsI' +
    'mlvc0lkZW50aWZpZXIiOlsib3JnLnJlYWN0anMubmF0aXZlLmV4YW1wbGUubXlhcH' +
    'AiXSwiYW5kcm9pZElkZW50aWZpZXIiOlsib3JnLnJlYWN0anMubmF0aXZlLmV4YW1' +
    'wbGUubXlhcHAiXSwid2luZG93c0lkZW50aWZpZXIiOlsib3JnLnJlYWN0anMubmF0' +
    'aXZlLmV4YW1wbGUubXlhcHAiXSwid2ViSWRlbnRpZmllciI6WyJvcmcucmVhY3Rqc' +
    'y5uYXRpdmUuZXhhbXBsZS5teWFwcCJdLCJqc0lkZW50aWZpZXIiOlsib3JnLnJlYW' +
    'N0anMubmF0aXZlLmV4YW1wbGUubXlhcHAiXSwiaW1hZ2VSZXBvcnRDYWNoaW5nIjp' +
    '0cnVlfQpmVW9HS0xsaU5PTDg4UmpEd29pempGR1BiOENiS2ZSZU14NGJHSm5mN2lD' +
    'Wm5lc0d3UkFMUjcyS2NCVFVGWUgwd3pTSjBoZ1JIaTNCYzJqdWFhNCtGYk9nYkRDW' +
    'Vh1MGdINmhDZXpwYzdkS3Z6eFRxVVNYQTZhSHh6c2x5RTdDbVRZWmxRM1JDVEpRaE' +
    'dkOU5MOXVUUWdCYzZwT2RSK0dOUm5oMDhwM2ZZTklYRkJGc0EvZUYxK0ZtSFdVSEp' +
    '3WlpQWXpDS3pnU21aeWZLZWMvS291RC9XaklMalJ6UHFINDRkek56eDhDQkJmZDda' +
    'dTFIRHpYMXY2OVI3ei9ZL2lFNHo0YTc4M3k4blhZS2JjdkthcVQ4bkRzVUREMmhDe' +
    'mIzbnFnU1dMeDJHamZKMXhFckdOTysrQzZwdTZYRThOV0s0L3R4WHZqckx2RXVKSX' +
    'ZKZG9vUVE9PQ==',
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
          barcodeFormatOptions: ['PDF_417'],
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
