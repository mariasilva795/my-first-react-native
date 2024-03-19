import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, FlatList, StyleSheet, View } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalImput from "./components/GoalInput";

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [courseGoal, setCourseGoal] = useState([]);

  function startAddGoalHandle() {
    setModalIsVisible(true);
  }

  function endAddGoalHandle() {
    setModalIsVisible(false);
  }

  function addGoalInputHandle(enteredGoalText) {
    setCourseGoal((currentCourseGoal) => [
      ...currentCourseGoal,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
    endAddGoalHandle();
  }

  function deleteGoalHandle(id) {
    setCourseGoal((currentCourseGoal) => {
      return currentCourseGoal.filter((goal) => goal.id !== id);
    });
  }

  return (
    <View style={styles.appContainer}>
      <Button
        title="ADD YOUR GOAL"
        color="white"
        onPress={startAddGoalHandle}
      />
      <GoalImput
        isVisible={modalIsVisible}
        onAddGoal={addGoalInputHandle}
        onPress={endAddGoalHandle}
        onCancel={endAddGoalHandle}
      />
      <View style={styles.goalContent}>
        <FlatList
          data={courseGoal}
          alwaysBounceVertical={false}
          renderItem={(itemData) => {
            return (
              <GoalItem
                id={itemData.item.id}
                title={itemData.item.text}
                onDeleteItem={deleteGoalHandle}
              />
            );
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
        ></FlatList>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: "#385c63",
  },
  goalContent: {
    flex: 5,
  },
  buttonAddGoal: {
    backgroundColor: "red",
  },
});
