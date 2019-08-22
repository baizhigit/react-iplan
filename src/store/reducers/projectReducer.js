const initialState = {
  projects: [
    { id: '1', title: 'first', content: 'first content' },
    { id: '2', title: 'second', content: 'second content' },
    { id: '3', title: 'third', content: 'third content' },
    { id: '4', title: 'fourth', content: 'fourth content' }
  ]
};

const projectReducer = (state = initialState, { type, payload }) => {
  // switch (type) {
  //   case typeName:
  //     return { ...state, ...payload };

  //   default:
  //     return state;
  // }

  return state;
};

export default projectReducer;
