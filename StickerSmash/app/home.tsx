import React, { useState } from "react";
import { View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import TaskItem, { Task } from "../components/TaskItem";

export default function HomeScreen() {
  const router = useRouter();
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, name: "To check email", done: true },
    { id: 2, name: "UI task web page", done: false },
    { id: 3, name: "Learn JavaScript basic", done: false },
  ]);
  const [search, setSearch] = useState("");

  const filtered = tasks.filter((t) =>
    t.name.toLowerCase().includes(search.toLowerCase())
  );

  const toggleTask = (id: number) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t))
    );
  };

  const deleteTask = (id: number) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hi Twinkle 👋</Text>
      <TextInput
        placeholder="Search"
        style={styles.search}
        value={search}
        onChangeText={setSearch}
      />
      <FlatList
        data={filtered}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TaskItem
            task={item}
            onToggle={() => toggleTask(item.id)}
            onDelete={() => deleteTask(item.id)}
          />
        )}
      />

      <TouchableOpacity style={styles.addButton} onPress={() => router.push("/add")}>
        <Text style={styles.addButtonText}>＋</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 20, fontWeight: "bold", marginBottom: 10 },
  search: {
    borderWidth: 1, borderColor: "#ccc", borderRadius: 10,
    padding: 8, marginBottom: 15,
  },
  addButton: {
    backgroundColor: "#00BFFF",
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginTop: 10,
  },
  addButtonText: { color: "white", fontSize: 28 },
});
