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

