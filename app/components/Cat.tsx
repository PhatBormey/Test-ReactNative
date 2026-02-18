import React, { useState } from "react";
import { Button, StyleSheet, Text } from "react-native";
type CatProps = {
  name: string;
  age: number;
};
const Cat = (props: CatProps) => {
  const [isHungry, setIsHungry] = useState(true);
  return (
    <>
      <Text>
        👋Hello my name is {props.name}.{"\n"}I am {props.age} years old.{"\n"}
        {"I'm "} {isHungry ? "hungry" : "full"}
        {"\n"}
      </Text>

      <Button
        onPress={() => setIsHungry(!isHungry)}
        disabled={!isHungry}
        title={isHungry ? "Give me some food please" : "Thank you!"}
      ></Button>
      {"\n"}
    </>
  );
};
export default Cat;
