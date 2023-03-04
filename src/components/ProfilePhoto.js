import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
import { colors } from '../utils/Colors'
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons"

const ProfilePhoto = () => {
  return (
    <View style={{width:scale(110),height:scale(110),borderRadius:100,borderColor:colors.yellow,borderWidth:2,alignSelf:"center",}}>


        <View style={{width:scale(32),height:scale(32),borderRadius:30,backgroundColor:colors.white,position:"absolute",alignSelf:"flex-end",marginTop:verticalScale(10),right:-10,alignItems:"center",justifyContent:"center"}}>
            <SimpleLineIcons name='camera' color={colors.black} size={moderateScale(20)}/>

        </View>
    </View>
  )
}

export default ProfilePhoto

const styles = StyleSheet.create({})