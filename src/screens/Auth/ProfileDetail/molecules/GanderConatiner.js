import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Animated,
} from 'react-native';
import React, {useState} from 'react';
import CustomText from '../../../../components/CustomText';
import {colors} from '../../../../utils/Colors';
import {verticalScale, moderateScale, scale} from 'react-native-size-matters';
import {Spacer} from '../../../../components/Spacer';
import * as Animatable from 'react-native-animatable';

const GanderConatiner = () => {
  const [genderIndex, setGenderIndex] = useState(-1);
  return (
    <View
      style={{
        width: '100%',
        height: verticalScale(50),
        borderRadius: moderateScale(12),
        padding: scale(10),
        backgroundColor: colors.white,

        shadowColor: Platform.OS == 'ios' ? colors.inputGray : colors.black,
        shadowRadius: 5,
        elevation: 5,
        shadowOpacity: 0.5,

        shadowOffset: {width: 1, height: 1},
      }}>
      <CustomText
        label={'Gender'}
        color={colors.inputGray}
        fontSize={verticalScale(7)}
      />
      <Spacer height={5} />
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        {['Male', 'Female', 'Other'].map((item, index) => {
          return (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginRight: scale(50),
              }}>
              <TouchableOpacity
                onPress={() => setGenderIndex(index)}
                activeOpacity={0.6}
                style={styles.mainCheck}>
                {genderIndex == index && (
                  <Animatable.View
                    animation="fadeIn"
                    // iterationCount={5}
                    style={styles.innerCheck}
                    direction="normal"></Animatable.View>
                )}
              </TouchableOpacity>
              <CustomText
                label={item}
                marginLeft={7}
                fontWeight={'500'}
                color={colors.black}
                fontSize={verticalScale(8)}
              />
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default GanderConatiner;

const styles = StyleSheet.create({
  mainCheck: {
    width: 19,
    height: 19,
    borderRadius: 100,
    borderWidth: 1.2,
    borderColor: colors.inputGray,
    padding: 3,
  },
  innerCheck: {
    width: '100%',
    height: '100%',
    borderRadius: 100,
    backgroundColor: colors.black,
  },
});
