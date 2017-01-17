import React, { PureComponent } from "react";

import style from "./AssetsPage.scss";

import jsPhotoBigJpg from "images/photo-big.jpg";
import jsPhotoSmallPng from "images/photo-small.png";
import jsRingGif from "images/ring.gif";
import jsRingSvg from "images/ring.svg";
import jsThumbsUpPng from "images/thumbs-up.png";

import rabbitMp4 from "videos/rabbit320.mp4";
import rabbitWebm from "videos/rabbit320.webm";

import viperMp3 from "audios/viper.mp3";
import viperOgg from "audios/viper.ogg";

export default class AssetsPage extends PureComponent {
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
        <div>
          <h1>These videos are imported from js</h1>
          <div><video src = {rabbitMp4} controls></video></div>
          <div><video src = {rabbitWebm} controls></video></div>
        </div>
        <div>
          <h1>These audios are imported from js</h1>
          <div>
            <audio controls>
              <source src = {viperMp3} type = "audio/mp3"/>
            </audio>
          </div>
          <div>
            <audio controls>
              <source src = {viperOgg} type = "audio/ogg"/>
            </audio>
          </div>
        </div>
      </div>
    );
  }
}
