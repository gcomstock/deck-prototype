import React from "react";
import { ReactComponent as Placeholder } from "../assets/icons/placeholder.svg";
import { ReactComponent as Artifact } from "../assets/icons/artifact.svg";
import { ReactComponent as Close } from "../assets/icons/close.svg";
import { ReactComponent as Environment } from "../assets/icons/environment.svg";
import { ReactComponent as CheckBadge } from "../assets/icons/check_badge.svg";
import { ReactComponent as CanaryFail } from "../assets/icons/canary-fail.svg";
import { ReactComponent as CanaryRunning } from "../assets/icons/canary-running.svg";
import { ReactComponent as CanaryPass } from "../assets/icons/canary-pass.svg";
import { ReactComponent as ManualJudgement } from "../assets/icons/manual-judgement.svg";
import { ReactComponent as Build } from "../assets/icons/build.svg";

const iconTypes = {
  placeholder: Placeholder,
  artifact: Artifact,
  close: Close,
  environment: Environment,
  check_badge: CheckBadge,
  canary_fail: CanaryFail,
  canary_running: CanaryRunning,
  canary_pass: CanaryPass,
  manual_judgement: ManualJudgement,
  build: Build
};

const IconComponent = ({ name = 'placeholder', fill = '#000', size = '24'}) => {
  let Icon = iconTypes[name];
  if(typeof Icon === 'undefined') {
    Icon = Placeholder;
  }
  return <Icon style={{fill: fill, width: size}} />;
};

export default IconComponent;