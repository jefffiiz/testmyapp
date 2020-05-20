import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';

const Header = props => {
  const [title, setTitle] = useState(props.title);

  useEffect(() => {
    console.log('Mount');
    return () => {
      console.log('UNMOUNT');
    };
  }, []);

  useEffect(() => {
    setTitle(props.title);
  }, [props]);

  useEffect(() => {
    console.log('Header', title);
  }, [title]);

  return (
    <TouchableHighlight
      style={style.container}
      onPress={() => setTitle(title + '1')}>
      <Text style={style.title}>{title}</Text>
    </TouchableHighlight>
  );
};

const style = StyleSheet.create({
  container: {
    padding: 25,
    alignItems: 'center',
    backgroundColor: '#cdcdcd',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default Header;
