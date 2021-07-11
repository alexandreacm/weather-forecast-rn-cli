import React from 'react';
import { SafeAreaView, StyleSheet, Platform, StatusBar } from 'react-native';
import PropTypes from 'prop-types';

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;
const styles = StyleSheet.create({
  statusBar: {
    height: STATUSBAR_HEIGHT,
  },
});

export const StatusBarColor = ({
  backgroundColor,
  isBarStyleDark = false,
  ...rest
}) => {
  return (
    <SafeAreaView style={[styles.statusBar, { backgroundColor }]}>
      <StatusBar
        translucent
        backgroundColor={backgroundColor}
        barStyle={isBarStyleDark ? 'dark-content' : 'light-content'}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...rest}
      />
    </SafeAreaView>
  );
};

StatusBarColor.defaultProps = {
  backgroundColor: '',
  isBarStyleDark: false,
};

StatusBarColor.propTypes = {
  backgroundColor: PropTypes.string,
  isBarStyleDark: PropTypes.bool,
};
