
import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    CheckBox,
    Alert
} from 'react-native';

export default class extends Component{

    constructor(props){
        super(props)
        this.state={
            checkState1:false,
            checkState2:true,

        }
    }

    render(){
        return <View>
            <CheckBox
                value={this.state.checkState1}
                onChange={this._onCheckedChange}
                disable={false}/>
            <CheckBox
                value={this.state.checkState2}
                onChange={this._onCheckedChange2}
                disable={false}/>
        </View>
    }

    _onCheckedChange=()=>{
        this.setState({
            checkState1:!this.state.checkState1,
        })
    }

    _onCheckedChange2=()=>{
        this.setState({
            checkState2:!this.state.checkState2,
        })
    }
}
