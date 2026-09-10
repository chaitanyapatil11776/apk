import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Platform } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

const NAV_ITEMS = [
  { name: "Menu",    label: "Menu",    icon: "☰"  },
  { name: "Account", label: "Account", icon: "📋" },
  { name: "Profile", label: "Profile", icon: "👤" },
];

export default function BottomNavBar() {
  const navigation = useNavigation();
  const route      = useRoute();

  return (
    <View style={styles.container}>
      {NAV_ITEMS.map((item) => {
        const isActive = route.name === item.name;
        return (
          <TouchableOpacity
            key={item.name}
            style={styles.tab}
            onPress={() => navigation.navigate(item.name)}
            activeOpacity={0.7}
          >
            <View style={[styles.iconWrap, isActive && styles.iconWrapActive]}>
              <Text style={styles.icon}>{item.icon}</Text>
            </View>
            <Text style={[styles.label, isActive && styles.labelActive]}>
              {item.label}
            </Text>
            {isActive && <View style={styles.dot} />}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#ffe5d0",
    paddingBottom: Platform.OS === "ios" ? 24 : 10,
    paddingTop: 8,
    elevation: 16,
    shadowColor: "#f97316",
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  tab:            { flex: 1, alignItems: "center", paddingVertical: 4 },
  iconWrap:       { width: 46, height: 46, borderRadius: 23, alignItems: "center", justifyContent: "center", marginBottom: 2 },
  iconWrapActive: { backgroundColor: "#fff3ec", borderWidth: 1.5, borderColor: "#f97316" },
  icon:           { fontSize: 22 },
  label:          { fontSize: 11, color: "#bbb", fontWeight: "500" },
  labelActive:    { color: "#f97316", fontWeight: "700" },
  dot:            { width: 5, height: 5, borderRadius: 3, backgroundColor: "#f97316", marginTop: 2 },
});