import { useContext } from 'react'
import { PostsListContainer, PostsListContent } from './styles'
import { PostsContext } from '../../../../context/PostsContext'
import moment from 'moment'
import { NavLink } from 'react-router-dom'

export function PostsList() {
  const { posts } = useContext(PostsContext)

  return (
    <PostsListContainer>
      {posts.map((post) => {
        return (
          <NavLink
            key={post.id}
            to={`/post/${post.number}`}
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <nav>
              <PostsListContent>
                <div className="titleContainer">
                  <div className="titleContent">
                    <span>{post.title}</span>
                  </div>
                  <span>
                    Há {moment().diff(moment(post.created_at), 'days')} dias
                  </span>
                </div>

                <span className="descriptionText">{post.body}</span>
              </PostsListContent>
            </nav>
          </NavLink>
        )
      })}
    </PostsListContainer>
  )
}
