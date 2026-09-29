
// screens/AboutScreen.js

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const COLORS = {
  red: '#9F0F3A',
  text: '#333',
};

const OFFERS = [
  'Guided multi-step candidate registration (English & Marathi).',
  'Mandal-verified and approved candidate profiles.',
  'Advanced search and shortlist tools for suitable matches.',
  'Grievance support for any profile corrections.',
];

function Section({ title, color, children }) {
  return (
    <View style={styles.section}>
      <View style={styles.sectionHead}>
        <Text style={[styles.sectionTitle, { color }]}>
          {title}
        </Text>

        <View
          style={[
            styles.sectionLine,
            { backgroundColor: color },
          ]}
        />
      </View>

      {children}
    </View>
  );
}

export default function AboutScreen() {
  const { width } = useWindowDimensions();
  const isTablet = width >= 768;

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.scrollContent}
      showsVerticalScrollIndicator={false}
    >
      <View
        style={[
          styles.page,
          isTablet && styles.tabletPage,
        ]}
      >

        {/* Page Title */}
        <View style={styles.titleWrap}>
          <View style={styles.heartCircle}>
            <Ionicons
              name="heart-outline"
              size={26}
              color="#fff"
            />
          </View>

          <Text style={styles.pageTitle}>
            About Us
          </Text>
        </View>

        {/* Main Card */}
        <View
          style={[
            styles.card,
            isTablet && styles.tabletCard,
          ]}
        >

          {/* Our Mission */}
          <Section
            title="Our Mission"
            color="#9F0F3A"
          >
            <Text style={styles.body}>
              Samta Bhatru Mandal is a community-driven
              matrimonial initiative dedicated to helping
              eligible candidates find suitable life partners
              within the community. We provide a safe,
              verified and structured platform for registration,
              search and matchmaking.
            </Text>
          </Section>

          {/* What We Offer */}
          <Section
            title="What We Offer"
            color="#5B21B6"
          >
            {OFFERS.map((offer, index) => (
              <View
                key={index}
                style={styles.bulletRow}
              >
                <Text style={styles.bullet}>
                  {'\u2022'}
                </Text>

                <Text
                  style={[
                    styles.body,
                    styles.bulletText,
                  ]}
                >
                  {offer}
                </Text>
              </View>
            ))}
          </Section>

          {/* Participating Mandals */}
          <Section
            title="Participating Mandals"
            color="#065F46"
          >
            <Text style={styles.body}>
              Multiple community mandals participate in this
              portal, each managing the registration and
              approval of its own candidates while sharing
              a common search platform.
            </Text>
          </Section>

        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },

  scrollContent: {
    flexGrow: 1,
  },

  page: {
    paddingHorizontal: 16,
    paddingVertical: 24,
    width: '100%',
  },

  tabletPage: {
    alignItems: 'center',
  },

  titleWrap: {
    alignItems: 'center',
    marginBottom: 20,
  },

  heartCircle: {
    width: 46,
    height: 46,
    borderRadius: 23,
    backgroundColor: COLORS.red,
    alignItems: 'center',
    justifyContent: 'center',
  },

  pageTitle: {
    marginTop: 10,
    fontSize: 28,
    fontWeight: '700',
    color: '#111',
  },

  card: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 18,
    borderWidth: 1,
    borderColor: '#F3E8E8',

    elevation: 2,

    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },

  tabletCard: {
    width: 640,
  },

  section: {
    marginBottom: 22,
  },

  sectionHead: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },

  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    marginRight: 10,
  },

  sectionLine: {
    flex: 1,
    height: 1,
    opacity: 0.25,
  },

  body: {
    fontSize: 14,
    lineHeight: 22,
    color: COLORS.text,
  },

  bulletRow: {
    flexDirection: 'row',
    marginBottom: 6,
    paddingRight: 4,
  },

  bullet: {
    width: 18,
    fontSize: 14,
    lineHeight: 22,
    color: COLORS.text,
  },

  bulletText: {
    flex: 1,
  },
});
