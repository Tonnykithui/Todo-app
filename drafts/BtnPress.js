import { View, Text, Button, StyleSheet, FlatList } from "react-native";
import { useState } from "react";

export default function FetchDataOnPress() {
  const [isPressed, setIsPressed] = useState(false);
  const [data, setData] = useState([]);
  const fetchData = async () => {
    const res = await fetch("https://api.sampleapis.com/coffee/hot");
    const data = await res.json();
    //   .then((res) => res.json())
    //   .catch((err) => {
    //     console.log("=====ERROR======");
    //   });
    console.log(data);
    setData(data);
    console.log("========DATA========", data);
    setIsPressed(!isPressed);
  };

  const CoffeeSingleItem = ({ item }) => {
    return (
      <View style={styles.cView}>
        <Text style={styles.ctitle}>{item.title}</Text>
      </View>
    );
  };
  return (
    <View>
      {isPressed && <Text>GREAT THINGS COMING</Text>}
      {!isPressed && <Button title="click me!" onPress={fetchData} />}
      {data && (
        <FlatList
          data={data}
          renderItem={CoffeeSingleItem}
          keyExtractor={(item) => item.id.toString()}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  ctitle: {
    // backgroundColor: "blue",
    fontSize: 10,
    color: "white",
    // height: 30,
    // width: "100%",
    // marginBottom: 5,
    // padding: 2,
  },
  cView: {
    marginBottom: 5,
    // alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
    height: 30,
    width: "100%",
    padding: 5,
    borderRadius: 5,
    // flex: 1,
  },
});
