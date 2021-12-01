import React from 'react'
import { Card } from 'react-bootstrap'
import { FaStar } from 'react-icons/fa';

// Component: DisplayItems
// Description: Displays the items found in the search results
 const DisplayItems = (props) => {
    return (
        <div className="singleCard">
            <Card className='shadow-lg' >
                <Card.Img variant="top"  src={props.item.artworkUrl100} alt={props.item.trackName} />
                <Card.Body>
                    <Card.Title>{props.item.trackName} </Card.Title>
                    <Card.Text>{props.item.artistName}</Card.Text>
                    {/* add to favourites star icon 
                        which sends the info back to the Search component to be put into the 
                        favourites state array */}
                    <div className="" onClick={() => props.handleFavourites(
                        props.item.trackId,
                        props.item.kind,
                        props.item.artistName,
                        props.item.trackName,
                        props.item.artworkUrl100,
                        )}> 
                            <FaStar className='star'/>
                        </div>
                </Card.Body>
            </Card>
        </div>
    )
}

export default DisplayItems;
