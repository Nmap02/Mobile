import React from "react";
import { View, StyleSheet } from "react-native";
import Colecao from "./Colecao";

export default function App() {
    return (
        <View style={styles.container}>
            <Colecao />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});