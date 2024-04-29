import { CarouselPageComponent } from "../Recomendation page/RecomendationPage";

interface WrapperForCarouselPagesProps {
  Component: CarouselPageComponent;
}

const WrapperForCarouselPages: React.FC<WrapperForCarouselPagesProps> = ({
  Component,
}) => {
  return <Component />;
};

export default WrapperForCarouselPages;
