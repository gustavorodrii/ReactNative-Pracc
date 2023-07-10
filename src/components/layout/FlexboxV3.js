import React, {useState} from 'react'
import {StyleSheet, View} from 'react-native'
import Quadrado from './Quadrado'

export default props => {
    return (
        <View style={style.FlexV1}>
        <Quadrado cor='#F00'/>
        <Quadrado cor='#0F0'/>
        <Quadrado cor='#044'/>
        <Quadrado cor='#092'/>
        <Quadrado cor='#099'/>
        </View>
    )
}

const style = StyleSheet.create({
    FlexV1: {
        backgroundColor: '#000',
        width: '100%',
        height: 350,
        flexDirection: 'row',        
    }
})