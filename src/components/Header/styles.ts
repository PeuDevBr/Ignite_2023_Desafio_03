import styled from 'styled-components'

export const HeaderContainer = styled.div`
  background-color: ${(props) => props.theme['base-profile']};
`

export const HeaderContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 18.5rem;

  .logo {
    margin-top: -4rem;
  }
`
