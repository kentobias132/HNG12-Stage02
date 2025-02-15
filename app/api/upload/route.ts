import { NextResponse } from "next/server";
import cloudinary from "@/utils/cloudinary";

export async function POST(request: Request) {
  try {
    const { image } = await request.json();

    if (!image) {
      return NextResponse.json({ error: "No image provided" }, { status: 400 });
    }

    const uploadedResponse = await cloudinary.uploader.upload(image, {
      folder: "conference_tickets",
      resource_type: "auto",
    });

    return NextResponse.json({ url: uploadedResponse.secure_url });
  } catch (error) {
    console.error("Image upload failed:", error);
    return NextResponse.json(
      {
        error: "Image upload failed",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
