import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import GeneralHeader from "../../../components/GeneralHeader";
import BookmarkedAndMistakeQuestion from "../../../components/Profile/BookmarkedAndMistakeQuestion";
import LanguageAndLocationPreference from "../../../components/Profile/LanguageAndLocationPreference";
import ProfileHeader from "../../../components/Profile/ProfileHeader";
import StatusBarBackGround, { headerIgnore } from "../../../components/StatusBarBackGround";

const ProfileScreen = () => {
    return (
      <View style={styles.container}>
        <GeneralHeader titleContent="My Profile" hasBack={false} hasMore={false}/>
        <ScrollView>
          <View style={{height: headerIgnore}}/>
          <ProfileHeader />
          <BookmarkedAndMistakeQuestion />
          <BookmarkedAndMistakeQuestion isList={true}/>
          <LanguageAndLocationPreference />
        </ScrollView>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})

export default ProfileScreen;
  