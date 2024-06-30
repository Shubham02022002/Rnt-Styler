/* eslint-disable prettier/prettier */
import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const FancyCards = (): JSX.Element => {
    return (
        <View>
            <Text style={styles.headingText}>Trending Places</Text>
            <View style={[styles.card, styles.cardElevated]}>
                <Image source={{
                    uri: 'https://blog.thomascook.in/wp-content/uploads/2018/04/placestovisitinindiablog.jpg',
                }}
                    style={styles.cardImage}
                />
                <View style={styles.cardBody}>
                    <Text style={styles.cardTitle}>Lotus Temple</Text>
                    <Text style={styles.cardLabel}>Delhi</Text>
                    <Text style={styles.cardDescription}>This is Lotus Temple situated
                        on one of the banks in the northen region.</Text>
                    <Text style={styles.cardFooter}>12 minutes away </Text>
                </View>
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    headingText: {
        alignContent: 'center',
    },
    card: {

    },
    cardElevated: {

    },
    cardImage: {
        height: 180,
        width: 385,
    },
    cardBody: {

    },
    cardTitle: {

    },
    cardLabel: {

    },
    cardDescription: {

    },
    cardFooter: {

    }
});


export default FancyCards;

