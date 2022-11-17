import { produce } from "immer";
export function copyObjectImmutable() {
  const mainObj: { name: string; age: number; addres?: { street?: string; region?: number } } = {
    name: "jack",
    age: 20,
    addres: {
      street: "wals",
    },
  };
  function normalCopy() {
    const objCopy = {
      ...mainObj,
      addres: {
        ...mainObj.addres,
        region: 4,
      },
    };
    console.log(objCopy,"the copy of object","normal copy")
    console.log(mainObj,"the main object", "normal copy")
  }
  function copyObjectByImmer() {
    const objCopy = produce(mainObj,((draftObj:any) => {
        draftObj.addres.region = 2
    }))
    console.log(mainObj,"main object","copy by immer")
    console.log(objCopy,"copy object","copy by immer")
  }
  normalCopy()
  copyObjectByImmer()
}
