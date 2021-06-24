const joiValidateMiddleware = (schema, bodyType) => {
  return (req, res, next) => {
    const { error } = schema.validate(req[bodyType]);
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