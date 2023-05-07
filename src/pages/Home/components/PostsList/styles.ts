import styled from 'styled-components'

export const PostsListContainer = styled.div`
  position: absolute;
  left: calc(50% - 416px / 2 - 224px);
  top: 631px;
  padding-bottom: 200px;

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
`

export const PostsListContent = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem;

  width: 420px;
  height: 260px;
  background-color: ${(props) => props.theme['base-post']};
  border-radius: 10px;

  .titleContainer {
    display: flex;
    justify-content: space-between;
  }

  .titleContent {
    width: 250px; /* Defina a largura desejada para a div */
    word-wrap: break-word; /* faz a quebra de linha se o texto ultrapassar a largura */

    font-size: 20px;
    font-weight: 700;
    color: ${(props) => props.theme['base-title']};
  }

  .descriptionText {
    overflow: hidden; /* esconde o texto sobressalente  */
    text-overflow: ellipsis; /* cria "..." no final do texto */
    display: -webkit-box;
    -webkit-line-clamp: 4; /* Número de linhas que você deseja exibir */
    -webkit-box-orient: vertical;

    font-size: 16px;
    line-height: 160%;
    color: ${(props) => props.theme['base-text']};
  }

  :hover {
    border-bottom: 1px solid ${(props) => props.theme['base-subtitle']};
  }
`
