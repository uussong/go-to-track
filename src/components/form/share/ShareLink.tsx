import { useParams } from 'react-router-dom'
import { Button } from '@/components/shared/button'

export default function ShareLink() {
  const { formId } = useParams()
  const shareLink = `${window.location.origin}/${formId}`

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareLink)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <Button variant={'secondary'} onClick={copyLink}>
      공유
    </Button>
  )
}
