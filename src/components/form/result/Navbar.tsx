import { Link } from 'react-router-dom'
import { Text } from '../../shared/text'

export default function Navbar({ formTitle }: { formTitle: string }) {
  return (
    <>
      <Link to={`/myforms`}>My forms</Link>
      <span> / </span>
      <Text variant={'bodyStrong'}>{formTitle}</Text>
    </>
  )
}
