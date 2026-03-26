const IS_DEV = process.env.APP_VARIANT === "development";
const IS_PREVIEW = process.env.APP_VARIANT === "preview";
const getUniqueIdentifier = () => {
  if (IS_DEV) {
    return "com.phatbormey.test.dev";
  }
  if (IS_PREVIEW) {
    return "com.phatbormey.test.preview";
  }
  return "com.phatbormey.test";
};
const getAppName = () => {
  if (IS_DEV) {
    return "Test (Dev)";
  }
  if (IS_PREVIEW) {
    return "Test (Preview)";
  }
  return "Test : I love u";
};
export default ({ config }) => ({
  ...config,
  name: getAppName(),
  ios: {
    ...config.ios,
    bundleIdentifier: getUniqueIdentifier(),
  },
  android: {
    ...config.android,
    package: getUniqueIdentifier(),
  },
});
