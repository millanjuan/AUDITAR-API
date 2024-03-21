const sgMail = require("@sendgrid/mail");
const ejs = require("ejs");
const fs = require("fs").promises;

const renderEJSFile = async (filePath, data) => {
  try {
    const ejsContent = await fs.readFile(filePath, "utf-8");
    return ejs.render(ejsContent, { name: data });
  } catch (error) {
    throw new Error(`Error loading or rendering EJS file: ${error.message}`);
  }
};

const welcomeEmail = async (apiKey, to) => {
  sgMail.setApiKey(apiKey);
  try {
    const html = await renderEJSFile(__dirname + "/templates/welcomeEmail.ejs");
    const msg = {
      to,
      from: "bienvenida@auditar.net.ar",
      subject: "Alta de cuenta - AUDITAR",
      html,
    };
    await sgMail.send(msg);
  } catch (error) {
    console.error(error);
  }
};

const inspectionEmail = async (apiKey, to, cellphone, userEmail, pdf) => {
  sgMail.setApiKey(apiKey);
  try {
    const html = await renderEJSFile(
      __dirname + "/templates/InspectionEmail.ejs",
      cellphone,
      userEmail
    );
    const msg = {
      to,
      from: "inspecciones@auditar.net.ar",
      subject: "Welcome to PREET",
      html,
      attachments: [
        {
          content: pdf,
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
