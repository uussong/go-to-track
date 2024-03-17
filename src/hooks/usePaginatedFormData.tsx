import { useInfiniteQuery } from '@tanstack/react-query'
import { fetchInitialFormList, fetchNextFormList } from '@/remote/form'
import { DocumentData, DocumentSnapshot } from 'firebase/firestore'

export const usePaginatedFormData = () => {
  return useInfiniteQuery({
    queryKey: ['paginatedFormData'],
    queryFn: ({
      pageParam,
    }: {
      pageParam: DocumentSnapshot<DocumentData> | null
    }) => {
      return pageParam ? fetchNextFormList(pageParam) : fetchInitialFormList()
    },
    getNextPageParam: (lastPage) => lastPage.lastVisible,
    initialPageParam: null,
  })
}
