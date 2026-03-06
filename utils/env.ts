export const ENVIRONMENTS = {

  prod: {
    baseUrl: 'https://wyszukiwarkaregon.stat.gov.pl/appBIR/index.aspx'
  },

  staging: {
    baseUrl: 'https://wyszukiwarkaregon.stat.gov.pl/appBIR/index.aspx'
  }

};

const selectedEnv = process.env.TEST_ENV || 'prod';

export const ENV = ENVIRONMENTS[selectedEnv];