import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalImput from "./components/GoalInput";

export default function App() {
  const [courseGoal, setCourseGoal] = useState([]);

  function addGoalInputHandle(enteredGoalText) {
    setCourseGoal((currentCourseGoal) => [
      ...currentCourseGoal,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
  }

  return (
    <View style={styles.appContainer}>
      <GoalImput onAddGoal={addGoalInputHandle} />
      <View style={styles.goalContent}>
        <FlatList
          data={courseGoal}
          alwaysBounceVertical={false}
          renderItem={(itemData) => {
            return <GoalItem title={itemData.item.text} />;
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
  },
  goalContent: {
    flex: 5,
  },
});
