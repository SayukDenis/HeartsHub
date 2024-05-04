
import Svg, { Path } from 'react-native-svg';
import { FooterContainerSVGComponent } from '../Main Page SVG/RecomendationSVG';
import { width } from '../../../SemiComponents/Constants/SizeConstants';

const SecuritySVG :FooterContainerSVGComponent=({widthOfSVG = width * 0.25,
    color = "#B2848B"})=> {
  return (
      <Svg width={widthOfSVG*0.31} height={widthOfSVG*0.35} viewBox="0 0 31 35" fill="none">
        <Path
          d="M22.8257 26.6562C23.5676 26.6562 24.1982 26.3781 24.7175 25.8218C25.2369 25.2656 25.4965 24.6086 25.4965 23.8509C25.4965 23.0931 25.2369 22.449 24.7175 21.9186C24.1982 21.3882 23.5676 21.123 22.8257 21.123C22.0838 21.123 21.4406 21.3882 20.896 21.9186C20.3514 22.449 20.0791 23.0931 20.0791 23.8509C20.0791 24.6086 20.3514 25.2656 20.896 25.8218C21.4406 26.3781 22.0838 26.6562 22.8257 26.6562ZM22.7663 32.1455C23.7265 32.1455 24.5936 31.9406 25.3675 31.5307C26.1415 31.1209 26.8007 30.5353 27.3454 29.7742C26.6001 29.3643 25.8554 29.0569 25.1112 28.8519C24.3671 28.647 23.5931 28.5445 22.7894 28.5445C21.9858 28.5445 21.2041 28.647 20.4445 28.8519C19.6849 29.0569 18.9468 29.3643 18.2302 29.7742C18.7749 30.5353 19.427 31.1209 20.1865 31.5307C20.9461 31.9406 21.8061 32.1455 22.7663 32.1455ZM13.7587 35C9.80305 34.0632 6.52104 31.7723 3.91262 28.1274C1.30421 24.4824 0 20.3032 0 15.5897V6.93852C0 6.37474 0.15586 5.86735 0.46758 5.41635C0.7793 4.96532 1.18239 4.63833 1.67684 4.43538L12.8558 0.175659C13.1711 0.0585529 13.472 0 13.7587 0C14.0453 0 14.3463 0.0585529 14.6616 0.175659L25.8405 4.43538C26.335 4.63833 26.738 4.96532 27.0498 5.41635C27.3615 5.86735 27.5173 6.37474 27.5173 6.93852V16.9511C27.116 16.7461 26.6861 16.5632 26.2275 16.4021C25.7688 16.2411 25.3389 16.1313 24.9376 16.0728V6.93852L13.7587 2.72271L2.57975 6.93852V15.5897C2.57975 17.8147 2.93088 19.8641 3.63315 21.7378C4.33541 23.6115 5.23116 25.2583 6.32039 26.6782C7.40962 28.0981 8.6135 29.2765 9.93204 30.2133C11.2506 31.1501 12.5261 31.8235 13.7587 32.2334C13.9307 32.5847 14.1886 32.9799 14.5326 33.4191C14.8766 33.8582 15.1632 34.1949 15.3925 34.4291C15.1345 34.5755 14.8622 34.6853 14.5756 34.7585C14.289 34.8317 14.0166 34.9122 13.7587 35ZM22.8953 35C20.6738 35 18.7749 34.1876 17.1983 32.5627C15.6218 30.9379 14.8336 29.013 14.8336 26.788C14.8336 24.4917 15.6217 22.5343 17.1979 20.9158C18.7741 19.2973 20.6804 18.4881 22.9168 18.4881C25.1239 18.4881 27.0229 19.2973 28.6137 20.9158C30.2046 22.5343 31 24.4917 31 26.788C31 29.013 30.2046 30.9379 28.6137 32.5627C27.0229 34.1876 25.1167 35 22.8953 35Z"
          fill={color}
        />
      </Svg>

  );
};

export default SecuritySVG;