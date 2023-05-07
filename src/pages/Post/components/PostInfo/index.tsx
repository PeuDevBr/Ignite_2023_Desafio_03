import { InfoContainer, ProfileContainer, TitleContainer } from './styles'
import githubImg from '../../../../assets/goToGithub.svg'
import backImg from '../../../../assets/back.svg'
import { DiGithubBadge } from 'react-icons/di'
import { NavLink } from 'react-router-dom'

import { FaCalendarDay, FaComment } from 'react-icons/fa'
import { useCallback, useContext, useEffect, useState } from 'react'
import { PostsContext, userProps } from '../../../../context/PostsContext'
import { Spinner } from '../../../../components/Spinner'
import { api } from '../../../../lib/axios'
import moment from 'moment'

const userName = import.meta.env.VITE_GITHUB_USERNAME

export function PostInfo() {
  const { selectedPost } = useContext(PostsContext)
  const [isLoading, setIsLoading] = useState(true)

  const [profileData, setProfileData] = useState<userProps>()

  const getProfileData = useCallback(async () => {
    try {
      setIsLoading(true)

      const response = await api.get(`/users/${userName}`)

      setProfileData(response.data)
    } finally {
      setTimeout(() => {
        setIsLoading(false)
      }, 300)
    }
  }, [profileData])

  useEffect(() => {
    getProfileData()
  }, [])

  return (
    <ProfileContainer>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <TitleContainer>
            <NavLink to="/">
              <img src={backImg} alt="" />
            </NavLink>
            <NavLink to={selectedPost?.html_url ?? '#'} target="_blank">
              <img src={githubImg} alt="" />
            </NavLink>
          </TitleContainer>
          <span>{selectedPost?.title}</span>
          <InfoContainer>
            <div>
              <DiGithubBadge size={24} color="#3a536b" />
              <span>{profileData?.login}</span>
            </div>
            <div>
              <FaCalendarDay size={16} color="#3a536b" />
              <span>
                Há {moment().diff(moment(selectedPost?.created_at), 'days')}{' '}
                dias
              </span>
            </div>
            <div>
              <FaComment size={18} color="#3a536b" />
              <span>{selectedPost?.comments} comentários</span>
            </div>
          </InfoContainer>
        </>
      )}
    </ProfileContainer>
  )
}
