
function initQuiz(containerId, questions){
  const root = document.getElementById(containerId);
  const progress = root.querySelector(".progress > div");
  const scoreEl = root.querySelector("[data-score]");
  const doneEl = root.querySelector("[data-done]");
  const total = questions.length;
  let score = 0;
  let done = 0;

  function update(){
    scoreEl.textContent = score + " / " + total;
    doneEl.textContent = done + " de " + total;
    progress.style.width = Math.round((done/total)*100) + "%";
  }

  questions.forEach((q, idx) => {
    const qBox = document.createElement("div");
    qBox.className = "q";
    qBox.innerHTML = `
      <div class="stem">${idx+1}) ${q.stem}</div>
      <div class="small">Escolha 1 alternativa</div>
      <div class="opts"></div>
      <div class="small" style="margin-top:8px;" data-feedback></div>
    `;
    const opts = qBox.querySelector(".opts");
    q.options.forEach((opt, oidx) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "opt";
      btn.textContent = opt;
      btn.addEventListener("click", () => {
        if (btn.dataset.locked === "1") return;
        opts.querySelectorAll(".opt").forEach(b => b.dataset.locked="1");
        const feedback = qBox.querySelector("[data-feedback]");
        const correctIndex = q.correct;
        opts.querySelectorAll(".opt").forEach((b, bi) => {
          if (bi === correctIndex) b.classList.add("correct");
        });
        if (oidx === correctIndex){
          btn.classList.add("correct");
          score += 1;
          feedback.textContent = "✅ Certo! " + (q.explain || "");
        }else{
          btn.classList.add("wrong");
          feedback.textContent = "❌ Quase! " + (q.explain || "");
        }
        done += 1;
        update();
      });
      opts.appendChild(btn);
    });
    root.querySelector("[data-questions]").appendChild(qBox);
  });

  root.querySelector("[data-reset]").addEventListener("click", () => {
    score = 0; done = 0;
    root.querySelector("[data-questions]").innerHTML = "";
    initQuiz(containerId, questions);
  });

  update();
}
