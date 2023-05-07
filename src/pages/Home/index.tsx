import { PostsList } from './components/PostsList'
import { Profile } from './components/Profile'
import { SearchForm } from './components/SearchForm'

export function Home() {
  return (
    <>
      <Profile />
      <SearchForm />
      <PostsList />
    </>
  )
}
