# RevROI MCP Server For Deals

## Overview

I'd like you to be a senior software engineer and architect. Your primary responsibility will be assisting a client to be able to build an OpenAPI spec that we will later be able to convert into an MCP server, model context protocol.

## Goals

1. Your first objective will be to look at this particular file and convert it into a fully compliant project requirement document that will be leveraged with engineering detail for task-level breakdown for engineering assignments.
2. Your second objective will be to construct a fully compliant OpenAPI specification in YAML format.
3. Your third objective is going to be to convert the OpenAPI specification into the necessary code in TypeScript to be able to convert it into an MCP server.

## Context

### API Endpoints

#### Giftcards Request

- Request: https://revroi.oaroulette.com/?action=gift_cards&hostname={retailer}
- Example: https://revroi.oaroulette.com/?action=gift_cards&hostname=kohls

#### Giftcards Response

```json
{
  "gift_cards": [
    {
      "favicon": "https://www.cardbear.com/img/gcstore/arbitrage.png",
      "rate": "12%",
      "title": "Arbitrage",
      "link": "https://www.cardbear.com/r.php?storeid=128&giftstore=arbitrage",
      "displayImage": false
    },
    {
      "favicon": "https://www.cardbear.com/img/gcstore/carddepot.png",
      "rate": "10%",
      "title": "Carddepot",
      "link": "https://www.cardbear.com/r.php?storeid=128&giftstore=carddepot",
      "displayImage": false
    },
    {
      "favicon": "https://www.cardbear.com/img/gcstore/cardcookie.png",
      "rate": "10%",
      "title": "Cardcookie",
      "link": "https://www.cardbear.com/r.php?storeid=128&giftstore=cardcookie",
      "displayImage": false
    },
    {
      "favicon": "https://www.cardbear.com/img/gcstore/giftcardoutlets.png",
      "rate": "6.5%",
      "title": "Giftcardoutlets",
      "link": "https://www.cardbear.com/r.php?storeid=128&giftstore=giftcardoutlets",
      "displayImage": false
    },
    {
      "favicon": "https://www.cardbear.com/img/gcstore/raise.png",
      "rate": "4.2%",
      "title": "GCX (Raise)",
      "link": "https://geta.raise.com/DLEE6839?ext_revroi=kohls",
      "displayImage": false
    },
    {
      "favicon": "https://www.cardbear.com/img/gcstore/giftcardsaving.png",
      "rate": "4%",
      "title": "Giftcardsaving",
      "link": "https://www.cardbear.com/r.php?storeid=128&giftstore=giftcardsaving",
      "displayImage": false
    },
    {
      "favicon": "https://www.cardbear.com/img/gcstore/cardcash.png",
      "rate": "3%",
      "title": "Cardcash",
      "link": "https://www.cardbear.com/r.php?storeid=128&giftstore=cardcash",
      "displayImage": false
    }
  ],
  "proxy": "jp.proxymesh.com:31280"
}
```

#### Cashback Request

- https://revroi.oaroulette.com/?action=cashback&hostname={retailer}
- Example: https://revroi.oaroulette.com/?action=cashback&hostname=kohls

#### Cashback Response

```json
{
  "cashback": [
    {
      "favicon": "https://www.cashbackmonitor.com/img/site_ico/hda.png",
      "title": "Hoopla Doopla",
      "link": "https://hoopladoopla.com?ref=mvQKkGNYXZBnxyz7V97ZJQA4Dr8a5wEpj0PRLebJ&ext_revroi=kohls",
      "rate": "4.5%"
    },
    {
      "favicon": "https://www.inboxdollars.com/favicon.ico",
      "title": "InboxDollars",
      "link": "https://www.cashbackmonitor.com/go-to/InboxDollars/kohls?asingadget=true",
      "rate": "4%"
    },
    {
      "favicon": "https://www.maxrebates.com/favicon.ico",
      "title": "MaxRebates",
      "link": "https://www.maxrebates.com/m/J9DKKS?ext_revroi=kohls",
      "rate": "3%"
    },
    {
      "favicon": "https://www.simplybestcoupons.com/favicon.ico",
      "title": "Simply Best Coupons",
      "link": "https://www.simplybestcoupons.com/Stores/Cashback/?refid=120861&ext_revroi=kohls",
      "rate": "3.00%"
    },
    {
      "favicon": "https://www.gocashback.com/favicon.ico",
      "title": "GoCashBack",
      "link": "https://www.gocashback.com/r/2113626?ext_revroi=kohls",
      "rate": "2.6%"
    },
    {
      "favicon": "https://go.fluzapp.com/Fluz-sm.png",
      "title": "Fluz",
      "link": "https://www.cashbackmonitor.com/go-to/Fluz/kohls?asingadget=true",
      "rate": "2.5% (25%*)"
    },
    {
      "favicon": "https://cartera-cdn.freetls.fastly.net/images/orgs/usaa/imgs/favicon/favicon.ico",
      "title": "USAA MemberShop",
      "link": "https://www.cashbackmonitor.com/go-to/USAA-MemberShop/kohls?asingadget=true",
      "rate": "2.5%"
    },
    {
      "favicon": "https://us.55haitao.com/favicon.ico",
      "title": "55Haitao",
      "link": "https://www.cashbackmonitor.com/go-to/55Haitao/kohls?asingadget=true",
      "rate": "2.4%"
    },
    {
      "favicon": "https://fatcoupon.com/icons/apple-icon-60x60.png",
      "title": "FatCoupon",
      "link": "https://www.cashbackmonitor.com/go-to/FatCoupon/kohls?asingadget=true",
      "rate": "2.4%"
    },
    {
      "favicon": "https://static.extrabux.com/images/favicon.ico",
      "title": "ExtraBux",
      "link": "https://www.extrabux.com/r/6612564cb2?ext_revroi=kohls",
      "rate": "2.2% (3%*)"
    },
    {
      "favicon": "https://static.rakuten.com/static/images/favicons-r/v1/favicon-16x16.png",
      "title": "Rakuten",
      "link": "https://www.rakuten.com/r/THEGEN171?eeid=28187&ext_revroi=kohls",
      "rate": "2%"
    },
    {
      "favicon": "https://www.topcashback.com/favicon.ico",
      "title": "Top Cashback",
      "link": "https://www.topcashback.com/ref/oahunt?ext_revroi=kohls",
      "rate": "2%"
    },
    {
      "favicon": "https://www.mrrebates.com/favicon.ico",
      "title": "Mr. Rebates",
      "link": "http://www.mrrebates.com?refid=3872004&ext_revroi=kohls",
      "rate": "2%"
    },
    {
      "favicon": "https://assets.rebatesme.cn/assets-1.5.104/images/common/favicon.ico",
      "title": "RebatesMe",
      "link": "https://www.rebatesme.com/r/k5slrz?ext_revroi=kohls",
      "rate": "2%"
    },
    {
      "favicon": "https://activejunky-cdn.s3.amazonaws.com/favicon.png",
      "title": "Active Junky",
      "link": "https://www.activejunky.com/invite/1935918?ext_revroi=kohls",
      "rate": "2%"
    },
    {
      "favicon": "https://www.sunshinerewards.com/favicon.ico",
      "title": "Sunshine Rewards",
      "link": "https://www.sunshinerewards.com/signup.php?r=46350&ext_revroi=kohls",
      "rate": "2%"
    },
    {
      "favicon": "https://dz7smbqkw02oe.cloudfront.net/homepage-v4/images/meta/price-icon-512.png",
      "title": "Price.com",
      "link": "https://share.price.com/ds2h9?ext_revroi=kohls",
      "rate": "2% ($15**)"
    },
    {
      "favicon": "https://www.goodshop.com/front-assets/images/favicon.ico",
      "title": "Goodshop",
      "link": "https://www.cashbackmonitor.com/go-to/Goodshop/kohls?asingadget=true",
      "rate": "1.5%"
    },
    {
      "favicon": "https://www.befrugal.com/favicon.ico",
      "title": "BeFrugal",
      "link": "https://www.befrugal.com/rs/TTMYNGF/?ext_revroi=kohls",
      "rate": "1.2% (7%*)"
    }
  ],
  "travel_points": [
    {
      "favicon": "https://www.united.com/favicon.ico",
      "title": "United Mileage Plus (ua cc)",
      "link": "https://www.cashbackmonitor.com/go-to/United-Mileage-Plus-(ua-cc)/kohls?asingadget=true",
      "rate": "2 mi./$"
    },
    {
      "favicon": "https://shopandearn.wyndhamrewards.com/images/WR_favicon_260x260.png",
      "title": "Wyndham Rewards Shopping",
      "link": "https://www.cashbackmonitor.com/go-to/Wyndham-Rewards-Shopping/kohls?asingadget=true",
      "rate": "2 pt./$"
    },
    {
      "favicon": "https://trueblueshopping.jetblue.com/favicon-16x16.png",
      "title": "JetBlue Shopping",
      "link": "https://www.cashbackmonitor.com/go-to/JetBlue-Shopping/kohls?asingadget=true",
      "rate": "2 pt./$"
    },
    {
      "favicon": "https://cartera-cdn.global.ssl.fastly.net/images/orgs/alaskaair/imgs/favicon/favicon.ico",
      "title": "Alaska Mileage Plan",
      "link": "https://www.cashbackmonitor.com/go-to/Alaska-Mileage-Plan/kohls?asingadget=true",
      "rate": "2 mi./$"
    },
    {
      "favicon": "https://www.aa.com/content/images/chrome/rebrand/favicon.png",
      "title": "American AAdvantage",
      "link": "https://www.cashbackmonitor.com/go-to/American-AAdvantage/kohls?asingadget=true",
      "rate": "2 mi./$"
    },
    {
      "favicon": "https://www.southwest.com/assets/images/favicon.ico",
      "title": "Southwest Rapid Rewards",
      "link": "https://www.cashbackmonitor.com/go-to/Southwest-Rapid-Rewards/kohls?asingadget=true",
      "rate": "2 pt./$"
    },
    {
      "favicon": "https://www.delta.com/etc/designs/delta/favicon.ico",
      "title": "Delta Sky Miles",
      "link": "https://www.cashbackmonitor.com/go-to/Delta-Sky-Miles/kohls?asingadget=true",
      "rate": "1.5 mi./$"
    },
    {
      "favicon": "https://earnonline.flyingblue.com/favicon.ico",
      "title": "Flying Blue Shopping (US)",
      "link": "https://www.cashbackmonitor.com/go-to/Flying-Blue-Shopping-(US)/kohls?asingadget=true",
      "rate": "1.3 mi./$"
    },
    {
      "favicon": "https://www.united.com/favicon.ico",
      "title": "United Mileage Plus (no ua cc)",
      "link": "https://www.cashbackmonitor.com/go-to/United-Mileage-Plus-(no-ua-cc)/kohls?asingadget=true",
      "rate": "1 mi./$"
    },
    {
      "favicon": "https://shopsaway.virginatlantic.com/favicon.ico",
      "title": "Virgin Atlantic Shops Away (US)",
      "link": "https://www.cashbackmonitor.com/go-to/Virgin-Atlantic-Shops-Away-(US)/kohls?asingadget=true",
      "rate": "1 pt./$"
    },
    {
      "favicon": "https://www.skywardsmilesmall.com/favicon.ico",
      "title": "Emirates Skywards (US)",
      "link": "https://www.cashbackmonitor.com/go-to/Emirates-Skywards-(US)/kohls?asingadget=true",
      "rate": "0.9 mi./$"
    }
  ],
  "credit_points": [
    {
      "favicon": "https://www.chase.com/etc/designs/chase-ux/favicon.ico",
      "title": "Chase UR (Ink Preferred)",
      "link": "https://www.cashbackmonitor.com/go-to/Chase-UR-(Ink-Preferred)/kohls?asingadget=true",
      "rate": "2 pt./$"
    },
    {
      "favicon": "https://www.chase.com/etc/designs/chase-ux/favicon.ico",
      "title": "Chase UR (Freedom)",
      "link": "https://www.cashbackmonitor.com/go-to/Chase-UR-(Freedom)/kohls?asingadget=true",
      "rate": "2 pt./$"
    },
    {
      "favicon": "https://www.chase.com/etc/designs/chase-ux/favicon.ico",
      "title": "Chase UR (Sapphire)",
      "link": "https://www.cashbackmonitor.com/go-to/Chase-UR-(Sapphire)/kohls?asingadget=true",
      "rate": "2 pt./$"
    },
    {
      "favicon": "https://cartera-cdn.freetls.fastly.net/images/orgs/barclaycard/imgs/favicon/favicon.ico",
      "title": "BarclayCard RewardsBoost",
      "link": "https://www.cashbackmonitor.com/go-to/BarclayCard-RewardsBoost/kohls?asingadget=true",
      "rate": "2 pt./$"
    }
  ],
  "logo": "https://www.cashbackmonitor.com//img/stores/kohls.jpg",
  "proxy": "au.proxymesh.com:31280"
}
```

## Objectives/Outcomes

Success looks like being able to take this existing file, converting it into a Markdown file that's fully rendered into a task-level breakdown of a project requirement spec.
