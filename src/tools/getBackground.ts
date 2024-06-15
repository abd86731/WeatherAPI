import image1URL from "../styles/images/pexels-quang-nguyen-vinh-222549-2132008.jpg?url";
import image2URL from "../styles/images/pexels-frans-van-heerden-201846-830822.jpg?url";
import image3URL from "../styles/images/pexels-jdominici-286076.jpg?url";
import image4URL from "../styles/images/pexels-jplenio-1110663.jpg?url";

const IMAGE = [
  {
    id: 1,
    url: image1URL,
  },
  {
    id: 2,
    url: image2URL,
  },
  {
    id: 3,
    url: image3URL,
  },
  {
    id: 4,
    url: image4URL,
  },
];

export default function getBackground() {
  const index = Math.floor(Math.random() * IMAGE.length);

  return `url("${IMAGE[index].url}")`;
}
