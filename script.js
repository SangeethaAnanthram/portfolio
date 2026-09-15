// Typing effect
const phrases = [
  "Data Science Student",
  "Python Developer",
  "Data Analyst",
  "Web Developer"
];

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingElement = document.getElementById("typingText");

function typeEffect() {
  const currentPhrase = phrases[phraseIndex];
  if (isDeleting) {
    typingElement.textContent = currentPhrase.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typingElement.textContent = currentPhrase.substring(0, charIndex + 1);
    charIndex++;
  }

  let delay = isDeleting ? 40 : 90;

  if (!isDeleting && charIndex === currentPhrase.length) {
    delay = 1800;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    phraseIndex = (phraseIndex + 1) % phrases.length;
    delay = 350;
  }

  setTimeout(typeEffect, delay);
}

document.addEventListener("DOMContentLoaded", () => {
  typeEffect();

  // Mobile menu toggle
  const mobileToggle = document.getElementById("mobileToggle");
  const navLinks = document.getElementById("navLinks");
  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener("click", () => navLinks.classList.toggle("active"));
    navLinks.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => navLinks.classList.remove("active"));
    });
  }

  // Skills progress bar animation on scroll
  const skillSection = document.getElementById("skills");
  const progressFills = document.querySelectorAll(".progress-fill");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        progressFills.forEach(fill => fill.style.width = fill.getAttribute("data-progress"));
        observer.unobserve(skillSection);
      }
    });
  }, { threshold: 0.2 });
  if (skillSection) observer.observe(skillSection);

  // Universal Modal System
  const modal = document.getElementById("universalModal");
  const modalBody = document.getElementById("modalBody");
  const modalClose = document.getElementById("modalClose");

  function openModal(contentHtml) {
    modalBody.innerHTML = contentHtml;
    modal.classList.add("active");
    modal.setAttribute("aria-hidden", "false");
  }

  function closeModal() {
    modal.classList.remove("active");
    modal.setAttribute("aria-hidden", "true");
  }

  if (modalClose) modalClose.addEventListener("click", closeModal);
  window.addEventListener("click", (e) => { if (e.target === modal) closeModal(); });

  // Full Rich Project Case Studies (Matching yesterday's design)
  const projectData = {
    medicine: {
      title: "Medicine Recommendation System",
      category: "Machine Learning · NLP",
      desc: "A symptom-based machine learning application that predicts a likely disease and presents relevant medicine, precautions, and dietary guidance.",
      problem: "Finding useful first-step information from a list of symptoms can be slow and confusing. This project turns symptom text into structured features so a trained model can return a focused, easy-to-understand recommendation.",
      architecture: [
        "Collect symptoms through a clean, intuitive user interface.",
        "Clean and normalize symptom text using tokenization, stop-word removal, and stemming.",
        "Convert clinical text into numerical features using TF-IDF vectorization.",
        "Train and validate a K-Nearest Neighbors (KNN) classification model.",
        "Predict the most probable disease, then display prescribed medicines, side-effects, and precautions in one view."
      ],
      results: [
        "Connected a complete input-to-recommendation machine learning workflow.",
        "Presented disease predictions, medicines, side effects, and precautions together.",
        "Designed modular stages so preprocessing and model selection can be improved independently."
      ],
      tags: ["Python", "NLP", "KNN", "TF-IDF", "Pandas", "Scikit-learn"],
      images: [
        { src: "assets/medicine-project-1.png", fallback: "https://sangeetha-s-portfolio-showcase-3359.lovable.app/image_for_medicien.png", caption: "Medicine Recommendation System — Machine Learning Pipeline Architecture" },
        { src: "assets/medicine-project-2.png", fallback: "https://sangeetha-s-portfolio-showcase-3359.lovable.app/image.png", caption: "Application Result Screen — Predicted Disease, Medicines & Side Effects" },
        { src: "assets/medicine-project-3.png", fallback: "https://sangeetha-s-portfolio-showcase-3359.lovable.app/image-2.png", caption: "Registration & Patient Intake Portal" }
      ]
    },
    finance: {
      title: "Smart Finance Insights",
      category: "Desktop Application · Data Visualization",
      desc: "A personal finance desktop workspace for tracking income, expenses, budgets, transactions, savings, and financial health ratios.",
      problem: "Personal finance data is often scattered across messy notes and spreadsheets. Smart Finance Insights brings transactions, spending trends, threshold budgets, and summaries into one cohesive desktop application.",
      architecture: [
        "Build the desktop interface and navigation with Python and Tkinter.",
        "Store income, expense, budget, and transaction records in SQLite.",
        "Use Pandas to calculate financial summaries and spending trends.",
        "Generate category and time-series visualizations with Matplotlib.",
        "Export structured reports to Excel with OpenPyXL."
      ],
      results: [
        "Created focused workflows for adding income and categorizing expenses.",
        "Visualized income, spending, savings, budget utilization, and financial health.",
        "Included automated report generation and Excel export."
      ],
      tags: ["Python", "Tkinter", "SQLite", "Pandas", "Matplotlib", "OpenPyXL"],
      images: [
        { src: "assets/finance-project.png", fallback: "https://sangeetha-s-portfolio-showcase-3359.lovable.app/finance_project_image_1.png", caption: "Smart Finance Insights — Main Interactive Financial Dashboard" },
        { src: "assets/finance-project-2.png", fallback: "https://sangeetha-s-portfolio-showcase-3359.lovable.app/finance_project_image_2.png", caption: "Desktop Application Screens — Login, Budget Tracking & Reports" }
      ]
    },
    studysync: {
      title: "StudySync — Smart Student Productivity System",
      category: "Productivity · Student Workspace",
      desc: "An integrated student workspace that brings timetables, notes, assignments, subjects, analytics, goals, and focus sessions together.",
      problem: "Students frequently juggle classes, tasks, notes, reminders, and study goals across separate disconnected tools. StudySync unifies that fragmentation with one intuitive system built around the rhythm of a study day.",
      architecture: [
        "Organize the experience around a central dashboard and persistent navigation.",
        "Connect timetable scheduling, subjects, notes, tasks, reminders, and calendar views.",
        "Summarize weekly study activity and subject progress with analytics.",
        "Support consistent study habits through a Pomodoro focus timer, streaks, and goal tracking.",
        "Use clear status, priority, and progress states across every screen."
      ],
      results: [
        "Designed a complete multi-page student productivity experience.",
        "Made daily priorities visible through timetable, task, and reminder summaries.",
        "Combined progress tracking and focused study tools in one cohesive interface."
      ],
      tags: ["Dashboard UI", "Task Management", "Analytics", "Focus Timer", "Responsive Design"],
      images: [
        { src: "assets/studysync-project.png", fallback: "https://sangeetha-s-portfolio-showcase-3359.lovable.app/study_project_image_1.png", caption: "StudySync Student Dashboard — Timetable, Notes & Analytics" },
        { src: "assets/studysync-project-2.png", fallback: "https://sangeetha-s-portfolio-showcase-3359.lovable.app/study_project_image.png", caption: "Comprehensive Multi-Screen Interface Views" }
      ]
    }
  };

  document.querySelectorAll(".open-modal-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const p = projectData[btn.getAttribute("data-project")];
      if (p) {
        openModal(`
          <div class="case-study-header">
            <div class="case-study-tag">${p.category}</div>
            <h2>${p.title}</h2>
            <p style="color:#94a3b8; font-size:1rem; margin-top:0.4rem;">${p.desc}</p>
          </div>

          <div class="case-section-box">
            <h3>Problem Statement</h3>
            <p style="color:#cbd5e1; font-size:0.95rem; line-height:1.7;">${p.problem}</p>
          </div>

          <div class="case-section-box">
            <h3>Architecture & Workflow</h3>
            <ol class="case-steps-list">
              ${p.architecture.map((step, idx) => `
                <li><span class="step-num">${String(idx + 1).padStart(2, '0')}.</span> <span>${step}</span></li>
              `).join('')}
            </ol>
          </div>

          <div class="case-section-box">
            <h3>Key Results & Outcomes</h3>
            <div class="case-results-grid">
              ${p.results.map(r => `<div class="case-result-pill">✓ ${r}</div>`).join('')}
            </div>
          </div>

          <div class="case-section-box">
            <h3>Project Screenshots & Architecture</h3>
            <div class="case-gallery">
              ${p.images.map(img => `
                <div class="case-gallery-item">
                  <img src="${img.src}" onerror="this.src='${img.fallback}'" alt="${img.caption}" />
                  <div class="case-gallery-caption">${img.caption}</div>
                </div>
              `).join('')}
            </div>
          </div>

          <div style="display:flex; justify-content:space-between; align-items:center; margin-top:1.5rem; border-top:1px solid rgba(255,255,255,0.08); padding-top:1rem;">
            <a href="https://github.com/SangeethaAnanthram" target="_blank" rel="noopener" class="btn btn-outline">View on GitHub &rarr;</a>
            <button class="btn btn-primary" onclick="document.getElementById('universalModal').classList.remove('active')">Close Case Study</button>
          </div>
        `);
      }
    });
  });

  // Certificate Modals with High-Resolution Certificate Images
  const certData = {
    gvkss: {
      title: "Certificate of Completion – AEM & Python",
      issuer: "GVKSS Software Pvt. Ltd.",
      badge: "Govt of India MCA Approved | CIN: U62020TS2024PTC191412",
      image: "assets/cert-gvkss.jpg",
      fallback: "https://sangeetha-s-portfolio-showcase-3359.lovable.app/__l5e/assets-v1/f13add05-a1cd-4b02-8ea7-bb7124445516/gvkss-certificate.jpg",
      details: `
        <strong>Programme:</strong> Internship in AEM and Python<br/>
        <strong>Recipient:</strong> Anantharam Sangeetha<br/>
        <strong>Duration:</strong> March 03, 2025 to June 04, 2025<br/>
        <strong>GIIN Reference:</strong> A6M036061012<br/>
        <strong>Issued Date:</strong> 25/07/2025<br/>
        <strong>Signed By:</strong> Kalyani G, Director & CEO, GVKSS Software Pvt. Ltd.<br/>
        <strong>Evaluation:</strong> Remained focused and consistently delivered high-quality work.
      `
    },
    infosys_python: {
      title: "Course Completion: Basics of Python",
      issuer: "Infosys Springboard",
      badge: "Wingspan Verified Credential",
      image: "assets/cert-infosys-python.jpg",
      fallback: "https://sangeetha-s-portfolio-showcase-3359.lovable.app/__l5e/assets-v1/18d47018-5975-486f-841e-abd8cbcd7b42/infosys-python.jpg",
      details: `
        <strong>Course:</strong> Basics of Python<br/>
        <strong>Awarded To:</strong> Anantharam Sangeetha<br/>
        <strong>Issued Date:</strong> Monday, March 30, 2026<br/>
        <strong>Verification:</strong> Scan QR code or verify at verify.onwingspan.com
      `,
      verifyUrl: "https://verify.onwingspan.com"
    },
    infosys_nosql: {
      title: "Course Completion: Introduction to NoSQL Databases",
      issuer: "Infosys Springboard",
      badge: "Wingspan Verified Credential",
      image: "assets/cert-infosys-nosql.jpg",
      fallback: "https://sangeetha-s-portfolio-showcase-3359.lovable.app/__l5e/assets-v1/dbca6b47-a871-4ce0-95a6-691e823d42af/infosys-nosql.jpg",
      details: `
        <strong>Course:</strong> Introduction to NoSQL databases<br/>
        <strong>Awarded To:</strong> Anantharam Sangeetha<br/>
        <strong>Issued Date:</strong> Monday, March 30, 2026<br/>
        <strong>Verification:</strong> Scan QR code or verify at verify.onwingspan.com
      `,
      verifyUrl: "https://verify.onwingspan.com"
    },
    infosys_intern: {
      title: "Virtual Internship Induction",
      issuer: "Infosys Springboard",
      badge: "Virtual Internship Cohort",
      image: "assets/cert-infosys-intern.jpg",
      fallback: "https://sangeetha-s-portfolio-showcase-3359.lovable.app/__l5e/assets-v1/0a8eb446-194a-4c3b-b412-0007f0146c17/infosys-badge.jpg",
      details: `
        <strong>Candidate:</strong> Anantharam Sangeetha<br/>
        <strong>Programme:</strong> Infosys Springboard Virtual Internship<br/>
        <strong>Format:</strong> Virtual, self-paced with guided modules<br/>
        <strong>Focus:</strong> Applied Data Science, Python, and Software Architecture
      `
    }
  };

  document.querySelectorAll(".open-cert-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const c = certData[btn.getAttribute("data-cert")];
      if (c) {
        openModal(`
          <div class="cert-modal-box">
            <span class="cert-modal-badge">${c.badge}</span>
            <h2>${c.title}</h2>
            <p class="cert-modal-issuer">Issued by ${c.issuer}</p>
            <img src="${c.image}" onerror="this.src='${c.fallback}'" alt="${c.title}" class="cert-image-large" />
            <div class="cert-modal-details">${c.details}</div>
            <div class="cert-modal-actions">
              ${c.verifyUrl ? `<a href="${c.verifyUrl}" target="_blank" rel="noopener" class="btn btn-primary">Verify on Wingspan &rarr;</a>` : ''}
              <button class="btn btn-outline" onclick="document.getElementById('universalModal').classList.remove('active')">Close</button>
            </div>
          </div>
        `);
      }
    });
  });

  // Contact form validation
  const form = document.getElementById("contactForm");
  const feedback = document.getElementById("formFeedback");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const msg = document.getElementById("message").value.trim();

      const nameErr = document.getElementById("nameError");
      const emailErr = document.getElementById("emailError");
      const msgErr = document.getElementById("messageError");

      nameErr.textContent = "";
      emailErr.textContent = "";
      msgErr.textContent = "";
      feedback.textContent = "";

      let valid = true;

      if (!name) {
        nameErr.textContent = "Please enter your name.";
        valid = false;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!email || !emailRegex.test(email)) {
        emailErr.textContent = "Please enter a valid email address.";
        valid = false;
      }

      if (!msg || msg.length < 10) {
        msgErr.textContent = "Please enter a message (at least 10 characters).";
        valid = false;
      }

      if (valid) {
        feedback.style.color = "#00e5ff";
        feedback.textContent = "Thank you! Your message has been sent successfully.";
        form.reset();
      }
    });
  }
});
// ==========================================================================
// Interactive Background Floating Particle Balls
// ==========================================================================
(function initBackgroundCanvas() {
  const canvas = document.getElementById('bg-particle-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  // Particle configuration
  const particleCount = Math.min(65, Math.floor((width * height) / 18000));
  const particles = [];
  const colors = [
    'rgba(6, 182, 212, ',   // Cyan
    'rgba(147, 51, 234, ',  // Purple
    'rgba(59, 130, 246, ',  // Blue
    'rgba(236, 72, 153, '   // Pink
  ];

  class Particle {
    constructor() {
      this.reset();
    }

    reset() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.radius = Math.random() * 2.8 + 1.2;
      this.vx = (Math.random() - 0.5) * 0.7;
      this.vy = (Math.random() - 0.5) * 0.7;
      this.colorBase = colors[Math.floor(Math.random() * colors.length)];
      this.alpha = Math.random() * 0.6 + 0.3;
      this.pulseSpeed = 0.015 + Math.random() * 0.02;
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;

      // Wrap around edges
      if (this.x < 0) this.x = width;
      if (this.x > width) this.x = 0;
      if (this.y < 0) this.y = height;
      if (this.y > height) this.y = 0;

      // Subtle pulse glow
      this.alpha += Math.sin(Date.now() * this.pulseSpeed * 0.05) * 0.005;
      this.alpha = Math.max(0.2, Math.min(0.85, this.alpha));
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = this.colorBase + this.alpha + ')';
      ctx.shadowBlur = 12;
      ctx.shadowColor = this.colorBase + '0.9)';
      ctx.fill();
      ctx.shadowBlur = 0;
    }
  }

  // Populate particles
  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }

  // Draw connecting constellation lines
  function drawConnections() {
    const maxDistance = 115;
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < maxDistance) {
          const opacity = (1 - dist / maxDistance) * 0.22;
          ctx.beginPath();
          ctx.strokeStyle = `rgba(6, 182, 212, ${opacity})`;
          ctx.lineWidth = 0.8;
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }
  }

  // Animation Loop
  function animate() {
    ctx.clearRect(0, 0, width, height);

    drawConnections();
    particles.forEach((p) => {
      p.update();
      p.draw();
    });

    requestAnimationFrame(animate);
  }

  animate();
})();

