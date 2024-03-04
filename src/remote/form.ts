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
  where,
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
  const formDataRef = collection(store, COLLECTIONS.FORM)

  const currentTime = new Date()

  const formDataToSave = {
    ...formData,
    uid,
    timestamp: currentTime,
  }

  await addDoc(formDataRef, formDataToSave)
}

export const getAllFormData = async () => {
  const formRef = collection(store, COLLECTIONS.FORM)

  const querySnapshot = await getDocs(formRef)

  const formList: FormListData[] = querySnapshot.docs.map((doc) => {
    const formData = doc.data()
    return {
      id: doc.id,
      data: {
        albumId: formData.albumId,
        artistId: formData.artistId,
        formTitle: formData.formTitle,
        uid: formData.uid,
        timestamp: formData.timestamp.toDate(),
      },
    }
  })

  return formList
}

export const getFormList = async (user: User) => {
  const { uid } = user
  const formRef = collection(store, COLLECTIONS.FORM)

  const querySnapshot = await getDocs(
    query(formRef, where('uid', '==', uid), orderBy('timestamp', 'desc')),
  )

  const formList: FormListData[] = querySnapshot.docs.map((doc) => {
    const formData = doc.data()
    return {
      id: doc.id,
      data: {
        albumId: formData.albumId,
        artistId: formData.artistId,
        formTitle: formData.formTitle,
        uid: formData.uid,
        timestamp: formData.timestamp.toDate(),
      },
    }
  })
  return formList
}

export const getFormDataById = async (formId: string) => {
  const formRef = doc(store, COLLECTIONS.FORM, formId)

  const docSnapshot = await getDoc(formRef)

  if (docSnapshot.exists()) {
    const formData = docSnapshot.data()
    return {
      albumId: formData.albumId,
      artistId: formData.artistId,
      formTitle: formData.formTitle,
      uid: formData.uid,
      timestamp: formData.timestamp.toDate(),
    }
  } else {
    return null
  }
}

export const updateFormData = async (
  formId: string,
  updatedFormData: FormDataFromServer,
) => {
  const formRef = doc(store, COLLECTIONS.FORM, formId)

  const docSnapshot = await getDoc(formRef)

  if (docSnapshot.exists()) {
    await setDoc(formRef, updatedFormData)
  }
}

export const deleteFormData = async (formId: string) => {
  const formRef = doc(store, COLLECTIONS.FORM, formId)
  await deleteDoc(formRef)
}
