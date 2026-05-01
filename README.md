# Fraction Comparison — Invisible Tutor (MVP)

## Overview

This prototype demonstrates an MVP for a fraction comparison learning experience designed for high school students who have gaps in foundational math skills.

The core concept is the **Invisible Tutor**:
> A practice-first experience that feels like a simple drill, while quietly adapting to student mistakes and delivering targeted instruction at the moment it’s needed.

The goal is to balance:
- Simplicity and completion rate (business requirement)
- Strategy-based learning (learning science requirement)
- Emotional safety and confidence (user need)

---

## Problem

Many high school students struggle with fraction comparison — a skill typically taught in elementary school.

However, the challenge is not just academic:
- Students feel **shame** working on “basic” math
- They avoid help if it feels visible or remedial
- They often **don’t trust** whether practice is actually helping

This creates a gap where:
> Traditional drills repeat problems but don’t teach  
> Traditional lessons feel too explicit and stigmatizing  

---

## Solution: Invisible Tutor

This prototype implements a system that:

### 1. Feels like a drill
- Continuous question flow
- No onboarding or lesson mode
- Minimal UI, distraction-free

### 2. Teaches through mistakes
- Incorrect answers trigger **strategy-based hints**
- Feedback is immediate and contextual
- No harsh “wrong” signals

### 3. Uses visual learning
- Number line appears on mistakes
- Helps build intuition, not just rules

### 4. Adapts to student performance
- Tracks mistake types:
  - Same numerator
  - Same denominator
  - Benchmark (1/2)
  - Unlike fractions
- Prioritizes weak areas dynamically

### 5. Builds confidence through proof
- Accuracy % (progress signal)
- Streak counter (momentum)
- No gamification or rewards

---

## Key Design Principles

- **Low visibility risk**  
  Neutral UI avoids “childish” appearance

- **No mode switching**  
  Learning happens inline, not in separate lessons

- **Respect student identity**  
  Language avoids judgment (“Not quite” instead of “Wrong”)

- **Proof over motivation**  
  Progress is shown through improvement, not rewards

---

## Features Implemented

- Fraction comparison interaction (< or >)
- Adaptive question selection
- Strategy-based feedback
- Visual explanation (number line)
- Accuracy tracking
- Streak tracking

---

## How It Works

1. Student answers a fraction comparison
2. If correct:
   - Moves forward immediately
3. If incorrect:
   - Shows targeted strategy hint
   - Displays number line visualization
4. System tracks mistake type and adjusts future questions

---

## Tech Stack

- HTML
- CSS
- Vanilla JavaScript

(No frameworks used to keep the prototype lightweight and easy to run)

---

## How to Run

1. Download or clone the project
2. Open `index.html` in a browser

No installation required.

---

## What This Prototype Does NOT Include (By Design)

To stay aligned with MVP scope:
- No full diagnostic phase
- No timed mastery check
- No gamification (XP, leaderboard)
- No multi-session tracking

---

## Future Improvements

- More advanced adaptive difficulty
- Richer visual models (area models, fraction bars)
- Input-based answers (instead of buttons)
- Session-based progress tracking
- Subtle motivational systems

---

## Why This Approach

This design intentionally balances stakeholder needs:

- **Executive requirement** → simple, high-completion drill  
- **Product requirement** → strategy-based learning  
- **User need** → low shame, high confidence  

The Invisible Tutor achieves this by:
> Embedding teaching inside practice, without making it visible or disruptive

---

## Author

Sampath Reddy Eega
