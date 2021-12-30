import React from 'react';
import { StyleSheet, View } from 'react-native';
import FantaskticIcon from '../../../icons/FantaskticIcon';
import NotificationIcon from '../../../icons/NotificationIcon';


const HomeHeader = () => {
    return (
        <View style={styles.homeHeader}>
            <FantaskticIcon width={150} height={24}/>
            <NotificationIcon />
        </View>
    )
}

const styles = StyleSheet.create({
    homeHeader: {
        width: '100%',
        height: 56,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 24,
        paddingVertical: 16,
        backgroundColor: '#ffffff',
      }
})

export default HomeHeader;