const joiValidateMiddleware = (schema, bodyType, objName) => {
  return (req, res, next) => {
    const { error } = schema.validate(req[bodyType][objName]);
    console.log("🚀 ~ file: index.js ~ line 4 ~ return ~ req[bodyType]", req[bodyType])
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