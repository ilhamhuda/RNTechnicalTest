const activeConfig = "dev";

const constants = {
  dev: {
    url: {
      api: "https://nextar.flip.id/",
      assets: "",
      origin: ""
    }
  },

  production: {
    url: {
      api: "",
      assets: "",
      origin: ""
    }
  }
};

const appConfig = constants[activeConfig];

export default appConfig;