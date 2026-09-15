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
const CARD_WIDTH = width * 0.6 + 20; // card width + margin

export default function CommitteeSection() {
  const scrollX = useRef(new Animated.Value(0)).current;
  const animation = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const members = [
    {
      name: "श्री. भागवत त्र्यंबक चौधरी",
      role: "संघटना अध्यक्ष",
      image: require("../assets/m1.jpeg"),
    },
    {
      name: "श्री. हेमंत श्रीरंग झोपे",
      role: "अध्यक्ष",
      image: require("../assets/m2.jpeg"),
    },
    {
      name: "श्री. सिताराम गणपत राणे",
      role: "कार्याध्यक्ष",
      image: require("../assets/m3.jpeg"),
    },
       {
      name: "श्री. संदीप नामदेव बन्हाटे",
      role: "सचिव",
      image: require("../assets/m4.jpeg"),
    },
       {
      name: "श्री. सुरेश पुंजा फेगडे",
      role: "खजिनदार",
      image: require("../assets/m5.jpeg"),
    },
       {
      name: "श्री. दिगंबर पंढरीनाथ महाजन",
      role: "उपाध्यक्ष",
      image: require("../assets/m6.jpeg"),
    },
       {
      name: "श्री. गिरीश सुभाष पाटील",
      role: "सह-खजिनदार",
      image: require("../assets/m7.jpeg"),
    },
           {
      name: "श्री. रघुनाथ शंकर फेगडे",
      role: "वधू-वर मेळावा व्यवस्थापक",
      image: require("../assets/m8.jpeg"),
    },
           {
      name: "श्री. योगेश भास्कर वायकोळे",
      role: "सदस्य",
      image: require("../assets/m9.jpeg"),
    },
  ];

  const totalWidth = CARD_WIDTH * members.length;

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
        duration: 20000, // bigger = slower
        useNativeDriver: true,
      })
    );
    animation.current.start();
  };

  const moveRight = () => {
    if (animation.current) animation.current.stop();

    const newIndex =
      currentIndex === members.length - 1 ? 0 : currentIndex + 1;

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
      currentIndex === 0 ? members.length - 1 : currentIndex - 1;

    setCurrentIndex(newIndex);

    Animated.timing(scrollX, {
      toValue: -CARD_WIDTH * newIndex,
      duration: 400,
      useNativeDriver: true,
    }).start(() => startAutoScroll());
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Committee Members</Text>

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
            {[...members, ...members].map((member, index) => (
              <View key={index} style={styles.card}>
                <Image source={member.image} style={styles.image} />
                <Text style={styles.name}>{member.name}</Text>
                <Text style={styles.role}>{member.role}</Text>
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
    paddingVertical: 20,
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
    width: width * 0.6,
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 15,
    marginHorizontal: 10,
    alignItems: "center",
    elevation: 4,
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 45,
    marginBottom: 10,
  },
  name: {
    fontWeight: "bold",
    textAlign: "center",
  },
  role: {
    color: "#666",
    marginTop: 3,
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