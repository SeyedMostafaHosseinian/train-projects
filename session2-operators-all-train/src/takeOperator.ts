import { take, from } from 'rxjs';

export function takeOperator() {
  const  data = from(['milad','mostafa','ali',20,'hello',786])
  const rangeOfData = data.pipe(
    take(3)
  )
}
