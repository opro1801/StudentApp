import React from "react"
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native"
import LeftArrowIcon from "../icons/LeftArrowIcon";
import MoreIcon from "../icons/MoreIcon";
import StyleSheetLibrary from "../stylesheet/StyleSheetLibrary";
import StatusBarBackGround from "./StatusBarBackGround";

interface GeneralHeaderProps {
    hasBack?: boolean;
    hasMore?: boolean;
    titleContent: string;
    goBack?: () => void;
}

const GeneralHeader: React.FC<GeneralHeaderProps> = ({hasBack = true, hasMore = true, titleContent, goBack=()=>{}}) => {
    return (
    <View style={styles.container}>
        <StatusBarBackGround />
        <View style={styles.inner}>
            { hasBack &&  
            <TouchableOpacity onPress={goBack}>
                <LeftArrowIcon />
            </TouchableOpacity>
            }
            <Text style={styles.title}>{titleContent}</Text>
            { hasMore &&
            <TouchableOpacity>
                <MoreIcon />
            </TouchableOpacity>
            }
        </View>
    </View>
    )
};

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        width: '100%',
        backgroundColor: 'rgba(255,255,255,0.88)',
        borderWidth: 1,
        borderColor: 'rgba(26, 26, 28, 0.08)',
        shadowRadius: 4,
        shadowColor: 'rgba(0, 0, 0, 0.08)',
        shadowOffset: { width: 0, height: 0},
        zIndex: 1,
    },
    inner: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 24,
        paddingVertical: 16,
        width: '100%',
    },
    title: {
        fontSize: StyleSheetLibrary.fontSizeSmallTitle,
        fontWeight: '500',
        lineHeight: 24,
    }
});

export default GeneralHeader;