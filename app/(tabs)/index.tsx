import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import "../../global.css"

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text className="text-blue-400 text-4xl">Code with me!</Text>
      <StatusBar style="auto"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  }
});
