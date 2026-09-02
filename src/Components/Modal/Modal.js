import react, {useState} from "react";
import { View, Text, TextInput } from "react-native";
import Farm_style from "../Style/style.js";
import Farm from "../../BackEnd/Api/src/Models/Farm.js";

export default function modal() {


    return(
        <View style={Farm_style.modalBackground}> 
            <Text style={Farm_style.modalText}> Digite seu Fruto </Text>
             <TextInput 
             placeholder="Ex: Banana"
             style={Farm_style.modalTitle}
             
             />  
        </View>
    )





};