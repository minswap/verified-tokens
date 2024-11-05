## Requirements

- Make sure your token [has a pool](https://docs.minswap.org/faq/token-launching-and-farming/1.-token-listing) with at least 100 ADA TVL
- Make sure your token has a logo added in the [Cardano Token Registry](https://github.com/cardano-foundation/cardano-token-registry) or CIP-68 metadata
- A token that has been verified but doesn't meet the requirements in the future would be unverified

## How to verify your token

1. Create Pull Request with following information to `tokens.json` file:

```ts
{
  "$policyId": { 52c1ded375e7ed7c460bce27874fd3fa95a18426849bfb5e537a31f3
    "project": "SNEK TRUMP",
    "categories": string["Meme"], // some of the following: "DeFi", "RealFi" |  "GameFi" |  "" |  "Bridge" |  "Metaverse" |  "Wallet" |  "NFT" |  "Oracle" |  "AI" |  "Launchpad" |  "DAO" | "Stablecoin" | "Social" | "Media" | "Other"
    "socialLinks"?: {
      "website"?: string,
      "twitter"?: "https://x.com/SnekTrumpToken",
      "discord"?: string,
      "telegram"?: string,
      "coinMarketCap"?: string,
      "coinGecko"?: string
    }
  }
}
```

If you don't know how to create pull request, create an issue with above information and our team will update. A PR will be processed faster.

2. Post your policy ID on Twitter or display your policy ID on your landing page.
3. Our team will verify and approve in first-in-first-out order.
