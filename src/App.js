
import React from "react";
import "./App.css";
import AppRouter from "./config/router";
import jeans1 from "./Images/Jeans 1.jpeg";
import jeans2 from "./Images/Jeans 2.webp";
import jeans3 from "./Images/Jeans 3.webp";
import jeans4 from "./Images/Jeans 4.webp";
import jeans5 from "./Images/Jeans 5.jpeg";
import jeans6 from "./Images/Jeans 6.webp";
import jeans7 from "./Images/Jeans 7.webp";
import jeans8 from "./Images/Jeans 8.webp";
import tshirt1 from "./Images/T-shirt 1.webp";
import tshirt2 from "./Images/T-shirt 2.webp";
import tshirt3 from "./Images/T-shirt 3.webp";
import tshirt4 from "./Images/T-shirt 4.webp";
import tshirt5 from "./Images/T-shirt 5.webp";
import tshirt6 from "./Images/T-shirt 6.webp";
import tshirt7 from "./Images/T-shirt 7.webp";
import tshirt8 from "./Images/T-shirt 8.webp";
import tshirt9 from "./Images/T-shirt 9.webp";
import tshirt10 from "./Images/T-shirt 10.webp";
import zipper1 from "./Images/Zipper 1.webp";
import zipper2 from "./Images/Zipper 2.webp";
import zipper3 from "./Images/Zipper 3.webp";
import zipper4 from "./Images/Zipper 4.webp";
import zipper5 from "./Images/Zipper 5.webp";
import zipper6 from "./Images/Zipper 6.webp";
import zipper7 from "./Images/Zipper 7.webp";
import zipper8 from "./Images/Zipper 8.webp";
import zipper9 from "./Images/Zipper 9.webp";
import zipper10 from "./Images/Zipper 10.webp";

function App() {
  const details = [
    {
      id: 1,
      image: jeans1,
      category: "Mens",
      title: "Jeans",
      description: "Men's Regular Fit Jeans",
      price: "1499",
    },
    {
      id: 2,
      image: jeans2,
      category: "Mens",
      title: "Jeans",
      description:
        "Men's Regular Fit Jeans",
      price: "1120",
    },
    {
      id: 3,
      image: jeans3,
      category: "Mens",
      title: "Jeans",
      description:
        "Men's Regular Fit Jeans",
      price: "950",
    },
    {
      id: 4,
      image: jeans4,
      category: "Mens",
      title: "Jeans",
      description:
        "Men's Regular Fit Jeans",
      price: "770",
    },
    {
      id: 5,
      image: jeans5,
      title: 'Jeans',
      category: "Mens",
      description:
        "Men's Regular Fit Jeans",
      price: "1699",
    },
    {
      id: 6,
      image: jeans6,
      category: "Mens",
      title: 'Jeans',
      description:
        "Men's Regular Fit Jeans",
      price: "1379",
    },
    {
      id: 7,
      image: jeans7,
      category: "Mens",
      title: "Jeans",
      description:
        "Men's Regular Fit Jeans",
      price: "2150",
    },
    {
      id: 8,
      image: jeans8,
      category: "Mens",
      title: "Jeans",
      description:
        "Men's Regular Fit Jeans",
      price: "1999",
    },
    {
      id: 9,
      image: tshirt1,
      category: "Mens",
      title: "T-shirt",
      description: "Mens Classic Full Sleeve T-shirt in multi colors",
      price: "1499",
    },
    {
      id: 10,
      image: tshirt2,
      category: "Mens",
      title: "T-shirt",
      description: "Mens Classic Full Sleeve T-shirt in multi colors",
      price: "799",
    },
    {
      id: 11,
      image: tshirt3,
      category: "Mens",
      title: "T-shirt",
      description: "Mens Classic Full Sleeve T-shirt in multi colors",
      price: "1149",
    },
    {
      id: 12,
      image: tshirt4,
      category: "Mens",
      title: "T-shirt",
      description: "Mens Classic Full Sleeve T-shirt in multi colors",
      price: "2150",
    },
    {
      id: 13,
      image: tshirt5,
      category: "Mens",
      title: "T-shirt",
      description: "Mens Classic Full Sleeve T-shirt in multi colors",
      price: "920",
    },
    {
      id: 14,
      image: tshirt6,
      category: "Mens",
      title: "T-shirt",
      description: "Mens Classic Full Sleeve T-shirt in multi colors",
      price: "1680",
    },
    {
      id: 15,
      image: tshirt7,
      category: "Mens",
      title: "T-shirt",
      description: "Mens Classic Full Sleeve T-shirt in multi colors",
      price: "1180",
    },
    {
      id: 16,
      image: tshirt8,
      category: "Mens",
      title: "T-shirt",
      description: "Mens Classic Full Sleeve T-shirt in multi colors",
      price: "1390",
    },
    {
      id: 17,
      image: tshirt9,
      category: "Mens",
      title: "T-shirt",
      description: "Mens Classic Full Sleeve T-shirt in multi colors",
      price: "1050",
    },
    {
      id: 18,
      image: tshirt10,
      category: "Mens",
      title: "T-shirt",
      description: "Mens Classic Full Sleeve T-shirt in multi colors",
      price: "2380",
    },
    {
      id: 19,
      image: zipper1,
      category: "Mens",
      title: "Zipper",
      description: "Men Zipper for winter in multi colors",
      price: "870",
    },
    {
      id: 20,
      image: zipper2,
      category: "Mens",
      title: "Zipper",
      description: "Men Zipper for winter in multi colors",
      price: "1280",
    },
    {
      id: 21,
      image: zipper3,
      category: "Mens",
      title: "Zipper",
      description: "Men Zipper for winter in multi colors",
      price: "1490",
    },
    {
      id: 22,
      image: zipper4,
      category: "Mens",
      title: "Zipper",
      description: "Men Zipper for winter in multi colors",
      price: "1630",
    },
    {
      id: 23,
      image: zipper5,
      category: "Mens",
      title: "Zipper",
      description: "Men Zipper for winter in multi colors",
      price: "2160",
    },
    {
      id: 24,
      image: zipper6,
      category: "Mens",
      title: "Zipper",
      description: "Men Zipper for winter in multi colors",
      price: "1750",
    },
    {
      id: 25,
      image: zipper7,
      category: "Mens",
      title: "Zipper",
      description: "Men Zipper for winter in multi colors",
      price: "1140",
    },
    {
      id: 26,
      image: zipper8,
      category: "Mens",
      title: "Zipper",
      description: "Men Zipper for winter in multi colors",
      price: "850",
    },
    {
      id: 27,
      image: zipper9,
      category: "Mens",
      title: "Zipper",
      description: "Men Zipper for winter in multi colors",
      price: "1660",
    },
    {
      id: 28,
      image: zipper10,
      category: "Mens",
      title: "Zipper",
      description: "Men Zipper for winter in multi colors",
      price: "2450",
    },
  ];

  return (
    <>
      <AppRouter details={details} />
    </>
  );
}

export default App;
