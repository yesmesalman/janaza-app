import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  Button,
  Image,
  ActivityIndicator,
  Dimensions,
  TouchableWithoutFeedback
} from 'react-native';

import Styles, { appWhite } from './Styles';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Toolbar: () => React$Node = ({title, addButtonFunc}) => {
    return(
        <View style={Styles.containerScreenToolbar}>
            <Text style={Styles.screenTitle}>{title}</Text>
            {
                (title == 'Explore') &&
                <TouchableOpacity style={Styles.toolbarRightButton} onPress={addButtonFunc}>
                    <EntypoIcon name="plus" size={34} color={appWhite} />
                </TouchableOpacity>
            }
        </View>
    )
}


export default Toolbar;