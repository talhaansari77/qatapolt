import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import CustomText from '../../../../components/CustomText';
import {colors} from '../../../../utils/Colors';
import {InterFont} from '../../../../utils/Fonts';
import Ionicons from "react-native-vector-icons/Ionicons"
import { moderateScale, scale } from 'react-native-size-matters';
import { Spacer } from '../../../../components/Spacer';

const SignupTop = (props) => {
  return (
    <View style={{padding:scale(10),}}>
        <TouchableOpacity 
        activeOpacity={0.6}
        onPress={()=>props.navigation.goBack()}
        >

        <Ionicons  name='ios-chevron-back-outline' size={moderateScale(30)} color={colors.white}/>
        </TouchableOpacity>

        <View style={{width:"70%",alignSelf:"center",alignItems:"center"}}>
            <Spacer height={10}/>
        <CustomText
        label="Create own luck with Qatapolt"
        fontSize={22}
        textAlign="center"
        color={colors.white}
        fontFamily={InterFont.bold}
      />

        </View>
  
    </View>
  );
};

export default SignupTop;

const styles = StyleSheet.create({});
