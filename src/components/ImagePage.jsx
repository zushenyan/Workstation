import React, { PureComponent } from "react";

import style from "./ImagePage.scss";

import jsPhotoBigJpg from "images/photo-big.jpg";
import jsPhotoSmallPng from "images/photo-small.png";
import jsRingGif from "images/ring.gif";
import jsRingSvg from "images/ring.svg";
import jsThumbsUpPng from "images/thumbs-up.png";

export default class ImagePage extends PureComponent {
  render(){
    console.log(jsPhotoBigJpg);
    console.log(jsPhotoSmallPng);
    console.log(jsRingGif);
    console.log(jsRingSvg);
    console.log(jsThumbsUpPng);
    const {
      "photo-big": cssPhotoBig,
      "photo-small": cssPhotoSmall,
      "ring-gif": cssRingGif,
      "ring-svg": cssRingSvg,
      "thumbs-up-png": cssThumbsUpPng
    } = style;
    return (
      <div>
        <div>
          <h1>These images are imported from js</h1>
          <img src={jsPhotoBigJpg}/>
          <img src={jsPhotoSmallPng}/>
          <img src={jsRingGif}/>
          <img src={jsRingSvg}/>
          <img src={jsThumbsUpPng}/>
        </div>
        <div>
          <h1>These images are imported from css</h1>
          <div className = {cssPhotoBig}></div>
          <div className = {cssPhotoSmall}></div>
          <div className = {cssRingGif}></div>
          <div className = {cssRingSvg}></div>
          <div className = {cssThumbsUpPng}></div>
        </div>
      </div>
    );
  }
}
