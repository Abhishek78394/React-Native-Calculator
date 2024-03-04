import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import math from 'mathjs';


const App = () => {
  const [display, setDisplay] = useState('');
  const [result, setResult] = useState('');

  const handlePress = (value) => {
    const lastChar = display.slice(-1);
    const isOperator = ['+', '-', '*', '/'].includes(value);
    const lastCharIsOperator = ['+', '-', '*', '/'].includes(lastChar);
    const lastCharIsEqual = lastChar === '=';
  
    if (value === '=') {
      if (!lastCharIsOperator && !lastCharIsEqual && display) {
        calculateResult();
      }
    } else if (value === 'AC') {
      clearAll();
    } else if (value === 'C') {
      clearLastDigit();
    } else {
      if (isOperator) {
        if (lastCharIsOperator) {
          setDisplay(display.slice(0, -1) + value);
        } else {
          console.log(isOperator,"::::::::::::::")
          setDisplay(display + value);
          calculateResult(); 
        }
      } else {
        setDisplay(display + value);
        if (result && !lastCharIsOperator && !lastCharIsEqual) {
          setResult('');
        }
      }
    }
  };
  const calculateResult = () => {
    try {
      setResult(eval(display));
    } catch (error) {
      setResult('Error');
    }
  };

  
  const clearAll = () => {
    setDisplay('');
    setResult('');
  };

  const clearLastDigit = () => {
    setDisplay(display.slice(0, -1));
  };

  return (
    <View style={styles.container}>
      <View style={styles.displayBox}>  
            <Text style={styles.display}>{display}</Text>
      </View>
      <View style={styles.resultBox}>  
      <Text style={styles.result}>{result}</Text>
      </View>
     
      <View style={styles.buttonBox}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => handlePress('7')}>
            <Text style={styles.buttonText}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handlePress('8')}>
            <Text style={styles.buttonText}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handlePress('9')}>
            <Text style={styles.buttonText}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handlePress('/')}>
            <Text style={styles.buttonText}>/</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => handlePress('4')}>
            <Text style={styles.buttonText}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handlePress('5')}>
            <Text style={styles.buttonText}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handlePress('6')}>
            <Text style={styles.buttonText}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handlePress('*')}>
            <Text style={styles.buttonText}>*</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => handlePress('1')}>
            <Text style={styles.buttonText}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handlePress('2')}>
            <Text style={styles.buttonText}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handlePress('3')}>
            <Text style={styles.buttonText}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handlePress('-')}>
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => handlePress('0')}>
            <Text style={styles.buttonText}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handlePress('.')}>
            <Text style={styles.buttonText}>.</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handlePress('C')}>
            <Text style={styles.buttonText}>C</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handlePress('+')}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={[styles.button, { flex: 1 }]} onPress={() => handlePress('AC')}>
            <Text style={styles.buttonText}>AC</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, { flex: 1 }]} onPress={() => handlePress('=')}>
            <Text style={styles.buttonText}>=</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  displayBox: {
    width: '100%'
  },
  resultBox:{
    width: '100%'
  },
  display: {
    fontSize: 48,
    marginBottom: 30,
    paddingRight:10,
    textAlign: 'right',
  },
  result: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'right',
    paddingRight:20
  },
  buttonBox: {
    marginBottom: -70,
  },
  buttonContainer: {
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 10,
    marginBottom: 20
  },
  button: {
    backgroundColor: '#DDDDDD',
    width: '22%',
    padding: 20,
    margin: 5,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 24,
    textAlign: 'center',
  },
});

export default App;
