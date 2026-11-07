/* =========================================================
   SKILL CHECK 009 — INLINE / ALIGN
   Vanilla JavaScript quiz engine
   ========================================================= */

/* =========================================================
   01. DOM ELEMENTS
   ========================================================= */

const $ = (selector) => document.querySelector(selector);

const intro = $("#intro");
const quiz = $("#quiz");
const result = $("#result");

const startBtn = $("#start");
const exitBtn = $("#exit");
const nextBtn = $("#next");
const retryBtn = $("#retry");
const reviewBtn = $("#reviewBtn");

const numberEl = $("#number");
const barEl = $("#bar");
const kindEl = $("#kind");
const answeredEl = $("#answered");

const questionEl = $("#question");
const sampleEl = $("#sample");
const hintEl = $("#hint");
const optionsEl = $("#options");

const feedbackEl = $("#feedback");
const feedbackIcon = $("#feedbackIcon");
const feedbackTitle = $("#feedbackTitle");
const feedbackSubtitle = $("#feedbackSubtitle");
const feedbackExplanation = $("#feedbackExplanation");
const feedbackCode = $("#feedbackCode");
const feedbackTip = $("#feedbackTip");

const ringEl = $("#ring");
const percentEl = $("#percent");
const resultTitleEl = $("#resultTitle");
const messageEl = $("#message");
const correctEl = $("#correct");
const timeEl = $("#time");
const bestEl = $("#best");

const reviewEl = $("#review");

/* =========================================================
   02. QUIZ SETTINGS
   ========================================================= */

const TEST_ID = "009";
const TEST_TITLE = "Inline / Align";

const STORAGE_KEY = "freetimezp:roadmap:skill-check-results:v1";

const TOTAL_QUESTIONS = 20;

/* =========================================================
   03. QUESTION DATABASE

   type: "single" or "multiple"

   Every question contains:
   - question
   - code example
   - hint
   - answer options
   - explanation
   - practical example
   - deeper learning tip
   ========================================================= */

const questions = [
    {
        id: 1,
        type: "single",
        question: "What is the main characteristic of an inline element?",
        code: `<span>Hello</span>
<span>World</span>`,
        hint: "Think about how text normally flows inside a paragraph.",
        options: [
            {
                id: "a",
                text: "It starts on a new line every time.",
                correct: false,
            },
            {
                id: "b",
                text: "It flows within the surrounding text.",
                correct: true,
            },
            {
                id: "c",
                text: "It always takes the full width of its parent.",
                correct: false,
            },
            {
                id: "d",
                text: "It automatically becomes a flex container.",
                correct: false,
            },
        ],
        explanation:
            "Inline elements participate in the surrounding line of text. They normally sit next to other inline content instead of starting on a new line.",
        example: `<p>
  This is <strong>important</strong> text
  inside a paragraph.
</p>`,
        tip: "Common inline elements include span, a, strong, em and small. Their default display behavior is different from block elements such as div and p.",
    },

    {
        id: 2,
        type: "single",
        question:
            "Which CSS property controls the vertical alignment of an inline element?",
        code: `.icon {
    /* Which property belongs here? */
}`,
        hint: "It is often used to align small icons with text.",
        options: [
            { id: "a", text: "align-items", correct: false },
            { id: "b", text: "justify-content", correct: false },
            { id: "c", text: "vertical-align", correct: true },
            { id: "d", text: "flex-direction", correct: false },
        ],
        explanation:
            "The vertical-align property controls how an inline-level element aligns relative to the surrounding text line. It can also be used with table-cell elements.",
        example: `.icon {
    vertical-align: middle;
}`,
        tip: "vertical-align does not generally align flex items. When an element is a flex item, use align-items on its flex container instead.",
    },

    {
        id: 3,
        type: "multiple",
        question: "Which of these are valid values for vertical-align?",
        code: `.icon {
    vertical-align: middle;
}`,
        hint: "Select all values that CSS supports.",
        options: [
            { id: "a", text: "baseline", correct: true },
            { id: "b", text: "middle", correct: true },
            { id: "c", text: "top", correct: true },
            { id: "d", text: "center", correct: false },
            { id: "e", text: "bottom", correct: true },
        ],
        explanation:
            "baseline, middle, top and bottom are valid vertical-align values. There is no standard center value for this property.",
        example: `.icon {
    vertical-align: middle;
}

.image {
    vertical-align: top;
}`,
        tip: "You can also use length and percentage values, such as 3px or 50%, to adjust an inline element relative to the baseline.",
    },

    {
        id: 4,
        type: "single",
        question: "What happens when you apply display: flex to an element?",
        code: `.container {
    display: flex;
}`,
        hint: "Think about what happens to the container's direct children.",
        options: [
            {
                id: "a",
                text: "The container becomes a flex container.",
                correct: true,
            },
            {
                id: "b",
                text: "All descendants become inline elements.",
                correct: false,
            },
            {
                id: "c",
                text: "The container disappears from the layout.",
                correct: false,
            },
            {
                id: "d",
                text: "Every child automatically becomes position: absolute.",
                correct: false,
            },
        ],
        explanation:
            "display: flex creates a flex formatting context. The element becomes a flex container, and its direct children become flex items.",
        example: `.container {
    display: flex;
    gap: 12px;
}`,
        tip: "Flexbox is especially useful for one-dimensional layouts: arranging items in a row or a column.",
    },

    {
        id: 5,
        type: "single",
        question: "In a flex row, which axis does align-items control?",
        code: `.container {
    display: flex;
    flex-direction: row;
    align-items: center;
}`,
        hint: "A row runs horizontally. What is the perpendicular direction?",
        options: [
            { id: "a", text: "The horizontal main axis", correct: false },
            { id: "b", text: "The vertical cross axis", correct: true },
            { id: "c", text: "The browser viewport axis", correct: false },
            { id: "d", text: "Both axes at the same time", correct: false },
        ],
        explanation:
            "With flex-direction: row, the main axis is horizontal and the cross axis is vertical. align-items aligns flex items along the cross axis.",
        example: `.container {
    display: flex;
    align-items: center;
}`,
        tip: "If you change flex-direction to column, the cross axis becomes horizontal. The meaning of the axes depends on flex-direction.",
    },

    {
        id: 6,
        type: "single",
        question: "Which property aligns flex items along the main axis?",
        code: `.container {
    display: flex;
    justify-content: space-between;
}`,
        hint: "It works together with align-items.",
        options: [
            { id: "a", text: "vertical-align", correct: false },
            { id: "b", text: "align-content", correct: false },
            { id: "c", text: "justify-content", correct: true },
            { id: "d", text: "text-align", correct: false },
        ],
        explanation:
            "justify-content distributes flex items along the main axis. In a row layout, this is normally the horizontal direction.",
        example: `.toolbar {
    display: flex;
    justify-content: space-between;
}`,
        tip: "Remember the distinction: justify-content controls the main axis, while align-items controls the cross axis.",
    },

    {
        id: 7,
        type: "multiple",
        question:
            "Which CSS properties are commonly used to align and space items in a flex container?",
        code: `.toolbar {
    display: flex;
    /* Add layout properties */
}`,
        hint: "Select the properties that belong to flexbox layout.",
        options: [
            { id: "a", text: "align-items", correct: true },
            { id: "b", text: "justify-content", correct: true },
            { id: "c", text: "gap", correct: true },
            { id: "d", text: "vertical-align", correct: false },
            { id: "e", text: "flex-direction", correct: true },
        ],
        explanation:
            "align-items, justify-content, gap and flex-direction are all useful flexbox properties. vertical-align is not the general alignment property for flex items.",
        example: `.toolbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
}`,
        tip: "A good flexbox layout often needs only a few properties. Start with display, direction, alignment and gap before adding complicated positioning.",
    },

    {
        id: 8,
        type: "single",
        question: "What does the gap property do?",
        code: `.items {
    display: flex;
    gap: 16px;
}`,
        hint: "Look at the empty space between neighboring items.",
        options: [
            {
                id: "a",
                text: "Adds space between flex or grid items.",
                correct: true,
            },
            { id: "b", text: "Adds space inside every item.", correct: false },
            {
                id: "c",
                text: "Changes the height of the container.",
                correct: false,
            },
            { id: "d", text: "Moves all items to the right.", correct: false },
        ],
        explanation:
            "gap creates spacing between rows and columns of items in flexbox and grid layouts. It does not add padding inside the items.",
        example: `.list {
    display: flex;
    gap: 20px;
}`,
        tip: "Use row-gap and column-gap when you need different spacing in each direction. gap is usually cleaner than adding margins to every child.",
    },

    {
        id: 9,
        type: "single",
        question: "What is the default value of flex-shrink?",
        code: `.item {
    /* default flex-shrink value */
}`,
        hint: "Flex items are allowed to shrink by default when space is limited.",
        options: [
            { id: "a", text: "0", correct: false },
            { id: "b", text: "1", correct: true },
            { id: "c", text: "10", correct: false },
            { id: "d", text: "auto", correct: false },
        ],
        explanation:
            "The initial value of flex-shrink is 1. This means a flex item can shrink when the container does not have enough space.",
        example: `.item {
    flex-shrink: 1;
}`,
        tip: "If an icon or badge must keep its width, use flex-shrink: 0 on that item.",
    },

    {
        id: 10,
        type: "single",
        question: "How can you prevent a flex item from shrinking?",
        code: `.icon {
    /* Keep the icon at its intended size */
}`,
        hint: "You need to disable the shrinking behavior.",
        options: [
            { id: "a", text: "flex-shrink: 0", correct: true },
            { id: "b", text: "flex-grow: 0", correct: false },
            { id: "c", text: "align-items: none", correct: false },
            { id: "d", text: "gap: 0", correct: false },
        ],
        explanation:
            "flex-shrink: 0 prevents the flex item from shrinking when the available space becomes smaller.",
        example: `.icon {
    width: 40px;
    flex-shrink: 0;
}`,
        tip: "This is particularly useful for icons, avatars and small status badges next to long text.",
    },

    {
        id: 11,
        type: "multiple",
        question:
            "Which techniques can help a flex layout handle narrow screens?",
        code: `.container {
    display: flex;
    /* Make the layout responsive */
}`,
        hint: "Think about wrapping and allowing flexible children to shrink.",
        options: [
            { id: "a", text: "flex-wrap: wrap", correct: true },
            {
                id: "b",
                text: "min-width: 0 on a flexible child",
                correct: true,
            },
            { id: "c", text: "flex-shrink: 0 on every child", correct: false },
            { id: "d", text: "Responsive media queries", correct: true },
            {
                id: "e",
                text: "Giving every item a fixed width of 1000px",
                correct: false,
            },
        ],
        explanation:
            "flex-wrap allows items to move onto additional lines. min-width: 0 can let a flex child shrink below its min-content size, and media queries can adapt the layout to smaller screens.",
        example: `.container {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
}

.text {
    min-width: 0;
}`,
        tip: "A common responsive pattern is to combine flex-wrap with flexible widths. Avoid forcing every child to keep a large fixed width.",
    },

    {
        id: 12,
        type: "single",
        question: "What does inline-flex do?",
        code: `.label {
    display: inline-flex;
    align-items: center;
}`,
        hint: "It combines inline behavior with an internal flex layout.",
        options: [
            {
                id: "a",
                text: "Makes the element a block-level flex container.",
                correct: false,
            },
            {
                id: "b",
                text: "Makes the element behave inline outside and flex inside.",
                correct: true,
            },
            {
                id: "c",
                text: "Makes all children absolutely positioned.",
                correct: false,
            },
            {
                id: "d",
                text: "Turns the element into an inline image.",
                correct: false,
            },
        ],
        explanation:
            "inline-flex makes the element participate in inline flow while its own children are laid out using flexbox.",
        example: `.badge {
    display: inline-flex;
    align-items: center;
    gap: 6px;
}`,
        tip: "inline-flex is ideal for compact UI elements such as labels, buttons, tags and icon-text combinations.",
    },

    {
        id: 13,
        type: "single",
        question: "Why might you use min-width: 0 on a flex child?",
        code: `.content {
    min-width: 0;
}`,
        hint: "It is often used when long text refuses to fit inside a flex row.",
        options: [
            {
                id: "a",
                text: "To allow the item to shrink below its min-content size.",
                correct: true,
            },
            { id: "b", text: "To make the item invisible.", correct: false },
            { id: "c", text: "To prevent all text wrapping.", correct: false },
            {
                id: "d",
                text: "To force the item to become a grid.",
                correct: false,
            },
        ],
        explanation:
            "Flex items have an automatic minimum size that can prevent them from shrinking as expected. Setting min-width: 0 allows the item to become narrower than its min-content width.",
        example: `.content {
    flex: 1;
    min-width: 0;
}`,
        tip: "If long text overflows a flex row, inspect the flex child's min-width before reaching for absolute positioning.",
    },

    {
        id: 14,
        type: "multiple",
        question: "Which statements about SVG icons are correct?",
        code: `<svg viewBox="0 0 24 24">
    <path d="..." />
</svg>`,
        hint: "Think about scalable dimensions and accessibility.",
        options: [
            {
                id: "a",
                text: "The viewBox defines the SVG coordinate system.",
                correct: true,
            },
            {
                id: "b",
                text: "SVG can scale without becoming pixelated.",
                correct: true,
            },
            {
                id: "c",
                text: 'Decorative icons can use aria-hidden="true".',
                correct: true,
            },
            {
                id: "d",
                text: "Every SVG must have a fixed width of 24px.",
                correct: false,
            },
            {
                id: "e",
                text: "A meaningful icon may need an accessible name.",
                correct: true,
            },
        ],
        explanation:
            "SVG uses vector graphics and a viewBox to define its internal coordinate system. Decorative icons can be hidden from assistive technology, while meaningful icons need an accessible name or text alternative.",
        example: `<svg
    viewBox="0 0 24 24"
    aria-hidden="true"
>
    <!-- decorative icon -->
</svg>`,
        tip: "If an icon communicates information, don't rely on its shape alone. Provide an accessible label or accompanying text.",
    },

    {
        id: 15,
        type: "single",
        question: "How should you mark an icon that is purely decorative?",
        code: `<svg
    viewBox="0 0 24 24"
    ...
>
</svg>`,
        hint: "Screen readers should not announce an icon that adds no information.",
        options: [
            { id: "a", text: 'role="button"', correct: false },
            { id: "b", text: 'aria-hidden="true"', correct: true },
            { id: "c", text: 'tabindex="1"', correct: false },
            { id: "d", text: 'alt="icon"', correct: false },
        ],
        explanation:
            'aria-hidden="true" removes decorative SVG content from the accessibility tree, preventing unnecessary announcements.',
        example: `<svg
    aria-hidden="true"
    viewBox="0 0 24 24"
>
    <!-- decorative icon -->
</svg>`,
        tip: "For a meaningful icon-only button, give the button an accessible name, for example with aria-label. Do not hide the only information from screen readers.",
    },

    {
        id: 16,
        type: "single",
        question:
            "Which layout is best suited to keeping an icon and its text vertically aligned?",
        code: `.message {
    display: flex;
    align-items: center;
    gap: 12px;
}`,
        hint: "Choose a layout that aligns its direct children along the cross axis.",
        options: [
            {
                id: "a",
                text: "Flexbox with align-items: center",
                correct: true,
            },
            { id: "b", text: "Only text-align: center", correct: false },
            {
                id: "c",
                text: "position: absolute on every child",
                correct: false,
            },
            { id: "d", text: "Only vertical-align: top", correct: false },
        ],
        explanation:
            "Flexbox makes the icon and text direct flex items. align-items: center aligns them along the cross axis, which is vertical in a row layout.",
        example: `.message {
    display: flex;
    align-items: center;
    gap: 12px;
}`,
        tip: "Use gap to control the distance between the icon and text. This is more predictable than adding a margin to each child.",
    },

    {
        id: 17,
        type: "multiple",
        question:
            "Which properties are useful for a notification with an icon, text and a badge?",
        code: `.notification {
    display: flex;
}`,
        hint: "Consider alignment, spacing, text overflow and icon sizing.",
        options: [
            { id: "a", text: "align-items: center", correct: true },
            { id: "b", text: "gap: 12px", correct: true },
            { id: "c", text: "flex-shrink: 0 on the icon", correct: true },
            { id: "d", text: "min-width: 0 on the text area", correct: true },
            {
                id: "e",
                text: "position: absolute on every element",
                correct: false,
            },
        ],
        explanation:
            "A good notification layout aligns its children, uses gap for spacing, protects the icon from shrinking and lets the text area shrink when needed.",
        example: `.notification {
    display: flex;
    align-items: center;
    gap: 12px;
}

.notification__icon {
    flex-shrink: 0;
}

.notification__text {
    flex: 1;
    min-width: 0;
}`,
        tip: "When a notification has a long message, add overflow handling such as text-overflow: ellipsis if the design requires a single-line message.",
    },

    {
        id: 18,
        type: "single",
        question: "What is the purpose of flex-wrap: wrap?",
        code: `.container {
    display: flex;
    flex-wrap: wrap;
}`,
        hint: "Imagine the items no longer fit on one line.",
        options: [
            {
                id: "a",
                text: "It allows flex items to move onto additional lines.",
                correct: true,
            },
            { id: "b", text: "It rotates all flex items.", correct: false },
            {
                id: "c",
                text: "It forces every item to become full width.",
                correct: false,
            },
            { id: "d", text: "It hides overflowing items.", correct: false },
        ],
        explanation:
            "flex-wrap: wrap allows flex items to wrap onto multiple lines when there is not enough room on the current line.",
        example: `.tags {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
}`,
        tip: "Wrapping is useful for tag lists, navigation groups and responsive card layouts. The default flex-wrap value is nowrap.",
    },

    {
        id: 19,
        type: "single",
        question:
            "What is the difference between vertical-align and align-items?",
        code: `.icon {
    vertical-align: middle;
}

.row {
    display: flex;
    align-items: center;
}`,
        hint: "One is for inline-level alignment; the other is for flex and grid alignment.",
        options: [
            {
                id: "a",
                text: "They always do exactly the same thing.",
                correct: false,
            },
            {
                id: "b",
                text: "vertical-align works for inline-level elements; align-items aligns items in flex or grid containers.",
                correct: true,
            },
            {
                id: "c",
                text: "align-items only works on images.",
                correct: false,
            },
            {
                id: "d",
                text: "vertical-align controls the main axis of flexbox.",
                correct: false,
            },
        ],
        explanation:
            "vertical-align is used with inline-level and table-cell elements. align-items controls alignment of items inside flex and grid containers.",
        example: `/* Inline alignment */
.icon {
    vertical-align: middle;
}

/* Flex alignment */
.row {
    display: flex;
    align-items: center;
}`,
        tip: "Choose the property based on the layout context. If the parent is a flex container, align-items is usually the right tool.",
    },

    {
        id: 20,
        type: "multiple",
        question:
            "Build a responsive notification row. Which rules are good choices?",
        code: `.notification {
    /* Complete the layout */
}`,
        hint: "You need alignment, spacing, a protected icon and flexible text.",
        options: [
            { id: "a", text: "display: flex", correct: true },
            { id: "b", text: "align-items: center", correct: true },
            { id: "c", text: "gap: 12px", correct: true },
            { id: "d", text: "flex-shrink: 0 on the icon", correct: true },
            { id: "e", text: "min-width: 0 on the text area", correct: true },
            {
                id: "f",
                text: "white-space: nowrap on every element",
                correct: false,
            },
        ],
        explanation:
            "A robust notification uses flexbox for layout, align-items for vertical alignment, gap for spacing, flex-shrink: 0 for the icon and min-width: 0 for the text area.",
        example: `.notification {
    display: flex;
    align-items: center;
    gap: 12px;
}

.notification__icon {
    flex-shrink: 0;
}

.notification__content {
    flex: 1;
    min-width: 0;
}`,
        tip: "Test your layout with very long text and a narrow screen. Responsive design is not complete until the layout handles real content gracefully.",
    },
];

/* =========================================================
   04. QUIZ STATE
   ========================================================= */

let quizQuestions = [];
let currentIndex = 0;

let selectedAnswers = [];
let checkedAnswers = [];

let score = 0;
let answeredCount = 0;

let isChecked = false;
let startTime = 0;
let elapsedSeconds = 0;

let savedRecord = null;

/* =========================================================
   05. HELPER FUNCTIONS
   ========================================================= */

// Fisher-Yates shuffle.
// Returns a new array without changing the original.

function shuffleArray(array) {
    const result = [...array];

    for (let i = result.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));

        [result[i], result[j]] = [result[j], result[i]];
    }

    return result;
}

// Format seconds as 00:00.

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    return `${minutes}:${String(remainingSeconds).padStart(2, "0")}`;
}

// Compare two arrays regardless of order.

function arraysMatch(a, b) {
    if (a.length !== b.length) return false;

    const sortedA = [...a].sort();
    const sortedB = [...b].sort();

    return sortedA.every((value, index) => value === sortedB[index]);
}

// Show one screen and hide the others.

function showScreen(screen) {
    intro.classList.toggle("hidden", screen !== "intro");
    quiz.classList.toggle("hidden", screen !== "quiz");
    result.classList.toggle("hidden", screen !== "result");
}

// Update progress information.

function updateProgress() {
    const total = quizQuestions.length;

    numberEl.textContent = `${String(currentIndex + 1).padStart(2, "0")} / ${total}`;

    answeredEl.textContent = `${answeredCount} / ${total} COMPLETED`;

    const progress = (answeredCount / total) * 100;

    barEl.style.width = `${progress}%`;
}

/* =========================================================
   06. LOCAL STORAGE
   ========================================================= */

// Read previous skill-check results.
// If storage is unavailable or invalid, return an empty structure.

function readResults() {
    const emptyData = {
        schemaVersion: 1,
        updatedAt: new Date().toISOString(),
        tests: {},
    };

    try {
        const raw = localStorage.getItem(STORAGE_KEY);

        if (!raw) return emptyData;

        const parsed = JSON.parse(raw);

        if (!parsed || typeof parsed !== "object") {
            return emptyData;
        }

        if (!parsed.tests || typeof parsed.tests !== "object") {
            parsed.tests = {};
        }

        return parsed;
    } catch (error) {
        console.warn("Could not read skill-check results:", error);

        return emptyData;
    }
}

// Save the completed attempt.
// Other skill-check records are preserved.

function saveResults() {
    const data = readResults();

    const completedAt = new Date().toISOString();

    const previous = data.tests[TEST_ID] || {};

    const previousBest = previous.best || null;

    const latest = {
        score,
        total: quizQuestions.length,
        percentage: Math.round((score / quizQuestions.length) * 100),
        completedAt,
    };

    const isNewBest =
        !previousBest ||
        latest.percentage > previousBest.percentage ||
        (latest.percentage === previousBest.percentage &&
            latest.score > previousBest.score);

    const best = isNewBest ? latest : previousBest;

    const history = Array.isArray(previous.history)
        ? [...previous.history]
        : [];

    history.push(latest);

    data.schemaVersion = 1;
    data.updatedAt = completedAt;

    data.tests[TEST_ID] = {
        testId: TEST_ID,
        title: TEST_TITLE,
        attempts: (Number(previous.attempts) || 0) + 1,
        latest,
        best,
        history: history.slice(-20),
    };

    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data));

        savedRecord = data.tests[TEST_ID];

        return savedRecord;
    } catch (error) {
        console.warn("Could not save skill-check results:", error);

        savedRecord = {
            latest,
            best,
        };

        return savedRecord;
    }
}

/* =========================================================
   07. START / RESET QUIZ
   ========================================================= */

function startQuiz() {
    quizQuestions = shuffleArray(questions).map((question) => ({
        ...question,
        options: shuffleArray(question.options),
    }));

    currentIndex = 0;

    selectedAnswers = [];
    checkedAnswers = [];

    score = 0;
    answeredCount = 0;

    isChecked = false;

    startTime = Date.now();
    elapsedSeconds = 0;

    nextBtn.disabled = true;
    nextBtn.textContent = "Check answer";

    if (reviewEl) {
        reviewEl.classList.add("hidden");
        reviewEl.innerHTML = "";
    }

    if (reviewBtn) {
        reviewBtn.textContent = "Review answers";
    }

    showScreen("quiz");

    renderQuestion();
}

/* =========================================================
   08. RENDER QUESTION
   ========================================================= */

function renderQuestion() {
    const question = quizQuestions[currentIndex];

    if (!question) return;

    selectedAnswers = [];
    isChecked = false;

    updateProgress();

    kindEl.textContent =
        question.type === "multiple" ? "MULTIPLE CHOICE" : "SINGLE CHOICE";

    questionEl.textContent = question.question;

    hintEl.textContent = question.hint;

    // Show or hide the question's code sample.

    if (question.code) {
        sampleEl.classList.remove("hidden");
        sampleEl.textContent = question.code;
    } else {
        sampleEl.classList.add("hidden");
        sampleEl.textContent = "";
    }

    // Reset feedback.

    feedbackEl.classList.remove("show", "wrong", "correct");

    feedbackEl.classList.add("hidden");

    feedbackIcon.textContent = "";
    feedbackTitle.textContent = "";
    feedbackSubtitle.textContent = "";
    feedbackExplanation.textContent = "";
    feedbackCode.textContent = "";
    feedbackTip.textContent = "";

    // Reset options.

    optionsEl.innerHTML = "";

    question.options.forEach((option, index) => {
        const button = document.createElement("button");

        button.type = "button";
        button.className = "option";

        button.setAttribute("aria-pressed", "false");

        const letter = document.createElement("span");
        letter.className = "option-letter";
        letter.textContent = String.fromCharCode(65 + index);

        const text = document.createElement("span");
        text.className = "option-text";
        text.textContent = option.text;

        button.append(letter, text);

        button.addEventListener("click", () => {
            selectAnswer(option.id);
        });

        optionsEl.appendChild(button);
    });

    nextBtn.disabled = true;
    nextBtn.textContent = "Check answer";
}

/* =========================================================
   09. SELECT ANSWERS
   ========================================================= */

function selectAnswer(optionId) {
    if (isChecked) return;

    const question = quizQuestions[currentIndex];

    const option = question.options.find((item) => item.id === optionId);

    if (!option) return;

    if (question.type === "single") {
        // Single choice: only one option can be selected.

        selectedAnswers = [optionId];
    } else {
        // Multiple choice: toggle the selected option.

        if (selectedAnswers.includes(optionId)) {
            selectedAnswers = selectedAnswers.filter((id) => id !== optionId);
        } else {
            selectedAnswers.push(optionId);
        }
    }

    // Update visual selection and accessibility state.

    const buttons = optionsEl.querySelectorAll(".option");

    buttons.forEach((button, index) => {
        const currentOption = question.options[index];

        const isSelected = selectedAnswers.includes(currentOption.id);

        button.classList.toggle("selected", isSelected);

        button.setAttribute("aria-pressed", String(isSelected));
    });

    nextBtn.disabled = selectedAnswers.length === 0;

    nextBtn.textContent =
        question.type === "multiple" ? "Check answers" : "Check answer";
}

/* =========================================================
   10. CHECK ANSWER
   ========================================================= */

function checkAnswer() {
    if (selectedAnswers.length === 0 || isChecked) return;

    const question = quizQuestions[currentIndex];

    const correctAnswers = question.options
        .filter((option) => option.correct)
        .map((option) => option.id);

    const isCorrect = arraysMatch(selectedAnswers, correctAnswers);

    checkedAnswers[currentIndex] = {
        questionId: question.id,
        selected: [...selectedAnswers],
        correct: [...correctAnswers],
        isCorrect,
    };

    if (isCorrect) {
        score++;
    }

    answeredCount++;

    isChecked = true;

    // Show correct and incorrect options.

    const buttons = optionsEl.querySelectorAll(".option");

    buttons.forEach((button, index) => {
        const option = question.options[index];

        button.disabled = true;

        button.classList.remove("selected");

        if (option.correct) {
            button.classList.add("correct");
        }

        if (selectedAnswers.includes(option.id) && !option.correct) {
            button.classList.add("incorrect");
        }

        button.setAttribute(
            "aria-pressed",
            String(selectedAnswers.includes(option.id)),
        );
    });

    updateProgress();

    showFeedback(question, isCorrect);

    nextBtn.disabled = false;

    nextBtn.textContent =
        currentIndex === quizQuestions.length - 1
            ? "See results"
            : "Next question";
}

/* =========================================================
   11. EDUCATIONAL FEEDBACK
   ========================================================= */

function showFeedback(question, isCorrect) {
    feedbackEl.classList.remove("hidden", "wrong", "correct");
    feedbackEl.classList.add("show");

    if (isCorrect) {
        feedbackEl.classList.add("correct");

        feedbackIcon.textContent = "✓";
        feedbackTitle.textContent = "Correct!";
        feedbackSubtitle.textContent = "Exactly right. Great work.";
    } else {
        feedbackEl.classList.add("wrong");

        feedbackIcon.textContent = "!";
        feedbackTitle.textContent = "Not quite.";
        feedbackSubtitle.textContent =
            "Let's understand why this is the correct answer.";
    }

    feedbackExplanation.textContent = question.explanation;

    feedbackCode.textContent = question.example;

    feedbackTip.textContent = question.tip;
}

/* =========================================================
   12. NEXT QUESTION
   ========================================================= */

function nextQuestion() {
    if (!isChecked) {
        checkAnswer();
        return;
    }

    if (currentIndex < quizQuestions.length - 1) {
        currentIndex++;

        renderQuestion();
    } else {
        finishQuiz();
    }
}

/* =========================================================
   13. FINISH QUIZ
   ========================================================= */

function finishQuiz() {
    elapsedSeconds = Math.floor((Date.now() - startTime) / 1000);

    const total = quizQuestions.length;

    const percentage = Math.round((score / total) * 100);

    // Save this attempt.

    const record = saveResults();

    // Update result information.

    percentEl.textContent = `${percentage}%`;

    correctEl.textContent = `${score} / ${total}`;

    timeEl.textContent = formatTime(elapsedSeconds);

    bestEl.textContent = `${record.best.percentage}%`;

    // Choose a result message.

    if (percentage === 100) {
        resultTitleEl.textContent = "Perfect score.";
        messageEl.textContent =
            "Outstanding! You understand inline alignment and flexbox fundamentals.";
    } else if (percentage >= 80) {
        resultTitleEl.textContent = "Excellent work.";
        messageEl.textContent =
            "You have a strong understanding of the concepts. Keep building.";
    } else if (percentage >= 60) {
        resultTitleEl.textContent = "Good progress.";
        messageEl.textContent =
            "You're getting there. Review the explanations to strengthen your knowledge.";
    } else {
        resultTitleEl.textContent = "Keep learning.";
        messageEl.textContent =
            "Every attempt is progress. Review the examples and try again.";
    }

    // Animate the score ring.

    if (ringEl) {
        ringEl.style.background = `conic-gradient(
                var(--coral) 0deg,
                var(--lavender) ${percentage * 3.6}deg,
                #f0e8ee ${percentage * 3.6}deg
            )`;
    }

    showScreen("result");

    renderReview();
}

/* =========================================================
   14. ANSWER REVIEW
   ========================================================= */

function renderReview() {
    reviewEl.innerHTML = "";

    quizQuestions.forEach((question, index) => {
        const answer = checkedAnswers[index];

        const item = document.createElement("article");

        item.className = "review-item";

        const heading = document.createElement("div");
        heading.className = "review-heading";

        const status = document.createElement("span");

        status.className = answer.isCorrect
            ? "review-status good"
            : "review-status bad";

        status.textContent = answer.isCorrect ? "CORRECT" : "INCORRECT";

        const title = document.createElement("h3");

        title.textContent = `${String(index + 1).padStart(2, "0")}. ${question.question}`;

        heading.append(status, title);

        item.appendChild(heading);

        // Display every option and mark correct answers.

        const answerList = document.createElement("div");
        answerList.className = "review-answers";

        question.options.forEach((option) => {
            const line = document.createElement("p");

            line.className = "review-answer";

            const isSelected = answer.selected.includes(option.id);

            if (option.correct) {
                line.classList.add("correct");
            }

            if (isSelected && !option.correct) {
                line.classList.add("incorrect");
            }

            let label = "";

            if (option.correct && isSelected) {
                label = " ✓ Your answer — correct";
            } else if (option.correct) {
                label = " ✓ Correct answer";
            } else if (isSelected) {
                label = " ✕ Your answer";
            }

            line.textContent = option.text + label;

            answerList.appendChild(line);
        });

        item.appendChild(answerList);

        const explanation = document.createElement("p");

        explanation.className = "review-explanation";
        explanation.textContent = question.explanation;

        item.appendChild(explanation);

        const example = document.createElement("pre");

        example.className = "review-code";
        example.textContent = question.example;

        item.appendChild(example);

        const tip = document.createElement("p");

        tip.className = "review-tip";
        tip.textContent = question.tip;

        item.appendChild(tip);

        reviewEl.appendChild(item);
    });
}

/* =========================================================
   15. EVENT LISTENERS
   ========================================================= */

// Start a new randomized attempt.

startBtn.addEventListener("click", startQuiz);

// Return to the intro screen.

exitBtn.addEventListener("click", () => {
    showScreen("intro");
});

// Check the current answer or move forward.

nextBtn.addEventListener("click", nextQuestion);

// Start again with a new question order.

retryBtn.addEventListener("click", startQuiz);

// Show or hide the answer review.

reviewBtn.addEventListener("click", () => {
    const isHidden = reviewEl.classList.contains("hidden");

    reviewEl.classList.toggle("hidden");

    reviewBtn.textContent = isHidden ? "Hide review" : "Review answers";

    if (isHidden) {
        reviewEl.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    }
});

/* =========================================================
   16. INITIAL STATE
   ========================================================= */

showScreen("intro");

nextBtn.disabled = true;

console.log(
    `Skill Check ${TEST_ID} ready — ${questions.length} questions loaded.`,
);
