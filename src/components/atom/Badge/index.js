import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import { colors } from '../../../utils';
import PropType from 'prop-types';

const Badge = ({value, style, status, fontSize}) => {

    let classBadge = [];
    let classText = [];

    switch (status) {
        case 'outline-primary':
            classBadge.push(styles.outlinePrimary)
            classText.push(styles.txtBlack)
            break;
        case 'success':
            classBadge.push(styles.sucess)
            classText.push(styles.txtWhite)
            break;
        default:
            classBadge.push(styles.default)
            classText.push(styles.txtDefault)
            break;
    }

    if(fontSize){
        classText.push({fontSize:Number.parseInt(fontSize)})
    }

    return (
        <View style={[styles.default, ...classBadge, style]}>
            <Text style={[styles.txtDefault, ...classText]}>{value}</Text>
        </View>
    )
}

Badge.propTypes = {
    value: PropType.string.isRequired,
    style: PropType.object,
    status:PropType.oneOf(['outline-primary','success']).isRequired,
    fontSize: PropType.number
}

export default Badge;

const styles = StyleSheet.create({
    default:{
        paddingVertical:5,
        paddingHorizontal:10,
        borderRadius:10
    },  
    sucess:{
        backgroundColor:colors.secondary,
    },
    outlinePrimary:{
        backgroundColor:colors.white,
        borderColor:colors.primary,
        borderWidth:1
    },
    txtDefault:{
        fontSize:14,
        fontWeight:'bold'
    },
    txtBlack:{
        color:colors.text.primary,
    },
    txtWhite:{
        color:colors.white,
    }
})