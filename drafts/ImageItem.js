import { Image } from "react-native";

const ImageItem = () => {
  return (
    <Image
      style={{ height: 800, padding: 50 }}
      source={require("./assets/cty.jpg")}
    />
  );
};

export default ImageItem;
