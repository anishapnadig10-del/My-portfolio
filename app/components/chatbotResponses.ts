export interface ChatAction {
  label: string;
  type: "scroll" | "link";
  target: string;
}

export interface ChatReply {
  text: string;
  actions?: ChatAction[];
}

export const SUGGESTED_QUESTIONS: string[] = [
  "Who is the portfolio owner?",
  "What skills do they have?",
  "Show me the projects.",
  "What technologies do they use?",
  "How can I contact them?",
  "Take me to the About section.",
];

export const SECTION_COMMENTS: Record<string, string[]> = {
  hero: [
    "Welcome to Anisha's world! Grab your Anywhere Door! 🚪✨",
    "Psst! Scroll down, there's cool stuff ahead! 👇",
    "Ready for a fun portfolio tour? Let's go! 🚀",
  ],
  about: [
    "Meet Anisha! BIT CSE student & certified coding enthusiast! 🎓",
    "Want to know her secret gadget? Curiosity & coffee! ☕✨",
    "She learns something new every single day! 💡",
  ],
  projects: [
    "Let's explore the projects! Made with pure curiosity! 🚀",
    "AlgoVisualizer, CodeForge... which one do you want to see first? 💻",
    "Whoa! Look at these cool projects Anisha built! 🌟",
  ],
  contact: [
    "Don't be shy! Say hello to Anisha! 📬",
    "Send a message! (Faster than a Time Machine!) ⏳✨",
    "Looking to hire or collaborate? Drop a note! 💬",
  ],
};

export const IDLE_SPEECH_MESSAGES: string[] = [
  "Want to see some cool projects? I have a gadget for that! 🚀",
  "Need help exploring Anisha's portfolio? I'm your guide! 💙",
  "Whoa! Look at these skills! C++, Python, and Web Dev! ⚡",
  "Don't be shy! Say hello in the Contact section! 📬",
  "You're exploring like a pro! 🌟",
  "Psst! There's something interesting down here! 👇",
];

export function getDoraemonResponse(userPrompt: string): ChatReply {
  const query = userPrompt.trim().toLowerCase();

  // 1. Navigation intents
  if (
    query.includes("take me to the about") ||
    query.includes("go to about") ||
    query.includes("show about") ||
    query.includes("scroll to about") ||
    query.includes("about section")
  ) {
    return {
      text: "Vroooom! 🚁 Bamboo-Copter activated! Flying you right over to the About section to meet Anisha!",
      actions: [{ label: "📍 Jump to About", type: "scroll", target: "about" }],
    };
  }

  if (
    query.includes("show me the projects") ||
    query.includes("take me to projects") ||
    query.includes("go to projects") ||
    query.includes("scroll to projects") ||
    query.includes("show projects") ||
    query.includes("show the projects")
  ) {
    return {
      text: "Anywhere Door opened! 🚪✨ Let's check out the awesome projects Anisha built!",
      actions: [{ label: "📍 Jump to Projects", type: "scroll", target: "projects" }],
    };
  }

  if (
    query.includes("take me to contact") ||
    query.includes("go to contact") ||
    query.includes("scroll to contact") ||
    query.includes("show contact")
  ) {
    return {
      text: "Zooming over to the Contact section! 📬 Faster than sending mail through the 22nd century!",
      actions: [{ label: "📍 Jump to Contact", type: "scroll", target: "contact" }],
    };
  }

  // 2. Who is the portfolio owner / Who owns this portfolio?
  if (
    query.includes("who is the portfolio owner") ||
    query.includes("who owns") ||
    query.includes("who are you") ||
    query.includes("who is") ||
    query.includes("owner") ||
    query.includes("about her") ||
    query.includes("about anisha") ||
    query.includes("intro") ||
    query.includes("bio") ||
    query.includes("student")
  ) {
    return {
      text: "Tadaaa! 🎉 This portfolio belongs to Anisha! She is a bright Computer Science and Engineering student at Bangalore Institute of Technology (BIT). Her motto is: 'CS student who loves building web apps and wants to learn something new everyday.' (And she is awesome to work with!) 💙",
      actions: [
        { label: "📖 View About Section", type: "scroll", target: "about" },
        { label: "🚀 View Projects", type: "scroll", target: "projects" },
      ],
    };
  }

  // 3. Education / College
  if (
    query.includes("college") ||
    query.includes("university") ||
    query.includes("study") ||
    query.includes("studying") ||
    query.includes("education") ||
    query.includes("degree") ||
    query.includes("bit") ||
    query.includes("branch")
  ) {
    return {
      text: "Anisha studies Computer Science & Engineering (CSE) at the renowned Bangalore Institute of Technology (BIT) in Bangalore! 🎓 When she's not solving algorithms, she's building interactive software projects!",
      actions: [{ label: "📖 Read About Section", type: "scroll", target: "about" }],
    };
  }

  // 4. Skills & Technologies
  if (
    query.includes("skill") ||
    query.includes("technolog") ||
    query.includes("stack") ||
    query.includes("language") ||
    query.includes("know") ||
    query.includes("use") ||
    query.includes("c++") ||
    query.includes("python")
  ) {
    return {
      text: "Whoa, look at her toolkit! 🧰✨\n\n• Primary Languages: C++, C, and Python\n• Web Tech: HTML5/CSS3, JavaScript/TypeScript, React, Next.js, and Tailwind CSS\n• Core Concepts: Data Structures & Algorithms, Object-Oriented Programming (OOP)\n• Tools: Git, GitHub, Linux\n\nNo 22nd-century magic required—just clean logic and practice! Want to inspect the skill badges?",
      actions: [
        { label: "✨ View Skills in About", type: "scroll", target: "about" },
        { label: "💻 See Built Projects", type: "scroll", target: "projects" },
      ],
    };
  }

  // 5. Projects
  if (
    query.includes("project") ||
    query.includes("work") ||
    query.includes("built") ||
    query.includes("app") ||
    query.includes("portfolio work") ||
    query.includes("algovisualizer") ||
    query.includes("codeforge") ||
    query.includes("campusconnect")
  ) {
    return {
      text: "Hold onto your Bamboo-Copter! 🚁 Anisha has built 3 awesome featured projects:\n\n1. 🔍 AlgoVisualizer: Interactive data structure & algorithm visualizer (C++, Python, TypeScript, Tailwind CSS)\n2. ⚡ CodeForge Playground: Lightweight coding sandbox to compile and debug C/C++ in real-time (C, C++, Python, Next.js, Docker)\n3. 🎓 CampusConnect Hub: Collaborative study and repo platform for BIT CSE students (Python, FastAPI, React, Tailwind CSS)\n\nShall I guide you down to the Projects section?",
      actions: [
        { label: "🚀 Guide me to Projects", type: "scroll", target: "projects" },
        { label: "🐙 Visit GitHub Profile", type: "link", target: "https://github.com/anishapnadig10-del" },
      ],
    };
  }

  // 6. GitHub
  if (
    query.includes("github") ||
    query.includes("repo") ||
    query.includes("git") ||
    query.includes("source code")
  ) {
    return {
      text: "Anisha's code universe is live on GitHub at github.com/anishapnadig10-del! 🐙 You can inspect her repositories, commits, and project codebases right there!",
      actions: [
        { label: "🐙 Open GitHub (anishapnadig10-del)", type: "link", target: "https://github.com/anishapnadig10-del" },
      ],
    };
  }

  // 7. LinkedIn
  if (query.includes("linkedin") || query.includes("profile") || query.includes("social")) {
    return {
      text: "Let's connect professionally! 💼 You can find Anisha on LinkedIn at linkedin.com/in/anishapnadig10-del. She loves connecting with fellow developers and recruiters!",
      actions: [
        { label: "💼 Open LinkedIn", type: "link", target: "https://linkedin.com/in/anishapnadig10-del" },
      ],
    };
  }

  // 8. Contact & Email
  if (
    query.includes("contact") ||
    query.includes("email") ||
    query.includes("reach") ||
    query.includes("hire") ||
    query.includes("message") ||
    query.includes("talk") ||
    query.includes("mail")
  ) {
    return {
      text: "Don't be shy, say hello! 📬 You can:\n• Email Anisha directly: anishapnadig10@gmail.com\n• Connect on LinkedIn: anishapnadig10-del\n• Fill out the speedy Contact form below!\n\n(It's faster than sending a note through the Time Machine!) ⏳✨",
      actions: [
        { label: "📬 Guide me to Contact Form", type: "scroll", target: "contact" },
        { label: "✉️ Send Direct Email", type: "link", target: "mailto:anishapnadig10@gmail.com" },
      ],
    };
  }

  // 9. Greetings & Casual banter
  if (
    query === "hi" ||
    query === "hello" ||
    query === "hey" ||
    query.startsWith("hi ") ||
    query.startsWith("hello ") ||
    query.startsWith("hey ")
  ) {
    return {
      text: "Konnichiwa! 💙 I'm Doraemon, your personal 22nd-century portfolio guide! What would you like to explore today? Her skills, her cool projects, or shall we send her a message?",
      actions: [
        { label: "🚀 Show Projects", type: "scroll", target: "projects" },
        { label: "✨ Explore Skills", type: "scroll", target: "about" },
        { label: "📬 Contact Details", type: "scroll", target: "contact" },
      ],
    };
  }

  // 10. Fallback (strictly as requested)
  return {
    text: "Oops! I don't know that yet! Try asking me about projects, skills or contact information. 😊",
    actions: [
      { label: "💻 Tell me about projects", type: "scroll", target: "projects" },
      { label: "✨ Tell me about skills", type: "scroll", target: "about" },
      { label: "📬 How can I contact her?", type: "scroll", target: "contact" },
    ],
  };
}
