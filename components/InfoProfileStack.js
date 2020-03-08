import React from 'react'
import {
    View,
    Text,
    Image,
} from 'react-native'

import Bikes from '../assets/bikeprofile.png'

export default function InfoProfileStack(pros)
{
    return <View>
        <Image source={Bikes}/>
        <Text></Text>
    </View>
}
