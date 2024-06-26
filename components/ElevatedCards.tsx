/* eslint-disable prettier/prettier */
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const ElevatedCards = (): JSX.Element => {
    return (
        <View>
            <Text style={styles.headingText}>ElevatedCards</Text>
            <ScrollView horizontal={true} >
                <View style={styles.container}>
                    <View style={[styles.card, styles.cardOne]}>
                        <Text>Red</Text>
                    </View>
                    <View style={[styles.card, styles.cardTwo]}>
                        <Text>Green</Text>
                    </View>
                    <View style={[styles.card, styles.cardThree]}>
                        <Text>Blue</Text>
                    </View>
                    <View style={[styles.card, styles.cardThree]}>
                        <Text>Blue</Text>
                    </View>
                    <View style={[styles.card, styles.cardThree]}>
                        <Text>Blue</Text>
                    </View>
                    <View style={[styles.card, styles.cardThree]}>
                        <Text>Blue</Text>
                    </View>
                    <View style={[styles.card, styles.cardThree]}>
                        <Text>Blue</Text>
                    </View>
                    <View style={[styles.card, styles.cardThree]}>
                        <Text>Blue</Text>
                    </View>
                    <View style={[styles.card, styles.cardThree]}>
                        <Text>Blue</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'aqua',
        paddingHorizontal: 10,
    },
    container: {
        flex: 1,
        padding: 8,
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderRadius: 4,
        margin: 8,
        elevation: 5,
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    card: {
        flex: 1,
        width: 100,
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
        margin: 8,
    },
    cardOne: {
        backgroundColor: '#EF5354',
        elevation: 10,
    },
    cardTwo: {
        backgroundColor: '#50DBB4',
        elevation: 20,
    },
    cardThree: {
        backgroundColor: '#5DA3FA',
        elevation: 30,
    },
});

export default ElevatedCards;