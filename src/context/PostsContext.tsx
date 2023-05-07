import React, {
  ReactNode,
  createContext,
  useCallback,
  useEffect,
  useState,
} from 'react'
import { api } from '../lib/axios'

export interface PostsProps {
  id: number
  title: string
  body: string
  description: string
  created_at: string
  number: number
  comments: number
  html_url: string
}

export interface userProps {
  login: string
  name: string
  bio: string
  avatar_url: string
  followers: number
  company: string
  html_url: string
}

interface PostsContextType {
  posts: PostsProps[]
  selectedPost?: PostsProps
  profileData?: userProps
  getPosts: (query?: string) => Promise<void>
  setSelectedPost?: React.Dispatch<React.SetStateAction<PostsProps | undefined>>
  isLoading: boolean
}

interface PropsProviderProps {
  children: ReactNode
}

const userName = import.meta.env.VITE_GITHUB_USERNAME
const repoName = import.meta.env.VITE_GITHUB_REPONAME

export const PostsContext = createContext({} as PostsContextType)

export function PostsProvider({ children }: PropsProviderProps) {
  const [posts, setPosts] = useState<PostsProps[]>([])
  const [selectedPost, setSelectedPost] = useState<PostsProps>()
  const [profileData, setProfileData] = useState<userProps>()
  const [isLoading, setIsLoading] = useState(true)

  const getPosts = useCallback(
    async (query: string = '') => {
      // string = '' => quando não tiver uma query definida não pesguisar como undefined e sim como ""
      try {
        setIsLoading(true)

        const response = await api.get(
          `/search/issues?q=${query}%20repo:${userName}/${repoName}`,
        )

        setPosts(response.data.items)
      } finally {
        setTimeout(() => {
          setIsLoading(false)
        }, 200)
      }
    },
    [posts],
  )

  useEffect(() => {
    getPosts()
  }, [])

  const getProfileData = useCallback(async () => {
    try {
      setIsLoading(true)

      const response = await api.get(`/users/${userName}`)

      setProfileData(response.data)
    } finally {
      setTimeout(() => {
        setIsLoading(false)
      }, 1000)
    }
  }, [profileData])

  useEffect(() => {
    getProfileData()
  }, [])

  return (
    <PostsContext.Provider
      value={{
        posts,
        profileData,
        selectedPost,
        getPosts,
        setSelectedPost,
        isLoading,
      }}
    >
      {children}
    </PostsContext.Provider>
  )
}
