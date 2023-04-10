import React from 'react'
import { LocationListScreen } from './LocationListScreen'
import { LocationDetailScreen } from '../location-detail/LocationDetailScreen'
import { CreateNativeStackNavigator} from '@react-navigation/native-stack'

const LocationListStack = CreateNativeStackNavigator()

export const LocationListStackScreen = () => {
    return(
        <LocationListStack.Navigator screenOption = {{headerShow:false}}>
            <LocationListStack.Screen name='ExplorarLista' component={LocationListScreen}/>
            <LocationListStack.Screen name='Detalle' component={LocationDetailScreen}/>
        </LocationListStack.Navigator>
    )
}