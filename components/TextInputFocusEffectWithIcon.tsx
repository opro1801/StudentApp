import React, { Dispatch, useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import MailIcon from '../icons/MailIcon';

interface TextInputFocusEffectWithIconProps {
  fieldName: string;
  setFieldName?: Dispatch<React.SetStateAction<string>>;
  placeholder: string;
  autoCapitalize: 'sentences' | 'none' | 'words' | 'characters' | undefined;
  autoFocus?: boolean;
  isPassword?: boolean;
  onSubmitEditing?: () => void;
  handleOnChangeText?: (text: string) => void;
  autoCorrect?: boolean;
  Icon?: React.ReactNode;
}

const TextInputFocusEffectWithIcon = React.forwardRef<
  TextInput,
  TextInputFocusEffectWithIconProps
>(
  (
    {
      fieldName,
      setFieldName,
      placeholder,
      autoCapitalize = 'none',
      autoFocus = true,
      isPassword = false,
      onSubmitEditing = () => {},
      handleOnChangeText = (text: string) => {},
      autoCorrect = false,
      Icon = MailIcon,
    },
    ref,
  ) => {
    const [isFocus, setisFocus] = useState(autoFocus);
    return (
      <View
        style={[
          styles.inputSection,
          { borderWidth: isFocus ? 1 : 0, borderColor: '#3145F5' },
        ]}
      >
        {Icon}
        <TextInput
          style={[styles.input]}
          autoCapitalize={autoCapitalize}
          autoCorrect={autoCorrect}
          placeholder={placeholder}
          underlineColorAndroid='transparent'
          onChangeText={(text) => handleOnChangeText(text)}
          autoFocus={autoFocus}
          onFocus={() => setisFocus(true)}
          onBlur={() => setisFocus(false)}
          defaultValue={fieldName}
          onSubmitEditing={onSubmitEditing}
          ref={ref}
        />
      </View>
    );
  },
);

const styles = StyleSheet.create({
  inputSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F7F8FB',
    borderRadius: 10,
    marginTop: 48,
    height: 48,
  },
  input: {
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    marginLeft: 34,
    borderRadius: 10,
    backgroundColor: '#F7F8FB',
    color: '#424242',
    height: 46,
    width: '80%',
  },
});

export default TextInputFocusEffectWithIcon;
