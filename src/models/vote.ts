export interface VoteData {
  nickname: string
  vote: {
    albumId: string
    selectedTrack: number[]
  }
}
