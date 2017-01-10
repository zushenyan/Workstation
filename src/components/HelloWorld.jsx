// @flow
import React from "react";
import style from "./HelloWorld.scss";
import cx from "classnames";

type Props = {
  toggle: bool,
  text:   string
};

export const HelloWorld = ({toggle = false, text = ""}: Props) => {
  const className = cx({
    [style["hello-world"]]: true,
    [style["toggle"]]:      toggle
  });
  return <h1 className = {className} >{text}</h1>;
};
