import { NextApiRequest, NextApiResponse } from "next/types";
import mail from "@sendgrid/mail";


mail.setApiKey('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');


export async function POST(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method === 'POST') {
      const body = JSON.parse(req.body) as { name: string; phone: string; email: string; message: string };

      const message = `
        Name: ${body.name}\r\n
        Phone: ${body.phone}\r\n
        Email: ${body.email}\r\n
        Message: ${body.message}
      `;

      await mail.send({
        to: 'furkanbeydemirr@gmail.com',
        from: 'furkan@beydemir.dev',
        subject: 'New Message!',
        text: message,
        html: message.replace(/\r\n/g, '<br>'),
      });

      res.status(200).json({ status: 'Ok' });
    }
  } catch (error) {
    console.error('E-posta gönderilirken bir hata oluştu:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
