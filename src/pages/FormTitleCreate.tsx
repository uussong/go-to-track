import { useEffect } from 'react'
import { useSetRecoilState } from 'recoil'
import { Link } from 'react-router-dom'
import { formTitleState } from '@/stores/form'
import PageLayout from '@/components/shared/PageLayout'
import EnterTitle from '@/components/form/title/EnterTitle'
import useNavbar from '@/hooks/useNavbar'
import SignOut from '@/components/shared/SignOut'

export default function FormTitleCreate() {
  const setFormTitle = useSetRecoilState(formTitleState)
  const { updateNavbar } = useNavbar()
  useEffect(() => {
    updateNavbar({
      left: <Link to={`/myforms`}>My forms</Link>,
      right: <SignOut />,
    })
  }, [updateNavbar])

  return (
    <PageLayout>
      <EnterTitle setFormTitle={(formTitle) => setFormTitle(formTitle)} />
    </PageLayout>
  )
}
