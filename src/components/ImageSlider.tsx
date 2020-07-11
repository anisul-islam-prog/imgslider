import React from 'react';
import SliderItem, { ISlideItemProps } from './SlideItem';
import '../../public/css/image-slider.css';
interface IImageSliderProps {
    slides: ISlideItemProps[];
    currentIndex?: number;
}
interface IImageSliderState {
    currentIndex?: number;
}


export default class ImageSlider extends React.Component<IImageSliderProps, IImageSliderState> {
    static defaultProps: Partial<IImageSliderProps> = {
        currentIndex: 0
    }
    state: IImageSliderState = {
        currentIndex: this.props.currentIndex
    };
    showSlide(n: number) {
        this.setState({
            currentIndex: n
        });
    }
    currentSlide(n: number) {
        this.showSlide(n);
    }
    render() {
        let currentSlide = this.props.slides[this.state.currentIndex!];
        return (
            <section className="carousel" aria-labelledby="carouselheading">
                {/* <h3 id="carouselheading" className="visuallyhidden">Recent news</h3> */}
                <ul>
                    <li>
                        {/* <span className="dot" onClick={{currentSlide(1)}}></span> */}
                        {this.props.slides.map((slide, i) => {
                            return (<a className="dot" onClick={(event: React.MouseEvent<HTMLAnchorElement>) => {
                                return this.currentSlide(i);
                            }} ></a>);
                        })}

                    </li>
                    <SliderItem
                        title={currentSlide.title}
                        captionText={currentSlide.captionText}
                        imageUrl={currentSlide.imageUrl}
                    />
                </ul>
                <a className="prev">&#10094;</a>
                <a className="next">&#10095;</a>
            </section>
        );
    }
}