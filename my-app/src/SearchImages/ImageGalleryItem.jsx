const ImageGalleryItem =({card}) => {
    return (
        <li className="gallery-item" style={{display: 'inline-block'}}>
            <img src={card.webformatURL} alt={card.id} width='300'/>
        </li>
    )
}

export default ImageGalleryItem