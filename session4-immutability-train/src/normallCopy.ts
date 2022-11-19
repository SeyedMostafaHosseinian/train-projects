export function normalCopy() {
  const mainObj: { name: string; age: number; addres?: { street?: string; region?: number } } = {
    name: "jack",
    age: 20,
    addres: {
      street: "wals",
    },
  };
  const objCopy = {
    ...mainObj,
    addres: {
      ...mainObj.addres,
      region: 4,
    },
  };
  console.log(mainObj, "the main object", "normal copy");
  console.log(objCopy, "the copy of object", "normal copy");
}
