import license from './license';
export default {
  license: license,
  options: {
    camera: {
      captureResolution: '1080p',
      pictureResolution: '1080p',
    },
    flash: {
      mode: 'manual',
      alignment: 'top_right',
    },
    serialViewPluginComposite: {
      id: 'LP_DL_VIN',
      cancelOnResult: true,
      viewPlugins: [
        {
          viewPlugin: {
            plugin: {
              id: 'LICENSE_PLATE',
              licensePlatePlugin: {
                scanMode: 'AUTO',
              },
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
              style: 'rect',
              strokeWidth: 2,
              strokeColor: '0099FF',
              fillColor: '330099FF',
              cornerRadius: 0,
              beepOnResult: true,
              vibrateOnResult: true,
              blinkAnimationOnResult: true,
            },
            cancelOnResult: true,
          },
        },
        {
          viewPlugin: {
            plugin: {
              id: 'DRIVING_LICENSE',
              idPlugin: {
                drivingLicenseConfig: {
                  scanMode: 'AUTO',
                },
              },
            },
            cutoutConfig: {
              style: 'rect',
              maxWidthPercent: '99%',
              maxHeightPercent: '100%',
              alignment: 'center',
              ratioFromSize: {
                width: 560,
                height: 354,
              },
              strokeWidth: 2,
              cornerRadius: 4,
              strokeColor: 'FFFFFF',
              outerColor: '000000',
              outerAlpha: 0.3,
              feedbackStrokeColor: '0099FF',
            },
            scanFeedback: {
              fillColor: '220099FF',
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
        {
          viewPlugin: {
            plugin: {
              id: 'VIN',
              ocrPlugin: {
                vinConfig: {},
              },
            },
            cutoutConfig: {
              style: 'rect',
              maxWidthPercent: '70%',
              alignment: 'top_half',
              ratioFromSize: {
                width: 62,
                height: 9,
              },
              outerColor: '000000',
              outerAlpha: 0.3,
              strokeWidth: 2,
              strokeColor: 'FFFFFF',
              cornerRadius: 4,
              feedbackStrokeColor: '0099FF',
            },
            scanFeedback: {
              animation: 'traverse_multi',
              animationDuration: 250,
              style: 'contour_rect',
              strokeWidth: 2,
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
