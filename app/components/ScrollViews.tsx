import React from "react";
import { Image, ScrollView, StyleSheet, Text } from "react-native";
import { ListView } from "./ListView";

type props = {
  name: string;
  uri: string;
};
function Poster({ name, uri }: props) {
  let logo = {
    uri: uri,
    width: 360,
    height: 200,
  };
  return (
    <>
      <Text style={styles.txt}>{name}</Text>
      <Image source={logo}></Image>
    </>
  );
}
export default function ScrollViews() {
  return (
    <ScrollView >
      <Poster
        name="Amazon"
        uri="https://oyla.us/wp-content/uploads/2023/08/forest1.jpg"
      />
      <Poster
        name="Cambodia"
        uri="https://www.asiakingtravel.com/cuploads/files/Angkor_Wat_Temple.jpg"
      />
      <Poster
        name="Atlantic"
        uri="https://i.guim.co.uk/img/media/2a4cd2e5bcd905b1a3342e8494baba283482994e/0_133_4000_2400/master/4000.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=6051e6ab62071827736a722a46e477bd"
      />
      
    </ScrollView>
  );
}
const styles=StyleSheet.create({
    txt:{
        fontSize: 30,
        textAlign:"center"
    
    },
    
})
