import { View, Text, ScrollView, SafeAreaView, Image, StyleSheet } from 'react-native'
import React from 'react'

export default function Datadetail() {
  return (
    <ScrollView>
       <View style={styles.container}>
       <SafeAreaView>
       <View style={styles.imagewrap}>
      <Image style={styles.imageHead} source={require('../../assets/images/doctortwo.png')} />
    </View>

    <View style={styles.textTitle}>
        <Text style={{textAlign: 'center', fontSize: 20, fontWeight: '600', color: '#000'}}>ขอสิทธ์การเข้าถึงข้อมูล</Text>
    </View>
    <View style={styles.textSmall}>
        <Text style={{textAlign: 'center', fontSize: 16, fontWeight: '600', color: '#000'}}>เพื่อให้หมอประเมินความเสี่ยงของท่าน</Text>
    </View>
       </SafeAreaView>
       </View>
       <View style={styles.boxfooter}>
        <View style={styles.imagFooter}>
            <View style={styles.Iconwrap}>
            <Image style={{width: 30, height: 30,}} source={require('../../assets/icons/location.png')} />
            </View>
            <Text>ตำแหน่งของคุณ</Text>
        </View>
       </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create ({
    container: {
        paddingHorizontal: 20,

    },
    imagewrap: {
        alignItems: 'center',
        marginTop: 50,

    },
    imageHead: {
        width: 250,
        height: 250,

    },
    textTitle: {
        marginVertical: 10,

    },
    boxfooter: {
        backgroundColor: '#28a32f',
        height: 500,
        marginTop: 20,
        borderRadius: 30,

    },
    Iconwrap: {
        backgroundColor: '#fff',
        width: 50,
        borderRadius: 50,
        alignItems: 'center',
        paddingVertical: 8,

    },
    imagFooter: {
        flexDirection: 'row',
    }

})