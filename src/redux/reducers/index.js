import initialState from "../initialState";

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SHOW_RELATED_LIST':
      return { ...state, showRelatedList: action.payload };
    default:
      return state;
  }
}
