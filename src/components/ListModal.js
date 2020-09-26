import React, { useState } from 'react';
import { Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import Components from '../components';
import useHooks from '../hooks';

const ListModal = (props) => {
    const { onPress, data } = props;
    const background_nodata = require('./icon/background_nodata.png');
    const [titleIndexOfArr] = useHooks.useService();
    const [index, setIndex] = useState(0);
    const [txtInput, setTxtInput] = useState('');

    function renderList() {
        let a = [];

        for (let i = 0; i < data.length; i++) {
            if (titleIndexOfArr(txtInput, data[i].id, data[i].name, data[i].time)) {
                a.push(<TouchableOpacity key={i} onPress={() => { setIndex(i) }}>
                    <View style={{ borderBottomWidth: 0.5, borderColor: index == i ? 'green' : "#ccc", paddingBottom: 10, marginBottom: 2 }}>
                        <View style={{ flexDirection: "row" }}>
                            <Text style={{ flex: 1, textAlign: "left", fontSize: 10, color: "#ccc" }}>ID: {data[i].id}</Text>
                            <Text style={{ flex: 1, textAlign: "right", fontSize: 10, color: "#ccc" }}>Time: {data[i].time}</Text>
                        </View>

                        <Text style={{ fontSize: 16, color: index == i ? 'green' : "#000", fontWeight: "bold" }}>{data[i].name}</Text>
                        <Text style={{ fontSize: 10, color: index == i ? 'green' : "#000" }}>SUM: {data[i].sum}</Text>
                    </View>
                </TouchableOpacity>)
            }

        }
        if (a.length == 0) a.push(<View key={0} style={{ justifyContent: "center", alignItems: "center" }}>
            <Image source={background_nodata} style={{ resizeMode: "center" }}></Image>
        </View>)

        return a;
    }

    return (
        <View style={{ width: "100%", height: "100%", alignItems: "center", justifyContent: "center", backgroundColor: 'rgba(52, 52, 52, 0.8)' }}>
            <View style={{ width: '80%', minHeight: "80%", maxHeight: "80%", backgroundColor: "#fff", borderRadius: 5 }}>
                <Components.Header title='LOAD DATA'></Components.Header>
                <Components.TextInputSearchCustomt placeholder='Nhập từ khoá'
                    onChangeText={(x) => {
                        setTxtInput(x);
                    }}
                ></Components.TextInputSearchCustomt>

                <ScrollView showsVerticalScrollIndicator={false} style={{ paddingLeft: 5, paddingRight: 5 }}>
                    {renderList()}
                </ScrollView>

                <View style={{ flexDirection: "row", height: 50, width: '100%', justifyContent: "space-between", alignItems: "center", padding: 10, borderTopColor: "#ccc", borderTopWidth: 0.5 }}>
                    <TouchableOpacity onPress={() => onPress({ key: 'delete', value: data[index], index: index })}><Text style={{ textAlign: "center", fontWeight: "bold", color: "green" }}>DELETE</Text></TouchableOpacity>
                    <View style={{ flexDirection: "row" }}>
                        <TouchableOpacity onPress={() => onPress({ key: 'exit', value: data[index] })}><Text style={{ textAlign: "center", fontWeight: "bold", marginRight: 20 }}>THOÁT</Text></TouchableOpacity>
                        <TouchableOpacity onPress={() => onPress({ key: 'load', value: data[index] })}><Text style={{ textAlign: "center", fontWeight: "bold", color: "green", marginRight: 10 }}>LOAD</Text></TouchableOpacity>
                    </View>

                </View>
            </View>
        </View>
    );
};
module.exports = { ListModal };