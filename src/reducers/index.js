import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer';
import SelectionReducer from './SelectionReducer';

// Reducers produce our application state
export default combineReducers({
    libraries: LibraryReducer,
    selectedLibraryId: SelectionReducer
});
