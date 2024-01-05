import { useQuery } from '@tanstack/react-query'
import { getAccessToken } from '@/remote/spotify'

export default function SpotifyAuth({
  children,
}: {
  children: React.ReactNode
}) {
  const { data, isError, refetch, error } = useQuery({
    queryKey: ['accessToken'],
    queryFn: getAccessToken,
    refetchInterval: 60 * 60 * 1000,
  })

  if (isError) {
    refetch()
    console.error(error)
  }

  if (data) {
    localStorage.setItem('access_token', data.access_token)
  }

  return <>{children}</>
}
