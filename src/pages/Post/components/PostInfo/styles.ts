import styled from 'styled-components'

export const ProfileContainer = styled.div`
  background-color: ${(props) => props.theme['base-input']};

  position: absolute;
  width: 864px;
  height: 178px;
  left: calc(50% - 864px / 2); //centraliza o elemento ao meio
  top: 200px; // 225px abaixo do topo do elemento pai
  border-radius: 6px;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  font-size: 24px;
  font-weight: 700;
  padding: 2rem;
`

export const TitleContainer = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
`
export const InfoContainer = styled.div`
  display: flex;
  gap: 2rem;

  font-size: 16px;
  font-weight: 400;
  color: ${(props) => props.theme['base-span']};

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.2rem;
  }

  span {
    margin-left: 0.2rem;
  }
`
