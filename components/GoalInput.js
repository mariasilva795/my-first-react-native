import { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

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
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Add your goald"
        onChangeText={goalInputHandle}
        style={styles.textInput}
        value={enteredGoalText}
      />
      <View style={styles.buttonAdd}>
        <Button color="white" onPress={addGoalInputHandle} title="ADD GOAL" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "columna",
    justifyContent: "center",
    alingItem: "center",
    marginTop: 24,
    borderBottomColor: "#cccccc",
    borderBottomWidth: 1,
  },
  textInput: {
    height: 50,
    borderWidth: 1,
    borderColor: "black",
    padding: 5,
  },
  buttonAdd: {
    marginTop: 10,
    backgroundColor: "#1b4b54",
  },
});

export default GoalImput;
