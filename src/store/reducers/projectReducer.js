const initialState = {
  projects: [
    { id: '1', title: 'first', content: 'first content' },
    { id: '2', title: 'second', content: 'second content' },
    { id: '3', title: 'third', content: 'third content' },
    { id: '4', title: 'fourth', content: 'fourth content' }
  ]
};

const projectReducer = (state = initialState, { type, project }) => {
  switch (type) {
    case 'CREATE_PROJECT':
      console.log('created project', project);
      return { ...state, ...project };

    default:
      return state;
  }
};

export default projectReducer;
