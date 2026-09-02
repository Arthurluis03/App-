import React from "react";
import { View, Text } from "react-native";

export default function Title(){

   return( <View style={{
            width: "100%",
            height: 80,
            backgroundColor: "green",
            justifyContent: "center",
            alignItems: "flex-start",
            
        }}>
            <Text style={{
                color: "white",
                fontSize: 50,
                fontWeight: "bold",
                marginLeft: 30
                
            }}>
                FarmSimple
            </Text>
        </View>
    );
}
   

