import { NextRequest, NextResponse } from "next/server";
import { connectDb } from "@/lib/mongocon";
import { Transfer } from "@/models/transfer";
import { currentUser } from "@clerk/nextjs/server";

const getCurrentUser = async () => {
    const user = await currentUser();
    return user?.id;
}

export async function GET(){
    connectDb();
    const signedUser = await getCurrentUser() + "";
    const retrievedTransfers = await Transfer.find({completed: false, scheduler: signedUser});
    return NextResponse.json(retrievedTransfers);
}