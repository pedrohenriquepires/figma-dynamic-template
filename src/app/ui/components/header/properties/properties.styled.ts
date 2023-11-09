import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: ${props => props.theme.colors.darkGray};
  border-radius: ${props => props.theme.borderRadius.default};
  padding: 2rem;
  gap: 1rem;
  border: .1rem solid ${props => props.theme.colors.border};
`

export const Title = styled.div`
  font-weight: bolder;
  color: ${props => props.theme.colors.white};
  font-size: 1.8rem;
  display: flex;
  justify-content: space-between;
`

export const Toggle = styled.button`
  font-size: .9rem;
  font-weight: 300;
  text-decoration: underline;
  color: ${props => props.theme.colors.white};
  cursor: pointer;
`

export const Empty = styled.span`
  color: ${props => props.theme.colors.gray};
  font-style: italic;
  font-weight: 100;
`

export const PropertiesList = styled.ul`
  display: flex;
  gap: .8rem;
  list-style: none;
  padding: 0;
  margin: 0;
`

export const Property = styled.li`
  padding: .3rem .8rem;
  background: ${props => props.theme.colors.background};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.borderRadius.sm};
`