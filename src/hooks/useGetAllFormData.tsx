import { useSuspenseQuery } from '@tanstack/react-query'
import { getAllFormData } from '@/remote/form'

export const useGetAllFormData = () => {
  return useSuspenseQuery({
    queryKey: ['allFormData'],
    queryFn: () => getAllFormData(),
  })
}
