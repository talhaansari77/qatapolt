import {Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Spacer} from '../../../components/Spacer';
import {colors} from '../../../utils/Colors';
import {icons} from '../../../assets/icons';
import {Avatar, Badge, Image, ListItem} from 'react-native-elements';
import CustomText from '../../../components/CustomText';
import commonStyles, {PH10, PH20} from '../../../utils/CommonStyles';
import { moderateScale, scale } from 'react-native-size-matters';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
import AddUser from '../../../components/AddUser';

const ChatScreen = ({navigation}) => {
  const chatList = [
    {
      id: 1,
      name: 'Rodney Marks',
      lastMsg: 'Hey, what’s yours plans today?',
      badgeValue: '1',
      missedCall: '',
      deliveryTime: '12:45 AM',
      seen: '',
    },
    {
      id: 2,
      name: 'Rodney Marks',
      lastMsg: '',
      badgeValue: '',
      missedCall: 'Missed audio call',
      deliveryTime: '12:45 AM',
      seen: '',
    },
    {
      id: 2,
      name: 'Rodney Marks',
      lastMsg: 'Thats Okay',
      badgeValue: '',
      missedCall: '',
      deliveryTime: 'Yesterday',
      seen: true,
    },
  ];
  const AddChat = () => (
    // <View style={{height:60,alignItems:"center",justifyContent:"center"}}>
   
       <LinearGradient 
       colors={['#9F703C', '#C1925A', '#E3B77A']} style={{position:"absolute",bottom:0,right:scale(30),alignSelf:"flex-end",backgroundColor:colors.primary,height:50,width:50,borderRadius:100,alignItems:"center",justifyContent:"center",
       marginBottom:5,
        shadowColor:
        Platform.OS == 'ios'
          ? colors.inputGray
          : colors.black,
      shadowRadius: 5,
      elevation: 5,
      shadowOpacity: 1,

      shadowOffset: {width: 1, height: 4},
        }}>
          <FontAwesome5 name='user-alt' color={colors.white} size={moderateScale(24)}/>
          {/* <CustomText
            label={'Chat'}
            fontSize={22}
            fontFamily={'inter-semibold'}
          /> */}
          {/* <Image source={icons.add} containerStyle={{height: 27, width: 27}} /> */}
        </LinearGradient>

    // </View>
       
  );
  const ChatListItem = ({
    name,
    lastMsg,
    badgeValue,
    missedCall,
    deliveryTime,
    seen,
  }) => (
    <TouchableOpacity
    activeOpacity={0.6}
    onPress={()=> navigation.navigate("ChatDetail")}
    >
      <ListItem bottomDivider>
        <Avatar rounded source={icons.profile} size={55} />
        <ListItem.Content>
          <ListItem.Title style={{fontWeight: 'bold'}}>{name}</ListItem.Title>
          <Spacer height={4} />
          <ListItem.Subtitle numberOfLines={1} ellipsizeMode="tail">
            {missedCall ? (
              <>
                <Image
                  source={icons.missedCall}
                  containerStyle={styles.subtitleIcon}
                />
                <Spacer width={5} />
                <CustomText label={missedCall} color={colors.deepRed} />
              </>
            ) : (
              <></>
            )}
            {!missedCall && !seen ? (
              <CustomText
                label={lastMsg}
                color={seen ? colors.inputGray : colors.black}
              />
            ) : seen ? (
              <>
                <Image
                  source={icons.messageRead}
                  containerStyle={styles.subtitleIcon}
                />
                <Spacer width={5} />
                <CustomText label={lastMsg} color={colors.inputGray} />
              </>
            ) : (
              <></>
            )}
          </ListItem.Subtitle>
        </ListItem.Content>
        <View>
          {badgeValue ? (
            <>
              <Badge
                value={badgeValue}
                badgeStyle={{backgroundColor: colors.black}}
              />
              <Spacer height={5} />
            </>
          ) : (
            <></>
          )}
          <CustomText
            label={deliveryTime}
            fontSize={8}
            color={colors.inputGray}
          />
        </View>
      </ListItem>
    </TouchableOpacity>
  );
  return (
    <>
      <View style={styles.container}>
      {/* <Spacer height={40} /> */}
      {/* <Header /> */}
      <Spacer height={10} />
      <ScrollView showsVerticalScrollIndicator={false}>
        {chatList.map(
          ({name, lastMsg, badgeValue, missedCall, deliveryTime, seen}) => (
            <PH10>
              <ChatListItem
                name={name}
                lastMsg={lastMsg}
                badgeValue={badgeValue}
                missedCall={missedCall}
                deliveryTime={deliveryTime}
                seen={seen}
              />
            </PH10>
          ),
        )}
      </ScrollView>
    </View>
    <AddUser icon="user-alt"/>
    {/* <AddChat/> */}
    </>
  
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  subtitleIcon: {
    height: 20,
    width: 20,
  },
});
