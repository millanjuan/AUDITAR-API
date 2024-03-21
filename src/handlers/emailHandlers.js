const {
  welcomeEmail,
  inspectionEmail,
} = require("../controllers/emailControllers");

const welcomeEmailHandler = async (req, res) => {
  const { to } = req.body;
  console.log(to);
  try {
    await welcomeEmail(to);
    res
      .status(200)
      .send({ message: "Correo electrónico de bienvenida enviado con éxito" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .send({ error: "Error al enviar el correo electrónico de bienvenida." });
  }
};

const inspectionEmailHandler = async (req, res) => {
  const emailData = req.body;
  try {
    await inspectionEmail(emailData);
    res
      .status(201)
      .send({ message: "Correo electrónico de inspección enviado con éxito" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .send({ error: "Error al enviar el correo electrónico de inspección" });
  }
};

module.exports = {
  welcomeEmailHandler,
  inspectionEmailHandler,
};
