import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import PageLayout from '@/components/shared/PageLayout'
import { useGetFormData } from '@/hooks/useGetFormData'
import { FormDataFromUser } from '@/models/form'
import useNavbar from '@/hooks/useNavbar'
import Navbar from '@/components/form/result/Navbar'
import SignOut from '@/components/shared/SignOut'

export default function ResultPage() {
  const { formId } = useParams()
  const { data: form } = useGetFormData(formId ?? '') as {
    data: FormDataFromUser
  }

  const { updateNavbar } = useNavbar()

  useEffect(() => {
    updateNavbar({
      left: <Navbar formTitle={form.formTitle} />,
      right: <SignOut />,
    })
  }, [updateNavbar, form.formTitle])

  return <PageLayout>ResultPage</PageLayout>
}
