import React from 'react';
import {
    StackNavigator,
    NavigationActions
} from 'react-navigation';

import App from '../../App';
import ActivityIndicatorApp from '../activity_indicator/ActivityIndicatorApp'
import ButtonApp from '../button/ButtonApp'
import CheckBoxApp from '../checkbox/CheckBoxApp'


const BaseOptions = {
    // 可以设置一些导航的属性，当然如果想隐藏顶部导航条只要将这个属性设置为null就可以了
    // header:null,
    headerBackTitle:null,
    // headerRight:'setting',

    // 设置导航条的样式。背景色，宽高等
    headerStyle:{
        // 如果想去掉安卓导航条底部阴影可以添加
        // elevation: 0,
        // backgroundColor:'#4ECBFC'
    },
    cardStyle:'path'
}
export const Router = {
    resetToApp(navigation){
        navigation.dispatch(NavigationActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({routeName: 'App'}),
            ]
        }));
    },
    pushToActivityIndicatorApp(navigation){
        navigation('ActivityIndicatorApp')
    },
    pushToButtonApp(navigate){
        navigate('ButtonApp')
    },
    pushToCheckBoxApp(navigate){
        navigate('CheckBoxApp')
    },
}
export default AppRouter = StackNavigator({

    App:{
        screen:App,
        navigationOptions: {
            ...BaseOptions,
            headerTitle:'React Native',
        }
    },
    ActivityIndicatorApp:{
        screen:ActivityIndicatorApp,
        navigationOptions: {
            ...BaseOptions,
            headerTitle:'ActivityIndicator',
        }
    },
    ButtonApp:{
        screen:ButtonApp,
        navigationOptions: {
            ...BaseOptions,
            headerTitle:'Button',
        }
    },
    CheckBoxApp:{
        screen:CheckBoxApp,
        navigationOptions: {
            ...BaseOptions,
            headerTitle:'CheckBox',
        }
    },
},{
    initialRouteName: 'App',
})

// export default class Root extends Component {
//
//     render() {
//         return <AppRouter />
//     }
// }
