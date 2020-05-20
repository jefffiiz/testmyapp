/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  TouchableOpacity,
  Alert,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import Config from 'react-native-config';
import Toasty from './toasty/Toasty';

const Home = ({ navigation }) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log('useEffect', loading);
    setLoading(true);
  }, [loading]);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.body}>
            {/* <View style={styles.sectionContainer}>
              <Icon name="ios-home" size={24} />
              <Text style={styles.sectionTitle}>{Config.API_URL}</Text>
            </View> */}
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Genius Scan</Text>
              <Button
                title="Genius Scan"
                onPress={() => navigation.navigate('GeniusScan')}
              />
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Anyline Scan</Text>
              <Button
                title="Anyline Scan"
                onPress={() => navigation.navigate('AnylineScan')}
              />
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Document Scan</Text>
              <Button
                title="Document Scan"
                onPress={() => navigation.navigate('DocumentScan')}
              />
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Face Detection</Text>
              <Button
                title="Face Detection"
                onPress={() => navigation.navigate('FaceDetection')}
              />
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Rect Hook</Text>
              <Button
                title="React Hook"
                onPress={() => navigation.navigate('ReactHook')}
              />
            </View>
            <TouchableOpacity
              style={styles.sectionContainer}
              onPress={() => {
                Toasty.show('Awesome', Toasty.LONG);
              }}>
              <Text style={styles.sectionTitle}>Learn More</Text>
              <Text style={styles.sectionDescription}>
                Read the docs to discover what to do next:
              </Text>
            </TouchableOpacity>
            <LearnMoreLinks />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
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
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default Home;
