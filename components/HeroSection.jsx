import { Image, StyleSheet } from "react-native";

export default function HeroSection() {
  return (
    <Image
      source={require("../assets/hero.png")}
      style={styles.image}
      resizeMode="cover"
    />
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 230,
  },
});
