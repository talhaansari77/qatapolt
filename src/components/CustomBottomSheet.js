import {StyleSheet, Text, View, TextInput} from 'react-native';
import React, {useState, useEffect} from 'react';
import {BottomSheet} from 'react-native-btr';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {colors} from '../utils/Colors';
import {Spacer} from './Spacer';
import Octicons from 'react-native-vector-icons/Octicons';
import CustomText from './CustomText';

import {ScrollView} from 'react-native-gesture-handler';

const CustomBottomSheet = props => {
  const [search, setSearch] = useState('');

  const [listData, setListData] = useState([]);

  useEffect(() => {
    setListData(props.list);
  }, [props]);

  const onSearchFilter = txt => {
    setSearch(txt);
    if (txt.length == 0) {
      setListData(props.list);
    } else {
      const filterSearch = listData.filter(item => {
        return `${item}`
          .toLowerCase()
          .trim()
          .includes(txt.toLowerCase().trim());
      });

      setListData(filterSearch);
    }
  };
  return (
    <BottomSheet
      visible={props.modalVisible}
      onBackButtonPress={props.onCloseModal}
      onBackdropPress={props.onCloseModal}>
      <View
        flexDirection={'column'}
        backgroundColor={'white'}
        alignSelf="center"
        maxHeight={'60%'}
        paddingHorizontal={scale(15)}
        minHeight={'60%'}
        width={'97%'}
        borderTopLeftRadius={scale(15)}
        borderTopRightRadius={scale(15)}
        overflow="hidden">
        <Spacer height={5} />

        <View style={styles.topLine}></View>
        <Spacer height={10} />
        <Spacer height={10} />
        <View style={styles.searchBody}>
          <Octicons
            name="search"
            color={colors.black}
            size={moderateScale(20)}
          />
          <TextInput
            value={search}
            style={{
              width: '86%',
              padding: 0,
              paddingRight: scale(10),
              paddingLeft: scale(7),
            }}
            onChangeText={onSearchFilter}
            placeholder="Search..."
            placeholderTextColor={'#6c757d'}
          />
        </View>
        <Spacer height={20} />

        <ScrollView>
          {listData.map(item => {
            return (
              <>
                <Spacer height={10} />

                <CustomText
                  fontWeight={'500'}
                  onPress={() => props.onSetValue(item)}
                  label={item}
                />
                <Spacer height={10} />
              </>
            );
          })}
        </ScrollView>
      </View>
    </BottomSheet>
  );
};

export default CustomBottomSheet;

const styles = StyleSheet.create({
  topLine: {
    width: scale(80),
    height: 5,
    backgroundColor: '#dee2e6',
    alignSelf: 'center',
    borderRadius: 10,
  },
  searchBody: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#dee2e6',
    height: verticalScale(30),
    borderRadius: 10,
    paddingHorizontal: 10,
  },
});
