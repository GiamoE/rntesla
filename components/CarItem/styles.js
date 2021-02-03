import { StyleSheet, Dimensions } from 'react-native'; 

const styles = StyleSheet.create({
    carContainer: {
        width: '100%',
        height: Dimensions.get('window').height + 20
      },
      titles: {
        marginTop: '30%',
        width: '100%',
        alignItems: 'center'
      },
      title: {
        fontSize: 40,
        fontWeight: '500' 
    
      },
      subTitle: {
        fontSize: 16,
        color: '#5c5e62'
      },
      subTitleCTA: {
        textDecorationLine: 'underline'
      },
      image: {
        width: '100%',
        height: Dimensions.get('window').height,
        resizeMode: 'cover',
        position: 'absolute'
      },
      buttonContainer: {
        position: 'absolute',
        bottom: 50,
        width: '100%'
      }
});

export default styles;