import { pagination } from '../consts'
import getPageNumbers from '@utilities/getPageNumbers'

interface GetPaginationProps<T> {
  posts: T
  page: string | number
  isIndex?: boolean
}

const postsPerPage = pagination.postsPerPage

const getPagination = <T>({ posts, page, isIndex = false }: GetPaginationProps<T[]>) => {
  const totalPagesArray = getPageNumbers(posts.length)
  const totalPages = totalPagesArray.length

  let currentPage = 0
  if (!isIndex) {
    if (page && !isNaN(Number(page)) && totalPagesArray.includes(Number(page))) {
      currentPage = Number(page)
    }
  } else {
    currentPage = 1
  }

  const lastPost = isIndex ? postsPerPage : currentPage * postsPerPage
  const startPost = isIndex ? 0 : lastPost - postsPerPage
  const paginatedPosts = posts.slice(startPost, lastPost)

  return {
    totalPages,
    currentPage,
    paginatedPosts,
  }
}

export default getPagination
