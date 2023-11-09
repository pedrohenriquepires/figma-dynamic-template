import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Actions = styled.div`
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  display: flex;
  gap: 1rem;
`

export const Credits = styled.div`
  flex: 1;
  text-align: right;
  font-size: 1rem;
  color: ${props => props.theme.colors.gray};
  justify-content: flex-end;
`

export const Column = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`