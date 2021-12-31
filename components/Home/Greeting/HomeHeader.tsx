import React from 'react';
import { StyleSheet, TouchableOpacity, View, Dimensions } from 'react-native';
import FantaskticIcon from '../../../icons/FantaskticIcon';
import NotificationIcon from '../../../icons/NotificationIcon';
import HasNotice from '../../HasNotice';
import StatusBarBackGround from '../../StatusBarBackGround';

interface HomeHeaderProps {
    notificationNavigate: () => void;
}
const {width} = Dimensions.get('window');

const HomeHeader: React.FC<HomeHeaderProps> = ({notificationNavigate}) => {
    const noti = [
        {
            subject: 'Math',
            message: 'Notification Message',
            time: '12:00',
            isNew: true,
        },
        {
            subject: 'Math',
            message: 'Notification Message',
            time: '12:00',
            isNew: true,
        },
        {
            subject: 'Math',
            message: 'Notification Message',
            time: '12:00',
            isNew: true,
        },
        {
            subject: 'Math',
            message: 'Notification Message',
            time: '12:00',
            isNew: true,
        },
        {
            subject: 'Math',
            message: 'Notification Message',
            time: '12:00',
            isNew: false,
        },
        {
            subject: 'Math',
            message: 'Notification Message',
            time: '12:00',
            isNew: false,
        },
    ]

    const hasNew = (): number => {
        let cnt = 0;
        noti.forEach(item => {if (item.isNew === true) {
            cnt++;
        }})
        return cnt;
    }

    return (
        <View style={styles.container}>
            <StatusBarBackGround/>
            <View style={styles.homeHeader}>
                <FantaskticIcon width={150} height={24}/>
                <TouchableOpacity onPress={notificationNavigate} style={styles.notificationField}>
                    <NotificationIcon color={(hasNew()>0) ? 'black' : '#A0A1AF'}/>
                    {hasNew() &&
                        <HasNotice notificationNumber={hasNew()}/>
                    }
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        backgroundColor: 'rgba(255,255,255,0.88)',
        borderWidth: 1,
        borderColor: 'rgba(26, 26, 28, 0.08)',
        shadowRadius: 4,
        shadowColor: 'rgba(0, 0, 0, 0.08)',
        shadowOffset: { width: 0, height: 0},
        zIndex: 1,
    },
    homeHeader: {
        width: width,
        height: 56,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 24,
        paddingVertical: 16,
    },
    notificationField: {
        flexDirection: 'row',
        width: 44,
        height: 24,
        justifyContent: 'space-between',
        alignItems: 'center',
    }
})

export default HomeHeader;