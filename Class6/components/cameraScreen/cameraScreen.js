import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Dimensions, PermissionsAndroid } from 'react-native';
import { RNCamera } from 'react-native-camera';
import Mailer from 'react-native-mail';
var RNFS = require('react-native-fs');
import Colors from '../../constants/colors';


export default class CameraScreen extends React.Component {

  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.window}>
        <RNCamera
          styles={styles.camera}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.on}
          permissionDialogTitle={'Permission to use camera'}
          permissionDialogMessage={'We need your permission to use your camera phone'}
          height={Dimensions.get('window').height}
        >
          {({ camera, status }) => {
            return (
              <View style={styles.cameraView}>
                <TouchableOpacity
                  onPress={() => this.takePicture(camera)}
                  style={styles.captureButton}
                >
                  <Text style={styles.buttonText}> SNAP </Text>
                </TouchableOpacity>
              </View>
            );
          }}
        </RNCamera>
      </View>
    );
  }

  takePicture = async function(camera) {
    console.log('takePicture');
    const options = { quality: 0.5, base64: true };
    const data = await camera.takePictureAsync(options);
    //  eslint-disable-next-line
    console.log(data);

    this.saveFileToStorage(data);
  };

  saveFileToStorage(photoData) {

    const path = RNFS.ExternalStorageDirectoryPath + '/myPhoto.jpg';
    console.log(path);

    PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      {
        'title': 'App Storage Permission',
        'message': 'App needs access storage',
      }).then(() => {
      RNFS.writeFile(path, photoData.base64, 'base64')
        .then((success) => {
          console.log('FILE WRITTEN!');
          this.sendEmail(path)
        })
        .catch((err) => {
          console.log(err.message);
        });
    })
  }

  sendEmail(photoLocation) {
    console.log(this.props.navigation.state.params.email);
    const to = [this.props.navigation.state.params.email]
    console.log(photoLocation);
    Mailer.mail({
      subject: 'Photo from React Native Class',
      recipients: to,
      ccRecipients: [],
      bccRecipients: [],
      body: '<b>Hello</b>',
      isHTML: true,
      attachment: {
        path: photoLocation,
        type: 'jpg',
        name: '',
      }
    }, (error) => {
      console.log(error);
    });
  }
}

const styles = StyleSheet.create({
  window: {
    flex: 1,
    height: Dimensions.get('window').height,
    backgroundColor: Colors.steelBlue,
    // flexDirection: 'column-reverse',
  },
  camera: {
    flex: 1,
  },
  cameraView: {
    flex: 1,
    justifyContent: 'flex-end',
    margin: 20,
    //height: Dimensions.get('window').height,
    //backgroundColor: Colors.steelBlue,
  },
  captureButton: {
    borderRadius: 5,
    borderColor: 'white',
    borderWidth: 3,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
  buttonText: {
    fontSize: 16,
    color: 'white'
  }
});
