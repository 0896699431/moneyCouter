import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, Modal, ActivityIndicator } from 'react-native';
import Components from '../components'
import useHooks from '../hooks';
import { useGlobal } from '../hooks/store';


const CounterScreen = (props) => {
    const [globalState, globalActions] = useGlobal();
    const [storageItem, updateStorageItem, clearStorageItem] = useHooks.useAsyncStorage('counterSave');
    const [counterTam, updateCounterTam] = useHooks.useAsyncStorage('counterTam');
    const [total, setTotal] = useState('0');
    const [textTotal, setTextTotal] = useState('');
    const [visible, setVisible] = useState(false);
    const [modalSave, setModalSave] = useState(false);
    const [checkL1, setCheckL1] = useState(true);

    renderList = (() => {
        let view = [];
        let data = globalState.data;
        for (let i = 0; i < data.length; i++) {
            let value = data[i];
            view.push(<Components.CouterComponent key={i} gia={value.gia} soluong={value.sl} onChange={(value) => {
                onChange(value);
            }}></Components.CouterComponent>)
        }
        return view;
    });

    function onChange(val) {
        if (val.check == false) {
            let tam = globalState.data;
            let sum = 0;
            tam.map((value) => {
                if (value.gia == val.gia) {
                    if (val.sl != '')
                        sum = sum + value.gia * val.sl;
                    value.sl = val.sl;
                } else {
                    sum = sum + value.gia * value.sl;
                }
            })
            globalActions.setData(tam);
            setTotal(useHooks.useFormatNumber(sum));
            setTextTotal(useHooks.useDoctien(sum));
            updateCounterTam(JSON.stringify(tam));
        } else
            setVisible(val.check);

    }
    function onSave(value) {
        let arrT = storageItem != null ? JSON.parse(storageItem) : [];
        let tam = {
            id: useHooks.useIdRandom(13),
            name: value,
            data: globalState.data,
            time: useHooks.useDayTime(),
            sum: total
        }
        arrT.unshift(tam);
        updateStorageItem(JSON.stringify(arrT));
    }

    useEffect(() => {
        if (counterTam != JSON.stringify(globalState.data) && counterTam != null && checkL1) {
            globalActions.setData(JSON.parse(counterTam));
            setCheckL1(false);
        }
        else {
            let tam = globalState.data;
            let sum = 0;
            tam.map((value) => {
                sum = sum + value.gia * value.sl;
            })
            setTotal(useHooks.useFormatNumber(sum));
            setTextTotal(useHooks.useDoctien(sum));
            // setCheckL1(false);
        }
        setTimeout(function () { setCheckL1(false); }, 300);
    }, [globalState.data, counterTam]);

    function clearData() {
        let tam = [
            { gia: 500, sl: '0' },
            { gia: 1000, sl: '0' },
            { gia: 2000, sl: '0' },
            { gia: 5000, sl: '0' },
            { gia: 10000, sl: '0' },
            { gia: 20000, sl: '0' },
            { gia: 50000, sl: '0' },
            { gia: 100000, sl: '0' },
            { gia: 200000, sl: '0' },
            { gia: 500000, sl: '0' },
        ]
        globalActions.setData(tam)
        updateCounterTam(JSON.stringify(tam));
    }


    return (
        <View style={{ flex: 1 }}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={visible}
            >
                {modalSave != true ? (
                    <Components.AlertClose
                        title="CẢNH BÁO"
                        message={`Số quá lớn ! \nApp chỉ thực thiện tính toán với số lượng nhỏ hơn 1,000,000 tờ`}
                        onPress={() => {
                            setVisible(false);
                        }}>
                    </Components.AlertClose>)
                    : (<Components.AlertSave
                        title="Save"
                        message="Enter name to save"
                        txtBtnTrue="Save"
                        txtBtnFalse="Cancel"
                        onPressAlert={(value) => {
                            setVisible(false);
                            onSave(value.value);
                        }}>
                    </Components.AlertSave>)}
            </Modal>

            <Components.HeaderSaveClear headerText='Money Counter' onPress={(x) => {
                if (x.clear == true)
                    clearData()
                else if (x.save == true) {
                    setModalSave(true);
                    setVisible(true)
                } else if (x.more == true) {
                    props.navigation.openDrawer();
                }
            }} />

            {checkL1 == true ? <View style={{ flexDirection: "row", flex: 1, justifyContent: "center", alignItems: "center" }}>
                <ActivityIndicator size="small" color="#0000ff" />
                <Text style={{ marginLeft: 10 }}>Đang tải dữ liệu, vui lòng đợi ...</Text>
            </View> :

                <ScrollView showsVerticalScrollIndicator={false}>
                    {renderList()}
                </ScrollView>
            }
            <View style={{ height: 70, paddingTop: 5, borderTopLeftRadius: 2, borderTopRightRadius: 2, borderTopWidth: 1, borderColor: "green" }}>
                <View style={{ flexDirection: "row" }}>
                    <Text style={{ textAlign: "left", fontSize: 16, color: "green", fontWeight: "bold" }}>TOTAL </Text>
                    <Text style={{ flex: 1, textAlign: "right", fontWeight: "bold", color: "green", fontSize: 20 }}>{total}đ</Text>
                </View>
                <Text style={{ fontSize: 13, fontStyle: "italic", width: "100%", textAlign: "right", color: "#000" }}>{textTotal}</Text>
            </View>

        </View >
    )
}

module.exports = { CounterScreen }