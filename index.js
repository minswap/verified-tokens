const Ajv = require("ajv");
const data = require("./tokens.json");

const CATEGORIES = [
  "DeFi",
  "RealFi",
  "GameFi",
  "Meme",
  "Bridge",
  "Metaverse",
  "Wallet",
  "NFT",
  "Oracle",
  "AI",
  "Launchpad",
  "DAO",
  "Other",
];

function main() {
  const ajv = new Ajv();

  const schema = {
    type: "object",
    patternProperties: {
      "^[\\w\\d]{56}$": {
        type: "object",
        properties: {
          project: { type: "string" },
          categories: {
            type: "array",
            items: {
              type: "string",
              enum: CATEGORIES,
            },
            minItems: 1,
            uniqueItems: true,
          },
          socialLinks: {
            type: "object",
            properties: {
              website: { type: "string" },
              discord: { type: "string" },
              telegram: { type: "string" },
              twitter: { type: "string" },
              coinMarketCap: { type: "string" },
              coinGecko: { type: "string" },
            },
            additionalProperties: false,
          },
        },
        required: ["project", "categories"],
        additionalProperties: false,
      },
    },
    additionalProperties: false,
  };

  const validate = ajv.compile(schema);
  const valid = validate(data);
  if (!valid) {
    throw Error(validate.errors[0].message);
  }
}

main();
