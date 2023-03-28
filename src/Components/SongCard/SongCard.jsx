import React, { useState } from 'react';
import {
    View,
    Image,
    Text,
} from 'react-native';
import styles from './SomgCard.styles'


const SongCard = props => {
    return (
        <View style={styles.Card_Container}>

            <Image style={styles.image} source={{ uri: props.song.imageUrl }} />

            <View style={styles.inner_Container}>
                <Text style={styles.title}>{props.song.title}</Text>

                <View style={styles.info_Container}>

                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.artists}>{props.song.artist}</Text>
                        <Text style={styles.releaseDate}>{props.song.year}</Text>
                    </View>
                    {
                    props.song.isSoldOut && 
                    <View style={styles.soldOutContainer}>
                        <Text style={styles.soldOutYazi}>TÜKENDİ</Text>
                    </View>
                    }

                </View>
                
                <View style={styles.albumeContainer}>
                    <Text style={styles.artists}>{props.song.album}</Text>
                </View>
            </View>
        </View>
    );
}

export default SongCard;