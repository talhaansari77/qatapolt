import {scale, ScaledSheet} from 'react-native-size-matters';
import {colors} from '../../../utils/Colors';

export const styles = ScaledSheet.create({
  bodyView: {
    flex: 1,
    backgroundColor: colors.white,
    borderTopRightRadius: scale(20),
    borderTopLeftRadius: scale(20),
  },
});
