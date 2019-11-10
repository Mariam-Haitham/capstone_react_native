import * as React from "react";

import { Button, Image, View } from "react-native";
import * as ImagePicker from "expo-image-picker";

import Constants from "expo-constants";
import * as Permissions from "expo-permissions";
import { setImage, setChildImage } from "../redux/actions";
import { connect } from "react-redux";

class CameraRollPicker extends React.Component {
  state = {
    image: null
  };

  render() {
    let { image } = this.state;

    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Button
          title="Pick an image from camera roll"
          onPress={this._pickImage}
        />
        {image && (
          <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
        )}
        <Button title="Upload" onPress={() => this.props.navigation.goBack()} />
      </View>
    );
  }

  componentDidMount() {
    this.getPermissionAsync();
  }

  getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== "granted") {
        alert("Sorry, we need camera roll permissions to make this work!");
      }
    }
  };

  _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      base64: true
    });

    if (!result.cancelled) {
      this.setState({ image: result.uri });
    }
    this.props.setImage(result.base64);
    this.props.setChildImage(result.base64);
  };

  createFormData = (image, body) => {
    const data = new FormData();

    data.append("image", {
      name: image.fileName,
      type: image.type,
      uri: Platform.OS === "android" ? image : image.replace("file://", "")
    });

    Object.keys(body).forEach(key => {
      data.append(key, body[key]);
    });

    return data;
  };
}

const mapDispatchToProps = dispatch => ({
  setImage: image => dispatch(setImage(image)),
  setChildImagr: image => dispatch(setChildImage(image))
});
export default connect(
  null,
  mapDispatchToProps
)(CameraRollPicker);
