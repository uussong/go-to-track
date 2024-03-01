import { useMutation } from '@tanstack/react-query'
import { saveVoteData } from '@/remote/vote'
import { VoteData } from '@/models/vote'

interface SaveVoteDataType {
  formId: string
  voteData: VoteData
}

export const useSaveVoteData = () => {
  return useMutation<string, Error, SaveVoteDataType>({
    mutationFn: ({ formId, voteData }) => saveVoteData(formId, voteData),
    onError: (error) => console.error(error),
  })
}
