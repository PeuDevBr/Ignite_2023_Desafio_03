import styled from 'styled-components'

export const SearchFormContainer = styled.form`
  position: absolute;
  width: 864px;
  left: calc(50% - 864px / 2);
  top: 500px;

  display: flex;
  flex-direction: column;
  gap: 8px;

  div {
    display: flex;
    justify-content: space-between;

    span {
      font-weight: 700;
      font-size: 18px;
      line-height: 160%;
      color: ${(props) => props.theme['base-subtitle']};
    }

    span + span {
      font-weight: 400;
      font-size: 14px;
      color: ${(props) => props.theme['base-span']};
    }
  }

  input {
    height: 50px;

    padding: 12px 16px;
    color: ${(props) => props.theme['base-label']};
    background-color: ${(props) => props.theme['base-input']};
    border: 1px solid ${(props) => props.theme['base-border']};
    border-radius: 6px;
  }

  input::placeholder {
    color: ${(props) => props.theme['base-label']};
  }
`
