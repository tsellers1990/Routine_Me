import * as WebBrowser from 'expo-web-browser';
import React, { useState } from 'react';
import { Platform, StyleSheet, Text, TouchableOpacity, View, Button, TextInput } from 'react-native';
import AddRoutine from '../components/AddRoutine';

export default function AddScreen() {
  // const hours = [ "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12" ]
  // const minutes = [ "00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60" ]

  // const STORAGE_KEY = '@save_routines'
 
  // const [routines, setRoutines] = useState([
  // ])

  // const [text, setText] = useState('');

  // const textChangeHandler = (val) => {
  //     setText(val)
  // }

  // const submitHandler = (text, time) => {
  //   setRoutines((prevRoutines) => {
  //     saveData();
  //     return [
  //       {title: text, time: time },
  //       ...prevRoutines
  //     ]
  //   })
  // }
  
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
