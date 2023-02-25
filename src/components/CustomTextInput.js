import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  Platform
} from "react-native";
import React from "react";
import {
  moderateScale,
  scale,
  ScaledSheet,
  verticalScale,
} from "react-native-size-matters";
import CustomText from "./CustomText";
import {colors} from "../utils/Colors"
import commonStyles from "../utils/CommonStyles";
import { InterFont } from "../utils/Fonts";

const CustomTextInput = ({
  eyeClick,
  password,
  setEyeClick,
  error,
  withLabel,
  leftIcon,
  source,
  iconWidth,
  iconHeight,
  rigthIcon,
  ...props
}) => {
  return (
    <TouchableOpacity
    onPress={props.onPress}
    disabled={!props.onPress}
    style={[
      {
        width: props.width || "100%",
        height: props.height || verticalScale(50),
        borderRadius: props.borderRadius || moderateScale(12),
        backgroundColor: props.backgroundColor,
        padding:scale(10),
        marginTop: props.marginTop || verticalScale(0),
        borderColor: props.borderColor ,
        paddingLeft: props.paddingLeft,
        backgroundColor:colors.white,
        shadowColor: Platform.OS=="ios"?"#ced4da":colors.black,
        shadowRadius: 8,
        elevation: 5,
        shadowOpacity: 0.5,
    
        shadowOffset: { width: 3, height: 5 },
      },
    ]}
    >
     
   
        <CustomText
          label={"umair Name"}
          color={colors.gray}
          // fontFamily="regular"
          
          fontSize={verticalScale(8)}
          // marginBottom={verticalScale(10)}
        />
      <View style={{flexDirection:"row",alignItems:"center",width:"100%",marginTop:verticalScale(5)}}>

        



        <TextInput
          style={[
            {
              width: props.inputWidth  || "95%",
              height: props.inputHeight || "100%",
              paddingRight: props.paddingRight || 10,
              paddingHorizontal: props.paddingHorizontal,
              fontFamily: props.fontFamily || InterFont.regular,
              color: props.color || colors.black,
              fontSize: verticalScale(12),
              // textAlign: props.textAlign || "center",
              multiline: props.multiline
              // alignSelf: props.alignItems || "center"
            },
          ]}
          onChangeText={props.onChangeText}
          value={props.value}
          numberOfLines={props.numberOfLines}
          keyboardType={props.keyboardType}
          autoCapitalize="none"
          multiline={props.multiline}
          placeholder={props.placeholder}
          placeholderTextColor={props.placeholderTextColor}
          secureTextEntry={props.secureTextEntry}
        />
        {
          rigthIcon?(
            <View style={{

              width:  iconWidth ||scale(20),
              height:  iconHeight||verticalScale(20),
              marginLeft:verticalScale(10),

            }} >
           <Image style={commonStyles.img} source={rigthIcon} />


            </View>

          ):<></>
        }
              </View>

       

     
    </TouchableOpacity>
  );
};
export default CustomTextInput;
const styles = ScaledSheet.create({
  icon: {
    width: "20@s",
    height: "20@vs",
    marginLeft:verticalScale(10),
  },
});
