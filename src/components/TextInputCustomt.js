import React, { useState } from 'react';
import {
    View, Image, TouchableOpacity, TextInput, Text
} from 'react-native';
const TextInputSearchCustomt = (props) => {
    const { placeholder } = props;
    const clear = require('./icon/clear.png')
    const search = require('./icon/search.png')
    const { onChangeText } = props;
    const [text, setText] = useState('');
    const changeText = (x) => {
        setText(x);
        onChangeText(x);
    };
    return (
        <View style={{ flexDirection: "row", alignItems: "center", width: "100%", height: 45, backgroundColor: "#fff", borderBottomWidth: 0.5, paddingLeft: 10, paddingRight: 10 }}>
            <Image style={{ width: 20, height: 20, marginRight: 10 }} source={search}>
            </Image>
            <TextInput style={{ flex: 1 }}
                placeholder={placeholder}//chu goi y
                placeholderTextColor={'#ccc'}//mau chu goi y
                selectTextOnFocus={true}//chon tat ca text
                selectionColor={'blue'}//mau con tro
                editable={true}//co the chinh sua
                // secureTextEntry={true}//mat khau
                // returnKeyType={'next'}//ky tu cua nut dong tren ban phim
                value={text}
                onChangeText={(x) => changeText(x)}

            ></TextInput>
            {text != "" ? <TouchableOpacity style={{ padding: 10 }} onPress={() => { changeText('') }}>
                <Image style={{ width: 15, height: 15 }} source={clear}></Image>
            </TouchableOpacity> : null}
        </View>
    );
}

module.exports = { TextInputSearchCustomt };

