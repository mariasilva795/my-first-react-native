import { View, Text, StyleSheet } from "react-native";

function GoalItem({ title }) {
  return (
    <View style={styles.goalItem}>
      <Text style={styles.goalText}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
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

export default GoalItem;
