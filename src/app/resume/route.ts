import { readFile } from "node:fs/promises";
import path from "node:path";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const filePath = path.join(process.cwd(), "public", "Babu-P-Resume.pdf");
  const isDownload = request.nextUrl.searchParams.get("download") === "1";
  const disposition = isDownload ? "attachment" : "inline";

  try {
    const fileBuffer = await readFile(filePath);

    return new NextResponse(fileBuffer, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `${disposition}; filename="Babu-P-Resume.pdf"`,
        "Cache-Control": "public, max-age=3600",
      },
    });
  } catch {
    return NextResponse.json(
      { error: "Resume PDF not found." },
      { status: 404 }
    );
  }
}
