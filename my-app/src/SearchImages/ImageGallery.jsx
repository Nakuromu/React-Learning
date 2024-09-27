import { Component } from "react";
import ImageGalleryItem from "./ImageGalleryItem";

class ImageGallery extends Component {
    state = {  } 
    render() { 

        const { cards } = this.props

        return (
            <ul className="gallery">
                {cards.map(card => (
                    <ImageGalleryItem key={card.id} card={card}/>
                ))}
            </ul>
        );
    }
}
 
export default ImageGallery;