export const validateSchema = (schema) => (req, res, next) => {
  try {
    schema.parse(req.body);
    next();
  } catch (error) {
    return res.status(400).json({
      error: error.issues?.map((error) => error.message),
    });
  }
};
//error: error.errors?.map((error) => error.message),

export const validateSchemaTask = (schema) => (req, res, next) => {
  try {
    schema.parse(req.body);
    next();
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .json({ error: error.issues?.map((error) => error.message) });
  }
};
//error: error.issues?.map((error) => error.message),
