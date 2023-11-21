import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, ScrollView } from 'react-native';

/*import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
    organization: "org-ubim0hSXtl39mmeD1imlw2hr",
    apiKey: "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",
});
const openai = new OpenAIApi(configuration);
const response = openai.listEngines();

console.log(response);*/  

/*
import OpenAI from "openai";

const openai = new OpenAI({ apiKey: "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" });*/


const Calendar = () => {
    /*const [aiReturn, setAiReturn] = useState("null");


    async function main() {
        const completion = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [{ role: "system", content: "You are a helpful assistant. Hva heter du?" }],
            max_tokens: 100,
            temperature: 1,
        });
        

        console.log(completion.choices[0]);
        setAiReturn(completion.choices[0]);
    }

    main();*/

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
 