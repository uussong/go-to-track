import { User } from 'firebase/auth'
import {
  collection,
  doc,
  getDocs,
  query,
  getDoc,
  orderBy,
  deleteDoc,
} from 'firebase/firestore'
import { store } from './firebase'
import { COLLECTIONS } from '@/constants/collections'
import { FormData, FormListData } from '@/models/form'

export const getFormList = async (user: User) => {
  const { uid } = user
  const formRef = collection(store, COLLECTIONS.FORM, uid, COLLECTIONS.FORMDATA)

  const querySnapshot = await getDocs(
    query(formRef, orderBy('timestamp', 'desc')),
  )

  const formList: FormListData[] = querySnapshot.docs.map((doc) => {
    const formData = doc.data()
    return {
      id: doc.id,
      data: {
        albumId: formData.albumId,
        artistId: formData.artistId,
        formTitle: formData.formTitle,
        timestamp: formData.timestamp.toDate(),
      },
    }
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

export const deleteFormData = async (user: User, formId: string) => {
  const { uid } = user
  const formRef = doc(
    store,
    COLLECTIONS.FORM,
    uid,
    COLLECTIONS.FORMDATA,
    formId,
  )
  await deleteDoc(formRef)
}
