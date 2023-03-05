import {Platform, StyleSheet, Text, View} from 'react-native';
import React, {useCallback} from 'react';
import CustomText from '../../../../components/CustomText';
import {colors} from '../../../../utils/Colors';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
// import RangeSlider from 'rn-range-slider';
import RangeSlider from 'rn-range-slider';

const AgeRange = props => {
  //     const renderThumb = useCallback(() => <Thumb/>, []);
  // const renderRail = useCallback(() => <Rail/>, []);
  // const renderRailSelected = useCallback(() => <RailSelected/>, []);
  // const renderLabel = useCallback(value => <Label text={value}/>, []);
  // const renderNotch = useCallback(() => <Notch/>, []);
  // const handleValueChange = useCallback((low, high) => {
  //   setLow(low);
  //   setHigh(high);
  // }, []);
  return (
    <View
      style={{
        width: props.width || '100%',
        height: props.height || verticalScale(50),
        borderRadius: props.borderRadius || moderateScale(12),
        backgroundColor: props.backgroundColor,
        padding: scale(10),
        marginTop: props.marginTop || verticalScale(0),
        borderColor: props.borderColor,
        paddingLeft: props.paddingLeft,
        backgroundColor: colors.white,
        shadowColor: Platform.OS == 'ios' ? colors.inputGray : colors.black,
        shadowRadius: 5,
        elevation: 5,
        shadowOpacity: 0.5,

        shadowOffset: {width: 1, height: 1},
      }}>
      <CustomText
        label={'Age'}
        color={colors.black}
        fontWeight="500"
        fontSize={verticalScale(10)}
      />
    </View>
  );
};

export default AgeRange;

const styles = StyleSheet.create({});
