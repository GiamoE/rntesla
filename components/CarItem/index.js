import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import StyledButton from '../StyledButton';
import styles from './styles';

const CarItem = (props) => {

    const { name, tagline, taglineCTA, image } = props.car;

    return (
        <View style={styles.carContainer}>
      
        <ImageBackground 
        //   source={require('../../assets/images/ModelS.jpeg')} 
            source={image}
            style={styles.image}
        />
  
        <View style={styles.titles}>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.subTitle}>{tagline}{''}
            <Text style={styles.subTitleCTA}>
                
                {taglineCTA}
            </Text>
        </Text>
        
        </View>

        <View style={styles.buttonContainer}>
            <StyledButton 
                type="primary" 
                content={"Custom Order"}
                onPress={() => {
                    console.warn ("Giamo has ordered Kimi a custom Tesla");
                }} 
            />

            <StyledButton 
                type="secondary" 
                content={"Existing inventory"}
                onPress={() => {
                    console.warn ("Existing inventory was pressed")
                }} 
            />
        </View>
      </View>
    )
}

export default CarItem;