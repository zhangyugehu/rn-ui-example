
import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Button,
    Alert
} from 'react-native';

import { Router } from '../common/AppRouter'

export default class extends Component{

    render(){
        return <View>
            <Button
                title='按钮'
                accessibilityLabel="Learn more about this purple button"
                onPress={this._btnPress}/>
        </View>
    }

    _btnPress=()=>{
        Alert.alert('提示', '点到我了~')
    }
}
