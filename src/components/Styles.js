import { StyleSheet, Text, Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const appMainColor = '#081021'; //'#1fd1c4';
const appMainColorLight = '#092355'; //'#71e1d9';
const appWhite = '#fff';
const appWhiteLight = '#ffffff8c';
const appBackgroundWhite = '#f8f8f8';

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: appBackgroundWhite,
        paddingHorizontal: 15
    },
    containerContentCenter: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 15
    },
    appScreen: {
        paddingTop: 15
    },
    screenTitle: {
        fontSize: 30,
        fontWeight: 'bold'
    },
    appScreenScrollView: {
        marginVertical: 15 
    },
    appLogo: {
        fontSize: 25,
        marginBottom: 15
    },
    textField: {
        height: 40, 
        borderColor: 'gray', 
        borderWidth: 1,
        width: (windowWidth/100) * 80,
        borderWidth: 0,
        borderBottomColor: appMainColor,
        borderBottomWidth: 1,
        marginBottom: 8
    },
    bottomTab: {
        flex: 1, 
        height: 50, 
        justifyContent: 'center', 
        alignItems: 'center',
        backgroundColor: appMainColor
    },
    bottomTabActive: {
    },
    bottomTabText: {
        color: appWhiteLight
    },
    bottomTabTextActive: {
        color: appWhite,
        fontWeight: 'bold'
    },
    btnFullRound: {
        width: (windowWidth/100) * 80,
        height: 50,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: appMainColor,
        borderRadius: 50
    },
    textWhite: {
        color: appWhite
    },
});


export default Styles;
export {
    appMainColor,
    appMainColorLight,
    appWhite,
    appWhiteLight
}