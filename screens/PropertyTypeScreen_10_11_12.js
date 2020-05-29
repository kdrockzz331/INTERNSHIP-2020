import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Button,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
// import RadioForm, {
//   RadioButton,
//   RadioButtonInput,
//   RadioButtonLabel,
// } from "react-native-simple-radio-button";
import { RadioGroup } from "react-native-btr";

import Header from "../components/Header";
import Input1 from "../components/Input1";
import MainButton from "../components/MainButton.android";

const PropertyTypeScreen2 = (props) => {
  const [enteredValue, setEnteredValue] = useState("");

  const titleInputHandler = (title) => {
    setEnteredValue(title);
  };

  const [data, setData] = useState({
    radioButtons: [
      {
        label: "Owner",
        value: "Owner",
        checked: true,
        color: "#000",
        disabled: false,
        flexDirection: "row",
        size: 7,
      },

      {
        label: "Dealer",
        value: "Dealer",
        checked: false,
        color: "#000",
        disabled: false,
        flexDirection: "row",
        size: 7,
      },

      {
        label: "Builder",
        value: "Builder",
        checked: false,
        color: "#000",
        disabled: false,
        flexDirection: "row",
        size: 7,
      },
    ],
  });
  const [name, setName] = useState("nbd d");

  let selectedItem = data.radioButtons[0].value;
  function pressHandler() {
    let selectedItem = data.radioButtons.find((e) => e.checked == true);
    selectedItem = selectedItem
      ? selectedItem.value
      : data.radioButtons[0].value;
    setName(selectedItem);
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.screen}>
        <Header title="Property Type" />

        <View style={styles.selectButtons}>
          <RadioGroup
            style={styles.container}
            color="#0277BD"
            labelStyle={{ fontSize: 20 }}
            radioButtons={data.radioButtons}
            onPress={(radioButtons) => {
              setData({ radioButtons });
              pressHandler();
            }}
          />
        </View>
        <View style={styles.titleInput}>
          <Input1
            style={styles.input}
            placeholder={"Title"}
            onChangeText={titleInputHandler}
            value={enteredValue}
          />
        </View>
        <View style={styles.button}>
          <MainButton style={styles.buttonContainer} onPress={() => {}}>
            {"NEXT"}
          </MainButton>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  container: {
    flexDirection: "row",
  },
  selectButtons: {
    flex: 1,
    padding: "10%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  titleInput: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  input: {
    width: "80%",
  },
  buttonContainer: {
    alignItems: "center",
    justifyContent: "flex-start",
  },
  button: {
    flex: 1,
    justifyContent: "flex-start",
    marginLeft: "40%",
    marginRight: "10%",
    marginBottom: "30%",
  },
});

export default PropertyTypeScreen2;
