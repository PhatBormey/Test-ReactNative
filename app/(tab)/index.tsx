import { Image, StyleSheet, Text, View } from "react-native";
import Cat from "../components/Cat";
import Input from "../components/Input";
import ScrollViews from "../components/ScrollViews";
import SectionLists from "../components/SectionLists";
import ListView from "../components/ListView";
export default function Index() {
  return (
    <View >
      {/* <Input/>
      <Image
        alt="Image"
        source={{
          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGS32SO8X66b_YNHn32hVYFuAFTJnZf1IvZQ&s",
        }}
        style={styles.image}
      ></Image>
      <Text style={styles.text}>
        <Cat name="Bormey" age={24} />
      </Text> */}
      <SectionLists/>
      
    </View>
  );
}
const styles = StyleSheet.create({
  // text: {
  //   color: "black",
  //   opacity: 0.8,
  //   fontFamily: "Times New Roman",
  //   fontSize: 20,
  //   textAlign: "center",
  // },
  contianer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "silver",
    padding: 0,
  },
  // image: {
  //   width: 200,
  //   height: 200,
  //   borderRadius: 100,
  // },
});
