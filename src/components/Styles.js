import { StyleSheet, Text, Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const appMainColor = '#081021'; //'#1fd1c4';
const appMainColorLight = '#092355'; //'#71e1d9';
const appWhite = '#fff';
const appWhiteLight = '#ffffff8c';
const appBlack = '#000';
const appBlackLight = '#737373';
const appBackgroundWhite = '#f0f0f0d1'; //'#f0e9e9'; //'#f8f8f8';
const appRed = 'red';

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: appWhite,
    },
    containerWithContentPadding: {
        paddingHorizontal: 15
    },
    containerScreenToolbar: {
        height: 50,
        width: '100%',
        // backgroundColor: 'gray',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingLeft: 15
    },
    containerContentCenter: {
        flex: 1,
        backgroundColor: appWhite,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 15
    },
    containerContentCenterForLoading: {
        height: windowHeight - 200,
        width: windowWidth,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    appScreen: {
        padding: 15
    },
    screenTitle: {
        fontSize: 40,
        // fontWeight: 'bold'
    },
    appScreenScrollView: {
        marginVertical: 15 
    },
    textTiny: {
        fontSize: 10
    },
    appLogo: {
        fontSize: 25,
        marginBottom: 15
    },
    recordsNotFoundText: {
        marginTop: 25, 
        fontSize: 20
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
        color: appWhiteLight,
        fontSize: 12
    },
    bottomTabTextActive: {
        color: appWhite,
        fontWeight: 'bold',
        fontSize: 12
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
    jListingRow: {
        minHeight: 100,
        width: '94%',
        flexDirection: 'row',
        backgroundColor: appWhite,
        marginLeft: '3%',
        marginVertical: 8,
        borderRadius: 8,
        shadowOffset: { height: 0, width: 0 }, 
        shadowColor: appBlackLight,
        shadowOpacity: 0.2,
        elevation: 6
    },
    jListingLeft: {
        width: 80,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    jListingDate: {
        fontSize: 50,
        fontWeight: 'bold',
        color: appMainColorLight
    },
    jListingMonth: {
        fontSize: 15,
        color: appMainColorLight
    },
    jListingCenter: {
        flex: 1,
        padding: 10,
        flexDirection: 'column'
    },
    jListingCenterTop: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    jListingCenterBottom: {
        flex: 1,
        height: 25,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end'
    },
    jListingRight: {
        width: 50,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    jListingRightSaveText: {
        marginTop: 5,
        fontWeight: 'bold',
        fontSize: 12
    },
    jListingRightSaveColor: {
        color: appRed
    },
    jListingCity: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
        color: appMainColorLight
    },
    jListingPrayer: {
        fontSize: 14,
    },
});


export default Styles;
export {
    appMainColor,
    appMainColorLight,
    appWhite,
    appWhiteLight,
    appBackgroundWhite,
    appBlack,
    appBlackLight,
    appRed
}