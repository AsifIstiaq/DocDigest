export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
      duration: 0.8,
    },
  },
};

export const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      damping: 15,
      stiffness: 50,
    },
  },
};

export const buttonVariants = {
  scale: 1.05,
  transition: {
    type: "spring" as const,
    stiffness: 300,
    damping: 10,
  },
};

export const listVariant = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring" as const, damping: 20, stiffness: 100 },
  },
};

export const demoSummary = {
  summary: `# 🌍 How to Be a Global Citizen (It Starts at Home!)
🎯 Being a global citizen means understanding the world's differences and using that knowledge to make a positive impact, starting right in your own community.
• 📌 It’s about both big movements and small, everyday acts of kindness.

# Document Details
• 📄 Type: Personal Essay / Reflection
• 👥 For: Aspiring Changemakers & The Globally Curious

# Key Highlights
• 🚀 You don't have to travel the world to be a global citizen; it's about a mindset of understanding and helping others.
• ⭐ We must learn from all of history—celebrating triumphs like human rights and learning from tragedies to ensure they never happen again.
• 💫 The most powerful step is bringing global lessons back home to share with your friends, family, and community.

# Why It Matters
• 💡 This approach builds a more empathetic and connected world. By understanding others and learning from the past, we can prevent future mistakes, solve major issues like poverty and injustice, and create a better future for everyone, one small act at a time.   

# Main Points
• 🎯 The main insight is that global citizenship is defined by your actions and empathy, not your passport stamps.
• 💪 Its key strength is fostering respect for all`,
};
