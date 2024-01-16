import { useRecoilState } from 'recoil'
import { formDataState, formIdState } from '@/stores/form'
import { Button } from '../shared/button'
import { saveFormData } from '@/remote/form'
import { useEffect, useState } from 'react'
import { FormDataProps } from '@/models/form'
import { useNavigate } from 'react-router-dom'

export default function CompleteButton() {
  const [formId, setFormId] = useRecoilState(formIdState)
  const [formTitle, setFormTitle] = useRecoilState(formDataState)
  const [formData, setFormData] = useState<FormDataProps>()
  const navigate = useNavigate()
  console.log(formData)

  useEffect(() => {
    setFormData({
      formTitle: formTitle.formTitle,
      artistId: formId.artistId,
      albumId: formId.albumId,
    })
  }, [formTitle, formId.artistId, formId.albumId])

  const handleClick = () => {
    if (formData) {
      try {
        saveFormData(formData)
        setFormId({ artistId: '', albumId: '' })
        setFormTitle({ formTitle: '' })
        navigate(`/myforms`)
      } catch (error) {
        console.error(error)
      }
    }
  }

  return <Button onClick={handleClick}>완성</Button>
}
