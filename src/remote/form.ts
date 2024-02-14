import { User } from 'firebase/auth'
import {
  collection,
  doc,
  addDoc,
  getDocs,
  query,
  getDoc,
  orderBy,
  deleteDoc,
  setDoc,
} from 'firebase/firestore'
import { store } from './firebase'
import {
  FormDataFromUser,
  FormDataFromServer,
  FormListData,
} from '@/models/form'
import { COLLECTIONS } from '@/constants/collections'

export const saveFormData = async (user: User, formData: FormDataFromUser) => {
  const { uid } = user
  const userRef = doc(store, COLLECTIONS.FORM, uid)
  const formDataRef = collection(userRef, COLLECTIONS.FORMDATA)

  const currentTime = new Date()

  const formDataToSave = {
    ...formData,
    timestamp: currentTime,
  }

  await addDoc(formDataRef, formDataToSave)
}

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
): Promise<FormDataFromServer | null> => {
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

export const updateFormData = async (
  user: User,
  formId: string,
  updatedFormData: FormDataFromServer,
) => {
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
    await setDoc(formRef, updatedFormData)
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
