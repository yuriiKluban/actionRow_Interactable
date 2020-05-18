import React, {memo, ReactElement, useRef, useState} from 'react';
import {
  View,
  Animated,
  TouchableHighlight,
  LayoutChangeEvent,
} from 'react-native';
import styles from './styles';
import Interactable, {
  INativeDragEvent,
  INativeSnapEvent,
} from 'react-native-interactable';
import {IActionButtons} from '../../utils/models';
import ActionButtons from './acttionButtons/ActionButtons';
import {Colors} from 'react-native/Libraries/NewAppScreen';

interface Props {
  damping: number;
  tension: number;
  children: ReactElement | null;
  underSwipeBackground: string;
  leftButtons: IActionButtons[];
  rightButtons: IActionButtons[];
}
interface State {
  isMoving: boolean;
  position: number;
}

interface IDimensions {
  width: number;
  height: number;
}

const defaultProps: Props = {
  damping: 0.4,
  tension: 600,
  children: null,
  underSwipeBackground: 'white',
  leftButtons: [],
  rightButtons: [],
};
const defaultState: State = {
  isMoving: false,
  position: 1,
};
const defaultDimensions = {
  width: 0,
  height: 0,
};

let deltaX = new Animated.Value(0);

const RowComponent = ({
  damping,
  tension,
  children,
  underSwipeBackground,
  leftButtons,
  rightButtons,
}: Props): ReactElement => {
  const [stateComponent, setState] = useState<State>(defaultState);
  const [
    rightButtonsContainerDimensions,
    setRightButtonsContainerDimensions,
  ] = useState<IDimensions>(defaultDimensions);
  const [
    leftButtonsContainerDimensions,
    setLeftButtonsContainerDimensions,
  ] = useState<IDimensions>(defaultDimensions);
  const interactableElemRef = useRef(null);

  const onSnap = ({nativeEvent}: {nativeEvent: INativeSnapEvent}): void => {
    const {index} = nativeEvent;
    setState({...stateComponent, position: index});
  };

  const onRowPress = (): void => {
    const {isMoving, position} = stateComponent;
    if (!isMoving && position !== 1) {
      interactableElemRef.current &&
        // @ts-ignore
        interactableElemRef.current.snapTo({index: 1});
    }
  };

  const onDrag = ({nativeEvent}: {nativeEvent: INativeDragEvent}): void => {
    const {state} = nativeEvent;
    if (state === 'start') {
      setState({...stateComponent, isMoving: true});
    }
  };

  const onStopMoving = (): void => {
    setState({...stateComponent, isMoving: false});
  };

  const onLayoutRightButtonsContainer = (event: LayoutChangeEvent): void => {
    const {width, height} = event.nativeEvent.layout;
    setRightButtonsContainerDimensions({width, height});
  };
  const onLayoutLeftButtonsContainer = (event: LayoutChangeEvent): void => {
    const {width, height} = event.nativeEvent.layout;
    setLeftButtonsContainerDimensions({width, height});
  };

  const activeOpacity = stateComponent.position !== 1 ? 0.5 : 1;
  const containerHeight =
    leftButtonsContainerDimensions.height >
    rightButtonsContainerDimensions.height
      ? leftButtonsContainerDimensions.height
      : rightButtonsContainerDimensions.height;

  return (
    <View style={{backgroundColor: underSwipeBackground}}>
      <View
        onLayout={onLayoutRightButtonsContainer}
        style={styles.rightButtonsWrapper}>
        <ActionButtons buttons={rightButtons} />
      </View>

      <View
        onLayout={onLayoutLeftButtonsContainer}
        style={styles.leftButtonsWrapper}>
        <ActionButtons buttons={leftButtons} />
      </View>

      <Interactable.View
        ref={interactableElemRef}
        horizontalOnly={true}
        snapPoints={[
          {
            x: leftButtonsContainerDimensions.width,
            damping: 1 - damping,
            tension,
          },
          {x: 0, damping: 1 - damping, tension},
          {
            x: -rightButtonsContainerDimensions.width,
            damping: 1 - damping,
            tension,
          },
        ]}
        onSnap={onSnap}
        onDrag={onDrag}
        onStop={onStopMoving}
        dragToss={0.01}
        animatedNativeDriver={true}
        dragWithSpring={{tension, damping}}
        animatedValueX={deltaX}>
        <TouchableHighlight
          onPress={onRowPress}
          activeOpacity={activeOpacity}
          underlayColor={Colors.white}>
          <View
            style={{
              ...styles.interactableContainer,
              height: containerHeight,
            }}>
            {children}
          </View>
        </TouchableHighlight>
      </Interactable.View>
    </View>
  );
};

RowComponent.defaultProps = defaultProps;

const Row = memo(RowComponent);

export default Row;
