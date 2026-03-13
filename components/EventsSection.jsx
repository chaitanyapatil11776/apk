import React, { useRef, useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Animated,
  Dimensions,
  TouchableOpacity,
} from "react-native";

const { width } = Dimensions.get("window");
const CARD_WIDTH = width * 0.75 + 20; // card width + margin

export default function EventsSection() {
  const scrollX = useRef(new Animated.Value(0)).current;
  const animation = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const events = [
    {
      title: "विद्यार्थी गुणगौरव सोहळा",
      image: require("../assets/event1.png"),
    },
    {
      title: "वधू-वर मेळावा 2025",
      image: require("../assets/event2.png"),
    },
    {
      title: "वार्षिक स्नेह मेळावा",
      image: require("../assets/event3.png"),
    },
  ];

  const totalWidth = CARD_WIDTH * events.length;

  // 🔥 Start Auto Scroll
  useEffect(() => {
    startAutoScroll();
    return () => {
      if (animation.current) animation.current.stop();
    };
  }, []);

  const startAutoScroll = () => {
    animation.current = Animated.loop(
      Animated.timing(scrollX, {
        toValue: -totalWidth,
        duration: 15000, // bigger = slower
        useNativeDriver: true,
      })
    );
    animation.current.start();
  };

  const moveRight = () => {
    if (animation.current) animation.current.stop();

    const newIndex =
      currentIndex === events.length - 1 ? 0 : currentIndex + 1;

    setCurrentIndex(newIndex);

    Animated.timing(scrollX, {
      toValue: -CARD_WIDTH * newIndex,
      duration: 400,
      useNativeDriver: true,
    }).start(() => startAutoScroll());
  };

  const moveLeft = () => {
    if (animation.current) animation.current.stop();

    const newIndex =
      currentIndex === 0 ? events.length - 1 : currentIndex - 1;

    setCurrentIndex(newIndex);

    Animated.timing(scrollX, {
      toValue: -CARD_WIDTH * newIndex,
      duration: 400,
      useNativeDriver: true,
    }).start(() => startAutoScroll());
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>What's Happening</Text>

      <View style={styles.wrapper}>
        {/* Left Button */}
        <TouchableOpacity style={styles.leftBtn} onPress={moveLeft}>
          <Text style={styles.btnText}>◀</Text>
        </TouchableOpacity>

        {/* Cards */}
        <View style={{ width: CARD_WIDTH, overflow: "hidden" }}>
          <Animated.View
            style={[
              styles.row,
              { transform: [{ translateX: scrollX }] },
            ]}
          >
            {[...events, ...events].map((event, index) => (
              <View key={index} style={styles.card}>
                <Image source={event.image} style={styles.image} />
                <Text style={styles.title}>{event.title}</Text>
              </View>
            ))}
          </Animated.View>
        </View>

        {/* Right Button */}
        <TouchableOpacity style={styles.rightBtn} onPress={moveRight}>
          <Text style={styles.btnText}>▶</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 15,
    marginBottom: 10,
  },
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  row: {
    flexDirection: "row",
  },
  card: {
    width: width * 0.75,
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 10,
    marginHorizontal: 10,
    elevation: 5,
  },
  image: {
    width: "100%",
    height: 150,
    borderRadius: 12,
  },
  title: {
    fontWeight: "bold",
    marginTop: 8,
    fontSize: 15,
  },
  leftBtn: {
    position: "absolute",
    left: 0,
    zIndex: 10,
    padding: 10,
  },
  rightBtn: {
    position: "absolute",
    right: 0,
    zIndex: 10,
    padding: 10,
  },
  btnText: {
    fontSize: 22,
    fontWeight: "bold",
  },
});