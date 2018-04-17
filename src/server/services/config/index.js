
class ConfigService {

  constructor() {
  }

  getVariable(variableName) {
    if (!variableName)
      return null;

    const name =
      variableName
        .toUpperCase()
        .replace(/[\s\.\-]/g, "_");

    return process.env[name];
  }

}

export default ConfigService;
