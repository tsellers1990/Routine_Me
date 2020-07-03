import React, { useState } from 'react';
import { StyleSheet, Picker, Text, TextInput, Button, View } from 'react-native';

export default function AddRoutine ({ submitHandler }) {
  const hours = [ "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12" ]
  const minutes = [ "00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60" ]

  const [text, setText] = useState('');

  const textChangeHandler = (val) => {
      setText(val)
  }

  return (
    <View>
      <TextInput 
      placeholder= "Add Routine Item"
      style={styles.input}
      onChangeText={textChangeHandler}
      />
        <Picker> 
           {pickerItems}
        </Picker> 
      <Picker />
      <Button 
      title="submit"
      onPress={submitHandler}
      // selectedHours={selectedHours}
      // selectedMinutes={selectedMinutes}
      // onChange={timeChangeHandler}
      />        
    </View>
  )
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 8,
    }
})