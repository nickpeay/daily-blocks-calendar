import React from "react";
import moment from "moment";
import { View, Text, StyleSheet } from "react-native";

const weekdayshort = moment.weekdaysShort();

function Calendar() {
  return (
    <View className="days" style={styles.days}>
      {weekdayshort.map((day) => {
        return (
          <Text key={day} style={styles.dayShort}>
            {day}
          </Text>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  days: {
    display: "flex",
    flexDirection: "row",
    alignItems: "stretch",
    justifyContent: "center",
  },
  dayShort: {
    width: "12%",
    color: "grey",
  },
});

export default Calendar;
