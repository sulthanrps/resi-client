import React from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

export default function KeyboardAvoidingWrapper ({children}){
    return (
        <KeyboardAwareScrollView>
            {children}
        </KeyboardAwareScrollView>
    )
}