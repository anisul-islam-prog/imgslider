import React, { ReactHTMLElement } from 'react';

export interface ISlideItemProps {
    title?: string,
    captionText?: string,
    imageUrl?: string
}

export default class SliderItem extends React.Component<ISlideItemProps>{
    render() {
        return (
            <li className="slide">
                <img src={this.props.imageUrl} alt="image" />
                <article>
                    <h3>{this.props.title}</h3>
                    <p>{this.props.captionText}</p>
                </article> 
            </li>
        );
    }
}