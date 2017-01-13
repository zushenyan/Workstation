// @flow
import React from "react";
import cx from "classnames";
import foobar from "mock-data/foobar";
import photoBigJpg from "images/photo-big.jpg";
import photoSmallPng from "images/photo-small.png";
import ringGif from "images/ring.gif";
import ringSvg from "images/ring.svg";
import thumbsUpPng from "images/thumbs-up.png";

import style from "./HelloWorld.scss";

type Props = {
  toggle: bool,
  text:   string
};

export const HelloWorld = ({toggle = false, text = ""}: Props) => {
  const className = cx({
    [style["title"]]:  true,
    [style["toggle"]]: toggle
  });
  console.log(foobar);
  console.log(photoBigJpg);
  console.log(photoSmallPng);
  console.log(ringGif);
  console.log(ringSvg);
  console.log(thumbsUpPng);
  return (
    <div>
      <h1 className = {className} >{text}</h1>
      <img src={photoBigJpg}/>
      <img src={photoSmallPng}/>
      <img src={ringGif}/>
      <img src={ringSvg}/>
      <img src={thumbsUpPng}/>
    </div>
  );
};
