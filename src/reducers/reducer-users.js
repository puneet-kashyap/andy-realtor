const InquiryFormReducer = (state={}, action) => {
  switch (action.type) {
    case 'UPDATE_INQUIRY_FORM':
      return {...state,
            name: action.name,
            phone: action.phone,
            email: action.email,
            realtor: action.realtor,
            date: action.date,
            time: action.time
    }
    default:
      return state
  }
}

export default InquiryFormReducer;
