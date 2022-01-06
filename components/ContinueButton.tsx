import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';
import { useLandingContext } from '../contexts/LandingContext';
import StyleSheetLibrary from '../stylesheet/StyleSheetLibrary';

interface ContinueButtonProps {
  buttonText: string;
  userInfo: string;
  isValidInfo: () => boolean;
  nextPage: () => void;
}

const ContinueButton = ({
  isValidInfo,
  userInfo,
  nextPage,
  buttonText,
}: ContinueButtonProps) => {
  return (
    <TouchableOpacity
      style={[
        styles.continueButton,
        { backgroundColor: isValidInfo() ? '#3145F5' : '#D0D0D7' },
      ]}
      onPress={nextPage}
      disabled={isValidInfo() ? false : true}
    >
      <Text
        style={[
          styles.continueButtonText,
          { fontSize: StyleSheetLibrary.fontSizeSmallTitle },
        ]}
      >
        {buttonText}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  continueButton: {
    borderRadius: 12,
    height: 48,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 12,
  },
  continueButtonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'center',
  },
});

export default ContinueButton;
