import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { RoutineButton } from '../components/RoutineButton';
// import { submitHander, saveData, readData } from '../components/CRUD';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <RoutineButton
        style={styles.defaultItem}
        icon="md-square-outline"
        label="Make the bed"
        time="6AM"
        // onPress={() => WebBrowser.openBrowserAsync('https://docs.expo.io')}
      />

      <RoutineButton
        style={styles.defaultItem}
        icon="md-square-outline"
        label="Make Breakfast"
        time="7AM"
        // onPress={() => WebBrowser.openBrowserAsync('https://reactnavigation.org')}
      />

      <RoutineButton
        style={styles.defaultItem}
        icon="md-square-outline"
        label="Walk Shorty"
        time="8AM"
        // onPress={() => WebBrowser.openBrowserAsync('https://forums.expo.io')}
        // isLastOption
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4B4B4B',
  },
  defaultItem: {
    borderStyle: "solid",
    borderWidth: 10
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
});
