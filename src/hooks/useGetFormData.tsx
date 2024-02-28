import { useSuspenseQuery } from '@tanstack/react-query'
import { getFormDataById } from '@/remote/form'

export const useGetFormData = (formId: string) => {
  return useSuspenseQuery({
    queryKey: ['formData', formId],
    queryFn: () => getFormDataById(formId),
  })
}
