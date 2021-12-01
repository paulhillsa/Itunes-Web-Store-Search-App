import React from 'react'
import axios from 'axios'
import {Container, Form, Button, FormControl, DropdownButton, Dropdown} from 'react-bootstrap'

// Components imported
import DisplayItems from './DisplayItems'
import HelpModal from './HelpModal'
import FavouriteList from './FavouriteList'

// Component: Search
/* Description: Search component for the frontend this contains the search form,
 request to the backend and renders the display of the items, favourite list, the state management and logic*/

class Search extends React.Component {
  constructor() {
    super()
    this.state = {
      searchItem: '',
      searchItemEdited: '',
      catagory: '',
      data: [],
      favourites: [],
    }
  }

    //when user selects catagory from dropdown menu it updates the state of catagory
    handleCatagorySelect = (eventKey, value) => {
        this.setState({catagory: eventKey})
    }

    //when user types in search bar it updates the state of searchItem and searchItemEdited
    handleSearchChange = (event) => {
        //recieve user input
        this.setState({searchItem: event.target.value})
        // split and join to remove spaces and replace spaces for '+'s to searchItem variable
        const searchItemEdited = this.state.searchItem.split(' ').join('+')
        this.setState({searchItemEdited: searchItemEdited})
    }

     //show button once user selects a catagory
     showButton = () => {
        if (this.state.catagory !== '') {
            return (
                <Button className="btn btn-primary" onClick={this.handleSubmit}>Search {this.state.catagory.toUpperCase()} </Button>
            )
        }
    }

    /*  When user clicks search/submit button it sends user input to server.js
        and recieves the response from the server and updates the state of data 
        if no results were found by the api an alert is sent to state that no results have been found
    */
    handleSubmit = (event) => {
        // axios call to get data from server.js
        let query = this.state.searchItemEdited
        let type = this.state.catagory
        axios.get(`/search/${query}/${type}`)
        .then(res => {
            this.setState({data: res.data.results})
            if (res.data.results.length === 0) {
                alert('Unfortunately no results were found!')
            }
        }
        )
    }

    // Show no results message (Itunes Web Store Search Heading) if no results are found
    showNoResults = () => {
        if (this.state.data.length === 0) {
            return (
                <h1 id='noResults' > Itunes Web Store Search</h1>
            )
        }
    }

    // Show no favourites message if no favourites are found
    showNoFavourites = () => {
        if (this.state.favourites.length === 0 && this.state.searchItemEdited !== '' && this.state.catagory !== '' && this.state.data.length !== 0) {
            return (
                <h3 className="lead text-center"> Click the star on an item to view your favourites here! </h3>
            )
        }
    }

    // Gets favourited item info from DisplayItems and sets it to favourites state
    handleFavourites = (id, kind, artistName, trackName, artwork) => {
        //if item is already in favourites it will not be added again
        // else pushes item info to favourites state
        if (this.state.favourites.find(item => item.id === id)) {
            alert('This item has already been added to your favourites list!')
        } else {
        this.setState({favourites: [...this.state.favourites, {id: id, kind: kind, artistName: artistName, trackName: trackName, artwork: artwork}]})
        alert('Added to your favourites list, scroll down to view!')
        }
    }

    // Removes item from favourites
    removeFavourite = (id) => {
        // filter out item from favourites state
        const newFavourites = this.state.favourites.filter(item => item.id !== id)
        this.setState({favourites: newFavourites})
        alert('Removed from favourites list')
    }
    
    render() {
        return (
            <Container>

                {/* Navbar/Header */}
                    <div className="header">
                        {/* Seach form */}
                        <Form onChange={this.handleSearchChange}>
                            <FormControl type="text" placeholder='Search term...' className="mr-sm-2" />
                        </Form>

                        {/* Dropdown catagory menu */}
                        <DropdownButton title='Catagories' id="dropdown-basic-button" onSelect={this.handleCatagorySelect}>
                                {/* when user selects an drop down item updates catagory state */}
                                <Dropdown.Item eventKey='movie' value='Movie'> Movie </Dropdown.Item>
                                <Dropdown.Item eventKey='podcast' value='Podcast'> Podcast </Dropdown.Item>
                                <Dropdown.Item eventKey='music' value='Music'> Music </Dropdown.Item>
                                <Dropdown.Item eventKey='audiobook' value='Audiobook'> Audiobook </Dropdown.Item>
                                <Dropdown.Item eventKey='shortFilm' value='Short Film'> Short Film </Dropdown.Item>
                                <Dropdown.Item eventKey='tvShow' value='TV Show'> TV Show </Dropdown.Item>
                                <Dropdown.Item eventKey='software' value='Software'> Software </Dropdown.Item>
                                <Dropdown.Item eventKey='ebook' value='Ebook'> Ebook </Dropdown.Item>
                                <Dropdown.Item eventKey='all' value='All'> All </Dropdown.Item>
                        </DropdownButton>

                        {/* shows button once user selects a catagory */}
                        <div className="searchButton">
                            {this.showButton()} 
                        </div>
                    
                        {/* Help modal with instructions */}
                        <HelpModal className="modalButton"/>
                    </div>

                {/* Display items */}
                <Container className="cardsContainer">
                {this.state.data.length !== 0 ? (
                    this.state.data.map((item, index) => {
                        return (
                            <DisplayItems
                                key={index}
                                item={item}
                                handleFavourites={this.handleFavourites}
                            />
                        )
                    })
                ) : (
                    <div className="noResults">
                        {/* Show no results message if no results are found and upon intial load */}
                        {this.showNoResults()}
                    </div>
                )}
                </Container>

                {/* Favourites list */}
                <Container className="favouritesContainer">
                {this.state.favourites.length !== 0 ? (
                    this.state.favourites.map((favourite, index) => {
                        return (
                            <FavouriteList
                                key={index}
                                favourite={favourite}
                                removeFavourite={this.removeFavourite}
                            />
                        )
                    }
                    )
                ) : (
                    <div className="noFavourites">
                        {/* Show no favourites message if no results are found */}
                        {this.showNoFavourites()}
                    </div>
                )}
                </Container>
            </Container>
        )
    }
}

export default Search;


