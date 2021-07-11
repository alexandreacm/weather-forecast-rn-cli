import { StyleSheet, Platform } from 'react-native';
import { theme } from '@/global/styles/colors';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 50,
    paddingTop: Platform.OS === 'android' ? 0 : 20,
    paddingHorizontal: 24,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    flex: 1,
    textAlign: 'center',
    fontFamily: theme.fonts.text500,
    fontSize: 15,
    color: theme.colors.heading,
  },
  viewHeader: {
    width: 200,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
});
