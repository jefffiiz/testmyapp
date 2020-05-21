import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Header from './component/Header';

const ReactHook = ({ navigation }) => {
  const [count, setCount] = useState(0);
  const [title, setTitle] = useState();

  useEffect(() => {
    doSomething();
  }, []);

  useEffect(() => {
    console.log('useEffect: ', count);
  }, [count]);

  const doSomething = () => {
    setTitle('React Hook');
  };

  const increase = () => {
    setCount(count + 1);
    setTitle('React Hook: Increase');
  };

  const decrease = () => {
    setCount(count - 1);
    setTitle('React Hook: Decrease');
  };

  return (
    <View style={style.container}>
      <Header title={title} />
      <Text>Count: {count}</Text>
      <Button title="Increase" onPress={increase} />
      <Button title="Decrease" onPress={decrease} />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ffffff',
  },
});

export default ReactHook;
