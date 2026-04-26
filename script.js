// =============================================================================
// CareerPath AI — script.js  (with email notifications via Web3Forms)
// =============================================================================

// ----------------------------------------------------------------
// EMAIL NOTIFICATIONS — uses Web3Forms (free, no account needed)
// All events are sent to: vedavyasgowda29112004@gmail.com
// ----------------------------------------------------------------
async function sendAdminEmail(eventType, userEmail, detail) {
  const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });
  const subject = "CareerPath AI — " + eventType;
  const body =
    "Event    : " + eventType + "\n" +
    "User     : " + userEmail + "\n" +
    "Detail   : " + detail + "\n" +
    "Time (IST): " + timestamp;

  try {
    await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        access_key: "9e2b50a1-fd10-4f4b-bc5f-f6f0a4ee8d4f",
        to: "vedavyasgowda29112004@gmail.com",
        subject: subject,
        message: body,
        from_name: "CareerPath AI"
      })
    });
    console.log("✅ Email sent:", eventType);
  } catch (err) {
    console.warn("⚠️ Email notification failed (non-critical):", err);
  }
}

// ==========================
// Explore button scroll
// ==========================
const exploreBtn = document.getElementById("exploreBtn");
if (exploreBtn) {
  exploreBtn.addEventListener("click", () => {
    document.getElementById("domains")?.scrollIntoView({ behavior: "smooth" });
  });
}

// ==========================
// Domain Selection
// ==========================
const domainLabels = {
  "fullstack":     "Full Stack Development",
  "datascience":   "Data Science & ML",
  "cybersecurity": "Cybersecurity",
  "devops":        "DevOps & Cloud",
  "aiml":          "AI & Machine Learning",
  "gamedev":       "Game Development",
  "uiux":          "UI/UX Design",
  "blockchain":    "Blockchain & Web3",
  "mobile":        "Mobile Development",
  "embedded":      "Embedded Systems"
};

function selectDomain(domain) {
  if (localStorage.getItem("loggedIn") !== "true") {
    showToast("Please login first to explore roadmaps!", "error");
    setTimeout(() => { window.location.href = "login.html"; }, 1200);
    return;
  }
  localStorage.setItem("selectedDomain", domain);

  // Send email: career path selected
  const userEmail = localStorage.getItem("userEmail") || "Unknown";
  const domainName = domainLabels[domain] || domain.toUpperCase();
  sendAdminEmail(
    "Career Path Selected",
    userEmail,
    "Selected: " + domainName
  );

  window.location.href = "roadmap.html";
}

// ==========================
// Scroll Reveal
// ==========================
function reveal() {
  document.querySelectorAll(".reveal").forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 80) el.classList.add("active");
  });
}
window.addEventListener("scroll", reveal);

// ==========================
// REGISTER
// ==========================
const registerForm = document.getElementById("registerForm");
if (registerForm) {
  registerForm.addEventListener("submit", async function(e) {
    e.preventDefault();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if (!email || !password) { showToast("Please fill all fields!", "error"); return; }
    if (password.length < 6) { showToast("Password must be at least 6 characters!", "error"); return; }

    const users = JSON.parse(localStorage.getItem("users") || "{}");
    if (users[email]) { showToast("Email already registered! Please login.", "error"); return; }

    let registered = false;
    try {
      const res = await fetch("http://localhost:8080/register", {
        method:"POST", headers:{"Content-Type":"application/json"},
        body:JSON.stringify({email,password}), signal:AbortSignal.timeout(2500)
      });
      if ((await res.text()) === "Registration Successful") registered = true;
    } catch(e) {}

    if (!registered) {
      users[email] = password;
      localStorage.setItem("users", JSON.stringify(users));
      registered = true;
    }

    // Send email: new registration
    sendAdminEmail(
      "New Registration",
      email,
      "New user just registered on CareerPath AI"
    );

    showToast("Account created! Redirecting to login...", "success");
    setTimeout(() => { window.location.href = "login.html"; }, 1800);
  });
}

// ==========================
// LOGIN
// ==========================
const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", async function(e) {
    e.preventDefault();
    const email = document.getElementById("loginEmail").value.trim();
    const password = document.getElementById("loginPassword").value.trim();

    if (!email || !password) { showToast("Please fill all fields!", "error"); return; }

    let ok = false;
    try {
      const res = await fetch("http://localhost:8080/login", {
        method:"POST", headers:{"Content-Type":"application/json"},
        body:JSON.stringify({email,password}), signal:AbortSignal.timeout(2500)
      });
      if ((await res.text()) === "Login Successful") ok = true;
    } catch(e) {}

    if (!ok) {
      const users = JSON.parse(localStorage.getItem("users") || "{}");
      if (users[email] === password) ok = true;
    }

    if (ok) {
      localStorage.setItem("loggedIn", "true");
      localStorage.setItem("userEmail", email);

      // Send email: user login
      sendAdminEmail(
        "User Login",
        email,
        "User logged into CareerPath AI"
      );

      showToast("Login successful! Welcome back 🔥", "success");
      setTimeout(() => { window.location.href = "index.html"; }, 1400);
    } else {
      showToast("Invalid email or password!", "error");
    }
  });
}

// ==========================
// NAV STATE
// ==========================
window.addEventListener("DOMContentLoaded", () => {
  const loginBtn = document.getElementById("loginBtn");
  const registerBtn = document.getElementById("registerBtn");
  const logoutBtn = document.getElementById("logoutBtn");
  const emailDisplay = document.getElementById("userEmailDisplay");
  const isLoggedIn = localStorage.getItem("loggedIn") === "true";
  const email = localStorage.getItem("userEmail") || "";

  if (isLoggedIn) {
    if (loginBtn) loginBtn.style.display = "none";
    if (registerBtn) registerBtn.style.display = "none";
    if (logoutBtn) logoutBtn.style.display = "inline";
    if (emailDisplay) emailDisplay.textContent = "👤 " + email;
  }
  reveal();
});

// ==========================
// LOGOUT
// ==========================
const logoutBtn = document.getElementById("logoutBtn");
if (logoutBtn) {
  logoutBtn.addEventListener("click", () => {
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("userEmail");
    showToast("Logged out successfully!", "success");
    setTimeout(() => { window.location.reload(); }, 1200);
  });
}

// ==========================
// TOAST
// ==========================
function showToast(msg, type = "success") {
  document.getElementById("_toast")?.remove();
  const t = document.createElement("div");
  t.id = "_toast";
  t.textContent = msg;
  t.style.cssText = `
    position:fixed;bottom:28px;right:28px;
    background:${type==="success"?"#00ff88":"#ff3b3b"};
    color:#000;padding:13px 22px;border-radius:8px;
    font-family:'JetBrains Mono',monospace;font-size:13px;font-weight:600;
    z-index:9999;box-shadow:0 4px 24px rgba(0,0,0,0.5);
    animation:_toastIn 0.3s ease;
  `;
  const s = document.createElement("style");
  s.textContent = `@keyframes _toastIn{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}`;
  document.head.appendChild(s);
  document.body.appendChild(t);
  setTimeout(() => t.remove(), 3200);
}

window.selectDomain = selectDomain;
