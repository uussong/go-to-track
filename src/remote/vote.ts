import { getDocs, collection, query } from 'firebase/firestore'
import { store } from './firebase'
import { COLLECTIONS } from '@/constants/collections'

export const getFormVoteCount = async (formId: string) => {
  const voteDataRef = collection(
    store,
    COLLECTIONS.VOTE,
    formId,
    COLLECTIONS.VOTEDATA,
  )

  const querySnapshot = await getDocs(query(voteDataRef))

  return querySnapshot.size
}
