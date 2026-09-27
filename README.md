# Khmer for Travelers Phrasebook

Simple Khmer phrases for travelers in Cambodia. Each phrase shows English, Khmer script and an easy pronunciation guide, with a big-text **Show** mode to hold up for a driver, vendor or waiter.

This is the **user-testing version**. It runs entirely in the browser as a single `index.html` file, with no server, build step or account.

## Features

- **92 phrase cards** across Basics, Family & people, Pronouns (I, you, he, she, we), Getting around, Shopping & money, Food & drink, Weather, Numbers and Emergencies
- **How are you feeling?** one card with 13 one-tap feelings (happy, sad, hungry, want to eat, not hungry, full, thirsty, tired, exhausted, sleepy, want to rest, want to relax, want to dance), which a local can also tap to answer
- **Family at a glance:** the "Family" card lists one-tap buttons for husband, wife, child/children, son, daughter, father, mother, sister, brother, older and younger brother and sister, p'oun, uncle, aunt, grandpa and grandma
- **Pets:** one card with Dog, Cat, Monkey, Bird and Fish buttons
- **Show mode:** large Khmer text, pronunciation and English on one screen
- **Tap-to-answer replies:** for questions like "How much?" or "Where is the toilet?", the local person taps an answer in Khmer and the traveler sees it in English (prices in riel or dollars, directions, yes/no, places)
- **Fill-in builders:** "Please take me to ___" (with one-tap Hotel, House, Restaurant, Cafe, Bar, Hospital and Airport buttons right on the phrase) and "Where is ___?" with destinations such as Angkor Wat, the Royal Palace, the airport and the hotel; "This is my ___" (in the I, you, he, she tab) with one-tap friend, boyfriend, girlfriend, husband, wife, child/children, son, daughter, uncle, aunt, grandpa and grandma, plus parents and siblings in the full list; "I am sick" with one-tap symptoms: pain, headache, stomachache, diarrhea, toothache, dizzy and fever
- **Search** in English, pronunciation or Khmer, plus **Saved** phrases kept on the device
- **Voice (where supported):** say a phrase in English to find it; hear phrases in Khmer if the device has a Khmer voice; experimental listening for a spoken Khmer reply

## Voice support

| Feature | Works in | Falls back to |
|---|---|---|
| Say a phrase in English | Chrome and Edge on Android and computers; Safari support varies | Typing in the search box |
| Play in Khmer | Devices with a Khmer text-to-speech voice installed | Showing the Khmer text |
| Listen to a Khmer reply (beta) | Chrome with an internet connection | Local person taps an answer |

The microphone works on the hosted site (for example GitHub Pages), not inside the claude.ai preview.

## Deploy to GitHub Pages

1. Create a public repository named `khmer-for-travelers-phrasebook`.
2. Upload `index.html`, `README.md` and `LICENSE` to the repository root.
3. Go to **Settings → Pages**, choose **Deploy from a branch**, `main`, `/ (root)`, and **Save**.
4. After a minute or two the site is live at `https://robertciceroson.github.io/khmer-for-travelers-phrasebook/`.

## Content notes

- Pronunciation guides are approximate, English-friendly spellings, not a formal romanization system.
- Khmer translations are pending review by native speakers before public launch.
- Men say *baat* and women say *chaa* for "yes".
- Khmer names siblings by age (*bong* = older, *p'oun* = younger), and *bong* is also a polite way to address someone slightly older, such as a driver or vendor.
- U.S. dollars are widely accepted in Cambodia, with riel used for small change.

## License

© 2026 Robert Son. All rights reserved. This code is not open source. See [LICENSE](LICENSE); permission requests go to rson226@gmail.com.

## Author

Robert Son · [github.com/robertciceroson](https://github.com/robertciceroson)
