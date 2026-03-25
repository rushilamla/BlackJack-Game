# BlackJack (Vanilla JS)

A simple BlackJack game built with plain **HTML + CSS + JavaScript**.

## Features

- **Start game**: deals two random cards.
- **Draw new card**: keeps drawing while you’re still in the round.
- **Restart**: resets the round state.
- **Card rules (current implementation)**:
  - Ace (A) = 11
  - Face cards (J/Q/K) = 10
  - Number cards (2–9) = their value

## How to run

### Option 1: Open the file directly

1. Open `index.html` in your browser (double click it).

### Option 2: Run a local server (recommended)

This avoids some browser restrictions and matches how web apps are usually run locally.

- **VS Code / Cursor**: install the **Live Server** extension, then “Go Live” from `index.html`.

Or with PowerShell (Python):

```bash
python -m http.server 5500
```

Then open `http://localhost:5500` in your browser.

## Project structure

- `index.html` — page layout and buttons
- `index.css` — styling (uses `table.png` as the background)
- `index.js` — game logic (random cards, score, win/lose rules)
- `table.png` — table background image

## Notes / limitations

- This is a simplified BlackJack (no dealer AI, no suits, and Ace is always 11).
- If you click **START GAME** multiple times without restarting, it will keep adding cards to the current round (because the current state isn’t cleared on start).
