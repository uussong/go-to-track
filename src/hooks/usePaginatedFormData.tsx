import { useInfiniteQuery } from '@tanstack/react-query'
import { fetchInitialFormList, fetchNextFormList } from '@/remote/form'

export const usePaginatedFormData = () => {
  return useInfiniteQuery({
    queryKey: ['paginatedFormData'],
    queryFn: ({ pageParam }: { pageParam: any }) => {
      return pageParam ? fetchNextFormList(pageParam) : fetchInitialFormList()
    },
    getNextPageParam: (lastPage) => lastPage.lastVisible,
    initialPageParam: null,
  })
}
