import nc from "next-connect";
import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

interface CreateUserRequestBody extends NextApiRequest {}

interface CreateUserResponse extends NextApiResponse {}

const fieldPluginData = [
  {
    title: "Product 1",
    price: "$10.00",
    description: "This is a description",
    imgSrc: "https://picsum.photos/100/100"
  },
  {
    title: "Product 2",
    price: "$12.00",
    description: "This is a description",
    imgSrc: "https://picsum.photos/100/100"
  },
  {
    title: "Product 3",
    price: "$13.00",
    description: "This is a description",
    imgSrc: "https://picsum.photos/100/100"
  },
  {
    title: "Product 4",
    price: "$14.00",
    description: "This is a description",
    imgSrc: "https://picsum.photos/100/100"
  },
  {
    title: "Product 5",
    price: "$15.00",
    description: "This is a description",
    imgSrc: "https://picsum.photos/100/100"
  },
  {
    title: "Product 6",
    price: "$16.00",
    description: "This is a description",
    imgSrc: "https://picsum.photos/100/100"
  },
  {
    title: "Product 7",
    price: "$17.00",
    description: "This is a description",
    imgSrc: "https://picsum.photos/100/100"
  },
  {
    title: "Product 8",
    price: "$18.00",
    description: "This is a description",
    imgSrc: "https://picsum.photos/100/100"
  },
  {
    title: "Product 9",
    price: "$19.00",
    description: "This is a description",
    imgSrc: "https://picsum.photos/100/100"
  },
  {
    title: "Product 10",
    price: "$20.00",
    description: "This is a description",
    imgSrc: "https://picsum.photos/100/100"
  }
];

const handler = nc<CreateUserRequestBody, CreateUserResponse>({
  onNoMatch: (_, res) => {
    res.status(404).end("Page not found");
  },
  onError: (err, _, res) => {
    if (err) {
      res.status(400).end("Invalid request body");
    } else {
      res.status(500).end("Internal server error");
    }
  }
});

handler.post(async (req, res) => {
  const { data } = req.body;

  // Store the data in your preferred format or save it to a database

  res.status(200).json({ success: true });
});

export default handler;
