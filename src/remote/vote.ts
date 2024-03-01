import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
} from 'firebase/firestore'
import { store } from './firebase'
import { COLLECTIONS } from '@/constants/collections'
import { VoteData, VoteDataCount } from '@/models/vote'

export const saveVoteData = async (formId: string, voteData: VoteData) => {
  const voteRef = doc(store, COLLECTIONS.VOTE, formId)
  const voteDataRef = collection(voteRef, COLLECTIONS.VOTEDATA)

  const docRef = await addDoc(voteDataRef, voteData)

  return docRef.id
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

export const getRankedTrackVoteCounts = async (formId: string) => {
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

  const sortedTrackCounts = Object.entries(selectedTrackCounts)
    .sort((a, b) => b[1] - a[1])
    .map(([trackNumber, voteCount], index) => ({
      trackNumber: parseInt(trackNumber),
      voteCount,
      rank: index + 1,
    }))

  return sortedTrackCounts
}

export const getVoteData = async (formId: string, userId: string) => {
  const voteDataRef = doc(
    store,
    COLLECTIONS.VOTE,
    formId,
    COLLECTIONS.VOTEDATA,
    userId,
  )

  const docSnap = await getDoc(voteDataRef)

  if (docSnap.exists()) {
    return docSnap.data() as VoteData
  }
}
