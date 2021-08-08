import { StyleSheet, Dimensions } from 'react-native'
import { colors } from '../../utils'

const { width, height } = Dimensions.get('window')

export const styles = StyleSheet.create({
    wrapper:{
        flex:1,
        backgroundColor:colors.background.secondary,
    },
    body:{
        display:'flex',
        flex:1,
        flexDirection:'column',
        padding:10,
        marginBottom:10
    },
    header:{
        width:'100%',
        paddingHorizontal:15,
        height:70,
        backgroundColor:colors.white,
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        borderRadius:5,
        marginBottom:10
    },
    wrapSearch:{
        height:'100%',
        flex:0.9,
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    inputSearch:{
        flex:1,
        fontSize:15,
        color:colors.text.primary
    },
    imgSearch:{
        width:25,
        height:25,
        marginRight:5,
    },
    wrapSort:{
        display:'flex',
        height:'100%',
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center',
    },
    txtSort:{
        color:colors.primary,
        fontWeight:'bold',
        fontSize:16,
        textTransform:'uppercase',
        marginRight:8
    },
    imgSort:{
        width:20,
        height:20
    },
    wrapListItem:{
        display:'flex',
        flex:1,
        padding:15,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
    wrapInfoDetail:{
        width:'70%',
        height:'100%',
        justifyContent:'space-between',
    },
    wrapRecipient:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center'
    },
    txtBank:{
        fontWeight:'bold',
        fontSize:18,
        color:colors.text.primary,
        textTransform:'capitalize'
    },
    imgRightArrow:{
        width:15,
        height:15,
        marginHorizontal:5
    },
    txtRecipient:{
        fontSize:15,
        color:colors.text.primary,
        alignItems:'flex-end',
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    modalView: {
        backgroundColor: "white",
        borderRadius: 5,
        width:'85%',
        elevation: 2,
        flexDirection:'column',
        paddingHorizontal:20,
        paddingVertical:50,
        alignItems:'flex-start',
        justifyContent:'space-between',
        height:height * .5
    },
    overlay: {
        position: 'absolute',
        left: 0,
        top: 0,
        opacity: 0.5,
        backgroundColor: 'black',
        width: width
    },
    wrapLoadingScreen:{
        display:'flex',
        width:'100%',
        height:height * .7,
        justifyContent:'center',
        alignItems:'center'
    },
    txtUpper:{
        textTransform:'uppercase'
    },
    txtCapital:{
        textTransform:'capitalize'
    },
    bulletIcon:{
        fontSize:25, 
        marginHorizontal:3
    }  
})