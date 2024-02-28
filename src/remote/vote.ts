import { addDoc, collection, doc, getDocs, query } from 'firebase/firestore'
import { store } from './firebase'
import { COLLECTIONS } from '@/constants/collections'
import { VoteData, VoteDataCount } from '@/models/vote'

export const saveVoteData = async (formId: string, voteData: VoteData) => {
  const voteRef = doc(store, COLLECTIONS.VOTE, formId)
  const voteDataRef = collection(voteRef, COLLECTIONS.VOTEDATA)

  await addDoc(voteDataRef, voteData)
}

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

export const getSelectedTrackCounts = async (formId: string) => {
  const voteDataRef = collection(
    store,
    COLLECTIONS.VOTE,
    formId,
    COLLECTIONS.VOTEDATA,
  )
  const querySnapshot = await getDocs(voteDataRef)

  const selectedTrackCounts: VoteDataCount = {}

  querySnapshot.forEach((doc) => {
    const voteData = doc.data()
    const selectedTracks: number[] = voteData.vote.selectedTrack

    selectedTracks.forEach((track) => {
      if (selectedTrackCounts[track]) {
        selectedTrackCounts[track]++
      } else {
        selectedTrackCounts[track] = 1
      }
    })
  })

  return selectedTrackCounts
}
