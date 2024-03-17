import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const [courseGoal, setCourseGoal] = useState([]);

  function goalInputHandle(goal) {
    setEnteredGoalText(goal);
  }

  function addGoalInputHandle() {
    setCourseGoal((currentCourseGoal) => [
      ...currentCourseGoal,
      enteredGoalText,
    ]);
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Add your goald"
          onChangeText={goalInputHandle}
          style={styles.textInput}
        />
        <View style={styles.buttonAdd}>
          <Button color="white" onPress={addGoalInputHandle} title="ADD GOAL" />
        </View>
      </View>
      <View style={styles.goalContent}>
        <ScrollView>
          {courseGoal.map((goal) => (
            <View key={goal} style={styles.goalItem}>
              <Text style={styles.goalText}>{goal}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "columna",
    justifyContent: "center",
    alingItem: "center",
    marginTop: 24,
    // backgroundColor: "red",
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
  goalContent: {
    flex: 5,
  },
  goalItem: {
    margin: 5,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#237586",
    // color: "white",
  },
  goalText: {
    color: "white",
  },
});
