import React from 'react';
import { NativeModules } from 'react-native';

const { YouTubeStandalone } = NativeModules;

console.log("log");

export const YouTubeStandaloneIOS = !YouTubeStandalone
  ? null
  : {
      playVideo: (videoId,token) =>
        new Promise((resolve, reject) => {
          YouTubeStandalone.playVideo({videoId,token})
            .then(() => resolve())
            .catch(errorMessage => reject(errorMessage));
        }),
    };
