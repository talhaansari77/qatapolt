import {Platform, StyleSheet, Text, View,TouchableOpacity} from 'react-native';
import React from 'react';
import CustomTextInput from '../../../../components/CustomTextInput';
import {colors} from '../../../../utils/Colors';
import CustomText from '../../../../components/CustomText';
import {Spacer} from '../../../../components/Spacer';
import GradientButton from '../../../../components/GradientButton';
import AuthOption from '../../Login/Molecules/AuthOption';

const SignupBottom = props => {
  return (
    <>
      <CustomText
        color={colors.redText}
        fontWeight="400"
        label="Please note that impersonating professional athletes and clubs may result in removal of your account."
      />
      <Spacer height={20} />
      <GradientButton
        onPress={() => props.navigation.navigate('ProfileDetail')}
        title="Register"
      />
      <Spacer height={30} />

      <AuthOption />
      <Spacer height={30} />
      <View style={{alignSelf:"center"}}>
           <CustomText
          label="Already have an accout?"
          fontSize={12}
          alignSelf="flex-end"
          marginBottom={1}
          fontWeight="500"
          color={'#BDBDBD'}
        />
        <Spacer height={10}/>
         <TouchableOpacity
        activeOpacity={0.6}
        style={{
          borderBottomWidth: 1.2,
          borderBottomColor: colors.black,
          width: '36%',
          alignSelf:"center",
        }}>
        <CustomText
          onPress={() => {props.navigation.navigate("Login")}}
          label="Login"
          fontSize={12}
          marginBottom={2}
          fontWeight="500"
          color={colors.black}
        />
      </TouchableOpacity>
    </View>
    <Spacer height={30} />

    </>
  );
};

export default SignupBottom;

const styles = StyleSheet.create({});
