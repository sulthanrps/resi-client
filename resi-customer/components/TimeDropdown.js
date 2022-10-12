import React from "react";
import SelectDropdown from 'react-native-select-dropdown'
import { Icon } from "@rneui/themed";
import {ActivityIndicator} from 'react-native'
import {
    useFonts,
    Poppins_100Thin,
    Poppins_100Thin_Italic,
    Poppins_200ExtraLight,
    Poppins_200ExtraLight_Italic,
    Poppins_300Light,
    Poppins_300Light_Italic,
    Poppins_400Regular,
    Poppins_400Regular_Italic,
    Poppins_500Medium,
    Poppins_500Medium_Italic,
    Poppins_600SemiBold,
    Poppins_600SemiBold_Italic,
    Poppins_700Bold,
    Poppins_700Bold_Italic,
    Poppins_800ExtraBold,
    Poppins_800ExtraBold_Italic,
    Poppins_900Black,
    Poppins_900Black_Italic,
  } from "@expo-google-fonts/poppins";

const countries = [
    "07:00 - 08:00",
    "08:00 - 09:00",
    "09:00 - 10:00",
    "10:00 - 11:00",
    "11:00 - 12:00",
    "12:00 - 13:00",
    "13:00 - 14:00",
    "14:00 - 15:00",
    "15:00 - 16:00",
    "16:00 - 17:00",
    "17:00 - 18:00",
]
export default function TimeDropDown({dataBook, setDataBook}){
    let [fontsLoaded] = useFonts({
        Poppins_100Thin,
        Poppins_100Thin_Italic,
        Poppins_200ExtraLight,
        Poppins_200ExtraLight_Italic,
        Poppins_300Light,
        Poppins_300Light_Italic,
        Poppins_400Regular,
        Poppins_400Regular_Italic,
        Poppins_500Medium,
        Poppins_500Medium_Italic,
        Poppins_600SemiBold,
        Poppins_600SemiBold_Italic,
        Poppins_700Bold,
        Poppins_700Bold_Italic,
        Poppins_800ExtraBold,
        Poppins_800ExtraBold_Italic,
        Poppins_900Black,
        Poppins_900Black_Italic
    });

    if(!fontsLoaded){
    return <ActivityIndicator />
    }
    return (
        <SelectDropdown
            data={countries}
            onSelect={(selectedItem, index) => {
                console.log(selectedItem, index)
                setDataBook({
                    ...dataBook,
                    time : index + 1
                })
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
                // text represented after item is selected
                // if data array is an array of objects then return selectedItem.property to render after item is selected
                return selectedItem
            }}
            rowTextForSelection={(item, index) => {
                // text represented for each item in dropdown
                // if data array is an array of objects then return item.property to represent item in dropdown
                return item
            }}
            defaultButtonText='Choose Time'
            renderDropdownIcon={() => <Icon name="down" type="antdesign"></Icon>}
            buttonStyle={{
                borderRadius: 10,
                width: '90%',
            }}
            rowStyle={{
                borderBottomWidth: 0,
            }}
            rowTextStyle={{
                textAlign: 'left',
                fontFamily: 'Poppins_400Regular',
                fontSize: 18
            }}
            buttonTextStyle={{
                textAlign: 'left',
                fontFamily: 'Poppins_400Regular',
                fontSize: 16
            }}
            renderSearchInputRightIcon={() => <Icon name="search"></Icon>}
            searchPlaceHolder='Search time'
        />
    )
}
