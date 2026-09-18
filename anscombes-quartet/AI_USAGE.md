# AI usage documentation

- **Student:** Mere Cui
- **Course:** Data Visualization, Fall 2026
- **Assignment:** Anscombe's Quartet
- **AI tool:** OpenAI Codex
- **Date:** September 18, 2026

## Prompt and requested assistance

I asked Codex to help complete the Anscombe's Quartet D3 tutorial exactly according to the instructor's supplied requirements and to explain what the assignment teaches. The supplied requirements called for an `anscombes-quartet` folder containing `index.html`, `script.js`, and `anscombe.csv`; loading D3 v7 and the CSV; converting `x` and `y` from strings to numbers; filtering Datasets I–IV; creating a reusable `drawScatterplot` function; drawing four separate 500 × 500 SVG scatter plots with the specified scales and axes; and completing the optional different-color extension by passing a color to the function.

## How AI assisted

Codex helped organize and comment the HTML and JavaScript, reproduce the instructor-provided CSV, add page styling and chart labels, implement the four required scatter plots, and add the optional color argument. I reviewed the files and remain responsible for understanding the code and the treatment of the data.

In a later revision, I asked Codex to make the page feel more personal while preserving every assignment requirement. Codex helped develop a light-blue blueprint-inspired visual style, subtle chart grid lines, responsive chart cards, and hover tooltips that display each point's x and y values. The required reusable function and the different-color extra-credit parameter were preserved.

I then requested a more polished and dreamlike direction. Codex helped refine the page with a soft blue, lavender, and pink aurora background; translucent glass-style cards; pastel data colors; and subtle point shadows. The visualization logic and assignment-specified scales remained unchanged.

I also requested a small fish swimming behind the visualization. Codex created the decorative fish entirely with CSS and placed it behind the chart cards so that it does not obscure the data. A reduced-motion fallback was included for accessibility.

## Sources

- Assignment instructions: Jia Zhang, *Data Visualization for Architecture, Urbanism, and the Humanities — Fall 2026*.
- Dataset: `anscombe.csv` from the instructor's `jjjiia/data_visualization_course` GitHub repository.
