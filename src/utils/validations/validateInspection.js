const validateInspection = (req, res, next) => {
  const {
    companyName,
    autorizationNumber,
    fullname,
    companyAddress,
    identity,
    inspectionDate,
    inspectionTime,
    cellphone,
    email,
    form,
    inspectorSign1,
    inspectorSign2,
    ownerSign,
    days,
  } = req.body;
  if (!companyName)
    return res.status(400).json({ error: "Missing companyName" });
  if (!autorizationNumber)
    return res.status(400).json({ error: "Missing autorizationNumber" });
  if (!fullname) return res.status(400).json({ error: "Missing fullname" });
  if (!companyAddress)
    return res.status(400).json({ error: "Missing companyAddress" });
  if (!identity) return res.status(400).json({ error: "Missing identity" });
  if (!inspectionDate)
    return res.status(400).json({ error: "Missing inspectionDate" });
  if (!inspectionTime)
    return res.status(400).json({ error: "Missing inspectionTime" });
  if (!cellphone) return res.status(400).json({ error: "Missing cellphone" });
  if (!email) return res.status(400).json({ error: "Missing email" });
  if (!form) return res.status(400).json({ error: "Missing form" });
  if (!inspectorSign1)
    return res.status(400).json({ error: "Missing inspectorSign1" });
  if (!inspectorSign2)
    return res.status(400).json({ error: "Missing inspectorSign2" });
  if (!ownerSign) return res.status(400).json({ error: "Missing ownerSign" });
  if (!days) return res.status(400).json({ error: "Missing days" });
};

module.exports = { validateInspection };
