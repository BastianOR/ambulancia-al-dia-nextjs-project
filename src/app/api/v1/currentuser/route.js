import { currentUser } from '@clerk/nextjs/server';
import { NextResponse } from "next/server";

const getUsersName = async () =>{
    const userReturned = await currentUser();
    return userReturned?.fullName;
  }

  export async function GET(request){
    const currentUsername = await getUsersName();
    return NextResponse.json({ username: {currentUsername} });
}