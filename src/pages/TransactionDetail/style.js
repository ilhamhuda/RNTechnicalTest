import { StyleSheet, Dimensions } from 'react-native'
import { colors } from '../../utils'

const { height } = Dimensions.get('window')

const styles = StyleSheet.create({
    wrapper:{
        flex:1,
        backgroundColor:colors.background.secondary,
    },
    body:{
        marginTop:30,
        display:'flex',
        flex:1,
        flexDirection:'column',
        alignItems:'center'
    },
    headeIdTransaction:{
        width:'100%',
        height:70,
        flexDirection:'row',
        padding:20,
        alignItems:'center',
        backgroundColor:colors.white,
        borderBottomColor:colors.background.secondary,
        borderBottomWidth:1
    },
    headerTransactionDetal:{
        width:'100%',
        height:70,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        padding:20,
        backgroundColor:colors.white,
        borderBottomColor:colors.background.secondary,
        borderBottomWidth:2
    },
    txtTransactionId:{
        fontSize:16,
        color:colors.text.primary,
        fontWeight:'bold'
    },
    txtTeansactionDetail:{
        fontSize:17,
        color:colors.text.primary,
        fontWeight:'bold'
    },
    txtClose:{
        fontSize:17,
        color:colors.primary,
        fontWeight:'bold',
        height:'100%',
    },
    imgCopyIcon:{
        width:20,
        height:20,
        marginLeft:10
    },
    wrapTransactionDetail:{
        width:'100%',
        paddingHorizontal:20,
        paddingTop:20,
        backgroundColor:colors.white
    },
    wrapRecipient:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        marginBottom:20
    },
    txtBank:{
        fontWeight:'bold',
        fontSize:18,
        color:colors.text.primary,
        textTransform:'capitalize'
    },
    txtUpper:{
        textTransform:'uppercase'
    },
    txtCapital:{
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
    wrapLoadingScreen:{
        display:'flex',
        width:'100%',
        height:height * .7,
        justifyContent:'center',
        alignItems:'center'
    },
    warpTransactionInfo:{
        width:'100%',
        display:'flex',
        flexDirection:'row',
        flexWrap:'wrap'
    },
    wrapRow70:{
        display:'flex',
        width:'70%',
        marginBottom:20
    },
    wrapRow30:{
        display:'flex',
        width:'30%',
        marginBottom:20
    },
    wrapRow100:{
        display:'flex',
        width:'100%',
        marginBottom:20
    },
    txtTitle:{
        fontSize:15,
        color:colors.text.primary,
        fontWeight:'700'
    },
    txtValue:{
        fontSize:15,
        color:colors.text.primary
    }
})

export default styles