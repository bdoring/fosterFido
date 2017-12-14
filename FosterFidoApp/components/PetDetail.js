import React from 'react';
import { View, Image, ScrollView, TouchableOpacity, Linking } from 'react-native';
import { Tile, Icon, Text, Divider } from 'react-native-elements';
import { PHOTO_NOT_FOUND } from './PetCard';

const getPetSize = (petSize) => {
  switch (petSize.toLowerCase()) {
    case "s":
      return "Small";
    case "m":
      return "Medium";
    case "l":
      return "Large";
    case "xl":
      return "Extra Large";

    default:
      return "Default";

  }
}

const emailRescue = (emailAddress, petName) => {

  const url = `mailto:${emailAddress}?subject=${petName}&body=Hi!`;

  Linking.canOpenURL(url)
    .then((supported) => {
      if (supported) {
        Linking.openURL(url).catch(() => null)
      }
    })
}

const callRescue = (phoneNumber) => {
  let digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  let formattedPhoneNumber = phoneNumber.split("").filter(digit => digits.includes(digit)).join("");
  console.log("TRYING TO CALL RESCUE...");
  const url = `tel:${formattedPhoneNumber}`;
  Linking.canOpenURL(url)
    .then((supported) => {
      console.log("SUPPORTED?:", supported);
      console.log("URL?:", url);
      if (supported) {
        Linking.openURL(url).catch(() => null)
      }
    })
}

const PetDetail = (props) => {
  let { name, description, sex, contact, age, size, media } = props.navigation.state.params;

  let gender = sex["$t"].toLowerCase() === "f" ? "Female" : "Male";

  let petSize = getPetSize(size["$t"]);

  let petPhoto = [];

  if (media.photos) {
    petPhoto = media.photos.photo.filter(photo => photo["@size"] === "x");
  }

  if (petPhoto[0]) {
    petPhoto = petPhoto[0]["$t"];
  } else {
    petPhoto = PHOTO_NOT_FOUND;
  }


  let petDescription = description["$t"] ? `About ${name["$t"]}: ${description["$t"]}` : `Please reach out directly to the rescue for more information on ${name["$t"]}.`

  return (
    <ScrollView>
      <View>
        <Image
          // borderRadius={10}
          style={{
            width: 400,
            height: 350,
            resizeMode: "stretch",
          }}
          source={petPhoto === PHOTO_NOT_FOUND ? require('./images/photoNotFound.png') : { uri: petPhoto }} />
        {/* <Tile
          imageSrc={{}}
          title={`${name["$t"]} - ${contact.city["$t"]}, ${contact.zip["$t"]}`}
          contentContainerStyle={{height: 1000}}
        > */}
          <Divider style={{ backgroundColor: "#3399ff" }} />
          <Text h4>{`${name["$t"]} - ${contact.city["$t"]}, ${contact.zip["$t"]}`}</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
            <View style={{flexDirection: 'row',  flex: 1, alignItems: 'center',justifyContent: 'center' }}>
              <Icon
                name="paw"
                type="foundation"
                color="#3399ff"
              />
              <Text> {gender}</Text>
            </View>

            <View style={{flexDirection: 'row',  flex: 1, alignItems: 'center',justifyContent: 'center' }}>
              <Icon
                name="paw"
                type="foundation"
                color="#3399ff"
              />
              <Text> {age["$t"].toLowerCase() === "baby" ? "Puppy" : age["$t"]}</Text>
            </View>

            <View style={{flexDirection: 'row',  flex: 1, alignItems: 'center',justifyContent: 'center' }}>
              <Icon
                name="paw"
                type="foundation"
                color="#3399ff"
              />
              <Text> {petSize}</Text>
            </View>
          </View>
          {contact.phone["$t"] && <TouchableOpacity onPress={() => callRescue(contact.phone["$t"])}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
              <View style={{flexDirection: 'row',  flex: 1, alignItems: 'center',justifyContent: 'center' }}>
                <Icon
                  name="phone"
                  type="material"
                  color="#3399ff"
                />
                <Text> {contact.phone["$t"]}</Text>
              </View>
            </View>
          </TouchableOpacity>}
          {contact.email["$t"] && <TouchableOpacity onPress={() => emailRescue(contact.email["$t"], name["$t"])}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
              <View style={{flexDirection: 'row',  flex: 1, alignItems: 'center',justifyContent: 'center' }}>
                <Icon
                  name="email"
                  type="material"
                  color="#3399ff"
                />
                <Text> {contact.email["$t"]}</Text>
              </View>
            </View>
          </TouchableOpacity>}
          <Divider style={{ backgroundColor: "#3399ff" }} />
          <View>
            <Text>
              {petDescription}
            </Text>
          </View>
        {/* </Tile> */}
      </View>
    </ScrollView>
  )
}

export default PetDetail;
//
// <View>
//   <Text>This is the Pet Detail Page for {name["$t"]}</Text>
// </View>
