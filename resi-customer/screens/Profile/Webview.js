import WebView from "react-native-webview"

export default function Webview ({route}){
    return (
        <WebView source={{uri : route.params.url}} />
    )
}