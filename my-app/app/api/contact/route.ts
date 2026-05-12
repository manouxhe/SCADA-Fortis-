import { NextResponse } from "next/server";
import mysql from "mysql2/promise";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    });

    await connection.execute(
      `INSERT INTO contacts (name, email, company, reason, message)
       VALUES (?, ?, ?, ?, ?)`,
      [data.name, data.email, data.company, data.reason, data.message],
    );

    await connection.end();

    return NextResponse.json({
      success: true,
      message: "Contact request saved successfully.",
    });
  } catch (error) {
    console.error("Database error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Could not save contact request.",
      },
      { status: 500 },
    );
  }
}
