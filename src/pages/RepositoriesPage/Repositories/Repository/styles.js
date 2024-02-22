
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: rgba( 0, 0, 0, 0.25);
  border-left: 3px solid #bdc3c7;
  padding: 1rem;
`

export const Name = styled.h3`
  font-size: 1.2rem;
  font-weight: normal;
`

export const Description = styled.p`
  font-size: 0.8rem;
  line-height: 1.25;
  margin: 1rem 0;
`

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color:  ${(props) => props.color || props.theme.colors.champagneDark};
  font-size: 0.8rem;
`
export const Lang = styled.span`
  color: inherit;
`
export const Link = styled.a`
  color: inherit;
  font-weight: bold;
  text-transform: uppercase;
  text-decoration: none;
`
