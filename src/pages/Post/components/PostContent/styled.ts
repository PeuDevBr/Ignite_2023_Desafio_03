import styled from 'styled-components'

export const PostContentContainer = styled.div`
  img {
    width: 100%;
  }

  h1,
  h2,
  h3 {
    color: ${(props) => props.theme['brand-blue']};
    padding: 1rem 0 1rem 0;
  }

  ul {
    list-style: inherit;
    padding-left: 1.5rem;
  }

  p {
    padding: 0 0 1rem 0;
  }

  pre {
    background: ${(props) => props.theme['base-post']};
    padding: 1rem;
    > div {
      background: none !important;
      padding: 0 !important;
      margin: 0 !important;
      code {
        font-family: 'FiraCode', monospace !important;
        line-height: 160% !important;
      }
    }
  }
`
