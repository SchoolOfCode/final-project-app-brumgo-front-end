/**
 * Copyright (c) 2017-present, Viro Media, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */
import React, { Component } from "react";

import {
  ViroText,
  ViroARScene,
  ViroAmbientLight,
  ViroARPlane,
  ViroMaterials,
  ViroNode,
  ViroUtils,
  ViroQuad,
  ViroSpotLight,
  Viro3DObject,
  ViroAnimations
} from "react-viro";

export default function AR1(props) {
  <ViroARScene>
    <ViroText text="Hello World" position={[0, -0.1, -1]} />
  </ViroARScene>;
}
