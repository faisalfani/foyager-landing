import { Box } from '@chakra-ui/react';
import styled from '@emotion/styled';

export const NavBrand = styled.img`
  cursor: pointer;
`;

export const NavLink = styled.ul`
  list-style: none;
  display: flex;
  column-gap: 1rem;
  align-items: center;
`;

export const CustomAnchor = styled.span`
  cursor: pointer;
  position: relative;
  font-weight: ${(props) => (props.isActive ? 'bolder' : '')};
  :hover {
    ::after {
    }
  }
`;

export const NavButton = styled(Box)`
  padding: 8px 19px;
  border: solid 2px #0e6ffe;
  border-radius: 20px;
`;
