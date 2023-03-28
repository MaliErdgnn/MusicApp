import React, { useState } from 'react';
import { PropsWithChildren } from 'react';
import {
  SafeAreaView,
  FlatList,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import musicData from './music-data.json'
import SongCard from './Components/SongCard'
import SearchBar from './Components/SearchBar';

const app = () => {
  const [list, setList] = useState(musicData);

  const renderSong = ({ item }) => <SongCard song={item} />;

  const renderSeperator = () => <View style={styles.itemSeperator} ></View>;

  const handleSearch = (text) => {
    const filteredList = musicData.filter(song => {
      const searchedText = text.toLowerCase();
      const currentTitle = song.title.toLowerCase();

      return currentTitle.indexOf(searchedText) > -1;
    })
    setList(filteredList);
  };

  return (
    <SafeAreaView style={styles.container}>
      <SearchBar onSearch={handleSearch} />
      <FlatList
        data={list}
        keyExtractor={(item) => item.id}
        renderItem={renderSong}
        ItemSeparatorComponent={renderSeperator}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemSeperator: {
    borderWidth: 1,
    borderColor: '#e0e0e0',
  }
});

export default app;