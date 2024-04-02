import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { ExpoRequest } from "expo-router/server";

console.log({ AWS_ACCESS_KEY_ID: process.env.AWS_ACCESS_KEY_ID });

const client = new DynamoDBClient({
  apiVersion: "2012-08-10",
  region: "us-east-1",
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});

export async function GET(request: ExpoRequest) {
  console.log("GET /api/messages");
  console.log(client);
}
