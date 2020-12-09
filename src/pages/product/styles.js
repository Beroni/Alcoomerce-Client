import styled from "styled-components";

export const Image = styled.div`
  width: 100%;
  overflow: hidden;
  height: 300px;
  background-image: url("${props => props.src}");
  background-size: cover;
`;

export const Container = styled.div`
  padding: 1em;
`;

export const Content = styled.div`
  padding: 1em 4em;
`;

export const Price = styled.h1`
  font-size: 3em;
  font-weight: bold;
  margin-bottom: 0;
`;