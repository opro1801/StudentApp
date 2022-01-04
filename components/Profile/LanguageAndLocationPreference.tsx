import { BlurView } from 'expo-blur';
import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, Image, Dimensions } from 'react-native';
import GlobeIcon from '../../icons/GlobeIcon';
import Modal from 'react-native-modal';
import { TouchableOpacity } from 'react-native-gesture-handler';
import RightArrowButtonIcon from '../../icons/RightArrowButtonIcon';
import StyleSheetLibrary from '../../stylesheet/StyleSheetLibrary';

const {width, height} = Dimensions.get('window');

const LanguageAndLocationPreference = () => {
    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);    
    }
    return (
        <View style={styles.container}>
            <Modal isVisible={isModalVisible} swipeDirection="down"
                onSwipeComplete={() => setModalVisible(false)}
            >
                <View style={styles.modal}>
                    <View style={styles.header}>
                        <GlobeIcon />
                        <Text style={styles.headerText}>Language {'&'} Location Preference</Text>
                    </View>
                </View>
            </Modal>
            <View style={styles.header}>
                <GlobeIcon />
                <Text style={styles.headerText}>Language {'&'} Location Preference</Text>
            </View>
            <TouchableOpacity style={styles.languageOption} onPress={toggleModal}>
                <Image source={require('../../assets/HongKongFlag.png')}/>
                <Text style={styles.languageText}>Hong Kong (English)</Text>
                <RightArrowButtonIcon color='#F7F8FB' strokeColor='#A0A1AF'/>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 16,
        paddingHorizontal: 24,
        paddingVertical: 16,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
    },
    headerText: {
        marginLeft: 8,
        flex: 1,
    },
    modal: {
        height: 464,
        backgroundColor: '#ffffff',
        width: width,
        position: 'absolute',
    },
    languageOption: {
        padding: 16,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F7F8FB',
        borderRadius: 8,
        width: '100%',
    },
    languageText: {
        fontSize: StyleSheetLibrary.fontSizeBigText,
        lineHeight: 20,
        flex: 1,
        marginLeft: 8,
    }
})

export default LanguageAndLocationPreference;