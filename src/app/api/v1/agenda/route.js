import { NextRequest, NextResponse } from "next/server";
import { connectDb } from "@/lib/mongocon";
import { Transfer } from "@/models/transfer";
import { currentUser } from "@clerk/nextjs/server";

const getCurrentUser = async () => {
    const user = await currentUser();
    return user?.id;
}

export async function GET(request){
    const searchParams = request.nextUrl.searchParams
    const qday = searchParams.get('day');
    const qmonth = searchParams.get('month');
    connectDb();
    const signedUser = await getCurrentUser() + "";
    const retrievedTransfers = await Transfer.find({completed: false, scheduler: signedUser, day: qday, month: qmonth});
    return NextResponse.json(retrievedTransfers);
}

export async function POST(request){
    console.log(request);
    return NextResponse.json({ message: "redacted" });
}