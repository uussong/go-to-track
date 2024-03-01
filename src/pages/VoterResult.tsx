import { useParams } from 'react-router-dom'
import PageLayout from '@/components/shared/PageLayout'
import { useGetVoteData } from '@/hooks/useGetVoteData'
import { useGetAlbumInfo } from '@/hooks/useGetAlbumInfo'
import { VoteData } from '@/models/vote'
import ResultDetail from '@/components/form/result/voter/ResultDetail'
import { useGetVoteCount } from '@/hooks/useGetVoteCount'

export default function VoterResultPage() {
  const { userId, formId } = useParams()

  const { data } = useGetVoteData(formId ?? '', userId ?? '') as {
    data: VoteData
  }
  const { data: album } = useGetAlbumInfo(data.vote.albumId)
  const { data: voteCount } = useGetVoteCount(formId!)

  return (
    <PageLayout>
      {data && <ResultDetail data={data} album={album} voteCount={voteCount} />}
    </PageLayout>
  )
}
