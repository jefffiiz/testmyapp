import React, { Fragment, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  Platform,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Share from 'react-native-share';
import RNGeniusScan from '@thegrizzlylabs/react-native-genius-scan';

const GeniusScanScreen = () => {
  useEffect(() => {
    const key =
      Platform.OS === 'android'
        ? '533c50055c5e09000456015239525a0e4a0e4b0544466d08570e0c5f070e070855'
        : '533c50055c5e080203520359395e47044a1157055742584a4c5855125e4e5' +
          '51e074c050f48595319084b5042123d00005a5b560953530007';
    RNGeniusScan.setLicenceKey(key);
  });

  // Refer to the Genius Scan SDK demo README.md for a list of the available options
  const configuration = {
    source: 'camera',
  };
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />

          <Text style={styles.welcome}>GS SDK React Native Demo</Text>
          <View>
            <View style={styles.button}>
              <Button
                onPress={() => {
                  RNGeniusScan.scanWithConfiguration(configuration)
                    .then(result => {
                      // Here you can get the pdf file and the scans from the result
                      // object.
                      // As an example, we show here how you can share the resulting PDF:
                      console.log(result);
                      const shareOptions = { url: result.pdfUrl };
                      console.log(shareOptions);
                      Share.open(shareOptions)
                        .then(res => {
                          console.log(res);
                        })
                        .catch(e => alert(e));
                    })
                    .catch(e => alert(e));
                }}
                title="Start scanning"
              />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  controls: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  button: {
    margin: 5,
  },
});

export default GeniusScanScreen;
