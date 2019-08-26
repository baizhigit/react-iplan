const initialState = {
  projects: [
    { id: '1', title: 'first', content: 'first content' },
    { id: '2', title: 'second', content: 'second content' },
    { id: '3', title: 'third', content: 'third content' },
    { id: '4', title: 'fourth', content: 'fourth content' }
  ]
};

const projectReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_PROJECT':
      console.log('created project', action.project);
      return state;
    case 'CREATE_PROJECT_ERROR':
      console.log('create project error');
      return state;

    default:
      return state;
  }
};

export default projectReducer;
