import { StyleSheet } from 'react-native';
import { theme } from '@/global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  text: {
    fontFamily: theme.fonts.text500,
    color: theme.colors.white,
    fontSize: 16,
    marginVertical: 14,
  },
  errorMsg: {
    width: '100%',
    backgroundColor: theme.colors.button,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
  errorMsgText: {
    color: theme.colors.white,
  },
});
