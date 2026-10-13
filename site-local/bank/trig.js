/* bank/trig.js — 三角函數的性質與恆等式（30 題）*/
(function (root) {
  root.M2Bank = root.M2Bank || {};
  root.M2Bank['trig'] = [
    /* ─── 4.1 弧度制、弧長與扇形面積 ─── */
    {
      id: 'tr01',
      sub: '4.1 弧度制、弧長與扇形面積',
      lv: 1,
      q: '將 150° 化為弧度，並以 π 表示。',
      qEn: 'Convert 150° to radians, giving the answer in terms of π.',
      hint: '180° 對應 π 弧度，先用 150/180 約簡，再乘上 π。',
      hintEn: '180° corresponds to π radians. First reduce 150/180, then multiply by π.',
      answer: { type: 'num', accept: [5 * Math.PI / 6, 2.6180], display: '5π/6 （≈ 2.618）', displayEn: '5π/6  (≈ 2.618)' },
      sol: [
        { mk: 'M1', tx: '由 180° = π 弧度，得 1° = π/180 弧度。', txEn: 'Since 180° = π radians, 1° = π/180 radians.' },
        { mk: 'M1', tx: '150° = 150 × π/180 弧度', txEn: '150° = 150 × π/180 radians' },
        { mk: 'A1', tx: '= 5π/6 弧度 ≈ 2.618 弧度', txEn: '= 5π/6 radians ≈ 2.618 radians' },
        { mk: 'A1', tx: '故 150° = 5π/6 弧度。', txEn: 'Hence 150° = 5π/6 radians.' }
      ],
      note: '常見失分：把 150° 直接乘 π 而忘記除以 180，寫成 150π。',
      noteEn: 'Common loss of marks: multiplying 150° by π directly without dividing by 180, giving 150π.'
    },
    {
      id: 'tr02',
      sub: '4.1 弧度制、弧長與扇形面積',
      lv: 1,
      q: '設圓的半徑為 6 cm，圓心角為 π/3 弧度。<br><b>求該圓心角所對的弧長（以 π 表示）。</b>',
      qEn: 'The radius of a circle is 6 cm and the central angle is π/3 radians.<br><b>Find the length of the arc subtended by this central angle, in terms of π.</b>',
      hint: '弧長公式為 l = rθ，但要緊記 θ 必須以弧度為單位。',
      hintEn: 'The arc length formula is l = rθ, but remember that θ must be in radians.',
      answer: { type: 'num', accept: [2 * Math.PI, 6.2832], display: 'l = 2π cm （≈ 6.283 cm）', displayEn: 'l = 2π cm  (≈ 6.283 cm)' },
      sol: [
        { mk: 'M1', tx: '弧長公式 l = rθ（θ 以弧度為單位）。', txEn: 'Arc length formula: l = rθ (with θ in radians).' },
        { mk: 'M1', tx: '已知 r = 6 cm，θ = π/3。', txEn: 'Given r = 6 cm and θ = π/3.' },
        { mk: 'A1', tx: 'l = 6 × π/3 = 2π cm', txEn: 'l = 6 × π/3 = 2π cm' },
        { mk: 'A1', tx: '故弧長為 2π cm ≈ 6.283 cm。', txEn: 'Hence the arc length is 2π cm ≈ 6.283 cm.' }
      ],
      note: '常見失分：把 π/3 當作 60 代入角度版本的弧長公式，令數值出錯。',
      noteEn: 'Common loss of marks: treating π/3 as 60 and substituting it into the degree version of the arc length formula, which gives a wrong value.'
    },
    {
      id: 'tr03',
      sub: '4.1 弧度制、弧長與扇形面積',
      lv: 1,
      q: '設扇形的半徑為 8 cm，圓心角為 3π/4 弧度。<br><b>求該扇形的面積（以 π 表示）。</b>',
      qEn: 'A sector has radius 8 cm and central angle 3π/4 radians.<br><b>Find the area of the sector, in terms of π.</b>',
      hint: '扇形面積公式為 A = ½r²θ，同樣要求 θ 以弧度為單位。',
      hintEn: 'The area of a sector is A = ½r²θ, again with θ in radians.',
      answer: { type: 'num', accept: [24 * Math.PI, 75.3982], display: '面積 = 24π cm² （≈ 75.40 cm²）', displayEn: 'Area = 24π cm²  (≈ 75.40 cm²)' },
      sol: [
        { mk: 'M1', tx: '扇形面積公式 A = ½r²θ。', txEn: 'Area of a sector: A = ½r²θ.' },
        { mk: 'M1', tx: '已知 r = 8 cm，θ = 3π/4。', txEn: 'Given r = 8 cm and θ = 3π/4.' },
        { mk: 'A1', tx: 'A = ½ × 8² × 3π/4 = ½ × 64 × 3π/4 = 24π cm²', txEn: 'A = ½ × 8² × 3π/4 = ½ × 64 × 3π/4 = 24π cm²' },
        { mk: 'A1', tx: '故扇形面積為 24π cm² ≈ 75.40 cm²。', txEn: 'Hence the area of the sector is 24π cm² ≈ 75.40 cm².' }
      ],
      note: '常見失分：忘記把半徑平方，或把 ½ 與 r² 的係數次序弄錯。',
      noteEn: 'Common loss of marks: forgetting to square the radius, or mixing up the order of the factor ½ and r².'
    },
    {
      id: 'tr04',
      sub: '4.1 弧度制、弧長與扇形面積',
      lv: 2,
      q: '一個扇形的弧長為 15 cm，半徑為 6 cm。<br><b>求該扇形的面積。</b>',
      qEn: 'A sector has arc length 15 cm and radius 6 cm.<br><b>Find the area of the sector.</b>',
      hint: '先用 l = rθ 求出圓心角 θ，再代入 A = ½r²θ；也可直接用 A = ½rl。',
      hintEn: 'First use l = rθ to find the central angle θ, then substitute into A = ½r²θ; alternatively use A = ½rl directly.',
      answer: { type: 'num', accept: [45], display: '面積 = 45 cm²', displayEn: 'Area = 45 cm²' },
      sol: [
        { mk: 'M1', tx: '由 l = rθ，得圓心角 θ = l/r = 15/6 = 2.5 弧度。', txEn: 'From l = rθ, the central angle is θ = l/r = 15/6 = 2.5 radians.' },
        { mk: 'M1', tx: '扇形面積 A = ½r²θ。', txEn: 'Area of the sector: A = ½r²θ.' },
        { mk: 'A1', tx: 'A = ½ × 6² × 2.5 = ½ × 36 × 2.5 = 45 cm²', txEn: 'A = ½ × 6² × 2.5 = ½ × 36 × 2.5 = 45 cm²' },
        { mk: 'A1', tx: '故扇形面積為 45 cm²（即 ½rl = ½ × 6 × 15 = 45）。', txEn: 'Hence the area of the sector is 45 cm² (i.e. ½rl = ½ × 6 × 15 = 45).' }
      ],
      note: '常見失分：把 15 cm 當成圓心角直接代入面積公式，或忘記先求 θ。',
      noteEn: 'Common loss of marks: taking 15 cm as the central angle and substituting it into the area formula, or forgetting to find θ first.'
    },
    {
      id: 'tr05',
      sub: '4.1 弧度制、弧長與扇形面積',
      lv: 3,
      q: '一個扇形的周界為 20 cm，面積為 16 cm²，且其圓心角 θ 滿足 0 &lt; θ &lt; 2π。<br><b>求扇形的半徑 r 及圓心角 θ（弧度）。</b>',
      qEn: 'A sector has perimeter 20 cm and area 16 cm², and its central angle θ satisfies 0 &lt; θ &lt; 2π.<br><b>Find the radius r and the central angle θ (in radians) of the sector.</b>',
      hint: '周界 = 2r + rθ，面積 = ½r²θ；由第一式得 rθ = 20 − 2r，代入第二式便可消去 θ。',
      hintEn: 'Perimeter = 2r + rθ and area = ½r²θ. From the first equation rθ = 20 − 2r; substitute this into the second equation to eliminate θ.',
      answer: { type: 'numbers', accept: [[8, 0.5]], display: 'r = 8 cm，θ = 0.5 弧度', displayEn: 'r = 8 cm, θ = 0.5 radians' },
      sol: [
        { mk: 'M1', tx: '設半徑 r、圓心角 θ：2r + rθ = 20 及 ½r²θ = 16。', txEn: 'Let the radius be r and the central angle be θ: 2r + rθ = 20 and ½r²θ = 16.' },
        { mk: 'M1', tx: '由第一式得 rθ = 20 − 2r，代入第二式：½r(20 − 2r) = 16。', txEn: 'From the first equation, rθ = 20 − 2r. Substituting into the second: ½r(20 − 2r) = 16.' },
        { mk: 'A1', tx: '化簡得 r(10 − r) = 16，即 r² − 10r + 16 = 0，(r − 2)(r − 8) = 0，故 r = 2 或 r = 8。', txEn: 'Simplifying gives r(10 − r) = 16, i.e. r² − 10r + 16 = 0, (r − 2)(r − 8) = 0, so r = 2 or r = 8.' },
        { mk: 'M1', tx: 'r = 2 時 θ = (20 − 4)/2 = 8 弧度 > 2π，不合題意；r = 8 時 θ = (20 − 16)/8 = 0.5。', txEn: 'When r = 2, θ = (20 − 4)/2 = 8 radians > 2π, which is rejected; when r = 8, θ = (20 − 16)/8 = 0.5.' },
        { mk: 'A1', tx: '故 r = 8 cm，θ = 0.5 弧度。', txEn: 'Hence r = 8 cm and θ = 0.5 radians.' }
      ],
      note: '常見失分：只解出 r = 2 或 8 卻沒有用 θ < 2π 的條件剔除 r = 2。',
      noteEn: 'Common loss of marks: solving r = 2 or r = 8 but failing to use the condition θ < 2π to reject r = 2.'
    },

    /* ─── 4.2 三角函數的圖像與週期性 ─── */
    {
      id: 'tr06',
      sub: '4.2 三角函數的圖像與週期性',
      lv: 1,
      q: '求函數 y = 3 sin 2x 的週期。',
      qEn: 'Find the period of the function y = 3 sin 2x.',
      hint: 'y = sin bx 的週期為 2π/b，前面的係數只影響振幅。',
      hintEn: 'The period of y = sin bx is 2π/b; the coefficient in front only affects the amplitude.',
      answer: { type: 'num', accept: [Math.PI, 3.1416], display: '週期 = π （≈ 3.142）', displayEn: 'Period = π  (≈ 3.142)' },
      sol: [
        { mk: 'M1', tx: 'y = 3 sin 2x 中 b = 2，係數 3 只改變振幅。', txEn: 'In y = 3 sin 2x, b = 2; the coefficient 3 only changes the amplitude.' },
        { mk: 'M1', tx: '正弦函數的週期為 2π/b。', txEn: 'The period of a sine function is 2π/b.' },
        { mk: 'A1', tx: '週期 = 2π/2 = π', txEn: 'Period = 2π/2 = π' },
        { mk: 'A1', tx: '故 y = 3 sin 2x 的週期為 π。', txEn: 'Hence the period of y = 3 sin 2x is π.' }
      ],
      note: '常見失分：誤以為振幅 3 會影響週期，寫成 6π 或 3π。',
      noteEn: 'Common loss of marks: wrongly thinking that the amplitude 3 affects the period and writing 6π or 3π.'
    },
    {
      id: 'tr07',
      sub: '4.2 三角函數的圖像與週期性',
      lv: 1,
      q: '求函數 y = tan 3x 的週期。',
      qEn: 'Find the period of the function y = tan 3x.',
      hint: 'tan 的基本週期是 π（不是 2π），所以 y = tan bx 的週期為 π/b。',
      hintEn: 'The basic period of tan is π (not 2π), so the period of y = tan bx is π/b.',
      answer: { type: 'num', accept: [Math.PI / 3, 1.0472], display: '週期 = π/3 （≈ 1.047）', displayEn: 'Period = π/3  (≈ 1.047)' },
      sol: [
        { mk: 'M1', tx: 'y = tan 3x 中 b = 3。', txEn: 'In y = tan 3x, b = 3.' },
        { mk: 'M1', tx: 'tan 函數的基本週期為 π，故 y = tan bx 的週期為 π/b。', txEn: 'The basic period of tan is π, so the period of y = tan bx is π/b.' },
        { mk: 'A1', tx: '週期 = π/3 ≈ 1.047', txEn: 'Period = π/3 ≈ 1.047' },
        { mk: 'A1', tx: '故 y = tan 3x 的週期為 π/3。', txEn: 'Hence the period of y = tan 3x is π/3.' }
      ],
      note: '常見失分：套用正弦函數的週期公式 2π/b，把答案寫成 2π/3。',
      noteEn: 'Common loss of marks: applying the 2π/b period of the sine function and writing the answer as 2π/3.'
    },
    {
      id: 'tr08',
      sub: '4.2 三角函數的圖像與週期性',
      lv: 2,
      q: '設 y = −4 cos(πx/3)。<br><b>求此函數的振幅及週期。</b>',
      qEn: 'Let y = −4 cos(πx/3).<br><b>Find the amplitude and the period of this function.</b>',
      hint: '振幅取 cos 前係數的絕對值；cos(bx) 的週期為 2π/b，此處 b = π/3。',
      hintEn: 'The amplitude is the absolute value of the coefficient of cos; the period of cos(bx) is 2π/b, where b = π/3 here.',
      answer: { type: 'numbers', accept: [[4, 6]], display: '振幅 = 4，週期 = 6', displayEn: 'Amplitude = 4, period = 6' },
      sol: [
        { mk: 'M1', tx: '與 y = A cos(bx) 比較：A = −4，b = π/3。', txEn: 'Comparing with y = A cos(bx): A = −4 and b = π/3.' },
        { mk: 'M1', tx: '振幅 = |A| = |−4| = 4。', txEn: 'Amplitude = |A| = |−4| = 4.' },
        { mk: 'A1', tx: '週期 = 2π/b = 2π ÷ (π/3) = 6', txEn: 'Period = 2π/b = 2π ÷ (π/3) = 6' },
        { mk: 'A1', tx: '故振幅為 4，週期為 6。', txEn: 'Hence the amplitude is 4 and the period is 6.' }
      ],
      note: '常見失分：把振幅寫成 −4；振幅是距離，必須取絕對值。',
      noteEn: 'Common loss of marks: writing the amplitude as −4; amplitude is a distance, so the absolute value must be taken.'
    },
    {
      id: 'tr09',
      sub: '4.2 三角函數的圖像與週期性',
      lv: 2,
      q: '設 y = 5 sin(2x − π/6)。<br><b>求此函數的最大值，以及取最大值時最小的正 x 值。</b>',
      qEn: 'Let y = 5 sin(2x − π/6).<br><b>Find the maximum value of this function and the smallest positive value of x at which it occurs.</b>',
      hint: '正弦的最大值為 1，此時括號內 2x − π/6 = π/2，解出 x 後取最小正值。',
      hintEn: 'The maximum value of sine is 1, which occurs when 2x − π/6 = π/2; solve for x and take the smallest positive value.',
      answer: { type: 'numbers', accept: [[5, Math.PI / 3]], display: '最大值 = 5，此時 x = π/3', displayEn: 'Maximum value = 5, at x = π/3' },
      sol: [
        { mk: 'M1', tx: 'sin(2x − π/6) 的最大值為 1，故 y 的最大值為 5 × 1 = 5。', txEn: 'The maximum value of sin(2x − π/6) is 1, so the maximum value of y is 5 × 1 = 5.' },
        { mk: 'M1', tx: '取最大值時 2x − π/6 = π/2。', txEn: 'At the maximum, 2x − π/6 = π/2.' },
        { mk: 'A1', tx: '解得 2x = 2π/3，即 x = π/3。', txEn: 'Solving gives 2x = 2π/3, i.e. x = π/3.' },
        { mk: 'A1', tx: '故最大值為 5，取最大值時最小的正 x 值為 π/3。', txEn: 'Hence the maximum value is 5, and the smallest positive value of x at which it occurs is π/3.' }
      ],
      note: '常見失分：只寫出所有解 x = π/3 + kπ，沒有按題目要求取最小的正 x 值。',
      noteEn: 'Common loss of marks: giving only the general solution x = π/3 + kπ without taking the smallest positive value of x as required.'
    },
    {
      id: 'tr10',
      sub: '4.2 三角函數的圖像與週期性',
      lv: 2,
      q: '設 f(x) = 4 sin(3x + π/4)。<br><b>求 f 的週期，並求 f(π/12) 的值。</b>',
      qEn: 'Let f(x) = 4 sin(3x + π/4).<br><b>Find the period of f, and find the value of f(π/12).</b>',
      hint: 'sin(bx + c) 的週期為 2π/b；代入 x = π/12 後括號內剛好是 π/2。',
      hintEn: 'The period of sin(bx + c) is 2π/b; after substituting x = π/12 the expression inside the brackets is exactly π/2.',
      answer: { type: 'numbers', accept: [[2 * Math.PI / 3, 4]], display: '週期 = 2π/3，f(π/12) = 4', displayEn: 'Period = 2π/3, f(π/12) = 4' },
      sol: [
        { mk: 'M1', tx: 'f(x) = 4 sin(3x + π/4) 中 b = 3，故週期 = 2π/b。', txEn: 'In f(x) = 4 sin(3x + π/4), b = 3, so the period is 2π/b.' },
        { mk: 'A1', tx: '週期 = 2π/3。', txEn: 'Period = 2π/3.' },
        { mk: 'M1', tx: 'f(π/12) = 4 sin(3 × π/12 + π/4) = 4 sin(π/4 + π/4) = 4 sin(π/2)。', txEn: 'f(π/12) = 4 sin(3 × π/12 + π/4) = 4 sin(π/4 + π/4) = 4 sin(π/2).' },
        { mk: 'A1', tx: '因 sin(π/2) = 1，故 f(π/12) = 4。', txEn: 'Since sin(π/2) = 1, f(π/12) = 4.' },
        { mk: 'A1', tx: '故週期為 2π/3，且 f(π/12) = 4。', txEn: 'Hence the period is 2π/3 and f(π/12) = 4.' }
      ],
      note: '常見失分：把相位 π/4 也算進週期，寫成 2π/7。',
      noteEn: 'Common loss of marks: including the phase π/4 in the period and writing 2π/7.'
    },

    /* ─── 4.3 複角公式（和差角公式） ─── */
    {
      id: 'tr11',
      sub: '4.3 複角公式（和差角公式）',
      lv: 2,
      q: '利用複角公式，求 sin 75° 的精確值（以根式表示）。',
      qEn: 'Using the compound angle formulae, find the exact value of sin 75° in surd form.',
      hint: '把 75° 寫成 45° + 30°，再用 sin(A + B) = sin A cos B + cos A sin B。',
      hintEn: 'Write 75° as 45° + 30°, then use sin(A + B) = sin A cos B + cos A sin B.',
      answer: { type: 'num', accept: [(Math.sqrt(6) + Math.sqrt(2)) / 4, 0.9659], display: 'sin 75° = (√6 + √2)/4 （≈ 0.9659）', displayEn: 'sin 75° = (√6 + √2)/4  (≈ 0.9659)' },
      sol: [
        { mk: 'M1', tx: 'sin 75° = sin(45° + 30°)。', txEn: 'sin 75° = sin(45° + 30°).' },
        { mk: 'M1', tx: '= sin 45° cos 30° + cos 45° sin 30°', txEn: '= sin 45° cos 30° + cos 45° sin 30°' },
        { mk: 'M1', tx: '= (√2/2)(√3/2) + (√2/2)(1/2) = √6/4 + √2/4', txEn: '= (√2/2)(√3/2) + (√2/2)(1/2) = √6/4 + √2/4' },
        { mk: 'A1', tx: '= (√6 + √2)/4 ≈ 0.9659', txEn: '= (√6 + √2)/4 ≈ 0.9659' },
        { mk: 'A1', tx: '故 sin 75° 的精確值為 (√6 + √2)/4。', txEn: 'Hence the exact value of sin 75° is (√6 + √2)/4.' }
      ],
      note: '常見失分：誤用 sin(A + B) = sin A cos B − cos A sin B（那是 sin(A − B)）。',
      noteEn: 'Common loss of marks: misusing sin(A + B) = sin A cos B − cos A sin B, which is the formula for sin(A − B).'
    },
    {
      id: 'tr12',
      sub: '4.3 複角公式（和差角公式）',
      lv: 2,
      q: '設 A 及 B 均為銳角，且 sin A = 4/5、cos B = 12/13。<br><b>求 sin(A − B) 的值。</b>',
      qEn: 'Let A and B be acute angles with sin A = 4/5 and cos B = 12/13.<br><b>Find the value of sin(A − B).</b>',
      hint: '先用畢氏定理求出 cos A 與 sin B，再代入 sin(A − B) = sin A cos B − cos A sin B。',
      hintEn: 'First use Pythagoras’ theorem to find cos A and sin B, then substitute into sin(A − B) = sin A cos B − cos A sin B.',
      answer: { type: 'num', accept: [33 / 65, 0.5077], display: 'sin(A − B) = 33/65 （≈ 0.5077）', displayEn: 'sin(A − B) = 33/65  (≈ 0.5077)' },
      sol: [
        { mk: 'M1', tx: 'A 為銳角且 sin A = 4/5，故 cos A = 3/5。', txEn: 'A is acute and sin A = 4/5, so cos A = 3/5.' },
        { mk: 'M1', tx: 'B 為銳角且 cos B = 12/13，故 sin B = 5/13。', txEn: 'B is acute and cos B = 12/13, so sin B = 5/13.' },
        { mk: 'M1', tx: 'sin(A − B) = sin A cos B − cos A sin B', txEn: 'sin(A − B) = sin A cos B − cos A sin B' },
        { mk: 'A1', tx: '= (4/5)(12/13) − (3/5)(5/13) = 48/65 − 15/65 = 33/65', txEn: '= (4/5)(12/13) − (3/5)(5/13) = 48/65 − 15/65 = 33/65' },
        { mk: 'A1', tx: '故 sin(A − B) = 33/65 ≈ 0.5077。', txEn: 'Hence sin(A − B) = 33/65 ≈ 0.5077.' }
      ],
      note: '常見失分：把中間的減號寫成加號，得出 63/65。',
      noteEn: 'Common loss of marks: writing a plus sign instead of the minus sign in the middle, giving 63/65.'
    },
    {
      id: 'tr13',
      sub: '4.3 複角公式（和差角公式）',
      lv: 3,
      q: '利用複角公式，求 tan 15° 的精確值（以根式表示）。',
      qEn: 'Using the compound angle formulae, find the exact value of tan 15° in surd form.',
      hint: '把 15° 寫成 45° − 30°，再用 tan(A − B) = (tan A − tan B)/(1 + tan A tan B)。',
      hintEn: 'Write 15° as 45° − 30°, then use tan(A − B) = (tan A − tan B)/(1 + tan A tan B).',
      answer: { type: 'num', accept: [2 - Math.sqrt(3), 0.2679], display: 'tan 15° = 2 − √3 （≈ 0.2679）', displayEn: 'tan 15° = 2 − √3  (≈ 0.2679)' },
      sol: [
        { mk: 'M1', tx: 'tan 15° = tan(45° − 30°)。', txEn: 'tan 15° = tan(45° − 30°).' },
        { mk: 'M1', tx: '= (tan 45° − tan 30°)/(1 + tan 45° tan 30°) = (1 − 1/√3)/(1 + 1/√3)', txEn: '= (tan 45° − tan 30°)/(1 + tan 45° tan 30°) = (1 − 1/√3)/(1 + 1/√3)' },
        { mk: 'M1', tx: '分子分母同乘 √3，得 (√3 − 1)/(√3 + 1)。', txEn: 'Multiplying the numerator and denominator by √3 gives (√3 − 1)/(√3 + 1).' },
        { mk: 'A1', tx: '= (√3 − 1)²/((√3 + 1)(√3 − 1)) = (4 − 2√3)/2 = 2 − √3', txEn: '= (√3 − 1)²/((√3 + 1)(√3 − 1)) = (4 − 2√3)/2 = 2 − √3' },
        { mk: 'A1', tx: '故 tan 15° = 2 − √3 ≈ 0.2679。', txEn: 'Hence tan 15° = 2 − √3 ≈ 0.2679.' }
      ],
      note: '常見失分：分母應為 1 + tan A tan B；若誤用 1 − tan A tan B，分子與分母相同，會得出 1 這個明顯錯誤的結果。',
      noteEn: 'Common loss of marks: the denominator should be 1 + tan A tan B; using 1 − tan A tan B instead makes the numerator and denominator equal, giving 1, a clearly wrong result.'
    },
    {
      id: 'tr14',
      sub: '4.3 複角公式（和差角公式）',
      lv: 3,
      q: '設 A 及 B 均為銳角，且 tan A = 1/2、tan B = 1/3。<br><b>求 A + B 的值（以 π 表示）。</b>',
      qEn: 'Let A and B be acute angles with tan A = 1/2 and tan B = 1/3.<br><b>Find the value of A + B, in terms of π.</b>',
      hint: '先算 tan(A + B)，再由 A、B 均為銳角定出 A + B 的範圍，判斷應取哪一個角。',
      hintEn: 'First find tan(A + B), then use the fact that A and B are acute to determine the range of A + B and decide which angle to take.',
      answer: { type: 'num', accept: [Math.PI / 4, 0.7854], display: 'A + B = π/4 （= 45°）', displayEn: 'A + B = π/4  (= 45°)' },
      sol: [
        { mk: 'M1', tx: 'tan(A + B) = (tan A + tan B)/(1 − tan A tan B)', txEn: 'tan(A + B) = (tan A + tan B)/(1 − tan A tan B)' },
        { mk: 'M1', tx: '= (1/2 + 1/3)/(1 − (1/2)(1/3)) = (5/6)/(5/6) = 1', txEn: '= (1/2 + 1/3)/(1 − (1/2)(1/3)) = (5/6)/(5/6) = 1' },
        { mk: 'M1', tx: 'A、B 均為銳角，故 0 &lt; A + B &lt; π。', txEn: 'A and B are both acute, so 0 &lt; A + B &lt; π.' },
        { mk: 'A1', tx: '在 (0, π) 內 tan(A + B) = 1 的唯一解為 A + B = π/4。', txEn: 'In (0, π), the only solution of tan(A + B) = 1 is A + B = π/4.' },
        { mk: 'A1', tx: '故 A + B = π/4（即 45°）。', txEn: 'Hence A + B = π/4 (i.e. 45°).' }
      ],
      note: '常見失分：只寫 A + B = π/4 + kπ 而沒有利用銳角的範圍確定 k = 0。',
      noteEn: 'Common loss of marks: writing only A + B = π/4 + kπ without using the acute-angle range to fix k = 0.'
    },
    {
      id: 'tr15',
      sub: '4.3 複角公式（和差角公式）',
      lv: 3,
      q: '設 A 為鈍角且 sin A = 3/5，B 為銳角且 cos B = 5/13。<br><b>求 cos(A + B) 的值。</b>',
      qEn: 'Let A be an obtuse angle with sin A = 3/5, and B an acute angle with cos B = 5/13.<br><b>Find the value of cos(A + B).</b>',
      hint: 'A 為鈍角 ⇒ cos A 取負值；先求 cos A 與 sin B，再用 cos(A + B) = cos A cos B − sin A sin B。',
      hintEn: 'A is obtuse ⇒ cos A is negative; find cos A and sin B first, then use cos(A + B) = cos A cos B − sin A sin B.',
      answer: { type: 'num', accept: [-56 / 65, -0.8615], display: 'cos(A + B) = −56/65 （≈ −0.8615）', displayEn: 'cos(A + B) = −56/65  (≈ −0.8615)' },
      sol: [
        { mk: 'M1', tx: 'A 為鈍角且 sin A = 3/5，故 cos A = −4/5。', txEn: 'A is obtuse and sin A = 3/5, so cos A = −4/5.' },
        { mk: 'M1', tx: 'B 為銳角且 cos B = 5/13，故 sin B = 12/13。', txEn: 'B is acute and cos B = 5/13, so sin B = 12/13.' },
        { mk: 'M1', tx: 'cos(A + B) = cos A cos B − sin A sin B', txEn: 'cos(A + B) = cos A cos B − sin A sin B' },
        { mk: 'A1', tx: '= (−4/5)(5/13) − (3/5)(12/13) = −20/65 − 36/65 = −56/65', txEn: '= (−4/5)(5/13) − (3/5)(12/13) = −20/65 − 36/65 = −56/65' },
        { mk: 'A1', tx: '故 cos(A + B) = −56/65 ≈ −0.8615。', txEn: 'Hence cos(A + B) = −56/65 ≈ −0.8615.' }
      ],
      note: '常見失分：把鈍角的 cos A 當成 +4/5，會得出 −16/65 而非 −56/65；A 為鈍角時 cos A 必須取負值。',
      noteEn: 'Common loss of marks: taking cos A as +4/5 for the obtuse angle, which gives −16/65 instead of −56/65; cos A must be negative when A is obtuse.'
    },

    /* ─── 4.4 二倍角與半角公式 ─── */
    {
      id: 'tr16',
      sub: '4.4 二倍角與半角公式',
      lv: 1,
      q: '不用計算機，求 2 sin 15° cos 15° 的值。',
      qEn: 'Without using a calculator, find the value of 2 sin 15° cos 15°.',
      hint: '二倍角公式 sin 2θ = 2 sin θ cos θ，取 θ = 15° 便可化為一個特殊角。',
      hintEn: 'By the double-angle formula sin 2θ = 2 sin θ cos θ, taking θ = 15° reduces the expression to a special angle.',
      answer: { type: 'num', accept: [0.5], display: '2 sin 15° cos 15° = 1/2', displayEn: '2 sin 15° cos 15° = 1/2' },
      sol: [
        { mk: 'M1', tx: '由二倍角公式 sin 2θ = 2 sin θ cos θ，取 θ = 15°。', txEn: 'By the double-angle formula sin 2θ = 2 sin θ cos θ, take θ = 15°.' },
        { mk: 'M1', tx: '2 sin 15° cos 15° = sin(2 × 15°) = sin 30°。', txEn: '2 sin 15° cos 15° = sin(2 × 15°) = sin 30°.' },
        { mk: 'A1', tx: 'sin 30° = 1/2', txEn: 'sin 30° = 1/2' },
        { mk: 'A1', tx: '故 2 sin 15° cos 15° = 1/2。', txEn: 'Hence 2 sin 15° cos 15° = 1/2.' }
      ],
      note: '常見失分：把 2 sin 15° cos 15° 誤當成 sin 15° 的兩倍，硬用 15° 的值計算。',
      noteEn: 'Common loss of marks: treating 2 sin 15° cos 15° as twice sin 15° and working with the value at 15° directly.'
    },
    {
      id: 'tr17',
      sub: '4.4 二倍角與半角公式',
      lv: 2,
      q: '設 θ 為銳角且 sin θ = 3/5。<br><b>求 sin 2θ 的值。</b>',
      qEn: 'Let θ be an acute angle with sin θ = 3/5.<br><b>Find the value of sin 2θ.</b>',
      hint: '先用畢氏定理求 cos θ，再用 sin 2θ = 2 sin θ cos θ。',
      hintEn: 'First use Pythagoras’ theorem to find cos θ, then use sin 2θ = 2 sin θ cos θ.',
      answer: { type: 'num', accept: [24 / 25, 0.96], display: 'sin 2θ = 24/25 （= 0.96）', displayEn: 'sin 2θ = 24/25  (= 0.96)' },
      sol: [
        { mk: 'M1', tx: 'θ 為銳角且 sin θ = 3/5，故 cos θ = 4/5。', txEn: 'θ is acute and sin θ = 3/5, so cos θ = 4/5.' },
        { mk: 'M1', tx: 'sin 2θ = 2 sin θ cos θ', txEn: 'sin 2θ = 2 sin θ cos θ' },
        { mk: 'A1', tx: '= 2 × (3/5) × (4/5) = 24/25', txEn: '= 2 × (3/5) × (4/5) = 24/25' },
        { mk: 'A1', tx: '故 sin 2θ = 24/25 = 0.96。', txEn: 'Hence sin 2θ = 24/25 = 0.96.' }
      ],
      note: '常見失分：忘記先求 cos θ，或把 cos θ 誤取為 −4/5（θ 為銳角，必為正）。',
      noteEn: 'Common loss of marks: forgetting to find cos θ first, or wrongly taking cos θ = −4/5 (θ is acute, so it must be positive).'
    },
    {
      id: 'tr18',
      sub: '4.4 二倍角與半角公式',
      lv: 1,
      q: '設 cos θ = 1/3。<br><b>求 cos 2θ 的值。</b>',
      qEn: 'Let cos θ = 1/3.<br><b>Find the value of cos 2θ.</b>',
      hint: '用 cos 2θ = 2cos²θ − 1，可直接由 cos θ 求得，不必先求 θ。',
      hintEn: 'Use cos 2θ = 2cos²θ − 1, which gives the answer directly from cos θ without finding θ first.',
      answer: { type: 'num', accept: [-7 / 9, -0.7778], display: 'cos 2θ = −7/9 （≈ −0.7778）', displayEn: 'cos 2θ = −7/9  (≈ −0.7778)' },
      sol: [
        { mk: 'M1', tx: 'cos 2θ = 2cos²θ − 1。', txEn: 'cos 2θ = 2cos²θ − 1.' },
        { mk: 'M1', tx: 'cos θ = 1/3 ⇒ cos²θ = 1/9。', txEn: 'cos θ = 1/3 ⇒ cos²θ = 1/9.' },
        { mk: 'A1', tx: 'cos 2θ = 2 × (1/9) − 1 = 2/9 − 9/9 = −7/9', txEn: 'cos 2θ = 2 × (1/9) − 1 = 2/9 − 9/9 = −7/9' },
        { mk: 'A1', tx: '故 cos 2θ = −7/9 ≈ −0.7778。', txEn: 'Hence cos 2θ = −7/9 ≈ −0.7778.' }
      ],
      note: '常見失分：把 cos 2θ 當成 2cos θ，寫成 2/3。',
      noteEn: 'Common loss of marks: treating cos 2θ as 2cos θ and writing 2/3.'
    },
    {
      id: 'tr19',
      sub: '4.4 二倍角與半角公式',
      lv: 2,
      q: '利用半角公式，求 cos 22.5° 的精確值（以根式表示）。',
      qEn: 'Using the half-angle formula, find the exact value of cos 22.5° in surd form.',
      hint: '22.5° = 45°/2，用 cos²(θ/2) = (1 + cos θ)/2，取 θ = 45°。',
      hintEn: '22.5° = 45°/2; use cos²(θ/2) = (1 + cos θ)/2 with θ = 45°.',
      answer: { type: 'num', accept: [Math.sqrt(2 + Math.sqrt(2)) / 2, 0.9239], display: 'cos 22.5° = √(2 + √2)/2 （≈ 0.9239）', displayEn: 'cos 22.5° = √(2 + √2)/2  (≈ 0.9239)' },
      sol: [
        { mk: 'M1', tx: '22.5° = 45°/2，用半角公式 cos²(θ/2) = (1 + cos θ)/2。', txEn: '22.5° = 45°/2; use the half-angle formula cos²(θ/2) = (1 + cos θ)/2.' },
        { mk: 'M1', tx: 'cos²22.5° = (1 + cos 45°)/2 = (1 + √2/2)/2', txEn: 'cos²22.5° = (1 + cos 45°)/2 = (1 + √2/2)/2' },
        { mk: 'M1', tx: '= (2 + √2)/4', txEn: '= (2 + √2)/4' },
        { mk: 'A1', tx: 'cos 22.5° = √(2 + √2)/2 ≈ 0.9239', txEn: 'cos 22.5° = √(2 + √2)/2 ≈ 0.9239' },
        { mk: 'A1', tx: '故 cos 22.5° 的精確值為 √(2 + √2)/2。', txEn: 'Hence the exact value of cos 22.5° is √(2 + √2)/2.' }
      ],
      note: '常見失分：開方時忘記 cos 22.5° 為正，或把 (2 + √2)/4 寫成 (1 + √2)/2。',
      noteEn: 'Common loss of marks: forgetting that cos 22.5° is positive when taking the square root, or writing (1 + √2)/2 instead of (2 + √2)/4.'
    },
    {
      id: 'tr20',
      sub: '4.4 二倍角與半角公式',
      lv: 3,
      q: '設 tan θ = 2。<br><b>求 tan 2θ 及 cos 2θ 的值。</b>',
      qEn: 'Let tan θ = 2.<br><b>Find the values of tan 2θ and cos 2θ.</b>',
      hint: '用 tan 2θ = 2tan θ/(1 − tan²θ) 及 cos 2θ = (1 − tan²θ)/(1 + tan²θ)。',
      hintEn: 'Use tan 2θ = 2tan θ/(1 − tan²θ) and cos 2θ = (1 − tan²θ)/(1 + tan²θ).',
      answer: { type: 'numbers', accept: [[-4 / 3, -3 / 5]], display: 'tan 2θ = −4/3，cos 2θ = −3/5', displayEn: 'tan 2θ = −4/3, cos 2θ = −3/5' },
      sol: [
        { mk: 'M1', tx: '已知 tan θ = 2。', txEn: 'Given tan θ = 2.' },
        { mk: 'M1', tx: 'tan 2θ = 2tan θ/(1 − tan²θ) = 4/(1 − 4)', txEn: 'tan 2θ = 2tan θ/(1 − tan²θ) = 4/(1 − 4)' },
        { mk: 'A1', tx: 'tan 2θ = 4/(−3) = −4/3', txEn: 'tan 2θ = 4/(−3) = −4/3' },
        { mk: 'M1', tx: 'cos 2θ = (1 − tan²θ)/(1 + tan²θ) = (1 − 4)/(1 + 4)', txEn: 'cos 2θ = (1 − tan²θ)/(1 + tan²θ) = (1 − 4)/(1 + 4)' },
        { mk: 'A1', tx: 'cos 2θ = −3/5；故 tan 2θ = −4/3、cos 2θ = −3/5。', txEn: 'cos 2θ = −3/5; hence tan 2θ = −4/3 and cos 2θ = −3/5.' }
      ],
      note: '常見失分：把 tan 2θ 寫成 2tan θ = 4，忽略了分母 1 − tan²θ。',
      noteEn: 'Common loss of marks: writing tan 2θ = 2tan θ = 4 and ignoring the denominator 1 − tan²θ.'
    },

    /* ─── 4.5 三角恆等式的化簡與證明 ─── */
    {
      id: 'tr21',
      sub: '4.5 三角恆等式的化簡與證明',
      lv: 1,
      q: '化簡 (1 − cos²θ)/sin θ，其中 sin θ ≠ 0，並以最簡形式表示。',
      qEn: 'Simplify (1 − cos²θ)/sin θ, where sin θ ≠ 0, and give the answer in its simplest form.',
      hint: '用畢氏恆等式 sin²θ + cos²θ = 1，把分子寫成 sin²θ 再約簡。',
      hintEn: 'Use the Pythagorean identity sin²θ + cos²θ = 1 to write the numerator as sin²θ, then cancel.',
      answer: { type: 'symbol', accept: ['sinθ'], display: 'sin θ', displayEn: 'sin θ' },
      sol: [
        { mk: 'M1', tx: '由 sin²θ + cos²θ = 1，得 1 − cos²θ = sin²θ。', txEn: 'From sin²θ + cos²θ = 1, we get 1 − cos²θ = sin²θ.' },
        { mk: 'M1', tx: '原式 = sin²θ/sin θ', txEn: 'The expression = sin²θ/sin θ' },
        { mk: 'A1', tx: '= sin θ', txEn: '= sin θ' },
        { mk: 'A1', tx: '故化簡後為 sin θ（其中 sin θ ≠ 0）。', txEn: 'Hence the simplified form is sin θ (where sin θ ≠ 0).' }
      ],
      note: '常見失分：約去 sin θ 時沒有交代 sin θ ≠ 0，令化簡在 sin θ = 0 時不成立。',
      noteEn: 'Common loss of marks: cancelling sin θ without stating sin θ ≠ 0, so the simplification is invalid when sin θ = 0.'
    },
    {
      id: 'tr22',
      sub: '4.5 三角恆等式的化簡與證明',
      lv: 2,
      q: '化簡 (sin θ + cos θ)² − 1，並以最簡形式表示。',
      qEn: 'Simplify (sin θ + cos θ)² − 1, and give the answer in its simplest form.',
      hint: '先展開完全平方，用 sin²θ + cos²θ = 1，最後用二倍角公式。',
      hintEn: 'Expand the perfect square first, use sin²θ + cos²θ = 1, and finally apply the double-angle formula.',
      answer: { type: 'symbol', accept: ['sin2θ', '2sinθcosθ'], display: 'sin 2θ （即 2 sin θ cos θ）', displayEn: 'sin 2θ  (i.e. 2 sin θ cos θ)' },
      sol: [
        { mk: 'M1', tx: '展開：(sin θ + cos θ)² = sin²θ + 2 sin θ cos θ + cos²θ。', txEn: 'Expanding: (sin θ + cos θ)² = sin²θ + 2 sin θ cos θ + cos²θ.' },
        { mk: 'M1', tx: '用 sin²θ + cos²θ = 1，得 (sin θ + cos θ)² − 1 = 2 sin θ cos θ。', txEn: 'Using sin²θ + cos²θ = 1, (sin θ + cos θ)² − 1 = 2 sin θ cos θ.' },
        { mk: 'A1', tx: '由二倍角公式，2 sin θ cos θ = sin 2θ。', txEn: 'By the double-angle formula, 2 sin θ cos θ = sin 2θ.' },
        { mk: 'A1', tx: '故化簡後為 sin 2θ（即 2 sin θ cos θ）。', txEn: 'Hence the simplified form is sin 2θ (i.e. 2 sin θ cos θ).' }
      ],
      note: '常見失分：展開時漏掉中間項 2 sin θ cos θ，誤得 1 − 1 = 0。',
      noteEn: 'Common loss of marks: omitting the middle term 2 sin θ cos θ when expanding and wrongly getting 1 − 1 = 0.'
    },
    {
      id: 'tr23',
      sub: '4.5 三角恆等式的化簡與證明',
      lv: 3,
      q: '化簡 (1 − cos 2θ)/sin 2θ，其中 sin 2θ ≠ 0，並以最簡形式表示。',
      qEn: 'Simplify (1 − cos 2θ)/sin 2θ, where sin 2θ ≠ 0, and give the answer in its simplest form.',
      hint: '分子用 cos 2θ = 1 − 2sin²θ，分母用 sin 2θ = 2 sin θ cos θ。',
      hintEn: 'Use cos 2θ = 1 − 2sin²θ for the numerator and sin 2θ = 2 sin θ cos θ for the denominator.',
      answer: { type: 'symbol', accept: ['tanθ'], display: 'tan θ', displayEn: 'tan θ' },
      sol: [
        { mk: 'M1', tx: '分子：cos 2θ = 1 − 2sin²θ ⇒ 1 − cos 2θ = 2sin²θ。', txEn: 'Numerator: cos 2θ = 1 − 2sin²θ ⇒ 1 − cos 2θ = 2sin²θ.' },
        { mk: 'M1', tx: '分母：sin 2θ = 2 sin θ cos θ。', txEn: 'Denominator: sin 2θ = 2 sin θ cos θ.' },
        { mk: 'A1', tx: '原式 = 2sin²θ/(2 sin θ cos θ) = sin θ/cos θ = tan θ', txEn: 'The expression = 2sin²θ/(2 sin θ cos θ) = sin θ/cos θ = tan θ' },
        { mk: 'A1', tx: '故化簡後為 tan θ（其中 sin 2θ ≠ 0）。', txEn: 'Hence the simplified form is tan θ (where sin 2θ ≠ 0).' }
      ],
      note: '常見失分：把 1 − cos 2θ 誤寫成 1 − 2sin²θ，符號一錯全題皆錯。',
      noteEn: 'Common loss of marks: writing 1 − cos 2θ wrongly as 1 − 2sin²θ; a single sign error makes the whole question wrong.'
    },
    {
      id: 'tr24',
      sub: '4.5 三角恆等式的化簡與證明',
      lv: 3,
      q: '化簡 1/(1 − sin θ) + 1/(1 + sin θ)，其中 cos θ ≠ 0，並以最簡形式表示。',
      qEn: 'Simplify 1/(1 − sin θ) + 1/(1 + sin θ), where cos θ ≠ 0, and give the answer in its simplest form.',
      hint: '先通分，分母 (1 − sin θ)(1 + sin θ) = 1 − sin²θ，再用畢氏恆等式。',
      hintEn: 'Take a common denominator first; (1 − sin θ)(1 + sin θ) = 1 − sin²θ, then use the Pythagorean identity.',
      answer: { type: 'symbol', accept: ['2/cos^2θ', '2sec^2θ', '2*(secθ)^2'], display: '2/cos²θ （即 2 sec²θ）', displayEn: '2/cos²θ  (i.e. 2 sec²θ)' },
      sol: [
        { mk: 'M1', tx: '通分：1/(1 − sin θ) + 1/(1 + sin θ) = [(1 + sin θ) + (1 − sin θ)]/[(1 − sin θ)(1 + sin θ)]。', txEn: 'Taking a common denominator: 1/(1 − sin θ) + 1/(1 + sin θ) = [(1 + sin θ) + (1 − sin θ)]/[(1 − sin θ)(1 + sin θ)].' },
        { mk: 'M1', tx: '分子 = 2；分母 = 1 − sin²θ = cos²θ。', txEn: 'Numerator = 2; denominator = 1 − sin²θ = cos²θ.' },
        { mk: 'A1', tx: '原式 = 2/cos²θ', txEn: 'The expression = 2/cos²θ' },
        { mk: 'A1', tx: '故化簡後為 2/cos²θ，即 2sec²θ（其中 cos θ ≠ 0）。', txEn: 'Hence the simplified form is 2/cos²θ, i.e. 2sec²θ (where cos θ ≠ 0).' }
      ],
      note: '常見失分：通分後分子算成 (1 + sin θ)(1 − sin θ)，把分子與分母混淆。',
      noteEn: 'Common loss of marks: confusing the numerator (1 + sin θ) + (1 − sin θ) with the denominator (1 + sin θ)(1 − sin θ) after taking the common denominator.'
    },
    {
      id: 'tr25',
      sub: '4.5 三角恆等式的化簡與證明',
      lv: 3,
      q: '設 sin θ + cos θ = 1/2。<br><b>求 sin 2θ 的值。</b>',
      qEn: 'Let sin θ + cos θ = 1/2.<br><b>Find the value of sin 2θ.</b>',
      hint: '把已知式兩邊平方，左邊會出現 sin²θ + cos²θ 及 2 sin θ cos θ。',
      hintEn: 'Square both sides of the given equation; the left-hand side will contain sin²θ + cos²θ and 2 sin θ cos θ.',
      answer: { type: 'num', accept: [-3 / 4, -0.75], display: 'sin 2θ = −3/4 （= −0.75）', displayEn: 'sin 2θ = −3/4  (= −0.75)' },
      sol: [
        { mk: 'M1', tx: '把 sin θ + cos θ = 1/2 兩邊平方。', txEn: 'Square both sides of sin θ + cos θ = 1/2.' },
        { mk: 'M1', tx: 'sin²θ + 2 sin θ cos θ + cos²θ = 1/4。', txEn: 'sin²θ + 2 sin θ cos θ + cos²θ = 1/4.' },
        { mk: 'M1', tx: '用 sin²θ + cos²θ = 1 及 2 sin θ cos θ = sin 2θ，得 1 + sin 2θ = 1/4。', txEn: 'Using sin²θ + cos²θ = 1 and 2 sin θ cos θ = sin 2θ, we get 1 + sin 2θ = 1/4.' },
        { mk: 'A1', tx: 'sin 2θ = 1/4 − 1 = −3/4', txEn: 'sin 2θ = 1/4 − 1 = −3/4' },
        { mk: 'A1', tx: '故 sin 2θ = −3/4 = −0.75。', txEn: 'Hence sin 2θ = −3/4 = −0.75.' }
      ],
      note: '常見失分：平方後只寫 sin²θ + cos²θ = 1/4，漏掉中間項 2 sin θ cos θ。',
      noteEn: 'Common loss of marks: after squaring, writing only sin²θ + cos²θ = 1/4 and omitting the middle term 2 sin θ cos θ.'
    },

    /* ─── 4.6 三角方程 ─── */
    {
      id: 'tr26',
      sub: '4.6 三角方程',
      lv: 1,
      q: '解方程 sin x = 1/2，其中 0 ≤ x ≤ 2π。',
      qEn: 'Solve the equation sin x = 1/2, where 0 ≤ x ≤ 2π.',
      hint: '正弦為正的角在第一、二象限，基本角為 π/6。',
      hintEn: 'Sine is positive in the first and second quadrants, and the basic angle is π/6.',
      answer: { type: 'numbers', accept: [[Math.PI / 6, 5 * Math.PI / 6]], display: 'x = π/6 或 5π/6', displayEn: 'x = π/6 or 5π/6' },
      sol: [
        { mk: 'M1', tx: 'sin x = 1/2 > 0，故 x 在第一或第二象限。', txEn: 'sin x = 1/2 > 0, so x lies in the first or second quadrant.' },
        { mk: 'M1', tx: '基本角為 π/6。', txEn: 'The basic angle is π/6.' },
        { mk: 'A1', tx: '在 0 ≤ x ≤ 2π 內，x = π/6 或 x = π − π/6 = 5π/6。', txEn: 'For 0 ≤ x ≤ 2π, x = π/6 or x = π − π/6 = 5π/6.' },
        { mk: 'A1', tx: '故解為 x = π/6 或 x = 5π/6。', txEn: 'Hence the solutions are x = π/6 or x = 5π/6.' }
      ],
      note: '常見失分：只寫出第一象限的解 π/6，漏掉第二象限的 5π/6。',
      noteEn: 'Common loss of marks: giving only the first-quadrant solution π/6 and missing the second-quadrant solution 5π/6.'
    },
    {
      id: 'tr27',
      sub: '4.6 三角方程',
      lv: 2,
      q: '解方程 cos 2x = 1/2，其中 0 ≤ x ≤ π。',
      qEn: 'Solve the equation cos 2x = 1/2, where 0 ≤ x ≤ π.',
      hint: '先解 2x（此時 0 ≤ 2x ≤ 2π），再把每個解除以 2。',
      hintEn: 'Solve for 2x first (where 0 ≤ 2x ≤ 2π), then divide each solution by 2.',
      answer: { type: 'numbers', accept: [[Math.PI / 6, 5 * Math.PI / 6]], display: 'x = π/6 或 5π/6', displayEn: 'x = π/6 or 5π/6' },
      sol: [
        { mk: 'M1', tx: '由 0 ≤ x ≤ π 得 0 ≤ 2x ≤ 2π。', txEn: 'From 0 ≤ x ≤ π, we have 0 ≤ 2x ≤ 2π.' },
        { mk: 'M1', tx: 'cos 2x = 1/2 ⇒ 2x = π/3 或 2x = 5π/3。', txEn: 'cos 2x = 1/2 ⇒ 2x = π/3 or 2x = 5π/3.' },
        { mk: 'A1', tx: '兩邊除以 2：x = π/6 或 x = 5π/6。', txEn: 'Dividing by 2: x = π/6 or x = 5π/6.' },
        { mk: 'A1', tx: '故解為 x = π/6 或 x = 5π/6。', txEn: 'Hence the solutions are x = π/6 or x = 5π/6.' }
      ],
      note: '常見失分：求出 2x 的解後忘記除以 2，直接寫 x = π/3 或 5π/3。',
      noteEn: 'Common loss of marks: finding the solutions for 2x but forgetting to divide by 2, and writing x = π/3 or 5π/3 directly.'
    },
    {
      id: 'tr28',
      sub: '4.6 三角方程',
      lv: 1,
      q: '解方程 tan x = −1，其中 0 ≤ x ≤ 2π。',
      qEn: 'Solve the equation tan x = −1, where 0 ≤ x ≤ 2π.',
      hint: 'tan 的週期為 π，負值對應第二及第四象限，基本角為 π/4。',
      hintEn: 'The period of tan is π; a negative value corresponds to the second and fourth quadrants, and the basic angle is π/4.',
      answer: { type: 'numbers', accept: [[3 * Math.PI / 4, 7 * Math.PI / 4]], display: 'x = 3π/4 或 7π/4', displayEn: 'x = 3π/4 or 7π/4' },
      sol: [
        { mk: 'M1', tx: 'tan x = −1 < 0，故 x 在第二或第四象限。', txEn: 'tan x = −1 < 0, so x lies in the second or fourth quadrant.' },
        { mk: 'M1', tx: '基本角為 π/4（因 tan π/4 = 1）。', txEn: 'The basic angle is π/4 (since tan π/4 = 1).' },
        { mk: 'A1', tx: 'x = π − π/4 = 3π/4 或 x = 2π − π/4 = 7π/4。', txEn: 'x = π − π/4 = 3π/4 or x = 2π − π/4 = 7π/4.' },
        { mk: 'A1', tx: '故解為 x = 3π/4 或 x = 7π/4。', txEn: 'Hence the solutions are x = 3π/4 or x = 7π/4.' }
      ],
      note: '常見失分：把 tan x = −1 的解寫成 5π/4（第三象限），那是 tan x = 1 的解。',
      noteEn: 'Common loss of marks: giving 5π/4 (third quadrant) as a solution of tan x = −1; that is in fact a solution of tan x = 1.'
    },
    {
      id: 'tr29',
      sub: '4.6 三角方程',
      lv: 3,
      q: '解方程 2sin²x − sin x − 1 = 0，其中 0 ≤ x ≤ 2π。',
      qEn: 'Solve the equation 2sin²x − sin x − 1 = 0, where 0 ≤ x ≤ 2π.',
      hint: '把 sin x 看成未知數，將二次式因式分解成 (2 sin x + 1)(sin x − 1)。',
      hintEn: 'Treat sin x as the unknown and factorise the quadratic as (2 sin x + 1)(sin x − 1).',
      answer: { type: 'numbers', accept: [[Math.PI / 2, 7 * Math.PI / 6, 11 * Math.PI / 6]], display: 'x = π/2、7π/6 或 11π/6', displayEn: 'x = π/2, 7π/6 or 11π/6' },
      sol: [
        { mk: 'M1', tx: '設 u = sin x，則 2u² − u − 1 = 0。', txEn: 'Let u = sin x; then 2u² − u − 1 = 0.' },
        { mk: 'M1', tx: '因式分解：(2u + 1)(u − 1) = 0，故 u = −1/2 或 u = 1。', txEn: 'Factorising: (2u + 1)(u − 1) = 0, so u = −1/2 or u = 1.' },
        { mk: 'A1', tx: 'sin x = 1 ⇒ x = π/2；sin x = −1/2 ⇒ x = π + π/6 = 7π/6 或 x = 2π − π/6 = 11π/6。', txEn: 'sin x = 1 ⇒ x = π/2; sin x = −1/2 ⇒ x = π + π/6 = 7π/6 or x = 2π − π/6 = 11π/6.' },
        { mk: 'A1', tx: '故在 0 ≤ x ≤ 2π 內解為 x = π/2、7π/6 或 11π/6。', txEn: 'Hence, for 0 ≤ x ≤ 2π, the solutions are x = π/2, 7π/6 or 11π/6.' }
      ],
      note: '常見失分：由 sin x = −1/2 只取一個解，漏掉第三或第四象限的另一個解。',
      noteEn: 'Common loss of marks: taking only one solution from sin x = −1/2 and missing the other solution in the third or fourth quadrant.'
    },
    {
      id: 'tr30',
      sub: '4.6 三角方程',
      lv: 3,
      q: '解方程 sin 2x = cos x，其中 0 ≤ x ≤ 2π。',
      qEn: 'Solve the equation sin 2x = cos x, where 0 ≤ x ≤ 2π.',
      hint: '用 sin 2x = 2 sin x cos x 把方程移項並提出公因數 cos x，切勿兩邊直接除以 cos x。',
      hintEn: 'Use sin 2x = 2 sin x cos x, rearrange the equation and take out the common factor cos x; never divide both sides by cos x directly.',
      answer: { type: 'numbers', accept: [[Math.PI / 6, Math.PI / 2, 5 * Math.PI / 6, 3 * Math.PI / 2]], display: 'x = π/6、π/2、5π/6 或 3π/2', displayEn: 'x = π/6, π/2, 5π/6 or 3π/2' },
      sol: [
        { mk: 'M1', tx: 'sin 2x = 2 sin x cos x，故方程化為 2 sin x cos x = cos x。', txEn: 'Since sin 2x = 2 sin x cos x, the equation becomes 2 sin x cos x = cos x.' },
        { mk: 'M1', tx: '移項並提出公因數：cos x(2 sin x − 1) = 0。', txEn: 'Rearranging and taking out the common factor: cos x(2 sin x − 1) = 0.' },
        { mk: 'M1', tx: 'cos x = 0 ⇒ x = π/2 或 x = 3π/2；2 sin x − 1 = 0 ⇒ sin x = 1/2 ⇒ x = π/6 或 x = 5π/6。', txEn: 'cos x = 0 ⇒ x = π/2 or x = 3π/2; 2 sin x − 1 = 0 ⇒ sin x = 1/2 ⇒ x = π/6 or x = 5π/6.' },
        { mk: 'A1', tx: '在 0 ≤ x ≤ 2π 內，四個解依次為 x = π/6、π/2、5π/6、3π/2。', txEn: 'For 0 ≤ x ≤ 2π, the four solutions in order are x = π/6, π/2, 5π/6, 3π/2.' },
        { mk: 'A1', tx: '故解為 x = π/6、π/2、5π/6 或 3π/2。', txEn: 'Hence the solutions are x = π/6, π/2, 5π/6 or 3π/2.' }
      ],
      note: '常見失分：兩邊同時除以 cos x，令 cos x = 0 的兩個解 π/2 及 3π/2 被丟掉。',
      noteEn: 'Common loss of marks: dividing both sides by cos x, which loses the two solutions π/2 and 3π/2 where cos x = 0.'
    }
  ];
})(typeof window !== 'undefined' ? window : globalThis);
