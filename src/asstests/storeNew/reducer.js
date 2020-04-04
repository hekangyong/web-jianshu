const defaultState = {
  inputValue: "",
  list: []
};
export const reducer = (state = defaultState, action) => {
  if (action.type === "change_input_value") {
    const newState = JSON.parse(JSON.stringify(state));
    newState.inputValue = action.value;
    return newState;
  }
  if (action.type === "add_item") {
    console.log(action);
    const newState = JSON.parse(JSON.stringify(state));
    newState.list.push(state.inputValue);
    newState.inputValue = "";
    return newState;
  }
  return state;
};
