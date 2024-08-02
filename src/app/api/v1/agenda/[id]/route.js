import { NextRequest, NextResponse } from "next/server";
import { connectDb } from "../../../../../lib/mongocon";
import { Transfer } from "../../../../../models/transfer";
import { currentUser } from "@clerk/nextjs/server";
import mongoose from "mongoose";

const getCurrentUser = async () => {
  const user = await currentUser();
  return user?.id;
};

export async function PUT(request, { params }) {
  try {
    connectDb();
    const id = params.id;
    const doc = await Transfer.findById(id);
    doc.completed = true;
    await doc.save();
    return NextResponse.json({ status: 201 });
  } catch (err) {
    return NextResponse.json(err.message, { status: 400 });
  }
}
