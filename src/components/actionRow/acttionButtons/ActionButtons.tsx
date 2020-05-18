import React, {memo, ReactElement} from 'react';
import {TouchableOpacity} from 'react-native';
import styles from '../styles';
import {IActionButtons} from '../../../utils/models';

interface Props {
  buttons: IActionButtons[];
}
const defaultProps: Props = {
  buttons: [],
};

const maxLengthArray: number = 3;

const ActionButtonsComponent = ({buttons}: Props): ReactElement => {
  const actionButtons =
    buttons.length > maxLengthArray
      ? buttons.splice(0, maxLengthArray)
      : buttons;

  const renderButtons = (): ReactElement[] =>
    actionButtons.map((el, index) => (
      <TouchableOpacity
        key={index.toString()}
        style={el.containerStyle || styles.button}
        onPress={el.onPress || null}>
        {el.children}
      </TouchableOpacity>
    ));

  return <>{renderButtons()}</>;
};
ActionButtonsComponent.defaultProps = defaultProps;
const ActionButtons = memo(ActionButtonsComponent);

export default ActionButtons;
