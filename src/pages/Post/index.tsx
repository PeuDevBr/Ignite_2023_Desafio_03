import { useCallback, useContext, useEffect, useState } from 'react'
import { PostInfo } from './components/PostInfo'
import { PostContainer } from './styles'
import { PostsContext } from '../../context/PostsContext'
import { useParams } from 'react-router-dom'
import { api } from '../../lib/axios'
import { PostContent } from './components/PostContent'

const username = import.meta.env.VITE_GITHUB_USERNAME
const repoName = import.meta.env.VITE_GITHUB_REPONAME

export function Post() {
  const { selectedPost, setSelectedPost } = useContext(PostsContext)
  const [isLoading, setIsLoading] = useState(true)

  const { id } = useParams()

  const getPostDetails = useCallback(async () => {
    try {
      setIsLoading(true)

      const response = await api.get(
        `/repos/${username}/${repoName}/issues/${id}`,
      )

      if (setSelectedPost) {
        setSelectedPost(response.data)
        console.log(response.data)
      }
    } finally {
      setTimeout(() => {
        setIsLoading(false)
      }, 300)
    }
  }, [selectedPost])

  useEffect(() => {
    getPostDetails()
  }, [])

  console.log(selectedPost)

  return (
    <>
      <PostInfo />
      <PostContainer>
        {!isLoading && (
          <>
            <PostContent content={selectedPost?.body ?? ''} />
          </>
        )}
      </PostContainer>
    </>
  )
}
