import React from 'react';
import {
  Modal,
  TouchableWithoutFeedback,
  View,
  StyleSheet,
} from 'react-native';

export interface PopupInterface {
  visible: boolean;
  onClose: () => void;
}

const Popup: React.FC<PopupInterface> = ({ visible, onClose, children }) => {
  return (
    <Modal
      visible={visible}
      transparent
      onRequestClose={onClose}
      style={styles.modal}
    >
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.modalOverlay} />
      </TouchableWithoutFeedback>
      <>{children}</>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#DDE2E5',
    opacity: 0.8,
  },
  modal: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Popup;
