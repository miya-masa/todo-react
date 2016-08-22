import TodoConstants from '../app/TodoConstants';

export default (state, action) => {
  const {id, todo, limitDate, complete} = action;
  switch (action.type) {
    case TodoConstants.CREATE:
      return [{
        todo,
        limitDate,
        complete
      }, ...state];
    case TodoConstants.COMPLETE:
      return state.map(e => e === id ? Object.assign({}, e, action.complete) : e);
    case TodoConstants.REMOVE:
      return state.filter(e => e === id);
    case TodoConstants.SEARCH:
      return state.filter(action.predicate);
    default:
      break;
  }
};
