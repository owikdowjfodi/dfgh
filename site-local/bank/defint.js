/* bank/defint.js — 定積分及其應用（30 題）*/
(function (root) {
  root.M2Bank = root.M2Bank || {};
  root.M2Bank['defint'] = [
    /* ─────────── 9.1 定積分的定義與性質 ─────────── */
    {
      id: 'de01',
      sub: '9.1 定積分的定義與性質',
      lv: 2,
      q: '把區間 [0, 1] 分成 n 個等長小區間，取每個小區間的右端點為樣本點，得黎曼和<br>Sₙ = (1/n)[(1/n) + (2/n) + ⋯ + (n/n)]。<br><b>求 lim(n→∞) Sₙ 的值（即 ∫₀¹ x dx）。</b>',
      qEn: 'Divide the interval [0, 1] into n sub-intervals of equal length and take the right endpoint of each sub-interval as the sample point, giving the Riemann sum<br>Sₙ = (1/n)[(1/n) + (2/n) + ⋯ + (n/n)].<br><b>Find the value of lim(n→∞) Sₙ (that is, ∫₀¹ x dx).</b>',
      hint: '先化簡 Sₙ = (1/n²)(1 + 2 + ⋯ + n)，再用等差數列求和公式 1 + 2 + ⋯ + n = n(n + 1)/2，最後取極限。',
      hintEn: 'First simplify Sₙ = (1/n²)(1 + 2 + ⋯ + n), then use the arithmetic series formula 1 + 2 + ⋯ + n = n(n + 1)/2, and finally take the limit.',
      answer: { type: 'num', accept: [0.5], display: '1/2（= 0.5）', displayEn: '1/2  (= 0.5)' },
      sol: [
        { mk: 'M1', tx: 'Sₙ = (1/n)[(1/n) + (2/n) + ⋯ + (n/n)] = (1/n²)(1 + 2 + ⋯ + n)', txEn: 'Sₙ = (1/n)[(1/n) + (2/n) + ⋯ + (n/n)] = (1/n²)(1 + 2 + ⋯ + n)' },
        { mk: 'M1', tx: '用等差數列求和：1 + 2 + ⋯ + n = n(n + 1)/2，故 Sₙ = (1/n²) × n(n + 1)/2 = (n + 1)/(2n)', txEn: 'Use the arithmetic series sum: 1 + 2 + ⋯ + n = n(n + 1)/2, so Sₙ = (1/n²) × n(n + 1)/2 = (n + 1)/(2n)' },
        { mk: 'A1', tx: '當 n → ∞ 時，(n + 1)/(2n) = (1 + 1/n)/2 → 1/2', txEn: 'As n → ∞, (n + 1)/(2n) = (1 + 1/n)/2 → 1/2' },
        { mk: 'A1', tx: '結論：lim(n→∞) Sₙ = ∫₀¹ x dx = 1/2。', txEn: 'Conclusion: lim(n→∞) Sₙ = ∫₀¹ x dx = 1/2.' }
      ],
      note: '常見失分：把樣本點取成左端點時和的式子變成 (1/n²)(0 + 1 + ⋯ + n − 1) = (n − 1)/(2n)，雖然極限仍是 1/2，但過程要清楚寫出取的是右端點。',
      noteEn: 'Common loss of marks: taking the sample points as the left endpoints gives the sum (1/n²)(0 + 1 + ⋯ + n − 1) = (n − 1)/(2n); the limit is still 1/2, but the working must clearly state that the right endpoints are used.'
    },
    {
      id: 'de02',
      sub: '9.1 定積分的定義與性質',
      lv: 1,
      q: '已知函數 f 連續，且 ∫₀³ f(x) dx = 5、∫₀⁵ f(x) dx = 12。<br><b>求 ∫₃⁵ f(x) dx 的值。</b>',
      qEn: 'The function f is continuous, and ∫₀³ f(x) dx = 5, ∫₀⁵ f(x) dx = 12.<br><b>Find the value of ∫₃⁵ f(x) dx.</b>',
      hint: '利用定積分的可加性：∫₀⁵ = ∫₀³ + ∫₃⁵，即大區間的積分等於兩段小區間積分之和。',
      hintEn: 'Use the additivity of definite integrals: ∫₀⁵ = ∫₀³ + ∫₃⁵, that is, the integral over the whole interval equals the sum of the integrals over the two sub-intervals.',
      answer: { type: 'num', accept: [7], display: '7', displayEn: '7' },
      sol: [
        { mk: 'M1', tx: '由可加性：∫₀⁵ f(x) dx = ∫₀³ f(x) dx + ∫₃⁵ f(x) dx', txEn: 'By additivity: ∫₀⁵ f(x) dx = ∫₀³ f(x) dx + ∫₃⁵ f(x) dx' },
        { mk: 'M1', tx: '代入已知值：12 = 5 + ∫₃⁵ f(x) dx', txEn: 'Substitute the given values: 12 = 5 + ∫₃⁵ f(x) dx' },
        { mk: 'A1', tx: '∫₃⁵ f(x) dx = 12 − 5 = 7', txEn: '∫₃⁵ f(x) dx = 12 − 5 = 7' },
        { mk: 'A1', tx: '結論：∫₃⁵ f(x) dx = 7。', txEn: 'Conclusion: ∫₃⁵ f(x) dx = 7.' }
      ],
      note: '常見失分：把區間胡亂組合（例如用 ∫₀³ − ∫₀⁵）；只要緊記「大區間 = 兩段小區間之和」，再作簡單移項即可。',
      noteEn: 'Common loss of marks: combining the intervals carelessly (for example using ∫₀³ − ∫₀⁵). Just remember that "the whole interval equals the sum of the two sub-intervals" and then rearrange.'
    },
    {
      id: 'de03',
      sub: '9.1 定積分的定義與性質',
      lv: 1,
      q: '已知 ∫₀⁴ f(x) dx = 10、∫₀⁴ g(x) dx = 3。<br><b>求 ∫₀⁴ [3f(x) − 2g(x)] dx 的值。</b>',
      qEn: 'Given ∫₀⁴ f(x) dx = 10 and ∫₀⁴ g(x) dx = 3.<br><b>Find the value of ∫₀⁴ [3f(x) − 2g(x)] dx.</b>',
      hint: '定積分具線性性質：常數可提出積分號外，再逐項積分後相加減。',
      hintEn: 'Definite integrals are linear: constants can be taken outside the integral sign, then integrate term by term and add or subtract.',
      answer: { type: 'num', accept: [24], display: '24', displayEn: '24' },
      sol: [
        { mk: 'M1', tx: '由線性性質：∫₀⁴ [3f(x) − 2g(x)] dx = 3∫₀⁴ f(x) dx − 2∫₀⁴ g(x) dx', txEn: 'By linearity: ∫₀⁴ [3f(x) − 2g(x)] dx = 3∫₀⁴ f(x) dx − 2∫₀⁴ g(x) dx' },
        { mk: 'M1', tx: '代入已知值：= 3(10) − 2(3)', txEn: 'Substitute the given values: = 3(10) − 2(3)' },
        { mk: 'A1', tx: '= 30 − 6 = 24', txEn: '= 30 − 6 = 24' },
        { mk: 'A1', tx: '結論：∫₀⁴ [3f(x) − 2g(x)] dx = 24。', txEn: 'Conclusion: ∫₀⁴ [3f(x) − 2g(x)] dx = 24.' }
      ],
      note: '常見失分：把 3f(x) − 2g(x) 的積分算成 3(10) + 2(3) = 36；負號要一併分配到 g 的積分上。',
      noteEn: 'Common loss of marks: computing the integral of 3f(x) − 2g(x) as 3(10) + 2(3) = 36; the minus sign must also be applied to the integral of g.'
    },
    {
      id: 'de04',
      sub: '9.1 定積分的定義與性質',
      lv: 2,
      q: '設 f(x) = x³ + 5。<br><b>利用定積分的性質，求 ∫₋₂² (x³ + 5) dx 的值。</b>',
      qEn: 'Let f(x) = x³ + 5.<br><b>Using the properties of definite integrals, find the value of ∫₋₂² (x³ + 5) dx.</b>',
      hint: 'x³ 是奇函數，在對稱區間 [−2, 2] 上的積分為 0；常數 5 的積分等於 5 × 區間長度。',
      hintEn: 'x³ is an odd function, so its integral over the symmetric interval [−2, 2] is 0; the integral of the constant 5 equals 5 × the length of the interval.',
      answer: { type: 'num', accept: [20], display: '20', displayEn: '20' },
      sol: [
        { mk: 'M1', tx: '分項：∫₋₂² (x³ + 5) dx = ∫₋₂² x³ dx + ∫₋₂² 5 dx', txEn: 'Split the terms: ∫₋₂² (x³ + 5) dx = ∫₋₂² x³ dx + ∫₋₂² 5 dx' },
        { mk: 'M1', tx: 'x³ 為奇函數且在 [−2, 2] 上對稱，故 ∫₋₂² x³ dx = 0', txEn: 'x³ is odd and [−2, 2] is symmetric, so ∫₋₂² x³ dx = 0' },
        { mk: 'A1', tx: '∫₋₂² 5 dx = 5 × [2 − (−2)] = 5 × 4 = 20', txEn: '∫₋₂² 5 dx = 5 × [2 − (−2)] = 5 × 4 = 20' },
        { mk: 'A1', tx: '結論：∫₋₂² (x³ + 5) dx = 0 + 20 = 20。', txEn: 'Conclusion: ∫₋₂² (x³ + 5) dx = 0 + 20 = 20.' }
      ],
      note: '常見失分：誤以為 ∫₋₂² x³ dx = 2∫₀² x³ dx = 8；奇函數在對稱區間上的定積分必為 0。',
      noteEn: 'Common loss of marks: wrongly taking ∫₋₂² x³ dx = 2∫₀² x³ dx = 8; the definite integral of an odd function over a symmetric interval must be 0.'
    },
    {
      id: 'de05',
      sub: '9.1 定積分的定義與性質',
      lv: 3,
      q: '已知 ∫₀³ f(x) dx = 7，且 ∫₅³ f(x) dx = 2。<br><b>求 ∫₀⁵ f(x) dx 的值。</b>',
      qEn: 'Given ∫₀³ f(x) dx = 7 and ∫₅³ f(x) dx = 2.<br><b>Find the value of ∫₀⁵ f(x) dx.</b>',
      hint: '先把上下限顛倒的積分改寫：∫₅³ f = −∫₃⁵ f，再用可加性把 [0, 5] 拆成 [0, 3] 與 [3, 5]。',
      hintEn: 'First rewrite the integral with reversed limits: ∫₅³ f = −∫₃⁵ f, then use additivity to split [0, 5] into [0, 3] and [3, 5].',
      answer: { type: 'num', accept: [5], display: '5', displayEn: '5' },
      sol: [
        { mk: 'M1', tx: '由反向性質：∫₃⁵ f(x) dx = −∫₅³ f(x) dx = −2', txEn: 'By the reversal property: ∫₃⁵ f(x) dx = −∫₅³ f(x) dx = −2' },
        { mk: 'M1', tx: '由可加性：∫₀⁵ f(x) dx = ∫₀³ f(x) dx + ∫₃⁵ f(x) dx', txEn: 'By additivity: ∫₀⁵ f(x) dx = ∫₀³ f(x) dx + ∫₃⁵ f(x) dx' },
        { mk: 'A1', tx: '= 7 + (−2) = 5', txEn: '= 7 + (−2) = 5' },
        { mk: 'A1', tx: '結論：∫₀⁵ f(x) dx = 5。', txEn: 'Conclusion: ∫₀⁵ f(x) dx = 5.' }
      ],
      note: '常見失分：忽略上下限顛倒要變號，直接寫 7 + 2 = 9；「上下限互換，定積分變號」是常考陷阱。',
      noteEn: 'Common loss of marks: ignoring the sign change when the limits are reversed and writing 7 + 2 = 9; the rule "reversing the limits changes the sign of the integral" is a common trap.'
    },

    /* ─────────── 9.2 微積分基本定理 ─────────── */
    {
      id: 'de06',
      sub: '9.2 微積分基本定理',
      lv: 1,
      q: '求 ∫₁³ (2x + 1) dx 的值。',
      qEn: 'Find the value of ∫₁³ (2x + 1) dx.',
      hint: '先求原函數 x² + x，再用微積分基本定理代入上下限相減（上限值 − 下限值）。',
      hintEn: 'First find the antiderivative x² + x, then apply the Fundamental Theorem of Calculus by substituting the limits and subtracting (value at the upper limit − value at the lower limit).',
      answer: { type: 'num', accept: [10], display: '10', displayEn: '10' },
      sol: [
        { mk: 'M1', tx: '原函數：∫ (2x + 1) dx = x² + x', txEn: 'Antiderivative: ∫ (2x + 1) dx = x² + x' },
        { mk: 'M1', tx: '由基本定理：∫₁³ (2x + 1) dx = [x² + x]₁³', txEn: 'By the Fundamental Theorem: ∫₁³ (2x + 1) dx = [x² + x]₁³' },
        { mk: 'A1', tx: '= (3² + 3) − (1² + 1) = 12 − 2 = 10', txEn: '= (3² + 3) − (1² + 1) = 12 − 2 = 10' },
        { mk: 'A1', tx: '結論：∫₁³ (2x + 1) dx = 10。', txEn: 'Conclusion: ∫₁³ (2x + 1) dx = 10.' }
      ],
      note: '常見失分：把上限值與下限值相加（12 + 2）；基本定理永遠是「上限代入值 − 下限代入值」。',
      noteEn: 'Common loss of marks: adding the values at the two limits (12 + 2); the Fundamental Theorem always uses "value at the upper limit − value at the lower limit".'
    },
    {
      id: 'de07',
      sub: '9.2 微積分基本定理',
      lv: 1,
      q: '求 ∫₀² (x³ − 4x) dx 的值。',
      qEn: 'Find the value of ∫₀² (x³ − 4x) dx.',
      hint: '原函數是 x⁴/4 − 2x²；定積分可以取負值，代表圖形在 x 軸下方的部分較多。',
      hintEn: 'The antiderivative is x⁴/4 − 2x²; a definite integral may be negative, which means more of the graph lies below the x-axis.',
      answer: { type: 'num', accept: [-4], display: '−4', displayEn: '−4' },
      sol: [
        { mk: 'M1', tx: '原函數：∫ (x³ − 4x) dx = x⁴/4 − 2x²', txEn: 'Antiderivative: ∫ (x³ − 4x) dx = x⁴/4 − 2x²' },
        { mk: 'M1', tx: '∫₀² (x³ − 4x) dx = [x⁴/4 − 2x²]₀²', txEn: '∫₀² (x³ − 4x) dx = [x⁴/4 − 2x²]₀²' },
        { mk: 'A1', tx: '= (16/4 − 2 × 4) − 0 = 4 − 8 = −4', txEn: '= (16/4 − 2 × 4) − 0 = 4 − 8 = −4' },
        { mk: 'A1', tx: '結論：∫₀² (x³ − 4x) dx = −4（負值表示 x 軸下方的有向面積較大）。', txEn: 'Conclusion: ∫₀² (x³ − 4x) dx = −4 (a negative value means the signed area below the x-axis is larger).' }
      ],
      note: '常見失分：看到「面積」二字就自動取絕對值；定積分是有向面積，本題答案就是 −4。',
      noteEn: 'Common loss of marks: automatically taking the absolute value on seeing the word "area"; a definite integral gives a signed area, so the answer here is −4.'
    },
    {
      id: 'de08',
      sub: '9.2 微積分基本定理',
      lv: 2,
      q: '求 ∫₁⁴ 2/√x dx 的值。',
      qEn: 'Find the value of ∫₁⁴ 2/√x dx.',
      hint: '先把 2/√x 寫成 2x^(−1/2)，再用冪函數積分公式：指數加 1 後除以新指數。',
      hintEn: 'First write 2/√x as 2x^(−1/2), then use the power rule for integration: add 1 to the index and divide by the new index.',
      answer: { type: 'num', accept: [4], display: '4', displayEn: '4' },
      sol: [
        { mk: 'M1', tx: '把被積函數寫成冪函數：2/√x = 2x^(−1/2)', txEn: 'Write the integrand as a power: 2/√x = 2x^(−1/2)' },
        { mk: 'M1', tx: '原函數：∫ 2x^(−1/2) dx = 2 × 2x^(1/2) = 4√x', txEn: 'Antiderivative: ∫ 2x^(−1/2) dx = 2 × 2x^(1/2) = 4√x' },
        { mk: 'A1', tx: '∫₁⁴ 2/√x dx = [4√x]₁⁴ = 8 − 4 = 4', txEn: '∫₁⁴ 2/√x dx = [4√x]₁⁴ = 8 − 4 = 4' },
        { mk: 'A1', tx: '結論：∫₁⁴ 2/√x dx = 4。', txEn: 'Conclusion: ∫₁⁴ 2/√x dx = 4.' }
      ],
      note: '常見失分：指數 −1/2 加 1 得 1/2，再除以 1/2（即乘 2）；漏掉這個因子會得出 2 而非 4。',
      noteEn: 'Common loss of marks: the index −1/2 plus 1 gives 1/2, then divide by 1/2 (that is, multiply by 2); missing this factor gives 2 instead of 4.'
    },
    {
      id: 'de09',
      sub: '9.2 微積分基本定理',
      lv: 3,
      q: '求 ∫₀³ |x − 1| dx 的值。',
      qEn: 'Find the value of ∫₀³ |x − 1| dx.',
      hint: '|x − 1| 在 x < 1 與 x ≥ 1 有不同表達式，必須在 x = 1 處把積分分成兩段。',
      hintEn: '|x − 1| has different expressions for x < 1 and x ≥ 1, so the integral must be split into two parts at x = 1.',
      answer: { type: 'num', accept: [2.5], display: '5/2（= 2.5）', displayEn: '5/2  (= 2.5)' },
      sol: [
        { mk: 'M1', tx: '當 0 ≤ x ≤ 1 時 |x − 1| = 1 − x；當 1 ≤ x ≤ 3 時 |x − 1| = x − 1', txEn: 'For 0 ≤ x ≤ 1, |x − 1| = 1 − x; for 1 ≤ x ≤ 3, |x − 1| = x − 1' },
        { mk: 'M1', tx: '∫₀³ |x − 1| dx = ∫₀¹ (1 − x) dx + ∫₁³ (x − 1) dx', txEn: '∫₀³ |x − 1| dx = ∫₀¹ (1 − x) dx + ∫₁³ (x − 1) dx' },
        { mk: 'A1', tx: '= [x − x²/2]₀¹ + [x²/2 − x]₁³ = (1 − 1/2) + [(9/2 − 3) − (1/2 − 1)] = 1/2 + 2', txEn: '= [x − x²/2]₀¹ + [x²/2 − x]₁³ = (1 − 1/2) + [(9/2 − 3) − (1/2 − 1)] = 1/2 + 2' },
        { mk: 'A1', tx: '結論：∫₀³ |x − 1| dx = 5/2 = 2.5。', txEn: 'Conclusion: ∫₀³ |x − 1| dx = 5/2 = 2.5.' }
      ],
      note: '常見失分：不分段就直接把 |x − 1| 當作 x − 1 積分；含絕對值的定積分幾乎一定要先找零點再分段。',
      noteEn: 'Common loss of marks: integrating |x − 1| as x − 1 without splitting; a definite integral involving an absolute value almost always requires locating the zero first and then splitting the range.'
    },
    {
      id: 'de10',
      sub: '9.2 微積分基本定理',
      lv: 3,
      q: '設 F(x) = ∫₁<sup>x²</sup> (3t + 1) dt，其中 x > 0。<br><b>求 F′(x)。</b>',
      qEn: 'Let F(x) = ∫₁<sup>x²</sup> (3t + 1) dt, where x > 0.<br><b>Find F′(x).</b>',
      hint: '這是「上限為函數」的微積分基本定理，再配合連鎖法則：先以 x² 代入被積函數，然後乘上限的導數 d(x²)/dx。',
      hintEn: 'This uses the Fundamental Theorem of Calculus with a function as the upper limit, together with the chain rule: substitute x² into the integrand, then multiply by the derivative of the upper limit, d(x²)/dx.',
      answer: { type: 'symbol', accept: ['6x^3+2x'], display: '6x³ + 2x', displayEn: '6x³ + 2x' },
      sol: [
        { mk: 'M1', tx: '設上限 u = x²。由基本定理，d/du ∫₁^u (3t + 1) dt = 3u + 1', txEn: 'Let the upper limit be u = x². By the Fundamental Theorem, d/du ∫₁^u (3t + 1) dt = 3u + 1' },
        { mk: 'M1', tx: '用連鎖法則：F′(x) = (3u + 1) × du/dx = (3x² + 1) × d(x²)/dx', txEn: 'By the chain rule: F′(x) = (3u + 1) × du/dx = (3x² + 1) × d(x²)/dx' },
        { mk: 'A1', tx: 'F′(x) = (3x² + 1)(2x) = 6x³ + 2x', txEn: 'F′(x) = (3x² + 1)(2x) = 6x³ + 2x' },
        { mk: 'A1', tx: '結論：F′(x) = 6x³ + 2x。', txEn: 'Conclusion: F′(x) = 6x³ + 2x.' }
      ],
      note: '常見失分：只寫 3x² + 1，忘記乘上限的導數 2x；只要上限不是 x，就必須用連鎖法則。',
      noteEn: 'Common loss of marks: giving only 3x² + 1 and forgetting to multiply by the derivative of the upper limit, 2x; whenever the upper limit is not x, the chain rule is required.'
    },

    /* ─────────── 9.3 代換法於定積分 ─────────── */
    {
      id: 'de11',
      sub: '9.3 代換法於定積分',
      lv: 2,
      q: '利用代換法，求 ∫₀¹ (2x + 1)³ dx 的值。',
      qEn: 'Using substitution, find the value of ∫₀¹ (2x + 1)³ dx.',
      hint: '設 u = 2x + 1，則 du = 2 dx，即 dx = du/2；上下限同時要由 x 的值換成 u 的值。',
      hintEn: 'Let u = 2x + 1, then du = 2 dx, that is dx = du/2; the limits must also be changed from values of x to values of u.',
      answer: { type: 'num', accept: [10], display: '10', displayEn: '10' },
      sol: [
        { mk: 'M1', tx: '設 u = 2x + 1，則 du = 2 dx，即 dx = du/2', txEn: 'Let u = 2x + 1, then du = 2 dx, that is dx = du/2' },
        { mk: 'M1', tx: '換限：x = 0 ⇒ u = 1；x = 1 ⇒ u = 3，故 ∫₀¹ (2x + 1)³ dx = (1/2)∫₁³ u³ du', txEn: 'Change the limits: x = 0 ⇒ u = 1; x = 1 ⇒ u = 3, so ∫₀¹ (2x + 1)³ dx = (1/2)∫₁³ u³ du' },
        { mk: 'A1', tx: '= (1/2)[u⁴/4]₁³ = (1/8)(81 − 1) = 10', txEn: '= (1/2)[u⁴/4]₁³ = (1/8)(81 − 1) = 10' },
        { mk: 'A1', tx: '結論：∫₀¹ (2x + 1)³ dx = 10。', txEn: 'Conclusion: ∫₀¹ (2x + 1)³ dx = 10.' }
      ],
      note: '常見失分：換元後忘記把上下限由 x 改為 u，直接把 0 與 1 代入 u⁴/4。',
      noteEn: 'Common loss of marks: after substituting, forgetting to change the limits from x to u and substituting 0 and 1 directly into u⁴/4.'
    },
    {
      id: 'de12',
      sub: '9.3 代換法於定積分',
      lv: 2,
      q: '利用代換法，求 ∫₀² x(x² + 1)³ dx 的值。',
      qEn: 'Using substitution, find the value of ∫₀² x(x² + 1)³ dx.',
      hint: '設 u = x² + 1，則 du = 2x dx，被積函數中的 x dx 正好配成 du/2。',
      hintEn: 'Let u = x² + 1, then du = 2x dx, and the x dx in the integrand matches du/2 exactly.',
      answer: { type: 'num', accept: [78], display: '78', displayEn: '78' },
      sol: [
        { mk: 'M1', tx: '設 u = x² + 1，則 du = 2x dx，即 x dx = du/2', txEn: 'Let u = x² + 1, then du = 2x dx, that is x dx = du/2' },
        { mk: 'M1', tx: '換限：x = 0 ⇒ u = 1；x = 2 ⇒ u = 5，故積分 = (1/2)∫₁⁵ u³ du', txEn: 'Change the limits: x = 0 ⇒ u = 1; x = 2 ⇒ u = 5, so the integral = (1/2)∫₁⁵ u³ du' },
        { mk: 'A1', tx: '= (1/2)[u⁴/4]₁⁵ = (1/8)(625 − 1) = 78', txEn: '= (1/2)[u⁴/4]₁⁵ = (1/8)(625 − 1) = 78' },
        { mk: 'A1', tx: '結論：∫₀² x(x² + 1)³ dx = 78。', txEn: 'Conclusion: ∫₀² x(x² + 1)³ dx = 78.' }
      ],
      note: '常見失分：漏掉 du = 2x dx 帶來的 1/2 因子，令答案變成 156；換元後要完整寫出 dx 的替換。',
      noteEn: 'Common loss of marks: missing the factor 1/2 from du = 2x dx, which gives 156 instead; after substituting, the replacement for dx must be written out in full.'
    },
    {
      id: 'de13',
      sub: '9.3 代換法於定積分',
      lv: 3,
      q: '利用代換法，求 ∫₀<sup>π/2</sup> sin x cos² x dx 的值。',
      qEn: 'Using substitution, find the value of ∫₀<sup>π/2</sup> sin x cos² x dx.',
      hint: '設 u = cos x，則 du = −sin x dx；上下限由 x = 0、π/2 變為 u = 1、0，交換上下限正好抵銷負號。',
      hintEn: 'Let u = cos x, then du = −sin x dx; the limits change from x = 0, π/2 to u = 1, 0, and reversing the limits cancels the minus sign.',
      answer: { type: 'num', accept: [1 / 3, 0.3333], display: '1/3 （≈ 0.333）', displayEn: '1/3  (≈ 0.333)' },
      sol: [
        { mk: 'M1', tx: '設 u = cos x，則 du = −sin x dx，即 sin x dx = −du', txEn: 'Let u = cos x, then du = −sin x dx, that is sin x dx = −du' },
        { mk: 'M1', tx: '換限：x = 0 ⇒ u = 1；x = π/2 ⇒ u = 0，故積分 = ∫₁⁰ u²(−du) = ∫₀¹ u² du', txEn: 'Change the limits: x = 0 ⇒ u = 1; x = π/2 ⇒ u = 0, so the integral = ∫₁⁰ u²(−du) = ∫₀¹ u² du' },
        { mk: 'A1', tx: '= [u³/3]₀¹ = 1/3', txEn: '= [u³/3]₀¹ = 1/3' },
        { mk: 'A1', tx: '結論：∫₀<sup>π/2</sup> sin x cos² x dx = 1/3。', txEn: 'Conclusion: ∫₀<sup>π/2</sup> sin x cos² x dx = 1/3.' }
      ],
      note: '常見失分：忘記處理 du 中的負號而得出 −1/3；換元必須同時處理被積函數、dx 與上下限三部分。',
      noteEn: 'Common loss of marks: forgetting the minus sign in du and obtaining −1/3; substitution must deal with the integrand, dx and the limits together.'
    },
    {
      id: 'de14',
      sub: '9.3 代換法於定積分',
      lv: 2,
      q: '利用代換法，求 ∫₀¹ x/(x² + 1) dx 的值。',
      qEn: 'Using substitution, find the value of ∫₀¹ x/(x² + 1) dx.',
      hint: '設 u = x² + 1，則 du = 2x dx，積分後會出現自然對數；上下限變為 u = 1 與 u = 2。',
      hintEn: 'Let u = x² + 1, then du = 2x dx, and a natural logarithm appears after integration; the limits become u = 1 and u = 2.',
      answer: { type: 'num', accept: [0.5 * Math.log(2), 0.3465736], display: '(1/2)㏑ 2 （≈ 0.3466）', displayEn: '(1/2)㏑ 2  (≈ 0.3466)' },
      sol: [
        { mk: 'M1', tx: '設 u = x² + 1，則 du = 2x dx，即 x dx = du/2', txEn: 'Let u = x² + 1, then du = 2x dx, that is x dx = du/2' },
        { mk: 'M1', tx: '換限：x = 0 ⇒ u = 1；x = 1 ⇒ u = 2，故積分 = (1/2)∫₁² (1/u) du', txEn: 'Change the limits: x = 0 ⇒ u = 1; x = 1 ⇒ u = 2, so the integral = (1/2)∫₁² (1/u) du' },
        { mk: 'A1', tx: '= (1/2)[㏑ u]₁² = (1/2)(㏑ 2 − ㏑ 1) = (1/2)㏑ 2', txEn: '= (1/2)[㏑ u]₁² = (1/2)(㏑ 2 − ㏑ 1) = (1/2)㏑ 2' },
        { mk: 'A1', tx: '結論：∫₀¹ x/(x² + 1) dx = (1/2)㏑ 2 ≈ 0.3466。', txEn: 'Conclusion: ∫₀¹ x/(x² + 1) dx = (1/2)㏑ 2 ≈ 0.3466.' }
      ],
      note: '常見失分：把分母 x² + 1 的積分直接寫成 ㏑(x² + 1)，漏掉 du = 2x dx 帶來的 1/2 因子。',
      noteEn: 'Common loss of marks: writing the integral of 1/(x² + 1) directly as ㏑(x² + 1) and missing the factor 1/2 from du = 2x dx.'
    },
    {
      id: 'de15',
      sub: '9.3 代換法於定積分',
      lv: 3,
      q: '利用代換法，求 ∫₀² x²√(x³ + 1) dx 的值。',
      qEn: 'Using substitution, find the value of ∫₀² x²√(x³ + 1) dx.',
      hint: '設 u = x³ + 1，則 du = 3x² dx；把 √u 寫成 u^(1/2) 再積分，上下限變為 u = 1 與 u = 9。',
      hintEn: 'Let u = x³ + 1, then du = 3x² dx; write √u as u^(1/2) before integrating, and the limits become u = 1 and u = 9.',
      answer: { type: 'num', accept: [52 / 9, 5.7778], display: '52/9 （≈ 5.778）', displayEn: '52/9  (≈ 5.778)' },
      sol: [
        { mk: 'M1', tx: '設 u = x³ + 1，則 du = 3x² dx，即 x² dx = du/3', txEn: 'Let u = x³ + 1, then du = 3x² dx, that is x² dx = du/3' },
        { mk: 'M1', tx: '換限：x = 0 ⇒ u = 1；x = 2 ⇒ u = 9，故積分 = (1/3)∫₁⁹ u^(1/2) du', txEn: 'Change the limits: x = 0 ⇒ u = 1; x = 2 ⇒ u = 9, so the integral = (1/3)∫₁⁹ u^(1/2) du' },
        { mk: 'A1', tx: '= (1/3)[(2/3)u^(3/2)]₁⁹ = (2/9)(27 − 1) = 52/9', txEn: '= (1/3)[(2/3)u^(3/2)]₁⁹ = (2/9)(27 − 1) = 52/9' },
        { mk: 'A1', tx: '結論：∫₀² x²√(x³ + 1) dx = 52/9 ≈ 5.778。', txEn: 'Conclusion: ∫₀² x²√(x³ + 1) dx = 52/9 ≈ 5.778.' }
      ],
      note: '常見失分：u^(1/2) 的原函數是 (2/3)u^(3/2)，切勿誤用求導公式寫成 (1/2)u^(−1/2)。',
      noteEn: 'Common loss of marks: the antiderivative of u^(1/2) is (2/3)u^(3/2), not (1/2)u^(−1/2), which comes from misusing the differentiation rule.'
    },

    /* ─────────── 9.4 平面圖形的面積 ─────────── */
    {
      id: 'de16',
      sub: '9.4 平面圖形的面積',
      lv: 1,
      q: '求由曲線 y = x²、x 軸、直線 x = 0 及 x = 3 所圍成的圖形面積。',
      qEn: 'Find the area of the region bounded by the curve y = x², the x-axis and the lines x = 0 and x = 3.',
      hint: '在 [0, 3] 上 y = x² ≥ 0，圖形全部在 x 軸上方，面積直接等於 ∫₀³ x² dx。',
      hintEn: 'On [0, 3], y = x² ≥ 0, so the whole region lies above the x-axis and the area is simply ∫₀³ x² dx.',
      answer: { type: 'num', accept: [9], display: '9 平方單位', displayEn: '9 square units' },
      sol: [
        { mk: 'M1', tx: '在 [0, 3] 上 y = x² ≥ 0，故所求面積 = ∫₀³ x² dx', txEn: 'On [0, 3], y = x² ≥ 0, so the required area = ∫₀³ x² dx' },
        { mk: 'M1', tx: '原函數為 x³/3，故面積 = [x³/3]₀³', txEn: 'The antiderivative is x³/3, so the area = [x³/3]₀³' },
        { mk: 'A1', tx: '= 27/3 − 0 = 9', txEn: '= 27/3 − 0 = 9' },
        { mk: 'A1', tx: '結論：面積為 9 平方單位。', txEn: 'Conclusion: the area is 9 square units.' }
      ],
      note: '常見失分：把 3³ 當成答案而漏除以 3；答案亦必須寫出「平方單位」才完整。',
      noteEn: 'Common loss of marks: giving 3³ as the answer and forgetting to divide by 3; the answer is also incomplete without the unit "square units".'
    },
    {
      id: 'de17',
      sub: '9.4 平面圖形的面積',
      lv: 2,
      q: '求由曲線 y = x² 與直線 y = x 所圍成的圖形面積。',
      qEn: 'Find the area of the region bounded by the curve y = x² and the line y = x.',
      hint: '先解 x² = x 求交點，再判斷在該區間內哪條曲線在上方，以「上曲線 − 下曲線」作為被積函數。',
      hintEn: 'First solve x² = x to find the points of intersection, then determine which curve is above the other on that interval and use "upper curve − lower curve" as the integrand.',
      answer: { type: 'num', accept: [1 / 6, 0.1667], display: '1/6 （≈ 0.167）平方單位', displayEn: '1/6  (≈ 0.167) square units' },
      sol: [
        { mk: 'M1', tx: '令 x² = x，即 x(x − 1) = 0，得交點 x = 0 與 x = 1', txEn: 'Put x² = x, that is x(x − 1) = 0, giving the points of intersection x = 0 and x = 1' },
        { mk: 'M1', tx: '在 0 < x < 1 內 x > x²，故面積 = ∫₀¹ (x − x²) dx', txEn: 'For 0 < x < 1, x > x², so the area = ∫₀¹ (x − x²) dx' },
        { mk: 'A1', tx: '= [x²/2 − x³/3]₀¹ = 1/2 − 1/3 = 1/6', txEn: '= [x²/2 − x³/3]₀¹ = 1/2 − 1/3 = 1/6' },
        { mk: 'A1', tx: '結論：面積為 1/6 ≈ 0.167 平方單位。', txEn: 'Conclusion: the area is 1/6 ≈ 0.167 square units.' }
      ],
      note: '常見失分：把上下曲線倒轉寫成 x² − x，得出負面積；務必先確認區間內哪一條曲線在上方。',
      noteEn: 'Common loss of marks: swapping the upper and lower curves and writing x² − x, which gives a negative area; always check which curve lies above on the interval.'
    },
    {
      id: 'de18',
      sub: '9.4 平面圖形的面積',
      lv: 3,
      q: '求由曲線 y = x² − 2x 與 x 軸所圍成的圖形面積。',
      qEn: 'Find the area of the region bounded by the curve y = x² − 2x and the x-axis.',
      hint: '先求曲線與 x 軸的交點 x = 0、2；在該區間內 y ≤ 0，面積要取 (0 − y) 來積分。',
      hintEn: 'First find where the curve meets the x-axis, x = 0 and x = 2; on that interval y ≤ 0, so the area is obtained by integrating (0 − y).',
      answer: { type: 'num', accept: [4 / 3, 1.3333], display: '4/3 （≈ 1.333）平方單位', displayEn: '4/3  (≈ 1.333) square units' },
      sol: [
        { mk: 'M1', tx: '令 x² − 2x = 0，即 x(x − 2) = 0，得 x = 0 或 x = 2，故區域在 x ∈ [0, 2]', txEn: 'Put x² − 2x = 0, that is x(x − 2) = 0, giving x = 0 or x = 2, so the region lies on x ∈ [0, 2]' },
        { mk: 'M1', tx: '在 (0, 2) 內 x² − 2x < 0，故面積 = ∫₀² [0 − (x² − 2x)] dx = ∫₀² (2x − x²) dx', txEn: 'For (0, 2), x² − 2x < 0, so the area = ∫₀² [0 − (x² − 2x)] dx = ∫₀² (2x − x²) dx' },
        { mk: 'A1', tx: '= [x² − x³/3]₀² = 4 − 8/3 = 4/3', txEn: '= [x² − x³/3]₀² = 4 − 8/3 = 4/3' },
        { mk: 'A1', tx: '結論：面積為 4/3 ≈ 1.333 平方單位。', txEn: 'Conclusion: the area is 4/3 ≈ 1.333 square units.' }
      ],
      note: '常見失分：直接計算 ∫₀² (x² − 2x) dx 得 −4/3 後當成答案；面積必須取正值。',
      noteEn: 'Common loss of marks: computing ∫₀² (x² − 2x) dx = −4/3 and taking that as the answer; an area must be positive.'
    },
    {
      id: 'de19',
      sub: '9.4 平面圖形的面積',
      lv: 2,
      q: '求由曲線 y = x² 與直線 y = 3x 所圍成的圖形面積。',
      qEn: 'Find the area of the region bounded by the curve y = x² and the line y = 3x.',
      hint: '解 x² = 3x 求交點；在 0 < x < 3 內直線在曲線上方，面積為 ∫₀³ (3x − x²) dx。',
      hintEn: 'Solve x² = 3x to find the points of intersection; for 0 < x < 3 the line is above the curve, so the area is ∫₀³ (3x − x²) dx.',
      answer: { type: 'num', accept: [4.5], display: '9/2（= 4.5）平方單位', displayEn: '9/2  (= 4.5) square units' },
      sol: [
        { mk: 'M1', tx: '令 x² = 3x，即 x(x − 3) = 0，得交點 x = 0 與 x = 3', txEn: 'Put x² = 3x, that is x(x − 3) = 0, giving the points of intersection x = 0 and x = 3' },
        { mk: 'M1', tx: '在 (0, 3) 內 3x > x²，故面積 = ∫₀³ (3x − x²) dx', txEn: 'For (0, 3), 3x > x², so the area = ∫₀³ (3x − x²) dx' },
        { mk: 'A1', tx: '= [3x²/2 − x³/3]₀³ = 27/2 − 9 = 9/2', txEn: '= [3x²/2 − x³/3]₀³ = 27/2 − 9 = 9/2' },
        { mk: 'A1', tx: '結論：面積為 9/2 = 4.5 平方單位。', txEn: 'Conclusion: the area is 9/2 = 4.5 square units.' }
      ],
      note: '常見失分：沒有先解方程求交點就亂定上下限；交點正是決定積分區間的關鍵。',
      noteEn: 'Common loss of marks: choosing the limits without first solving for the points of intersection; those points determine the interval of integration.'
    },
    {
      id: 'de20',
      sub: '9.4 平面圖形的面積',
      lv: 3,
      q: '曲線 y = x² 與直線 y = 2x + 3 相交於兩點。<br><b>求兩交點的 x 坐標（由小至大），以及兩者所圍圖形的面積；答案依次輸入這三個數值。</b>',
      qEn: 'The curve y = x² and the line y = 2x + 3 meet at two points.<br><b>Find the x-coordinates of the two points of intersection (from smallest to largest) and the area of the region enclosed by the two graphs; enter these three values in order.</b>',
      hint: '解 x² = 2x + 3 求交點；在兩交點之間直線在曲線上方，面積為 ∫ (2x + 3 − x²) dx。',
      hintEn: 'Solve x² = 2x + 3 to find the points of intersection; between them the line is above the curve, so the area is ∫ (2x + 3 − x²) dx.',
      answer: { type: 'numbers', accept: [[-1, 3, 32 / 3], [-1, 3, 10.6667]], display: 'x = −1、x = 3；面積 = 32/3 ≈ 10.67 平方單位', displayEn: 'x = −1, x = 3; area = 32/3 ≈ 10.67 square units' },
      sol: [
        { mk: 'M1', tx: '解 x² = 2x + 3：x² − 2x − 3 = 0，即 (x − 3)(x + 1) = 0，得 x = −1 或 x = 3', txEn: 'Solve x² = 2x + 3: x² − 2x − 3 = 0, that is (x − 3)(x + 1) = 0, giving x = −1 or x = 3' },
        { mk: 'M1', tx: '在 −1 < x < 3 內直線在曲線上方，故面積 = ∫₋₁³ (2x + 3 − x²) dx', txEn: 'For −1 < x < 3 the line is above the curve, so the area = ∫₋₁³ (2x + 3 − x²) dx' },
        { mk: 'M1', tx: '原函數為 F(x) = x² + 3x − x³/3，F(3) = 9 + 9 − 9 = 9，F(−1) = 1 − 3 + 1/3 = −5/3', txEn: 'The antiderivative is F(x) = x² + 3x − x³/3, F(3) = 9 + 9 − 9 = 9, F(−1) = 1 − 3 + 1/3 = −5/3' },
        { mk: 'A1', tx: '面積 = F(3) − F(−1) = 9 − (−5/3) = 32/3', txEn: 'Area = F(3) − F(−1) = 9 − (−5/3) = 32/3' },
        { mk: 'A1', tx: '結論：兩交點為 x = −1、x = 3，所圍面積 = 32/3 ≈ 10.67 平方單位。', txEn: 'Conclusion: the two points of intersection are x = −1 and x = 3, and the enclosed area is 32/3 ≈ 10.67 square units.' }
      ],
      note: '常見失分：代入次序顛倒或把 F(−1) 中的符號算錯；建議完整寫出 F(3) 與 F(−1) 兩行再相減。',
      noteEn: 'Common loss of marks: reversing the order of substitution or making a sign error in F(−1); write out F(3) and F(−1) on separate lines before subtracting.'
    },

    /* ─────────── 9.5 旋轉體的體積 ─────────── */
    {
      id: 'de21',
      sub: '9.5 旋轉體的體積',
      lv: 1,
      q: '把由曲線 y = x、x 軸及直線 x = 3 所圍成的圖形繞 x 軸旋轉。<br><b>求所得旋轉體的體積。</b>',
      qEn: 'The region bounded by the curve y = x, the x-axis and the line x = 3 is rotated about the x-axis.<br><b>Find the volume of the solid of revolution.</b>',
      hint: '繞 x 軸旋轉的體積公式是 V = π∫ y² dx；此處 y = x，上下限為 0 至 3。',
      hintEn: 'The formula for the volume when rotating about the x-axis is V = π∫ y² dx; here y = x and the limits are 0 to 3.',
      answer: { type: 'num', accept: [9 * Math.PI, 28.2743], display: '9π （≈ 28.27）立方單位', displayEn: '9π  (≈ 28.27) cubic units' },
      sol: [
        { mk: 'M1', tx: 'V = π∫₀³ y² dx = π∫₀³ x² dx', txEn: 'V = π∫₀³ y² dx = π∫₀³ x² dx' },
        { mk: 'M1', tx: '= π[x³/3]₀³', txEn: '= π[x³/3]₀³' },
        { mk: 'A1', tx: '= π × 27/3 = 9π', txEn: '= π × 27/3 = 9π' },
        { mk: 'A1', tx: '結論：體積 = 9π ≈ 28.27 立方單位。', txEn: 'Conclusion: the volume = 9π ≈ 28.27 cubic units.' }
      ],
      note: '常見失分：忘記公式最外層的 π；圓盤的半徑就是曲線的 y 值，因此被積函數是 y²。',
      noteEn: 'Common loss of marks: forgetting the factor π outside the formula; the radius of each disc is the y-value of the curve, so the integrand is y².'
    },
    {
      id: 'de22',
      sub: '9.5 旋轉體的體積',
      lv: 1,
      q: '把由曲線 y = √x、x 軸及直線 x = 4 所圍成的圖形繞 x 軸旋轉。<br><b>求所得旋轉體的體積。</b>',
      qEn: 'The region bounded by the curve y = √x, the x-axis and the line x = 4 is rotated about the x-axis.<br><b>Find the volume of the solid of revolution.</b>',
      hint: '(√x)² = x，所以 V = π∫₀⁴ x dx。',
      hintEn: '(√x)² = x, so V = π∫₀⁴ x dx.',
      answer: { type: 'num', accept: [8 * Math.PI, 25.1327], display: '8π （≈ 25.13）立方單位', displayEn: '8π  (≈ 25.13) cubic units' },
      sol: [
        { mk: 'M1', tx: 'V = π∫₀⁴ y² dx = π∫₀⁴ (√x)² dx = π∫₀⁴ x dx', txEn: 'V = π∫₀⁴ y² dx = π∫₀⁴ (√x)² dx = π∫₀⁴ x dx' },
        { mk: 'M1', tx: '= π[x²/2]₀⁴', txEn: '= π[x²/2]₀⁴' },
        { mk: 'A1', tx: '= π × 16/2 = 8π', txEn: '= π × 16/2 = 8π' },
        { mk: 'A1', tx: '結論：體積 = 8π ≈ 25.13 立方單位。', txEn: 'Conclusion: the volume = 8π ≈ 25.13 cubic units.' }
      ],
      note: '常見失分：把 (√x)² 誤寫成 √(x²) 後再平方；平方與開方互相抵銷才是 x。',
      noteEn: 'Common loss of marks: misreading (√x)² as √(x²) and then squaring again; squaring and taking the square root cancel each other to give x.'
    },
    {
      id: 'de23',
      sub: '9.5 旋轉體的體積',
      lv: 2,
      q: '把由曲線 y = x²、x 軸及直線 x = 1 所圍成的圖形繞 x 軸旋轉。<br><b>求所得旋轉體的體積。</b>',
      qEn: 'The region bounded by the curve y = x², the x-axis and the line x = 1 is rotated about the x-axis.<br><b>Find the volume of the solid of revolution.</b>',
      hint: 'y² = (x²)² = x⁴，故 V = π∫₀¹ x⁴ dx。',
      hintEn: 'y² = (x²)² = x⁴, so V = π∫₀¹ x⁴ dx.',
      answer: { type: 'num', accept: [Math.PI / 5, 0.6283], display: 'π/5 （≈ 0.628）立方單位', displayEn: 'π/5  (≈ 0.628) cubic units' },
      sol: [
        { mk: 'M1', tx: 'V = π∫₀¹ y² dx = π∫₀¹ (x²)² dx = π∫₀¹ x⁴ dx', txEn: 'V = π∫₀¹ y² dx = π∫₀¹ (x²)² dx = π∫₀¹ x⁴ dx' },
        { mk: 'M1', tx: '= π[x⁵/5]₀¹', txEn: '= π[x⁵/5]₀¹' },
        { mk: 'A1', tx: '= π/5', txEn: '= π/5' },
        { mk: 'A1', tx: '結論：體積 = π/5 ≈ 0.628 立方單位。', txEn: 'Conclusion: the volume = π/5 ≈ 0.628 cubic units.' }
      ],
      note: '常見失分：把 (x²)² 算成 x² 而非 x⁴；旋轉體的體積要用 y 的平方。',
      noteEn: 'Common loss of marks: simplifying (x²)² as x² instead of x⁴; the volume of a solid of revolution uses the square of y.'
    },
    {
      id: 'de24',
      sub: '9.5 旋轉體的體積',
      lv: 2,
      q: '把由曲線 y = 1/x、x 軸及直線 x = 1、x = 2 所圍成的圖形繞 x 軸旋轉。<br><b>求所得旋轉體的體積。</b>',
      qEn: 'The region bounded by the curve y = 1/x, the x-axis and the lines x = 1 and x = 2 is rotated about the x-axis.<br><b>Find the volume of the solid of revolution.</b>',
      hint: 'y² = 1/x² = x⁻²，其原函數是 −x⁻¹；即 V = π∫₁² x⁻² dx。',
      hintEn: 'y² = 1/x² = x⁻², whose antiderivative is −x⁻¹; that is, V = π∫₁² x⁻² dx.',
      answer: { type: 'num', accept: [Math.PI / 2, 1.5708], display: 'π/2 （≈ 1.571）立方單位', displayEn: 'π/2  (≈ 1.571) cubic units' },
      sol: [
        { mk: 'M1', tx: 'V = π∫₁² (1/x)² dx = π∫₁² x⁻² dx', txEn: 'V = π∫₁² (1/x)² dx = π∫₁² x⁻² dx' },
        { mk: 'M1', tx: '= π[−1/x]₁²', txEn: '= π[−1/x]₁²' },
        { mk: 'A1', tx: '= π[(−1/2) − (−1)] = π/2', txEn: '= π[(−1/2) − (−1)] = π/2' },
        { mk: 'A1', tx: '結論：體積 = π/2 ≈ 1.571 立方單位。', txEn: 'Conclusion: the volume = π/2 ≈ 1.571 cubic units.' }
      ],
      note: '常見失分：把 x⁻² 的原函數寫成 −2x⁻³（誤用求導公式）；積分時指數要加 1 而非減 1。',
      noteEn: 'Common loss of marks: writing the antiderivative of x⁻² as −2x⁻³, misusing the differentiation rule; when integrating, add 1 to the index instead of subtracting 1.'
    },
    {
      id: 'de25',
      sub: '9.5 旋轉體的體積',
      lv: 3,
      q: '把由曲線 y = x 與 y = x² 所圍成的圖形繞 x 軸旋轉。<br><b>求所得旋轉體的體積。</b>',
      qEn: 'The region bounded by the curves y = x and y = x² is rotated about the x-axis.<br><b>Find the volume of the solid of revolution.</b>',
      hint: '兩曲線相交於 x = 0 與 x = 1；用墊圈法，外半徑是 y = x、內半徑是 y = x²，體積為 π∫ (外² − 內²) dx。',
      hintEn: 'The two curves meet at x = 0 and x = 1; use the washer method, with outer radius y = x and inner radius y = x², so the volume is π∫ (outer² − inner²) dx.',
      answer: { type: 'num', accept: [2 * Math.PI / 15, 0.4189], display: '2π/15 （≈ 0.419）立方單位', displayEn: '2π/15  (≈ 0.419) cubic units' },
      sol: [
        { mk: 'M1', tx: '令 x = x²，得交點 x = 0 與 x = 1；在 (0, 1) 內 x > x²，故外半徑為 x、內半徑為 x²', txEn: 'Put x = x², giving the points of intersection x = 0 and x = 1; for (0, 1), x > x², so the outer radius is x and the inner radius is x²' },
        { mk: 'M1', tx: 'V = π∫₀¹ [x² − (x²)²] dx = π∫₀¹ (x² − x⁴) dx', txEn: 'V = π∫₀¹ [x² − (x²)²] dx = π∫₀¹ (x² − x⁴) dx' },
        { mk: 'A1', tx: '= π[x³/3 − x⁵/5]₀¹ = π(1/3 − 1/5) = 2π/15', txEn: '= π[x³/3 − x⁵/5]₀¹ = π(1/3 − 1/5) = 2π/15' },
        { mk: 'A1', tx: '結論：體積 = 2π/15 ≈ 0.419 立方單位。', txEn: 'Conclusion: the volume = 2π/15 ≈ 0.419 cubic units.' }
      ],
      note: '常見失分：只用外半徑計算 π∫₀¹ x² dx 而忘記扣去內半徑，令答案變成 π/3；中空的旋轉體必須用墊圈法。',
      noteEn: 'Common loss of marks: using only the outer radius π∫₀¹ x² dx and forgetting to subtract the inner radius, which gives π/3; a hollow solid of revolution requires the washer method.'
    },

    /* ─────────── 9.6 定積分的其他應用（平均值、變率） ─────────── */
    {
      id: 'de26',
      sub: '9.6 定積分的其他應用（平均值、變率）',
      lv: 1,
      q: '設 f(x) = x²。<br><b>求 f 在區間 [0, 3] 上的平均值。</b>',
      qEn: 'Let f(x) = x².<br><b>Find the average value of f on the interval [0, 3].</b>',
      hint: '函數在 [a, b] 上的平均值 = (1/(b − a))∫ₐᵇ f(x) dx，此處 a = 0、b = 3。',
      hintEn: 'The average value of a function on [a, b] is (1/(b − a))∫ₐᵇ f(x) dx; here a = 0 and b = 3.',
      answer: { type: 'num', accept: [3], display: '3', displayEn: '3' },
      sol: [
        { mk: 'M1', tx: '平均值 = (1/(3 − 0))∫₀³ x² dx = (1/3)∫₀³ x² dx', txEn: 'Average value = (1/(3 − 0))∫₀³ x² dx = (1/3)∫₀³ x² dx' },
        { mk: 'M1', tx: '= (1/3)[x³/3]₀³', txEn: '= (1/3)[x³/3]₀³' },
        { mk: 'A1', tx: '= (1/3) × 9 = 3', txEn: '= (1/3) × 9 = 3' },
        { mk: 'A1', tx: '結論：f 在 [0, 3] 上的平均值為 3。', txEn: 'Conclusion: the average value of f on [0, 3] is 3.' }
      ],
      note: '常見失分：只計算總積分 9 就當作答案；平均值必須再除以區間長度 3。',
      noteEn: 'Common loss of marks: taking the total integral 9 as the answer; the average value must be divided by the length of the interval, 3.'
    },
    {
      id: 'de27',
      sub: '9.6 定積分的其他應用（平均值、變率）',
      lv: 1,
      q: '設 f(x) = 2x + 1。<br><b>求 f 在區間 [1, 4] 上的平均值。</b>',
      qEn: 'Let f(x) = 2x + 1.<br><b>Find the average value of f on the interval [1, 4].</b>',
      hint: '先求 ∫₁⁴ (2x + 1) dx，再除以區間長度 b − a = 3。',
      hintEn: 'First find ∫₁⁴ (2x + 1) dx, then divide by the length of the interval, b − a = 3.',
      answer: { type: 'num', accept: [6], display: '6', displayEn: '6' },
      sol: [
        { mk: 'M1', tx: '平均值 = (1/(4 − 1))∫₁⁴ (2x + 1) dx = (1/3)∫₁⁴ (2x + 1) dx', txEn: 'Average value = (1/(4 − 1))∫₁⁴ (2x + 1) dx = (1/3)∫₁⁴ (2x + 1) dx' },
        { mk: 'M1', tx: '= (1/3)[x² + x]₁⁴', txEn: '= (1/3)[x² + x]₁⁴' },
        { mk: 'A1', tx: '= (1/3)[(16 + 4) − (1 + 1)] = (1/3)(18) = 6', txEn: '= (1/3)[(16 + 4) − (1 + 1)] = (1/3)(18) = 6' },
        { mk: 'A1', tx: '結論：f 在 [1, 4] 上的平均值為 6。', txEn: 'Conclusion: the average value of f on [1, 4] is 6.' }
      ],
      note: '常見失分：只寫出總積分 18；除以的是區間長度 4 − 1 = 3，不是 4 或 1。',
      noteEn: 'Common loss of marks: giving only the total integral 18; divide by the length of the interval, 4 − 1 = 3, not by 4 or 1.'
    },
    {
      id: 'de28',
      sub: '9.6 定積分的其他應用（平均值、變率）',
      lv: 3,
      q: '設 f(x) = cos x。<br><b>求 f 在區間 [0, π/2] 上的平均值（答案以 π 表示）。</b>',
      qEn: 'Let f(x) = cos x.<br><b>Find the average value of f on the interval [0, π/2] (give the answer in terms of π).</b>',
      hint: '平均值 = (1/(π/2 − 0))∫₀<sup>π/2</sup> cos x dx = (2/π)[sin x]₀<sup>π/2</sup>。',
      hintEn: 'Average value = (1/(π/2 − 0))∫₀<sup>π/2</sup> cos x dx = (2/π)[sin x]₀<sup>π/2</sup>.',
      answer: { type: 'num', accept: [2 / Math.PI, 0.6366], display: '2/π （≈ 0.6366）', displayEn: '2/π  (≈ 0.6366)' },
      sol: [
        { mk: 'M1', tx: '平均值 = (1/(π/2))∫₀<sup>π/2</sup> cos x dx = (2/π)∫₀<sup>π/2</sup> cos x dx', txEn: 'Average value = (1/(π/2))∫₀<sup>π/2</sup> cos x dx = (2/π)∫₀<sup>π/2</sup> cos x dx' },
        { mk: 'M1', tx: '= (2/π)[sin x]₀<sup>π/2</sup>', txEn: '= (2/π)[sin x]₀<sup>π/2</sup>' },
        { mk: 'A1', tx: '= (2/π)(1 − 0) = 2/π', txEn: '= (2/π)(1 − 0) = 2/π' },
        { mk: 'A1', tx: '結論：f 在 [0, π/2] 上的平均值為 2/π ≈ 0.6366。', txEn: 'Conclusion: the average value of f on [0, π/2] is 2/π ≈ 0.6366.' }
      ],
      note: '常見失分：把除以 π/2 誤寫成乘 π/2，令答案變成 π/2；除以區間長度等於乘它的倒數。',
      noteEn: 'Common loss of marks: multiplying by π/2 instead of dividing by it, which gives π/2; dividing by the interval length is the same as multiplying by its reciprocal.'
    },
    {
      id: 'de29',
      sub: '9.6 定積分的其他應用（平均值、變率）',
      lv: 1,
      q: '一個質點沿直線運動，其速度（單位：m/s）為 v(t) = 3t² + 2，其中 t ≥ 0（單位：s）。<br><b>求質點由 t = 0 至 t = 3 的位移。</b>',
      qEn: 'A particle moves along a straight line with velocity v(t) = 3t² + 2 (in m/s), where t ≥ 0 (in s).<br><b>Find the displacement of the particle from t = 0 to t = 3.</b>',
      hint: '位移是速度對時間的定積分：s = ∫₀³ (3t² + 2) dt；變速運動不可用「速度 × 時間」。',
      hintEn: 'Displacement is the definite integral of velocity with respect to time: s = ∫₀³ (3t² + 2) dt; for motion with changing velocity, "velocity × time" cannot be used.',
      answer: { type: 'num', accept: [33], display: '33 m', displayEn: '33 m' },
      sol: [
        { mk: 'M1', tx: '位移 = ∫₀³ v(t) dt = ∫₀³ (3t² + 2) dt', txEn: 'Displacement = ∫₀³ v(t) dt = ∫₀³ (3t² + 2) dt' },
        { mk: 'M1', tx: '= [t³ + 2t]₀³', txEn: '= [t³ + 2t]₀³' },
        { mk: 'A1', tx: '= (27 + 6) − 0 = 33', txEn: '= (27 + 6) − 0 = 33' },
        { mk: 'A1', tx: '結論：質點的位移為 33 m。', txEn: 'Conclusion: the displacement of the particle is 33 m.' }
      ],
      note: '常見失分：把速度直接乘時間，例如 3 × (3 × 3² + 2)；速度隨時間改變時必須用定積分求位移。',
      noteEn: 'Common loss of marks: multiplying the velocity directly by the time, for example 3 × (3 × 3² + 2); when the velocity changes with time, a definite integral must be used to find the displacement.'
    },
    {
      id: 'de30',
      sub: '9.6 定積分的其他應用（平均值、變率）',
      lv: 3,
      q: '一個質點沿直線運動，其速度為 v(t) = t² − 4t + 3（m/s），0 ≤ t ≤ 4（s）。<br><b>求質點在 0 ≤ t ≤ 4 內運動的總路程。</b>',
      qEn: 'A particle moves along a straight line with velocity v(t) = t² − 4t + 3 (m/s), 0 ≤ t ≤ 4 (s).<br><b>Find the total distance travelled by the particle for 0 ≤ t ≤ 4.</b>',
      hint: '先解 v(t) = 0 得 t = 1、3，把 [0, 4] 分成三段；每段積分後取絕對值（速度為負的一段要變號）再相加。',
      hintEn: 'First solve v(t) = 0 to get t = 1 and t = 3, and split [0, 4] into three parts; take the absolute value of each integral (change the sign where the velocity is negative) and add them.',
      answer: { type: 'num', accept: [4], display: '4 m', displayEn: '4 m' },
      sol: [
        { mk: 'M1', tx: '解 t² − 4t + 3 = 0，即 (t − 1)(t − 3) = 0，得 t = 1 或 t = 3；在 (1, 3) 內 v(t) < 0，故須分段', txEn: 'Solve t² − 4t + 3 = 0, that is (t − 1)(t − 3) = 0, giving t = 1 or t = 3; for (1, 3), v(t) < 0, so the range must be split' },
        { mk: 'M1', tx: '∫₀¹ v dt = [t³/3 − 2t² + 3t]₀¹ = 1/3 − 2 + 3 = 4/3', txEn: '∫₀¹ v dt = [t³/3 − 2t² + 3t]₀¹ = 1/3 − 2 + 3 = 4/3' },
        { mk: 'M1', tx: '∫₁³ v dt = [t³/3 − 2t² + 3t]₁³ = 0 − 4/3 = −4/3；∫₃⁴ v dt = 4/3 − 0 = 4/3', txEn: '∫₁³ v dt = [t³/3 − 2t² + 3t]₁³ = 0 − 4/3 = −4/3; ∫₃⁴ v dt = 4/3 − 0 = 4/3' },
        { mk: 'A1', tx: '總路程 = 4/3 + |−4/3| + 4/3 = 4', txEn: 'Total distance = 4/3 + |−4/3| + 4/3 = 4' },
        { mk: 'A1', tx: '結論：總路程為 4 m（留意位移只有 ∫₀⁴ v dt = 4/3 m，與路程不同）。', txEn: 'Conclusion: the total distance is 4 m (note that the displacement is only ∫₀⁴ v dt = 4/3 m, which is different from the distance travelled).' }
      ],
      note: '常見失分：直接把 ∫₀⁴ v(t) dt = 4/3 當作路程；路程要把速度為負的區間取絕對值。',
      noteEn: 'Common loss of marks: taking ∫₀⁴ v(t) dt = 4/3 directly as the distance; the distance requires taking the absolute value over the interval where the velocity is negative.'
    }
  ];
})(typeof window !== 'undefined' ? window : globalThis);
