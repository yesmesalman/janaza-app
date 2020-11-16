import { StyleSheet, Text, Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const appBlack = '#000';
const appWhite = '#fff';
const appWhiteLight = '#ffffff8c';
const appBlackLight = '#00000094';

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: appWhite,
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
        borderBottomColor: appBlack,
        borderBottomWidth: 1,
        marginBottom: 8
    },
    bottomTab: {
        flex: 1, 
        height: 50, 
        justifyContent: 'center', 
        alignItems: 'center',
        backgroundColor: appBlack
    },
    bottomTabActive: {
    },
    bottomTabText: {
        color: appWhiteLight
    },
    bottomTabTextActive: {
        color: appWhite,
    },
    btnFullRound: {
        width: (windowWidth/100) * 80,
        height: 50,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: appBlack,
        borderRadius: 50
    },
    textWhite: {
        color: appWhite
    },
    profileContainer: {
        marginTop: 15,
        height: 100,
        width: '100%',
        flexDirection: 'row'
    },
    profileBox: {
        height: 100,
        width: 100,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    profileBoxImage: {
        height: 80,
        width: 80,
        borderRadius: 50
    },
    profileContainerRight: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    profileName: {
        fontWeight: 'bold',
        fontSize: 20
    },
    profileBio: {
        fontSize: 12,
        color: appBlackLight
    },

    exploreRow: {
        marginVertical: 3,
        height: 100,
        width: '100%',
        flexDirection: 'row'
    },
    exploreRowLeft: {
        height: 100,
        width: 100,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    exploreRowLeftImage: {
        height: 80,
        width: 80,
        borderRadius: 50
    },
    exploreRowRight: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    exploreRowName: {
        fontWeight: 'bold',
        fontSize: 20
    },
    exploreRowTime: {
        fontSize: 12,
        fontWeight: 'bold',
        color: appBlackLight
    },
    exploreRowAddress: {
        fontSize: 12,
        color: appBlackLight
    },
    settingsRow: {
        height: 50,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 5
    },
    settingsName: {
        fontSize: 18,
        color: appBlack
    },
    profileRow: {
        minHeight: 28,
        paddingVertical: 5,
        paddingLeft: 5,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
});


export default Styles;
export {
    appBlack,
    appBlackLight,
    appWhite,
    appWhiteLight
}