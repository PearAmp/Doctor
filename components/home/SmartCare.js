import {View, Text, Image, StyleSheet, ScrollView, SafeAreaView} from 'react-native';
import React from 'react';

export default function SmartCare() {
  return (
    <ScrollView>
      <View style={styles.container}>
       <SafeAreaView>
       <View style={styles.imagesIcon}>
          <Image
            style={{width: 30, height: 30}}
            source={require('../../assets/icons/hamburger.png')}
          />
          <Image
            style={{width: 30, height: 30}}
            source={require('../../assets/icons/bell.png')}
          />
        </View>
       </SafeAreaView>
        <View style={{marginTop: 10}}>
          <Text style={styles.headerText}>SMART CARE</Text>
        </View>

        <View style={styles.greenBox}>
         <View style={styles.Boxwrap}>
         <View style={styles.textBox}>
            <Text style={styles.titleText}>ประเมินความเสี่ยง</Text>
            <Text style={styles.textContent}>
              พร้อมรับ QR code การประเมิน
            </Text>
            <Text style={styles.textContent}>
              สำหรับตรวจสอบระดับความเสี่ยง
            </Text>
            <Text style={styles.textContent}>
              ของพนักงาน
            </Text>
          </View>
          <View style={styles.Imageright}>
          <Image style={{width: 130, height: 130}} source={require('../../assets/images/doctor.png')} />

          </View>

         </View>
        </View>

        <View style={styles.bannerwrap}>
            <View style={[styles.risk]}>
            <Text style={{textAlign: 'center', fontSize: 15, fontWeight: '500', color: '#000'}}>ระดับความเสี่ยงฉัน</Text>
            <Text style={{textAlign: 'center', fontSize: 20, fontWeight: '700', color: '#000', marginTop: 10,}}>เสี่ยงต่ำ</Text>
            <View style={{flexDirection: 'row', justifyContent: 'flex-end', marginTop: 30,}}>
            <Image style={{width: 50, height: 50,}} source={require('../../assets/images/graph.png')} />
            </View>
            </View>
            <View style={styles.warn}>
            <Image style={{width: 130, height: 130}} source={require('../../assets/images/warn.png')} />
            <Text style={{textAlign: 'center', fontSize: 15, fontWeight: '500', color: '#000'}}>ระบบการแจ้งเตือน</Text>
            </View>
        </View>
        <View style={styles.bannerwrap}>
        <View style={styles.imform}>
            <Image style={{width: 100, height: 100}} source={require('../../assets/icons/travel.png')} />
            <Text style={{textAlign: 'center', fontSize: 15, fontWeight: '500', color: '#000', marginTop: 30,}}>ประวัติการเดินทาง</Text>
            </View>
            <View style={styles.imform}>
            <Image style={{width: 130, height: 130}} source={require('../../assets/images/user.png')} />
            <Text style={{textAlign: 'center', fontSize: 15, fontWeight: '500', color: '#000'}}>ข้อมูลฉัน</Text>
            </View>
        </View>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
    marginTop: 10,
    marginBottom: 20,
  },
  imagesIcon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerText: {
    color: '#000',
    fontSize: 15,
    fontWeight: '500',
  },
  greenBox: {
    marginTop: 10,
    backgroundColor: '#1d9a24',
    paddingHorizontal: 10,
    borderRadius: 30,
    paddingVertical: 20,
  },
  titleText: {
    paddingVertical: 10,
    fontSize: 18,
    color: '#fff',
    fontWeight: '500',
  },
  textContent: {
    color: '#fff',

  },
  Boxwrap: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  bannerwrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
  },
  risk: {
    backgroundColor: '#ffcf4e',
    borderRadius: 20,
    paddingHorizontal: 25,
    paddingVertical: 20,
  },
  warn: {
    backgroundColor: '#e4e4e4',
    borderRadius: 20,
    paddingHorizontal: 25,
    paddingVertical: 20,
  },
  imform: {
    backgroundColor: '#e4e4e4',
    borderRadius: 20,
    paddingHorizontal: 21,
    paddingVertical: 20,

  }

});
