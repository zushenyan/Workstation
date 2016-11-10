// @flow
import cx from "classnames";

type Props = {
  toggle: bool,
  text:   string
};

export const HelloWorld = ({toggle = false, text = ""}: Props) => {
  const className = cx({
    "hello-world": true,
    "toggle":      toggle
  });
  return <h1 className = {className} >{text}</h1>;
};
