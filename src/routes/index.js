import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { TransactionList, TransactionDetail } from '../pages'

const Stack = createNativeStackNavigator()

const Route = () => {
    
    return (
        <Stack.Navigator initialRouteName="TransactionList">
            <Stack.Screen 
                component={TransactionList} 
                name="TransactionList"
                options={{
                    headerShown:false
                }}
            />

            <Stack.Screen 
                component={TransactionDetail} 
                name="TransactionDetail"
                options={{
                    headerShown:false
                }}
            />
                
        </Stack.Navigator>
    )
}

export default Route
