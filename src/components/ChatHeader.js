import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
import { colors } from '../utils/Colors'
import LinearGradient from 'react-native-linear-gradient'
import Ionicons from 'react-native-vector-icons/Ionicons';
import ProfilePhoto from './ProfilePhoto'
import { Spacer } from './Spacer'
import CustomText from './CustomText'
import { InterFont } from '../utils/Fonts'
import  MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"



const ChatHeader = (props) => {
  return (
    <LinearGradient 
    style={{flexDirection:"row",alignItems:"center",height:verticalScale(60),justifyContent:"space-between"}}
    
    colors={['#9F703C', '#C1925A', '#E3B77A']}>
              <View style={{flexDirection:"row",width:"70%",alignItems:"center"}}>

        <TouchableOpacity onPress={() => props.navigation.goBack()}>
        <Ionicons
          name="md-chevron-back"
          size={moderateScale(30)}
          color={colors.white}
        />
      </TouchableOpacity>
      <Spacer width={10}/>

      <ProfilePhoto width={scale(55)}  height={scale(55)}/>
      <View style={{alignSelf:"center",paddingLeft:scale(10)}} >
      <CustomText
                label="Umair Abbas"
                fontSize={12}
                fontFamily={InterFont.semiBold}
                textAlign="center"
                color={colors.black}
              />
              <CustomText
                label="Athlete"
                fontSize={12}
                fontFamily={InterFont.semiBold}
                textAlign="center"
                color={colors.white}
              />

      </View>


        </View>

        <TouchableOpacity 
        activeOpacity={0.6}
        style={{paddingRight:10}} >
                  <MaterialCommunityIcons name="dots-vertical" size={moderateScale(25)} color={colors.white}/>

              </TouchableOpacity>


    </LinearGradient>
    
  )
}

export default ChatHeader

const styles = StyleSheet.create({})