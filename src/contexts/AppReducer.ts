import { State, Action } from '../datatypes/DataType';


const AppReducer = (state:State, action:Action) => {
    switch (action.type) {
      case 'GET_TASKS':
        // console.log("AppReducer :: GET_TASKS, action.payload? " + action.payload);
          return {
            ...state,
            tasks: action.payload
          };
      case 'TOGGLE_SHOW_ADDTASK':
        // console.log("AppReducer :: TOGGLE_SHOW_ADDTASK, action.payload? " + action.payload);
        return {
            ...state,
            showAddTask: action.payload
        }
      case 'ADD_TASK':
        // console.log("AppReducer :: ADD_TASK, action.payload? " + action.payload);
        return {
          ...state,
          tasks: [...state.tasks, action.payload]
        };
      case 'DELETE_TASK':
        return {
          ...state,
          tasks: state.tasks.filter((task) => task.id !== action.payload)
        };
      case 'TOGGLE_REMINDER':
          return {
            ...state,
            tasks: state.tasks.map((task) => (task.id === action.payload) ? {...task, reminder: !task.reminder} : task)
          };
      case 'TRANSACTION_ERROR':
          return {
            ...state,
            error: action.payload
          };
      default:
        return state;
    };
};

export default AppReducer;