import { StyleSheet } from 'react-native'
import { colors, fonts } from '../../theme'

export const styles = StyleSheet.create({
  buttonContainer: {
    position: 'absolute',
    bottom: 20,
    right: 20
  },
  button: {
    width: 65,
    height: 65,
    borderRadius: 100,
    backgroundColor: colors.backgroundDark,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color: colors.white,
    fontFamily: fonts.light,
    fontSize: fonts.xl,
    fontWeight: fonts.extraBold
  }
})
