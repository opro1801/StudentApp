import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import InfoIcon from '../../icons/InfoIcon';
import FAQIcon from '../../icons/FAQIcon';
import ContactIcon from '../../icons/ContactIcon';
import LogoutIcon from '../../icons/LogoutIcon';
import StyleSheetLibrary from '../../stylesheet/StyleSheetLibrary';

const OtherSettings = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.subSection}>
        <InfoIcon marginRight={12} />
        <Text style={styles.settingOptionText}>About</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.subSection}>
        <FAQIcon marginRight={12} />
        <Text style={styles.settingOptionText}>FAQs</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.subSection}>
        <ContactIcon marginRight={12} />
        <Text style={styles.settingOptionText}>Contact Us</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.subSection}>
        <LogoutIcon marginRight={12} />
        <Text style={[styles.settingOptionText, { color: '#F95141' }]}>
          Logout
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
    paddingHorizontal: 24,
    paddingTop: 16,
    paddingBottom: 8,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  subSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    padding: 8,
    marginBottom: 8,
  },
  settingOptionText: {
    flex: 1,
    fontSize: StyleSheetLibrary.fontSizeSmallTitle,
    fontWeight: '500',
  },
});

export default OtherSettings;
