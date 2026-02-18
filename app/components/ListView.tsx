import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

 const ListView = () => {
  return (
    <View>
      <FlatList
        data={[{ key: "Bormey" }, { key: "Bopha" }, { key: "Borama" }]}
        renderItem={({ item }) => <Text style={styles.txt}>{item.key}</Text>}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  txt: {
    fontFamily: "times new roman",
    fontWeight: "bold",
    fontSize: 40,
    color: "red",
    textAlign: "center",
  },
});
export default ListView;