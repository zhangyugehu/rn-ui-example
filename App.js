/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    TouchableOpacity,
    Alert
} from 'react-native';

import {Router} from './app/common/AppRouter'

const ITEM_DATA=[
    {
        title:'AccessibilityInfo',
        subtitle:''
    },
    {
        title:'ActivityIndicator',
        subtitle:'显示一个圆形的loading提示符号'
    },
    {
        title:'Button',
        subtitle:'一个简单的跨平台的按钮组件'
    },
    {
        title:'CheckBox',
        subtitle:''
    },
    {
        title:'t ',
        subtitle:'st '
    },
]


export default class App extends Component {

    // setState

    //

    constructor(props){
        super(props)
        this.state={
            data:ITEM_DATA,
            isRefreshing:false
        }
    }

    componentDidMount(){
    }

    render() {
        return <View style={styles.container}>
            {this._renderListView()}
        </View>
    }

    _renderListView=()=>{
        return <FlatList
            data={this.state.data}
            ItemSeparatorComponent={this._renderSeparator}
            renderItem={this._renderListItem }
            keyExtractor={(item,index)=>index}
        />
    }
    _renderListItem=({item, index})=>{
        return <Item
            {...this.props}
            itemData={item}
            index = {index}
        />
    }
    _renderSeparator=()=>{
        return <View style={styles.itemSeparatorStyle}/>
    }
}

/**
 * list item component
 */
class Item extends Component{

    constructor(props){
        super(props)
        this.itemData=this.props.itemData
        this.index = this.props.index
    }

    render(){
        return <TouchableOpacity
            style={styles.itemContainerStyle}
            onPress={this._onItemClick}
            activeOpacity={0.5}
        >
            <Text style={styles.itemTitleStyle}>{this.itemData.title}</Text>
            <Text style={styles.itemSubTitleStyle}>{this.itemData.subtitle}</Text>
        </TouchableOpacity>
    }
    _onItemClick=()=>{
        const{ navigate } =this.props.navigation
        switch (Number(this.index)){
            case 0:
                break;
            case 1:
                Router.pushToActivityIndicatorApp(navigate)
                break;
            case 2:
                Router.pushToButtonApp(navigate)
                break;
            case 3:
                Router.pushToCheckBoxApp(navigate)
                break;
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'center',
        backgroundColor: '#F5FCFF',
    },
    itemContainerStyle:{
        flex:1,
        height:65,
        justifyContent:'center',
        marginLeft:10,
        marginRight:10,
    },
    itemSeparatorStyle:{
        height:1,
        backgroundColor:'#e3e3e3'
    },
    itemTitleStyle:{
        fontSize:18,
        color:'black'
    },
    itemSubTitleStyle:{
        fontSize:16,
        color:'gray',
        marginTop:5
    },
});
