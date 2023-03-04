import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import CustomText from '../../../../components/CustomText';
import {colors} from '../../../../utils/Colors';
import {InterFont} from '../../../../utils/Fonts';
import Ionicons from "react-native-vector-icons/Ionicons"
import { moderateScale, scale } from 'react-native-size-matters';
import { Spacer } from '../../../../components/Spacer';
import ProfilePhoto from '../../../../components/ProfilePhoto';
import CustomHeader from '../../../../components/CustomHeader';

const ProfileTop = (props) => {
  return (
    <View style={{padding:scale(10),}}>
{/* <TouchableOpacity onPress={()=>props.navigation.goBack()}>
<Ionicons name='md-chevron-back' size={moderateScale(30)} color={colors.white}/>


</TouchableOpacity> */}
<Spacer height={20}/>
<CustomHeader
   Center={() => (
    <CustomText
    label="Profile"
    fontSize={20}
    textAlign="center"
    fontWeight="600"
    
    color={colors.white}
    // fontFamily={InterFont.bold}
  />
   
  )}
  RightSide={()=>(
      <TouchableOpacity>
                  <CustomText
        label="Skip"
        fontSize={15}
        textAlign="center"
        
        color={colors.white}
        fontFamily={InterFont.bold}
      />

      </TouchableOpacity>

  )}
/>
    

    

    
     





       

       
  
    </View>
  );
};

export default ProfileTop;

const styles = StyleSheet.create({});
