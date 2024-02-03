import { useEffect } from 'react'
import { useSetRecoilState } from 'recoil'
import { Link } from 'react-router-dom'
import { formTitleState } from '@/stores/form'
import PageLayout from '@/components/shared/PageLayout'
import EnterTitle from '@/components/form/title/EnterTitle'
import history from '@/routes/history'
import useNavbar from '@/hooks/useNavbar'

export default function FormTitleCreate() {
  const setFormTitle = useSetRecoilState(formTitleState)
  const { updateNavbar } = useNavbar()
  useEffect(() => {
    updateNavbar({ left: <Link to={`/myforms`}>My forms</Link>, title: null })
  }, [updateNavbar])

  useEffect(() => {
    const listenBackEvent = () => {
      setFormTitle('')
    }

    const historyEvent = history.listen(({ action, location }) => {
      if (action === 'POP' && location.pathname === `/myforms`) {
        listenBackEvent()
      }
    })

    return () => {
      historyEvent()
    }
  }, [setFormTitle])

  return (
    <PageLayout>
      <EnterTitle setFormTitle={(formTitle) => setFormTitle(formTitle)} />
    </PageLayout>
  )
}