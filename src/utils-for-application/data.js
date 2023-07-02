import image1 from "../images/bun-01.svg";
import image2 from "../images/meat-03.svg";
import image3 from "../images/core.svg";
import image4 from "../images/mineral-rings.svg";
import image5 from "../images/sauce-03.svg";
import API from "../services/api/api";

const ready = [
  { number: "034533" },
  { number: "034532" },
  { number: "034530" },
  { number: "034527" },
  { number: "034525" },
];

const work = [{ number: "034538" }, { number: "034541" }, { number: "034542" }];

const order = [
  {
    number: "#034535",
    date: "Сегодня, 16:20 i-GMT+3",
    title: " Death Star Starship Main бургер",
    images: [
      { image: image1 },
      { image: image2 },
      { image: image3 },
      { image: image4 },
      { image: image5 },
      { image: image2 },
      { image: image3 },
      { image: image4 },
      { image: image5 },
      { image: image2 },
      { image: image3 },
      { image: image4 },
    ],
    price: "480",
  },
];

const orders = [
  {
    number: "#034535",
    date: "Сегодня, 16:20 i-GMT+3",
    title: " Death Star Starship Main бургер",
    state: "Создан",
    images: [
      { image: image1 },
      { image: image2 },
      { image: image3 },
      { image: image4 },
      { image: image5 },
      { image: image2 },
      { image: image3 },
      { image: image4 },
      { image: image5 },
      { image: image2 },
      { image: image3 },
      { image: image4 },
    ],
    price: "480",
  },
];

const getData = async () => {
  const request = await API.getData().then((r) => {
    return r.data;
  });
  return request;
};

const data = await getData();

const mock = {
  number: "#034533",
  title: "Black Hole Singularity острый бургер",
  readiness: "Выполнен",
  array: data,
  date: "Вчера, 13:50 i-GMT+3",
  total: 510,
};

export { ready, work, order, orders, mock };
