import {
  subjectTrain,
  behavioralSubjectTrain,
  replaySubjectTrain,
  asyncSubjectTrain
} from './index';
// subjectTrain()
// behavioralSubjectTrain()
// replaySubjectTrain()
<<<<<<< HEAD
// asyncSubjectTrain()


function trimmer(val:string):string {
  return val.trim()
}
function splitter (val:string):string[] {
  return val.split("")

}
function deleteAndStringer(arr:string[]) {
  let result:string = "";
  for (let i:number =0; i <arr.length - 2; i++) {
     result = `${result}${arr[i]}`
  }
  return result
}

deleteAndStringer(splitter(trimmer("myNameis")))
=======
asyncSubjectTrain()
>>>>>>> a812103a17fc3a6b8ca2357d7dd6bc65a5f57d0b
