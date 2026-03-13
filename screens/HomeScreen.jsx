import {
  View,
  ScrollView,
  StyleSheet,
  Animated,
  TouchableOpacity,
  Text,
} from "react-native";
import { useState, useRef } from "react";
import { useNavigation } from "@react-navigation/native";

import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import ActionButtons from "../components/ActionButtons";
import AboutSection from "../components/AboutSection";
import EventsSection from "../components/EventsSection";
import CommitteeSection from "../components/CommitteeSection";
import Footer from "../components/Footer";

export default function HomeScreen() {
  const [menuOpen, setMenuOpen] = useState(false);
  const slideAnim = useRef(new Animated.Value(-260)).current;
  const navigation = useNavigation();

  const toggleMenu = () => {
    Animated.timing(slideAnim, {
      toValue: menuOpen ? -260 : 0,
      duration: 300,
      useNativeDriver: false,
    }).start();
    setMenuOpen(!menuOpen);
  };

  const handleNavigation = (screen) => {
    toggleMenu();
    navigation.navigate(screen);
  };

  return (
    <View style={{ flex: 1 }}>
      <Header onMenuPress={toggleMenu} />

      <Animated.View style={[styles.sideMenu, { left: slideAnim }]}>
        <Text style={styles.menuTitle}>Menu</Text>
        <Text style={styles.menuItem}>About Us</Text>
        <Text style={styles.menuItem}>Contact Us</Text>
        <Text style={styles.menuItem}>FAQ</Text>

        <TouchableOpacity onPress={() => handleNavigation("Login")}>
          <Text style={styles.menuItem}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handleNavigation("Registration")}>
          <Text style={[styles.menuItem, { color: "#fef08a" }]}>
            + New Registration
          </Text>
        </TouchableOpacity>
      </Animated.View>

      {menuOpen && (
        <TouchableOpacity style={styles.overlay} onPress={toggleMenu} />
      )}

      <ScrollView showsVerticalScrollIndicator={false}>
        <HeroSection />
        <ActionButtons />
        <AboutSection />
        <EventsSection />
        <CommitteeSection />
        <Footer />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  sideMenu: {
    position: "absolute",
    top: 90,
    width: 260,
    height: "100%",
    backgroundColor: "#f97316",
    padding: 20,
    zIndex: 1000,
  },
  menuTitle: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(255,255,255,0.4)",
    paddingBottom: 10,
  },
  menuItem: {
    color: "#fff",
    fontSize: 18,
    marginBottom: 20,
    fontWeight: "bold",
  },
  overlay: {
    position: "absolute",
    top: 90,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.4)",
    zIndex: 500,
  },
});
