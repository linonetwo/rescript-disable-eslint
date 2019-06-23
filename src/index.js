export default config => {
  // find the eslint rule config
  const index = config.module.rules.findIndex(
    ruleObj =>
      Array.isArray(ruleObj.use) && ruleObj.use.length > 0 && typeof ruleObj.use[0].options.useEslintrc === 'boolean'
  );
  // remove it
  config.module.rules.splice(index, 1);
  return config;
};
