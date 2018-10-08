function objectIdFix(context) {
  context.result.data = context.result.data.map((result) => {
    result._id = result._id.toString();
    return result;
  });
}

module.exports = objectIdFix;