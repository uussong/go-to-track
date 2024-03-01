import { useParams } from 'react-router-dom'
import PageLayout from '@/components/shared/PageLayout'
import { useGetVoteData } from '@/hooks/useGetVoteData'
import { useGetAlbumInfo } from '@/hooks/useGetAlbumInfo'
import { VoteData } from '@/models/vote'
import ResultDetail from '@/components/form/result/voter/ResultDetail'

export default function VoterResultPage() {
  const { userId, formId } = useParams()

  const { data } = useGetVoteData(formId ?? '', userId ?? '') as {
    data: VoteData
  }
  const { data: album } = useGetAlbumInfo(data.vote.albumId)

  return (
    <PageLayout>
      {data && <ResultDetail data={data} album={album} />}
    </PageLayout>
  )
}
