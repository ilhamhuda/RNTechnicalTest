import React, { useState, useCallback, useMemo, useEffect } from 'react'
import {
    View,
    Text,
    StatusBar,
    ScrollView,
    Image,
    TextInput,
    TouchableWithoutFeedback,
    Modal,
    Dimensions,
    ActivityIndicator,
    SafeAreaView
} from 'react-native'
import { useSelector, useDispatch } from 'react-redux'

import { styles } from './style' 
import { colors, convertRupiah, formatedDate } from '../../utils'
import { SearchIcon, DownArrowIcon, RightArrowIcon, dataRadiuoButton } from '../../assets'
import { Card, Badge, RadioButton } from '../../components'
import { transaction } from '../../services'
import { setTransaction, setQueryTransaction, getQueryData, setLoadingQuery, setTransactionDetail } from '../../redux'

const { height } = Dimensions.get('window')

const TransactionList = ({navigation}) => {

    const { transaction:{loading, dataQuery, data}} = useSelector(state => state.transaction)
    const dispatch = useDispatch();

    const [modalVisible, setModalVisible] = useState(false);
    const [heightOverlay, setHeightOverlay] = useState(0);
    const [sort, setSort] = useState(dataRadiuoButton[0])
    const [search, setSearch] = useState('')
    
    // MARK : Will Mount Fetch Data - This is fetch data trigger before apps appear
    useEffect(() => {
        fetchData()
    },[])

    useEffect(async() => {
        if(data.length > 0){
            
            let getData = await getQueryData(search, sort, data);
            dispatch(setQueryTransaction(getData))
        }
    },[loading, search])

    // MARK : Fetch Data Transaction - This is a function to retrieve Transaction data from Result which comes from API
    const fetchData = async() => {
        let data = await transaction();
        dispatch(setTransaction(data))
    }

    // MARK : Change Sort By - This is a trigger to change the order of the list view  transaction  based on certain criteria
    const changeSort = useCallback((sortData) => {
        
        setSort(sortData)
        new Promise((resolve, reject) => {
            setTimeout(() => {
                toggleModal(false, 0)
                resolve(true)
            },300)
        }).then(() => {
            dispatch(setLoadingQuery())
        })
       
        
    },[sort, modalVisible, height])

    // MARK : Set Search - This is a trigger function when there is a text change in the search bar field 
    const changeSearch = useCallback((e) => {
        setSearch(e)
    },[search])

    // MARK : Toggle Modal - This is a trigger function to display a pop up sort by transaction
    const toggleModal = (propmodal = true, propheight = height) => {
        setModalVisible(propmodal)
        setHeightOverlay(propheight)
    }

    // MARK : Navigation Control - This is a function for navigating to the transaction details page by bringing up the data object
    const navigationControll = (item) => {
        dispatch(setTransactionDetail(item))
        navigation.navigate('TransactionDetail')
    }

    
    const radioButton = useMemo(() => {
        return dataRadiuoButton.map((item, idx) => <RadioButton key={idx} value={item.value} active={sort.value === item.value} onPress={() => changeSort(item)} />)
    },[sort])

    // MARK : List View Transaction - This is a function to display a list of transactions
    const ListItem = useMemo(() => {
        if(dataQuery){
            return dataQuery.map((item, index) => {
                return(
                    <Card key={index} type={String(item.status).toLowerCase()} style={{marginBottom:10}} onPress={() => navigationControll(item)}>
                        <View style={styles.wrapListItem}>
                            <View style={styles.wrapInfoDetail}>
                                <View style={styles.wrapRecipient}>
                                    <Text style={[styles.txtBank, String(item.sender_bank).length <= 4 && styles.txtUpper]}>{item.sender_bank}</Text>
                                    <Image source={RightArrowIcon} style={styles.imgRightArrow} />
                                    <Text style={[styles.txtBank, String(item.beneficiary_bank).length <= 4 && styles.txtUpper]}>{item.beneficiary_bank}</Text>
                                </View>
                                <Text style={[styles.txtRecipient,{textTransform:'uppercase'}]}>{item.status === 'PENDING' && '- '}{item.beneficiary_name}</Text>
                                <View style={styles.wrapNominal}>
                                    <Text numberOfLines={1} style={styles.txtRecipient}>Rp{convertRupiah(item.amount)}</Text>
                                    <Text style={styles.bulletIcon}>{'\u2022'}</Text>
                                    <Text numberOfLines={1} style={styles.txtRecipient}>{formatedDate(item.created_at)}</Text>
                                </View>    
                            </View>
                            <Badge value={item.status === 'SUCCESS' ? 'Berhasil' : 'Pengecekan'} status={item.status === 'SUCCESS' ? 'success' : 'outline-primary'} />
                        </View>
                    </Card>
                )
            })
        }
    },[dataQuery])

    
    // MARK : Search Bar - This is the Search Bar View and Sort By Transaction toggle
    return (
        <SafeAreaView 
            style={styles.wrapper}>
            <StatusBar backgroundColor={colors.background.secondary} barStyle="dark-content" />
            <ScrollView style={styles.body}>
                <View style={styles.header}>
                    <View style={styles.wrapSearch}>
                        <Image style={styles.imgSearch} source={SearchIcon} />
                        <TextInput
                            multiline={false}
                            onChangeText={changeSearch}
                            value={search}
                            returnKeyType='search'
                            style={styles.inputSearch}
                            placeholder="Cari nama, bank, atau nominal"
                        />
                    </View>
                    <TouchableWithoutFeedback onPress={() => toggleModal()}>
                        <View style={styles.wrapSort}>
                            <Text style={styles.txtSort}>{sort.value}</Text>
                            <Image style={styles.imgSort} source={DownArrowIcon} />
                        </View>
                    </TouchableWithoutFeedback>
                </View>
                {loading ? (
                    <View style={styles.wrapLoadingScreen}>
                        <ActivityIndicator size="large" color={colors.primary} />
                    </View>
                ) : ListItem}
               <Modal
                    animationType="fade"
                    transparent={true}
                    visible={modalVisible}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            {radioButton}
                        </View>
                    </View>
                </Modal>
            </ScrollView>
            <View style={[styles.overlay, { height: heightOverlay}]} />
        </SafeAreaView>
    )
}

export default TransactionList