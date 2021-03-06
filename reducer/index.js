import { combineReducers } from 'redux'

import postData from './postData'
import userData from './userData'
import formControl from './formContorl'
import loginFormInput from './loginFormInput'
import searchPost from './searchPost'
import fetchingData from './fetchingData'
import formInputData from './formInputData'
import loadingFirst from './loadingFirst'

const reducer = combineReducers({
  postData,
  formControl,
  loginFormInput,
  userData,
  searchPost,
  fetchingData,
  formInputData,
  loadingFirst,
})

export default reducer
