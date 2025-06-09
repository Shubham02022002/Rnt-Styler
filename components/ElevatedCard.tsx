import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { JSX } from 'react'

export default function ElevatedCard(): JSX.Element {
    return (
        <View style={{ backgroundColor: "white" }}>
            <Text style={styles.headingText}>ElevatedCard</Text>
            <ScrollView horizontal={true}
                showsHorizontalScrollIndicator={false}
                style={styles.container}>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text>Tap</Text>
                </View>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text>Tap</Text>
                </View>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text>Tap</Text>
                </View>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text>Tap</Text>
                </View>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text>Tap</Text>
                </View>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text>Tap</Text>
                </View>
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
        padding: 8,
    },
    card: {
        width: 100,
        height: 100,
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 4,
        margin: 6
    },
    cardElevated: {
        backgroundColor: '#CAD5E2',
        elevation: 5,
        // shadowColor: "red",
        // shadowOffset: {
        // height: 1,
        // width: 1
        // }
        shadowOpacity: 0.3,
        shadowRadius: 2
    }
})