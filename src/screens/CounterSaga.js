import React, { Component } from 'react';
import { Dimensions, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { connect, useDispatch } from 'react-redux';

const { height, width } = Dimensions.get('window');

function CounterSagaScreen ({
  route,
  navigation,
  counter,
}) {
  const dispatch = useDispatch();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.counterTitle}>Counter</Text>
      <View style={styles.counterContainer}>
        <TouchableOpacity
          onPress={() => dispatch({
            type: 'INCREASE_COUNTER'
          })}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
        <Text style={styles.counterText}>{counter}</Text>
        <TouchableOpacity
          onPress={() => dispatch({
            type: 'DECREASE_COUNTER',
            value: 1,
          })}
        >
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  counterContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  counterTitle: {
    fontFamily: 'System',
    fontSize: 32,
    fontWeight: '700',
    color: '#000',
  },
  counterText: {
    fontFamily: 'System',
    fontSize: 36,
    fontWeight: '400',
    color: '#000',
  },
  buttonText: {
    fontFamily: 'System',
    fontSize: 50,
    fontWeight: '300',
    color: '#007AFF',
    marginLeft: 40,
    marginRight: 40,
  },
});

const mapStateToProps = (state) => {
  return {
    counter: state.counter_all_reducer.counter,
  };
};

export default connect(mapStateToProps)(CounterSagaScreen);
