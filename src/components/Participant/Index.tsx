import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './Styles';


type Props = {
    name: string;
    onRemove: () => void;
}

export function Participant(props: Props) {
  return (
    <View style={styles.container}>
        <Text style={styles.name}>{props.name}</Text>

        <TouchableOpacity 
            style={styles.button}
            onPress={props.onRemove}
            >
            <Text style={styles.btnTxt}>-</Text>
        </TouchableOpacity>
    
    </View>
  )
}