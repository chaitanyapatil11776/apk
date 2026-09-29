// screens/FAQScreen.js

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
  useWindowDimensions,
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
  white: '#FFFFFF',
  border: '#D9DDE3',

  questionBlue: '#C7DEFA',
  answerBg: '#FFFFFF',

  green: '#16A34A',
  teal: '#253B3B',
};


// ======================================================
// STATUS BAR
// ======================================================

const STATUS_BAR_HEIGHT =
  Platform.OS === 'android'
    ? StatusBar.currentHeight || 0
    : 0;


// ======================================================
// NAVIGATION
// ======================================================

const NAV_ITEMS = [
  {
    label: 'Home',
    route: 'Home',
  },
  {
    label: 'About Us',
    route: 'About',
  },
  {
    label: 'FAQ',
    route: 'FAQ',
  },
  {
    label: 'Contact',
    route: 'Contact',
  },
];


// ======================================================
// FAQ DATA
// ======================================================

const FAQ_DATA = [

  {
    id: 1,

    question:
      'Will my Profile be printed in this suchi?',

    answer:
      'If your profile is approved then it will be printed in current year suchi.',
  },


  {
    id: 2,

    question:
      'Whether candidate name not in suchi can attend the Melava ?',

    answer:
      'Anyone can come to Melava.',
  },


  {
    id: 3,

    question:
      'Is My Name printed in Vadhu-Var Suchi Booklet 2026?',

    answer:
      'YES, If you Send your Form for verification and it is Verified by Admin.',
  },


  {
    id: 4,

    question:
      'Whether Entry Fee is available for Mevala?',

    answer:
      'YES, You can pay the entry fee on the day of Melava by paying 150/- rupees per person or Advance online entry booking is also available at rupees 100/- per person as early bird discount.',

    buttonText:
      'Click Here to Pay वधू-वर मेळावा 2026 ऑनलाइन प्रवेश फी',

    buttonAction: 'payment',
  },


  {
    id: 5,

    question:
      'Whether the Vadhu-Var Suchi booklet is available at various distribution centres.',

    answer:
      'YES, (Click Here to see the list.) →',

    buttonText:
      'वधू-वर सुची मिळण्याचे केंद्र',

    buttonAction: 'distribution',
  },


  {
    id: 6,

    question:
      'Whether UPI payments are accepted for paying entry fee at gate?',

    answer:
      '',
  },


  {
    id: 7,

    question:
      'वधू-वर मेळावा 2026',

    type: 'event',

    event: {
      date: '08 नोव्हेंबर 2026',

      time: 'स. 9:00 ते सा. 5:00',

      location:
        'निगडी लॉन्स बँक्वेट, रावेत, पिंपरी-चिंचवड',

      contact:
        '0207173733',
    },
  },


  {
    id: 8,

    question:
      'Can I edit my profile after submitted for verification or Approved ?',

    answer:
      'NO, but you can raise a request from Correction in Suchi tab and we will edit for you.',
  },


  {
    id: 9,

    question:
      'Whether online profile search facility is available on Website ?',

    answer:
      'NOT on website but you can download our Android Application from Google Play Store (Name: Samata Bhatru Mandal). Click Here to See App Link →',

    buttonText:
      'Get it on Google Play',

    buttonAction: 'playstore',
  },


  {
    id: 10,

    question:
      'Whether hard copy booklet Suchi order by courier option is available ?',

    answer:
      'YES, Click here to order your hard copy booklet by online Link Click here :',

    buttonText:
      'वधू-वर 2026 साठी छापील मागवा (Courier)',

    buttonAction: 'courier',
  },

];


// ======================================================
// INSTRUCTIONS
// ======================================================

const INSTRUCTIONS = [
  'There is plenty of PARKING space at the venue. You can also choose public transport or a private taxi or Metro for reaching the venue.',

  'The entry fee is applicable per person. (For candidate and occupants)',

  'Once you enter the premises, Candidate MUST register at registration desk, and get the seat number and badge.',

  'Parents will also be provided the badge at the registration desk.',
];


// ======================================================
// HEADER
// ======================================================

function Header({
  navigation,
}) {

  const [menuOpen, setMenuOpen] = useState(false);


  const go = (route) => {

    setMenuOpen(false);

    navigation?.navigate(route);

  };


  return (
    <View style={styles.headerWrap}>

      {/* HEADER */}

      <View style={styles.header}>

        {/* BRAND */}

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


        {/* MENU */}

        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => setMenuOpen(!menuOpen)}
          activeOpacity={0.7}
        >

          <Ionicons
            name={
              menuOpen
                ? 'close'
                : 'menu'
            }
            size={30}
            color={COLORS.dark}
          />

        </TouchableOpacity>

      </View>


      {/* MOBILE MENU */}

      {menuOpen && (

        <View style={styles.mobileMenu}>

          {NAV_ITEMS.map((item) => (

            <TouchableOpacity
              key={item.route}
              style={[
                styles.mobileMenuItem,

                item.route === 'FAQ' &&
                  styles.mobileMenuItemActive,
              ]}
              onPress={() =>
                go(item.route)
              }
            >

              <Text
                style={[
                  styles.mobileMenuText,

                  item.route === 'FAQ' &&
                    styles.mobileMenuTextActive,
                ]}
              >
                {item.label}
              </Text>


              <Ionicons
                name="chevron-forward"
                size={18}
                color={
                  item.route === 'FAQ'
                    ? '#FFFFFF'
                    : COLORS.dark
                }
              />

            </TouchableOpacity>

          ))}


          {/* AUTH */}

          <View style={styles.mobileAuthRow}>

            <TouchableOpacity
              style={[
                styles.mobileAuthButton,
                styles.mobileRegister,
              ]}
              onPress={() =>
                go('Registration')
              }
            >

              <Text style={styles.registerText}>
                Register
              </Text>

            </TouchableOpacity>


            <TouchableOpacity
              style={[
                styles.mobileAuthButton,
                styles.mobileLogin,
              ]}
              onPress={() =>
                go('Login')
              }
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
// FAQ CARD
// ======================================================

function FAQCard({
  item,
  isOpen,
  onPress,
}) {

  return (

    <View
      style={[
        styles.faqCard,

        isOpen &&
          styles.faqCardOpen,
      ]}
    >

      {/* QUESTION */}

      <TouchableOpacity
        style={[
          styles.questionButton,

          isOpen &&
            styles.questionButtonOpen,
        ]}
        onPress={onPress}
        activeOpacity={0.8}
      >

        <Text
          style={styles.questionText}
        >
          {item.question}
        </Text>


        <Ionicons
          name={
            isOpen
              ? 'chevron-up'
              : 'chevron-down'
          }
          size={20}
          color="#075FEF"
        />

      </TouchableOpacity>


      {/* ANSWER */}

      {isOpen && (

        <View style={styles.answerContainer}>

          {/* EVENT */}

          {item.type === 'event' ? (

            <View style={styles.eventContainer}>

              <View style={styles.eventRow}>

                <Ionicons
                  name="calendar-outline"
                  size={20}
                  color="#075FEF"
                />

                <Text style={styles.eventText}>
                  तारीख: {item.event.date}
                </Text>

              </View>


              <View style={styles.eventRow}>

                <Ionicons
                  name="time-outline"
                  size={20}
                  color="#075FEF"
                />

                <Text style={styles.eventText}>
                  वेळ: {item.event.time}
                </Text>

              </View>


              <View style={styles.eventRow}>

                <Ionicons
                  name="location-outline"
                  size={20}
                  color="#075FEF"
                />

                <Text style={styles.eventText}>
                  स्थळ: {item.event.location}
                </Text>

              </View>


              <View style={styles.eventRow}>

                <Ionicons
                  name="call-outline"
                  size={20}
                  color="#075FEF"
                />

                <Text style={styles.eventText}>
                  संपर्क: {item.event.contact}
                </Text>

              </View>

            </View>

          ) : (

            <>
              {item.answer ? (

                <Text
                  style={styles.answerText}
                >
                  {item.answer}
                </Text>

              ) : null}


              {/* GREEN BUTTON */}

              {item.buttonText && (

                <TouchableOpacity
                  style={styles.greenButton}
                  onPress={() => {

                    if (
                      item.buttonAction ===
                      'payment'
                    ) {

                      Linking.openURL(
                        'https://www.google.com'
                      );

                    }


                    if (
                      item.buttonAction ===
                      'distribution'
                    ) {

                      Linking.openURL(
                        'https://www.google.com'
                      );

                    }


                    if (
                      item.buttonAction ===
                      'playstore'
                    ) {

                      Linking.openURL(
                        'https://play.google.com/store'
                      );

                    }


                    if (
                      item.buttonAction ===
                      'courier'
                    ) {

                      Linking.openURL(
                        'https://www.google.com'
                      );

                    }

                  }}
                  activeOpacity={0.8}
                >

                  <Text
                    style={
                      styles.greenButtonText
                    }
                  >
                    {item.buttonText}
                  </Text>


                  <Ionicons
                    name="open-outline"
                    size={15}
                    color="#FFFFFF"
                  />

                </TouchableOpacity>

              )}

            </>

          )}

        </View>

      )}

    </View>

  );
}


// ======================================================
// FAQ SCREEN
// ======================================================

export default function FAQScreen({
  navigation,
}) {

  const {
    width,
  } = useWindowDimensions();


  const isDesktop =
    width >= 768;


  const [
    openId,
    setOpenId,
  ] = useState(null);


  const toggleFAQ = (id) => {

    setOpenId(
      openId === id
        ? null
        : id
    );

  };


  return (

    <View style={styles.container}>

      <ScrollView
        style={styles.container}
        contentContainerStyle={
          styles.scrollContent
        }
        showsVerticalScrollIndicator={
          false
        }
        stickyHeaderIndices={[0]}
      >

        {/* HEADER */}

        <Header
          navigation={navigation}
        />


        {/* =========================================
            FAQ MAIN
        ========================================= */}

        <View
          style={[
            styles.mainContent,

            isDesktop &&
              styles.mainContentDesktop,
          ]}
        >

          {/* ICON */}

          <View style={styles.faqIconBox}>

            <Ionicons
              name="help-circle-outline"
              size={30}
              color="#075FEF"
            />

          </View>


          {/* TITLE */}

          <Text
            style={styles.pageTitle}
          >
            Frequently Asked Questions
          </Text>


          {/* FAQ GRID */}

          <View
            style={[
              styles.faqGrid,

              isDesktop &&
                styles.faqGridDesktop,
            ]}
          >

            {FAQ_DATA.map(
              (item) => (

                <View
                  key={item.id}
                  style={
                    isDesktop
                      ? styles.faqColumnItem
                      : styles.faqMobileItem
                  }
                >

                  <FAQCard
                    item={item}
                    isOpen={
                      openId === item.id
                    }
                    onPress={() =>
                      toggleFAQ(
                        item.id
                      )
                    }
                  />

                </View>

              )
            )}

          </View>


          {/* =======================================
              INSTRUCTIONS
          ======================================= */}

          <View
            style={styles.instructionsBox}
          >

            <Text
              style={
                styles.instructionsTitle
              }
            >
              INSTRUCTIONS:
            </Text>


            {INSTRUCTIONS.map(
              (text, index) => (

                <View
                  key={index}
                  style={
                    styles.instructionRow
                  }
                >

                  <Text
                    style={
                      styles.pointEmoji
                    }
                  >
                    👉
                  </Text>


                  <Text
                    style={
                      styles.instructionText
                    }
                  >
                    {text}
                  </Text>

                </View>

              )
            )}

          </View>

        </View>


        {/* =========================================
            FOOTER
        ========================================= */}

        <Footer
          navigation={navigation}
        />

      </ScrollView>

    </View>

  );
}


// ======================================================
// FOOTER
// ======================================================

function Footer({
  navigation,
}) {

  const openPhone = () => {

    Linking.openURL(
      'tel:0207173733'
    );

  };


  const openEmail = () => {

    Linking.openURL(
      'mailto:samatabhatrumandal@gmail.com'
    );

  };


  return (

    <View style={styles.footer}>

      {/* SOCIAL */}

      <View
        style={styles.socialContainer}
      >

        <TouchableOpacity
          style={styles.socialButton}
        >
          <Ionicons
            name="logo-facebook"
            size={20}
            color="#1877F2"
          />
        </TouchableOpacity>


        <TouchableOpacity
          style={styles.socialButton}
        >
          <Ionicons
            name="logo-instagram"
            size={20}
            color="#E4405F"
          />
        </TouchableOpacity>


        <TouchableOpacity
          style={styles.socialButton}
        >
          <Ionicons
            name="logo-twitter"
            size={20}
            color="#1DA1F2"
          />
        </TouchableOpacity>


        <TouchableOpacity
          style={styles.socialButton}
        >
          <Ionicons
            name="logo-youtube"
            size={20}
            color="#FF0000"
          />
        </TouchableOpacity>

      </View>


      {/* FOOTER COLUMNS */}

      <View style={styles.footerContent}>

        {/* SUBSCRIBE */}

        <View
          style={styles.footerSection}
        >

          <Text
            style={styles.footerTitle}
          >
            Subscribe
          </Text>


          <Text
            style={styles.footerDescription}
          >
            Join our weekly email newsletter
            to receive news, events and other
            announcements about what is
            going on at our end.
          </Text>


          <View
            style={styles.subscribeRow}
          >

            <View
              style={styles.emailInput}
            >

              <Text
                style={styles.placeholder}
              >
                Enter Your Email
              </Text>

            </View>


            <TouchableOpacity
              style={
                styles.subscribeButton
              }
            >

              <Text
                style={
                  styles.subscribeText
                }
              >
                Subscribe
              </Text>

            </TouchableOpacity>

          </View>

        </View>


        {/* LINKS */}

        <View
          style={styles.footerSection}
        >

          <Text
            style={styles.footerTitle}
          >
            Important Links
          </Text>


          <TouchableOpacity
            onPress={() =>
              navigation?.navigate(
                'About'
              )
            }
          >
            <Text
              style={styles.footerLink}
            >
              About Us
            </Text>
          </TouchableOpacity>


          <TouchableOpacity>
            <Text
              style={styles.footerLink}
            >
              Events
            </Text>
          </TouchableOpacity>


          <TouchableOpacity>
            <Text
              style={styles.footerLink}
            >
              Updates
            </Text>
          </TouchableOpacity>


          <TouchableOpacity>
            <Text
              style={styles.footerLink}
            >
              Matrimonial
            </Text>
          </TouchableOpacity>


          <TouchableOpacity>
            <Text
              style={styles.footerLink}
            >
              Gallery
            </Text>
          </TouchableOpacity>

        </View>


        {/* CONTACT */}

        <View
          style={styles.footerSection}
        >

          <Text
            style={styles.footerTitle}
          >
            Contact
          </Text>


          <Text
            style={styles.footerBold}
          >
            Samata Bhatru Mandal
          </Text>


          <Text
            style={styles.footerText}
          >
            (Pimpri Chinchwad)
          </Text>


          <Text
            style={styles.footerText}
          >
            Regd. Address: Trimurti society,
            Triveninagar, Nigdi, Pune 411062
          </Text>


          <TouchableOpacity
            onPress={openEmail}
          >
            <Text
              style={styles.footerText}
            >
              Email:
              {' '}
              samatabhatrumandal@gmail.com
            </Text>
          </TouchableOpacity>


          <TouchableOpacity
            onPress={openPhone}
          >
            <Text
              style={styles.footerText}
            >
              Phone no: 0207173733
            </Text>
          </TouchableOpacity>

        </View>

      </View>


      {/* COPYRIGHT */}

      <View
        style={styles.copyright}
      >

        <Text
          style={styles.copyrightText}
        >
          © 2026 Samata Bhatru Mandal.
          All Rights Reserved.
        </Text>

      </View>

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

  scrollContent: {
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
  // FAQ MAIN
  // ====================================================

  mainContent: {
    width: '100%',

    paddingHorizontal: 16,

    paddingTop: 30,

    paddingBottom: 45,

    alignItems: 'center',
  },


  mainContentDesktop: {
    paddingHorizontal: 30,

    paddingTop: 40,
  },


  // ====================================================
  // FAQ ICON
  // ====================================================

  faqIconBox: {
    width: 50,
    height: 50,

    borderRadius: 12,

    backgroundColor: '#DCEAFF',

    alignItems: 'center',

    justifyContent: 'center',

    marginBottom: 12,
  },


  // ====================================================
  // TITLE
  // ====================================================

  pageTitle: {
    fontSize: 28,

    fontWeight: '700',

    color: '#111827',

    textAlign: 'center',

    marginBottom: 35,
  },


  // ====================================================
  // FAQ GRID
  // ====================================================

  faqGrid: {
    width: '100%',
  },


  faqGridDesktop: {
    maxWidth: 950,

    flexDirection: 'row',

    flexWrap: 'wrap',

    justifyContent: 'space-between',

    alignItems: 'flex-start',
  },


  faqColumnItem: {
    width: '48.5%',

    marginBottom: 20,
  },


  faqMobileItem: {
    width: '100%',

    marginBottom: 14,
  },


  // ====================================================
  // FAQ CARD
  // ====================================================

  faqCard: {
    width: '100%',

    borderRadius: 12,

    overflow: 'hidden',

    backgroundColor: '#FFFFFF',

    shadowColor: '#000',

    shadowOpacity: 0.08,

    shadowRadius: 4,

    shadowOffset: {
      width: 0,
      height: 2,
    },

    elevation: 2,
  },


  faqCardOpen: {
    borderWidth: 1,

    borderColor: '#D7DEE8',
  },


  // ====================================================
  // QUESTION
  // ====================================================

  questionButton: {
    minHeight: 52,

    backgroundColor: COLORS.questionBlue,

    paddingHorizontal: 18,

    paddingVertical: 12,

    flexDirection: 'row',

    alignItems: 'center',

    justifyContent: 'space-between',
  },


  questionButtonOpen: {
    borderBottomWidth: 1,

    borderBottomColor: '#B9CDE5',
  },


  questionText: {
    flex: 1,

    paddingRight: 12,

    fontSize: 13,

    lineHeight: 18,

    fontWeight: '600',

    color: '#111827',
  },


  // ====================================================
  // ANSWER
  // ====================================================

  answerContainer: {
    backgroundColor: '#FFFFFF',

    paddingHorizontal: 18,

    paddingVertical: 16,
  },


  answerText: {
    fontSize: 13,

    lineHeight: 21,

    color: '#374151',

    marginBottom: 10,
  },


  // ====================================================
  // GREEN BUTTON
  // ====================================================

  greenButton: {
    minHeight: 40,

    backgroundColor: '#16A34A',

    borderRadius: 8,

    paddingHorizontal: 14,

    paddingVertical: 8,

    flexDirection: 'row',

    alignItems: 'center',

    justifyContent: 'center',

    marginTop: 8,
  },


  greenButtonText: {
    color: '#FFFFFF',

    fontSize: 12,

    fontWeight: '700',

    textAlign: 'center',

    marginRight: 7,
  },


  // ====================================================
  // EVENT
  // ====================================================

  eventContainer: {
    width: '100%',
  },


  eventRow: {
    flexDirection: 'row',

    alignItems: 'center',

    marginBottom: 12,
  },


  eventText: {
    fontSize: 13,

    color: '#111827',

    marginLeft: 10,

    flex: 1,
  },


  // ====================================================
  // INSTRUCTIONS
  // ====================================================

  instructionsBox: {
    width: '100%',

    maxWidth: 950,

    marginTop: 20,

    backgroundColor: '#F8FAFC',

    borderWidth: 1,

    borderColor: '#DCE3EA',

    borderRadius: 12,

    paddingHorizontal: 22,

    paddingVertical: 22,
  },


  instructionsTitle: {
    fontSize: 16,

    fontWeight: '800',

    color: '#111827',

    marginBottom: 15,
  },


  instructionRow: {
    flexDirection: 'row',

    alignItems: 'flex-start',

    marginBottom: 10,
  },


  pointEmoji: {
    fontSize: 14,

    marginRight: 10,
  },


  instructionText: {
    flex: 1,

    fontSize: 12,

    lineHeight: 19,

    color: '#374151',
  },


  // ====================================================
  // FOOTER
  // ====================================================

  footer: {
    backgroundColor: COLORS.orange,

    paddingHorizontal: 20,

    paddingTop: 28,

    paddingBottom: 18,
  },


  socialContainer: {
    flexDirection: 'row',

    justifyContent: 'center',

    alignItems: 'center',

    marginBottom: 30,
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


  footerContent: {
    width: '100%',

    maxWidth: 1100,

    alignSelf: 'center',
  },


  footerSection: {
    marginBottom: 28,
  },


  footerTitle: {
    color: '#FFFFFF',

    fontSize: 17,

    fontWeight: '700',

    marginBottom: 10,
  },


  footerDescription: {
    color: '#FFFFFF',

    fontSize: 12,

    lineHeight: 19,

    marginBottom: 12,

    maxWidth: 360,
  },


  subscribeRow: {
    flexDirection: 'row',

    alignItems: 'center',

    maxWidth: 380,
  },


  emailInput: {
    flex: 1,

    height: 42,

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
    height: 42,

    paddingHorizontal: 15,

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


  footerLink: {
    color: '#FFFFFF',

    fontSize: 12,

    marginBottom: 8,
  },


  footerBold: {
    color: '#FFFFFF',

    fontSize: 12,

    fontWeight: '700',

    marginBottom: 5,
  },


  footerText: {
    color: '#FFFFFF',

    fontSize: 11,

    lineHeight: 18,

    marginBottom: 4,
  },


  copyright: {
    borderTopWidth: 1,

    borderTopColor:
      'rgba(255,255,255,0.25)',

    paddingTop: 12,

    marginTop: 5,
  },


  copyrightText: {
    color: '#FFFFFF',

    textAlign: 'center',

    fontSize: 10,
  },

});