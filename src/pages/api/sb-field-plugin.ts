import nc from "next-connect";
import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

interface CreateUserRequestBody extends NextApiRequest {}

interface CreateUserResponse extends NextApiResponse {}

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
