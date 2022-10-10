import React from 'react'
import {KeyboardAvoidingView, TouchableWithoutFeedback, ScrollView, Keyboard} from 'react-native'

export default function KeyboardAvoidingWrapper ({children}){
    return (
        <KeyboardAvoidingView style={{flex: 1}} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <ScrollView>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    {
                        children
                    }
                </TouchableWithoutFeedback>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}