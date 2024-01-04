export const shadow = "0 2px 4px #00000010, 0 1px 2px #00000010";

export const mainColor = "#0271a1";
export const subColor1 = "#84B4D4";
export const subColor2 = "#BAD5E8";
export const gray = "#F1F5F9";
export const gray2 = "#F8FAFc";
export const codeBlockBg = "#232323";

export const maxWidth = "1200px";
export const version = "2.0.2";

const breakpoints = [700, 900, 1200];
export const mq = breakpoints.map((bp) => `@media (min-width: ${bp}px)`);

export const componentList: any = [
  {
    title: "BasicDot",
    option: [{ size: 12 }],
    optionType: [
      {
        name: "size",
        type: "number",
        required: "true",
        defaultValue: "-",
      },
      {
        name: "color",
        type: "string",
        required: "false",
        defaultValue: "#0271A1",
      },
    ],
  },
  {
    title: "BounceDot",
    option: [{ size: 12 }],
    optionType: [
      {
        name: "size",
        type: "number",
        required: "true",
        defaultValue: "-",
      },
      {
        name: "color",
        type: "string",
        required: "false",
        defaultValue: "#0271A1",
      },
    ],
  },
  {
    title: "Fade",
    option: [{ speed: 2 }],
    optionType: [
      {
        name: "speed",
        type: "number",
        required: "true",
        defaultValue: "-",
      },
    ],
  },
  {
    title: "ProgressBar",
    option: [{ width: 300 }, { speed: 3 }],
    optionType: [
      {
        name: "width",
        type: "number",
        required: "true",
        defaultValue: "-",
      },
      {
        name: "speed",
        type: "number",
        required: "true",
        defaultValue: "-",
      },
      {
        name: "bgColor",
        type: "string",
        required: "false",
        defaultValue: "#BAD5E8",
      },
      {
        name: "barColor",
        type: "string",
        required: "false",
        defaultValue: "#0271A1",
      },
    ],
  },
  {
    title: "Pulse",
    option: [{ size: 100 }],
    optionType: [
      {
        name: "size",
        type: "number",
        required: "true",
        defaultValue: "-",
      },
      {
        name: "bgColor",
        type: "string",
        required: "false",
        defaultValue: "#84B4D4",
      },
    ],
  },
  {
    title: "Skeleton",
    option: [{ width: 100 }, { height: 100 }],
    optionType: [
      {
        name: "width",
        type: "string",
        required: "true",
        defaultValue: "-",
      },
      {
        name: "height",
        type: "string",
        required: "true",
        defaultValue: "-",
      },
      {
        name: "speed",
        type: "number",
        required: "false",
        defaultValue: "1",
      },
      {
        name: "color1",
        type: "string",
        required: "false",
        defaultValue: "#EAEAEA",
      },
      {
        name: "color2",
        type: "string",
        required: "false",
        defaultValue: "#D7D7D7",
      },
      {
        name: "borderRadius",
        type: "string",
        required: "false",
        defaultValue: "20px",
      },
    ],
  },
  {
    title: "Spinner",
    option: [{ size: 50 }],
    optionType: [
      {
        name: "size",
        type: "string",
        required: "true",
        defaultValue: "-",
      },
      {
        name: "bgColor",
        type: "string",
        required: "false",
        defaultValue: "#0271A1",
      },
      {
        name: "barColor",
        type: "string",
        required: "false",
        defaultValue: "#BAD5E8",
      },
      {
        name: "thickness",
        type: "number",
        required: "false",
        defaultValue: "7",
      },
    ],
  },
  {
    title: "Wave",
    option: [{ size: 30 }],
    optionType: [
      {
        name: "size",
        type: "number",
        required: "true",
        defaultValue: "-",
      },
      {
        name: "color",
        type: "string",
        required: "false",
        defaultValue: "#0271A1",
      },
    ],
  },
];
