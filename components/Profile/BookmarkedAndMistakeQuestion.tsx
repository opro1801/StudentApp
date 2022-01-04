import React from 'react';
import { StyleSheet, View, Text, Dimensions, TouchableOpacity } from 'react-native';
import BookmarkIcon from '../../icons/BookmarkIcon';
import XSquareIcon from '../../icons/XSquareIcon';
import StyleSheetLibrary from '../../stylesheet/StyleSheetLibrary';
import RightArrowIcon from '../../icons/RightArrowIcon';
import VideoIcon from '../../icons/VideoIcon';
import ConceptIcon from '../../icons/ConceptIcon';

const { width, height} = Dimensions.get('window');

interface BookmarkedAndMistakeQuestionProps {
    isList?: boolean;
}

const BookmarkedAndMistakeQuestion = ({isList=false}: BookmarkedAndMistakeQuestionProps) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <BookmarkIcon />
                <Text style={styles.headerText}>My Bookmarks</Text>
            </View>
            {!isList &&
            <View style={styles.squareOptions}>
                <View style={styles.row}>
                    <View style={[styles.square, {backgroundColor: '#3145F5'}]}>
                        <View style={styles.indicatorIcon}>
                            <BookmarkIcon strokeColor='white'/>
                        </View>
                        <Text style={styles.bookmarkText}>Bookmarked Question</Text>
                        <TouchableOpacity style={styles.rightArrow}>
                            <RightArrowIcon />
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.square, {backgroundColor: '#F95141'}]}>
                        <View style={styles.indicatorIcon}>
                            <XSquareIcon />
                        </View>
                        <Text style={styles.bookmarkText}>Mistaken Question</Text>
                        <TouchableOpacity style={styles.rightArrow}>
                            <RightArrowIcon />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{height: 8}} />
                <View style={styles.row}>
                    <View style={[styles.square, {backgroundColor: '#109CF1'}]}>
                        <View style={styles.indicatorIcon}>
                            <VideoIcon />
                        </View>
                        <Text style={styles.bookmarkText}>Bookmarked Videos</Text>
                        <TouchableOpacity style={styles.rightArrow}>
                            <RightArrowIcon />
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.square, {backgroundColor: '#885AF8'}]}>
                        <View style={styles.indicatorIcon}>
                            <ConceptIcon />
                        </View>
                        <Text style={styles.bookmarkText}>Bookmarked Concepts</Text>
                        <TouchableOpacity style={styles.rightArrow}>
                            <RightArrowIcon />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            }
            {isList &&
            <View style={styles.listOptions}>
                <View style={[styles.listItem, {backgroundColor: '#3145F5'}]}>
                    <View style={styles.indicatorIconList}>
                        <BookmarkIcon strokeColor='white'/>
                    </View>
                    <Text style={styles.lineText}>Bookmarked Question</Text>
                    <TouchableOpacity style={styles.rightArrowList}>
                        <RightArrowIcon />
                    </TouchableOpacity>
                </View>
                <View style={{height: 8}}/>
                <View style={[styles.listItem, {backgroundColor: '#F95141'}]}>
                    <View style={styles.indicatorIconList}>
                        <BookmarkIcon strokeColor='white'/>
                    </View>
                    <Text style={styles.lineText}>Bookmarked Question</Text>
                    <TouchableOpacity style={styles.rightArrowList}>
                        <RightArrowIcon />
                    </TouchableOpacity>
                </View>
                <View style={{height: 8}}/>
                <View style={[styles.listItem, {backgroundColor: '#109CF1'}]}>
                    <View style={styles.indicatorIconList}>
                        <BookmarkIcon strokeColor='white'/>
                    </View>
                    <Text style={styles.lineText}>Bookmarked Question</Text>
                    <TouchableOpacity style={styles.rightArrowList}>
                        <RightArrowIcon />
                    </TouchableOpacity>
                </View>
                <View style={{height: 8}}/>
                <View style={[styles.listItem, {backgroundColor: '#885AF8'}]}>
                    <View style={styles.indicatorIconList}>
                        <BookmarkIcon strokeColor='white'/>
                    </View>
                    <Text style={styles.lineText}>Bookmarked Question</Text>
                    <TouchableOpacity style={styles.rightArrowList}>
                        <RightArrowIcon />
                    </TouchableOpacity>
                </View>
            </View>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 24,
        paddingVertical: 16,
        backgroundColor: '#ffffff',
        marginBottom: 16,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    headerText: {
        flex: 1,
        marginLeft: 8,
        fontSize: StyleSheetLibrary.fontSizeSmallTitle,
        fontWeight: '600',
        lineHeight: 24,
    },
    squareOptions: {
        flex: 1,
        marginTop: 12,

    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 1,
    },
    square: {
        width: (width - 48 - 8)/2,
        padding: 12,
        borderRadius: 8,
    },
    bookmarkText: {
        color: '#ffffff',
        height: 48,
        lineHeight: 24,
        fontSize: StyleSheetLibrary.fontSizeSmallTitle,
        fontWeight: '600',
        justifyContent: 'center',
        marginBottom: 12,
    },
    rightArrow: {
        alignItems: 'flex-end',
    },
    indicatorIcon: {
        marginBottom: 12,
    },
    listOptions: {
        marginTop: 12,
    },
    listItem: {
        width: '100%',
        borderRadius: 8,
        padding: 16,
        height: 56,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    lineText: {
        fontSize: StyleSheetLibrary.fontSizeSmallTitle,
        fontWeight: '600',
        lineHeight: 24,
        flex: 1,
        color: '#ffffff',
    },
    indicatorIconList: {
        marginRight: 12,
    },
    rightArrowList: {
        marginLeft: 12,
    }
})

export default BookmarkedAndMistakeQuestion;