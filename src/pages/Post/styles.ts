import styled from 'styled-components'

export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 32px;
  gap: 24px;

  position: absolute;
  width: 864px;
  height: 422px;
  left: calc(50% - 864px / 2);
  top: 376px;

  line-height: 160%;

  p span {
    font-weight: 700;
    margin-right: 6px;
  }

  .title {
    color: ${(props) => props.theme['brand-blue']};
  }
`
