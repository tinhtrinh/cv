import {all, call, put, takeEvery} from 'redux-saga/effects';
import {fetchContactsSuccess, showContactMessage} from '../actions/Contact';
import {FETCH_ALL_CONTACT} from '../constants/ActionTypes';
import axios from 'axios';

function* fetchContactRequest() {
  const fetchedContact = yield axios({
    method: "GET",
    url: 'http://5e5a298a6a71ea0014e61c55.mockapi.io/api/members'
  }).then(res => {
    return  res.data;
  }).catch(error => {
    showContactMessage(error);
  });
  yield put(fetchContactsSuccess(fetchedContact)); 
}


export default function* rootSaga() {
  yield all([takeEvery(FETCH_ALL_CONTACT, fetchContactRequest)]);
}