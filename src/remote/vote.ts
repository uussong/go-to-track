import { addDoc, collection, doc } from 'firebase/firestore'
import { store } from './firebase'
import { COLLECTIONS } from '@/constants/collections'
import { VoteData } from '@/models/vote'

export const saveVoteData = async (formId: string, voteData: VoteData) => {
  const voteRef = doc(store, COLLECTIONS.VOTE, formId)
  const voteDataRef = collection(voteRef, COLLECTIONS.VOTEDATA)

  await addDoc(voteDataRef, voteData)
}
