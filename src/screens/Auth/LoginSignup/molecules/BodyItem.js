import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { scale } from 'react-native-size-matters'
import CustomText from '../../../../components/CustomText'
import { InterFont } from '../../../../utils/Fonts'
import { colors } from '../../../../utils/Colors'

const BodyItem = () => {
  return (
    <View style={styles.mainContainer}>
        <View style={{width:"80%",alignItems:"center",alignSelf:"center"}}>
        <CustomText label="The Best App For Sports" 
        fontSize={25}
        textAlign="center"
        color={colors.white}

        fontFamily={InterFont.SuezOne}/>

        </View>
     
    </View>
  )
}

export default BodyItem

const styles = StyleSheet.create({
    mainContainer:{
        paddingHorizontal:scale(15)


    }

})