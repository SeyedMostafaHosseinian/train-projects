import {compose , pipe} from "lodash/fp";
export function composePipeCurryingFun() {

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
  // deleteAndStringer(splitter(trimmer("myNameis")))

  const composedExample = compose(
    deleteAndStringer,
    splitter,
    trimmer
  )
  const pipedExample = pipe(
    trimmer,
    splitter,
    deleteAndStringer
  )

  function multiFun(arg1:any,arg2:any,arg3:any) {
    return arg1 * arg2 * arg3
  }
  multiFun(10,20,30)

  const curryingMultipleFun = (arg1:number) => (arg2:number) =>(arg3:number) => arg1 * arg2 * arg3

  console.log(curryingMultipleFun(10)(20)(30))
  console.log(pipedExample("muNameis"))
  console.log(composedExample("myNameis"))
}
