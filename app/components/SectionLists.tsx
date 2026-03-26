import React from "react";
import { Platform, SectionList, StyleSheet, Text, View } from "react-native";
const SectionLists = () => {
  const allContacts = [
    "Arom",
    "Arii",
    "Arii",
    "Brii",
    "Crii",
    "Drii",
    "Erii",
    "Frii",
    "Grii",
    "Hrii",
    "Irii",
    "Jrii",
    "Krii",
    "Lrii",
    "Mrii",
    "Nrii",
    "Orii",
    "Arii",
    "Arii",
    "Arii",
    "Arii",
    "Arii",
    "Arii",
    "Arii",
    "Arii",
    "Arii",
    "Arii",
    "Arii",
    "Arii",
    "Arii",
    "Arii",
    "Arii",
    "Arii",
  ];
  const contact=allContacts.map((cont,index)=>`- ${cont}\n`);
  return (
    <View style={styles.container}>
      <SectionList
        horizontal={false}
        sections={[
          { title: "A", data: [] },
          { title: "B", data: ["Bormey", "Borama"] },
          { title: "C", data: [] },
          { title: "D", data: [] },
          { title: "E", data: [] },
          { title: "F", data: ["Fernandes", "Ferari"] },
          { title: "G", data: [] },
          { title: "H", data: [] },
          { title: "I", data: [] },
          { title: "J", data: [] },
          { title: "K", data: ["Kom Kom"] },
          { title: "L", data: [] },
          { title: "M", data: ["Meii", "Mey"] },
          { title: "N", data: [] },
          { title: "O", data: [] },
          { title: "P", data: ["Pheakdey", "Phana"] },
          { title: "Q", data: [] },
          { title: "R", data: [] },
          { title: "S", data: [] },
          { title: "T", data: ["Thavireak"] },
          { title: "U", data: [] },
          { title: "V", data: [] },
          { title: "W", data: [] },
          { title: "X", data: [] },
          { title: "Y", data: [] },
          { title: "Z", data: ["Zeii"] },
        ]}
        renderItem={({ item }) => <Text style={styles.txt}>{item}</Text>}
        renderSectionHeader={({ section }) => (
          <View
            style={[
              styles.containerHeader,
              { display: section.data.length > 0 ? "flex" : "none" },
            ]}
          >
            <Text style={styles.header}>{section.title}</Text>
          </View>
        )}
        keyExtractor={(item) => `basicListEntry-${item}`}
      ></SectionList>

      {/* Example */}
      {/* <Text style={styles.txt}>{contact}</Text> */}

    </View>
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
  containerHeader: {
    ...Platform.select({
      android: { backgroundColor: "#bef5ff" },
      ios: { backgroundColor: "#9c9c9c" },
      default: { backgroundColor: "#faaeae" },
    }),
    width: "100%",
    marginTop: 5,
  },
});
export default SectionLists;
