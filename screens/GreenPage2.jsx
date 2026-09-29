import React, { useMemo, useState } from 'react';
import {
  FlatList,
  Linking,
  Platform,
  Pressable,
  SafeAreaView,
  SectionList,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

// ---------- DATA ----------
const SECTIONS = [
  {
    title: 'मुंबई / नवी मुंबई',
    data: [
      { name: 'मंगल मेडिकल डोंबिवली', phones: ['9702869696'] },
      { name: 'कावरे आईस्क्रीम लेवा भवनच्या बाजूला (श्री प्रमोद पाटील)', phones: ['9769846906'] },
      { name: 'हितेंद्र पाटील (एरोली नवी मुंबई)', phones: ['9224735899'] },
    ],
  },
  {
    title: 'नाशिक',
    data: [
      { name: 'संजय फेगडे, नाशिक रोड', phones: ['8275053482'] },
      { name: 'दिलीप चौधरी, पवननगर', phones: ['9049178459'] },
    ],
  },
  {
    title: 'जळगाव',
    data: [{ name: 'संचाली कॉम्प्युटर्स (तुषार नेहेते)', phones: ['9665859734'] }],
  },
  {
    title: 'भुसावळ',
    data: [
      { name: 'पुरुषोत्तम जनरल स्टोअर (मनोज जावळे)', phones: ['9270301337'] },
      { name: 'महालक्ष्मी सिस्टीम (मामाजी टॉकीज रोड)', phones: [] },
      { name: 'श्री. किशोर पाचपांडे', phones: ['7798400402'] },
      { name: 'श्री सी. एल. नारखेडे सर (गणेश विहार रिंग रोड)', phones: ['9850751370'] },
    ],
  },
  {
    title: 'वरणगाव',
    data: [
      { name: 'भूषण जावळे', phones: ['8600757222'] },
      { name: 'राजन मेडिकल (निळकंठ सरोदे)', phones: ['9923181403'] },
    ],
  },
  {
    title: 'मुक्ताईनगर',
    data: [{ name: 'संग्राम पाटील', phones: ['9423940130'] }],
  },
  {
    title: 'फैजपूर / सावदा',
    data: [
      { name: 'गायत्री ट्रॅव्हल्स, (श्री गाजरे) फैजपूर', phones: ['9423579470'] },
      { name: 'महेंद्र वसंत बेंडाळे (हरेब कलेक्शन, सावदा)', phones: ['9767478701'] },
    ],
  },
  {
    title: 'पुणे',
    data: [
      { name: 'मुरलीधर खडसे, वाघोली', phones: ['9922925756'] },
      { name: 'एम. झेड. चौधरी, औंध', phones: ['9922688362'] },
    ],
  },
  {
    title: 'पिंपरी चिंचवड',
    data: [
      { name: 'श्री इलेक्ट्रिकल्स (शुभम तळले) सांगवी', phones: ['8975020905'] },
      { name: 'युक्ता ट्रॅव्हल्स (पल्लवी चौधरी) सांगवी', phones: ['8793604040'] },
      { name: 'आर्या मेडिकल (चिंचवडगाव)', phones: ['8830357928'] },
      { name: 'मंगळे सर (चिंचवड)', phones: ['9423559341'] },
      { name: 'सिताराम राणे', phones: ['9689936110'] },
      { name: 'ओम साई ट्रॅव्हल्स, संभाजीनगर', phones: ['9975122661', '9423578167'] },
      { name: 'मुक्ताई मेडिकल, शाहूनगर लिंक रोड', phones: ['7776018955'] },
      { name: 'हिमांशू ट्रेडर्स, संभाजीनगर', phones: ['8856992971', '8459329099'] },
      { name: 'अश्विनी मेडिकल, वाल्हेकरवाडी', phones: ['9860862956'] },
      { name: 'निलेश मेडिकल, लोकमान्य हॉस्पिटल, प्राधिकरण', phones: ['020-27651525'] },
      { name: 'रमेश इंगळे, वाल्हेकरवाडी', phones: ['9860042627'] },
      { name: 'खान्देश मार्ट, वाल्हेकरवाडी (राकेश कोल्हे)', phones: ['9970065076', '9561720553'] },
      { name: 'खान्देश मॉल (चिंतामणी चौक)', phones: ['8585857099'] },
      { name: 'रवींद्र बऱ्हाटे (साने चौक, चिखली रोड)', phones: ['9850035117'] },
      { name: 'रघुनाथ फेगडे, जिजामाता पार्क चिंचवड', phones: ['9922020700'] },
      { name: 'गिरीश पाटील (शरद नगर)', phones: ['9421904620'] },
      { name: 'दिगंबर महाजन, आकुर्डी', phones: ['9049980263'] },
      { name: 'सुरेश फेगडे, शाहूनगर', phones: ['9922961939'] },
      { name: 'हेमंत झोपे, शाहूनगर', phones: ['9822390960'] },
      { name: 'श्री मेडिकल, चंद्रभागा कॉर्नर, रावेत', phones: ['7276590806'] },
      { name: 'सारंग चौधरी, रावेत', phones: ['9850910515'] },
      { name: 'रजत चूडामण नारखेडे, भोसरी', phones: ['7972498785'] },
      { name: 'वसंत इंगळे (आळंदी देवाची)', phones: ['8329875794'] },
      { name: 'गणेश वारके (गुडविल क्लासेस), भोसरी आळंदी रोड', phones: ['9850797151'] },
    ],
  },
];

// ---------- THEME ----------
const RED = '#D91E25';
const CREAM = '#FFF6CC';
const YELLOW = '#FFE500';
const INK = '#1B1B1B';
const MUTED = '#6B6B6B';

const callNumber = (num) => Linking.openURL(`tel:${num.replace(/[^0-9+]/g, '')}`);

// ---------- COMPONENTS ----------
const Chip = ({ label, active, onPress }) => (
  <Pressable
    onPress={onPress}
    style={[styles.chip, active && styles.chipActive]}
    accessibilityRole="button"
    accessibilityState={{ selected: active }}
  >
    <Text style={[styles.chipText, active && styles.chipTextActive]}>{label}</Text>
  </Pressable>
);

const CallButton = ({ number }) => (
  <Pressable
    onPress={() => callNumber(number)}
    android_ripple={{ color: '#ffffff55' }}
    style={({ pressed }) => [styles.callBtn, pressed && { opacity: 0.8 }]}
    accessibilityRole="button"
    accessibilityLabel={`Call ${number}`}
  >
    <Text style={styles.callIcon}>📞</Text>
    <Text style={styles.callText}>{number}</Text>
  </Pressable>
);

const Card = ({ item }) => (
  <View style={styles.card}>
    <Text style={styles.name}>{item.name}</Text>
    {item.phones.length > 0 ? (
      <View style={styles.callRow}>
        {item.phones.map((p) => (
          <CallButton key={p} number={p} />
        ))}
      </View>
    ) : (
      <Text style={styles.noPhone}>मोबाईल क्रमांक उपलब्ध नाही</Text>
    )}
  </View>
);

export default function DirectoryScreen() {
  const [query, setQuery] = useState('');
  const [city, setCity] = useState(null); // null = all

  const sections = useMemo(() => {
    const q = query.trim().toLowerCase();
    return SECTIONS.filter((s) => !city || s.title === city)
      .map((s) => ({
        ...s,
        data: s.data.filter(
          (i) =>
            !q ||
            i.name.toLowerCase().includes(q) ||
            i.phones.some((p) => p.includes(q))
        ),
      }))
      .filter((s) => s.data.length > 0);
  }, [query, city]);

  const total = sections.reduce((n, s) => n + s.data.length, 0);

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="light-content" backgroundColor={RED} />

      {/* Fixed header */}
      <View style={styles.header}>
        <View style={styles.titlePill}>
          <Text style={styles.titleText}>सुची मिळण्याचे ठिकाण</Text>
        </View>

        <View style={styles.searchBox}>
          <Text style={styles.searchIcon}>🔍</Text>
          <TextInput
            value={query}
            onChangeText={setQuery}
            placeholder="नाव, गाव किंवा नंबर शोधा"
            placeholderTextColor={MUTED}
            style={styles.searchInput}
            returnKeyType="search"
            clearButtonMode="while-editing"
            autoCorrect={false}
          />
          {query.length > 0 && Platform.OS === 'android' && (
            <Pressable onPress={() => setQuery('')} hitSlop={12}>
              <Text style={styles.clear}>✕</Text>
            </Pressable>
          )}
        </View>
      </View>

      {/* City filter chips */}
      <View style={styles.chipBar}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={[null, ...SECTIONS.map((s) => s.title)]}
          keyExtractor={(t) => t || 'all'}
          contentContainerStyle={styles.chipList}
          renderItem={({ item: t }) => (
            <Chip
              label={t || 'सर्व'}
              active={city === t}
              onPress={() => setCity(t)}
            />
          )}
        />
      </View>

      <SectionList
        sections={sections}
        keyExtractor={(item, i) => item.name + i}
        renderItem={({ item }) => <Card item={item} />}
        renderSectionHeader={({ section }) => (
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>{section.title}</Text>
            <Text style={styles.sectionCount}>{section.data.length}</Text>
          </View>
        )}
        stickySectionHeadersEnabled
        keyboardShouldPersistTaps="handled"
        keyboardDismissMode="on-drag"
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <Text style={styles.empty}>काही सापडले नाही. दुसरा शब्द वापरून पहा.</Text>
        }
        ListFooterComponent={
          total > 0 ? <Text style={styles.footer}>एकूण {total} ठिकाणे • पान 307</Text> : null
        }
      />
    </SafeAreaView>
  );
}

// ---------- STYLES ----------
const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: CREAM },

  header: {
    backgroundColor: RED,
    paddingTop: Platform.OS === 'android' ? (StatusBar.currentHeight || 0) + 8 : 8,
    paddingBottom: 14,
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  titlePill: {
    backgroundColor: YELLOW,
    paddingHorizontal: 22,
    paddingVertical: 8,
    borderRadius: 10,
    marginBottom: 12,
  },
  titleText: { fontSize: 20, fontWeight: '800', color: INK },

  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingHorizontal: 12,
    height: 48,
    alignSelf: 'stretch',
  },
  searchIcon: { fontSize: 16, marginRight: 8 },
  searchInput: { flex: 1, fontSize: 16, color: INK, paddingVertical: 0 },
  clear: { fontSize: 16, color: MUTED, paddingLeft: 8 },

  chipBar: { backgroundColor: CREAM },
  chipList: { paddingHorizontal: 12, paddingVertical: 10 },
  chip: {
    minHeight: 40,
    paddingHorizontal: 16,
    justifyContent: 'center',
    borderRadius: 20,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#E8D77A',
    marginRight: 8,
  },
  chipActive: { backgroundColor: RED, borderColor: RED },
  chipText: { fontSize: 14, fontWeight: '600', color: INK },
  chipTextActive: { color: '#fff' },

  list: { paddingHorizontal: 12, paddingBottom: 32 },

  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: CREAM,
    paddingVertical: 10,
    paddingHorizontal: 4,
  },
  sectionTitle: { fontSize: 18, fontWeight: '800', color: INK },
  sectionCount: { fontSize: 13, fontWeight: '700', color: MUTED },

  card: {
    backgroundColor: '#fff',
    borderRadius: 14,
    padding: 14,
    marginBottom: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  name: { fontSize: 16, fontWeight: '700', color: RED, lineHeight: 24 },
  callRow: { flexDirection: 'row', flexWrap: 'wrap', marginTop: 10 },
  callBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: 44,
    paddingHorizontal: 16,
    borderRadius: 22,
    backgroundColor: '#1E8E3E',
    marginRight: 8,
    marginBottom: 6,
  },
  callIcon: { fontSize: 15, marginRight: 8 },
  callText: { fontSize: 15, fontWeight: '700', color: '#fff' },
  noPhone: { marginTop: 6, fontSize: 13, color: MUTED },

  empty: { textAlign: 'center', color: MUTED, marginTop: 48, fontSize: 15 },
  footer: { textAlign: 'center', color: MUTED, marginTop: 16, fontSize: 13 },
});