import { User } from 'firebase/auth'
import { collection, getDocs, query } from 'firebase/firestore'
import { store } from './firebase'
import { COLLECTIONS } from '@/constants/collections'
import { FormData } from '@/models/form'

export const getFormList = async (
  user: User,
): Promise<{ id: string; data: FormData }[]> => {
  const { uid } = user
  const formRef = collection(store, COLLECTIONS.FORM, uid, COLLECTIONS.FORMDATA)

  const q = query(formRef)
  const querySnapshot = await getDocs(q)

  const formList: { id: string; data: FormData }[] = []

  querySnapshot.forEach(async (doc) => {
    const formData = doc.data()
    const formDataWithId = {
      id: doc.id,
      data: {
        albumId: formData.albumId,
        artistId: formData.artistId,
        formTitle: formData.formTitle,
        timestamp: formData.timestamp.toDate(),
      },
    }

    formList.push(formDataWithId)
  })

  return formList
}
