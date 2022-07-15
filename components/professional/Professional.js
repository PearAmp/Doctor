import { View, Text, TouchableOpacity, ScrollView, SafeAreaView, Image, StyleSheet } from 'react-native'
import React from 'react'
import DropDownPicker from 'react-native-dropdown-picker';
import {useState} from 'react';

export default function Professional({ navigation }) {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
      {label: 'Apple', value: 'apple'},
      {label: 'Banana', value: 'banana'},
    ]);
  return (
    <ScrollView>
        <View style={styles.container}>
        <SafeAreaView>
        <View style={styles.headerItem}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View>
            <Image style={{width: 20, height: 20}}  source={require('../../assets/icons/hamburger.png')} />
        </View>
        <View>
            <Image style={{width: 30, height: 30, borderRadius: 30, marginLeft: 30, borderWidth: 2, borderColor: 'red'}} source={require('../../assets/images/profile.jpeg')} />
        </View>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center', }}>
        <View style={styles.select}>
              <DropDownPicker
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
              />
            </View>
            <View>
                <Image style={{width: 20, height: 20}} source={require('../../assets/icons/search.png')} />
            </View>
        </View>
        </View>
        </SafeAreaView>
        <TouchableOpacity onPress={() => navigation.goBack()}>
        <View style={styles.back}>
        <Image style={{width: 15, height: 15}} source={require('../../assets/icons/left.png')} />
      <Text style={{fontWeight: '500', marginLeft: 7, color: '#000'}}>Back</Text>
    </View>
        </TouchableOpacity>

        <View style={styles.Textheader}>
            <Text style={{fontSize: 20, fontWeight: '500', color: '#000', paddingBottom: 10}}>Professional</Text>
            <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
                <Text style={{fontSize: 20, fontWeight: '500', color: '#000'}}>Events</Text>
                <Text style={{marginLeft: 20, color: '#607D8B'}}>UI/UX design, marketing...</Text>
                <Image style={{width: 12, height: 12, marginBottom: 4}} source={require('../../assets/icons/pencil.png')} />
            </View>
        </View>

        <View style={{marginVertical: 30,}}>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            pagingEnabled={true}>
            <View style={styles.textSlide}>
              <TouchableOpacity>
                <Text style={styles.fontTitle}>Most popular</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.textSlide}>
              <TouchableOpacity>
                <Text style={styles.fontTitle}>Friends go</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.textSlide}>
              <TouchableOpacity>
                <Text style={styles.fontTitle}>Latest</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.textSlide}>
              <TouchableOpacity>
                <Text style={styles.fontTitle}>Large evens</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.textSlide}>
              <TouchableOpacity>
                <Text style={styles.fontTitle}>Most popular</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>

        <View style={styles.score}>
            <View>
                <Text style={{color: '#fff', fontSize: 20, fontWeight: '500'}}>Design Highway</Text>
                <Text style={{marginTop: 6, color: '#fff', fontWeight: '100', fontSize: 12}}>World Tour - ANGELS TOUR</Text>
                <Text style={{marginTop: 6, color: '#fff', fontWeight: '100', fontSize: 12}}>World Tour - ANGELS TOUR</Text>
            </View>

            <View style={{marginTop: 70}}>
                <View style={{flexDirection: 'row'}}>
                <Text style={{marginTop: 6, color: '#fff', fontWeight: '100', fontSize: 12}}>Data   </Text>
                <Text style={{marginTop: 6, color: '#fff', fontWeight: '500', fontSize: 12}}>23.09.19 7PM</Text>
                </View>
                <View style={styles.textBottom}>
               <View style={{flexDirection: 'row'}}>
               <Text style={{marginTop: 6, color: '#fff', fontWeight: '100', fontSize: 12}}>Location</Text>
                <Text style={{marginTop: 6, color: '#fff', fontWeight: '500', fontSize: 12, marginLeft: 15, }}>FreeckySpace, CA</Text>
               </View>
                <Text style={{marginTop: 6, color: '#fff', fontWeight: '800', fontSize: 12}}>$ 15</Text>
                </View>
            </View>
        </View>

        <View style={styles.market}>
            <View>
                <Text style={{color: '#fff', fontSize: 20, fontWeight: '500'}}>.market meetup</Text>
                <Text style={{marginTop: 6, color: '#fff', fontWeight: '100', fontSize: 12}}>World Tour - ANGELS TOUR</Text>
            </View>

            <View style={{marginTop: 70}}>
                <View style={{flexDirection: 'row'}}>
                <Text style={{marginTop: 6, color: '#fff', fontWeight: '100', fontSize: 12}}>Data   </Text>
                <Text style={{marginTop: 6, color: '#fff', fontWeight: '500', fontSize: 12}}>23.09.19 7PM</Text>
                </View>
                <View style={styles.textBottom}>
               <View style={{flexDirection: 'row'}}>
               <Text style={{marginTop: 6, color: '#fff', fontWeight: '100', fontSize: 12}}>Location</Text>
                <Text style={{marginTop: 6, color: '#fff', fontWeight: '500', fontSize: 12, marginLeft: 15, }}>FreeckySpace, CA</Text>
               </View>
                <Text style={{marginTop: 6, color: '#fff', fontWeight: '800', fontSize: 12}}>FREE</Text>
                </View>
            </View>
        </View>
        </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create ({
    container: {
        paddingHorizontal: 20,
    },
    headerItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 20,
    },
    select: {
        width: '55%',
        marginLeft: 65,
        marginRight: 20,
      },
      back: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 30,
      },
      textSlide: {
        paddingRight: 30,
      },
      fontTitle: {
        fontWeight: '800',
        color: '#512DA8',
      },
      score: {
        backgroundColor: '#f68e36',
        paddingVertical: 20,
        paddingHorizontal: 20,
        borderRadius: 20,
        marginBottom: 20,
      },
      market: {
        backgroundColor: '#f55669',
        paddingVertical: 20,
        paddingHorizontal: 20,
        borderRadius: 20,
        marginBottom: 20,
      },
      textBottom: {
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
})