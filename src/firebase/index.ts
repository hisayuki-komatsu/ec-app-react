import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'
import 'firebase/functions'

import { firebaseConfig } from './config'

firebase.initializeApp(firebaseConfig)
