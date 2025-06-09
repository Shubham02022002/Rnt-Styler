import { Image, StyleSheet, Text, View, ScrollView } from 'react-native';
import React from 'react';

const places = [
    {
        imgUrl: "https://media.gettyimages.com/id/1249536651/photo/katra-india-a-view-of-newly-constructed-chenab-bridge-worlds-highest-rail-arch-bridge-of.jpg?s=612x612&w=0&k=20&c=uBH6BWLAL5vgascZuHds_IZdZ2dFV6OkvkJx15M1oQE=",
        title: "Chenab Rail Bridge",
        location: "Jammu & Kashmir",
        description: "World's highest railway arch bridge at 359 meters above the Chenab River",
        distance: "5 hrs away"
    },
    {
        imgUrl: "https://media.istockphoto.com/id/479527588/photo/students-enjoy-on-vacation-at-view-point-of-pahalgam-india.jpg?s=612x612&w=0&k=20&c=ZGt_gKy0WYaAvhNWPCch8xFqFELISulnK6zvuFp-WB4=",
        title: "Betaab Valley",
        location: "Pahalgam, Jammu & Kashmir",
        description: "Scenic valley named after the Bollywood movie Betaab, surrounded by snow-capped mountains",
        distance: "10 hrs away"
    },
    {
        imgUrl: "https://images.unsplash.com/photo-1730620776114-876458fdbf2e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGdvbGRlbiUyMHRlbXBsZSUyMGFtcml0c2FyfGVufDB8fDB8fHww",
        title: "Golden Temple",
        location: "Amritsar",
        description: "Glistening Sikh shrine with sacred sarovar",
        distance: "4 hrs away"
    },
    {
        imgUrl: "https://images.unsplash.com/photo-1625654325562-762dcec9e6f2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8TGl2aW5nJTIwUm9vdCUyMEJyaWRnZXxlbnwwfHwwfHx8MA%3D%3D",
        title: "Living Root Bridges",
        location: "Meghalaya",
        description: "Natural bridges grown over centuries from rubber tree roots",
        distance: "8 hrs away"
    },
    {
        imgUrl: "https://www.shutterstock.com/shutterstock/videos/3664727891/thumb/1.jpg?ip=x480",
        title: "Mumbai Coastal Road",
        location: "Mumbai",
        description: "India's most ambitious urban infrastructure project along the western coastline",
        distance: "2 hrs away"
    },
    {
        imgUrl: "https://media.istockphoto.com/id/803612302/photo/multicolored-sunset-landscape-silhouette-of-the-great-rann-of-kutch-gujarat.jpg?s=612x612&w=0&k=20&c=NmO9VN5HWZLS2732Tlwv5RXdauoGMxwUl10x4FGAtm8=",
        title: "Rann of Kutch",
        location: "Gujarat",
        description: "Stunning white salt desert that transforms during sunset and full moon nights",
        distance: "7 hrs away"
    }
];
export default function FancyCard() {
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <Text style={styles.headingText}>Trending Places</Text>
            {places.map((place, index) => (
                <View key={index} style={styles.card}>
                    <Image source={{ uri: place.imgUrl }} style={styles.cardImage} />
                    <View style={styles.cardBody}>
                        <Text style={styles.cardTitle}>{place.title}</Text>
                        <Text style={styles.cardLocation}>{place.location}</Text>
                        <Text style={styles.cardDescription}>{place.description}</Text>
                        <Text style={styles.cardDistance}>{place.distance}</Text>
                    </View>
                </View>
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 22,
        fontWeight: 'bold',
        padding: 16,
        color: '#333',
        backgroundColor: '#f0f0f0'
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 10,
        margin: 10,
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 6,
    },
    cardImage: {
        height: 200,
        width: '100%',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    cardBody: {
        padding: 16,
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#222',
    },
    cardLocation: {
        fontSize: 14,
        color: '#666',
        marginTop: 4,
    },
    cardDescription: {
        fontSize: 13,
        color: '#444',
        marginTop: 6,
    },
    cardDistance: {
        fontSize: 12,
        color: '#888',
        marginTop: 10,
        fontStyle: 'italic',
    }
});
