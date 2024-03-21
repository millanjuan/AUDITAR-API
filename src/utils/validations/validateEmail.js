const validateWelcomeEmail = (req, res, next) => {
  const to = req.body;
  if (!to) res.status(400).json({ error: "Missing Email." });
  next();
};

const validateInspectionEmail = (req, res, next) => {
  const { clientEmail, cellphone, ownerEmail, pdf } = req.body;
  if (!clientEmail) res.status(200).json({ error: "Missing client email." });
  if (!cellphone) res.status(200).json({ error: "Missing cellphone." });
  if (!ownerEmail) res.status(200).json({ error: "Missing owner email." });
  if (!pdf) res.status(200).json({ error: "Missing pdf" });
  next();
};

module.exports = { validateWelcomeEmail, validateInspectionEmail };
