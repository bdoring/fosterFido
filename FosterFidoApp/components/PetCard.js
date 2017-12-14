import React from 'react';
import { Text, Image, View } from 'react-native';
import { Card, Button, Icon } from 'react-native-elements';
import photoNotFound from './images/photoNotFound.png'
export const PHOTO_NOT_FOUND = "PHOTO_NOT_FOUND";

const detail = (petInfo) => {
  switch (petInfo) {
    case "specialNeeds":
      return {type: "Special Needs", iconName: "exclamation", iconType: "evilicon", iconColor: "orange"};
    case "noDogs":
      return {type: "No Dogs", iconName: "exclamation", iconType: "evilicon", iconColor: "orange"};
    case "noCats":
      return {type: "No Cats", iconName: "exclamation", iconType: "evilicon", iconColor: "orange"};
    case "noKids":
      return {type: "No Kids", iconName: "exclamation", iconType: "evilicon", iconColor: "orange"};
    case "noClaws":
      return {type: "Declawed", iconName: "ios-checkmark", iconType: "ionicon", iconColor: "green"};
    case "hasShots":
      return {type: "Vaccinated", iconName: "ios-checkmark", iconType: "ionicon", iconColor: "green"};
    case ("housebroken"):
      return {type: "House Trained", iconName: "ios-checkmark", iconType: "ionicon", iconColor: "green"};
    case ("housetrained"):
      return {type: "House Trained", iconName: "ios-checkmark", iconType: "ionicon", iconColor: "green"};
    case "altered":
      return {type: "Altered", iconName: "ios-checkmark", iconType: "ionicon", iconColor: "green"};
    default:
      return {type: petInfo, iconName: "exclamation", iconType: "evilicon", iconColor: "orange"};
  }
}

let key = 0;

const formatPetInfo = (petInfo) => {
  key = key + 1;
  return (
    <View key={key} style={{ flexDirection: "row", flex: 1, alignItems: 'center',justifyContent: 'center' }}>
        <Icon
          name={petInfo.iconName}
          type={petInfo.iconType}
          color={petInfo.iconColor}
          />
          <Text >{petInfo.type}</Text>
    </View>
  )
}

const PetCard = ({ pet, navigation }) => {

  // console.log("This is ", pet.name["$t"]);


  let petPhoto = [];
  if (pet.media.photos) {
    petPhoto = pet.media.photos.photo.filter(photo => photo["@size"]==="x");

  }

  if (petPhoto[0]) {
    petPhoto = petPhoto[0]["$t"];
  } else {
    petPhoto = PHOTO_NOT_FOUND;
  }

  // console.log("PET PHOTO:", petPhoto)

  let petInformation;
  if (pet.options.option) {
    if (pet.options.option[0]) {
      petInformation = pet.options.option.map((info, index) => {
        let petInfo = detail(info["$t"]);
        return formatPetInfo(petInfo);
      });
    } else {
      let petInfo = detail(pet.options.option["$t"]);
      petInformation = formatPetInfo(petInfo);
    }
  }


  return (
    <Card
    title={pet.name["$t"]}
    >
    <Image
      borderRadius={10}
      style={{
        width: 310,
        height: 250,
        resizeMode: Image.resizeMode.stretch,
      }}
      source={petPhoto === PHOTO_NOT_FOUND ? require('./images/photoNotFound.png') : { uri: petPhoto }}
    />
    <View style={{  flexWrap: "wrap", height: 100, justifyContent:"space-between" }}>
      {petInformation}
    </View>

    <Button
      backgroundColor='#03A9F4'
      buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
      title='VIEW NOW'
      onPress={()=> navigation.navigate('PetDetail', pet) }
      />
    </Card>
  )
}

export default PetCard;

{/* <Text style={{marginBottom: 10}}>
  {petInformation}
</Text> */}

{/* <View style={{ flexDirection: "row", flex: 1, alignItems: 'center',justifyContent: 'flex-start' }}>
                    <Icon
                      name='ios-checkmark'
                      type='ionicon'
                      // color='#517fa4'
                      color="green"
                      />
                      <Text >{pet.options.option["$t"]}</Text>

                </View> */}
