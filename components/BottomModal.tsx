import React, { useState } from 'react';
import {
  Animated,
  Modal,
  StyleSheet,
  View,
  Dimensions,
  PanResponder,
} from 'react-native';
import { visible } from '../node_modules/ansi-colors/types/index.d';

interface BottomModalInterface {
  visible?: boolean;
}

const BottomModal: React.FC<BottomModalInterface> = ({ visible = false }) => {
  const _handleDismiss = () => {};
  const [panY, setPanY] = useState(
    new Animated.Value(Dimensions.get('screen').height),
  );
  const _resetPositionAnim = Animated.timing(panY, {
    toValue: 0,
    duration: 300,
    useNativeDriver: false,
  });
  const _closeAnim = Animated.timing(panY, {
    toValue: Dimensions.get('screen').height,
    duration: 500,
    useNativeDriver: false,
  });
  const top = panY.interpolate({
    inputRange: [-1, 0, 1],
    outputRange: [0, 0, 1],
  });

  const _panResponders = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onMoveShouldSetPanResponder: () => false,
    onPanResponderMove: Animated.event([null, { dy: panY }]),
    //   onPanResponderRelease
  });
  return (
    <Modal
      animated
      animationType='fade'
      visible={visible}
      transparent
      onRequestClose={() => {
        _handleDismiss();
      }}
    >
      <View style={styles.overlay}>
        <Animated.View style={[styles.container, { top }]}></Animated.View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.2)',
    flex: 1,
    justifyContent: 'flex-end',
  },
  container: {
    backgroundColor: 'white',
    paddingTop: 12,
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12,
  },
});

export default BottomModal;
