import React, {Component} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { event } from 'react-native-reanimated';

const SERVER_URL = `https://janaza.fr/wp-json/api/`;

const applyLetterSpacing = (string, count = 1) => {
    return string.split('').join('\u200A'.repeat(count));
};

const apiRequest = (path) => {
  return fetch(`${SERVER_URL}${path}`, { method: 'GET'});
}

const sortApiDate = (date) => {
  let arr = date.split('-')
  return arr[2]+'-'+arr[1]+'-'+arr[0]
}

const convertApiTimeToAMPM = (timeString) => {
  var hourEnd = timeString.indexOf(":");
  var H = +timeString.substr(0, hourEnd);
  var h = H % 12 || 12;
  var ampm = (H < 12 || H === 24) ? " AM" : " PM";
  timeString = h + timeString.substr(hourEnd, 3) + ampm;
  return timeString
}

const monthNames = ["", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export default class Global {
  static savedEvents = [];
  static franceEvents = [];
  static provinceEvents = [];

  // static API_DATA_TIMER = 0;

  static init = async () => {
    try {
      let e = await AsyncStorage.getItem('savedEvents');
      if (e != null) {
        Global.savedEvents = JSON.parse(e);
      }

      let r = await AsyncStorage.getItem('franceEvents');
      if (r != null) {
        Global.franceEvents = JSON.parse(r);
      }

      let t = await AsyncStorage.getItem('provinceEvents');
      if (t != null) {
        Global.provinceEvents = JSON.parse(t);
      }

    } catch (error) {
        console.log(error);
    }
  }

  static toggleSaveEvents = async (eventId) => {
    let itemIndex = Global.savedEvents.indexOf(eventId)
    var toReturn = true

    if(itemIndex === -1){
      Global.savedEvents.push(eventId)
    } else{
      Global.savedEvents.splice(itemIndex, 1)
      toReturn = false
    }
    await Global.saveEventsInStorage();
    return toReturn
  }

  static saveEventsInStorage = async () => {
    try {
      await AsyncStorage.setItem('savedEvents', JSON.stringify(Global.savedEvents));
      await AsyncStorage.setItem('franceEvents', JSON.stringify(Global.franceEvents));
      await AsyncStorage.setItem('provinceEvents', JSON.stringify(Global.provinceEvents));

    } catch (error) {
      console.log(error);
    }
  }

  static limitString = (str, limit) => {
    if(str.length <= limit){
      return str;
    }
    return str.substring(0, limit)+'...';
  }

  // static restartTimer = () => {
  //   var interval = setInterval(() => {
  //     if(Global.API_DATA_TIMER === 3){
  //       clearInterval(interval)
  //     }
  //     Global.API_DATA_TIMER++
  //   }, 1000);
  // }
}

export {
    applyLetterSpacing,
    apiRequest,
    sortApiDate,
    convertApiTimeToAMPM,
    monthNames
};