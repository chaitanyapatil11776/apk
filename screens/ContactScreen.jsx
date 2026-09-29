
// screens/ContactScreen.js

import React, { useState } from 'react';

import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Linking,
  Platform,
  StatusBar,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';


// ======================================================
// COLORS
// ======================================================

const COLORS = {
  red: '#ED1C24',
  orange: '#FF6A00',
  dark: '#111827',
  gray: '#6B7280',
  lightGray: '#F8F8F8',
  border: '#D9DDE3',
  white: '#FFFFFF',
  teal: '#253B3B',
};


// ======================================================
// NAVIGATION ITEMS
// ======================================================

const NAV_ITEMS = [
  { label: 'Home', route: 'Home' },
  { label: 'About Us', route: 'About' },
  { label: 'FAQ', route: 'FAQ' },
  { label: 'Contact', route: 'Contact' },
];


// ======================================================
// STATUS BAR
// ======================================================

const STATUS_BAR_HEIGHT =
  Platform.OS === 'android'
    ? StatusBar.currentHeight || 0
    : 0;


// ======================================================
// HEADER
// ======================================================

function Header({ navigation, activeRoute = 'Contact' }) {

  const [menuOpen, setMenuOpen] = useState(false);


  const go = (route) => {
    setMenuOpen(false);

    if (navigation) {
      navigation.navigate(route);
    }
  };


  return (
    <View style={styles.headerWrap}>

      {/* ==========================================
          HEADER ROW
      ========================================== */}

      <View style={styles.header}>

        {/* LOGO + BRAND */}
        <TouchableOpacity
          style={styles.brandContainer}
          onPress={() => go('Home')}
          activeOpacity={0.8}
        >

          <View style={styles.logoCircle}>
            <Ionicons
              name="people-outline"
              size={24}
              color={COLORS.orange}
            />
          </View>


          <View style={styles.brandText}>

            <Text
              style={styles.brandMarathi}
              numberOfLines={1}
            >
              समता भ्रातृ मंडळ
            </Text>


            <Text
              style={styles.brandSubtitle}
              numberOfLines={1}
            >
              पिंपरी चिंचवड, पुणे
            </Text>

          </View>

        </TouchableOpacity>


        {/* ==========================================
            HAMBURGER BUTTON
        ========================================== */}

        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => setMenuOpen(!menuOpen)}
          activeOpacity={0.7}
          accessibilityLabel={
            menuOpen
              ? 'Close menu'
              : 'Open menu'
          }
        >

          <Ionicons
            name={menuOpen ? 'close' : 'menu'}
            size={30}
            color={COLORS.dark}
          />

        </TouchableOpacity>

      </View>


      {/* ==========================================
          DROPDOWN MENU
      ========================================== */}

      {menuOpen && (

        <View style={styles.mobileMenu}>

          {/* HOME */}
          <TouchableOpacity
            style={[
              styles.mobileMenuItem,
              activeRoute === 'Home' &&
                styles.mobileMenuItemActive,
            ]}
            onPress={() => go('Home')}
          >

            <Text
              style={[
                styles.mobileMenuText,
                activeRoute === 'Home' &&
                  styles.mobileMenuTextActive,
              ]}
            >
              Home
            </Text>


            <Ionicons
              name="chevron-forward"
              size={18}
              color={
                activeRoute === 'Home'
                  ? '#FFFFFF'
                  : COLORS.dark
              }
            />

          </TouchableOpacity>


          {/* ABOUT US */}
          <TouchableOpacity
            style={[
              styles.mobileMenuItem,
              activeRoute === 'About' &&
                styles.mobileMenuItemActive,
            ]}
            onPress={() => go('About')}
          >

            <Text
              style={[
                styles.mobileMenuText,
                activeRoute === 'About' &&
                  styles.mobileMenuTextActive,
              ]}
            >
              About Us
            </Text>


            <Ionicons
              name="chevron-forward"
              size={18}
              color={
                activeRoute === 'About'
                  ? '#FFFFFF'
                  : COLORS.dark
              }
            />

          </TouchableOpacity>


          {/* FAQ */}
          <TouchableOpacity
            style={[
              styles.mobileMenuItem,
              activeRoute === 'FAQ' &&
                styles.mobileMenuItemActive,
            ]}
            onPress={() => go('FAQ')}
          >

            <Text
              style={[
                styles.mobileMenuText,
                activeRoute === 'FAQ' &&
                  styles.mobileMenuTextActive,
              ]}
            >
              FAQ
            </Text>


            <Ionicons
              name="chevron-forward"
              size={18}
              color={
                activeRoute === 'FAQ'
                  ? '#FFFFFF'
                  : COLORS.dark
              }
            />

          </TouchableOpacity>


          {/* CONTACT */}
          <TouchableOpacity
            style={[
              styles.mobileMenuItem,
              activeRoute === 'Contact' &&
                styles.mobileMenuItemActive,
            ]}
            onPress={() => go('Contact')}
          >

            <Text
              style={[
                styles.mobileMenuText,
                activeRoute === 'Contact' &&
                  styles.mobileMenuTextActive,
              ]}
            >
              Contact
            </Text>


            <Ionicons
              name="chevron-forward"
              size={18}
              color={
                activeRoute === 'Contact'
                  ? '#FFFFFF'
                  : COLORS.dark
              }
            />

          </TouchableOpacity>


          {/* ==========================================
              REGISTER + SIGN IN
          ========================================== */}

          <View style={styles.mobileAuthRow}>

            {/* REGISTER */}

            <TouchableOpacity
              style={[
                styles.mobileAuthButton,
                styles.mobileRegister,
              ]}
              onPress={() => go('Registration')}
            >

              <Text style={styles.registerText}>
                Register
              </Text>

            </TouchableOpacity>


            {/* SIGN IN */}

            <TouchableOpacity
              style={[
                styles.mobileAuthButton,
                styles.mobileLogin,
              ]}
              onPress={() => go('Login')}
            >

              <Ionicons
                name="log-in-outline"
                size={18}
                color="#FFFFFF"
              />

              <Text style={styles.loginText}>
                Sign In
              </Text>

            </TouchableOpacity>

          </View>

        </View>

      )}

    </View>
  );
}


// ======================================================
// CONTACT SCREEN
// ======================================================

export default function ContactScreen({ navigation }) {


  // ====================================================
  // PHONE
  // ====================================================

  const openPhone = () => {

    Linking.openURL(
      'tel:0207173733'
    );

  };


  // ====================================================
  // EMAIL
  // ====================================================

  const openEmail = () => {

    Linking.openURL(
      'mailto:samatabhatrumandal@gmail.com'
    );

  };


  // ====================================================
  // ADDRESS
  // ====================================================

  const openAddress = () => {

    Linking.openURL(
      'https://www.google.com/maps/search/?api=1&query=Trimurti+Society+Triveninagar+Nigdi+Pune+411062'
    );

  };


  return (

    <View style={styles.container}>

      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
        stickyHeaderIndices={[0]}
      >

        {/* ==========================================
            HEADER
        ========================================== */}

        <Header
          navigation={navigation}
          activeRoute="Contact"
        />


        {/* ==========================================
            CONTACT CONTENT
        ========================================== */}

        <View style={styles.contactContainer}>

          <Text style={styles.pageTitle}>
            Contact Us
          </Text>


          <View style={styles.cardsContainer}>

            {/* ======================================
                PHONE CARD
            ====================================== */}

            <TouchableOpacity
              style={styles.contactCard}
              onPress={openPhone}
              activeOpacity={0.8}
            >

              <View style={styles.iconBox}>

                <Ionicons
                  name="call-outline"
                  size={22}
                  color={COLORS.red}
                />

              </View>


              <Text style={styles.cardLabel}>
                HELPLINE
              </Text>


              <Text style={styles.cardValue}>
                0207173733
              </Text>

            </TouchableOpacity>


            {/* ======================================
                EMAIL CARD
            ====================================== */}

            <TouchableOpacity
              style={styles.contactCard}
              onPress={openEmail}
              activeOpacity={0.8}
            >

              <View style={styles.iconBox}>

                <Ionicons
                  name="mail-outline"
                  size={22}
                  color={COLORS.red}
                />

              </View>


              <Text style={styles.cardLabel}>
                EMAIL
              </Text>


              <Text style={styles.cardValue}>
                samatabhatrumandal@gmail.com
              </Text>

            </TouchableOpacity>


            {/* ======================================
                ADDRESS CARD
            ====================================== */}

            <TouchableOpacity
              style={styles.contactCard}
              onPress={openAddress}
              activeOpacity={0.8}
            >

              <View style={styles.iconBox}>

                <Ionicons
                  name="location-outline"
                  size={22}
                  color={COLORS.red}
                />

              </View>


              <Text style={styles.cardLabel}>
                ADDRESS
              </Text>


              <Text style={styles.cardValue}>
                Trimurti society,{'\n'}
                Triveninagar, Nigdi, Pune{'\n'}
                411062
              </Text>

            </TouchableOpacity>

          </View>

        </View>


        {/* ==========================================
            FOOTER
        ========================================== */}

        <View style={styles.footer}>

          {/* SOCIAL MEDIA */}

          <View style={styles.socialContainer}>

            <TouchableOpacity style={styles.socialButton}>
              <Ionicons
                name="logo-facebook"
                size={20}
                color="#1877F2"
              />
            </TouchableOpacity>


            <TouchableOpacity style={styles.socialButton}>
              <Ionicons
                name="logo-instagram"
                size={20}
                color="#E4405F"
              />
            </TouchableOpacity>


            <TouchableOpacity style={styles.socialButton}>
              <Ionicons
                name="logo-twitter"
                size={20}
                color="#1DA1F2"
              />
            </TouchableOpacity>


            <TouchableOpacity style={styles.socialButton}>
              <Ionicons
                name="logo-youtube"
                size={20}
                color="#FF0000"
              />
            </TouchableOpacity>

          </View>


          {/* ========================================
              FOOTER CONTENT
          ======================================== */}

          <View style={styles.footerContent}>

            {/* SUBSCRIBE */}

            <View style={styles.footerSection}>

              <Text style={styles.footerTitle}>
                Subscribe
              </Text>


              <Text style={styles.footerDescription}>
                Join our weekly email newsletter to
                receive news, events and other
                announcements.
              </Text>


              <View style={styles.subscribeRow}>

                <View style={styles.emailInput}>

                  <Text style={styles.placeholder}>
                    Enter Your Email
                  </Text>

                </View>


                <TouchableOpacity
                  style={styles.subscribeButton}
                >

                  <Text style={styles.subscribeText}>
                    Subscribe
                  </Text>

                </TouchableOpacity>

              </View>

            </View>


            {/* IMPORTANT LINKS */}

            <View style={styles.footerSection}>

              <Text style={styles.footerTitle}>
                Important Links
              </Text>


              {[
                'About Us',
                'Events',
                'Updates',
                'Matrimonial',
                'Gallery',
              ].map((item) => (

                <TouchableOpacity key={item}>

                  <Text style={styles.footerLink}>
                    {item}
                  </Text>

                </TouchableOpacity>

              ))}

            </View>


            {/* CONTACT */}

            <View style={styles.footerSection}>

              <Text style={styles.footerTitle}>
                Contact
              </Text>


              <Text style={styles.footerBold}>
                Samata Bhatru Mandal
              </Text>


              <Text style={styles.footerText}>
                (Pimpri Chinchwad)
              </Text>


              <Text style={styles.footerText}>
                Regd. Address: Trimurti society,
                Triveninagar, Nigdi, Pune 411062
              </Text>


              <Text style={styles.footerText}>
                Email: samatabhatrumandal@gmail.com
              </Text>


              <TouchableOpacity onPress={openPhone}>

                <Text style={styles.footerText}>
                  Phone no: 0207173733
                </Text>

              </TouchableOpacity>

            </View>

          </View>


          {/* COPYRIGHT */}

          <View style={styles.copyright}>

            <Text style={styles.copyrightText}>
              © 2026 Samata Bhatru Mandal.
              All Rights Reserved.
            </Text>

          </View>

        </View>

      </ScrollView>

    </View>

  );
}


// ======================================================
// STYLES
// ======================================================

const styles = StyleSheet.create({

  // ====================================================
  // MAIN
  // ====================================================

  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  content: {
    flexGrow: 1,
  },


  // ====================================================
  // HEADER
  // ====================================================

  headerWrap: {
    backgroundColor: '#FFFFFF',

    paddingTop: STATUS_BAR_HEIGHT,

    borderTopWidth: 3,
    borderTopColor: COLORS.teal,

    zIndex: 100,

    elevation: 5,

    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 4,

    shadowOffset: {
      width: 0,
      height: 2,
    },
  },


  header: {
    minHeight: 64,

    paddingHorizontal: 16,
    paddingVertical: 8,

    flexDirection: 'row',

    alignItems: 'center',

    justifyContent: 'space-between',
  },


  // ====================================================
  // BRAND
  // ====================================================

  brandContainer: {
    flexDirection: 'row',

    alignItems: 'center',

    flex: 1,

    marginRight: 10,
  },


  logoCircle: {
    width: 42,
    height: 42,

    borderRadius: 21,

    alignItems: 'center',
    justifyContent: 'center',

    marginRight: 10,

    backgroundColor: '#FFF5E8',
  },


  brandText: {
    flexShrink: 1,
  },


  brandMarathi: {
    fontSize: 17,

    fontWeight: '700',

    color: '#172033',
  },


  brandSubtitle: {
    fontSize: 11,

    color: COLORS.gray,

    marginTop: 2,
  },


  // ====================================================
  // HAMBURGER
  // ====================================================

  menuButton: {
    width: 46,
    height: 46,

    borderRadius: 8,

    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: '#FFFFFF',
  },


  // ====================================================
  // MOBILE MENU
  // ====================================================

  mobileMenu: {
    backgroundColor: '#FFFFFF',

    borderTopWidth: 1,

    borderTopColor: COLORS.border,

    paddingHorizontal: 12,

    paddingTop: 8,

    paddingBottom: 14,

    elevation: 5,

    shadowColor: '#000',

    shadowOpacity: 0.08,

    shadowRadius: 4,

    shadowOffset: {
      width: 0,
      height: 3,
    },
  },


  mobileMenuItem: {
    flexDirection: 'row',

    alignItems: 'center',

    justifyContent: 'space-between',

    minHeight: 48,

    paddingHorizontal: 12,

    borderRadius: 8,

    marginBottom: 2,
  },


  mobileMenuItemActive: {
    backgroundColor: COLORS.orange,
  },


  mobileMenuText: {
    fontSize: 15,

    fontWeight: '500',

    color: COLORS.dark,
  },


  mobileMenuTextActive: {
    color: '#FFFFFF',

    fontWeight: '700',
  },


  // ====================================================
  // AUTH BUTTONS
  // ====================================================

  mobileAuthRow: {
    flexDirection: 'row',

    marginTop: 10,

    paddingHorizontal: 4,
  },


  mobileAuthButton: {
    flex: 1,

    height: 46,

    borderRadius: 8,

    flexDirection: 'row',

    alignItems: 'center',

    justifyContent: 'center',
  },


  mobileRegister: {
    backgroundColor: COLORS.red,

    marginRight: 8,
  },


  mobileLogin: {
    backgroundColor: COLORS.dark,
  },


  registerText: {
    color: '#FFFFFF',

    fontSize: 13,

    fontWeight: '600',
  },


  loginText: {
    color: '#FFFFFF',

    fontSize: 13,

    fontWeight: '600',

    marginLeft: 6,
  },


  // ====================================================
  // CONTACT SECTION
  // ====================================================

  contactContainer: {
    paddingHorizontal: 16,

    paddingTop: 28,

    paddingBottom: 55,
  },


  pageTitle: {
    textAlign: 'center',

    fontSize: 26,

    fontWeight: '700',

    color: '#111827',

    marginBottom: 22,
  },


  cardsContainer: {
    width: '100%',
  },


  contactCard: {
    width: '100%',

    minHeight: 145,

    backgroundColor: '#FFFFFF',

    borderWidth: 1,

    borderColor: COLORS.border,

    borderRadius: 8,

    alignItems: 'center',

    justifyContent: 'center',

    paddingHorizontal: 15,

    paddingVertical: 18,

    marginBottom: 14,

    shadowColor: '#000',

    shadowOpacity: 0.08,

    shadowRadius: 5,

    shadowOffset: {
      width: 0,
      height: 2,
    },

    elevation: 2,
  },


  iconBox: {
    width: 36,
    height: 36,

    borderRadius: 9,

    backgroundColor: '#FFF0F1',

    alignItems: 'center',

    justifyContent: 'center',

    marginBottom: 8,
  },


  cardLabel: {
    fontSize: 10,

    color: '#8A8F98',

    letterSpacing: 0.4,

    marginBottom: 5,
  },


  cardValue: {
    fontSize: 13,

    color: '#111827',

    textAlign: 'center',

    lineHeight: 18,
  },


  // ====================================================
  // FOOTER
  // ====================================================

  footer: {
    backgroundColor: COLORS.orange,

    paddingHorizontal: 18,

    paddingTop: 25,

    paddingBottom: 15,
  },


  socialContainer: {
    flexDirection: 'row',

    justifyContent: 'center',

    alignItems: 'center',

    marginBottom: 28,
  },


  socialButton: {
    width: 38,
    height: 38,

    borderRadius: 19,

    backgroundColor: '#FFFFFF',

    alignItems: 'center',

    justifyContent: 'center',

    marginHorizontal: 5,

    elevation: 2,
  },


  // ====================================================
  // FOOTER CONTENT
  // ====================================================

  footerContent: {
    width: '100%',
  },


  footerSection: {
    marginBottom: 25,
  },


  footerTitle: {
    color: '#FFFFFF',

    fontSize: 16,

    fontWeight: '700',

    marginBottom: 10,
  },


  footerDescription: {
    color: '#FFFFFF',

    fontSize: 12,

    lineHeight: 18,

    marginBottom: 12,

    maxWidth: 330,
  },


  // ====================================================
  // SUBSCRIBE
  // ====================================================

  subscribeRow: {
    flexDirection: 'row',

    alignItems: 'center',

    width: '100%',
  },


  emailInput: {
    flex: 1,

    height: 40,

    backgroundColor: '#FFFFFF',

    borderRadius: 5,

    justifyContent: 'center',

    paddingHorizontal: 12,

    marginRight: 7,
  },


  placeholder: {
    color: '#9CA3AF',

    fontSize: 11,
  },


  subscribeButton: {
    height: 40,

    paddingHorizontal: 13,

    backgroundColor: '#D93617',

    borderRadius: 5,

    justifyContent: 'center',

    alignItems: 'center',
  },


  subscribeText: {
    color: '#FFFFFF',

    fontSize: 11,

    fontWeight: '600',
  },


  // ====================================================
  // FOOTER LINKS
  // ====================================================

  footerLink: {
    color: '#FFFFFF',

    fontSize: 12,

    marginBottom: 7,
  },


  footerBold: {
    color: '#FFFFFF',

    fontSize: 12,

    fontWeight: '700',

    marginBottom: 4,
  },


  footerText: {
    color: '#FFFFFF',

    fontSize: 11,

    lineHeight: 18,

    marginBottom: 4,
  },


  // ====================================================
  // COPYRIGHT
  // ====================================================

  copyright: {
    borderTopWidth: 1,

    borderTopColor:
      'rgba(255,255,255,0.25)',

    paddingTop: 12,

    marginTop: 3,
  },


  copyrightText: {
    color: '#FFFFFF',

    textAlign: 'center',

    fontSize: 10,
  },

})