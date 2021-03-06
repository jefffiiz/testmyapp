import license from './license';
export default {
  license: license,
  options: {
    camera: {
      captureResolution: '1080p',
    },
    flash: {
      mode: 'manual',
      alignment: 'top_right',
    },
    parallelViewPluginComposite: {
      id: 'DOUBLE_TARIFF_SEQUENTIAL',
      cancelOnResult: true,
      viewPlugins: [
        {
          viewPlugin: {
            plugin: {
              id: 'METER_PLUGIN',
              meterPlugin: {
                scanMode: 'AUTO_ANALOG_DIGITAL_METER',
              },
            },
            cutoutConfig: {
              style: 'rect',
              alignment: 'top',
              strokeWidth: 2,
              strokeColor: 'FFFFFF',
              cornerRadius: 4,
              outerColor: '000000',
              outerAlpha: 0.5,
              feedbackStrokeColor: '0099FF',
              offset: {
                x: 0,
                y: 120,
              },
            },
            scanFeedback: {
              style: 'CONTOUR_RECT',
              strokeColor: '0099FF',
              strokeWidth: 2,
              fillColor: '220099FF',
              cornerRadius: 2,
              redrawTimeout: 200,
              animationDuration: 75,
              blinkOnResult: true,
              beepOnResult: true,
              vibrateOnResult: true,
            },
            cancelOnResult: true,
          },
        },
        {
          viewPlugin: {
            plugin: {
              id: 'USNR_ID',
              ocrPlugin: {
                ocrConfig: {},
              },
              delayStartScanTime: 1000,
            },
            cutoutConfig: {
              style: 'rect',
              width: 720,
              alignment: 'center',
              maxWidthPercent: '80%',
              ratioFromSize: {
                width: 720,
                height: 144,
              },
              strokeWidth: 2,
              strokeColor: 'FFFFFF',
              cornerRadius: 4,
              outerColor: '000000',
              outerAlpha: 0.5,
              feedbackStrokeColor: '0099FF',
              offset: {
                x: 0,
                y: 0,
              },
            },
            scanFeedback: {
              style: 'CONTOUR_RECT',
              strokeColor: '0099FF',
              fillColor: '220099FF',
              beepOnResult: true,
              vibrateOnResult: true,
              blinkAnimationOnResult: true,
            },
            cancelOnResult: true,
          },
        },
      ],
    },
  },
};
