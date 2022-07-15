import {
  View,
  Text,
  StyleSheet,
  Image,
  Picker,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import {useState} from 'react';

export default function Personal( { navigation } ) {
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
          <View style={styles.headerRow}>
            <View>
              <Image
                style={styles.imagIcons}
                source={require('../../assets/icons/hamburger.png')}
              />
            </View>
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
              <Image
                style={styles.imagIcons}
                source={require('../../assets/icons/search.png')}
              />
            </View>
          </View>
        </SafeAreaView>

        <View style={styles.boxWrap}>
          <View>
            <Image
              style={styles.imgProfile}
              source={require('../../assets/images/profile.jpeg')}
            />
          </View>
          <View>
            <View style={styles.textWrap}>
              <Text style={styles.fontTitle}>Amphorn Nuansan</Text>
              <Image
                style={styles.iconEdit}
                source={require('../../assets/icons/edit.png')}
              />
            </View>
            <Text
              style={{
                marginLeft: 10,
                fontSize: 12,
                color: '#000',
                paddingTop: 5,
              }}>
              UX/UI designer
            </Text>
          </View>
        </View>

        <View style={{marginTop: 20, flexDirection: 'row'}}>
          <Text style={{color: '#000', fontSize: 20}}>Hello,</Text>
          <Text
            style={{
              color: '#000',
              fontSize: 20,
              fontWeight: '500',
              paddingLeft: 5,
            }}>
            Amphorn!
          </Text>
        </View>

        <View style={styles.boxList}>
         <TouchableOpacity onPress={() => navigation.navigate('Professional')}>
         <View style={styles.personBox}>
            <Image
              style={styles.imagBox}
              source={require('../../assets/icons/portfolio.png')}
            />
            <View style={styles.personText}>
              <Text style={{fontWeight: '500', color: '#fff'}}>
                Professional{' '}
              </Text>
              <Text style={{fontWeight: '500', color: '#fff'}}>evens</Text>
            </View>
          </View>
         </TouchableOpacity>
         <TouchableOpacity onPress={() => navigation.navigate('SmartCare')}>
         <View style={styles.socialBox}>
            <Image
              style={styles.imagBox}
              source={require('../../assets/icons/speaker.png')}
            />
            <View style={styles.personText}>
              <Text style={{fontWeight: '500', color: '#fff'}}>
                Social evens
              </Text>
            </View>
          </View>
         </TouchableOpacity>
        </View>

        <View style={styles.boxList}>
        <TouchableOpacity onPress={() => navigation.navigate('Datadetail')}>
         <View style={styles.concertBox}>
            <Image
              style={styles.imagBox}
              source={require('../../assets/icons/theatre.png')}
            />
            <View style={styles.personText}>
              <Text style={{fontWeight: '500', color: '#fff'}}>
                Concerts &
              </Text>
              <Text style={{fontWeight: '500', color: '#fff'}}>Theater</Text>
            </View>
          </View>
         </TouchableOpacity>

         <TouchableOpacity onPress={() => navigation.navigate('Estimate')}>
         <View style={styles.evenBox}>
            <Image
              style={styles.imagBox}
              source={require('../../assets/icons/group.png')}
            />
            <View style={styles.personText}>
              <Text style={{fontWeight: '500', color: '#fff'}}>
                Events with
              </Text>
              <Text style={{fontWeight: '500', color: '#fff'}}>friends</Text>
            </View>
          </View>
         </TouchableOpacity>
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

        <View>
        {items.map((item, index) => (
        <View style={styles.score}>
            <View>
                <Text style={{color: '#fff', fontSize: 20, fontWeight: '500'}}>Scorepions</Text>
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
                <Text style={{marginTop: 6, color: '#fff', fontWeight: '500', fontSize: 12}}>    PALACE stadium</Text>
               </View>
                <Text style={{marginTop: 6, color: '#fff', fontWeight: '800', fontSize: 12}}>$ 90</Text>
                </View>
            </View>
        </View>
        ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 30,
  },
  select: {
    width: '60%',
  },
  imagIcons: {
    width: 30,
    height: 30,
  },
  imgProfile: {
    width: 50,
    height: 50,
    borderRadius: 30,
  },
  iconEdit: {
    width: 15,
    height: 15,
    marginLeft: 10,
  },
  boxWrap: {
    backgroundColor: '#E2DBEE',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 15,
    marginTop: 20,
    borderRadius: 15,
  },
  textWrap: {
    flexDirection: 'row',
    marginLeft: 10,
  },
  fontTitle: {
    fontWeight: '500',
    color: '#673AB7',
  },
  boxList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  personBox: {
    backgroundColor: '#f55669',
    height: 90,
    borderRadius: 10,
    width: 160,
  },
  socialBox: {
    backgroundColor: '#49d5e2',
    height: 90,
    borderRadius: 10,
    width: 160,
  },
  imagBox: {
    width: 20,
    height: 20,
    marginTop: 10,
    position: 'absolute',
    right: 10,
  },
  personText: {
    bottom: 0,
    paddingLeft: 10,
    paddingBottom: 5,
    position: 'absolute',
  },
  concertBox: {
    backgroundColor: '#4d53e0',
    height: 90,
    borderRadius: 10,
    width: 160,
  },
  evenBox: {
    backgroundColor: '#f68e36',
    height: 90,
    borderRadius: 10,
    width: 160,
  },
  textSlide: {
    paddingRight: 30,
  },
  fontTitle: {
    fontWeight: '800',
    color: '#512DA8',
  },
  score: {
    backgroundColor: '#4d53e0',
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginBottom: 20,
  },
  textBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
