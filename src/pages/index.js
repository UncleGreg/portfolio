import React from 'react';
import MainTemplate from 'templates/MainTemplate/MainTemplate';
import styled from 'styled-components';

const StyledHeading = styled.h1`
  color: red;
`;

const IndexPage = () => (
  <MainTemplate>
    <StyledHeading>Front-end Developer</StyledHeading>
    <StyledHeading>Front-end Developer</StyledHeading>
  </MainTemplate>
);

export default IndexPage;
