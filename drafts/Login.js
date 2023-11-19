import { useState } from "react";
import {
  TextInput,
  StyleSheet,
  View,
  Platform,
  StatusBar,
  SafeAreaView,
  Text,
  Linking,
  TextInputComponent,
  Button,
} from "react-native";

export default LoginForm = ({ navigation }) => {
  const [handlePasswordVar, setHandlePassword] = useState("");
  const [handleUsernameVar, sethandleUsername] = useState("");
  const [btnIsDisabled, setBtnIsDisAbled] = useState(false);
  btnSubmit = () => {
    // alert("BTN SUBMITTED SUCCESSFULLY");
    console.log("NATS");
    setTimeout(() => {
      setBtnIsDisAbled(!btnIsDisabled);
    }, 2000);
  };

  const handlePassword = (text) => {
    setHandlePassword(text);
  };
  const handleUsername = (text) => {
    sethandleUsername(text);
  };

  const btnSuccessSubmit = () => {
    alert(handlePasswordVar + " " + handleUsernameVar);
  };
  return (
    <View
      style={{
        flex: 1,
        // justifyContent: "center",
      }}
    >
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          flex: 1 / 3,
          marginBottom: 30,
        }}
      >
        <Text style={[styles.boldText1]}>BBK</Text>
        <Text style={styles.boldText2}>
          Proceed with your
          {"\n"}
          <Text style={styles.boldText1}>Login</Text>
        </Text>
      </View>
      <View
        style={
          {
            //   backgroundColor: "green",
          }
        }
      >
        <Text style={{}}>username</Text>
        <TextInput
          style={[styles.textStyles, { marginBottom: 20 }]}
          placeholder="Please provide your login username"
          onChangeText={(e) => handleUsername(e)}
        ></TextInput>
        <Text>password</Text>
        <TextInput
          style={[styles.textStyles, { marginBottom: 40 }]}
          placeholder="Please provide your password"
          // underlineColorAndroid="blue"
          onChangeText={handlePassword}
        ></TextInput>
        <Button
          title="SUBMIT"
          color="red"
          onPress={btnSuccessSubmit}
          disabled={btnIsDisabled === true ? true : false}
        ></Button>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            marginTop: 20,
            height: 30,
          }}
        >
          <Text
            style={styles.hyperlinkStyle}
            onPress={() => {
              Linking.openURL("https://techup.co.in");
            }}
          >
            Forgot password?
          </Text>
        </View>
      </View>

      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("PANRESPONDER")}
      ></Button>
    </View>
  );
};

let styles = StyleSheet.create({
  loginView: {
    marginTop:
      Platform.OS === "android" ? StatusBar.currentHeight : SafeAreaView,
    backgroundColor: "white",
  },
  textStyles: {
    height: 50,
    width: 300,
    // padding: 10,
    borderBottomColor: "grey",
    borderStartColor: "grey",
    borderStartWidth: 4,
    borderBottomWidth: 2,
    // bottom
    // backgroundColor: "grey",
    marginBottom: 5,
    shadowColor: "grey",
  },
  boldText1: {
    fontSize: 50,
    width: "100%",
  },
  boldText2: {
    fontSize: 30,
    width: "100%",
  },
  boldText3: {
    fontSize: 5,
  },
  specialViewText: {
    alignSelf: "flex-start",
  },
  hyperlinkStyle: {
    color: "blue",
    // backgroundColor: "red",
    // display: "flex",
    // alignItems: "center",
    // justifyContent: "center",
    width: "100%",
    // height: 50,
  },
});
