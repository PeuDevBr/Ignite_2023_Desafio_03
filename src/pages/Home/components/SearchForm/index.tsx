import { useForm } from 'react-hook-form'
import { SearchFormContainer } from './styles'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useContext } from 'react'
import { PostsContext } from '../../../../context/PostsContext'

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormImputs = z.infer<typeof searchFormSchema>

export function SearchForm() {
  const { getPosts, posts } = useContext(PostsContext)

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormImputs>({
    resolver: zodResolver(searchFormSchema),
  })

  async function handleSearchPosts(data: SearchFormImputs) {
    await getPosts(data.query)
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchPosts)}>
      <div>
        <span>Publicações</span>
        <span>
          {posts.length} {posts.length > 1 ? 'publicações' : 'publicação'}
        </span>
      </div>
      <input
        type="text"
        placeholder="Buscar conteúdo"
        {...register('query')}
        disabled={isSubmitting}
      />
    </SearchFormContainer>
  )
}
