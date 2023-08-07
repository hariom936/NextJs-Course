import { MongoClient } from 'mongodb';

export async function connectToDatabase() {
  const client = await MongoClient.connect(
    'mongodb+srv://hariomverma:p6zIQ7rTTJlZMgYz@cluster0.ugjqown.mongodb.net/auth-demo?retryWrites=true&w=majority'
  );

  return client;
}
