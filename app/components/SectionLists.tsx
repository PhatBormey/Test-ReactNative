import React from "react";
import { ScrollView, SectionList, StyleSheet, Text, View } from "react-native";

const SectionLists = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <SectionList
          sections={[
            { title: "B", data: ["Bormey", "Borama"] },
            { title: "M", data: ["Meii", "Mey"] },
            { title: "P", data: ["Pheakdey", "Phana"] },
            { title: "B", data: ["Bormey", "Borama"] },
            { title: "M", data: ["Meii", "Mey"] },
            { title: "P", data: ["Pheakdey", "Phana"] },
            { title: "B", data: ["Bormey", "Borama"] },
            { title: "M", data: ["Meii", "Mey"] },
            { title: "P", data: ["Pheakdey", "Phana"] },
          ]}
          renderItem={({ item }) => <Text style={styles.txt}>{item}</Text>}
          renderSectionHeader={({ section }) => (
            <View style={styles.contanerHeader}>
              <Text style={styles.header}>{section.title}</Text>
            </View>
          )}
          keyExtractor={(item) => `basicListEntry-${item}`}
        ></SectionList>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  txt: {
    fontSize: 25,
    fontFamily: "times new roman",
    textAlign: "left",
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 5,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "stretch",
  },
  header: {
    fontSize: 30,
    fontFamily: "times new roman",
    textAlign: "left",
    marginLeft: 10,
    marginRight: 10,
    fontWeight: "bold",
  },
  contanerHeader: {
    backgroundColor: "#BFC9D1",
    width: "100%",
    marginTop: 5,
  },
});
export default SectionLists;
