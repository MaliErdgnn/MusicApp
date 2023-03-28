import {StyleSheet} from "react-native";

export default StyleSheet.create({
    image: {
        height:100,
        width: 100,
        borderRadius:50
    },
    Card_Container: {
        flex: 1,
        flexDirection: 'row',
        margin: 5,
    },
    inner_Container: {
        flex: 1,
        padding:7,
        
    },
    info_Container: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingTop:0,
    },
    albumeContainer: {
        flex: 1,

    },
    title: {
        color: 'black',
        fontSize:27,
        fontWeight: 'bold',
    },
    artists: {
        fontSize:18,
        marginRight:7,
    },
    releaseDate: {
        fontSize:18,
    },
    soldOutYazi: {
        fontSize:14,
        fontWeight: 'bold',
        color: 'red',
        flex:1,
    },
    soldOutContainer: {
        color: 'red',
        borderWidth: 1,
        borderColor: 'red',
        borderRadius: 5,
        padding:3,
    }
});