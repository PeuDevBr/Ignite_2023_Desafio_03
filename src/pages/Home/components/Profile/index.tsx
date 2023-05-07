import {
  InfoContainer,
  ProfileContainer,
  ProfileContent,
  TitleContainer,
} from './styles'
import githubImg from '../../../../assets/github.svg'
import { DiGithubBadge } from 'react-icons/di'
import { BsFillBuildingFill, BsPeopleFill } from 'react-icons/bs'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { PostsContext } from '../../../../context/PostsContext'
import { Spinner } from '../../../../components/Spinner'

export function Profile() {
  const { profileData, isLoading } = useContext(PostsContext)

  return (
    <ProfileContainer>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <img src={profileData?.avatar_url} alt="" />
          <ProfileContent>
            <TitleContainer>
              <span>{profileData?.name}</span>
              <nav>
                <NavLink to={profileData?.html_url ?? '#'} target="_blank">
                  {/* corrigi o erro caso profileData?.html_url for undefined */}
                  <img src={githubImg} alt="" />
                </NavLink>
              </nav>
            </TitleContainer>
            <span>{profileData?.bio}</span>
            <InfoContainer>
              <div>
                <DiGithubBadge size={24} color="#3a536b" />
                <span>{profileData?.login}</span>
              </div>
              <div>
                <BsFillBuildingFill size={16} color="#3a536b" />
                <span>{profileData?.company}</span>
              </div>
              <div>
                <BsPeopleFill size={18} color="#3a536b" />
                <span>{profileData?.followers} seguidores</span>
              </div>
            </InfoContainer>
          </ProfileContent>
        </>
      )}
    </ProfileContainer>
  )
}
