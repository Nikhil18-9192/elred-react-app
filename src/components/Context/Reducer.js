function reducer(state, action) {
  switch (action.type) {
    case "SET_BIO":
      return {
        ...state,
        bio: action.payload,
      };
    case "ADD_SKILL":
      return {
        ...state,
        bio: {
          ...state.bio,
          skills: action.payload,
        },
      };

    case "ADD_HOBBY":
      return {
        ...state,
        bio: {
          ...state.bio,
          hobbies: action.payload,
        },
      };

    case "ADD_SUBJECT":
      return {
        ...state,
        bio: {
          ...state.bio,
          subjects: action.payload,
        },
      };

    case "ADD_ETHICAL":
      return {
        ...state,
        ethicalRating: action.payload,
      };

    case "ADD_VIRTUAL":
      return {
        ...state,
        virtualRating: action.payload,
      };
    default:
      return state;
  }
}

export default reducer;
