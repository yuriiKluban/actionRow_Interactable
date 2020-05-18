import React, {ReactElement} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  StatusBar,
  Text,
  Alert,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import ActionRow from './src/components/actionRow/ActionRow';
import {IActionButtons} from './src/utils/models';

const App = (): ReactElement => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{flex: 1}}>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}
          contentContainerStyle={{flex: 1}}>
          <ActionRow
            damping={damping}
            tension={tension}
            swipeElement={swipeElement}
            underSwipeBackground={underSwipeBackground}
            leftButtons={leftButtons}
            rightButtons={rightButtons}
          />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.white,
  },
  buttonsText: {
    fontSize: 16,
    color: Colors.white,
  },
});

// Example props.

const damping: number = 0.4;
const tension: number = 600;
const swipeElement: ReactElement | null = null;
const underSwipeBackground: string = Colors.white;
const leftButtons: IActionButtons[] = [
  {
    containerStyle: {
      width: 75,
      height: 75,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#339FFF',
    },
    onPress: (): void => {
      Alert.alert(`Button pressed`);
    },
    children: <Text style={styles.buttonsText}>Left</Text>,
  },
];
const rightButtons: IActionButtons[] = [
  {
    containerStyle: {
      width: 75,
      height: 75,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#CACFD2',
    },
    onPress: (): void => {
      Alert.alert(`Button pressed`);
    },
    children: <Text style={styles.buttonsText}>Right 1</Text>,
  },
  {
    containerStyle: {
      width: 75,
      height: 75,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F1C40F',
    },
    onPress: (): void => {
      Alert.alert(`Button pressed`);
    },
    children: <Text style={styles.buttonsText}>Right 2</Text>,
  },
  {
    containerStyle: {
      width: 75,
      height: 75,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#E74C3C',
    },
    onPress: (): void => {
      Alert.alert(`Button pressed`);
    },
    children: <Text style={styles.buttonsText}>Right 3</Text>,
  },
];

export default App;
