import { Component } from "react";
import SearchBar from "./SearchImages/SearchBar";
import photoApi from './SearchImages/services/searchPhotoApi';
import ImageGallery from "./SearchImages/ImageGallery";
import Button from "./SearchImages/Button";
import Loader from "./SearchImages/Loader";

class App extends Component {
    state = { 
        searchQuery: '',
        page: 1,
        photoData: null,
        showBtn: false,
        loader:false,
     } 

     handleFormSubmit = searchQuery => {
        this.setState({
            searchQuery,
            page: 1,
            photoData: null,
            showBtn: false
        });
     }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.searchQuery !== this.state.searchQuery || prevState.page !== this.state.page) {
            this.setState({loader: true})
            photoApi.fetchPhoto(this.state.searchQuery, this.state.page)
                .then(data => this.setState(prevState => ({
                    photoData: prevState.page === 1 ? data.hits : [...prevState.photoData, ...data.hits],
                    showBtn: data.hits.length > 0 
                })))
                .catch(error => console.log(error))
                .finally(() => this.setState({loader: false}));
                
        }
    }

    handleClick = () => {
        this.setState(prevState => ({
            page: prevState.page + 1
        }));
    }

    render() { 
        const { photoData, showBtn, loader } = this.state;

        return (
            <>
                <SearchBar onSubmit={this.handleFormSubmit} />
                {photoData && <ImageGallery cards={photoData} />}
                {photoData && photoData.length !== 0 && loader !== true && showBtn && (
                    <Button loadMoreBtnClick={this.handleClick} />
                )}
                {loader && <Loader/>}
            </>
        );
    }
}

export default App;
