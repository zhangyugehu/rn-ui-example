
import React, { Component } from 'react';
import {
    StyleSheet,
    ActivityIndicator,
    View,
    Text
} from 'react-native';

import { Router } from '../common/AppRouter'

export default class ActivityIndicatorApp extends Component{

    constructor(props){
        super(props)
        this.state={
            animating:true
        }
    }

    componentDidMount(){
        this.handler = setTimeout(()=>{
            this.setState({
                animating:false
            })
            Router.resetToApp(this.props.navigation)
        }, 2000)
    }

    componentWillUnmount(){
        clearTimeout(this.handler)
    }

    render() {
        return <View style={{flex:1, justifyContent:'center'}}>
            <ActivityIndicator
                animating={this.state.animating}
                style={styles.centering}
                size="large"
            />
            {!this.state.animating && <Text style={{
                flex:1,
                fontSize:25,
                justifyContent:'center',
                textAlign:'center',
                alignItems:'center'
            }}>加载完成</Text>}
        </View>
    }

}
const styles = StyleSheet.create({
    centering: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8,
    },
})
