import styled from 'styled-components'

export const ProfileContainer = styled.div`
  background-color: ${(props) => props.theme['base-input']};

  position: absolute;
  width: 864px;
  height: 212px;
  left: calc(50% - 864px / 2); //centraliza o elemento ao meio
  top: 225px; // 225px abaixo do topo do elemento pai
  border-radius: 6px;

  display: flex;
  gap: 2rem;
  padding: 2rem;
`

export const ProfileContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-size: 24px;
  font-weight: 700;
`
export const InfoContainer = styled.div`
  display: flex;
  margin-top: 1rem;
  gap: 2rem;

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
