import React, { useEffect } from 'react'
import {
    View,
    Text,
    Image,
    TouchableWithoutFeedback,
    TouchableOpacity,
    ActivityIndicator,
    SafeAreaView,
    // Clipboard
} from 'react-native'
import styles from './style'
import { useSelector, useDispatch } from 'react-redux'

import { CopyIcon, RightArrowIcon } from '../../assets'
import { colors, convertRupiah, formatedDate } from '../../utils'
import { resetTransactionDetail } from '../../redux'

const TransactionDetail = ({navigation}) => {
    const { transactionDetail:{loading, detailData} } = useSelector(state => state.transactionDetail)
    const  dispatch = useDispatch()

     // MARK : Will Mount Reset Data - This is Reset data trigger before appear 
    useEffect(() => {
        return () => {
            dispatch(resetTransactionDetail())
        }
    },[])

    const copyToClipboard = () => {
        // Clipboard.setString(`#${detailData.id}`)
        // i comment this because in new update react native we can't using Clipboard anymore, we have to use react-native-community/clipboard. But i can't use third party library because Test Requirement.
    }

    // MARK : Detail View Transaction - This is a function to display a Detail of transactions
    return(
        <SafeAreaView style={styles.wrapper}>
            {loading ? (
                <View style={styles.wrapLoadingScreen}>
                    <ActivityIndicator size="large" color={colors.primary} />
                </View>
            ) : (
                <View style={styles.body}>
                    <View style={styles.headeIdTransaction}>
                        <Text style={styles.txtTransactionId}>ID TRANSAKSI: #{detailData.id}</Text>
                        <TouchableOpacity onPress={copyToClipboard}>
                            <Image source={CopyIcon} style={styles.imgCopyIcon} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.headerTransactionDetal}>
                        <Text style={styles.txtTeansactionDetail}>DETAIL TRANSAKSI</Text>
                        <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
                            <Text style={styles.txtClose}>Tutup</Text>
                        </TouchableWithoutFeedback>
                    </View>
                    <View style={styles.wrapTransactionDetail}>
                        <View style={styles.wrapRecipient}>
                            <Text style={[styles.txtBank, String(detailData.sender_bank).length <= 4 && styles.txtUpper]}>{detailData.sender_bank}</Text>
                            <Image source={RightArrowIcon} style={styles.imgRightArrow} />
                            <Text style={[styles.txtBank, String(detailData.beneficiary_bank).length <= 4 && styles.txtUpper]}>{detailData.beneficiary_bank}</Text>
                        </View>
                        <View style={styles.warpTransactionInfo}>
                            <View style={styles.wrapRow70}>
                                <Text style={[styles.txtTitle,{textTransform:'uppercase'}]}>{detailData.status === 'PENDING' && '- '}{detailData.beneficiary_name}</Text>
                                <Text style={styles.txtValue}>{detailData.account_number}</Text>
                            </View>
                            <View style={styles.wrapRow30}>
                                <Text style={styles.txtTitle}>NOMINAL</Text>
                                <Text style={styles.txtValue}>Rp{convertRupiah(detailData.amount)}</Text>
                            </View> 
                            <View style={styles.wrapRow70}>
                                <Text style={styles.txtTitle}>BERITA TRANSFER</Text>
                                <Text style={styles.txtValue}>{detailData.remark.capitalize()}</Text>
                            </View>
                            <View style={styles.wrapRow30}>
                                <Text style={styles.txtTitle}>KODE UNIK</Text>
                                <Text style={styles.txtValue}>{detailData.unique_code}</Text>
                            </View> 
                            <View style={styles.wrapRow100}>
                                <Text style={styles.txtTitle}>WAKTU DIBUAT</Text>
                                <Text style={styles.txtValue}>{formatedDate(detailData.completed_at)}</Text>
                            </View> 
                        </View>
                    </View>
                </View>
            )}
                
        </SafeAreaView>
    )
}

export default TransactionDetail;

