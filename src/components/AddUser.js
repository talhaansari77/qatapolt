import {Platform, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {colors} from '../utils/Colors';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {moderateScale, scale} from 'react-native-size-matters';

const AddUser = props => {
  return (
    <TouchableOpacity
    activeOpacity={0.6}
    >
      <LinearGradient
        colors={['#9F703C', '#C1925A', '#E3B77A']}
        style={{
          position: 'absolute',
          bottom: 0,
          right: scale(20),
          alignSelf: 'flex-end',
          backgroundColor: colors.primary,
          height: 50,
          width: 50,
          borderRadius: 100,
          alignItems: 'center',
          justifyContent: 'center',
          // marginBottom:5,
          shadowColor: Platform.OS == 'ios' ? colors.inputGray : colors.black,
          shadowRadius: 5,
          elevation: 5,
          shadowOpacity: 1,

          shadowOffset: {width: 1, height: 4},
        }}>
        <FontAwesome5
          name={props.icon}
          color={colors.white}
          size={moderateScale(20)}
        />
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default AddUser;

const styles = StyleSheet.create({});
