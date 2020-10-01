import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Icon } from "react-native-vector-icons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <Text>This is a new mobile app!</Text>
        <StatusBar style="auto" />
      </View>
      <View style={styles.bottomNav}>
        <FontAwesome5
          name="calendar-day"
          style={{ fontSize: 34, color: "green" }}
          solid
        />
        <FontAwesome5
          name="calendar-alt"
          style={{ fontSize: 34, color: "green" }}
          solid
        />
        <FontAwesome5
          name={"plus-circle"}
          style={{ fontSize: 34, color: "green" }}
          solid
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  bottomNav: {
    display: "flex",
    flexDirection: "row",
    height: "10%",
    backgroundColor: "#ececec",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: "10%",
    paddingRight: "10%",
  },
});
