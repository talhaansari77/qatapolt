import {Platform, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CustomTextInput from '../../../../components/CustomTextInput';
import {colors} from '../../../../utils/Colors';
import CustomText from '../../../../components/CustomText';
import {Spacer} from '../../../../components/Spacer';

const SignupBody = (props) => {
  return (
      <>
           <CustomTextInput
                    inputStyle={{
                      shadowColor:
                        Platform.OS == 'ios' ? colors.inputGray : colors.black,
                      shadowRadius: 5,
                      elevation: 5,
                      shadowOpacity: 0.5,

                      shadowOffset: {width: 1, height: 1},
                    }}
                    withLabel={props.withLabel}
                    iconHeight={props.iconHeight}
                    rigthIcon={props.rigthIcon}
                    onRightPress={props.onRightPress}
                    secureTextEntry={props.secureTextEntry}
                    placeholder={props.placeholder}
                  />

                  </>

      

    
            

  );
};

export default SignupBody;

const styles = StyleSheet.create({});
