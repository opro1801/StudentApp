import React from "react"
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native"
import IndicatorIcon from "../icons/IndicatorIcon";
import LeftArrowIcon from "../icons/LeftArrowIcon";
import MoreIcon from "../icons/MoreIcon";
import StyleSheetLibrary from "../stylesheet/StyleSheetLibrary";
import NumberIndicator from "./NumberIndicator";
import StatusBarBackGround, { statusBarIgnore } from "./StatusBarBackGround";
import { useTasksContext } from '../contexts/TasksContext';
import AddIcon from "../icons/AddIcon";
import { BlurView } from "expo-blur";

interface GeneralHeaderProps {
    hasBack?: boolean;
    hasMore?: boolean;
    titleContent: string;
    goBack?: () => void;
    isTasks?: boolean;
    goCompleted?: () => void;
    goUpcoming?: () => void;
    isUpcoming?: boolean;
    hasAdd?: boolean;
    addCourse?: () => void
}

const GeneralHeader: React.FC<GeneralHeaderProps> = ({hasBack = true, hasMore = true, titleContent, goBack=()=>{}, isTasks=false, goCompleted, goUpcoming, isUpcoming=true, hasAdd=false, addCourse}) => {
    const activeStyle = {
        backgroundColor: '#F1F3FF',
    }
    const inActiveStyle = {
        backgroundColor: '#ffffff',
    }
    return (
    <View style={styles.container}>
        {/* <StatusBarBackGround /> */}
        <View style={{height: statusBarIgnore}}/>
        <View style={styles.inner}>
            <View style={styles.mainLayer}>
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
                { hasAdd &&
                <TouchableOpacity>
                    <AddIcon />
                </TouchableOpacity>
                }
            </View>
            {isTasks &&
            <View style={styles.options}>
                <TouchableOpacity style={[styles.option, {backgroundColor: isUpcoming ? '#F1F3FF' : '#ffffff'}]} onPress={goUpcoming}>
                    <Text style={styles.optionContent}>Upcoming</Text>
                    <NumberIndicator payload={2} size={24}/>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.option, {backgroundColor: !isUpcoming ? '#F1F3FF' : '#ffffff'}]} onPress={goCompleted}>
                    <Text style={styles.optionContent}>Completed</Text>
                    <NumberIndicator payload={2} size={24}/>
                </TouchableOpacity>
            </View>}
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
        paddingHorizontal: 24,
        paddingVertical: 16,
    },
    inner: {
        alignItems: 'center',
        width: '100%',
        justifyContent: 'space-between',
    },
    mainLayer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        alignItems: 'center',
    },
    title: {
        fontSize: StyleSheetLibrary.fontSizeSmallTitle,
        fontWeight: '500',
        lineHeight: 24,
    },
    options: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 12,
        width: '100%',
    },
    option: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 12,
        width: '48%',
        alignItems: 'center',
        // backgroundColor: '#F1F3FF',
        borderRadius: 40,
    },
    optionContent: {
        fontSize: StyleSheetLibrary.fontSizeText,
        fontWeight: '600',
        lineHeight: 18,
        width: '70%',
        textAlign: 'center',
    }
});

export default GeneralHeader;