const sgMail = require("@sendgrid/mail");
const ejs = require("ejs");
const fs = require("fs").promises;
const { SENDGRID_API_KEY } = process.env;

const renderEJSFile = async (filePath, data) => {
  try {
    const ejsContent = await fs.readFile(filePath, "utf-8");
    return ejs.render(ejsContent, { name: data });
  } catch (error) {
    throw new Error(`Error loading or rendering EJS file: ${error.message}`);
  }
};

const renderEJSFile2 = async (filePath, data) => {
  try {
    const ejsContent = await fs.readFile(filePath, "utf-8");
    return ejs.render(ejsContent, data);
  } catch (error) {
    throw new Error(`Error loading or rendering EJS file: ${error.message}`);
  }
};

const welcomeEmail = async (email) => {
  sgMail.setApiKey(SENDGRID_API_KEY);
  try {
    const html = await renderEJSFile(
      __dirname + "/../utils/emails/templates/welcomeEmail.ejs"
    );
    const msg = {
      to: email,
      from: "inspecciones@auditar.net.ar",
      subject: "Alta de cuenta - AUDITAR",
      html,
    };
    await sgMail.send(msg);
  } catch (error) {
    console.error(error);
  }
};

const inspectionEmail = async (emailData) => {
  sgMail.setApiKey(SENDGRID_API_KEY);
  const { ownerEmail, pdf } = emailData;
  try {
    const html = await renderEJSFile2(
      __dirname + "/../utils/emails/templates/inspectionEmail.ejs",
      emailData
    );

    // Convertir la cadena base64 a un Buffer
    const attachmentContent = Buffer.from(pdf, "base64");

    const msg = {
      to: ownerEmail,
      from: "inspecciones@auditar.net.ar",
      subject: "Inspección de comercio",
      html,
      attachments: [
        {
          content: attachmentContent.toString("base64"),
          filename: "informe.pdf",
          type: "application/pdf",
          disposition: "attachment",
        },
      ],
    };
    await sgMail.send(msg);
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  welcomeEmail,
  inspectionEmail,
};
