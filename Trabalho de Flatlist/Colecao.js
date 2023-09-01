import React, { useState, useRef } from "react";
import { View, StyleSheet, FlatList, Image, Dimensions, TouchableOpacity, Text } from "react-native";

const IMAGES = [
    {
        id: "1",
        image: require("./imagens/representacao-mercurio.webp"),
    },
    {
        id: "2",
        image: require("./imagens/representacao-venus.webp"),
    },
    {
        id: "3",
        image: require("./imagens/representacao-terra.webp"),
    },
    {
        id: "4",
        image: require("./imagens/representacao-marte.webp"),
    },
    {
        id: "5",
        image: require("./imagens/representacao-jupiter.webp"),
    },
    {
        id: "6",
        image: require("./imagens/representacao-saturno.webp"),
    },
    {
        id: "7",
        image: require("./imagens/representacao-urano.webp"),
    },
    {
        id: "8",
        image: require("./imagens/representacao-netuno.webp"),
    },
    {
        id: "9",
        image: require("./imagens/representacao-plutao.webp"),
    },
];

const windowWidth = Dimensions.get("window").width;

const Colecao = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const flatListRef = useRef(null);

    const handleNextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % IMAGES.length);
        flatListRef.current.scrollToIndex({ index: currentIndex + 1 });
    };

    const renderItem = ({ item }) => (
        <View
            style={{ flex: 1, marginRight: 10, width: windowWidth }}
        >
            <Image 
                source={item.image} 
                style={[styles.image, { transform: [{ rotate: "90deg" }] }]}
                resizeMode="contain"
            />
        </View>
    );

    return (
        <View style={styles.container}>
            <FlatList
                ref={flatListRef}
                data={IMAGES}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                initialScrollIndex={currentIndex}
                getItemLayout={(data, index) => ({
                    length: windowWidth,
                    offset: windowWidth * index,
                    index,
                })}
            />
            <TouchableOpacity style={styles.button} onPress={handleNextImage}>
                <Text style={styles.buttonText}>Próxima Imagem</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        flex: 1,
        width: "100%",
        height: "100%",
        alignSelf: "center",
    },
    button: {
        backgroundColor: "blue",
        padding: 10,
        margin: 10,
        borderRadius: 5,
        alignItems: "center",
    },
    buttonText: {
        color: "white",
        fontWeight: "bold",
    },
});

export default Colecao;
