import { copy } from "copy-anything";

export function copyObjectByAnyThings() {
  const main = {
    id: 10,
    title: "salam",
    category: "learning",
    lables: ["learn", "programming", "web"],
    media: {
      video: "video1.mp4",
      image: "pic1.png",
      sound: "voice1.mp3",
    },
  };
  const copyObject: {
    subId?: string;
    id?: number;
    media?: { video?: string | {}; image?: string; sound?: string };
  } = copy(main); //copy
  ///changing the media field
  copyObject.media = {
    ...copyObject.media,
    image: "changedImage.jpeg",
  };
  // add a field :

  console.log(main, "main object","copy by any-things package");
  console.log(copyObject, "copied object","copy by any-things package");
  console.log(copyObject === main, "the comparission objects 'main === copyObject'","copy by any-things package"); //false
}
