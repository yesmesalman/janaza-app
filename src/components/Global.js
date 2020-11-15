import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native'; 

const applyLetterSpacing = (string, count = 1) => {
    return string.split('').join('\u200A'.repeat(count));
};

export {
    applyLetterSpacing
};