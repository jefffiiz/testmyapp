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
