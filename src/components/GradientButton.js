import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View, ActivityIndicator } from 'react-native';
import { ScaledSheet, verticalScale, scale, moderateScale } from 'react-native-size-matters';
import LinearGradient from 'react-native-linear-gradient';

import { colors } from '../utils/Colors';
import { InterFont } from '../utils/Fonts';
function GradientButton({
  loading,
  title,
  onPress,
  icon,
  color,
  width,
  height,
  borderColor,
  borderRadius,
  marginTop,
  alignItems,
  justifyContent,
  borderWidth,
  backgroundColor,
  fontFamily,
  marginBottom,
  fontSize,
  marginHorizontal
}) {
  return (
    <TouchableOpacity
      disabled={loading}
      activeOpacity={0.6}
      style={[
        {
        //   backgroundColor: backgroundColor || colors.primary,
          width: width || '100%',
          height: height || verticalScale(50),
          borderRadius: borderRadius || scale(10),
          alignItems: alignItems || 'center',
          overflow:"hidden",
          justifyContent: justifyContent || 'center',
          marginTop,
          marginBottom:marginBottom,
          marginHorizontal:marginHorizontal
        },
      ]}
      onPress={onPress}
    >
      {loading ? (
        <ActivityIndicator 
        color={colors.white} size={moderateScale(26)} />
      ) : (
        <LinearGradient 
        colors={['#9F703C', '#C1925A', '#E3B77A']}
        style={{ flexDirection: 'row' ,width:"100%",height:"100%",alignItems:"center",justifyContent:"center"}}>
          <Text
            style={[
              {
                color: color || colors.white,
                fontSize: verticalScale(fontSize|| 14),
                fontWeight:"600",
                fontFamily: fontFamily || InterFont.regular
              },
            ]}
          >
            {title}
          </Text>
        </LinearGradient>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  filledButton: {
    backgroundColor: colors.primary,
  },
});

export default GradientButton;
