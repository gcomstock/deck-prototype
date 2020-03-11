import React from "react";
import { ReactComponent as Placeholder } from "../assets/icons/placeholder.svg";
import { ReactComponent as Artifact } from "../assets/icons/artifact.svg";
import { ReactComponent as Close } from "../assets/icons/close.svg";
import { ReactComponent as Environment } from "../assets/icons/environment.svg";

const iconTypes = {
  placeholder: Placeholder,
  artifact: Artifact,
  close: Close,
  environment: Environment
};

const IconComponent = ({ name = 'placeholder', fill = '#000', width = '24px'}) => {
  let Icon = iconTypes[name];
  if(typeof Icon === 'undefined') {
    Icon = Placeholder;
  }
  return <Icon style={{fill: fill, width: width}} />;
};

export default IconComponent;