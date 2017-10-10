import {store} from '../index'

export const updateInquiryForm = (data) => {
  store.dispatch({
    type:'UPDATE_INQUIRY_FORM',
        name: data.name,
        phone : data.phone,
        email : data.email,
        realtor: data.realtor,
        date: data.date,
        time: data.time
  })
}
