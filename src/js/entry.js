require('./index.jsx');
require('../style/style.css');
import store from './store'
import {
    addTodo,
    toggleTodo,
    setVisibilityFilter,
    VisibilityFilters
} from './action'

console.log(store.getState());

let unsubscribe = store.subscribe(()=>
    console.log(store.getState())
);
console.log("ABCD");
store.dispatch(addTodo('Learn about actions'))
store.dispatch(addTodo('Learn about reducers'))
store.dispatch(addTodo('Learn about store'))
store.dispatch(toggleTodo(0))
store.dispatch(toggleTodo(1))
store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED))
// Stop listening to state updates
unsubscribe();
