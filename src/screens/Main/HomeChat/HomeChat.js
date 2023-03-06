import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { colors } from '../../../utils/Colors'
import commonStyles, { PH20 } from '../../../utils/CommonStyles';
import { icons } from '../../../assets/icons';
import CustomText from '../../../components/CustomText';
import { SafeAreaView } from 'react-native-safe-area-context';
import TopNav from '../../../routes/TopNav/TopNav';
 import  MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import { moderateScale } from 'react-native-size-matters';
import { Spacer } from '../../../components/Spacer';

const HomeChat = () => {
    const Header = () => (
        <View>
          <PH20>
            <View style={commonStyles.rowJustify}>
              <CustomText
                label={'Qatapolt'}
                fontSize={22}
                fontFamily={'inter-semibold'}
              />
              <TouchableOpacity>
                  <MaterialCommunityIcons name="dots-vertical" size={moderateScale(20)} color={colors.black}/>

              </TouchableOpacity>
          {/* <Image source={icons.add} style={{height: 27, width: 27}} /> */}
            </View>
          </PH20>
        </View>
      );
  return (
    <SafeAreaView style={{flex:1,backgroundColor:colors.white}}>
                <Spacer height={10}/>

        <Header/>
        <Spacer height={10}/>
        <TopNav/>
    </SafeAreaView>
  )
}

export default HomeChat

const styles = StyleSheet.create({})