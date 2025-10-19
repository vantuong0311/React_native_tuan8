import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function AddScreen() {
  const [job, setJob] = useState("");
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ADD YOUR JOB</Text>
      <TextInput
        placeholder="Input your job"
        value={job}
        onChangeText={setJob}
        style={styles.input}
      />
      <TouchableOpacity style={styles.button} onPress={() => router.push("/home")}>
        <Text style={styles.buttonText}>FINISH →</Text>
      </TouchableOpacity>

      <Image
        source={{ uri: "https://cdn-icons-png.flaticon.com/512/2972/2972085.png" }}
        style={styles.image}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
  title: { fontSize: 26, fontWeight: "bold", marginBottom: 20 },
  input: {
    borderWidth: 1, borderColor: "#ccc", padding: 10, width: 220,
    borderRadius: 10, marginBottom: 20,
  },
  button: { backgroundColor: "#00BFFF", padding: 12, borderRadius: 10 },
  buttonText: { color: "white", fontWeight: "bold" },
  image: { width: 100, height: 100, marginTop: 20 },
});
