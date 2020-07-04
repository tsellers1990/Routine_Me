import React, { useState } from 'react';
import { StyleSheet, Picker, Text, TextInput, Button, View, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker'

export default function AddRoutine ({ submitHandler }) {
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [text, setText] = useState('');

  const textChangeHandler = (val) => {
      setText(val)
  }

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };

  const showTimepicker = () => {
    showMode('time');
  };

  return (
    <View>
      <View>
        <Button onPress={showTimepicker} title="Select Time" />
      </View>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={false}
          display="default"
          onChange={onChange}
        />
      )}
      <TextInput 
      placeholder= "Add Routine Item"
      style={styles.input}
      onChangeText={textChangeHandler}
      />
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