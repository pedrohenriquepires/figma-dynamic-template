import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  background: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.white};
  padding: ${props => props.theme.padding.default};
`