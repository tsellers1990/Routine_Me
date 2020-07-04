import * as WebBrowser from 'expo-web-browser';
import React, { useState } from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import AddRoutine from '../components/AddRoutine';

export default function AddScreen() {
  const submitHandler = (time, text) => {
    setTodos((prevTodos) => {
      saveData();
      return [
        {title: text, key: Math.random().toString() },
        ...prevTodos
      ]
    })
  }
  
  return (
      //style={styles.container}
     <View>
       <AddRoutine 
       pressHandler="string"
       />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4B4B4B',
  },
  input: {
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    paddingHorizontal: 8,
    paddingVertical: 8,
    borderStyle:"solid",
    borderWidth: 1,
    textAlign: "center"
  },
  developmentModeText: {
    marginBottom: 20,
    color: '#BCBCBC',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: '#E2E2E2',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#5F5F5F',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: '#E2E2E2',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
  map: {
      height: '100%',
      width: '100%',
  }
});
