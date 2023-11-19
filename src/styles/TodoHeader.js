import { StyleSheet, StatusBar, SafeAreaView } from "react-native";

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
    // paddingLeft: 10,
    // paddingRight: 10,
    flex: 1,
    display: "flex",
    alignItems: "center",
    margin: 20,
    paddingBottom: 10,
    fontSize: 50,
  },
  header: {
    fontWeight: "bold",
    fontSize: 40,
    marginTop: 20,
  },
});

export default styles;
