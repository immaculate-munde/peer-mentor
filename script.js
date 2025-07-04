function generateRandomNumber(num) {
  return Math.floor(Math.random() * num);
}

const categories = {
  education: 'Education 📚',
  career: 'Career 💼',
  relationships: 'Relationships ❤️',
  relationship: 'Relationships ❤️',
  spirituality: 'Spirituality 🧘',
  finance: 'Finance 💰',
  growth: 'Personal Growth 🧠',
  personal: 'Personal Growth 🧠',
  community: 'Community Service 🌍'
};

const tones = [
  'Encouraging 🌟',
  'Reflective 💭',
  'Practical 🛠️',
  'Inspiring 🔥',
  'Gentle 🤗',
  'Challenging 🏋️',
];

const tips = [
  'Consistency beats intensity — keep showing up. 💪',
  'Take time to reflect on what truly matters to you. 🌱',
  'Ask for help — it’s a strength, not a weakness. 🤝',
  'Balance ambition with rest. 🧘‍♂️',
  'Set boundaries, not walls. 🛡️',
  'Growth starts with discomfort. Embrace it. 🚀',
  'Surround yourself with people who challenge and support you. 👥',
  'Celebrate small wins — they build momentum. 🎉',
  'Learn from failures; don’t fear them. 💡',
  'Faith and action go hand in hand. 🕊️',
];

function generateAdvice() {
  const input = document.getElementById("categoryInput").value.trim().toLowerCase();
  const box = document.getElementById('advice-box');
  let categoryMatch = null;

  for (let keyword in categories) {
    if (input.includes(keyword)) {
      categoryMatch = categories[keyword];
      break;
    }
  }

  const chosenCategory = categoryMatch || "General Life 🌍";
  const tone = tones[generateRandomNumber(tones.length)];
  const tip = tips[generateRandomNumber(tips.length)];

  const message = `
    Focus Area: <strong>${chosenCategory}</strong><br><br>
    Tone: <strong>${tone}</strong><br><br>
    Advice: <em>${tip}</em>
  `;

  box.classList.remove('show');
  setTimeout(() => {
    box.innerHTML = message;
    box.classList.add('show');
  }, 100);
}

// Theme toggle
document.getElementById("themeToggle").addEventListener("click", () => {
  document.body.classList.toggle("light");
});
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('service-worker.js')
      .then(reg => console.log('✅ Service Worker registered:', reg.scope))
      .catch(err => console.error('❌ Service Worker registration failed:', err));
  });
}