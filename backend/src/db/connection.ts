import { connect, disconnect } from "mongoose";
async function connectToDatabase() {
  try {
    await connect("mongodb://127.0.0.1:27017/chatBot");
  } catch (error) {
    console.log(error);
    throw new Error("Could not Connect To MongoDB");
  }
}

async function disconnectFromDatabase() {
  try {
    await disconnect();
  } catch (error) {
    console.log(error);
    throw new Error("Could not Disconnect From MongoDB");
  }
}

export { connectToDatabase, disconnectFromDatabase };
