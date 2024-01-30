import { User } from 'firebase/auth'
import {
  collection,
  doc,
  getDocs,
  query,
  getDoc,
  orderBy,
} from 'firebase/firestore'
import { store } from './firebase'
import { COLLECTIONS } from '@/constants/collections'
import { FormData } from '@/models/form'

export const getFormList = async (
  user: User,
): Promise<{ id: string; data: FormData }[]> => {
  const { uid } = user
  const formRef = collection(store, COLLECTIONS.FORM, uid, COLLECTIONS.FORMDATA)

  const q = query(formRef, orderBy('timestamp', 'desc'))
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

export const getFormDataById = async (
  user: User,
  formId: string,
): Promise<FormData | null> => {
  const { uid } = user
  const formRef = doc(
    store,
    COLLECTIONS.FORM,
    uid,
    COLLECTIONS.FORMDATA,
    formId,
  )

  const docSnapshot = await getDoc(formRef)

  if (docSnapshot.exists()) {
    const formData = docSnapshot.data()
    return {
      albumId: formData.albumId,
      artistId: formData.artistId,
      formTitle: formData.formTitle,
      timestamp: formData.timestamp.toDate(),
    }
  } else {
    return null
  }
}
