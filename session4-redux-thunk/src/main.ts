import { store } from './redux/store';
import { fetchData } from './redux/actions/requestActions';

fetchData()
const unsunbscribe = store.subscribe(() => {
  console.log("new event", store.getState())
})
