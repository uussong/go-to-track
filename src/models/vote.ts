export interface VoteData {
  nickname: string
  vote: {
    albumId: string
    selectedTrack: number[]
  }
}

export interface VoteDataCount {
  [key: string]: number
}

export interface RankedTrackCount {
  trackNumber: number
  voteCount: number
  rank: number
}
