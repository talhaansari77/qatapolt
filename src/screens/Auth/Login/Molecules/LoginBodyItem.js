import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {scale, verticalScale} from 'react-native-size-matters';
import CustomText from '../../../../components/CustomText';
import {InterFont} from '../../../../utils/Fonts';
import {colors} from '../../../../utils/Colors';
import {Spacer} from '../../../../components/Spacer';
import GradientButton from '../../../../components/GradientButton';
import CustomTextInput from '../../../../components/CustomTextInput';
import {icons} from '../../../../assets/icons';

const LoginBodyItem = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <View style={styles.mainContainer}>
      <View style={{width: '90%', alignItems: 'center', alignSelf: 'center'}}>
        <CustomText
          label="Create your own luck"
          fontSize={22}
          textAlign="center"
          color={colors.white}
          fontFamily={InterFont.bold}
        />
        <Spacer height={5} />
        <CustomText
          label="Login to explore more events"
          fontSize={12}
          textAlign="center"
          fontWeight="500"
          color={'#BDBDBD'}
        />
      </View>
      <Spacer height={40} />
      <CustomTextInput withLabel={'Email'} placeholder="johndoe@mail.com" />
      <Spacer height={10} />

      <CustomTextInput
        withLabel={'Password'}
        iconWidth={scale(15)}
        secureTextEntry={showPassword}
        onRightPress={() => {
          setShowPassword(!showPassword);
        }}
        iconHeight={verticalScale(15)}
        rigthIcon={showPassword ? icons.eye : icons.hidden}
        placeholder="Enter your password"
      />
      <Spacer height={7} />
      <TouchableOpacity
        activeOpacity={0.6}
        style={{
          borderBottomWidth: 1.2,
          borderBottomColor: colors.inputGray,
          width: '36%',
          alignSelf: 'flex-end',
        }}>
        <CustomText
          onPress={() => {}}
          label="Forgot Password?"
          fontSize={12}
          alignSelf="flex-end"
          marginBottom={1}
          fontWeight="500"
          color={'#BDBDBD'}
        />
      </TouchableOpacity>
    </View>
  );
};

export default LoginBodyItem;

const styles = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: scale(15),
  },
});
