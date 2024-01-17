import { FormData } from '@/models/form'
import { store } from './firebase'
import { COLLECTIONS } from '@/constants/collections'
import { addDoc, collection } from 'firebase/firestore'

export const saveFormData = (formData: FormData) => {
  return addDoc(collection(store, COLLECTIONS.FORM), formData)
}
