# Hush Your Money

A web-based solution for CashShuffle (and a path to CashFusion) integration into the Bitcoin.com mobile wallet.

Download the Bitcoin.com Dev Wallet and try it for yourself:
__https://ipfs.io/ipfs/QmTaAWcTJUw2QaoTLa6cM2ERLfnrtiVrHLPtoic21fFbTz/bitcoin-wallet-dev.apk__  
(works on ANY Android device)

This decentralized app is LIVE right now:  
__https://bchdevcon3.hushyourmoney.com__  
(open in the Bitcoin.com Dev Wallet)

Help bring CashFusion to your mobile wallet:    
__https://causes.cash/@bchplease/hush-your-money-7a1589216c59__  
(accepting pledges starting at $0.01)

## Foreword

After learning that the Bitcoin.com wallet offered a __[3rd-party app API called Link](https://developer.bitcoin.com/bitcoincom-link/docs/getting-started/)__; I immediately made the move to join the __[BCHDevCon](https://devcon.cash)__. I believed this would offer me an ideal opportunity to finally connect with the Bitcoin.com wallet developers.

I've been working on a CashFusion solution for mobile since January, when I released the __[Nito Cash](https://gitlab.com/bchplease/nito.cash)__ web wallet, then later the __[NitoJS App](https://app.nitojs.org)__. Unfortunately, as I'm not on Telegram, I found it difficult to garner the attention and support of the Electron Cash or Bitcoin.com wallet teams for supporting my research efforts.

BCHDevCon3 has changed that! I've directly connected with __[Corbin Fraser (@maplesyrupsuckr)](https://twitter.com/maplesyrupsuckr/status/1302296467025981447)__, the lead developer of the Bitcoin.com wallet, and now... __it's time for daddy to go to work.__ 💪

## Event Goals

Can't help but to be overly ambitious, so there are __THREE!__

### Goal 1: Establish a Bitcoin.com "working" relationship

As this was my motivation from the start; I value this as the top goal. Working directly with the team at Bitcoin.com would allow me the access & resources necessary to produce a CashFusion integration into their mobile wallet by end-of-year.

I strongly believe this would be the __greatest immediate boost for adoption__ (particularly amongst current crypto users) as the promise of anonymity is how Bitcoin was born and will surely be how it continues to thrive in the near future.

### Goal 2: Add a CashShuffle DApp to Discover

The Bitcoin.com wallet's __Discover__ tab offers in-app access to several 3rd-party services; some of which have direct wallet integration. __Bitcoin.com Hush__ will be the next integration released in Discover (at least if I have anything to say about it).

By offering Hush directly in-app, users are offered not only a better service experience, but the confidence in security that comes with a native integration.

### Goal 3: Build a privacy analyzer

![Blockchair screenshot](https://i.imgur.com/7I9ZMpP.png)

> Inspiration for this comes from Blockchair's __[Privacy-o-meter](https://blockchair.com/bitcoin/transaction/230460dc9daff1311f89048799f1ee05b26b05ec23083643f7c15669bc724467)__ as well as their __[excellent docs](https://blockchair.com/api/docs#link_M6)__.

Users will paste an __address__ or __transaction id__ into the analyzer and receive a __Privacy Score__ along with a detailed breakdown of the blockchain analysis data.

### Stretch Goal: Extend the Bitcoin.com Link API

There are currently 5 methods offered by the API: __`getAddress`__, __`sendAssets`__, __`payInvoice`__, __`createToken`__ and __`getWalletProviderStatus`__.

I would aim to add one new method called __`getAccount`__. This would specifically permit the application to call for the __Extended Public Key (xPub)__ of the wallet. With an xPub, we are able to query ALL addresses owned by the wallet, NOT only the "active" address.

__This would enable the application to:__

1. Automatically verify CashShuffle transaction success.
2. Provide automated wallet privacy analysis and alerts.
3. Provide custom address and transaction analysis.

_Due to the fact the Bitcoin.com mobile wallet is currently closed-source, this goal will be developed and tested using the __[Badger plugin for Chrome/Brave](https://badger.bitcoin.com/)__. Fortunately, the functionality should be nearly identical if the Bitcoin.com wallet developers should choose to extend it to their app as well._

### Questions & answers

1. __Q:__ Will this project allow me to use CashFusion from within the Bitcoin.com wallet?  
__A:__ There's a 100% chance of that NOT happening by the end of this hackathon. However, this project WILL advance the groundwork necessary to see that happen by year's end.

### Screenshots

![Mobile screeshots](https://i.imgur.com/M7MFpQ7.jpg)

### Presentation

[![LBRY Presentation](https://i.imgur.com/t3GizOe.jpg)](https://lbry.tv/@BCHPlease:1/BCHDevCon3-Hush-Your-Money-Presentation:7)

__https://lbry.tv/@BCHPlease:1/BCHDevCon3-Hush-Your-Money-Presentation:7__

### What's next?

1. Copy a fully-developed wallet (ie. Causes Cash) for a proper UX when shuffling and managing coins.

### Developer notes and feedback

1. Recommend allowing requests for the "current" address (w/o iterating account index) on the Bitcoin.com wallet. _NOTE: This is how it currently works on Badger._

2. Improve __"services"__ infrastructure to avoid messages like: `{"errors":["MongoError: Executor error during find command :: caused by :: operation exceeded time limit"]}`

3. On a scale of 1 to 10 (1 being low, 10 being high); what is the risk of using the Extended Public Key (xPub) to derive the Hush wallet private key?
