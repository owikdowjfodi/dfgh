/* bank/limits.js — 極限與導數的概念（30 題）*/
(function (root) {
  var SUB = {
    SEQ: '5.1 數列的極限',
    FN: '5.2 函數的極限',
    ALG: '5.3 極限的運算與 0/0 型不定式',
    FP: '5.4 導數的第一原理（定義）',
    CONT: '5.5 連續性與可導性'
  };
  root.M2Bank = root.M2Bank || {};
  root.M2Bank['limits'] = [

    /* ═══════ 5.1 數列的極限（li01–li06）═══════ */
    {
      id: 'li01',
      sub: SUB.SEQ,
      lv: 1,
      q: '已知數列的通項為 a<sub>n</sub> = (2n + 1) ÷ (n + 3)，其中 n 為正整數。<br><b>求 lim<sub>n→∞</sub> a<sub>n</sub>。</b>',
      qEn: 'The general term of a sequence is a<sub>n</sub> = (2n + 1) ÷ (n + 3), where n is a positive integer.<br><b>Find lim<sub>n→∞</sub> a<sub>n</sub>.</b>',
      hint: '分子、分母同除以 n，再令 n 趨向無限；1 ÷ n 這一類項的極限為 0。',
      hintEn: 'Divide both the numerator and the denominator by n, then let n tend to infinity; terms such as 1 ÷ n tend to 0.',
      answer: { type: 'num', accept: [2, 2.0], display: '2', displayEn: '2' },
      sol: [
        { mk: 'M1', tx: '分子、分母同除以 n：a(n) = (2 + 1 ÷ n) ÷ (1 + 3 ÷ n)',
          txEn: 'Divide the numerator and the denominator by n: a(n) = (2 + 1 ÷ n) ÷ (1 + 3 ÷ n)' },
        { mk: 'M1', tx: '當 n → ∞ 時，1 ÷ n → 0 且 3 ÷ n → 0',
          txEn: 'As n → ∞, 1 ÷ n → 0 and 3 ÷ n → 0' },
        { mk: 'A1', tx: 'a(n) → (2 + 0) ÷ (1 + 0) = 2',
          txEn: 'a(n) → (2 + 0) ÷ (1 + 0) = 2' },
        { mk: 'A1', tx: '故 lim(n→∞) a(n) = 2',
          txEn: 'Hence lim(n→∞) a(n) = 2' }
      ],
      note: '常見失分：直接寫「∞ ÷ ∞ = 1」。必須先同除以 n 化為有限形式，才可逐項取極限。',
      noteEn: 'Common loss of marks: writing "∞ ÷ ∞ = 1" directly. You must first divide both parts by n to obtain a finite form before taking the limit term by term.'
    },
    {
      id: 'li02',
      sub: SUB.SEQ,
      lv: 1,
      q: '設數列 a<sub>n</sub> = (3n² − 2n + 1) ÷ (n² + 5)。<br><b>求 lim<sub>n→∞</sub> a<sub>n</sub>。</b>',
      qEn: 'Let a<sub>n</sub> = (3n² − 2n + 1) ÷ (n² + 5) be a sequence.<br><b>Find lim<sub>n→∞</sub> a<sub>n</sub>.</b>',
      hint: '最高次為 n²，分子分母同除以 n²；1 ÷ n 與 1 ÷ n² 的極限都是 0。',
      hintEn: 'The highest power is n², so divide the numerator and the denominator by n²; both 1 ÷ n and 1 ÷ n² tend to 0.',
      answer: { type: 'num', accept: [3, 3.0], display: '3', displayEn: '3' },
      sol: [
        { mk: 'M1', tx: '分子、分母同除以 n²：a(n) = (3 − 2 ÷ n + 1 ÷ n²) ÷ (1 + 5 ÷ n²)',
          txEn: 'Divide the numerator and the denominator by n²: a(n) = (3 − 2 ÷ n + 1 ÷ n²) ÷ (1 + 5 ÷ n²)' },
        { mk: 'M1', tx: '當 n → ∞ 時，− 2 ÷ n → 0，1 ÷ n² → 0，5 ÷ n² → 0',
          txEn: 'As n → ∞, − 2 ÷ n → 0, 1 ÷ n² → 0 and 5 ÷ n² → 0' },
        { mk: 'A1', tx: 'a(n) → (3 − 0 + 0) ÷ (1 + 0) = 3',
          txEn: 'a(n) → (3 − 0 + 0) ÷ (1 + 0) = 3' },
        { mk: 'A1', tx: '故 lim(n→∞) a(n) = 3',
          txEn: 'Hence lim(n→∞) a(n) = 3' }
      ],
      note: '判斷有理式極限時，先比較分子分母的最高次數：次數相同則極限為兩首項係數之比，此題為 3 ÷ 1。',
      noteEn: 'To find the limit of a rational expression, first compare the highest powers of the numerator and the denominator: when they are equal, the limit is the ratio of the leading coefficients, here 3 ÷ 1.'
    },
    {
      id: 'li03',
      sub: SUB.SEQ,
      lv: 2,
      q: '無窮等比數列 2 ÷ 3, 4 ÷ 9, 8 ÷ 27, ⋯ 的通項為 a<sub>n</sub> = (2 ÷ 3)<sup>n</sup>，並設前 n 項和為 S<sub>n</sub>。<br><b>求 lim<sub>n→∞</sub> S<sub>n</sub>。</b>',
      qEn: 'The infinite geometric sequence 2 ÷ 3, 4 ÷ 9, 8 ÷ 27, ⋯ has general term a<sub>n</sub> = (2 ÷ 3)<sup>n</sup>, and S<sub>n</sub> is the sum of the first n terms.<br><b>Find lim<sub>n→∞</sub> S<sub>n</sub>.</b>',
      hint: '無窮等比數列當公比 r 滿足 |r| &lt; 1 時收斂，和為 a ÷ (1 − r)，其中 a 是首項。',
      hintEn: 'An infinite geometric series converges when the common ratio r satisfies |r| &lt; 1, and its sum is a ÷ (1 − r), where a is the first term.',
      answer: { type: 'num', accept: [2, 2.0], display: '2', displayEn: '2' },
      sol: [
        { mk: 'M1', tx: '首項 a = 2 ÷ 3，公比 r = 2 ÷ 3，且 |r| = 2 ÷ 3 &lt; 1，故無窮和存在',
          txEn: 'First term a = 2 ÷ 3, common ratio r = 2 ÷ 3, and |r| = 2 ÷ 3 &lt; 1, so the infinite sum exists' },
        { mk: 'M1', tx: 'S(n) = a × (1 − r^n) ÷ (1 − r) = (2 ÷ 3) × (1 − (2 ÷ 3)^n) ÷ (1 ÷ 3)',
          txEn: 'S(n) = a × (1 − r^n) ÷ (1 − r) = (2 ÷ 3) × (1 − (2 ÷ 3)^n) ÷ (1 ÷ 3)' },
        { mk: 'M1', tx: '因 |2 ÷ 3| &lt; 1，當 n → ∞ 時 (2 ÷ 3)^n → 0',
          txEn: 'Since |2 ÷ 3| &lt; 1, (2 ÷ 3)^n → 0 as n → ∞' },
        { mk: 'A1', tx: 'S(n) → (2 ÷ 3) ÷ (1 ÷ 3) = 2，即 lim(n→∞) S(n) = 2',
          txEn: 'S(n) → (2 ÷ 3) ÷ (1 ÷ 3) = 2, i.e. lim(n→∞) S(n) = 2' }
      ],
      note: '無窮等比數列收斂的條件是 |r| &lt; 1；若 |r| ≥ 1 則前 n 項和發散，不可硬套 a ÷ (1 − r)。',
      noteEn: 'The condition for an infinite geometric series to converge is |r| &lt; 1; if |r| ≥ 1 the sum of the first n terms diverges and a ÷ (1 − r) cannot be used.'
    },
    {
      id: 'li04',
      sub: SUB.SEQ,
      lv: 2,
      q: '數列 {a<sub>n</sub>} 的通項為 a<sub>n</sub> = (3<sup>n+1</sup> + 2<sup>n</sup>) ÷ (3<sup>n</sup> + 5)，n ≥ 1。<br><b>求 lim<sub>n→∞</sub> a<sub>n</sub>。</b>',
      qEn: 'The sequence {a<sub>n</sub>} has general term a<sub>n</sub> = (3<sup>n+1</sup> + 2<sup>n</sup>) ÷ (3<sup>n</sup> + 5), n ≥ 1.<br><b>Find lim<sub>n→∞</sub> a<sub>n</sub>.</b>',
      hint: '分子、分母同除以增長最快的 3<sup>n</sup>，把次方項化成 (2 ÷ 3)<sup>n</sup>；因 |2 ÷ 3| &lt; 1，該項的極限為 0。',
      hintEn: 'Divide the numerator and the denominator by the fastest growing term 3<sup>n</sup> to turn the power term into (2 ÷ 3)<sup>n</sup>; since |2 ÷ 3| &lt; 1, that term tends to 0.',
      answer: { type: 'num', accept: [3, 3.0], display: '3', displayEn: '3' },
      sol: [
        { mk: 'M1', tx: '分子、分母同除以 3^n：a(n) = (3 + (2 ÷ 3)^n) ÷ (1 + 5 ÷ 3^n)',
          txEn: 'Divide the numerator and the denominator by 3^n: a(n) = (3 + (2 ÷ 3)^n) ÷ (1 + 5 ÷ 3^n)' },
        { mk: 'M1', tx: '因 |2 ÷ 3| &lt; 1，當 n → ∞ 時 (2 ÷ 3)^n → 0',
          txEn: 'Since |2 ÷ 3| &lt; 1, (2 ÷ 3)^n → 0 as n → ∞' },
        { mk: 'M1', tx: '又 5 ÷ 3^n → 0，故分子 → 3、分母 → 1',
          txEn: 'Also 5 ÷ 3^n → 0, so the numerator → 3 and the denominator → 1' },
        { mk: 'A1', tx: 'a(n) → (3 + 0) ÷ (1 + 0) = 3',
          txEn: 'a(n) → (3 + 0) ÷ (1 + 0) = 3' },
        { mk: 'A1', tx: '故 lim(n→∞) a(n) = 3',
          txEn: 'Hence lim(n→∞) a(n) = 3' }
      ],
      note: '指數式的極限先比較底數：此題 3^n 增長最快，同時主導分子與分母；同除 3^n 後只剩 (2 ÷ 3)^n 與 5 ÷ 3^n 趨向 0。',
      noteEn: 'For limits with powers, first compare the bases: here 3^n grows fastest and dominates both the numerator and the denominator; after dividing by 3^n only (2 ÷ 3)^n and 5 ÷ 3^n remain, and both tend to 0.'
    },
    {
      id: 'li05',
      sub: SUB.SEQ,
      lv: 3,
      q: '設數列 a<sub>n</sub> = n × (3 − √(9 + 3 ÷ n))，n ≥ 1。<br><b>求 lim<sub>n→∞</sub> a<sub>n</sub>。</b>',
      qEn: 'Let a<sub>n</sub> = n × (3 − √(9 + 3 ÷ n)), n ≥ 1, be a sequence.<br><b>Find lim<sub>n→∞</sub> a<sub>n</sub>.</b>',
      hint: '出現「∞ × 0」型不定式，先分子有理化（乘上 3 + √(9 + 3 ÷ n)），再化簡。',
      hintEn: 'This is an "∞ × 0" indeterminate form, so first rationalise the numerator (multiply by 3 + √(9 + 3 ÷ n)) and then simplify.',
      answer: { type: 'num', accept: [-0.5, -1 / 2], display: '− 1 ÷ 2', displayEn: '− 1 ÷ 2' },
      sol: [
        { mk: 'M1', tx: '有理化：a(n) = n × (9 − (9 + 3 ÷ n)) ÷ (3 + √(9 + 3 ÷ n))',
          txEn: 'Rationalise: a(n) = n × (9 − (9 + 3 ÷ n)) ÷ (3 + √(9 + 3 ÷ n))' },
        { mk: 'M1', tx: '= n × (− 3 ÷ n) ÷ (3 + √(9 + 3 ÷ n)) = − 3 ÷ (3 + √(9 + 3 ÷ n))',
          txEn: '= n × (− 3 ÷ n) ÷ (3 + √(9 + 3 ÷ n)) = − 3 ÷ (3 + √(9 + 3 ÷ n))' },
        { mk: 'M1', tx: '當 n → ∞ 時，3 ÷ n → 0，故 √(9 + 3 ÷ n) → 3',
          txEn: 'As n → ∞, 3 ÷ n → 0, so √(9 + 3 ÷ n) → 3' },
        { mk: 'A1', tx: 'a(n) → − 3 ÷ (3 + 3) = − 1 ÷ 2',
          txEn: 'a(n) → − 3 ÷ (3 + 3) = − 1 ÷ 2' }
      ],
      note: '常見失分：未有理化便寫「∞ × 0，無法判斷」。有理化後 n 會被約去，極限便清楚。',
      noteEn: 'Common loss of marks: writing "∞ × 0, cannot be determined" without rationalising. After rationalising, n is cancelled and the limit becomes clear.'
    },
    {
      id: 'li06',
      sub: SUB.SEQ,
      lv: 2,
      q: '無窮等比數列的首項為 2，公比為 − 1 ÷ 3，設前 n 項和為 S<sub>n</sub>。<br><b>求 lim<sub>n→∞</sub> S<sub>n</sub>。</b>',
      qEn: 'An infinite geometric series has first term 2 and common ratio − 1 ÷ 3, and S<sub>n</sub> is the sum of the first n terms.<br><b>Find lim<sub>n→∞</sub> S<sub>n</sub>.</b>',
      hint: '公比的絕對值 1 ÷ 3 小於 1，故 (− 1 ÷ 3)<sup>n</sup> → 0；代入 S<sub>n</sub> = a(1 − r<sup>n</sup>) ÷ (1 − r)。',
      hintEn: 'The absolute value of the common ratio is 1 ÷ 3, which is less than 1, so (− 1 ÷ 3)<sup>n</sup> → 0; substitute into S<sub>n</sub> = a(1 − r<sup>n</sup>) ÷ (1 − r).',
      answer: { type: 'num', accept: [1.5, 3 / 2], display: '3 ÷ 2', displayEn: '3 ÷ 2' },
      sol: [
        { mk: 'M1', tx: 'S(n) = 2 × (1 − (− 1 ÷ 3)^n) ÷ (1 − (− 1 ÷ 3)) = 2 × (1 − (− 1 ÷ 3)^n) ÷ (4 ÷ 3)',
          txEn: 'S(n) = 2 × (1 − (− 1 ÷ 3)^n) ÷ (1 − (− 1 ÷ 3)) = 2 × (1 − (− 1 ÷ 3)^n) ÷ (4 ÷ 3)' },
        { mk: 'M1', tx: '因 |− 1 ÷ 3| &lt; 1，當 n → ∞ 時 (− 1 ÷ 3)^n → 0',
          txEn: 'Since |− 1 ÷ 3| &lt; 1, (− 1 ÷ 3)^n → 0 as n → ∞' },
        { mk: 'M1', tx: 'S(n) → 2 × (1 − 0) ÷ (4 ÷ 3) = 2 × 3 ÷ 4',
          txEn: 'S(n) → 2 × (1 − 0) ÷ (4 ÷ 3) = 2 × 3 ÷ 4' },
        { mk: 'A1', tx: '故 lim(n→∞) S(n) = 3 ÷ 2',
          txEn: 'Hence lim(n→∞) S(n) = 3 ÷ 2' }
      ],
      note: '公比為負數時數列正負交替，但收斂條件仍是 |r| &lt; 1；答案為正數 3 ÷ 2。',
      noteEn: 'When the common ratio is negative the terms alternate in sign, but the convergence condition is still |r| &lt; 1; the answer here is the positive number 3 ÷ 2.'
    },

    /* ═══════ 5.2 函數的極限（li07–li12）═══════ */
    {
      id: 'li07',
      sub: SUB.FN,
      lv: 1,
      q: '設 f(x) = 3x² + 2x − 6。<br><b>求 lim<sub>x→2</sub> f(x)。</b>',
      qEn: 'Let f(x) = 3x² + 2x − 6.<br><b>Find lim<sub>x→2</sub> f(x).</b>',
      hint: '多項式函數處處連續，直接代入 x = 2 便是極限值。',
      hintEn: 'A polynomial function is continuous everywhere, so the limit is found by direct substitution of x = 2.',
      answer: { type: 'num', accept: [10, 10.0], display: '10', displayEn: '10' },
      sol: [
        { mk: 'M1', tx: '多項式 f 在實數上連續，故 lim(x→2) f(x) = f(2)',
          txEn: 'The polynomial f is continuous on the real numbers, so lim(x→2) f(x) = f(2)' },
        { mk: 'M1', tx: 'f(2) = 3 × 2² + 2 × 2 − 6',
          txEn: 'f(2) = 3 × 2² + 2 × 2 − 6' },
        { mk: 'A1', tx: 'f(2) = 12 + 4 − 6 = 10',
          txEn: 'f(2) = 12 + 4 − 6 = 10' },
        { mk: 'A1', tx: '故 lim(x→2) f(x) = 10',
          txEn: 'Hence lim(x→2) f(x) = 10' }
      ],
      note: '連續函數求極限可直接代入；若代入後分母為 0，才需要另作化簡。',
      noteEn: 'For a continuous function the limit can be found by direct substitution; only when the denominator becomes 0 after substitution is further simplification needed.'
    },
    {
      id: 'li08',
      sub: SUB.FN,
      lv: 1,
      q: '設 g(x) = (2x³ − 3) ÷ (x² + 1)。<br><b>求 lim<sub>x→2</sub> g(x)。</b>',
      qEn: 'Let g(x) = (2x³ − 3) ÷ (x² + 1).<br><b>Find lim<sub>x→2</sub> g(x).</b>',
      hint: '先檢查 x = 2 時分母是否為 0；不為 0 便可直接代入分子、分母。',
      hintEn: 'First check whether the denominator is 0 when x = 2; if it is not, the numerator and the denominator can be evaluated directly.',
      answer: { type: 'num', accept: [13 / 5, 2.6], display: '13 ÷ 5 （= 2.6）', displayEn: '13 ÷ 5  (= 2.6)' },
      sol: [
        { mk: 'M1', tx: '當 x = 2 時分母 = 2² + 1 = 5 ≠ 0，故可直接代入',
          txEn: 'When x = 2 the denominator = 2² + 1 = 5 ≠ 0, so direct substitution is allowed' },
        { mk: 'M1', tx: '分子 = 2 × 2³ − 3 = 16 − 3 = 13，分母 = 2² + 1 = 5',
          txEn: 'Numerator = 2 × 2³ − 3 = 16 − 3 = 13, denominator = 2² + 1 = 5' },
        { mk: 'A1', tx: 'g(2) = 13 ÷ 5 = 2.6',
          txEn: 'g(2) = 13 ÷ 5 = 2.6' },
        { mk: 'A1', tx: '故 lim(x→2) g(x) = 13 ÷ 5',
          txEn: 'Hence lim(x→2) g(x) = 13 ÷ 5' }
      ],
      note: '分母 x² + 1 在 x = 2 時為 4 + 1 = 5（不是 17），答案為 13 ÷ 5；代入前先確認分母不為 0。',
      noteEn: 'The denominator x² + 1 equals 4 + 1 = 5 (not 17) when x = 2, so the answer is 13 ÷ 5; always check that the denominator is not 0 before substituting.'
    },
    {
      id: 'li09',
      sub: SUB.FN,
      lv: 1,
      q: '設 h(x) = (x² − 1) ÷ (x² + 1)。<br><b>求 lim<sub>x→∞</sub> h(x)。</b>',
      qEn: 'Let h(x) = (x² − 1) ÷ (x² + 1).<br><b>Find lim<sub>x→∞</sub> h(x).</b>',
      hint: '分子分母同除以 x²，再令 x → ∞；1 ÷ x² 這一類項的極限為 0。',
      hintEn: 'Divide the numerator and the denominator by x², then let x → ∞; terms such as 1 ÷ x² tend to 0.',
      answer: { type: 'num', accept: [1, 1.0], display: '1', displayEn: '1' },
      sol: [
        { mk: 'M1', tx: '分子、分母同除以 x²：h(x) = (1 − 1 ÷ x²) ÷ (1 + 1 ÷ x²)',
          txEn: 'Divide the numerator and the denominator by x²: h(x) = (1 − 1 ÷ x²) ÷ (1 + 1 ÷ x²)' },
        { mk: 'M1', tx: '當 x → ∞ 時，1 ÷ x² → 0',
          txEn: 'As x → ∞, 1 ÷ x² → 0' },
        { mk: 'A1', tx: 'h(x) → (1 − 0) ÷ (1 + 0) = 1',
          txEn: 'h(x) → (1 − 0) ÷ (1 + 0) = 1' },
        { mk: 'A1', tx: '故 lim(x→∞) h(x) = 1',
          txEn: 'Hence lim(x→∞) h(x) = 1' }
      ],
      note: 'x → ∞ 的有理式極限取決於分子分母最高次數之比；此題次數相同，極限為 1 ÷ 1 = 1。',
      noteEn: 'For a rational expression as x → ∞ the limit depends on the ratio of the highest powers; here the powers are equal, so the limit is 1 ÷ 1 = 1.'
    },
    {
      id: 'li10',
      sub: SUB.FN,
      lv: 2,
      q: '<b>求 lim<sub>x→∞</sub> (1 + 1 ÷ x)<sup>x</sup>。</b>',
      qEn: '<b>Find lim<sub>x→∞</sub> (1 + 1 ÷ x)<sup>x</sup>.</b>',
      hint: '令 u = 1 ÷ x，當 x → ∞ 時 u → 0，可化為標準極限 lim<sub>u→0</sub>(1 + u)<sup>1÷u</sup> = e。',
      hintEn: 'Put u = 1 ÷ x; as x → ∞, u → 0, and the expression becomes the standard limit lim<sub>u→0</sub>(1 + u)<sup>1÷u</sup> = e.',
      answer: { type: 'num', accept: [Math.E, 2.7182818], display: 'e （≈ 2.71828）', displayEn: 'e  (≈ 2.71828)' },
      sol: [
        { mk: 'M1', tx: '令 u = 1 ÷ x，當 x → ∞ 時 u → 0+，且 x = 1 ÷ u',
          txEn: 'Let u = 1 ÷ x; as x → ∞, u → 0+ and x = 1 ÷ u' },
        { mk: 'M1', tx: '(1 + 1 ÷ x)^x = (1 + u)^(1 ÷ u)',
          txEn: '(1 + 1 ÷ x)^x = (1 + u)^(1 ÷ u)' },
        { mk: 'A1', tx: '這是標準極限形式，lim(u→0) (1 + u)^(1 ÷ u) = e',
          txEn: 'This is the standard limit form, lim(u→0) (1 + u)^(1 ÷ u) = e' },
        { mk: 'A1', tx: '故 lim(x→∞) (1 + 1 ÷ x)^x = e （≈ 2.71828）',
          txEn: 'Hence lim(x→∞) (1 + 1 ÷ x)^x = e  (≈ 2.71828)' }
      ],
      note: '這是 e 的定義式之一，答案須寫 e 而非近似值 2.718；計算題不可把 e 當成變數。',
      noteEn: 'This is one of the definitions of e; the answer must be written as e rather than the approximation 2.718, and e must not be treated as a variable in a computation.'
    },
    {
      id: 'li11',
      sub: SUB.FN,
      lv: 2,
      q: '<b>求 lim<sub>x→0</sub> (√(4 + x) − 2) ÷ x。</b>',
      qEn: '<b>Find lim<sub>x→0</sub> (√(4 + x) − 2) ÷ x.</b>',
      hint: '代入 x = 0 得 0 ÷ 0 型不定式，先分子有理化（乘上 √(4 + x) + 2）。',
      hintEn: 'Substituting x = 0 gives the indeterminate form 0 ÷ 0, so first rationalise the numerator (multiply by √(4 + x) + 2).',
      answer: { type: 'num', accept: [1 / 4, 0.25], display: '1 ÷ 4', displayEn: '1 ÷ 4' },
      sol: [
        { mk: 'M1', tx: '代入 x = 0 得 0 ÷ 0，屬不定式，故分子有理化',
          txEn: 'Substituting x = 0 gives 0 ÷ 0, an indeterminate form, so rationalise the numerator' },
        { mk: 'M1', tx: '分子、分母同乘 (√(4 + x) + 2)：原式 = ((4 + x) − 4) ÷ (x(√(4 + x) + 2))',
          txEn: 'Multiply the numerator and the denominator by (√(4 + x) + 2): the expression = ((4 + x) − 4) ÷ (x(√(4 + x) + 2))' },
        { mk: 'M1', tx: '= x ÷ (x(√(4 + x) + 2)) = 1 ÷ (√(4 + x) + 2)',
          txEn: '= x ÷ (x(√(4 + x) + 2)) = 1 ÷ (√(4 + x) + 2)' },
        { mk: 'A1', tx: '當 x → 0 時，√(4 + x) + 2 → 4，故極限 = 1 ÷ 4',
          txEn: 'As x → 0, √(4 + x) + 2 → 4, so the limit = 1 ÷ 4' }
      ],
      note: '有理化後必須約去 x 才能代入；直接寫「0 ÷ 0」不得分。',
      noteEn: 'After rationalising, x must be cancelled before substituting; writing only "0 ÷ 0" earns no marks.'
    },
    {
      id: 'li12',
      sub: SUB.FN,
      lv: 1,
      q: '設 f(x) = 8 ÷ 2<sup>x</sup>。<br><b>求 lim<sub>x→∞</sub> f(x)。</b>',
      qEn: 'Let f(x) = 8 ÷ 2<sup>x</sup>.<br><b>Find lim<sub>x→∞</sub> f(x).</b>',
      hint: '把 8 ÷ 2<sup>x</sup> 寫成 8 × (1 ÷ 2)<sup>x</sup>，再利用底數小於 1 的指數函數趨向 0。',
      hintEn: 'Write 8 ÷ 2<sup>x</sup> as 8 × (1 ÷ 2)<sup>x</sup>, then use the fact that an exponential function with base less than 1 tends to 0.',
      answer: { type: 'num', accept: [0, 0.0], display: '0', displayEn: '0' },
      sol: [
        { mk: 'M1', tx: 'f(x) = 8 ÷ 2^x = 8 × (1 ÷ 2)^x',
          txEn: 'f(x) = 8 ÷ 2^x = 8 × (1 ÷ 2)^x' },
        { mk: 'M1', tx: '因 0 &lt; 1 ÷ 2 &lt; 1，當 x → ∞ 時 (1 ÷ 2)^x → 0',
          txEn: 'Since 0 &lt; 1 ÷ 2 &lt; 1, (1 ÷ 2)^x → 0 as x → ∞' },
        { mk: 'A1', tx: '故 f(x) → 8 × 0 = 0',
          txEn: 'So f(x) → 8 × 0 = 0' },
        { mk: 'A1', tx: '即 lim(x→∞) f(x) = 0，圖像以 x 軸為水平漸近線',
          txEn: 'That is, lim(x→∞) f(x) = 0, and the graph has the x-axis as a horizontal asymptote' }
      ],
      note: '分子為常數而分母指數增長時，極限為 0；這與 x → − ∞ 時趨向 ∞ 的情況不同，須看清趨向方向。',
      noteEn: 'When the numerator is a constant and the denominator grows exponentially the limit is 0; this differs from the behaviour as x → − ∞, so read the direction of the limit carefully.'
    },

    /* ═══════ 5.3 極限的運算與 0/0 型不定式（li13–li18）═══════ */
    {
      id: 'li13',
      sub: SUB.ALG,
      lv: 1,
      q: '設分段函數 f(x) = 4x − 1（當 x ≠ 1）及 f(1) = 7。<br><b>求 lim<sub>x→1</sub> f(x)。</b>',
      qEn: 'Let f(x) = 4x − 1 for x ≠ 1 and f(1) = 7.<br><b>Find lim<sub>x→1</sub> f(x).</b>',
      hint: '函數在 x = 1 的值不影響極限；當 x 靠近 1 但不等於 1 時，公式為 4x − 1。',
      hintEn: 'The value of the function at x = 1 does not affect the limit; when x is close to 1 but not equal to 1, the rule is 4x − 1.',
      answer: { type: 'num', accept: [3, 3.0], display: '3', displayEn: '3' },
      sol: [
        { mk: 'M1', tx: '極限只考慮 x 靠近 1（x ≠ 1）時的行為，故使用 x ≠ 1 的公式 4x − 1',
          txEn: 'A limit considers only the behaviour as x approaches 1 (x ≠ 1), so the rule 4x − 1 for x ≠ 1 is used' },
        { mk: 'M1', tx: 'lim(x→1) (4x − 1) = 4 × 1 − 1',
          txEn: 'lim(x→1) (4x − 1) = 4 × 1 − 1' },
        { mk: 'A1', tx: '= 3',
          txEn: '= 3' },
        { mk: 'A1', tx: '故 lim(x→1) f(x) = 3；注意 f(1) = 7 ≠ 3，函數在 x = 1 不連續',
          txEn: 'Hence lim(x→1) f(x) = 3; note that f(1) = 7 ≠ 3, so the function is not continuous at x = 1' }
      ],
      note: '常見失分：把 f(1) = 7 當作極限值。極限與函數值可以不同，這正是連續性的討論起點。',
      noteEn: 'Common loss of marks: taking f(1) = 7 as the limit. A limit and the value of the function may differ, and this is exactly where the discussion of continuity begins.'
    },
    {
      id: 'li14',
      sub: SUB.ALG,
      lv: 2,
      q: '<b>求 lim<sub>x→2</sub> (x³ − 8) ÷ (x − 2)。</b>',
      qEn: '<b>Find lim<sub>x→2</sub> (x³ − 8) ÷ (x − 2).</b>',
      hint: '代入 x = 2 得 0 ÷ 0，把分子用立方差公式 x³ − a³ = (x − a)(x² + ax + a²) 因式分解，再約去 (x − 2)。',
      hintEn: 'Substituting x = 2 gives 0 ÷ 0, so factorise the numerator by the difference of cubes x³ − a³ = (x − a)(x² + ax + a²), then cancel (x − 2).',
      answer: { type: 'num', accept: [12, 12.0], display: '12', displayEn: '12' },
      sol: [
        { mk: 'M1', tx: '代入 x = 2 得 0 ÷ 0，屬不定式，故先因式分解',
          txEn: 'Substituting x = 2 gives 0 ÷ 0, an indeterminate form, so factorise first' },
        { mk: 'M1', tx: '立方差：x³ − 8 = x³ − 2³ = (x − 2)(x² + 2x + 4)',
          txEn: 'Difference of cubes: x³ − 8 = x³ − 2³ = (x − 2)(x² + 2x + 4)' },
        { mk: 'M1', tx: '約去公因式 (x − 2)：原式 = x² + 2x + 4（x ≠ 2）',
          txEn: 'Cancel the common factor (x − 2): the expression = x² + 2x + 4 (x ≠ 2)' },
        { mk: 'A1', tx: '當 x → 2 時，= 4 + 4 + 4 = 12',
          txEn: 'As x → 2, = 4 + 4 + 4 = 12' },
        { mk: 'A1', tx: '故 lim(x→2) (x³ − 8) ÷ (x − 2) = 12',
          txEn: 'Hence lim(x→2) (x³ − 8) ÷ (x − 2) = 12' }
      ],
      note: '立方差公式的係數容易寫錯：x³ − 8 分解後是 (x − 2)(x² + 2x + 4)，中間項為 + 2x 而非 − 2x。',
      noteEn: 'The coefficients in the difference of cubes are easily miswritten: x³ − 8 factorises as (x − 2)(x² + 2x + 4), with the middle term + 2x and not − 2x.'
    },
    {
      id: 'li15',
      sub: SUB.ALG,
      lv: 1,
      q: '<b>求 lim<sub>x→0</sub> tan(π ÷ 4 + x)。</b>',
      qEn: '<b>Find lim<sub>x→0</sub> tan(π ÷ 4 + x).</b>',
      hint: 'tan 在 π ÷ 4 附近連續，可直接代入；結果用 tan(π ÷ 4) 的已知值。',
      hintEn: 'tan is continuous near π ÷ 4, so direct substitution is possible; use the known value of tan(π ÷ 4).',
      answer: { type: 'num', accept: [1, 1.0], display: '1', displayEn: '1' },
      sol: [
        { mk: 'M1', tx: 'tan 在 x = 0 的鄰域連續，故 lim(x→0) tan(π ÷ 4 + x) = tan(π ÷ 4)',
          txEn: 'tan is continuous in a neighbourhood of x = 0, so lim(x→0) tan(π ÷ 4 + x) = tan(π ÷ 4)' },
        { mk: 'M1', tx: 'tan(π ÷ 4) = sin(π ÷ 4) ÷ cos(π ÷ 4) = (√2 ÷ 2) ÷ (√2 ÷ 2)',
          txEn: 'tan(π ÷ 4) = sin(π ÷ 4) ÷ cos(π ÷ 4) = (√2 ÷ 2) ÷ (√2 ÷ 2)' },
        { mk: 'A1', tx: '= 1',
          txEn: '= 1' },
        { mk: 'A1', tx: '故 lim(x→0) tan(π ÷ 4 + x) = 1',
          txEn: 'Hence lim(x→0) tan(π ÷ 4 + x) = 1' }
      ],
      note: '若用複角公式 tan(A + B) 展開亦可，但代入連續點最快；留意 π ÷ 4 是弧度而非角度。',
      noteEn: 'Expanding with the compound angle formula tan(A + B) also works, but substituting at a point of continuity is quickest; note that π ÷ 4 is in radians, not degrees.'
    },
    {
      id: 'li16',
      sub: SUB.ALG,
      lv: 2,
      q: '<b>求 lim<sub>x→2</sub> (x³ − 8) ÷ (x² − 4)。</b>',
      qEn: '<b>Find lim<sub>x→2</sub> (x³ − 8) ÷ (x² − 4).</b>',
      hint: '代入 x = 2 得 0 ÷ 0，把分子用立方差、分母用平方差因式分解，再約去 (x − 2)。',
      hintEn: 'Substituting x = 2 gives 0 ÷ 0, so factorise the numerator by the difference of cubes and the denominator by the difference of squares, then cancel (x − 2).',
      answer: { type: 'num', accept: [3, 3.0], display: '3', displayEn: '3' },
      sol: [
        { mk: 'M1', tx: '代入 x = 2 得 0 ÷ 0，故因式分解：x³ − 8 = (x − 2)(x² + 2x + 4)',
          txEn: 'Substituting x = 2 gives 0 ÷ 0, so factorise: x³ − 8 = (x − 2)(x² + 2x + 4)' },
        { mk: 'M1', tx: '分母 x² − 4 = (x − 2)(x + 2)',
          txEn: 'Denominator x² − 4 = (x − 2)(x + 2)' },
        { mk: 'M1', tx: '約去公因式 (x − 2)：原式 = (x² + 2x + 4) ÷ (x + 2)（x ≠ 2）',
          txEn: 'Cancel the common factor (x − 2): the expression = (x² + 2x + 4) ÷ (x + 2) (x ≠ 2)' },
        { mk: 'A1', tx: '當 x → 2 時，= (4 + 4 + 4) ÷ (2 + 2) = 12 ÷ 4 = 3',
          txEn: 'As x → 2, = (4 + 4 + 4) ÷ (2 + 2) = 12 ÷ 4 = 3' }
      ],
      note: '約去 (x − 2) 是合法的，因為極限過程要求 x ≠ 2；但必須明確指出這一步。',
      noteEn: 'Cancelling (x − 2) is valid because the limit process requires x ≠ 2, but this step must be stated explicitly.'
    },
    {
      id: 'li17',
      sub: SUB.ALG,
      lv: 3,
      q: '<b>求 lim<sub>x→3</sub> (2 − √(x + 1)) ÷ (x − 3)。</b>',
      qEn: '<b>Find lim<sub>x→3</sub> (2 − √(x + 1)) ÷ (x − 3).</b>',
      hint: '代入得 0 ÷ 0，分子有理化：乘上 2 + √(x + 1)，會出現平方差 (4 − (x + 1))。',
      hintEn: 'Substitution gives 0 ÷ 0, so rationalise the numerator by multiplying by 2 + √(x + 1), which produces the difference of squares (4 − (x + 1)).',
      answer: { type: 'num', accept: [-1 / 4, -0.25], display: '− 1 ÷ 4', displayEn: '− 1 ÷ 4' },
      sol: [
        { mk: 'M1', tx: '代入 x = 3 得 0 ÷ 0，故分子、分母同乘 (2 + √(x + 1))',
          txEn: 'Substituting x = 3 gives 0 ÷ 0, so multiply the numerator and the denominator by (2 + √(x + 1))' },
        { mk: 'M1', tx: '分子 = 4 − (x + 1) = 3 − x = − (x − 3)',
          txEn: 'Numerator = 4 − (x + 1) = 3 − x = − (x − 3)' },
        { mk: 'M1', tx: '原式 = − (x − 3) ÷ ((x − 3)(2 + √(x + 1))) = − 1 ÷ (2 + √(x + 1))',
          txEn: 'The expression = − (x − 3) ÷ ((x − 3)(2 + √(x + 1))) = − 1 ÷ (2 + √(x + 1))' },
        { mk: 'A1', tx: '當 x → 3 時，= − 1 ÷ (2 + 2) = − 1 ÷ 4',
          txEn: 'As x → 3, = − 1 ÷ (2 + 2) = − 1 ÷ 4' }
      ],
      note: '常見失分：符號處理錯誤。4 − (x + 1) = 3 − x = − (x − 3)，負號很容易漏掉。',
      noteEn: 'Common loss of marks: a sign error. 4 − (x + 1) = 3 − x = − (x − 3), and the minus sign is easily missed.'
    },
    {
      id: 'li18',
      sub: SUB.ALG,
      lv: 3,
      q: '<b>求 lim<sub>x→0</sub> (1 + 2x)<sup>3÷x</sup>。</b>',
      qEn: '<b>Find lim<sub>x→0</sub> (1 + 2x)<sup>3÷x</sup>.</b>',
      hint: '把指數配成 1 ÷ (2x)：先寫成 [(1 + 2x)<sup>1÷(2x)</sup>]<sup>6</sup>，再套標準極限。',
      hintEn: 'Adjust the exponent to 1 ÷ (2x): first write the expression as [(1 + 2x)<sup>1÷(2x)</sup>]<sup>6</sup>, then apply the standard limit.',
      answer: { type: 'num', accept: [Math.pow(Math.E, 6), 403.4287935], display: 'e<sup>6</sup> （≈ 403.43）', displayEn: 'e<sup>6</sup>  (≈ 403.43)' },
      sol: [
        { mk: 'M1', tx: '令 u = 2x，當 x → 0 時 u → 0，且 3 ÷ x = 6 ÷ (2x) = 6 ÷ u',
          txEn: 'Let u = 2x; as x → 0, u → 0, and 3 ÷ x = 6 ÷ (2x) = 6 ÷ u' },
        { mk: 'M1', tx: '(1 + 2x)^(3 ÷ x) = (1 + u)^(6 ÷ u) = [(1 + u)^(1 ÷ u)]^6',
          txEn: '(1 + 2x)^(3 ÷ x) = (1 + u)^(6 ÷ u) = [(1 + u)^(1 ÷ u)]^6' },
        { mk: 'A1', tx: '由標準極限 lim(u→0) (1 + u)^(1 ÷ u) = e，得極限 = e^6',
          txEn: 'By the standard limit lim(u→0) (1 + u)^(1 ÷ u) = e, the limit = e^6' },
        { mk: 'A1', tx: '故 lim(x→0) (1 + 2x)^(3 ÷ x) = e^6 （≈ 403.43）',
          txEn: 'Hence lim(x→0) (1 + 2x)^(3 ÷ x) = e^6  (≈ 403.43)' }
      ],
      note: '關鍵是把指數寫成「1 ÷ (基底中的變數部分)」再調整外層次方；直接寫 1^∞ = 1 是嚴重錯誤。',
      noteEn: 'The key is to write the exponent as "1 ÷ (the variable part of the base)" and then adjust the outer power; writing 1^∞ = 1 directly is a serious error.'
    },

    /* ═══════ 5.4 導數的第一原理（定義）（li19–li24）═══════ */
    {
      id: 'li19',
      sub: SUB.FP,
      lv: 1,
      q: '設 f(x) = x² + 3x，並設 f′(2) = lim<sub>h→0</sub> (f(2 + h) − f(2)) ÷ h。<br><b>求 f′(2)。</b>',
      qEn: 'Let f(x) = x² + 3x and let f′(2) = lim<sub>h→0</sub> (f(2 + h) − f(2)) ÷ h.<br><b>Find f′(2).</b>',
      hint: '由第一原理展開 f(2 + h) = (2 + h)² + 3(2 + h)，減去 f(2) = 10 後約去 h。',
      hintEn: 'From first principles, expand f(2 + h) = (2 + h)² + 3(2 + h), subtract f(2) = 10 and then cancel h.',
      answer: { type: 'num', accept: [7, 7.0], display: '7', displayEn: '7' },
      sol: [
        { mk: 'M1', tx: 'f(2) = 2² + 3 × 2 = 4 + 6 = 10',
          txEn: 'f(2) = 2² + 3 × 2 = 4 + 6 = 10' },
        { mk: 'M1', tx: 'f(2 + h) = (2 + h)² + 3(2 + h) = 4 + 4h + h² + 6 + 3h = 10 + 7h + h²',
          txEn: 'f(2 + h) = (2 + h)² + 3(2 + h) = 4 + 4h + h² + 6 + 3h = 10 + 7h + h²' },
        { mk: 'M1', tx: '(f(2 + h) − f(2)) ÷ h = (7h + h²) ÷ h = 7 + h（h ≠ 0）',
          txEn: '(f(2 + h) − f(2)) ÷ h = (7h + h²) ÷ h = 7 + h (h ≠ 0)' },
        { mk: 'A1', tx: '取極限 h → 0：f′(2) = 7',
          txEn: 'Taking the limit as h → 0: f′(2) = 7' },
        { mk: 'A1', tx: '亦可驗算：f′(x) = 2x + 3，故 f′(2) = 7',
          txEn: 'Check: f′(x) = 2x + 3, so f′(2) = 7' }
      ],
      note: '必須先約去 h 才可令 h → 0；直接寫「h ÷ h = 1」或代入 h = 0 都是失分位。',
      noteEn: 'h must be cancelled before letting h → 0; writing "h ÷ h = 1" or substituting h = 0 directly loses marks.'
    },
    {
      id: 'li20',
      sub: SUB.FP,
      lv: 3,
      q: '設 f(x) = 1 ÷ (x + 1)，x ≠ − 1。<br><b>用導數的第一原理求 f′(1)。</b>',
      qEn: 'Let f(x) = 1 ÷ (x + 1), x ≠ − 1.<br><b>Find f′(1) from first principles.</b>',
      hint: '先通分：(f(1 + h) − f(1)) ÷ h = [1 ÷ (2 + h) − 1 ÷ 2] ÷ h，通分後分子為 − h。',
      hintEn: 'Put the terms over a common denominator first: (f(1 + h) − f(1)) ÷ h = [1 ÷ (2 + h) − 1 ÷ 2] ÷ h, and after combining the numerator is − h.',
      answer: { type: 'num', accept: [-1 / 4, -0.25], display: '− 1 ÷ 4', displayEn: '− 1 ÷ 4' },
      sol: [
        { mk: 'M1', tx: 'f(1) = 1 ÷ 2，f(1 + h) = 1 ÷ (2 + h)',
          txEn: 'f(1) = 1 ÷ 2, f(1 + h) = 1 ÷ (2 + h)' },
        { mk: 'M1', tx: '差商 = [1 ÷ (2 + h) − 1 ÷ 2] ÷ h',
          txEn: 'Difference quotient = [1 ÷ (2 + h) − 1 ÷ 2] ÷ h' },
        { mk: 'M1', tx: '通分 = [(2 − (2 + h)) ÷ (2(2 + h))] ÷ h = [− h ÷ (2(2 + h))] ÷ h = − 1 ÷ (2(2 + h))',
          txEn: 'Combining fractions = [(2 − (2 + h)) ÷ (2(2 + h))] ÷ h = [− h ÷ (2(2 + h))] ÷ h = − 1 ÷ (2(2 + h))' },
        { mk: 'A1', tx: '取極限 h → 0：f′(1) = − 1 ÷ (2 × 2) = − 1 ÷ 4',
          txEn: 'Taking the limit as h → 0: f′(1) = − 1 ÷ (2 × 2) = − 1 ÷ 4' }
      ],
      note: '分式函數以第一原理求導時，通分與約去 h 是關鍵；亦可用商法則驗算 f′(x) = − 1 ÷ (x + 1)²。',
      noteEn: 'For a rational function, using first principles depends on combining fractions and cancelling h; the quotient rule gives f′(x) = − 1 ÷ (x + 1)² as a check.'
    },
    {
      id: 'li21',
      sub: SUB.FP,
      lv: 3,
      q: '設 f(x) = √x，x &gt; 0。<br><b>用導數的第一原理求 f′(9)。</b>',
      qEn: 'Let f(x) = √x, x &gt; 0.<br><b>Find f′(9) from first principles.</b>',
      hint: '差商分子為 √(9 + h) − 3，有理化時乘上 √(9 + h) + 3，分子得 h。',
      hintEn: 'The numerator of the difference quotient is √(9 + h) − 3; rationalise by multiplying by √(9 + h) + 3 to obtain h in the numerator.',
      answer: { type: 'num', accept: [1 / 6, 0.1666667], display: '1 ÷ 6 （≈ 0.167）', displayEn: '1 ÷ 6  (≈ 0.167)' },
      sol: [
        { mk: 'M1', tx: 'f(9) = 3，f(9 + h) = √(9 + h)',
          txEn: 'f(9) = 3, f(9 + h) = √(9 + h)' },
        { mk: 'M1', tx: '差商 = (√(9 + h) − 3) ÷ h',
          txEn: 'Difference quotient = (√(9 + h) − 3) ÷ h' },
        { mk: 'M1', tx: '分子有理化：= [(9 + h) − 9] ÷ [h(√(9 + h) + 3)] = h ÷ [h(√(9 + h) + 3)] = 1 ÷ (√(9 + h) + 3)',
          txEn: 'Rationalise the numerator: = [(9 + h) − 9] ÷ [h(√(9 + h) + 3)] = h ÷ [h(√(9 + h) + 3)] = 1 ÷ (√(9 + h) + 3)' },
        { mk: 'A1', tx: '取極限 h → 0：f′(9) = 1 ÷ (3 + 3) = 1 ÷ 6',
          txEn: 'Taking the limit as h → 0: f′(9) = 1 ÷ (3 + 3) = 1 ÷ 6' }
      ],
      note: '結果與公式 f′(x) = 1 ÷ (2√x) 一致（x = 9 時得 1 ÷ 6）；這是很好的驗算方法。',
      noteEn: 'The result agrees with the formula f′(x) = 1 ÷ (2√x) (which gives 1 ÷ 6 at x = 9); this is a good way to check the answer.'
    },
    {
      id: 'li22',
      sub: SUB.FP,
      lv: 3,
      q: '設 f(x) = cos x。<br><b>用導數的第一原理求 f′(π ÷ 2)。</b>',
      qEn: 'Let f(x) = cos x.<br><b>Find f′(π ÷ 2) from first principles.</b>',
      hint: '用 cos A − cos B = − 2 sin[(A + B) ÷ 2] sin[(A − B) ÷ 2]，再套 lim<sub>t→0</sub> (sin t) ÷ t = 1。',
      hintEn: 'Use cos A − cos B = − 2 sin[(A + B) ÷ 2] sin[(A − B) ÷ 2], then apply lim<sub>t→0</sub> (sin t) ÷ t = 1.',
      answer: { type: 'num', accept: [-1, -1.0], display: '− 1', displayEn: '− 1' },
      sol: [
        { mk: 'M1', tx: '差商 = (cos(π ÷ 2 + h) − cos(π ÷ 2)) ÷ h',
          txEn: 'Difference quotient = (cos(π ÷ 2 + h) − cos(π ÷ 2)) ÷ h' },
        { mk: 'M1', tx: 'cos(π ÷ 2) = 0，且用和差化積：cos(π ÷ 2 + h) − 0 = − sin h',
          txEn: 'cos(π ÷ 2) = 0, and using the sum-to-product formula: cos(π ÷ 2 + h) − 0 = − sin h' },
        { mk: 'M1', tx: '故差商 = − (sin h) ÷ h；當 h → 0 時，(sin h) ÷ h → 1',
          txEn: 'So the difference quotient = − (sin h) ÷ h; as h → 0, (sin h) ÷ h → 1' },
        { mk: 'A1', tx: 'f′(π ÷ 2) = − 1',
          txEn: 'f′(π ÷ 2) = − 1' }
      ],
      note: '已知 (cos x)′ = − sin x，代入 x = π ÷ 2 得 − 1；第一原理作答時仍須寫出 (sin h) ÷ h → 1 這一步。',
      noteEn: 'It is known that (cos x)′ = − sin x, which gives − 1 at x = π ÷ 2; when answering from first principles the step (sin h) ÷ h → 1 must still be shown.'
    },
    {
      id: 'li23',
      sub: SUB.FP,
      lv: 1,
      q: '設 f(x) = x² + 2x + 1。<br><b>用導數的第一原理求 f′(1)。</b>',
      qEn: 'Let f(x) = x² + 2x + 1.<br><b>Find f′(1) from first principles.</b>',
      hint: '先算 f(1 + h) − f(1)，展開後每項都含 h，約去 h 再令 h → 0。',
      hintEn: 'First work out f(1 + h) − f(1); after expansion every term contains h, so cancel h and then let h → 0.',
      answer: { type: 'num', accept: [4, 4.0], display: '4', displayEn: '4' },
      sol: [
        { mk: 'M1', tx: 'f(1) = 1 + 2 + 1 = 4',
          txEn: 'f(1) = 1 + 2 + 1 = 4' },
        { mk: 'M1', tx: 'f(1 + h) = (1 + h)² + 2(1 + h) + 1 = 1 + 2h + h² + 2 + 2h + 1 = 4 + 4h + h²',
          txEn: 'f(1 + h) = (1 + h)² + 2(1 + h) + 1 = 1 + 2h + h² + 2 + 2h + 1 = 4 + 4h + h²' },
        { mk: 'M1', tx: '差商 = (4h + h²) ÷ h = 4 + h（h ≠ 0）',
          txEn: 'Difference quotient = (4h + h²) ÷ h = 4 + h (h ≠ 0)' },
        { mk: 'A1', tx: '取極限 h → 0：f′(1) = 4',
          txEn: 'Taking the limit as h → 0: f′(1) = 4' }
      ],
      note: '注意 f(x) = (x + 1)²，理論上 f′(x) = 2(x + 1)；用第一原理作答仍須完整展開，不可只寫答案。',
      noteEn: 'Note that f(x) = (x + 1)², so in theory f′(x) = 2(x + 1); a first-principles answer must still show the full expansion, not just the answer.'
    },
    {
      id: 'li24',
      sub: SUB.FP,
      lv: 2,
      q: '函數 f 由 f(x) = x² + 2x 定義。<br><b>求 lim<sub>h→0</sub> (f(1 + h) − f(1)) ÷ h。</b>',
      qEn: 'The function f is defined by f(x) = x² + 2x.<br><b>Find lim<sub>h→0</sub> (f(1 + h) − f(1)) ÷ h.</b>',
      hint: '這個極限其實就是 f′(1)；先算 f(1 + h) − f(1) = 4h + h²，再約去 h。',
      hintEn: 'This limit is in fact f′(1); first compute f(1 + h) − f(1) = 4h + h², then cancel h.',
      answer: { type: 'num', accept: [4, 4.0], display: '4', displayEn: '4' },
      sol: [
        { mk: 'M1', tx: 'f(1) = 1 + 2 = 3',
          txEn: 'f(1) = 1 + 2 = 3' },
        { mk: 'M1', tx: 'f(1 + h) = (1 + h)² + 2(1 + h) = 1 + 2h + h² + 2 + 2h = 3 + 4h + h²',
          txEn: 'f(1 + h) = (1 + h)² + 2(1 + h) = 1 + 2h + h² + 2 + 2h = 3 + 4h + h²' },
        { mk: 'M1', tx: '差商 = (4h + h²) ÷ h = 4 + h',
          txEn: 'Difference quotient = (4h + h²) ÷ h = 4 + h' },
        { mk: 'A1', tx: '取極限 h → 0，得 4，即 f′(1) = 4',
          txEn: 'Taking the limit as h → 0 gives 4, i.e. f′(1) = 4' }
      ],
      note: '此極限即函數在 x = 1 的瞬時變率（導數）；寫出「差商 → 4」的過程比只寫 4 更完整。',
      noteEn: 'This limit is the instantaneous rate of change (the derivative) of the function at x = 1; showing the difference quotient tending to 4 is more complete than writing 4 alone.'
    },

    /* ═══════ 5.5 連續性與可導性（li25–li30）═══════ */
    {
      id: 'li25',
      sub: SUB.CONT,
      lv: 3,
      q: '設 f(x) = (sin 3x) ÷ x（當 x ≠ 0）及 f(0) = 1。<br><b>求 lim<sub>x→0</sub> f(x)，並判斷 f 在 x = 0 是否連續。</b>',
      qEn: 'Let f(x) = (sin 3x) ÷ x for x ≠ 0 and f(0) = 1.<br><b>Find lim<sub>x→0</sub> f(x), and determine whether f is continuous at x = 0.</b>',
      hint: '把式子寫成 3 × (sin 3x) ÷ (3x)，利用 lim<sub>t→0</sub> (sin t) ÷ t = 1，再與 f(0) 比較。',
      hintEn: 'Write the expression as 3 × (sin 3x) ÷ (3x), use lim<sub>t→0</sub> (sin t) ÷ t = 1, then compare with f(0).',
      answer: { type: 'num', accept: [3, 3.0], display: '極限 = 3，但 f(0) = 1，故 f 在 x = 0 不連續', displayEn: 'limit = 3, but f(0) = 1, so f is not continuous at x = 0' },
      sol: [
        { mk: 'M1', tx: '令 t = 3x，當 x → 0 時 t → 0，且 x = t ÷ 3',
          txEn: 'Let t = 3x; as x → 0, t → 0, and x = t ÷ 3' },
        { mk: 'M1', tx: '(sin 3x) ÷ x = 3 × (sin 3x) ÷ (3x) = 3 × (sin t) ÷ t',
          txEn: '(sin 3x) ÷ x = 3 × (sin 3x) ÷ (3x) = 3 × (sin t) ÷ t' },
        { mk: 'A1', tx: '由標準極限 (sin t) ÷ t → 1，得 lim(x→0) f(x) = 3 × 1 = 3',
          txEn: 'By the standard limit (sin t) ÷ t → 1, lim(x→0) f(x) = 3 × 1 = 3' },
        { mk: 'A1', tx: '但 f(0) = 1 ≠ 3，即 lim(x→0) f(x) ≠ f(0)',
          txEn: 'But f(0) = 1 ≠ 3, i.e. lim(x→0) f(x) ≠ f(0)' },
        { mk: 'A1', tx: '故 f 在 x = 0 不連續（此為可去不連續，只要改設 f(0) = 3 便可連續）',
          txEn: 'Hence f is not continuous at x = 0 (this is a removable discontinuity: setting f(0) = 3 would make it continuous)' }
      ],
      note: '連續須同時滿足極限存在、函數值存在且兩者相等；此題極限為 3 而 f(0) = 1，故不連續。',
      noteEn: 'Continuity requires the limit to exist, the value of the function to exist and the two to be equal; here the limit is 3 while f(0) = 1, so f is not continuous.'
    },
    {
      id: 'li26',
      sub: SUB.CONT,
      lv: 2,
      q: '設 f(x) = (x² − 1) ÷ (x − 1)（當 x ≠ 1）及 f(1) = 2。<br><b>求 lim<sub>x→1</sub> f(x)，並判斷 f 在 x = 1 是否連續。</b>',
      qEn: 'Let f(x) = (x² − 1) ÷ (x − 1) for x ≠ 1 and f(1) = 2.<br><b>Find lim<sub>x→1</sub> f(x), and determine whether f is continuous at x = 1.</b>',
      hint: '當 x ≠ 1 時把分子因式分解並約去 (x − 1)，再把極限與 f(1) 比較。',
      hintEn: 'For x ≠ 1, factorise the numerator and cancel (x − 1), then compare the limit with f(1).',
      answer: { type: 'num', accept: [2, 2.0], display: '極限 = 2 = f(1)，故 f 在 x = 1 連續', displayEn: 'limit = 2 = f(1), so f is continuous at x = 1' },
      sol: [
        { mk: 'M1', tx: '當 x ≠ 1 時，x² − 1 = (x − 1)(x + 1)',
          txEn: 'For x ≠ 1, x² − 1 = (x − 1)(x + 1)' },
        { mk: 'M1', tx: '故 f(x) = (x − 1)(x + 1) ÷ (x − 1) = x + 1',
          txEn: 'So f(x) = (x − 1)(x + 1) ÷ (x − 1) = x + 1' },
        { mk: 'A1', tx: 'lim(x→1) f(x) = 1 + 1 = 2',
          txEn: 'lim(x→1) f(x) = 1 + 1 = 2' },
        { mk: 'A1', tx: '而 f(1) = 2，極限值等於函數值',
          txEn: 'And f(1) = 2, so the limit equals the value of the function' },
        { mk: 'A1', tx: '故 f 在 x = 1 連續',
          txEn: 'Hence f is continuous at x = 1' }
      ],
      note: '這是可去奇點（可移除的不連續）的典型例子：原式在 x = 1 無定義，但補上 f(1) = 2 後便連續。',
      noteEn: 'This is a typical removable singularity: the expression is undefined at x = 1, but after defining f(1) = 2 the function becomes continuous.'
    },
    {
      id: 'li27',
      sub: SUB.CONT,
      lv: 3,
      q: '設 f(x) = x³。<br><b>用導數的第一原理求 f′(2)，並由此指出 f 在 x = 2 是否可導。</b>',
      qEn: 'Let f(x) = x³.<br><b>Find f′(2) from first principles, and hence state whether f is differentiable at x = 2.</b>',
      hint: '展開 f(2 + h) = (2 + h)³，減去 f(2) = 8 後約去 h，若 h → 0 時差商的極限為有限值，則函數在該點可導。',
      hintEn: 'Expand f(2 + h) = (2 + h)³, subtract f(2) = 8 and cancel h; if the difference quotient tends to a finite value as h → 0, the function is differentiable there.',
      answer: { type: 'num', accept: [12, 12.0], display: 'f′(2) = 12 為有限值，故 f 在 x = 2 可導', displayEn: 'f′(2) = 12 is finite, so f is differentiable at x = 2' },
      sol: [
        { mk: 'M1', tx: 'f(2) = 2³ = 8',
          txEn: 'f(2) = 2³ = 8' },
        { mk: 'M1', tx: 'f(2 + h) = (2 + h)³ = 8 + 12h + 6h² + h³',
          txEn: 'f(2 + h) = (2 + h)³ = 8 + 12h + 6h² + h³' },
        { mk: 'M1', tx: '差商 = (12h + 6h² + h³) ÷ h = 12 + 6h + h²（h ≠ 0），故當 h → 0 時差商趨向 12',
          txEn: 'Difference quotient = (12h + 6h² + h³) ÷ h = 12 + 6h + h² (h ≠ 0), so as h → 0 the difference quotient tends to 12' },
        { mk: 'A1', tx: 'f′(2) = 12 為有限值，故 f 在 x = 2 可導',
          txEn: 'f′(2) = 12 is finite, so f is differentiable at x = 2' },
        { mk: 'A1', tx: '驗算：f′(x) = 3x²，故 f′(2) = 3 × 4 = 12，與第一原理的結果一致',
          txEn: 'Check: f′(x) = 3x², so f′(2) = 3 × 4 = 12, which agrees with the first-principles result' }
      ],
      note: '可導的定義是差商的雙側極限存在且為有限值；立方展開 (2 + h)³ = 8 + 12h + 6h² + h³ 的係數須寫對。',
      noteEn: 'Differentiability means that the two-sided limit of the difference quotient exists and is finite; the coefficients in (2 + h)³ = 8 + 12h + 6h² + h³ must be correct.'
    },
    {
      id: 'li28',
      sub: SUB.CONT,
      lv: 3,
      q: '設 f(x) = x² + 3（當 x &lt; 2）及 f(x) = 2x + 3（當 x ≥ 2）。<br><b>判斷 lim<sub>x→2</sub> f(x) 是否存在；若存在，求其值。</b>',
      qEn: 'Let f(x) = x² + 3 for x &lt; 2 and f(x) = 2x + 3 for x ≥ 2.<br><b>Determine whether lim<sub>x→2</sub> f(x) exists; if it does, find its value.</b>',
      hint: '分別計算左極限（用 x &lt; 2 的公式）與右極限（用 x ≥ 2 的公式），比較兩者是否相等。',
      hintEn: 'Compute the left-hand limit (using the rule for x &lt; 2) and the right-hand limit (using the rule for x ≥ 2) separately, then compare them.',
      answer: { type: 'num', accept: [7, 7.0], display: '左極限 = 右極限 = 7，故極限存在且等於 7', displayEn: 'left-hand limit = right-hand limit = 7, so the limit exists and equals 7' },
      sol: [
        { mk: 'M1', tx: '左極限：lim(x→2−) (x² + 3) = 4 + 3 = 7',
          txEn: 'Left-hand limit: lim(x→2−) (x² + 3) = 4 + 3 = 7' },
        { mk: 'M1', tx: '右極限：lim(x→2+) (2x + 3) = 4 + 3 = 7',
          txEn: 'Right-hand limit: lim(x→2+) (2x + 3) = 4 + 3 = 7' },
        { mk: 'M1', tx: '左右極限相等（皆為 7）',
          txEn: 'The left-hand and right-hand limits are equal (both 7)' },
        { mk: 'A1', tx: '故 lim(x→2) f(x) 存在，且等於 7',
          txEn: 'Hence lim(x→2) f(x) exists and equals 7' },
        { mk: 'A1', tx: '又 f(2) = 2 × 2 + 3 = 7 = 極限值，故 f 在 x = 2 亦連續',
          txEn: 'Also f(2) = 2 × 2 + 3 = 7 = the limit, so f is continuous at x = 2 as well' }
      ],
      note: '分段函數求極限必須檢查左右極限；本題兩者相等，故極限存在，這與「圖像有折角」並不矛盾。',
      noteEn: 'For a piecewise function the one-sided limits must be checked; here they are equal, so the limit exists, which is not contradicted by a corner in the graph.'
    },
    {
      id: 'li29',
      sub: SUB.CONT,
      lv: 2,
      q: '設 f(x) = sin x ÷ x（當 x ≠ 0）及 f(0) = k，其中 k 為常數。<br><b>求使 f 在 x = 0 連續的 k 值。</b>',
      qEn: 'Let f(x) = sin x ÷ x for x ≠ 0 and f(0) = k, where k is a constant.<br><b>Find the value of k for which f is continuous at x = 0.</b>',
      hint: '連續要求 f(0) = lim<sub>x→0</sub> f(x)，而 (sin x) ÷ x 在 x → 0 的標準極限為 1。',
      hintEn: 'Continuity requires f(0) = lim<sub>x→0</sub> f(x), and the standard limit of (sin x) ÷ x as x → 0 is 1.',
      answer: { type: 'numbers', accept: [[1], [1.0]], display: 'k = 1', displayEn: 'k = 1' },
      sol: [
        { mk: 'M1', tx: 'f 在 x = 0 連續 ⇔ lim(x→0) f(x) 存在且等於 f(0)',
          txEn: 'f is continuous at x = 0 ⇔ lim(x→0) f(x) exists and equals f(0)' },
        { mk: 'M1', tx: '當 x ≠ 0 時 f(x) = (sin x) ÷ x，由標準極限 lim(x→0) (sin x) ÷ x = 1',
          txEn: 'For x ≠ 0, f(x) = (sin x) ÷ x, and by the standard limit lim(x→0) (sin x) ÷ x = 1' },
        { mk: 'A1', tx: '故 lim(x→0) f(x) = 1',
          txEn: 'Hence lim(x→0) f(x) = 1' },
        { mk: 'A1', tx: '令 f(0) = k = 1，即 k = 1 時 f 在 x = 0 連續',
          txEn: 'Setting f(0) = k = 1, that is, f is continuous at x = 0 when k = 1' }
      ],
      note: '這是常見的「填補定義使函數連續」題型；切勿答 k = 0，因為 lim (sin x) ÷ x ≠ 0。',
      noteEn: 'This is the common type of question on defining a value to make a function continuous; k = 0 is wrong because lim (sin x) ÷ x ≠ 0.'
    },
    {
      id: 'li30',
      sub: SUB.CONT,
      lv: 3,
      q: '設 f(x) = |x|，已知 f 在 x = 0 連續。<br><b>求 lim<sub>h→0−</sub> (f(0 + h) − f(0)) ÷ h。</b>',
      qEn: 'Let f(x) = |x|, and f is known to be continuous at x = 0.<br><b>Find lim<sub>h→0−</sub> (f(0 + h) − f(0)) ÷ h.</b>',
      hint: '當 h &lt; 0 時 |h| = − h；代入差商化簡後，再取單側極限。',
      hintEn: 'For h &lt; 0, |h| = − h; simplify the difference quotient and then take the one-sided limit.',
      answer: { type: 'num', accept: [-1, -1.0], display: '− 1', displayEn: '− 1' },
      sol: [
        { mk: 'M1', tx: 'f(0) = |0| = 0，故差商 = |h| ÷ h',
          txEn: 'f(0) = |0| = 0, so the difference quotient = |h| ÷ h' },
        { mk: 'M1', tx: '因 h → 0− 即 h 取負值，故 |h| = − h',
          txEn: 'Since h → 0− means h takes negative values, |h| = − h' },
        { mk: 'M1', tx: '差商 = (− h) ÷ h = − 1（對所有 h &lt; 0 皆成立）',
          txEn: 'Difference quotient = (− h) ÷ h = − 1 (true for all h &lt; 0)' },
        { mk: 'A1', tx: '故 lim(h→0−) (f(0 + h) − f(0)) ÷ h = − 1',
          txEn: 'Hence lim(h→0−) (f(0 + h) − f(0)) ÷ h = − 1' },
        { mk: 'A1', tx: '而右差商極限為 + 1，左右不相等，故 f 在 x = 0 連續但不可導',
          txEn: 'The right-hand difference quotient tends to + 1, so the left and right limits differ and f is continuous but not differentiable at x = 0' }
      ],
      note: '連續不一定可導，|x| 在 x = 0 是典型反例：左導數 − 1、右導數 + 1，圖像出現尖角。',
      noteEn: 'Continuity does not imply differentiability: |x| at x = 0 is the classic counterexample, with left derivative − 1 and right derivative + 1, giving a sharp corner in the graph.'
    }

  ];
})(typeof window !== 'undefined' ? window : globalThis);
