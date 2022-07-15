import { View, Text, ScrollView, SafeAreaView, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Datadetail({ navigation }) {
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
           <View style={{marginLeft: 20, paddingRight: 40,}}>
           <Text style={{fontSize: 18, fontWeight: '500', color: '#fff', paddingBottom: 5,}}>ตำแหน่งของคุณ</Text>
            <Text style={{color: '#fff'}}>ตำแหน่งของคุณอาจมีความเสี่ยงต่อการได้รับเชื้อโควิด</Text>
           </View>
        </View>
<View style={{marginTop: 20,}}></View>
        <View style={styles.imagFooter}>
            <View style={styles.Iconwrap}>
            <Image style={{width: 30, height: 30,}} source={require('../../assets/icons/motion.png')} />
            </View>
           <View style={{marginLeft: 20, paddingRight: 40,}}>
           <Text style={{fontSize: 18, fontWeight: '500', color: '#fff', paddingBottom: 5,}}>การเคลื่อนที่ของคุณ (MOVE)</Text>
            <Text style={{color: '#fff'}}>ตำแหน่งของคุณอาจมีความเสี่ยงต่อการได้รับเชื้อโควิด</Text>
           </View>
        </View>

        <TouchableOpacity style={{marginTop: 30, alignItems: 'center'}}>
            <View style={styles.Botton}>
                <Text style={{fontSize: 18, fontWeight: '500', color: '#28a32f',}}>อนุญาตให้เข้าถึง</Text>
            </View>
        </TouchableOpacity>
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
        height: 450,
        marginTop: 20,
       borderTopLeftRadius: 30,
       borderTopRightRadius: 30,
       paddingHorizontal: 30,
       paddingTop: 30,
    },
    Iconwrap: {
        backgroundColor: '#fff',
        width: 60,
        borderRadius: 50,
        alignItems: 'center',
        paddingVertical: 15,

    },
    imagFooter: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    Botton: {
        backgroundColor: '#fff',
        paddingHorizontal: 100,
        paddingVertical: 15,
        borderRadius: 10,
    }

})