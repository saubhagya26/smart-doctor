import Gallery from 'react-grid-gallery';
import useFetch from './useFetch';

const GalleryComp = () => {
    
    const { error, isPending, data: images } = useFetch('http://localhost:9000/images');

    return ( 
        <div className="gallery" id="goToGallery">
            <h1>Gallery</h1>
            {
                images &&
                <div className="pictures">
                        <Gallery images={images}/>
                </div>
            }
        </div>
     );
}
 
export default GalleryComp;