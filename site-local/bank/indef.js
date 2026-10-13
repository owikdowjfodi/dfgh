/* bank/indef.js — 不定積分及其應用（30 題）*/
(function (root) {
  var SUB = {
    S1: '8.1 不定積分的概念與基本公式',
    S2: '8.2 代換積分法',
    S3: '8.3 三角函數的積分',
    S4: '8.4 由導函數求原函數',
    S5: '8.5 積分的應用（初值問題與曲線族）'
  };
  root.M2Bank = root.M2Bank || {};
  root.M2Bank['indef'] = [

    /* ═══════ 8.1 不定積分的概念與基本公式（id01–id06）═══════ */
    {
      id: 'id01',
      sub: SUB.S1,
      lv: 1,
      q: '求不定積分 ∫ (3x² − 4x + 5) dx。',
      qEn: 'Find the indefinite integral ∫ (3x² − 4x + 5) dx.',
      hint: '逐項積分：xⁿ 的積分是 xⁿ⁺¹ ÷ (n + 1)（n ≠ −1），最後別忘記加上任意常數 C。',
      hintEn: 'Integrate term by term: the integral of xⁿ is xⁿ⁺¹ ÷ (n + 1) (n ≠ −1), and remember to add the arbitrary constant C at the end.',
      answer: { type: 'symbol', accept: ['x^3-2x^2+5x+C', 'x^3+5x-2x^2+C'], display: '∫ (3x² − 4x + 5) dx = x³ − 2x² + 5x + C', displayEn: '∫ (3x² − 4x + 5) dx = x³ − 2x² + 5x + C' },
      sol: [
        { mk: 'M1', tx: '逐項積分：∫ 3x² dx = 3 × x³ ÷ 3 = x³',
          txEn: 'Integrate term by term: ∫ 3x² dx = 3 × x³ ÷ 3 = x³' },
        { mk: 'M1', tx: '∫ −4x dx = −2x²，∫ 5 dx = 5x',
          txEn: '∫ −4x dx = −2x², ∫ 5 dx = 5x' },
        { mk: 'A1', tx: '故 ∫ (3x² − 4x + 5) dx = x³ − 2x² + 5x + C',
          txEn: 'Hence ∫ (3x² − 4x + 5) dx = x³ − 2x² + 5x + C' },
        { mk: 'A1', tx: '驗算：(x³ − 2x² + 5x + C)′ = 3x² − 4x + 5，與被積函數相同。',
          txEn: 'Check: (x³ − 2x² + 5x + C)′ = 3x² − 4x + 5, which is the integrand.' }
      ],
      note: '常見失分：漏寫任意常數 C。不定積分代表一族函數（曲線族），缺少 C 就只寫出其中一條曲線。',
      noteEn: 'Common loss of marks: omitting the arbitrary constant C. An indefinite integral represents a family of functions (a family of curves); without C you have written only one curve of the family.'
    },
    {
      id: 'id02',
      sub: SUB.S1,
      lv: 1,
      q: '求 ∫ (x³ + 1/x²) dx（x ≠ 0）。',
      qEn: 'Find ∫ (x³ + 1/x²) dx (x ≠ 0).',
      hint: '把 1/x² 寫成 x⁻²；指數 −2 ≠ −1，積分後指數變 −1，即得到 −1/x。',
      hintEn: 'Write 1/x² as x⁻²; since the index −2 ≠ −1, after integration the index becomes −1, giving −1/x.',
      answer: { type: 'symbol', accept: ['x^4/4-1/x+C', '(1/4)x^4-1/x+C', 'x^4/4-x^-1+C'], display: '∫ (x³ + 1/x²) dx = x⁴/4 − 1/x + C', displayEn: '∫ (x³ + 1/x²) dx = x⁴/4 − 1/x + C' },
      sol: [
        { mk: 'M1', tx: '改寫 1/x² = x^(−2)，整個被積函數為 x³ + x^(−2)',
          txEn: 'Rewrite 1/x² = x^(−2), so the whole integrand is x³ + x^(−2)' },
        { mk: 'M1', tx: '∫ x³ dx = x⁴ ÷ 4；∫ x^(−2) dx = x^(−1) ÷ (−1) = −1/x',
          txEn: '∫ x³ dx = x⁴ ÷ 4; ∫ x^(−2) dx = x^(−1) ÷ (−1) = −1/x' },
        { mk: 'A1', tx: '故 ∫ (x³ + 1/x²) dx = x⁴/4 − 1/x + C',
          txEn: 'Hence ∫ (x³ + 1/x²) dx = x⁴/4 − 1/x + C' },
        { mk: 'A1', tx: '驗算：d/dx (x⁴/4 − 1/x) = x³ + 1/x²，與被積函數相同。',
          txEn: 'Check: d/dx (x⁴/4 − 1/x) = x³ + 1/x², which is the integrand.' }
      ],
      note: '指數為 −2 時積分後得 −x⁻¹，符號最容易出錯；另外要養成每題檢查一次「+ C」的習慣。',
      noteEn: 'For the index −2 the integral is −x⁻¹, and the sign is the most common mistake; also get into the habit of checking for "+ C" in every question.'
    },
    {
      id: 'id03',
      sub: SUB.S1,
      lv: 1,
      q: '求 ∫ √x dx（x > 0）。',
      qEn: 'Find ∫ √x dx (x > 0).',
      hint: '把 √x 寫成 x^(1/2)，指數加 1 得 3/2，再除以 3/2（即乘 2/3）。',
      hintEn: 'Write √x as x^(1/2); adding 1 to the index gives 3/2, then divide by 3/2 (that is, multiply by 2/3).',
      answer: { type: 'symbol', accept: ['(2/3)x^(3/2)+C', '2x^(3/2)/3+C', '2x√x/3+C'], display: '∫ √x dx = (2/3)x^(3/2) + C（即 (2x√x)/3 + C）', displayEn: '∫ √x dx = (2/3)x^(3/2) + C  (i.e. (2x√x)/3 + C)' },
      sol: [
        { mk: 'M1', tx: '把根式改寫成指數：√x = x^(1/2)',
          txEn: 'Rewrite the surd using an index: √x = x^(1/2)' },
        { mk: 'M1', tx: '∫ x^(1/2) dx = x^(3/2) ÷ (3/2)',
          txEn: '∫ x^(1/2) dx = x^(3/2) ÷ (3/2)' },
        { mk: 'A1', tx: '= (2/3)x^(3/2) + C',
          txEn: '= (2/3)x^(3/2) + C' },
        { mk: 'A1', tx: '驗算：d/dx [(2/3)x^(3/2)] = (2/3)(3/2)x^(1/2) = √x，正確。',
          txEn: 'Check: d/dx [(2/3)x^(3/2)] = (2/3)(3/2)x^(1/2) = √x, correct.' }
      ],
      note: '分數指數運算要熟練；答案寫成 (2x√x)/3 + C 同樣正確，但指數化簡後不可留有 x^(1/2) × x 這類未合併的式子。',
      noteEn: 'Fractional indices must be handled fluently; writing the answer as (2x√x)/3 + C is equally correct, but after simplification you must not leave expressions such as x^(1/2) × x uncombined.'
    },
    {
      id: 'id04',
      sub: SUB.S1,
      lv: 2,
      q: '求 ∫ (3√x − 4/x²) dx（x > 0）。',
      qEn: 'Find ∫ (3√x − 4/x²) dx (x > 0).',
      hint: '先改寫成 3x^(1/2) − 4x^(−2)，再逐項套用冪函數的積分公式。',
      hintEn: 'First rewrite as 3x^(1/2) − 4x^(−2), then apply the power formula for integration to each term.',
      answer: { type: 'symbol', accept: ['2x^(3/2)+4/x+C', '2x√x+4/x+C', '(2x√x)+4/x+C'], display: '∫ (3√x − 4/x²) dx = 2x^(3/2) + 4/x + C', displayEn: '∫ (3√x − 4/x²) dx = 2x^(3/2) + 4/x + C' },
      sol: [
        { mk: 'M1', tx: '改寫：3√x − 4/x² = 3x^(1/2) − 4x^(−2)',
          txEn: 'Rewrite: 3√x − 4/x² = 3x^(1/2) − 4x^(−2)' },
        { mk: 'M1', tx: '∫ 3x^(1/2) dx = 3 × x^(3/2) ÷ (3/2) = 2x^(3/2)',
          txEn: '∫ 3x^(1/2) dx = 3 × x^(3/2) ÷ (3/2) = 2x^(3/2)' },
        { mk: 'M1', tx: '∫ −4x^(−2) dx = −4 × x^(−1) ÷ (−1) = 4/x',
          txEn: '∫ −4x^(−2) dx = −4 × x^(−1) ÷ (−1) = 4/x' },
        { mk: 'A1', tx: '故 ∫ (3√x − 4/x²) dx = 2x^(3/2) + 4/x + C',
          txEn: 'Hence ∫ (3√x − 4/x²) dx = 2x^(3/2) + 4/x + C' }
      ],
      note: '符號陷阱：∫ x^(−2) dx = −x^(−1)，再乘上前置的 −4 便得 +4/x，寫成 −4/x 是最常見的錯誤。',
      noteEn: 'Sign trap: ∫ x^(−2) dx = −x^(−1), and multiplying by the −4 in front gives +4/x; writing −4/x is the most common error.'
    },
    {
      id: 'id05',
      sub: SUB.S1,
      lv: 3,
      q: '設 f(x) 為一函數，且 ∫ f(x) dx = x³ − 4x + C。<br><b>求 ∫ [2f(x) + 3x²] dx。</b>',
      qEn: 'Let f(x) be a function such that ∫ f(x) dx = x³ − 4x + C.<br><b>Find ∫ [2f(x) + 3x²] dx.</b>',
      hint: '先對已知的積分結果求導，還原出 f(x)；再用積分的線性性質逐項積分。',
      hintEn: 'First differentiate the given integral to recover f(x); then integrate term by term using the linearity of integration.',
      answer: { type: 'symbol', accept: ['3x^3-8x+C', '3x^3-8x+c', '3x^3+C-8x'], display: '∫ [2f(x) + 3x²] dx = 3x³ − 8x + C', displayEn: '∫ [2f(x) + 3x²] dx = 3x³ − 8x + C' },
      sol: [
        { mk: 'M1', tx: '由 ∫ f(x) dx = x³ − 4x + C 求導，得 f(x) = 3x² − 4',
          txEn: 'Differentiating ∫ f(x) dx = x³ − 4x + C gives f(x) = 3x² − 4' },
        { mk: 'M1', tx: '2f(x) + 3x² = 2(3x² − 4) + 3x² = 9x² − 8',
          txEn: '2f(x) + 3x² = 2(3x² − 4) + 3x² = 9x² − 8' },
        { mk: 'M1', tx: '∫ (9x² − 8) dx = 3x³ − 8x',
          txEn: '∫ (9x² − 8) dx = 3x³ − 8x' },
        { mk: 'A1', tx: '故 ∫ [2f(x) + 3x²] dx = 3x³ − 8x + C',
          txEn: 'Hence ∫ [2f(x) + 3x²] dx = 3x³ − 8x + C' }
      ],
      note: '此題要先由「積分結果」求導還原 f(x)；若誤把 x³ − 4x 當作 f(x) 而寫成 2(x³ − 4x) + 3x²，整題方向就錯了。',
      noteEn: 'Here you must differentiate the "integral result" to recover f(x); if you wrongly treat x³ − 4x as f(x) and write 2(x³ − 4x) + 3x², the whole approach is wrong.'
    },
    {
      id: 'id06',
      sub: SUB.S1,
      lv: 2,
      q: '求 ∫ (2x + 1)² dx。',
      qEn: 'Find ∫ (2x + 1)² dx.',
      hint: '先把 (2x + 1)² 展開成 4x² + 4x + 1，再逐項積分；也可令 u = 2x + 1 作代換。',
      hintEn: 'First expand (2x + 1)² as 4x² + 4x + 1 and integrate term by term; alternatively, substitute u = 2x + 1.',
      answer: { type: 'symbol', accept: ['(4/3)x^3+2x^2+x+C', '4x^3/3+2x^2+x+C', '(2x+1)^3/6+C'], display: '∫ (2x + 1)² dx = (4/3)x³ + 2x² + x + C（亦可寫 (2x + 1)³/6 + C）', displayEn: '∫ (2x + 1)² dx = (4/3)x³ + 2x² + x + C (also (2x + 1)³/6 + C)' },
      sol: [
        { mk: 'M1', tx: '展開：(2x + 1)² = 4x² + 4x + 1',
          txEn: 'Expand: (2x + 1)² = 4x² + 4x + 1' },
        { mk: 'M1', tx: '∫ 4x² dx = (4/3)x³，∫ 4x dx = 2x²，∫ 1 dx = x',
          txEn: '∫ 4x² dx = (4/3)x³, ∫ 4x dx = 2x², ∫ 1 dx = x' },
        { mk: 'A1', tx: '故 ∫ (2x + 1)² dx = (4/3)x³ + 2x² + x + C',
          txEn: 'Hence ∫ (2x + 1)² dx = (4/3)x³ + 2x² + x + C' },
        { mk: 'A1', tx: '另一寫法：令 u = 2x + 1，∫ u² × (1/2) du = u³/6 = (2x + 1)³/6，兩式只相差常數。',
          txEn: 'Alternative: put u = 2x + 1, then ∫ u² × (1/2) du = u³/6 = (2x + 1)³/6; the two forms differ only by a constant.' }
      ],
      note: '(2x + 1)³/6 求導得 (2x + 1)²，因為內層導數 2 被分母 6 抵銷；誤寫成 (2x + 1)³/3 就會多出兩倍。',
      noteEn: 'Differentiating (2x + 1)³/6 gives (2x + 1)², because the inner derivative 2 cancels with the denominator 6; writing (2x + 1)³/3 would be twice as large.'
    },

    /* ═══════ 8.2 代換積分法（id07–id12）═══════ */
    {
      id: 'id07',
      sub: SUB.S2,
      lv: 1,
      q: '用代換法求 ∫ 2x(x² + 1)⁴ dx。',
      qEn: 'Use substitution to find ∫ 2x(x² + 1)⁴ dx.',
      hint: '令 u = x² + 1，則 du = 2x dx，整個被積式正好化成 u⁴ du。',
      hintEn: 'Let u = x² + 1, then du = 2x dx, and the whole integrand becomes exactly u⁴ du.',
      answer: { type: 'symbol', accept: ['(x^2+1)^5/5+C', '(1/5)(x^2+1)^5+C'], display: '∫ 2x(x² + 1)⁴ dx = (x² + 1)⁵/5 + C', displayEn: '∫ 2x(x² + 1)⁴ dx = (x² + 1)⁵/5 + C' },
      sol: [
        { mk: 'M1', tx: '令 u = x² + 1，則 du = 2x dx',
          txEn: 'Let u = x² + 1, then du = 2x dx' },
        { mk: 'M1', tx: '∫ 2x(x² + 1)⁴ dx = ∫ u⁴ du',
          txEn: '∫ 2x(x² + 1)⁴ dx = ∫ u⁴ du' },
        { mk: 'A1', tx: '= u⁵/5 + C = (x² + 1)⁵/5 + C',
          txEn: '= u⁵/5 + C = (x² + 1)⁵/5 + C' },
        { mk: 'A1', tx: '驗算：d/dx [(x² + 1)⁵/5] = (x² + 1)⁴ × 2x，與被積函數相同。',
          txEn: 'Check: d/dx [(x² + 1)⁵/5] = (x² + 1)⁴ × 2x, which is the integrand.' }
      ],
      note: '代換後要把 u 還原成 x，答案不可留有 u；漏寫 + C 亦是常見失分。',
      noteEn: 'After substitution, u must be changed back to x, so the answer must not contain u; omitting + C is another common loss of marks.'
    },
    {
      id: 'id08',
      sub: SUB.S2,
      lv: 1,
      q: '用代換法求 ∫ 3x²(x³ − 2)⁵ dx。',
      qEn: 'Use substitution to find ∫ 3x²(x³ − 2)⁵ dx.',
      hint: '令 u = x³ − 2，則 du = 3x² dx，前面的 3x² 會被 du 完全吸收，不需補係數。',
      hintEn: 'Let u = x³ − 2, then du = 3x² dx; the factor 3x² in front is absorbed completely by du, so no extra constant is needed.',
      answer: { type: 'symbol', accept: ['(x^3-2)^6/6+C', '(1/6)(x^3-2)^6+C'], display: '∫ 3x²(x³ − 2)⁵ dx = (x³ − 2)⁶/6 + C', displayEn: '∫ 3x²(x³ − 2)⁵ dx = (x³ − 2)⁶/6 + C' },
      sol: [
        { mk: 'M1', tx: '令 u = x³ − 2，則 du = 3x² dx',
          txEn: 'Let u = x³ − 2, then du = 3x² dx' },
        { mk: 'M1', tx: '∫ 3x²(x³ − 2)⁵ dx = ∫ u⁵ du',
          txEn: '∫ 3x²(x³ − 2)⁵ dx = ∫ u⁵ du' },
        { mk: 'A1', tx: '= u⁶/6 + C = (x³ − 2)⁶/6 + C',
          txEn: '= u⁶/6 + C = (x³ − 2)⁶/6 + C' },
        { mk: 'A1', tx: '驗算：d/dx [(x³ − 2)⁶/6] = 6(x³ − 2)⁵ × 3x² ÷ 6 = 3x²(x³ − 2)⁵。',
          txEn: 'Check: d/dx [(x³ − 2)⁶/6] = 6(x³ − 2)⁵ × 3x² ÷ 6 = 3x²(x³ − 2)⁵.' }
      ],
      note: '切勿把 3x²「搬」到括號外再乘一次：du = 3x² dx 已把係數吸收，補係數或漏係數都會錯。',
      noteEn: 'Never "move" 3x² outside the bracket and multiply again: du = 3x² dx has already absorbed the coefficient, so adding or omitting a constant both give a wrong answer.'
    },
    {
      id: 'id09',
      sub: SUB.S2,
      lv: 2,
      q: '用代換法求 ∫ (2x + 3)(x² + 3x)⁴ dx。',
      qEn: 'Use substitution to find ∫ (2x + 3)(x² + 3x)⁴ dx.',
      hint: '令 u = x² + 3x，觀察 du/dx = 2x + 3 恰好是被積式的另一個因式。',
      hintEn: 'Let u = x² + 3x and observe that du/dx = 2x + 3 is exactly the other factor of the integrand.',
      answer: { type: 'symbol', accept: ['(x^2+3x)^5/5+C', '(1/5)(x^2+3x)^5+C'], display: '∫ (2x + 3)(x² + 3x)⁴ dx = (x² + 3x)⁵/5 + C', displayEn: '∫ (2x + 3)(x² + 3x)⁴ dx = (x² + 3x)⁵/5 + C' },
      sol: [
        { mk: 'M1', tx: '令 u = x² + 3x，則 du = (2x + 3) dx',
          txEn: 'Let u = x² + 3x, then du = (2x + 3) dx' },
        { mk: 'M1', tx: '∫ (2x + 3)(x² + 3x)⁴ dx = ∫ u⁴ du',
          txEn: '∫ (2x + 3)(x² + 3x)⁴ dx = ∫ u⁴ du' },
        { mk: 'A1', tx: '= u⁵/5 + C = (x² + 3x)⁵/5 + C',
          txEn: '= u⁵/5 + C = (x² + 3x)⁵/5 + C' },
        { mk: 'A1', tx: '驗算：d/dx [(x² + 3x)⁵/5] = (x² + 3x)⁴ × (2x + 3)，正確。',
          txEn: 'Check: d/dx [(x² + 3x)⁵/5] = (x² + 3x)⁴ × (2x + 3), correct.' }
      ],
      note: '判斷能否直接代換，要看前面的因式是否恰為 du/dx（或相差一個常數倍）；若前面是 3x + 1 就不成比例。',
      noteEn: 'To decide whether direct substitution works, check whether the factor in front is exactly du/dx (or a constant multiple of it); if it were 3x + 1, the two would not be proportional.'
    },
    {
      id: 'id10',
      sub: SUB.S2,
      lv: 3,
      q: '用代換法求 ∫ x/(x² + 4)³ dx。',
      qEn: 'Use substitution to find ∫ x/(x² + 4)³ dx.',
      hint: '令 u = x² + 4，則 du = 2x dx，即 x dx = du/2，被積式化成 (1/2)∫ u⁻³ du。',
      hintEn: 'Let u = x² + 4, then du = 2x dx, so x dx = du/2, and the integrand becomes (1/2)∫ u⁻³ du.',
      answer: { type: 'symbol', accept: ['-1/(4(x^2+4)^2)+C', '-1/4(x^2+4)^-2+C', '-(1/4)(x^2+4)^-2+C'], display: '∫ x/(x² + 4)³ dx = −1/[4(x² + 4)²] + C', displayEn: '∫ x/(x² + 4)³ dx = −1/[4(x² + 4)²] + C' },
      sol: [
        { mk: 'M1', tx: '令 u = x² + 4，則 du = 2x dx，即 x dx = du ÷ 2',
          txEn: 'Let u = x² + 4, then du = 2x dx, so x dx = du ÷ 2' },
        { mk: 'M1', tx: '∫ x/(x² + 4)³ dx = (1/2)∫ u^(−3) du',
          txEn: '∫ x/(x² + 4)³ dx = (1/2)∫ u^(−3) du' },
        { mk: 'A1', tx: '= (1/2) × u^(−2) ÷ (−2) + C = −1/(4u²) + C',
          txEn: '= (1/2) × u^(−2) ÷ (−2) + C = −1/(4u²) + C' },
        { mk: 'A1', tx: '還原 u：= −1/[4(x² + 4)²] + C',
          txEn: 'Change u back: = −1/[4(x² + 4)²] + C' }
      ],
      note: 'u^(−3) 積分後得 u^(−2) ÷ (−2)：負號與 2 都不可以漏，最終結果用分數形式較清晰。',
      noteEn: 'Integrating u^(−3) gives u^(−2) ÷ (−2): neither the minus sign nor the 2 may be omitted, and a fraction form is clearer for the final answer.'
    },
    {
      id: 'id11',
      sub: SUB.S2,
      lv: 3,
      q: '用代換法求 ∫ (x + 1)/√(x² + 2x + 5) dx。',
      qEn: 'Use substitution to find ∫ (x + 1)/√(x² + 2x + 5) dx.',
      hint: '令 u = x² + 2x + 5，則 du = 2(x + 1) dx，分子 (x + 1) dx 化成 du/2。',
      hintEn: 'Let u = x² + 2x + 5, then du = 2(x + 1) dx, so the numerator (x + 1) dx becomes du/2.',
      answer: { type: 'symbol', accept: ['√(x^2+2x+5)+C', '(x^2+2x+5)^(1/2)+C'], display: '∫ (x + 1)/√(x² + 2x + 5) dx = √(x² + 2x + 5) + C', displayEn: '∫ (x + 1)/√(x² + 2x + 5) dx = √(x² + 2x + 5) + C' },
      sol: [
        { mk: 'M1', tx: '令 u = x² + 2x + 5，則 du = 2(x + 1) dx，即 (x + 1) dx = du ÷ 2',
          txEn: 'Let u = x² + 2x + 5, then du = 2(x + 1) dx, so (x + 1) dx = du ÷ 2' },
        { mk: 'M1', tx: '∫ (x + 1)/√(x² + 2x + 5) dx = (1/2)∫ u^(−1/2) du',
          txEn: '∫ (x + 1)/√(x² + 2x + 5) dx = (1/2)∫ u^(−1/2) du' },
        { mk: 'A1', tx: '= (1/2) × 2u^(1/2) + C = √u + C',
          txEn: '= (1/2) × 2u^(1/2) + C = √u + C' },
        { mk: 'A1', tx: '還原 u：= √(x² + 2x + 5) + C',
          txEn: 'Change u back: = √(x² + 2x + 5) + C' }
      ],
      note: 'x² + 2x + 5 的判別式 4 − 20 < 0 且首項係數為正，故根號內恆正，函數在整個實數域都有定義。',
      noteEn: 'For x² + 2x + 5 the discriminant is 4 − 20 < 0 and the leading coefficient is positive, so the expression under the square root is always positive and the function is defined for all real x.'
    },
    {
      id: 'id12',
      sub: SUB.S2,
      lv: 3,
      q: '用代換法求 ∫ (㏑ x)/x dx（x > 0）。',
      qEn: 'Use substitution to find ∫ (ln x)/x dx (x > 0).',
      hint: '令 u = ㏑ x，則 du = (1/x) dx，被積式化成 ∫ u du。',
      hintEn: 'Let u = ln x, then du = (1/x) dx, and the integrand becomes ∫ u du.',
      answer: { type: 'symbol', accept: ['(lnx)^2/2+C', '(1/2)(lnx)^2+C', '(㏑x)^2/2+C', 'ln^2x/2+C'], display: '∫ (㏑ x)/x dx = (㏑ x)²/2 + C', displayEn: '∫ (ln x)/x dx = (ln x)²/2 + C' },
      sol: [
        { mk: 'M1', tx: '令 u = ㏑ x（x > 0），則 du = (1/x) dx',
          txEn: 'Let u = ln x (x > 0), then du = (1/x) dx' },
        { mk: 'M1', tx: '∫ (㏑ x)/x dx = ∫ u du',
          txEn: '∫ (ln x)/x dx = ∫ u du' },
        { mk: 'A1', tx: '= u²/2 + C = (㏑ x)²/2 + C',
          txEn: '= u²/2 + C = (ln x)²/2 + C' },
        { mk: 'A1', tx: '驗算：d/dx [(㏑ x)²/2] = 2(㏑ x) ÷ 2 × (1/x) = (㏑ x)/x，與被積函數相同。',
          txEn: 'Check: d/dx [(ln x)²/2] = 2(ln x) ÷ 2 × (1/x) = (ln x)/x, which is the integrand.' }
      ],
      note: '此題的特徵是「一個函數乘以它的導數」；若被積式換成 (㏑ x)/x²，前面的因式不再是 du，就要改用分部積分法。',
      noteEn: 'The feature here is "a function multiplied by its derivative"; if the integrand were (ln x)/x² instead, the factor in front would no longer be du and integration by parts would be needed.'
    },

    /* ═══════ 8.3 三角函數的積分（id13–id18）═══════ */
    {
      id: 'id13',
      sub: SUB.S3,
      lv: 1,
      q: '求 ∫ (3 sin x + 2 cos x) dx。',
      qEn: 'Find ∫ (3 sin x + 2 cos x) dx.',
      hint: 'sin x 的積分是 −cos x，cos x 的積分是 sin x；常數倍可提到積分符號外。',
      hintEn: 'The integral of sin x is −cos x and the integral of cos x is sin x; constant multiples can be taken outside the integral sign.',
      answer: { type: 'symbol', accept: ['-3cosx+2sinx+C', '2sinx-3cosx+C'], display: '∫ (3 sin x + 2 cos x) dx = −3 cos x + 2 sin x + C', displayEn: '∫ (3 sin x + 2 cos x) dx = −3 cos x + 2 sin x + C' },
      sol: [
        { mk: 'M1', tx: '∫ 3 sin x dx = 3 × (−cos x) = −3 cos x',
          txEn: '∫ 3 sin x dx = 3 × (−cos x) = −3 cos x' },
        { mk: 'M1', tx: '∫ 2 cos x dx = 2 sin x',
          txEn: '∫ 2 cos x dx = 2 sin x' },
        { mk: 'A1', tx: '故 ∫ (3 sin x + 2 cos x) dx = −3 cos x + 2 sin x + C',
          txEn: 'Hence ∫ (3 sin x + 2 cos x) dx = −3 cos x + 2 sin x + C' },
        { mk: 'A1', tx: '驗算：(−3 cos x + 2 sin x + C)′ = 3 sin x + 2 cos x，正確。',
          txEn: 'Check: (−3 cos x + 2 sin x + C)′ = 3 sin x + 2 cos x, correct.' }
      ],
      note: '最基本亦最常錯的一步：∫ sin x dx = −cos x 帶負號，而 ∫ cos x dx = sin x 不帶負號。',
      noteEn: 'The most basic and most frequently mistaken step: ∫ sin x dx = −cos x carries a minus sign, while ∫ cos x dx = sin x does not.'
    },
    {
      id: 'id14',
      sub: SUB.S3,
      lv: 1,
      q: '求 ∫ (sec²x − 4 sin x) dx。',
      qEn: 'Find ∫ (sec²x − 4 sin x) dx.',
      hint: 'sec²x 的積分是 tan x；而 −4 sin x 的積分是 +4 cos x，注意負負得正。',
      hintEn: 'The integral of sec²x is tan x; the integral of −4 sin x is +4 cos x, so watch the signs.',
      answer: { type: 'symbol', accept: ['tanx+4cosx+C', '4cosx+tanx+C'], display: '∫ (sec²x − 4 sin x) dx = tan x + 4 cos x + C', displayEn: '∫ (sec²x − 4 sin x) dx = tan x + 4 cos x + C' },
      sol: [
        { mk: 'M1', tx: '∫ sec²x dx = tan x',
          txEn: '∫ sec²x dx = tan x' },
        { mk: 'M1', tx: '∫ −4 sin x dx = −4 × (−cos x) = 4 cos x',
          txEn: '∫ −4 sin x dx = −4 × (−cos x) = 4 cos x' },
        { mk: 'A1', tx: '故 ∫ (sec²x − 4 sin x) dx = tan x + 4 cos x + C',
          txEn: 'Hence ∫ (sec²x − 4 sin x) dx = tan x + 4 cos x + C' },
        { mk: 'A1', tx: '驗算：(tan x + 4 cos x)′ = sec²x − 4 sin x，正確。',
          txEn: 'Check: (tan x + 4 cos x)′ = sec²x − 4 sin x, correct.' }
      ],
      note: '失分陷阱：負號經過積分後消失，∫ −4 sin x dx = +4 cos x；亦不可把 sec²x 的積分誤寫成 (sec³x)/3。',
      noteEn: 'Mark-losing trap: the minus sign disappears after integration, ∫ −4 sin x dx = +4 cos x; also do not wrongly write the integral of sec²x as (sec³x)/3.'
    },
    {
      id: 'id15',
      sub: SUB.S3,
      lv: 1,
      q: '求 ∫ sin 3x dx。',
      qEn: 'Find ∫ sin 3x dx.',
      hint: '令 u = 3x，則 du = 3 dx；內層為線性函數時，積分後要補上係數 1/3。',
      hintEn: 'Let u = 3x, then du = 3 dx; when the inner function is linear, multiply by 1/3 after integrating.',
      answer: { type: 'symbol', accept: ['-(1/3)cos3x+C', '-cos3x/3+C', '(-1/3)cos3x+C'], display: '∫ sin 3x dx = −(1/3)cos 3x + C', displayEn: '∫ sin 3x dx = −(1/3)cos 3x + C' },
      sol: [
        { mk: 'M1', tx: '令 u = 3x，則 du = 3 dx，即 dx = du ÷ 3',
          txEn: 'Let u = 3x, then du = 3 dx, so dx = du ÷ 3' },
        { mk: 'M1', tx: '∫ sin 3x dx = (1/3)∫ sin u du = (1/3)(−cos u) + C',
          txEn: '∫ sin 3x dx = (1/3)∫ sin u du = (1/3)(−cos u) + C' },
        { mk: 'A1', tx: '= −(1/3)cos 3x + C',
          txEn: '= −(1/3)cos 3x + C' },
        { mk: 'A1', tx: '驗算：d/dx [−(1/3)cos 3x] = (1/3) × 3 sin 3x = sin 3x，正確。',
          txEn: 'Check: d/dx [−(1/3)cos 3x] = (1/3) × 3 sin 3x = sin 3x, correct.' }
      ],
      note: '∫ sin(ax + b) dx = −(1/a)cos(ax + b) + C：漏掉 1/3 是最常見失分，最後別忘 + C。',
      noteEn: '∫ sin(ax + b) dx = −(1/a)cos(ax + b) + C: omitting 1/3 is the most common loss of marks, and do not forget + C at the end.'
    },
    {
      id: 'id16',
      sub: SUB.S3,
      lv: 3,
      q: '求 ∫ sin x cos x dx（答案可用不同的三角形式表示）。',
      qEn: 'Find ∫ sin x cos x dx (the answer may be given in different trigonometric forms).',
      hint: '兩種方法：① 令 u = sin x 作代換；② 用二倍角公式 sin x cos x = (1/2)sin 2x。',
      hintEn: 'Two methods: (i) substitute u = sin x; (ii) use the double-angle formula sin x cos x = (1/2)sin 2x.',
      answer: { type: 'symbol', accept: ['(sinx)^2/2+C', 'sin^2x/2+C', '-cos2x/4+C', '-(1/4)cos2x+C', '(-1/4)cos2x+C'], display: '∫ sin x cos x dx = (sin²x)/2 + C = −(cos 2x)/4 + C', displayEn: '∫ sin x cos x dx = (sin²x)/2 + C = −(cos 2x)/4 + C' },
      sol: [
        { mk: 'M1', tx: '方法一：令 u = sin x，則 du = cos x dx，得 ∫ u du',
          txEn: 'Method 1: let u = sin x, then du = cos x dx, giving ∫ u du' },
        { mk: 'M1', tx: '= u²/2 + C = (sin²x)/2 + C',
          txEn: '= u²/2 + C = (sin²x)/2 + C' },
        { mk: 'M1', tx: '方法二：sin x cos x = (1/2)sin 2x，故積分 = (1/2) × [−(1/2)cos 2x] = −(cos 2x)/4',
          txEn: 'Method 2: sin x cos x = (1/2)sin 2x, so the integral = (1/2) × [−(1/2)cos 2x] = −(cos 2x)/4' },
        { mk: 'A1', tx: '因 (sin²x)/2 = (1 − cos 2x)/4 = −(cos 2x)/4 + 1/4，兩式只差常數，同為正確答案。',
          txEn: 'Since (sin²x)/2 = (1 − cos 2x)/4 = −(cos 2x)/4 + 1/4, the two expressions differ only by a constant and are both correct.' }
      ],
      note: '不定積分的答案不唯一：相差常數的兩個式子都正確，批改時要能互換形式驗證，而不是死記一種寫法。',
      noteEn: 'The answer to an indefinite integral is not unique: two expressions differing by a constant are both correct, so you should be able to verify different forms rather than memorising a single one.'
    },
    {
      id: 'id17',
      sub: SUB.S3,
      lv: 3,
      q: '求 ∫ sin²x dx。',
      qEn: 'Find ∫ sin²x dx.',
      hint: '先用半角公式 sin²x = (1 − cos 2x)/2 把平方降次，再逐項積分。',
      hintEn: 'First use the half-angle formula sin²x = (1 − cos 2x)/2 to reduce the power, then integrate term by term.',
      answer: { type: 'symbol', accept: ['x/2-sin2x/4+C', 'x/2-(1/4)sin2x+C', '(1/2)x-(1/4)sin2x+C'], display: '∫ sin²x dx = x/2 − (sin 2x)/4 + C', displayEn: '∫ sin²x dx = x/2 − (sin 2x)/4 + C' },
      sol: [
        { mk: 'M1', tx: '用半角公式：sin²x = (1 − cos 2x)/2',
          txEn: 'Use the half-angle formula: sin²x = (1 − cos 2x)/2' },
        { mk: 'M1', tx: '∫ sin²x dx = (1/2)∫ (1 − cos 2x) dx',
          txEn: '∫ sin²x dx = (1/2)∫ (1 − cos 2x) dx' },
        { mk: 'M1', tx: '= (1/2)[x − (sin 2x)/2] + C',
          txEn: '= (1/2)[x − (sin 2x)/2] + C' },
        { mk: 'A1', tx: '故 ∫ sin²x dx = x/2 − (sin 2x)/4 + C',
          txEn: 'Hence ∫ sin²x dx = x/2 − (sin 2x)/4 + C' }
      ],
      note: '平方的三角函數必須先降次才可積分；直接寫成 −(cos³x)/3 是把「求導思維」錯用在積分上的典型錯誤。',
      noteEn: 'A squared trigonometric function must first be reduced in power before it can be integrated; writing −(cos³x)/3 is a typical error of applying differentiation thinking to integration.'
    },
    {
      id: 'id18',
      sub: SUB.S3,
      lv: 3,
      q: '求 ∫ cos³x dx。',
      qEn: 'Find ∫ cos³x dx.',
      hint: '把 cos³x 拆成 cos x × cos²x，再用 cos²x = 1 − sin²x，最後令 u = sin x 代換。',
      hintEn: 'Split cos³x as cos x × cos²x, then use cos²x = 1 − sin²x, and finally substitute u = sin x.',
      answer: { type: 'symbol', accept: ['sinx-(sinx)^3/3+C', 'sinx-sin^3x/3+C', 'sinx-(1/3)sin^3x+C'], display: '∫ cos³x dx = sin x − (sin³x)/3 + C', displayEn: '∫ cos³x dx = sin x − (sin³x)/3 + C' },
      sol: [
        { mk: 'M1', tx: '拆項：cos³x = cos x × cos²x = cos x (1 − sin²x)',
          txEn: 'Split the term: cos³x = cos x × cos²x = cos x (1 − sin²x)' },
        { mk: 'M1', tx: '∫ cos³x dx = ∫ (1 − sin²x) cos x dx；令 u = sin x，du = cos x dx',
          txEn: '∫ cos³x dx = ∫ (1 − sin²x) cos x dx; let u = sin x, du = cos x dx' },
        { mk: 'M1', tx: '= ∫ (1 − u²) du = u − u³/3 + C',
          txEn: '= ∫ (1 − u²) du = u − u³/3 + C' },
        { mk: 'A1', tx: '還原 u：= sin x − (sin³x)/3 + C',
          txEn: 'Change u back: = sin x − (sin³x)/3 + C' }
      ],
      note: '奇次冪的三角函數積分標準技巧是「拆出一個因式留作 du」；代換後必須還原成 x 並補上 + C。',
      noteEn: 'The standard technique for integrating an odd power of a trigonometric function is to "split off one factor to serve as du"; after substitution you must change back to x and add + C.'
    },

    /* ═══════ 8.4 由導函數求原函數（id19–id24）═══════ */
    {
      id: 'id19',
      sub: SUB.S4,
      lv: 1,
      q: '已知函數 f(x) 的導函數為 f′(x) = 4x³ − 6x + 1。<br><b>求 f(x)（答案以任意常數 C 表示）。</b>',
      qEn: 'The derivative of a function f(x) is f′(x) = 4x³ − 6x + 1.<br><b>Find f(x) (express your answer in terms of an arbitrary constant C).</b>',
      hint: '求原函數就是求不定積分：逐項把指數加 1，再除以新的指數。',
      hintEn: 'Finding an antiderivative means finding the indefinite integral: increase each index by 1 term by term, then divide by the new index.',
      answer: { type: 'symbol', accept: ['x^4-3x^2+x+C', 'x^4+x-3x^2+C'], display: 'f(x) = x⁴ − 3x² + x + C', displayEn: 'f(x) = x⁴ − 3x² + x + C' },
      sol: [
        { mk: 'M1', tx: 'f(x) = ∫ (4x³ − 6x + 1) dx',
          txEn: 'f(x) = ∫ (4x³ − 6x + 1) dx' },
        { mk: 'M1', tx: '∫ 4x³ dx = x⁴，∫ −6x dx = −3x²，∫ 1 dx = x',
          txEn: '∫ 4x³ dx = x⁴, ∫ −6x dx = −3x², ∫ 1 dx = x' },
        { mk: 'A1', tx: '故 f(x) = x⁴ − 3x² + x + C',
          txEn: 'Hence f(x) = x⁴ − 3x² + x + C' },
        { mk: 'A1', tx: '驗算：f′(x) = 4x³ − 6x + 1，與題設相符。',
          txEn: 'Check: f′(x) = 4x³ − 6x + 1, which agrees with the given condition.' }
      ],
      note: '由導函數求原函數時，常數項無法由 f′ 決定，所以必須保留 + C；要定出 C 需要額外一點的座標。',
      noteEn: 'When finding an antiderivative from the derivative, the constant term cannot be determined from f′, so + C must be kept; fixing C requires the coordinates of an extra point.'
    },
    {
      id: 'id20',
      sub: SUB.S4,
      lv: 2,
      q: '已知 g′(x) = 3 + 2/x²（x ≠ 0）。<br><b>求 g(x)。</b>',
      qEn: 'It is given that g′(x) = 3 + 2/x² (x ≠ 0).<br><b>Find g(x).</b>',
      hint: '把 2/x² 寫成 2x⁻²，再用冪函數公式；積分結果中會出現 −2/x。',
      hintEn: 'Write 2/x² as 2x⁻² and use the power formula; the result of the integration will contain −2/x.',
      answer: { type: 'symbol', accept: ['3x-2/x+C', '-2/x+3x+C'], display: 'g(x) = 3x − 2/x + C', displayEn: 'g(x) = 3x − 2/x + C' },
      sol: [
        { mk: 'M1', tx: 'g(x) = ∫ (3 + 2x^(−2)) dx',
          txEn: 'g(x) = ∫ (3 + 2x^(−2)) dx' },
        { mk: 'M1', tx: '∫ 3 dx = 3x',
          txEn: '∫ 3 dx = 3x' },
        { mk: 'M1', tx: '∫ 2x^(−2) dx = 2 × x^(−1) ÷ (−1) = −2/x',
          txEn: '∫ 2x^(−2) dx = 2 × x^(−1) ÷ (−1) = −2/x' },
        { mk: 'A1', tx: '故 g(x) = 3x − 2/x + C',
          txEn: 'Hence g(x) = 3x − 2/x + C' }
      ],
      note: 'x^(−2) 的積分是 −x^(−1)，符號不可漏；此題定義域不含 x = 0，積分區間必須避開原點。',
      noteEn: 'The integral of x^(−2) is −x^(−1), and the minus sign must not be omitted; the domain here excludes x = 0, so any interval of integration must avoid the origin.'
    },
    {
      id: 'id21',
      sub: SUB.S4,
      lv: 2,
      q: '已知 y′(x) = √x − 1/√x（x > 0）。<br><b>求 y(x)。</b>',
      qEn: 'It is given that y′(x) = √x − 1/√x (x > 0).<br><b>Find y(x).</b>',
      hint: '改寫成 x^(1/2) − x^(−1/2)；兩個指數分別加 1 後得 3/2 與 1/2。',
      hintEn: 'Rewrite as x^(1/2) − x^(−1/2); adding 1 to each index gives 3/2 and 1/2 respectively.',
      answer: { type: 'symbol', accept: ['(2/3)x^(3/2)-2√x+C', '2x^(3/2)/3-2x^(1/2)+C', '2x√x/3-2√x+C'], display: 'y(x) = (2/3)x^(3/2) − 2√x + C', displayEn: 'y(x) = (2/3)x^(3/2) − 2√x + C' },
      sol: [
        { mk: 'M1', tx: 'y(x) = ∫ (x^(1/2) − x^(−1/2)) dx',
          txEn: 'y(x) = ∫ (x^(1/2) − x^(−1/2)) dx' },
        { mk: 'M1', tx: '∫ x^(1/2) dx = x^(3/2) ÷ (3/2) = (2/3)x^(3/2)',
          txEn: '∫ x^(1/2) dx = x^(3/2) ÷ (3/2) = (2/3)x^(3/2)' },
        { mk: 'M1', tx: '∫ x^(−1/2) dx = x^(1/2) ÷ (1/2) = 2√x',
          txEn: '∫ x^(−1/2) dx = x^(1/2) ÷ (1/2) = 2√x' },
        { mk: 'A1', tx: '故 y(x) = (2/3)x^(3/2) − 2√x + C',
          txEn: 'Hence y(x) = (2/3)x^(3/2) − 2√x + C' }
      ],
      note: '兩個指數都不是 −1，可直接用冪函數公式；只有指數為 −1（即 1/x）時才對應對數函數。',
      noteEn: 'Neither index is −1, so the power formula applies directly; only the index −1 (that is, 1/x) corresponds to a logarithmic function.'
    },
    {
      id: 'id22',
      sub: SUB.S4,
      lv: 1,
      q: '已知 F(x) = x³ − 5x 是函數 f(x) 的一個原函數。<br><b>求 f(x)。</b>',
      qEn: 'It is given that F(x) = x³ − 5x is an antiderivative of a function f(x).<br><b>Find f(x).</b>',
      hint: '「F 是 f 的原函數」即 F′(x) = f(x)，所以只要對 F(x) 求導。',
      hintEn: '"F is an antiderivative of f" means F′(x) = f(x), so you only need to differentiate F(x).',
      answer: { type: 'symbol', accept: ['3x^2-5', '-5+3x^2'], display: 'f(x) = 3x² − 5', displayEn: 'f(x) = 3x² − 5' },
      sol: [
        { mk: 'M1', tx: '由題意 F′(x) = f(x)',
          txEn: 'By the given condition, F′(x) = f(x)' },
        { mk: 'M1', tx: 'F(x) = x³ − 5x，逐項求導：d/dx (x³) = 3x²，d/dx (−5x) = −5',
          txEn: 'F(x) = x³ − 5x, so differentiate term by term: d/dx (x³) = 3x², d/dx (−5x) = −5' },
        { mk: 'A1', tx: '故 f(x) = 3x² − 5',
          txEn: 'Hence f(x) = 3x² − 5' },
        { mk: 'A1', tx: '驗算：∫ (3x² − 5) dx = x³ − 5x + C，取 C = 0 即得 F(x)，與題設一致。',
          txEn: 'Check: ∫ (3x² − 5) dx = x³ − 5x + C; taking C = 0 gives F(x), which agrees with the given condition.' }
      ],
      note: '注意方向：由原函數求導函數是「求導」，不要反過來做積分；此題的答案不會有任意常數。',
      noteEn: 'Watch the direction: going from an antiderivative to the derivative means differentiating, not integrating; the answer here contains no arbitrary constant.'
    },
    {
      id: 'id23',
      sub: SUB.S4,
      lv: 2,
      q: '已知 F(x) = kx³（k 為非零常數）是 f(x) = 6x² 的一個原函數。<br><b>求 k 的值。</b>',
      qEn: 'It is given that F(x) = kx³ (where k is a non-zero constant) is an antiderivative of f(x) = 6x².<br><b>Find the value of k.</b>',
      hint: '原函數的導數等於被積函數：先寫出 F′(x) = 3kx²，再與 6x² 比較係數。',
      hintEn: 'The derivative of the antiderivative equals the integrand: first write F′(x) = 3kx², then compare coefficients with 6x².',
      answer: { type: 'num', accept: [2, 2.0], display: 'k = 2', displayEn: 'k = 2' },
      sol: [
        { mk: 'M1', tx: '由「F 是 f 的原函數」得 F′(x) = 6x²',
          txEn: 'Since F is an antiderivative of f, F′(x) = 6x²' },
        { mk: 'M1', tx: 'F(x) = kx³，故 F′(x) = 3kx²',
          txEn: 'F(x) = kx³, so F′(x) = 3kx²' },
        { mk: 'M1', tx: '比較同類項係數：3k = 6',
          txEn: 'Comparing coefficients of like terms: 3k = 6' },
        { mk: 'A1', tx: '解得 k = 2，此時 F(x) = 2x³ 且 F′(x) = 6x²，符合題設。',
          txEn: 'Solving gives k = 2; then F(x) = 2x³ and F′(x) = 6x², which satisfies the given condition.' }
      ],
      note: '這類「求係數」題目必須先求導再比較係數；直接把 kx³ 與 6x² 相等是概念錯誤。',
      noteEn: 'In this type of "find the coefficient" question you must differentiate first and then compare coefficients; setting kx³ equal to 6x² directly is a conceptual error.'
    },
    {
      id: 'id24',
      sub: SUB.S4,
      lv: 3,
      q: '已知 f′(x) = 3x² + 4x + 1 且 f(0) = 0。<br><b>求 f(1) 的值。</b>',
      qEn: 'It is given that f′(x) = 3x² + 4x + 1 and f(0) = 0.<br><b>Find the value of f(1).</b>',
      hint: '先積分得 f(x) = x³ + 2x² + x + C，用 f(0) = 0 定出 C，再代入 x = 1。',
      hintEn: 'Integrate first to get f(x) = x³ + 2x² + x + C, use f(0) = 0 to determine C, then substitute x = 1.',
      answer: { type: 'num', accept: [4, 4.0], display: 'f(1) = 4', displayEn: 'f(1) = 4' },
      sol: [
        { mk: 'M1', tx: 'f(x) = ∫ (3x² + 4x + 1) dx = x³ + 2x² + x + C',
          txEn: 'f(x) = ∫ (3x² + 4x + 1) dx = x³ + 2x² + x + C' },
        { mk: 'M1', tx: '由 f(0) = 0 代入得 C = 0，故 f(x) = x³ + 2x² + x',
          txEn: 'Putting f(0) = 0 gives C = 0, so f(x) = x³ + 2x² + x' },
        { mk: 'M1', tx: 'f(1) = 1³ + 2(1)² + 1 = 1 + 2 + 1',
          txEn: 'f(1) = 1³ + 2(1)² + 1 = 1 + 2 + 1' },
        { mk: 'A1', tx: '故 f(1) = 4',
          txEn: 'Hence f(1) = 4' }
      ],
      note: '本題 f(0) = 0 使 C = 0，但答題時仍要寫出含 C 的一般式再代入條件；若題目改為 f(0) = 5，就會得到 C = 5。',
      noteEn: 'Here f(0) = 0 gives C = 0, but you should still write the general form with C before using the condition; if the question were f(0) = 5 instead, you would get C = 5.'
    },

    /* ═══════ 8.5 積分的應用（初值問題與曲線族）（id25–id30）═══════ */
    {
      id: 'id25',
      sub: SUB.S5,
      lv: 2,
      q: '一曲線 y = f(x) 上每一點的切線斜率為 4x − 3，且曲線經過點 (1, 2)。<br><b>求 f(x)。</b>',
      qEn: 'At every point on a curve y = f(x), the slope of the tangent is 4x − 3, and the curve passes through the point (1, 2).<br><b>Find f(x).</b>',
      hint: '切線斜率即 dy/dx；先積分得含 C 的一般式，再用點 (1, 2) 定出 C。',
      hintEn: 'The slope of the tangent is dy/dx; integrate first to get the general form with C, then use the point (1, 2) to determine C.',
      answer: { type: 'symbol', accept: ['2x^2-3x+3', '3+2x^2-3x'], display: 'f(x) = 2x² − 3x + 3', displayEn: 'f(x) = 2x² − 3x + 3' },
      sol: [
        { mk: 'M1', tx: '由切線斜率得 f′(x) = 4x − 3，故 f(x) = ∫ (4x − 3) dx = 2x² − 3x + C',
          txEn: 'From the slope of the tangent, f′(x) = 4x − 3, so f(x) = ∫ (4x − 3) dx = 2x² − 3x + C' },
        { mk: 'M1', tx: '代入點 (1, 2)：2(1)² − 3(1) + C = 2，即 −1 + C = 2',
          txEn: 'Substitute the point (1, 2): 2(1)² − 3(1) + C = 2, i.e. −1 + C = 2' },
        { mk: 'M1', tx: '解得 C = 3',
          txEn: 'Solving gives C = 3' },
        { mk: 'A1', tx: '故 f(x) = 2x² − 3x + 3（驗算：2 − 3 + 3 = 2 ✓）',
          txEn: 'Hence f(x) = 2x² − 3x + 3 (check: 2 − 3 + 3 = 2 ✓)' }
      ],
      note: '初值問題的標準次序是「先積分得含 C 的一般解，再代點定 C」；最後應把 C 的數值寫回函數式。',
      noteEn: 'The standard order for an initial-value problem is "integrate to get the general solution with C, then substitute the point to find C"; finally the value of C should be put back into the function.'
    },
    {
      id: 'id26',
      sub: SUB.S5,
      lv: 2,
      q: '一曲線 y = f(x) 滿足 dy/dx = 6x²，且曲線經過點 (2, 10)。<br><b>求當 x = 1 時 y 的值。</b>',
      qEn: 'A curve y = f(x) satisfies dy/dx = 6x² and passes through the point (2, 10).<br><b>Find the value of y when x = 1.</b>',
      hint: '積分得 y = 2x³ + C，用點 (2, 10) 定出 C，再把 x = 1 代入。',
      hintEn: 'Integrating gives y = 2x³ + C; use the point (2, 10) to find C, then substitute x = 1.',
      answer: { type: 'num', accept: [-4, -4.0], display: 'y(1) = −4', displayEn: 'y(1) = −4' },
      sol: [
        { mk: 'M1', tx: 'y = ∫ 6x² dx = 2x³ + C',
          txEn: 'y = ∫ 6x² dx = 2x³ + C' },
        { mk: 'M1', tx: '代入 (2, 10)：2(8) + C = 10，即 16 + C = 10',
          txEn: 'Substitute (2, 10): 2(8) + C = 10, i.e. 16 + C = 10' },
        { mk: 'M1', tx: '解得 C = −6，故曲線方程為 y = 2x³ − 6',
          txEn: 'Solving gives C = −6, so the equation of the curve is y = 2x³ − 6' },
        { mk: 'A1', tx: '當 x = 1：y = 2(1) − 6 = −4',
          txEn: 'When x = 1: y = 2(1) − 6 = −4' }
      ],
      note: '題目問的是 x = 1 時的函數值，不是曲線方程；最後一步必須真正代入求值，不要把 y = 2x³ − 6 當成答案。',
      noteEn: 'The question asks for the value of the function when x = 1, not for the equation of the curve; the last step must actually substitute, so do not give y = 2x³ − 6 as the answer.'
    },
    {
      id: 'id27',
      sub: SUB.S5,
      lv: 2,
      q: '求曲線族 y = f(x)，使曲線上每一點的切線斜率均為 2x + 1，且曲線與 y 軸相交於點 (0, −1)。',
      qEn: 'Find the family of curves y = f(x) such that the slope of the tangent at every point on the curve is 2x + 1 and the curve cuts the y-axis at the point (0, −1).',
      hint: '先寫出含任意常數的曲線族 y = x² + x + C，再用與 y 軸的交點定出 C。',
      hintEn: 'First write the family of curves y = x² + x + C with an arbitrary constant, then use the point of intersection with the y-axis to determine C.',
      answer: { type: 'symbol', accept: ['x^2+x-1', '-1+x^2+x'], display: 'f(x) = x² + x − 1', displayEn: 'f(x) = x² + x − 1' },
      sol: [
        { mk: 'M1', tx: '由斜率為 2x + 1 得 f(x) = ∫ (2x + 1) dx = x² + x + C（此即曲線族）',
          txEn: 'From the slope 2x + 1, f(x) = ∫ (2x + 1) dx = x² + x + C (this is the family of curves)' },
        { mk: 'M1', tx: '曲線與 y 軸交於 (0, −1)，即 f(0) = −1',
          txEn: 'The curve cuts the y-axis at (0, −1), i.e. f(0) = −1' },
        { mk: 'M1', tx: '代入得 0 + 0 + C = −1，故 C = −1',
          txEn: 'Substituting gives 0 + 0 + C = −1, so C = −1' },
        { mk: 'A1', tx: '所求曲線為 f(x) = x² + x − 1',
          txEn: 'The required curve is f(x) = x² + x − 1' }
      ],
      note: '「與 y 軸相交」提供的就是 x = 0 的條件；先寫出一般曲線族再加條件，是這一節的標準答題框架。',
      noteEn: '"Cuts the y-axis" simply provides the condition x = 0; writing the general family first and then applying the condition is the standard framework for this section.'
    },
    {
      id: 'id28',
      sub: SUB.S5,
      lv: 3,
      q: '一質點沿直線運動，其加速度為 a(t) = 6t − 4（單位：m/s²，t ≥ 0），初速度為 3 m/s。<br><b>求當 t = 2 時質點的速度。</b>',
      qEn: 'A particle moves along a straight line with acceleration a(t) = 6t − 4 (unit: m/s², t ≥ 0) and initial velocity 3 m/s.<br><b>Find the velocity of the particle when t = 2.</b>',
      hint: '速度是加速度的原函數：v(t) = ∫ a(t) dt = 3t² − 4t + C，再用初速度 v(0) = 3 定出 C。',
      hintEn: 'Velocity is an antiderivative of acceleration: v(t) = ∫ a(t) dt = 3t² − 4t + C; then use the initial velocity v(0) = 3 to find C.',
      answer: { type: 'num', accept: [7, 7.0], display: 'v(2) = 7 m/s', displayEn: 'v(2) = 7 m/s' },
      sol: [
        { mk: 'M1', tx: 'v(t) = ∫ (6t − 4) dt = 3t² − 4t + C',
          txEn: 'v(t) = ∫ (6t − 4) dt = 3t² − 4t + C' },
        { mk: 'M1', tx: '初速度 v(0) = 3，代入得 C = 3，故 v(t) = 3t² − 4t + 3',
          txEn: 'The initial velocity is v(0) = 3, so C = 3 and v(t) = 3t² − 4t + 3' },
        { mk: 'M1', tx: 'v(2) = 3(2)² − 4(2) + 3 = 12 − 8 + 3',
          txEn: 'v(2) = 3(2)² − 4(2) + 3 = 12 − 8 + 3' },
        { mk: 'A1', tx: '故 v(2) = 7 m/s',
          txEn: 'Hence v(2) = 7 m/s' }
      ],
      note: '「初速度」對應 t = 0 的條件，別與 t = 0 的位移混淆；答案要連單位 m/s 一起寫。',
      noteEn: '"Initial velocity" corresponds to the condition at t = 0 and should not be confused with the displacement at t = 0; the answer should be written with the unit m/s.'
    },
    {
      id: 'id29',
      sub: SUB.S5,
      lv: 2,
      q: '曲線 C 上任意點 (x, y) 的切線斜率為 3x² + 2，且 C 與 y 軸相交於 (0, 4)。<br><b>求 C 的方程。</b>',
      qEn: 'At any point (x, y) on a curve C the slope of the tangent is 3x² + 2, and C cuts the y-axis at (0, 4).<br><b>Find the equation of C.</b>',
      hint: '積分斜率函數得 y = x³ + 2x + C，再用交點 (0, 4) 定出 C。',
      hintEn: 'Integrating the slope function gives y = x³ + 2x + C; then use the point of intersection (0, 4) to determine C.',
      answer: { type: 'symbol', accept: ['y=x^3+2x+4', 'x^3+2x+4', 'y=4+2x+x^3'], display: 'y = x³ + 2x + 4', displayEn: 'y = x³ + 2x + 4' },
      sol: [
        { mk: 'M1', tx: '由 dy/dx = 3x² + 2 得 y = ∫ (3x² + 2) dx = x³ + 2x + C',
          txEn: 'From dy/dx = 3x² + 2, y = ∫ (3x² + 2) dx = x³ + 2x + C' },
        { mk: 'M1', tx: 'C 交 y 軸於 (0, 4)，即 x = 0 時 y = 4',
          txEn: 'C cuts the y-axis at (0, 4), i.e. y = 4 when x = 0' },
        { mk: 'M1', tx: '代入得 0 + 0 + C = 4，故 C = 4',
          txEn: 'Substituting gives 0 + 0 + C = 4, so C = 4' },
        { mk: 'A1', tx: '故 C 的方程為 y = x³ + 2x + 4',
          txEn: 'Hence the equation of C is y = x³ + 2x + 4' }
      ],
      note: '答案須寫成「y = ⋯」的方程形式；只寫 x³ + 2x + 4 在部分評分標準中會被視為未完成。',
      noteEn: 'The answer must be written in the equation form "y = ⋯"; giving only x³ + 2x + 4 would be regarded as incomplete under some marking schemes.'
    },
    {
      id: 'id30',
      sub: SUB.S5,
      lv: 3,
      q: '一曲線 y = f(x) 滿足 dy/dx = 2x + k（k 為常數），且曲線經過 (0, 1) 與 (2, 9)。<br><b>求 k 的值。</b>',
      qEn: 'A curve y = f(x) satisfies dy/dx = 2x + k (where k is a constant) and passes through (0, 1) and (2, 9).<br><b>Find the value of k.</b>',
      hint: '先積分得 y = x² + kx + C；由 (0, 1) 定出 C，再用 (2, 9) 建立關於 k 的方程。',
      hintEn: 'Integrate first to get y = x² + kx + C; use (0, 1) to find C, then use (2, 9) to form an equation in k.',
      answer: { type: 'num', accept: [2, 2.0], display: 'k = 2', displayEn: 'k = 2' },
      sol: [
        { mk: 'M1', tx: 'y = ∫ (2x + k) dx = x² + kx + C',
          txEn: 'y = ∫ (2x + k) dx = x² + kx + C' },
        { mk: 'M1', tx: '代入 (0, 1)：C = 1，故 y = x² + kx + 1',
          txEn: 'Substitute (0, 1): C = 1, so y = x² + kx + 1' },
        { mk: 'M1', tx: '代入 (2, 9)：4 + 2k + 1 = 9，即 2k + 5 = 9',
          txEn: 'Substitute (2, 9): 4 + 2k + 1 = 9, i.e. 2k + 5 = 9' },
        { mk: 'A1', tx: '解得 k = 2（驗算：y = x² + 2x + 1，x = 2 時 y = 9 ✓）',
          txEn: 'Solving gives k = 2 (check: y = x² + 2x + 1, and y = 9 when x = 2 ✓)' }
      ],
      note: '兩個條件要依次使用：先定 C，再把第二點代入得 k 的方程；只有一點無法同時定出兩個未知數。',
      noteEn: 'The two conditions must be used in turn: first find C, then substitute the second point to get an equation in k; one point alone cannot determine two unknowns.'
    }

  ];
})(typeof window !== 'undefined' ? window : globalThis);
