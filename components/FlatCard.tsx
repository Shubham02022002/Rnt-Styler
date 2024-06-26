/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const FlatCard = (): JSX.Element => {
    return (
        <View>
            <Text style={styles.headingText}>FlatCard</Text>
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
            </View>
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
    },
    cardTwo: {
        backgroundColor: '#50DBB4',
    },
    cardThree: {
        backgroundColor: '#5DA3FA',
    },
});


export default FlatCard;