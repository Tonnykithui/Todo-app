import { TouchableOpacity, View, Text } from "react-native";
const List = () => {
  const people = [
    {
      id: 1,
      fname: "TOnny",
      lname: "Kithui",
    },
    {
      id: 12,
      fname: "Danches",
      lname: "Kim",
    },
    {
      id: 111,
      fname: "MIchael",
      lname: "Kissinga",
    },
    {
      id: 16,
      fname: "Manyoro",
      lname: "Derrick",
    },
  ];
  return (
    <View>
      {people.map((person) => {
        return (
          <TouchableOpacity
            key={person.id}
            style={{
              backgroundColor: "lightblue",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 4,
            }}
          >
            <Text>
              {person.fname} {person.lname}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};
export default List;
