import React from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';

import { LinearGradient } from 'react-native-linear-gradient';
import { BorderlessButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { Feather, MaterialIcons } from 'react-native-vector-icons';

import { theme } from '@/global/styles/theme';
import { styles } from './styles';

export const Header = ({ title, action, showBackButton }) => {
  const { primary, secondary, heading } = theme.colors;

  const { goBack } = useNavigation();

  const handleGoBack = () => {
    goBack();
  };

  return (
    <LinearGradient style={styles.container} colors={[primary, secondary]}>
      {showBackButton ? (
        <BorderlessButton onPress={handleGoBack}>
          <Feather name='arrow-left' size={24} color={heading} />
        </BorderlessButton>
      ) : (
        <View style={{ width: 24 }} />
      )}

      <View style={styles.viewHeader}>
        <Text style={styles.title}>
          <MaterialIcons
            name='location-pin'
            size={15}
            color={heading}
            style={{ marginRight: 10 }}
          />
          {title}
        </Text>
      </View>

      {action ? <View>{action}</View> : <View style={{ width: 24 }} />}
    </LinearGradient>
  );
};

Header.defaultProps = {
  title: '',
  action: () => {},
  showBackButton: () => {},
};

Header.propTypes = {
  title: PropTypes.string,
  action: PropTypes.node,
  showBackButton: PropTypes.func,
};
