import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, ScrollView } from 'react-native';

const Calendar = () => {


  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://newsapi.org/v2/top-headlines?country=no&apiKey=68ce9fefec9449399f7e8f7d1167d930', {headers: {'Content-Type': 'application/json'}})
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <ScrollView>
      {/*<Text>{data ? data.articles[12].title: 'Loading...'}</Text>*/}
      <Text>Henter møter fra din kalender...</Text>
    </ScrollView>
  );
};
export default Calendar;
 