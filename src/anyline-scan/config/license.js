import { Platform } from 'react-native';

const license =
  Platform.OS === 'android'
    ? 'eyJzY29wZSI6WyJBTEwiXSwicGxhdGZvcm0iOlsiaU9TIiwiQW5kcm9pZCIsIldpb' +
      'mRvd3MiLCJKUyIsIldlYiJdLCJ2YWxpZCI6IjIwMjAtMDUtMDgiLCJtYWpvclZlcnNp' +
      'b24iOjMsIm1heERheXNOb3RSZXBvcnRlZCI6NSwic2hvd1dhdGVybWFyayI6dHJ1ZSw' +
      'icGluZ1JlcG9ydGluZyI6dHJ1ZSwiZGVidWdSZXBvcnRpbmciOiJvcHQtb3V0IiwidG' +
      '9sZXJhbmNlRGF5cyI6NSwic2hvd1BvcFVwQWZ0ZXJFeHBpcnkiOnRydWUsImlvc0lkZ' +
      'W50aWZpZXIiOlsiY29tLm15YXBwIl0sImFuZHJvaWRJZGVudGlmaWVyIjpbImNvbS5t' +
      'eWFwcCJdLCJ3aW5kb3dzSWRlbnRpZmllciI6WyJjb20ubXlhcHAiXSwid2ViSWRlbnR' +
      'pZmllciI6WyJjb20ubXlhcHAiXSwianNJZGVudGlmaWVyIjpbImNvbS5teWFwcCJdLC' +
      'JpbWFnZVJlcG9ydENhY2hpbmciOnRydWV9ClcrTVJGcXF0U0xBcDQ2WWhLNGRkaCtye' +
      'WgrdlRyUHpWT1Y1cjdOL0htWEoybDdpUUpFdk9VeHdYcW94S0dUNk8yUjFKeUx0YVl4' +
      'NXZIdUpoKytxQXduQThWSlU1ZFdyVEFUKzNFQ1VIVEhWMEFQWkZxSkVCVG1oeFVDNmJ' +
      'DVzhTRHA0ZzQ0YklId0hraGZDaDJ1dHppajN0M2w1Y3Q5eWR4ckFkV0MrUFJSN0IwT2' +
      'pIMGdTMENhTUR1Zm02ZHVGVmNLSU11bGErbkxNekZIMHFBajNzVmEzMkdxR3phT2Ftd' +
      'FVkVTVLYlhaWndaUnp1T1BxajY5TVFqMTFCL25wYVVwM2h1VG5RSVIzQWVXZndlTTBD' +
      'cG41ZE9ROGVXckVSRjMzM1owU0RSSmFsbUllcVFRMVA0U1NBd01pOFhMUTRGMjY4Nmt' +
      'IRGRRZFZLSlpnNG5YOEdsQT09'
    : 'eyJzY29wZSI6WyJBTEwiXSwicGxhdGZvcm0iOlsiaU9TIiwiQW5kcm9pZCIsIldpb' +
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
      'ZKZG9vUVE9PQ==';

export default license;
