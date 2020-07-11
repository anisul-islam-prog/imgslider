import React from 'react';
import ImageSlider from './components/ImageSlider';
import { ISlideItemProps } from './components/SlideItem';

const ImgUrl: string = "../../public/images/bg1.jpg";

const Slides: ISlideItemProps[] = [
  { title: "heading-1", captionText: "this is a caption", imageUrl: ImgUrl },
  { title: "heading-2", captionText: "this is a caption", imageUrl: ImgUrl },
  { title: "heading-3", captionText: "this is a caption", imageUrl: ImgUrl }
];

export const App: React.FunctionComponent = () => {
  return (
    <ImageSlider
      slides={Slides}
    />
  );
};
