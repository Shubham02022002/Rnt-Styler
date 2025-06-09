import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'

interface CardComponentProps {
    backgroundColor: string;
    text: string;
    textColor?: string;
}

const CardComponent = ({ backgroundColor, text, textColor = 'white' }: CardComponentProps) => {
    return (
        <View style={[styles.card, { backgroundColor }]}>
            <Text style={{ color: textColor, fontWeight: 'bold' }}>{text}</Text>
        </View>
    )
}

export default function FlatCard() {
    const cardData = [
        { id: 1, backgroundColor: "#EF5354", text: "Red" },
        { id: 2, backgroundColor: "blue", text: "Blue" },
        { id: 3, backgroundColor: "green", text: "Green" },
        { id: 4, backgroundColor: "orange", text: "Orange" },
        { id: 5, backgroundColor: "purple", text: "Purple" },
        { id: 6, backgroundColor: "pink", text: "Pink" },
        { id: 7, backgroundColor: "brown", text: "Brown" },
    ]

    return (
        <View style={{ backgroundColor: 'white' }}>
            <Text style={styles.headingText}>FlatCard</Text>
            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                style={styles.container}
                contentContainerStyle={styles.scrollContent}
            >
                {cardData.map((card) => (
                    <CardComponent
                        key={card.id}
                        backgroundColor={card.backgroundColor}
                        text={card.text}
                    />
                ))}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        paddingHorizontal: 8,
        fontWeight: "bold",
    },
    container: {
        paddingHorizontal: 8,
    },
    scrollContent: {
        paddingRight: 8,
    },
    card: {
        width: 100,
        height: 100,
        padding: 4,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#333',
        borderRadius: 4,
        marginRight: 8,
        marginVertical: 8,
    },
})