const joiValidateMiddleware = (schema, bodyType, objName) => {
  return (req, res, next) => {
    if (!req?.[bodyType]?.[objName]) {
      return res.status(400).json({ error: { details: 'invalid body' } });
    }
    const { error } = schema.validate(req[bodyType][objName]);
    if (error) {
      const { details } = error;
      const message = details.map((i) => i.message).join(',');
      console.log('error', message);
      return res.status(400).json({ error: message });
    }
    next();
  };
};

module.exports = { joiValidateMiddleware };