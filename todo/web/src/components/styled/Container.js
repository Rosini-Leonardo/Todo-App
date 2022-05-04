import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled('div')`
    // Styling and sizing 
    border-radius: 10px;
    padding: 1rem;
    height: 70vh;
    width: 80vw;
    // Position in the middle of the page
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
`;

export function Container({children}) {
  return (
      <React.Fragment>
          <StyledContainer>
              {children}
          </StyledContainer>
      </React.Fragment>
  )
};
