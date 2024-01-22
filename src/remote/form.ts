import { User } from 'firebase/auth'
import { doc, addDoc, collection } from 'firebase/firestore'
import { store } from './firebase'
import { FormData } from '@/models/form'
import { COLLECTIONS } from '@/constants/collections'

export const saveFormData = async (user: User, formInfo: FormData) => {
  const { uid } = user
  const userRef = doc(store, COLLECTIONS.FORM, uid)
  const formDataRef = collection(userRef, COLLECTIONS.FORMDATA)

  const currentTime = new Date()

  const formData = {
    ...formInfo,
    timestamp: currentTime,
  }

  await addDoc(formDataRef, formData)
}