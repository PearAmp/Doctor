import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  StyleSheet,
} from 'react-native';
import React from 'react';

export default function Estimate({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <SafeAreaView>
        <View>
          <Text style={styles.textHead}>ประเมินความเสี่ยง</Text>
        </View>
        <View style={styles.imageWrap}>
          <Image
            style={styles.image}
            source={require('../../assets/images/doctortwo.png')}
          />
        </View>
      </SafeAreaView>
      <View style={styles.Box}>
      <Text style={{marginTop: 10, color: '#000', fontSize: 20, fontWeight: '500'}}>ระดับความเสี่ยง</Text>

      <View style={styles.rowBox}>
      <View style={{backgroundColor: 'green', paddingHorizontal: 25, paddingVertical: 3, borderTopLeftRadius: 10, borderBottomLeftRadius: 10, color: '#000',}}>
      <Text >ไม่มี</Text>
      </View>
        <Text style={{backgroundColor: 'yellow', paddingHorizontal: 30, paddingVertical: 3, color: '#000',}}>ต่ำ</Text>
        <Text style={{backgroundColor: 'orange', paddingHorizontal: 30, paddingVertical: 3, color: '#000',}}>ปานกลาง</Text>
        <View style={{backgroundColor: 'red', paddingHorizontal: 25, paddingVertical: 3, borderTopRightRadius: 10, borderBottomRightRadius: 10, color: '#000',}}>
      <Text >สูง</Text>
      </View>
      </View>

      <View>
        <Image style={{width: 20, height: 20, marginLeft: 95,}} source={require('../../assets/icons/arrow.png')} />
      </View>

      <View style={styles.circleBox}>
      <View style={styles.ellipse}>
        <Image style={{width: 200, height: 150,}} source={require('../../assets/images/ellipse.png')} />
      </View>
        <View style={styles.textFlex}>
        <Text style={{fontSize: 20, fontWeight: '700', color: '#000'}}>ความเสี่ยงต่ำ</Text>
        </View>
      </View>

      <View style={{marginTop: 10,}}>
        <Text style={{fontSize: 16, fontWeight: '500', color: '#000', textAlign: 'center'}}>รับ QR Code จากคุณหมอ</Text>
        <Text style={{fontSize: 16, fontWeight: '500', color: '#000', textAlign: 'center'}}>เพื่อตรวจสอบระดับความเสี่ยง</Text>
      </View>

      <View style={styles.buttonBox}>
        <Text style={{fontSize: 16, fontWeight: '500', color: '#fff', textAlign: 'center'}}>รับ QR Code</Text>
      </View>

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#28a32f',
    height: '100%',
    paddingHorizontal: 20,
  },
  textHead: {
    textAlign: 'center',
    marginTop: 40,
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
  },
  imageWrap: {
    alignItems: 'center',
    marginTop: 30,
  },
  image: {
    width: 300,
    height: 300,
  },
  Box: {
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 20,
    marginBottom: 30,
  },
  rowBox: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  ellipse: {
    alignItems: 'center',
    position: 'relative'
  },
  textFlex: {
    position: 'absolute',
    top: 60,
    left: 100,
    
  },
  buttonBox: {
    backgroundColor: '#28a32f',
    marginTop: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },

});
