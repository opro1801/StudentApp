import React from "react";
import { TouchableOpacity, Image, StyleSheet } from "react-native";
import BackButtonIcon from "../icons/BackButtonIcon";

interface backButtonProps {
    previousPage?: () => void;
}

const BackButton = ({previousPage} : backButtonProps) => {
    return (
    <TouchableOpacity onPress={previousPage}>
        <BackButtonIcon />
    </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    backButton: {
        width: 40,
        height: 40,
    }
})

export default BackButton;