import { store } from './redux/store';
import { fetchData } from './redux/actions/requestActions';
store.dispatch(fetchData())
const unsubscribe = store.subscribe(() => {
  console.log("new event", store.getState())
})
unsubscribe()
