import React from 'react';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

const Header: React.FC = () => {

  return (
        <Container className="p-3">
            <Jumbotron>
                <h1 className="header">
                    Portfolio Practice Project
                </h1>
            </Jumbotron>
        </Container>
  );
};

export default Header;