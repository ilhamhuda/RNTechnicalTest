import React from 'react'
import {
    View,
     StyleSheet,
     TouchableWithoutFeedback
} from 'react-native'
import { colors } from '../../../utils';
import PropType from 'prop-types';

// MARK : List View - Transaction item list view component
const Card = ({children, type, style, onPress}) => {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={[styles.wrapper, style]}>
                <View style={[styles.line, {backgroundColor:type === 'pending' ? colors.primary : colors.secondary}]}/>
                {children}
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    wrapper:{
        width:'100%',
        borderRadius:10,
        height:100,
        overflow:'hidden',
        flexDirection:'row',
        backgroundColor:colors.white
    },
    line:{
        height:'100%',
        width:8,
        marginRight:5,
    }
});

Card.propTypes = {
    type: PropType.oneOf(['pending','success']).isRequired,
    style: PropType.object,
    onPress:PropType.func.isRequired
}

export default Card;