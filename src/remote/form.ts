import { User } from 'firebase/auth'
import { collection, getDocs, query } from 'firebase/firestore'
import { store } from './firebase'
import { COLLECTIONS } from '@/constants/collections'
import { FormData } from '@/models/form'

export const getFormData = async (user: User): Promise<FormData[]> => {
  const { uid } = user
  const formRef = collection(store, COLLECTIONS.FORM, uid, COLLECTIONS.FORMDATA)

  const q = query(formRef)

  const querySnapshot = await getDocs(q)
  const formDataList: FormData[] = []

  querySnapshot.forEach((doc) => {
    const formData = doc.data()
    formDataList.push({
      albumId: formData.albumId,
      artistId: formData.artistId,
      formTitle: formData.formTitle,
      timestamp: formData.timestamp.toDate(),
    })
  })

  return formDataList
}
