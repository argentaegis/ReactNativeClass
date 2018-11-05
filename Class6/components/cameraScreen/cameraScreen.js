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
        'title': 'Cool Photo App Camera Permission',
        'message': 'Cool Photo App needs access to your camera ' +
        'so you can take awesome pictures.'
      }).then(() => {
      RNFS.writeFile(path, photoData.base64, 'base64')
        .then((success) => {
          console.log('FILE WRITTEN!');
          console.log(success);
          this.sendEmail(path)
        })
        .catch((err) => {
          console.log(err.message);
        });
    })
  }

  sendEmail(photoLocation) {
    const to = ['argentaegis@gmail.com']
    //photoURI = photoURI.substring('file://'.length, photoURI.length);
    console.log(photoLocation);
    Mailer.mail({
      subject: 'Photo from Andrew',
      recipients: ['argentaegis@gmail.com'],
      ccRecipients: [],
      bccRecipients: [],
      body: '<b>Hello</b>',
      isHTML: true,
      attachment: {
        path: photoLocation,  // The absolute path of the file from which to read data.
        type: 'jpg',   // Mime Type: jpg, png, doc, ppt, html, pdf, csv
        name: '',   // Optional: Custom filename for attachment
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
