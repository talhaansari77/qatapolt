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
      <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
        {/* <View style={{width:"33.3%",}}/>
      <View style={{width:"33%",}}>
            <Spacer height={10}/>
        <CustomText
        label="Profile"
        fontSize={20}
        color={colors.white}
        fontFamily={InterFont.bold}
      />
              </View>
      <View style={{width:"33.3%",backgroundColor:"red"}}>
      <CustomText
        label="SKip"
        fontSize={13}
        textAlign="center"
        color={colors.white}
        fontFamily={InterFont.bold}
      />
        </View> */}





      </View>
       

       
  
    </View>
  );
};

export default SignupTop;

const styles = StyleSheet.create({});
