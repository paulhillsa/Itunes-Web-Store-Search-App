import React from 'react';
import { Modal, Button } from 'react-bootstrap';

// Component: HelpModal
// Description: This component is used to display the help modal which contains information about the application.
const HelpModal = () => {
    // set the modal state
    const [isOpen, setIsOpen] = React.useState(false);

    // Open the modal
    const showModal = () => {
      setIsOpen(true);
    };
  
    // Close the modal
    const hideModal = () => {
      setIsOpen(false);
    };
  
    return (
      <div className="helpMoidal">
        <Button variant="btn btn-secondary" onClick={showModal}> Help </Button>

        <Modal show={isOpen} onHide={hideModal}>
          <Modal.Header>
            <Modal.Title>
              Instructions:
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ul>
              <li>
                <h2 className="lead"> Search for your favorite Itunes content! </h2>
              </li>
              <li>
                <h3 className="lead"> Simply enter a search term and select a catagory. </h3>
              </li>
              <li>
                <h3 className="lead"> Finally click 'Search' to view the results! </h3>
              </li>
              <li> 
                <h3 className="lead"> To add an item to your favourites, click the 'star' icon on an item's card. </h3>
              </li>
            </ul>
            <h3 className="lead text-center"> And lastly... Enjoy! </h3>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={hideModal}> Return </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  };

export default HelpModal;