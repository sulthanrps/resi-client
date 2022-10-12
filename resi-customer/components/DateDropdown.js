import React, {useState} from 'react';
import {View} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker'

export default function DateDropdown({dataBook, setDataBook}) {
  const [date, setDate] = useState(new Date());

  const onChange = (event ,selectedDate) => {
    const currentDate = selectedDate
    setDate(currentDate);
    console.log(currentDate, '<< dari date picker')

    setDataBook({
      ...dataBook,
      date : currentDate
    })

    // console.log(dataBook)

    let fDate = currentDate.getDate() + '/' + (currentDate.getMonth() + 1) + '/' + currentDate.getFullYear();
    console.log(fDate, '<< hasil modifikasi')
  }


  return (
    <View style={{
      width: 0
    }}>
      <DateTimePicker
        testID='dateTimePicker'
        value={date}
        mode='date'
        onChange={onChange}
        style={{
          width: 200,
          height: 50,
          marginLeft: -250,
        }}
      />
    </View>
  );
}