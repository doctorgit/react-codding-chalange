export const colors = {
    green: "#19df2b",
    purple: "#8f1ae5",
    lightBlue: "#1991fa",
    blue: "#4861f2",
    darkBlue: "#002C93",
    lightGreyBlue: "#dae1ee",
    light: "#f4f9fa",
    darkGrey: "#666",
    black: "#000333",
    regular: "#232323",
    shadowColor: "#e2eff2",
    lightGrey: "#ccc",
};

export const fontColors = {
  light: "#6F7084",
  regular: "#232323",
  black: "#000333",
  blue: { active: "#002C93", inert: "#5E6181" },
  red: "#c65c5c"
};

export const background = {
    blue: 'background-image: -webkit-gradient(linear, left top, left bottom, from(#54b4eb), color-stop(60%, #2FA4E7), to(#1d9ce5));' +
    'background-image: linear-gradient(#54b4eb, #2FA4E7 60%, #1d9ce5);' +
    'background-repeat: no-repeat;'
};


export const boxShadow = {
  light: `box-shadow: 0 0 24px 0 ${colors.shadowColor}`,
  grey: `box-shadow: 0 0 12px 0 ${colors.lightGrey}`,
  dark: `box-shadow: 0 0 12px 0 rgba(0,0,0,.15)`
};
