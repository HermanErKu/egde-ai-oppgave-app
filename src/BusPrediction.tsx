import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const BusPrediction = () => {
 const [data, setData] = useState(null);
 const [loading, setLoading] = useState(true);

 useEffect(() => {
  const fetchData = async () => {
    const busText = await AsyncStorage.getItem('busLineStore');
    // Bruk busText her
    fetch('https://egdeaiapi.hermanerku.repl.co/buss?linje='+busText, {headers: {'Content-Type': 'application/json'}})
      .then(response => response.json())
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
        setLoading(false);
      });
  };
  fetchData();
 }, []);

 if (loading) {
  return <Text>Loading...</Text>;
 }

 return (
   <ScrollView>
    {data.map((item, index) => {
       const key = Object.keys(item)[0];
       const destination = item[key].destination;
       const lineName = item[key].lineName;
       const occupancy = item[key].occupancy;

       const delay = item[key].delay;
       const currentStop = item[key].currentStop;

       if(delay/60 !> -7 && delay/60 !< 15){
           return (<Text key={index}>{lineName} - {destination}.  {occupancy} {'\n'} {Math.round(delay/60)} Minutter forsinket. På: {currentStop} {'\n'}</Text>);
       }
    })}
  </ScrollView>
 );
};

export default BusPrediction;
