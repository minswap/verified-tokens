const Ajv = require("ajv");
const addFormats = require("ajv-formats");

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
  "Stablecoin",
  "Social",
  "Media",
  "Other",
];

function main() {
  const ajv = new Ajv();
  addFormats(ajv);

  const schema = {
    type: "object",
    patternProperties: {
      "^[0-9a-f]{56}$": {
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
              website: { type: "string", format: "uri" },
              discord: { type: "string", format: "uri" },
              telegram: { type: "string", format: "uri" },
              twitter: { type: "string", format: "uri" },
              coinMarketCap: { type: "string", format: "uri" },
              coinGecko: { type: "string", format: "uri" },
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
