import React, { useState, useEffect } from "react";
import { Box, FlatList, View, Text } from "react-native";

export default function CoffeeAutonomous() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    const resp = await fetch("https://api.sampleapis.com/coffee/hot");
    const data = await resp.json();
    setData(data);
    setLoading(false);
  };

  const renderItem = ({ item }) => {
    return (
      <View
        style={{
          height: 40,
          width: "100%",
          backgroundColor: "white",
          margin: 10,
        }}
      >
        <Text>{item.title}</Text>
      </View>
    );
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: "grey" }}>
      <Text> Fetch API</Text>
      {loading && <Text>Loading..</Text>}
      {data && (
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          // style={{ height: 20, width: "100%", backgroundColor: "grey" }}
        />
      )}
    </View>
  );
}
