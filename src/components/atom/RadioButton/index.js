import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    Pressable
} from 'react-native'
import { colors } from '../../../utils'

const RadioButton = ({ active, style, value, onPress }) => {
    return(
        
        <Pressable onPress={onPress} style={styles.main}>
            <View style={[styles.wrapper, style]}>
                {
                    active ? <View style={styles.active} /> : null
                }
            </View>
            <Text style={styles.txtTitle}>{ value }</Text>
        </Pressable>
        
    )
}

export default RadioButton;

const styles = StyleSheet.create({
    main:{
        display:'flex',
        width:'100%',
        flexDirection:'row',
        alignItems:'center',
    },
    wrapper:{
        height: 24,
        width: 24,
        borderRadius: 12,
        borderWidth: 2,
        borderColor: colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight:10
    },
    active:{
        height: 12,
        width: 12,
        borderRadius: 6,
        backgroundColor: colors.primary,
    },
    txtTitle:{
        fontSize:15,
        color:colors.text.primary
    }
})