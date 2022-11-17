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
    const objCopy = {...mainObj}
    objCopy.addres = {
      ...objCopy.addres,
      region : 10
    }
    console.log(objCopy, "the copy of object", "normal copy")
    console.log(mainObj, "the main object", "normal copy")
  }
  //
  function normalCopy2() {
    const objCopy = Object.assign({}, mainObj)
    if (objCopy.addres !== undefined) {
      objCopy.addres.region = 20;
    }
    console.log(mainObj, "the copy of object", "normal copy2")
    console.log(objCopy, "the copy of object", "normal copy2")
  }

  function copyObjectByImmer() {
    const objCopy = produce(mainObj, ((draftObj: any) => {
      draftObj.addres.region = 2
    }))
    console.log(mainObj, "main object", "copy by immer")
    console.log(objCopy, "copy object", "copy by immer")
  }

  // normalCopy()
  // copyObjectByImmer()
  // normalCopy2()
}
