import WebView from "react-native-webview"

export default function Webview ({route, navigation}){
    return (
        <WebView 
        source={{uri : route.params.url}} 
        onNavigationStateChange={(navState) => {
            console.log(navState)
            if(navState.url.includes('status_code=200')){
                navigation.navigate('Home')
            }
        }} />
    )
}