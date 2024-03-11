import { useEffect } from 'react'
import { useSetRecoilState } from 'recoil'
import { Link } from 'react-router-dom'
import { formTitleState } from '@/stores/form'
import PageLayout from '@/components/shared/PageLayout'
import EnterTitle from '@/components/form/title/EnterTitle'
import useNavbar from '@/hooks/useNavbar'
import SignOut from '@/components/shared/SignOut'
import Navbar from '@/components/form/title/Navbar'

export default function FormTitleCreatePage() {
  const setFormTitle = useSetRecoilState(formTitleState)
  const { updateNavbar } = useNavbar()
  useEffect(() => {
    updateNavbar({
      left: <Navbar />,
      right: <SignOut />,
    })
  }, [updateNavbar])

  return (
    <PageLayout>
      <EnterTitle setFormTitle={(formTitle) => setFormTitle(formTitle)} />
    </PageLayout>
  )
}
