import React from "react";

import {
  View,
  Text,
  StyleSheet,
} from "react-native";

export default function RedPage2() {
  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        Red Page 2
      </Text>

      <Text style={styles.description}>
        This is the second red section.
      </Text>

    </View>
  );
}


const styles = StyleSheet.create({

  container: {
    flex: 1,

    backgroundColor: "#fff",

    justifyContent: "center",

    alignItems: "center",

    padding: 20,
  },


  title: {
    fontSize: 28,

    fontWeight: "bold",

    color: "#ef4444",

    marginBottom: 15,
  },


  description: {
    fontSize: 16,

    color: "#555",

    textAlign: "center",
  },

});