import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export type Task = {
  id: number;
  name: string;
  done: boolean;
};

type Props = {
  task: Task;
  onToggle: () => void;
  onDelete: () => void;
};

export default function TaskItem({ task, onToggle, onDelete }: Props) {
  return (
    <View style={styles.item}>
      <TouchableOpacity onPress={onToggle}>
        <Text style={{ fontSize: 18 }}>{task.done ? "✅" : "⬜"}</Text>
      </TouchableOpacity>
      <Text style={styles.name}>{task.name}</Text>
      <TouchableOpacity onPress={onDelete}>
        <Text style={{ color: "red", fontSize: 16 }}>🗑️</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderColor: "#eee",
  },
  name: { flex: 1, marginLeft: 10 },
});
