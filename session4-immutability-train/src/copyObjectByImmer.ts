import { produce } from "immer";

export function copyObjectByImmer() {
  const mainObj: { name: string; age: number; addres?: { street?: string; region?: number } } = {
    name: "jack",
    age: 20,
    addres: {
      street: "wals",
    },
  };

  const objCopy = produce(mainObj, (draftObj: any) => {
    draftObj.addres.region = 2;
  });
  console.log(mainObj, "main object", "copy by immer");
  console.log(objCopy, "copy object", "copy by immer");
}
