import { shadow } from "@/util/constant";
import { css } from "@emotion/react";

export default function ListItem() {
  return <div css={css(style)}>ListItem</div>;
}

const style = {
  boxShadow: shadow,
  backgroundColor: "white",
  width: "100%",
  height: "180px",
  borderRadius: "12px",
  padding: "20px",
};
