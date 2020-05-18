import {ViewStyle} from 'react-native';
import {ReactElement} from 'react';

export interface IActionButtons {
  containerStyle: ViewStyle; // button container style
  onPress: () => void; // button function onPress
  children: ReactElement; // inside button component (Text, Image, View...)
}
