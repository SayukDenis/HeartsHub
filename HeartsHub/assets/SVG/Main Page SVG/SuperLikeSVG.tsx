import React from "react";
import { Path, Svg } from "react-native-svg";
import { width } from "../../../SemiComponents/Constants/SizeConstants";

interface SuperLikeSVGProps {
  size?: number;
  color?: string;
}

const SuperLikeSVG: React.FC<SuperLikeSVGProps> = ({
  size = width * 0.27,
  color = "black",
}) => {
  return (
    <Svg
      width={size * 0.28}
      height={size * 0.25}
      viewBox="0 0 28 25"
      fill="none"
      //style={{backgroundColor:"red"}}
    >
      <Path
        d="M8.33697 0C9.40772 0 10.427 0.205615 11.3948 0.616844C12.3626 1.02807 13.2183 1.62092 13.962 2.39537C14.7056 1.62092 15.5613 1.02807 16.5292 0.616844C17.497 0.205615 18.5162 0 19.587 0C21.7264 0 23.5131 0.715271 24.947 2.14581C26.3809 3.57633 27.0979 5.35881 27.0979 7.49325C27.0979 7.55915 27.0956 7.62504 27.0911 7.69094C27.0865 7.75683 27.0843 7.82273 27.0843 7.88862H23.7718C23.7808 7.82273 23.7853 7.75683 23.7853 7.69094V7.49325C23.7853 6.29035 23.3863 5.29284 22.5882 4.50072C21.7902 3.70861 20.7926 3.31256 19.5955 3.31256C18.6577 3.31256 17.784 3.5886 16.9742 4.14069C16.1644 4.69277 15.6033 5.3959 15.2908 6.25006H12.6508C12.3439 5.3959 11.7812 4.69277 10.9627 4.14069C10.1443 3.5886 9.27064 3.31256 8.34178 3.31256C7.15601 3.31256 6.16787 3.70861 5.37737 4.50072C4.58685 5.29284 4.19159 6.29035 4.19159 7.49325V7.69094C4.19159 7.75683 4.19613 7.82273 4.20519 7.88862H0.874969C0.874969 7.81979 0.872708 7.75292 0.868187 7.688C0.863646 7.62308 0.861375 7.55817 0.861375 7.49325C0.861375 5.35881 1.57496 3.57633 3.00213 2.14581C4.42927 0.715271 6.20755 0 8.33697 0ZM4.96872 15.8479H9.59922C10.1952 16.4348 10.8537 17.0621 11.5747 17.7297C12.2958 18.3972 13.0915 19.1259 13.962 19.9158C14.8324 19.1259 15.6282 18.3972 16.3492 17.7297C17.0702 17.0621 17.7287 16.4348 18.3247 15.8479H22.9688C22.1551 16.7511 21.1914 17.7297 20.0779 18.7835C18.9644 19.8373 17.6653 21.0336 16.1807 22.3723L13.962 24.3683L11.7432 22.3723C10.2585 21.0351 8.962 19.838 7.85381 18.7811C6.74565 17.7242 5.78395 16.7464 4.96872 15.8479ZM12.9688 16.3913C13.2867 16.3913 13.577 16.3014 13.8397 16.1216C14.1024 15.9418 14.2813 15.6975 14.3764 15.3886L15.6223 11.6373L16.6101 12.8207C16.7613 12.9874 16.9421 13.1169 17.1523 13.2093C17.3625 13.3017 17.5844 13.3479 17.8179 13.3479H27.9593V10.3886H18.466L16.3804 7.96066C16.2083 7.74961 16.0064 7.58839 15.7747 7.47697C15.5429 7.36555 15.2929 7.30984 15.0246 7.30984C14.7075 7.30984 14.4205 7.39975 14.1637 7.57956C13.9069 7.75935 13.731 8.00369 13.6358 8.31256L12.3899 12.0149L11.5041 10.9158C11.3528 10.7491 11.1721 10.6196 10.9619 10.5272C10.7517 10.4348 10.5298 10.3886 10.2962 10.3886H0V13.3479H9.54619L11.5788 15.7405C11.7391 15.9516 11.9406 16.1128 12.1833 16.2242C12.4259 16.3356 12.6878 16.3913 12.9688 16.3913Z"
        fill={color}
      />
    </Svg>
  );
};

export default SuperLikeSVG;
