import Svg, { Path } from "react-native-svg";

const FacebookIcon = () => {
  return (
    <Svg x="0px" y="0px" width={32} height={32} viewBox="0 0 48 48">
      <Path
        fill="#3F51B5"
        d="M42 37a5 5 0 01-5 5H11a5 5 0 01-5-5V11a5 5 0 015-5h26a5 5 0 015 5v26z"
      />
      <Path
        fill="#FFF"
        d="M34.368 25H31v13h-5V25h-3v-4h3v-2.41c.002-3.508 1.459-5.59 5.592-5.59H35v4h-2.287C31.104 17 31 17.6 31 18.723V21h4l-.632 4z"
      />
    </Svg>
  );
};

export default FacebookIcon;
