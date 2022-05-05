import nodemailer from 'nodemailer';

import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "5708f027d90688",
    pass: "7cfad6c0bf7df2"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: 'Equipe feedget <support@feedget.com>',
      to: 'Alexandro do Nascimento Rossi <alexandronrossi@hotmail.com>',
      subject,
      html: body
    });
  }

}