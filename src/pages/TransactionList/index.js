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
    ActivityIndicator
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
    
    useEffect(() => {
        fetchData()
    },[])

    useEffect(async() => {
        if(data.length > 0){
            
            let getData = await getQueryData(search, sort, data);
            dispatch(setQueryTransaction(getData))
        }
    },[search, sort, data])

    const fetchData = async() => {
        let data = await transaction();
        dispatch(setTransaction(data))
    }

    const changeSort = useCallback((sortData) => {
        dispatch(setLoadingQuery())
        setSort(sortData)
        setTimeout(() => {
            toggleModal(false, 0)
        },200)
        
    },[sort, modalVisible, height])

    const changeSearch = useCallback((e) => {
        setSearch(e)
    },[search])

    const toggleModal = (propmodal = true, propheight = height) => {
        setModalVisible(propmodal)
        setHeightOverlay(propheight)
    }

    const navigationControll = (item) => {
        dispatch(setTransactionDetail(item))
        navigation.navigate('TransactionDetail')
    }

    
    const radioButton = useMemo(() => {
        return dataRadiuoButton.map((item, idx) => <RadioButton key={idx} value={item.value} active={sort.value === item.value} onPress={() => changeSort(item)} />)
    },[sort])

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
                                <Text style={[styles.txtRecipient,{textTransform:'uppercase'}]}>- {item.beneficiary_name}</Text>
                                <Text style={styles.txtRecipient}>Rp{convertRupiah(item.amount)} &bull; {formatedDate(item.created_at)}</Text>
                            </View>
                            <Badge value={item.status === 'SUCCESS' ? 'Berhasil' : 'Pengecekan'} status={item.status === 'SUCCESS' ? 'success' : 'outline-primary'} />
                        </View>
                    </Card>
                )
            })
        }
    },[dataQuery])

    return (
        <View 
            style={styles.wrapper}>
            <StatusBar backgroundColor={colors.background.secondary} barStyle="dark-content" />
            <ScrollView style={styles.body}>
                <View style={styles.header}>
                    <View style={styles.wrapSearch}>
                        <Image style={styles.imgSearch} source={SearchIcon} />
                        <TextInput
                            onChangeText={changeSearch}
                            value={search}
                            editable
                            style={styles.inputSearch}
                            placeholder="Cari nama, bank, nominal"
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
        </View>
    )
}

export default TransactionList