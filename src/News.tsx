import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView } from 'react-native';

const News = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://newsapi.org/v2/top-headlines?country=no&apiKey=68ce9fefec9449399f7e8f7d1167d930', {headers: {'Content-Type': 'application/json'}})
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error(error));
  }, []);

  const map = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  const elements = map.map((item, index) => (
    <Text key={item}>{data ? data.articles[index].title: 'Loading...'} {'\n'}</Text>
  ));

  return (
    <ScrollView>
      {elements}
    </ScrollView>
  );
};

export default News;
