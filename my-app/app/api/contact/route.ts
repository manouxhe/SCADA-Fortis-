import mysql from "mysql2/promise";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, email, company, reason, message } = body;

    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    });
    await connection.execute(
      `
      INSERT INTO contacts
      (name, email, company, reason, message)
      VALUES (?, ?, ?, ?, ?)
      `,
      [name, email, company, reason, message],
    );

    await connection.end();

    return Response.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error(error);

    return Response.json({ success: false }, { status: 500 });
  }
}
