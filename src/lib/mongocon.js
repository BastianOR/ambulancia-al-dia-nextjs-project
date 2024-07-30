import { connect, connection } from "mongoose"

const conn = {
    isConnected: 0
}

export async function connectDb(){
    if (conn.isConnected !== 0) return
    const connectionString = process.env.MONGODB_CONNECTION_STRING;
    const db = await connect(connectionString);
    conn.isConnected = db.connections[0].readyState;
}