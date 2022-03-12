import "dotenv/config";

export default ({ config }) => {
  return {
    ...config,
    extra: {
      TRN_API_KEY: process.env.TRN_API_KEY,
    },
  };
};
