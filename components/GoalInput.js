import { useState } from "react";
import {
  Image,
  View,
  TextInput,
  Button,
  StyleSheet,
  Modal,
} from "react-native";

function GoalImput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  function goalInputHandle(goal) {
    setEnteredGoalText(goal);
  }

  function addGoalInputHandle() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText("");
  }
  return (
    <Modal visible={props.isVisible} animationType="slide">
      <View style={styles.inputContainer}>
        <View style={styles.imgContainer}>
          <Image
            style={styles.img}
            source={require("../assets/images/goal.png")}
            resizeMode="contain"
          ></Image>
        </View>

        <TextInput
          placeholder="Add your goald"
          onChangeText={goalInputHandle}
          style={styles.textInput}
          value={enteredGoalText}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.button}>
            <Button
              color="white"
              onPress={addGoalInputHandle}
              title="ADD GOAL"
            />
          </View>
          <View style={styles.button}>
            <Button color="white" onPress={props.onCancel} title="CANCEL" />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alingItem: "center",
    backgroundColor: "#385c63",
  },
  textInput: {
    height: 50,
    margin: 10,
    borderWidth: 1,
    borderColor: "black",
    padding: 5,
    color: "white",
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10,
  },
  button: {
    backgroundColor: "#1b4b54",
    marginLeft: 5,
    width: 160,
    marginHorizontal: 8,
  },
  imgContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    width: 100,
    height: 100,
  },
});

export default GoalImput;
