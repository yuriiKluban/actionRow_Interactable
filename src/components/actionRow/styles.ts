import {ImageStyle, StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../../utils/constans';
import {Colors} from 'react-native/Libraries/NewAppScreen';

interface Style {
  container: ViewStyle;
  rowContent: ViewStyle;
  rowIcon: ImageStyle;
  rowTitle: TextStyle;
  rowSubtitle: TextStyle;
  button: ViewStyle;
  buttonImage: ImageStyle;
  playground: ViewStyle;
  playgroundLabel: TextStyle;
  leftButtonsWrapper: ViewStyle;
  rightButtonsWrapper: ViewStyle;
  interactableContainer: ViewStyle;
}

const styles = StyleSheet.create<Style>({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  rowContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#eeeeee',
    paddingVertical: 20,
  },
  rowIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#b5d9f8',
    margin: 20,
  },
  rowTitle: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  rowSubtitle: {
    fontSize: 18,
    color: Colors.gray,
  },
  button: {
    width: 75,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonImage: {
    width: 40,
    height: 40,
  },
  playground: {
    marginTop: SCREEN_HEIGHT <= 500 ? 0 : 80,
    padding: 20,
    width: SCREEN_WIDTH - 40,
    backgroundColor: '#459FED',
    alignItems: 'stretch',
    alignSelf: 'center',
  },
  playgroundLabel: {
    color: Colors.white,
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  leftButtonsWrapper: {
    position: 'absolute',
    left: 0,
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightButtonsWrapper: {
    position: 'absolute',
    right: 0,
    flexDirection: 'row',
    alignItems: 'center',
  },
  interactableContainer: {
    left: 0,
    right: 0,
    backgroundColor: Colors.white,
  },
});

export default styles;
