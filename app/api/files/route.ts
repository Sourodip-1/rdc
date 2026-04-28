import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import FileModel from "@/models/File";

export async function GET(request: Request) {
  try {
    await dbConnect();
    const { searchParams } = new URL(request.url);
    const category = searchParams.get("category");

    const query = category ? { category } : {};
    const files = await FileModel.find(query).sort({ createdAt: -1 });

    return NextResponse.json({ files }, { status: 200 });
  } catch (error: any) {
    console.error("Fetch files error:", error);
    return NextResponse.json({ error: error.message || "Failed to fetch files" }, { status: 500 });
  }
}
