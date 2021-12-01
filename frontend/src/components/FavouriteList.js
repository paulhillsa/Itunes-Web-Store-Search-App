import React from 'react'
import { Container, Table} from 'react-bootstrap'
import { FaTrashAlt } from 'react-icons/fa'

// Component: FavouriteList
// Description: This component is responsible for displaying the list of favourites
 const FavouriteList = (props) => {
    return (
        <Container className="tableContainer">
            <Table striped bordered hover shadow-lg>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Kind</th>
                        <th>Artwork</th>
                        <th>Artist Name</th>
                        <th>Track Name</th>
                        <th> Remove</th>
                    </tr>
                </thead>
                <tbody>
                            <tr key={props.favourite.id}>
                                <td>{props.favourite.id}</td>
                                <td>{props.favourite.kind}</td>
                                <td>
                                    <img src={props.favourite.artwork} alt={props.favourite.trackName} />
                                </td>
                                <td>{props.favourite.artistName}</td>
                                <td>{props.favourite.trackName}</td>
                                {/* Remove button which conatins function sent from Search component */}
                                <td> <button className="btn btn-danger" onClick={() => props.removeFavourite(props.favourite.id)}> <FaTrashAlt/> </button> </td>
                            </tr>
                </tbody>
            </Table>
        </Container>
    )
}

export default FavouriteList;