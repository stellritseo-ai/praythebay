// All ministry content lives here so it can be edited in one place.
// Every fact below comes from praythebay.org (checked Nov 2026).

const SQ = "https://images.squarespace-cdn.com/content/v1/5e72ba52644e185374f604aa/";

/** Squarespace CDN image at a given width. */
export const img = (path: string, w = 1500) => `${SQ}${path}?format=${w}w`;

export const photos = {
  worshipNight: "f7823383-acaa-443c-8fb5-3f3d954d3c58/20221104-_MG_0026.jpg",
  micBW: "1787443397806-IJQWYAIJ0MNLFYCI6T39/_MG_0036.jpg",
  embrace: "6a3cd6ab-7904-4b6f-b32b-cbc60bded19f/20220327-_MG_6058.jpg",
  sunsetPrayer: "f531c558-431c-4f70-9432-5bdb1115e6d2/20221112-20221112-_MG_1764.jpg",
  beachWalk: "f74d1d6f-ce3f-43b7-b3a0-7c18f5e53398/PartnerWithUsBanner.jpg",
  layingHands: "1659048910839-RCYM2X1DGPKQKVU3I26H/20220301-_MG_5323.jpg",
  worshipLeader: "1787444806607-JMHK7OZGR3CYADD46Z67/_MG_0183.jpg",
  prayerRoomDark: "1787444781589-OTQ1RTEPKHXN6WHPNJX2/IMG_1773079477205.jpg",
  prayerRoomWindow: "1787444940113-D4AA8AWJ58MBF7UFWJSS/IMG_1773079171856.jpg",
  outdoorPrayer: "6d69d980-a291-4327-b0d2-43624c5a81b6/20220710-_MG_9616.jpg",
  outdoorPrayer2: "d86cca7b-d151-4adf-86c3-b7359ff7de2d/20220710-_MG_9636.jpg",
  womenPrayer: "e9dc736b-dc16-4a1d-ade5-a67765cd1146/20220605-_MG_8245.jpg",
  studyChairs: "1787444828992-RPW8SIJEU9NEVXSU658U/IMG_1769021581430.jpg",
  brightRoom: "1787444817703-2FTNGIY5FORL6XYPKRD2/IMG_1768422749789.jpg",
  circle: "20182598-94f8-4518-9c30-25027c3569d2/IMG_1769628904406.jpg",
  friends: "1787443395201-802QGBRK4J6DZCBJDUP5/IMG_1774159603963.jpg",
  online: "51daa1af-def0-46bf-af35-ffe07aa04751/Online+3.jpg",
  podcast: "0301919a-6497-41eb-a829-ff5a968ff09b/20240125-_MG_7825.jpg",
  hall: "825417c3-9f83-4318-a68a-7ccf98733028/20220301-20220301-_MG_5255.jpg",
  stage: "1787443271357-SO0MWLZZSLA5S47RLAOM/IMG_1784692879879.jpg",
} as const;

export const org = {
  name: "Pray The Bay",
  legalName: "Pray The Bay Area",
  url: "https://praythebay.org",
  email: "info@praythebay.org",
  ein: "93-3285784",
  region: "San Francisco Bay Area, California",
  summary:
    "Pray The Bay is a unifying prayer and worship movement for and through the local Church of the San Francisco Bay Area.",
  instagram: "https://www.instagram.com/praythebay",
  youtube: "https://youtube.com/playlist?list=PLLkk1frSmBqMkThwUZH99rqvYNioUpwrc",
  spotify: "https://open.spotify.com/show/1FO9cKAT5g51iQ1JPtyetL",
  apple: "https://podcasts.apple.com/us/podcast/pray-the-bay-podcast/id1740176450",
  give: "https://donate.stripe.com/14k6op3mY28l6LS9AA",
  serveForm: "https://praythebay.typeform.com/ServeWithUs",
  onlinePrayer: "https://praythebay.org/online-prayer",
  inPersonPrayer: "https://praythebay.org/in-person-prayer",
  renaissanceTickets: "https://e.sparxo.com/Renaissance_Gathering",
  plantPrayerRegister: "https://forms.gle/tyhbxiREUBkg6g117",
  plantPrayerGroups: "https://plantprayer.churchcenter.com/groups",
  plantPrayerHowTo: "https://praythebay.org/how-to-plant-prayer",
  dwellingLinktree: "https://linktr.ee/dwellingplaceschool",
  dwellingEmail: "dwellingplaceschool@praythebay.org",
  shiningOneBook:
    "https://my.seedbed.com/product/the-shining-one-praying-with-the-prayer-leader-of-heaven/",
  shiningOneInstagram: "https://www.instagram.com/the_shining_one",
  shiningOneFaq: "https://praythebay.org/the-shining-one-faq",
  shiningOneGathering: "https://praythebay.org/gathering",
  seekWeekGuide: "https://praythebay.org/s/SEEK-WEEK-GUIDE.pdf",
  experienceChurch: "https://exp.church/",
  prayerMapEmbed: "https://www.google.com/maps/d/embed?mid=1qvHflVdFx73AlNeMwH-Qu7TR5NetaT4&ehbc=2E312F&noprof=1",
  prayerMapRegister: "https://praythebay.org/map#register",
};

export type NavGroup = { label: string; items: { label: string; to: string }[] };

export const nav: NavGroup[] = [
  {
    label: "About",
    items: [
      { label: "Who We Are", to: "/about" },
      { label: "Our Vision", to: "/vision" },
      { label: "Our Team", to: "/team" },
    ],
  },
  {
    label: "Gather",
    items: [
      { label: "Prayer Gatherings", to: "/pray-with-us" },
      { label: "Renaissance '27", to: "/renaissance-27" },
      { label: "SEEK WEEK 2026", to: "/seek-week-2026" },
      { label: "Dwelling Place School", to: "/dwelling-place" },
    ],
  },
  {
    label: "Get Involved",
    items: [
      { label: "Serve With Us", to: "/serve-with-us" },
      { label: "The Shining One", to: "/the-shining-one" },
      { label: "Building Praying Churches Cohort", to: "/praying-churches-cohort" },
    ],
  },
  {
    label: "Resources",
    items: [
      { label: "Resource Library", to: "/resources" },
      { label: "Podcast", to: "/podcast" },
      { label: "Plant Prayer", to: "/plant-prayer" },
      { label: "Prayer Map", to: "/prayer-map" },
    ],
  },
  {
    label: "Partner",
    items: [
      { label: "Community Partners", to: "/community-partners" },
      { label: "Movement Partners", to: "/movement-partners" },
      { label: "Sow for Awakening", to: "/give" },
      { label: "Missionaries", to: "/missionaries" },
    ],
  },
];

export const team = [
  {
    name: "Mark & Amanda McGovern",
    role: "Co-Founders",
    photo: "7df99f70-a9f3-45e9-af86-336939e21f17/IMG_0781.jpg",
    bio: "Mark and Amanda are passionate people of prayer. They are church planters that serve as Lead Pastors at Experience Church and pioneers of Pray The Bay. The McGoverns and their three children have seen God answer impossible prayers again and again and “have seen too much to not believe.” They are contending for a united praying church in revival that sends out laborers to bring in the great harvest.",
  },
  {
    name: "Thay & Bruno Freitas",
    role: "Co-Founders & Executive Directors",
    photo: "50cf1f7b-c195-4e40-be28-e0bdcd91dc82/29A9E3A1-F3E5-49A4-9D7F-819D78260625.png",
    bio: "Thay and Bruno burn for Jesus. Their Brazilian fire, boldness, and energy are infectious. They share a passion to raise up GenZ into the fullness of their calling and serve as Young Adults Pastors at Experience Church in San Francisco. Thay serves as Executive Director at Pray The Bay and leads the charge to unite and equip the Bay Area church for Revival, Renewal, and Awakening.",
  },
  {
    name: "Derik & Sarah Scott",
    role: "Equipping Team, Peninsula",
    photo: "db35711f-71ea-461b-956b-ead1a02823be/Screen+Shot+2026-08-19+at+9.20.01+PM.png",
    bio: "Pastors Derik and Sarah Scott are Bay Area natives and carry a deep burden and cry for revival through the local church. In 2016 God placed them in Redwood City at Rise City Church as Lead Pastors. Sarah is a prophetic worship leader; Derik loves to equip people to pray and leads Rise City in a monthly 24-hour prayer gathering.",
  },
  {
    name: "Matt & Kristen Gersonde",
    role: "Equipping Team, Monterey",
    photo: "f8c47969-8c83-4f21-8109-69a5ee63b264/603998490_18519126502064730_8826032083793479997_n.jpg",
    bio: "Matt and Kristen carry a beautiful hunger for more of God and a desire to see Monterey County united in prayer and worship. They lead Refuge Bible Church in Salinas. While attending the prayer gatherings at Asbury University, Matt received a word to “Go” as a commissioning to serve and lead the local church in becoming praying churches.",
  },
  {
    name: "Nikko & Hannah Santos",
    role: "Equipping Team, North Bay",
    photo: "5b171441-4679-4d48-97c6-cae66ecc6f12/Screen+Shot+2023-08-31+at+12.35.05+AM.png",
    bio: "The Santos are people of God’s presence. Nikko and Hannah serve as Lead Pastors of Home Church in Cordelia and have built incredible unity through friendships with pastors all over the North Bay region. As Bay Area natives their hearts burn for revival and a united church walking in intimacy with Jesus.",
  },
  {
    name: "Adam & Jo Peacocke",
    role: "Equipping Team, Santa Rosa",
    photo: "fc190971-5c12-4a91-9f0c-6333ee38c981/78817117_630465060825253_1487322766305656832_n.jpg",
    bio: "Adam is founder of FeatherVine, a ministry cultivating expressions of faith in the united church of Sonoma County, built on over 25 years of relationships with local churches. Adam and Jo serve with their four children at The Promise Center in Santa Rosa, and Adam carries first-hand knowledge of revival history across the Bay.",
  },
];

export const missionaries = [
  {
    name: "Honour Knudsen",
    photo: "47f75d0d-e13f-493d-963e-73e0f0495156/IMG_1788925725563.jpg",
    serving: "Marin, Sonoma, San Francisco",
    bio: [
      "Honour loves Jesus and is willing to follow him anywhere he leads. This proved true when she left her 10+ year career in Law Enforcement as a police officer at the Lord's leading.",
      "She caught the heart for prayer after attending the pioneer class of Dwelling Place School in 2025, when the Lord stirred her passion for prayer in her home area of Marin and Sonoma County.",
    ],
    links: {
      once: "https://donate.stripe.com/5kQ00k2p62F66319Dj14402",
      m30: "https://buy.stripe.com/cNi8wQ0gYa7ygHF8zf14404",
      m100: "https://buy.stripe.com/bJe7sM9RyenObnl6r714407",
    },
  },
  {
    name: "Mario Galvez",
    photo: "876ed5f5-7e8d-4600-9455-41077a7a97ee/IMG_1788925717980.jpg",
    serving: "San Francisco, Alameda, Solano, Santa Clara",
    bio: [
      "Mario has spent much of his life saying yes to God’s call to go and to pray.",
      "He served aboard a Christian ship ministry carrying Christian literature across Southeast Asia, South Asia, East Africa, and South Africa, and joined an onsite prayer team in Cambodia as part of the “Praying for the 10/40 Window” campaign.",
    ],
    links: {
      once: "https://donate.stripe.com/bJeaEY5BifrS631cPv14405",
      m30: "https://buy.stripe.com/9B66oI5Bi2F62QP9Dj14406",
      m100: "https://buy.stripe.com/28EdRa4xegvWbnldTz14408",
    },
  },
];

export type Resource = { title: string; category: string; href: string; thumb: string };

const D = "https://www.dropbox.com/scl/";
export const resources: Resource[] = [
  { title: "Plant Prayer Guide", category: "Guides", href: `${D}fi/9qb1rdr2nw3sk75obj7kg/PLANT-PRAYER-GUIDE.pdf?rlkey=bejiskk2r7pgw54i5x5waknkd&dl=0`, thumb: "1705775697525-0U88AL97DPR3NG3NRF9P/PLANT+PRAYER+GUIDE+TITLE.png" },
  { title: "Regional Prayer Maps", category: "Maps & Cards", href: `${D}fo/g1bfzgifxcy9saih16slj/h?rlkey=qzhme37vxem7td49ndvyrjoye&dl=0`, thumb: "1705801852603-OJX2QF6EV8W4EOP9UQ05/regionalprayer_station_maps.png" },
  { title: "SEEK WEEK Guide", category: "Guides", href: "https://praythebay.org/s/SEEK-WEEK-GUIDE.pdf", thumb: "1706658120570-VUTDP7MQVWEOJ0GVR2GU/SEEK+WEEK+ONLINE+GRAPHIC+.jpg" },
  { title: "Beatitudes Prayer Promptings", category: "Prayer Prompts", href: `${D}fi/q5a6xj3t8ir5k84ult7hn/PRAYER-PROMPTINGS.pdf?rlkey=it0o80yxrvvcpeb13lirh87i3&dl=0`, thumb: "1705775833571-FURWLM9DH353HYZ2LEY4/beautitudes.png" },
  { title: "Regional Prayer Cards", category: "Maps & Cards", href: `${D}fo/y8vve9cvjeyeu1xn3ulcq/h?rlkey=qzhme37vxem7td49ndvyrjoye&dl=0`, thumb: "1705801465566-4ID14AMF97JTLBXJ8TGO/regionalprayer_map.png" },
  { title: "Prayer Rhythms", category: "Guides", href: `${D}fi/q25l1wanyk2cgewfnkw8z/PTB-PRAYER-RHYTHMS.pdf?rlkey=5uymxz6pt0fabqwelec2vw0hj&dl=0`, thumb: "1705802044108-PR708FH96SDD6VHFKH1C/Prayer+Rhythms.png" },
  { title: "How to Pray for Your Kids", category: "Guides", href: `${D}fi/pih5ktt19al6etsrq4ml1/HOW-TO-PRAY-FOR-YOUR-KIDS-PRAYER-GUIDE.pdf?rlkey=w6wacyypa3ex2jcqhf9turitl&dl=0`, thumb: "1705810778264-LEDL3SUV45TGN7I9YRVD/howtoprayforkids_ptb.png" },
  { title: "Prayer for the Lost Guide", category: "Guides", href: `${D}fi/2toqjxw7qlsdiglii70o1/PRAY-FOR-THE-LOST-GUIDE-6.pdf?rlkey=fq6keqq37za12uwaanhfqcwtn&dl=0`, thumb: "1705810947241-B03N1MAU7WDVXZJS5Y57/prayforlost.png" },
  { title: "Fasting Guide", category: "Guides", href: `${D}fi/2ys6dxlcefzdmozo2en9v/FASTING-GUIDE-5.pdf?rlkey=ge1wore6q41qhfx7x5w20vp81&dl=0`, thumb: "1705811393653-EOEVGZ5RCUIXTLGLBSSE/fasting_guide.png" },
  { title: "All Night Prayer Guide", category: "Training", href: `${D}fi/ue97dd3jhxg0ia5xqq75n/PTB-ALL-NIGHT-PRAYER-BOOK-GUIDE.pdf?rlkey=cnlgsb6sh9ifovfubfrzz40x4&dl=0`, thumb: "1705811907516-1BPOM20FM29LC6S6ZMMG/allnight.png" },
  { title: "Plant Prayer Card", category: "Maps & Cards", href: `${D}fi/9j5odlzw8tfo8igc7t0i9/PLANT-PRAYER-CARD.pdf?rlkey=s4bk2sh9g8lde1gbi5qld7bna&dl=0`, thumb: "1705813071377-IRQEWM2A7YBM3M9N3SMJ/plant+prayer+card.png" },
  { title: "Prayer Room Guide", category: "Training", href: `${D}fi/6u4ufueboq1hs1y78ypge/PTB-PRAYER-GUIDE-PRAYER-ROOM-FORMAT.pdf?rlkey=di227gyjzt42q96q61ks4bkok&dl=0`, thumb: "1705812240477-J3A2HE6T9LJ0JL7ZKSB6/prayerguide.png" },
  { title: "One Day Leaders Guide", category: "Training", href: `${D}fi/iqkv6xqbxbpk0enme5x3j/ONE-DAY-LEADERS-GUIDE-3.pdf?rlkey=q43jyuz07vzugkc976820ab0w&dl=0`, thumb: "1705811706395-OGKV6WZM3HTQWRCKYUGO/oneday.png" },
  { title: "Unity Worship Night Training", category: "Training", href: `${D}fi/q1in2yfbi0t64hr1atmkw/PTB-WORSHIP-NIGHT-FORMAT.pdf?rlkey=wwo59nnbtqtz6trzvg23tuw4s&dl=0`, thumb: "1705813423400-EWWR7NOHDT8E5O3ICA4Y/unityworshipnight.png" },
  { title: "21 Days of Prayer Daily Devotionals", category: "Devotionals", href: `${D}fi/09vw07rnphuxo3usu0a8m/21-DAYS-OF-PRAYER.pdf?rlkey=sx11gajzovq764y25jis5c1lg&dl=0`, thumb: "1705878648976-HAF5NGIKPV229QZZ90FY/21daysofprayer.png" },
  { title: "6-Month Prayer Room Themes & Scriptures", category: "Devotionals", href: "https://praythebay.org/s/PRAYER-ROOM-THEMES-SCRIPTURES-2.pdf", thumb: "1706658889277-KY4XMPQ2YHSV95UT001L/6+MONTH+PRAYER+ROOM+THEMES+%26+SCRIPTURES.png" },
  { title: "Lessons to the Church from the Asbury Outpouring", category: "Training", href: "https://praythebay.org/s/Lessons-to-the-Church-from-the-Asbury-Outpouring-2023.pdf", thumb: "1707171316880-9YPZIMSHCF6J8FTIE6WA/6+MONTH+PRAYER+ROOM+THEMES+%26+SCRIPTURES+%281%29.png" },
];

export const events = {
  seekWeek: {
    title: "SEEK WEEK 2026",
    tagline: "Crying Out for the Lost",
    dates: "November 2–6, 2026",
    startDate: "2026-11-02",
    endDate: "2026-11-06",
    location: "Churches across the San Francisco Bay Area, plus online",
    summary:
      "A Bay-wide call to unite the Church in continuous prayer and worship, believing God for salvation, renewal, and awakening across every region of the Bay Area.",
  },
  renaissance: {
    title: "Renaissance '27",
    tagline: "6th Annual Prayer & Worship Gathering",
    dates: "February 12–13, 2027",
    startDate: "2027-02-12",
    endDate: "2027-02-13",
    location: "Rise City Church, Redwood City, CA",
    summary:
      "Churches from across the Bay Area gathered with voices for revival from around the U.S. for worship, prayer, and equipping.",
  },
};
