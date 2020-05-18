import React, {memo, ReactElement} from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import Row from './Row';
import {IActionButtons} from '../../utils/models';
import {Colors} from 'react-native/Libraries/NewAppScreen';

interface Props {
  damping: number;
  tension: number;
  swipeElement: ReactElement | null;
  underSwipeBackground: string;
  leftButtons: IActionButtons[];
  rightButtons: IActionButtons[];
}

const defaultProps: Props = {
  damping: 0.4,
  tension: 600,
  swipeElement: null,
  underSwipeBackground: Colors.white,
  leftButtons: [],
  rightButtons: [],
};

const ActionRowComponent = ({
  damping,
  tension,
  swipeElement,
  underSwipeBackground,
  leftButtons,
  rightButtons,
}: Props): ReactElement => {
  return (
    <Row
      damping={damping}
      tension={tension}
      underSwipeBackground={underSwipeBackground}
      leftButtons={leftButtons}
      rightButtons={rightButtons}>
      {swipeElement ? (
        swipeElement
      ) : (
        <View style={styles.rowContent}>
          <View style={styles.rowIcon} />
          <View>
            <Text style={styles.rowTitle}>Row Title</Text>
            <Text style={styles.rowSubtitle}>Drag the row left and right</Text>
          </View>
        </View>
      )}
    </Row>
  );
};

ActionRowComponent.defaultProps = defaultProps;

const ActionRow = memo(ActionRowComponent);

export default ActionRow;
