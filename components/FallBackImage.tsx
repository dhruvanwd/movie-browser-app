import React, { useState } from "react";

import { Image, ImageProps, ImageURISource } from "react-native";

export default function FallBackImage(props: ImageProps) {
  const [imgPath, setImgPath] = useState<ImageProps["source"]>(
    props.source as ImageURISource
  );
  return (
    <Image
      {...props}
      source={imgPath}
      onError={() => {
        setImgPath(require("@/assets/images/image-error.jpg"));
      }}
    />
  );
}
