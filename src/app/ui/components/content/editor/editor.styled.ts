import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  background: ${props => props.theme.colors.darkGray};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.borderRadius.default};
  overflow: auto;

  .editor {
    font-size: 1.2rem;
    font-family: 'Inter';
    counter-reset: line;
    flex: 1;
    overflow: unset !important;
    
    pre {
      padding-left: 6rem !important;
    }

    &__text-area {
      outline: none;
      padding-left: 6rem !important;
    }

    &__line-number {
      position: absolute;
      left: 0;
      color: ${props => props.theme.colors.lightGray};
      text-align: right;
      width: 4rem;
      font-weight: 100;
    }
  }
`