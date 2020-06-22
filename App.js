import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  FlatList
} from "react-native";

import GoalItem from './components/Goalitems'
import GoalInput from './components/Goalinput'

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);


  const addGoal = goalTitle =>
    setCourseGoals(currentGoals => [...currentGoals, { id: Math.random().toString(), value: goalTitle}]);
  return (
    <View style={styles.screen}>
      <GoalInput addGoal={addGoal}/>
      <FlatList
        keyExtractor={(item,index) => item.id}
        data={courseGoals}
        renderItem={itemData => <GoalItem onDelete={() => console.log('e')} title={itemData.item.value} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
});
