/* bank/sincos.js — 正弦法及餘弦法（30 題）*/
(function (root) {
  root.M2Bank = root.M2Bank || {};
  root.M2Bank['sincos'] = [
    /* ===== 3.1 正弦法（sc01–sc06） ===== */
    {
      id: 'sc01',
      sub: '3.1 正弦法',
      lv: 1,
      q: '在 △ABC 中，A = 70°，B = 45°，a = 10 cm。<b>求 b（準確至三位有效數字）。</b>',
      qEn: 'In △ABC, A = 70°, B = 45° and a = 10 cm. <b>Find b (correct to 3 significant figures).</b>',
      hint: '正弦法：a ÷ sin A = b ÷ sin B。每一條邊都要配上自己的對角。',
      hintEn: 'Sine rule: a ÷ sin A = b ÷ sin B. Each side must be paired with its own opposite angle.',
      answer: { type: 'num', accept: [7.5249, 7.52], display: 'b ≈ 7.52 cm', displayEn: 'b ≈ 7.52 cm' },
      sol: [
        { mk: 'M1', tx: '已知 a 及其對角 A，用正弦法：b ÷ sin B = a ÷ sin A',
          txEn: 'Given a and its opposite angle A, use the sine rule: b ÷ sin B = a ÷ sin A' },
        { mk: 'M1', tx: '整理得 b = a sin B ÷ sin A',
          txEn: 'Rearranging gives b = a sin B ÷ sin A' },
        { mk: 'A1', tx: 'b = 10 × sin 45° ÷ sin 70° = 10 × 0.70711 ÷ 0.93969 ≈ 7.5249',
          txEn: 'b = 10 × sin 45° ÷ sin 70° = 10 × 0.70711 ÷ 0.93969 ≈ 7.5249' },
        { mk: 'A1', tx: '準確至三位有效數字：b ≈ 7.52 cm',
          txEn: 'Correct to 3 significant figures: b ≈ 7.52 cm' }
      ],
      note: '常見失分：把 b 與 A 配對。正弦法中每一邊必須對應自己的對角。',
      noteEn: 'Common loss of marks: pairing b with A. In the sine rule every side must correspond to its own opposite angle.'
    },
    {
      id: 'sc02',
      sub: '3.1 正弦法',
      lv: 1,
      q: '在 △ABC 中，A = 60°，B = 50°，b = 100 cm。<b>求 a（準確至三位有效數字）。</b>',
      qEn: 'In △ABC, A = 60°, B = 50° and b = 100 cm. <b>Find a (correct to 3 significant figures).</b>',
      hint: '正弦法：a = b sin A ÷ sin B。分子是對應 a 的角 A。',
      hintEn: 'Sine rule: a = b sin A ÷ sin B. The numerator contains angle A, which corresponds to a.',
      answer: { type: 'num', accept: [113.05, 113], display: 'a ≈ 113 cm', displayEn: 'a ≈ 113 cm' },
      sol: [
        { mk: 'M1', tx: '正弦法：a ÷ sin A = b ÷ sin B',
          txEn: 'Sine rule: a ÷ sin A = b ÷ sin B' },
        { mk: 'M1', tx: '整理得 a = b sin A ÷ sin B',
          txEn: 'Rearranging gives a = b sin A ÷ sin B' },
        { mk: 'A1', tx: 'a = 100 × sin 60° ÷ sin 50° = 100 × 0.86603 ÷ 0.76604 ≈ 113.05',
          txEn: 'a = 100 × sin 60° ÷ sin 50° = 100 × 0.86603 ÷ 0.76604 ≈ 113.05' },
        { mk: 'A1', tx: '準確至三位有效數字：a ≈ 113 cm',
          txEn: 'Correct to 3 significant figures: a ≈ 113 cm' }
      ],
      note: '邊長較大時要先保留足夠位數，最後才四捨五入。',
      noteEn: 'For larger side lengths, keep enough digits during the working and round only at the end.'
    },
    {
      id: 'sc03',
      sub: '3.1 正弦法',
      lv: 1,
      q: '在 △ABC 中，A = 65°，B = 38°，a = 8 cm。<b>求 b（準確至三位有效數字）。</b>',
      qEn: 'In △ABC, A = 65°, B = 38° and a = 8 cm. <b>Find b (correct to 3 significant figures).</b>',
      hint: '直接用正弦法 b = a sin B ÷ sin A，不必先求 C。',
      hintEn: 'Use the sine rule directly: b = a sin B ÷ sin A. There is no need to find C first.',
      answer: { type: 'num', accept: [5.4345, 5.43], display: 'b ≈ 5.43 cm', displayEn: 'b ≈ 5.43 cm' },
      sol: [
        { mk: 'M1', tx: '正弦法：b ÷ sin B = a ÷ sin A',
          txEn: 'Sine rule: b ÷ sin B = a ÷ sin A' },
        { mk: 'M1', tx: '整理得 b = a sin B ÷ sin A',
          txEn: 'Rearranging gives b = a sin B ÷ sin A' },
        { mk: 'A1', tx: 'b = 8 × sin 38° ÷ sin 65° = 8 × 0.61566 ÷ 0.90631 ≈ 5.4345',
          txEn: 'b = 8 × sin 38° ÷ sin 65° = 8 × 0.61566 ÷ 0.90631 ≈ 5.4345' },
        { mk: 'A1', tx: '準確至三位有效數字：b ≈ 5.43 cm',
          txEn: 'Correct to 3 significant figures: b ≈ 5.43 cm' }
      ],
      note: '只要有一組「邊與其對角」及另一隻角或邊，正弦法即可求解。',
      noteEn: 'The sine rule can be applied as long as one side together with its opposite angle and one more angle or side are known.'
    },
    {
      id: 'sc04',
      sub: '3.1 正弦法',
      lv: 1,
      q: '在 △ABC 中，A = 48°，C = 112°，a = 6 cm。<b>求 c（準確至三位有效數字）。</b>',
      qEn: 'In △ABC, A = 48°, C = 112° and a = 6 cm. <b>Find c (correct to 3 significant figures).</b>',
      hint: '用正弦法 c = a sin C ÷ sin A；C 是鈍角，sin C 仍為正數。',
      hintEn: 'Use the sine rule c = a sin C ÷ sin A. C is obtuse, but sin C is still positive.',
      answer: { type: 'num', accept: [7.4859, 7.49], display: 'c ≈ 7.49 cm', displayEn: 'c ≈ 7.49 cm' },
      sol: [
        { mk: 'M1', tx: '正弦法：c ÷ sin C = a ÷ sin A',
          txEn: 'Sine rule: c ÷ sin C = a ÷ sin A' },
        { mk: 'M1', tx: '整理得 c = a sin C ÷ sin A',
          txEn: 'Rearranging gives c = a sin C ÷ sin A' },
        { mk: 'A1', tx: 'c = 6 × sin 112° ÷ sin 48° = 6 × 0.92718 ÷ 0.74314 ≈ 7.4859',
          txEn: 'c = 6 × sin 112° ÷ sin 48° = 6 × 0.92718 ÷ 0.74314 ≈ 7.4859' },
        { mk: 'A1', tx: '準確至三位有效數字：c ≈ 7.49 cm',
          txEn: 'Correct to 3 significant figures: c ≈ 7.49 cm' }
      ],
      note: '三角形內角必小於 180°；C = 112° 為鈍角，正弦值仍是正數。',
      noteEn: 'An interior angle of a triangle is always less than 180°. C = 112° is obtuse, yet its sine is still positive.'
    },
    {
      id: 'sc05',
      sub: '3.1 正弦法',
      lv: 2,
      q: '在 △ABC 中，B = 40°，b = 12 cm。設 △ABC 的外接圓半徑為 R。<b>求 R（準確至三位有效數字）。</b>',
      qEn: 'In △ABC, B = 40° and b = 12 cm. Let R be the radius of the circumcircle of △ABC. <b>Find R (correct to 3 significant figures).</b>',
      hint: '正弦法的延展形式：a ÷ sin A = b ÷ sin B = c ÷ sin C = 2R，其中 R 是外接圓半徑。',
      hintEn: 'Extended form of the sine rule: a ÷ sin A = b ÷ sin B = c ÷ sin C = 2R, where R is the radius of the circumcircle.',
      answer: { type: 'num', accept: [9.334, 9.33], display: 'R ≈ 9.33 cm', displayEn: 'R ≈ 9.33 cm' },
      sol: [
        { mk: 'M1', tx: '正弦法的延展形式：b ÷ sin B = 2R',
          txEn: 'Extended form of the sine rule: b ÷ sin B = 2R' },
        { mk: 'M1', tx: '故 R = b ÷ (2 sin B)',
          txEn: 'Hence R = b ÷ (2 sin B)' },
        { mk: 'A1', tx: 'R = 12 ÷ (2 × sin 40°) = 12 ÷ (2 × 0.64279) ≈ 9.334',
          txEn: 'R = 12 ÷ (2 × sin 40°) = 12 ÷ (2 × 0.64279) ≈ 9.334' },
        { mk: 'A1', tx: '準確至三位有效數字：R ≈ 9.33 cm',
          txEn: 'Correct to 3 significant figures: R ≈ 9.33 cm' }
      ],
      note: '常見失分：忘記除以 2。b ÷ sin B 等於直徑 2R，不是半徑。',
      noteEn: 'Common loss of marks: forgetting to divide by 2. b ÷ sin B equals the diameter 2R, not the radius.'
    },
    {
      id: 'sc06',
      sub: '3.1 正弦法',
      lv: 2,
      q: '在 △PQR 中，P = 30°，Q = 100°，p = 13 cm。M 為 PQ 的中點。<b>求 PM（準確至三位有效數字）。</b>',
      qEn: 'In △PQR, P = 30°, Q = 100° and p = 13 cm. M is the midpoint of PQ. <b>Find PM (correct to 3 significant figures).</b>',
      hint: '先用內角和求 R，再用正弦法求 PQ（PQ 的對角是 R），最後取一半。',
      hintEn: 'First find R from the angle sum of a triangle, then use the sine rule to find PQ (the angle opposite PQ is R), and finally take half of it.',
      answer: { type: 'num', accept: [9.9586, 9.96], display: 'PM = PQ ÷ 2 ≈ 9.96 cm', displayEn: 'PM = PQ ÷ 2 ≈ 9.96 cm' },
      sol: [
        { mk: 'M1', tx: '內角和：R = 180° − 30° − 100° = 50°',
          txEn: 'Angle sum of a triangle: R = 180° − 30° − 100° = 50°' },
        { mk: 'M1', tx: 'PQ 的對角是 R。正弦法：PQ ÷ sin R = p ÷ sin P，即 PQ = p sin R ÷ sin P',
          txEn: 'The angle opposite PQ is R. Sine rule: PQ ÷ sin R = p ÷ sin P, i.e. PQ = p sin R ÷ sin P' },
        { mk: 'A1', tx: 'PQ = 13 × sin 50° ÷ sin 30° = 13 × 0.76604 ÷ 0.5 ≈ 19.9172',
          txEn: 'PQ = 13 × sin 50° ÷ sin 30° = 13 × 0.76604 ÷ 0.5 ≈ 19.9172' },
        { mk: 'A1', tx: 'M 為 PQ 中點，故 PM = PQ ÷ 2 ≈ 9.96 cm',
          txEn: 'M is the midpoint of PQ, so PM = PQ ÷ 2 ≈ 9.96 cm' }
      ],
      note: '關鍵是認清 PQ 的對角是 R；用錯對角會令後續步驟全部出錯。',
      noteEn: 'The key is to recognise that the angle opposite PQ is R; using the wrong angle will make every later step wrong.'
    },

    /* ===== 3.2 餘弦法（sc07–sc12） ===== */
    {
      id: 'sc07',
      sub: '3.2 餘弦法',
      lv: 2,
      q: '在 △ABC 中，b = 4 cm，c = 5 cm，A = 48°。已知 B 為銳角。<b>求 B（準確至三位有效數字）。</b>',
      qEn: 'In △ABC, b = 4 cm, c = 5 cm and A = 48°. It is given that B is acute. <b>Find B (correct to 3 significant figures).</b>',
      hint: '先用餘弦法求 a（A 的對邊），再用正弦法求 B。',
      hintEn: 'First use the cosine rule to find a (the side opposite A), then use the sine rule to find B.',
      answer: { type: 'num', accept: [51.9875, 52.0], display: 'B ≈ 52.0°', displayEn: 'B ≈ 52.0°' },
      sol: [
        { mk: 'M1', tx: '餘弦法求 a：a² = b² + c² − 2bc cos A = 16 + 25 − 2 × 4 × 5 × cos 48°',
          txEn: 'Cosine rule for a: a² = b² + c² − 2bc cos A = 16 + 25 − 2 × 4 × 5 × cos 48°' },
        { mk: 'M1', tx: 'a² = 41 − 40 × 0.66913 = 41 − 26.7652 = 14.2348，得 a ≈ 3.7729',
          txEn: 'a² = 41 − 40 × 0.66913 = 41 − 26.7652 = 14.2348, so a ≈ 3.7729' },
        { mk: 'A1', tx: '正弦法：sin B = b sin A ÷ a = 4 × 0.74314 ÷ 3.7729 ≈ 0.78788',
          txEn: 'Sine rule: sin B = b sin A ÷ a = 4 × 0.74314 ÷ 3.7729 ≈ 0.78788' },
        { mk: 'A1', tx: '因 B 為銳角，B ≈ 51.99°，即 B ≈ 52.0°',
          txEn: 'Since B is acute, B ≈ 51.99°, i.e. B ≈ 52.0°' }
      ],
      note: '先求 a 才能用正弦法；若直接比較 b 與 c 的比例會漏掉對角的配對。',
      noteEn: 'Find a first before applying the sine rule; comparing b and c directly would ignore which side pairs with which angle.'
    },
    {
      id: 'sc08',
      sub: '3.2 餘弦法',
      lv: 1,
      q: '在 △ABC 中，a = 7 cm，b = 9 cm，c = 11 cm。<b>求 C（準確至三位有效數字）。</b>',
      qEn: 'In △ABC, a = 7 cm, b = 9 cm and c = 11 cm. <b>Find C (correct to 3 significant figures).</b>',
      hint: '已知三邊求角：cos C = (a² + b² − c²) ÷ (2ab)，分子減去的必須是 C 的對邊。',
      hintEn: 'To find an angle from three sides: cos C = (a² + b² − c²) ÷ (2ab). The side subtracted in the numerator must be the side opposite C.',
      answer: { type: 'num', accept: [85.904, 85.9], display: 'C ≈ 85.9°', displayEn: 'C ≈ 85.9°' },
      sol: [
        { mk: 'M1', tx: '餘弦法：cos C = (a² + b² − c²) ÷ (2ab)',
          txEn: 'Cosine rule: cos C = (a² + b² − c²) ÷ (2ab)' },
        { mk: 'M1', tx: 'cos C = (49 + 81 − 121) ÷ (2 × 7 × 9) = 9 ÷ 126',
          txEn: 'cos C = (49 + 81 − 121) ÷ (2 × 7 × 9) = 9 ÷ 126' },
        { mk: 'A1', tx: 'cos C = 1 ÷ 14 ≈ 0.071429',
          txEn: 'cos C = 1 ÷ 14 ≈ 0.071429' },
        { mk: 'A1', tx: 'C ≈ 85.90°，即 C ≈ 85.9°',
          txEn: 'C ≈ 85.90°, i.e. C ≈ 85.9°' }
      ],
      note: '減錯對邊會得出完全不同的角；檢查方法是把最大角對應最大邊。',
      noteEn: 'Subtracting the wrong side gives a completely different angle; a useful check is that the largest angle is opposite the longest side.'
    },
    {
      id: 'sc09',
      sub: '3.2 餘弦法',
      lv: 2,
      q: '在 △ABC 中，b = 8 cm，c = 12 cm，A = 45°。<b>求 a（以根式表示，或準確至三位有效數字）。</b>',
      qEn: 'In △ABC, b = 8 cm, c = 12 cm and A = 45°. <b>Find a (in surd form, or correct to 3 significant figures).</b>',
      hint: '兩邊夾角求第三邊：a² = b² + c² − 2bc cos A，a 是 A 的對邊。',
      hintEn: 'To find the third side from two sides and the included angle: a² = b² + c² − 2bc cos A, where a is the side opposite A.',
      answer: { type: 'num', accept: [Math.sqrt(208 - 96 * Math.SQRT2), 8.4991, 8.50], display: 'a = √(208 − 96√2) ≈ 8.50 cm', displayEn: 'a = √(208 − 96√2) ≈ 8.50 cm' },
      sol: [
        { mk: 'M1', tx: '餘弦法：a² = b² + c² − 2bc cos A',
          txEn: 'Cosine rule: a² = b² + c² − 2bc cos A' },
        { mk: 'M1', tx: 'a² = 64 + 144 − 2 × 8 × 12 × cos 45° = 208 − 192 × (√2 ÷ 2)',
          txEn: 'a² = 64 + 144 − 2 × 8 × 12 × cos 45° = 208 − 192 × (√2 ÷ 2)' },
        { mk: 'A1', tx: 'a² = 208 − 96√2 ≈ 208 − 135.7645 = 72.2355',
          txEn: 'a² = 208 − 96√2 ≈ 208 − 135.7645 = 72.2355' },
        { mk: 'A1', tx: 'a = √(208 − 96√2) ≈ 8.50 cm',
          txEn: 'a = √(208 − 96√2) ≈ 8.50 cm' }
      ],
      note: '碰到特殊角（45°、60°）時可保留根式作精確答案，最後才取近似值。',
      noteEn: 'With special angles (45°, 60°), keep the surd form as the exact answer and take the approximation only at the end.'
    },
    {
      id: 'sc10',
      sub: '3.2 餘弦法',
      lv: 1,
      q: '在 △ABC 中，a = 9 cm，b = 8 cm，c = 7 cm。<b>求 B（準確至三位有效數字）。</b>',
      qEn: 'In △ABC, a = 9 cm, b = 8 cm and c = 7 cm. <b>Find B (correct to 3 significant figures).</b>',
      hint: 'B 的對邊是 b，另兩邊為 a 與 c：cos B = (a² + c² − b²) ÷ (2ac)。',
      hintEn: 'The side opposite B is b, and the other two sides are a and c: cos B = (a² + c² − b²) ÷ (2ac).',
      answer: { type: 'num', accept: [58.4119, 58.4], display: 'B ≈ 58.4°', displayEn: 'B ≈ 58.4°' },
      sol: [
        { mk: 'M1', tx: '餘弦法：cos B = (a² + c² − b²) ÷ (2ac)',
          txEn: 'Cosine rule: cos B = (a² + c² − b²) ÷ (2ac)' },
        { mk: 'M1', tx: 'cos B = (81 + 49 − 64) ÷ (2 × 9 × 7) = 66 ÷ 126',
          txEn: 'cos B = (81 + 49 − 64) ÷ (2 × 9 × 7) = 66 ÷ 126' },
        { mk: 'A1', tx: 'cos B = 11 ÷ 21 ≈ 0.523810',
          txEn: 'cos B = 11 ÷ 21 ≈ 0.523810' },
        { mk: 'A1', tx: 'B ≈ 58.41°，即 B ≈ 58.4°',
          txEn: 'B ≈ 58.41°, i.e. B ≈ 58.4°' }
      ],
      note: '分子的三個平方項中，被減的必須是所求角的對邊。',
      noteEn: 'Among the three squared terms in the numerator, the one subtracted must be the side opposite the required angle.'
    },
    {
      id: 'sc11',
      sub: '3.2 餘弦法',
      lv: 2,
      q: '在 △ABC 中，AB = 8 cm，AC = 7 cm，cos A = 7 ÷ 15。<b>求 BC（準確至三位有效數字）。</b>',
      qEn: 'In △ABC, AB = 8 cm, AC = 7 cm and cos A = 7 ÷ 15. <b>Find BC (correct to 3 significant figures).</b>',
      hint: 'A 的夾邊是 AB 與 AC，對邊是 BC：BC² = AB² + AC² − 2 × AB × AC × cos A。',
      hintEn: 'The sides including A are AB and AC, and the side opposite A is BC: BC² = AB² + AC² − 2 × AB × AC × cos A.',
      answer: { type: 'num', accept: [7.7932, 7.79], display: 'BC ≈ 7.79 cm', displayEn: 'BC ≈ 7.79 cm' },
      sol: [
        { mk: 'M1', tx: '餘弦法：BC² = AB² + AC² − 2 × AB × AC × cos A',
          txEn: 'Cosine rule: BC² = AB² + AC² − 2 × AB × AC × cos A' },
        { mk: 'M1', tx: 'BC² = 64 + 49 − 2 × 8 × 7 × (7 ÷ 15) = 113 − 112 × (7 ÷ 15)',
          txEn: 'BC² = 64 + 49 − 2 × 8 × 7 × (7 ÷ 15) = 113 − 112 × (7 ÷ 15)' },
        { mk: 'A1', tx: 'BC² = 113 − 784 ÷ 15 = (1695 − 784) ÷ 15 = 911 ÷ 15 ≈ 60.7333',
          txEn: 'BC² = 113 − 784 ÷ 15 = (1695 − 784) ÷ 15 = 911 ÷ 15 ≈ 60.7333' },
        { mk: 'A1', tx: 'BC = √(911 ÷ 15) ≈ 7.79 cm',
          txEn: 'BC = √(911 ÷ 15) ≈ 7.79 cm' }
      ],
      note: '代入分數形式的餘弦值時，先約簡 2 × AB × AC 與分母可減少計算錯誤。',
      noteEn: 'When substituting a fractional cosine value, cancelling 2 × AB × AC with the denominator first reduces arithmetic errors.'
    },
    {
      id: 'sc12',
      sub: '3.2 餘弦法',
      lv: 3,
      q: '在 △ABC 中，a = 12 cm，b = 8 cm，c = 15 cm。<b>求 △ABC 的最大角（準確至三位有效數字）。</b>',
      qEn: 'In △ABC, a = 12 cm, b = 8 cm and c = 15 cm. <b>Find the largest angle of △ABC (correct to 3 significant figures).</b>',
      hint: '最大邊的對角就是最大角。先找出最長邊，再用餘弦法求它的對角。',
      hintEn: 'The largest angle is opposite the longest side. Identify the longest side first, then use the cosine rule to find the angle opposite it.',
      answer: { type: 'num', accept: [95.08, 95.1], display: '最大角 ≈ 95.1°', displayEn: 'Largest angle ≈ 95.1°' },
      sol: [
        { mk: 'M1', tx: '最長邊是 c = 15 cm，故最大角為 C',
          txEn: 'The longest side is c = 15 cm, so the largest angle is C' },
        { mk: 'M1', tx: '餘弦法：cos C = (a² + b² − c²) ÷ (2ab) = (144 + 64 − 225) ÷ (2 × 12 × 8)',
          txEn: 'Cosine rule: cos C = (a² + b² − c²) ÷ (2ab) = (144 + 64 − 225) ÷ (2 × 12 × 8)' },
        { mk: 'A1', tx: 'cos C = (−17) ÷ 192 ≈ −0.088542，負值表示 C 為鈍角',
          txEn: 'cos C = (−17) ÷ 192 ≈ −0.088542; a negative value shows that C is obtuse' },
        { mk: 'A1', tx: 'C ≈ 95.08°，即最大角約為 95.1°',
          txEn: 'C ≈ 95.08°, so the largest angle is about 95.1°' }
      ],
      note: 'cos C < 0 表示該角介於 90° 與 180° 之間，切勿誤取 180° − 95.08°。',
      noteEn: 'cos C < 0 means the angle lies between 90° and 180°; do not mistakenly take 180° − 95.08°.'
    },

    /* ===== 3.3 三角形面積公式 ½ab sin C（sc13–sc18） ===== */
    {
      id: 'sc13',
      sub: '3.3 三角形面積公式 ½ab sin C',
      lv: 1,
      q: '在 △ABC 中，AB = 12 cm，BC = 8 cm，∠ABC = 60°。<b>求 △ABC 的面積（以根式表示，或準確至三位有效數字）。</b>',
      qEn: 'In △ABC, AB = 12 cm, BC = 8 cm and ∠ABC = 60°. <b>Find the area of △ABC (in surd form, or correct to 3 significant figures).</b>',
      hint: 'AB 與 BC 夾著 B 角：面積 = ½ × AB × BC × sin B。',
      hintEn: 'AB and BC include angle B: area = ½ × AB × BC × sin B.',
      answer: { type: 'num', accept: [24 * Math.sqrt(3), 41.5692, 41.57], display: '面積 = 24√3 ≈ 41.6 cm²', displayEn: 'Area = 24√3 ≈ 41.6 cm²' },
      sol: [
        { mk: 'M1', tx: 'B 的兩條夾邊為 AB = 12 與 BC = 8，面積 = ½ × AB × BC × sin B',
          txEn: 'The two sides including B are AB = 12 and BC = 8, so area = ½ × AB × BC × sin B' },
        { mk: 'M1', tx: '面積 = ½ × 12 × 8 × sin 60° = 48 × (√3 ÷ 2)',
          txEn: 'Area = ½ × 12 × 8 × sin 60° = 48 × (√3 ÷ 2)' },
        { mk: 'A1', tx: '整理得面積 = 24√3',
          txEn: 'This simplifies to area = 24√3' },
        { mk: 'A1', tx: '面積 = 24√3 ≈ 41.6 cm²',
          txEn: 'Area = 24√3 ≈ 41.6 cm²' }
      ],
      note: '常見失分：用了兩條邊卻乘上第三隻角的正弦；必須是兩邊夾角的正弦。',
      noteEn: 'Common loss of marks: using two sides but multiplying by the sine of the third angle. It must be the sine of the included angle.'
    },
    {
      id: 'sc14',
      sub: '3.3 三角形面積公式 ½ab sin C',
      lv: 2,
      q: '在 △ABC 中，AB = 3 cm，BC = 6 cm，∠ABC = 50°。設 D 是 AC 的中點。<b>求 △ABD 的面積（準確至三位有效數字）。</b>',
      qEn: 'In △ABC, AB = 3 cm, BC = 6 cm and ∠ABC = 50°. Let D be the midpoint of AC. <b>Find the area of △ABD (correct to 3 significant figures).</b>',
      hint: 'BD 是 △ABC 的中線，中線平分三角形面積。先求 △ABC 的面積再取一半。',
      hintEn: 'BD is a median of △ABC, and a median bisects the area of a triangle. Find the area of △ABC first, then take half of it.',
      answer: { type: 'num', accept: [3.4472, 3.45], display: '△ABD 的面積 ≈ 3.45 cm²', displayEn: 'Area of △ABD ≈ 3.45 cm²' },
      sol: [
        { mk: 'M1', tx: 'B 的夾邊是 AB = 3 與 BC = 6，△ABC 的面積 = ½ × 3 × 6 × sin 50° = 9 sin 50°',
          txEn: 'The sides including B are AB = 3 and BC = 6, so the area of △ABC = ½ × 3 × 6 × sin 50° = 9 sin 50°' },
        { mk: 'M1', tx: '△ABC 的面積 ≈ 9 × 0.76604 ≈ 6.8944 cm²',
          txEn: 'Area of △ABC ≈ 9 × 0.76604 ≈ 6.8944 cm²' },
        { mk: 'A1', tx: 'D 是 AC 中點，△ABD 與 △CBD 等底等高（AD = DC），故面積相等',
          txEn: 'D is the midpoint of AC, so △ABD and △CBD have equal bases and the same height (AD = DC), hence their areas are equal' },
        { mk: 'A1', tx: '△ABD 的面積 = 6.8944 ÷ 2 ≈ 3.45 cm²',
          txEn: 'Area of △ABD = 6.8944 ÷ 2 ≈ 3.45 cm²' }
      ],
      note: '中線平分面積是常用性質；先算整體再取半比直接找 △ABD 的夾角更省時。',
      noteEn: 'A median bisecting the area is a useful property; finding the whole area first and halving it is quicker than looking for the included angle of △ABD directly.'
    },
    {
      id: 'sc15',
      sub: '3.3 三角形面積公式 ½ab sin C',
      lv: 3,
      q: '在 △ABC 中，AB = 6 cm，BC = 10 cm，而 △ABC 的面積為 15√3 cm²。<b>求 B 角的全部可能值（以遞增次序排列，以度數表示）。</b>',
      qEn: 'In △ABC, AB = 6 cm, BC = 10 cm and the area of △ABC is 15√3 cm². <b>Find all possible values of angle B (in increasing order, in degrees).</b>',
      hint: '面積 = ½ × AB × BC × sin B，把已知面積代入解出 sin B，再考慮兩個互補角。',
      hintEn: 'Area = ½ × AB × BC × sin B. Substitute the given area to solve for sin B, then consider the two supplementary angles.',
      answer: { type: 'numbers', accept: [[60, 120]], display: 'B = 60° 或 B = 120°', displayEn: 'B = 60° or B = 120°' },
      sol: [
        { mk: 'M1', tx: 'B 的兩條夾邊為 AB = 6 與 BC = 10，面積 = ½ × 6 × 10 × sin B = 30 sin B',
          txEn: 'The two sides including B are AB = 6 and BC = 10, so area = ½ × 6 × 10 × sin B = 30 sin B' },
        { mk: 'M1', tx: '代入已知面積：30 sin B = 15√3，即 sin B = (15√3) ÷ 30 = √3 ÷ 2',
          txEn: 'Substituting the given area: 30 sin B = 15√3, i.e. sin B = (15√3) ÷ 30 = √3 ÷ 2' },
        { mk: 'A1', tx: '在 0° 至 180° 內，sin B = √3 ÷ 2 對應 B = 60° 或 B = 120°',
          txEn: 'For 0° to 180°, sin B = √3 ÷ 2 gives B = 60° or B = 120°' },
        { mk: 'A1', tx: '兩個角都能與 AB、BC 構成有效三角形，故 B = 60° 或 B = 120°',
          txEn: 'Both angles form valid triangles with AB and BC, so B = 60° or B = 120°' }
      ],
      note: '面積公式只鎖定夾角的正弦值；兩個互補角都可能成立，必須全部列出。',
      noteEn: 'The area formula only fixes the sine of the included angle; both supplementary angles may be valid, so all of them must be listed.'
    },
    {
      id: 'sc16',
      sub: '3.3 三角形面積公式 ½ab sin C',
      lv: 1,
      q: '在 △ABC 中，AB = 3 cm，BC = 7 cm，而 △ABC 的面積為 6 cm²。<b>求 sin B（以最簡分數表示）。</b>',
      qEn: 'In △ABC, AB = 3 cm, BC = 7 cm and the area of △ABC is 6 cm². <b>Find sin B (in simplest fraction form).</b>',
      hint: '面積 = ½ × AB × BC × sin B。把 AB、BC 與面積代入，直接解出 sin B。',
      hintEn: 'Area = ½ × AB × BC × sin B. Substitute AB, BC and the area to solve for sin B directly.',
      answer: { type: 'symbol', accept: ['4/7', '0.571429'], display: 'sin B = 4/7 ≈ 0.5714', displayEn: 'sin B = 4/7 ≈ 0.5714' },
      sol: [
        { mk: 'M1', tx: 'B 的兩條夾邊為 AB = 3 與 BC = 7，面積 = ½ × 3 × 7 × sin B = 10.5 sin B',
          txEn: 'The two sides including B are AB = 3 and BC = 7, so area = ½ × 3 × 7 × sin B = 10.5 sin B' },
        { mk: 'M1', tx: '代入已知面積：10.5 sin B = 6',
          txEn: 'Substituting the given area: 10.5 sin B = 6' },
        { mk: 'A1', tx: 'sin B = 6 ÷ 10.5 = 60 ÷ 105',
          txEn: 'sin B = 6 ÷ 10.5 = 60 ÷ 105' },
        { mk: 'A1', tx: '約簡得 sin B = 4 ÷ 7 ≈ 0.5714',
          txEn: 'Simplifying gives sin B = 4 ÷ 7 ≈ 0.5714' }
      ],
      note: '本題只問 sin B 而非 B；若要求 B 則須同時考慮銳角與鈍角兩個解。',
      noteEn: 'This question asks for sin B rather than B; if B were required, both the acute and the obtuse solution would have to be considered.'
    },
    {
      id: 'sc17',
      sub: '3.3 三角形面積公式 ½ab sin C',
      lv: 2,
      q: '在 △ABC 中，a = 8 cm，b = 6 cm，c = 4 cm。<b>求 △ABC 的面積（準確至三位有效數字）。</b>',
      qEn: 'In △ABC, a = 8 cm, b = 6 cm and c = 4 cm. <b>Find the area of △ABC (correct to 3 significant figures).</b>',
      hint: '三邊已知而沒有任一角，先用餘弦法求一隻角，再套面積公式 ½ab sin C。',
      hintEn: 'With three sides given and no angle, first use the cosine rule to find an angle, then apply the area formula ½ab sin C.',
      answer: { type: 'num', accept: [11.619, 11.62], display: '面積 ≈ 11.6 cm²', displayEn: 'Area ≈ 11.6 cm²' },
      sol: [
        { mk: 'M1', tx: '先用餘弦法求 C：cos C = (a² + b² − c²) ÷ (2ab) = (64 + 36 − 16) ÷ (2 × 8 × 6)',
          txEn: 'First use the cosine rule to find C: cos C = (a² + b² − c²) ÷ (2ab) = (64 + 36 − 16) ÷ (2 × 8 × 6)' },
        { mk: 'M1', tx: 'cos C = 84 ÷ 96 = 0.875，得 C ≈ 28.955°',
          txEn: 'cos C = 84 ÷ 96 = 0.875, so C ≈ 28.955°' },
        { mk: 'A1', tx: '面積 = ½ × a × b × sin C = 24 × sin 28.955° ≈ 24 × 0.48412 ≈ 11.619',
          txEn: 'Area = ½ × a × b × sin C = 24 × sin 28.955° ≈ 24 × 0.48412 ≈ 11.619' },
        { mk: 'A1', tx: '準確至三位有效數字：面積 ≈ 11.6 cm²',
          txEn: 'Correct to 3 significant figures: area ≈ 11.6 cm²' }
      ],
      note: '「三邊求面積」必須先求出一隻角；用 ½ab sin C 時要確保 a、b 正是該角的夾邊。',
      noteEn: 'For finding an area from three sides, an angle must be found first; when using ½ab sin C, make sure a and b are the sides including that angle.'
    },
    {
      id: 'sc18',
      sub: '3.3 三角形面積公式 ½ab sin C',
      lv: 2,
      q: '在 △ABC 中，AB = 10 cm，BC = 6 cm，∠ABC = 120°。<b>求 △ABC 的面積（以根式表示，或準確至三位有效數字）。</b>',
      qEn: 'In △ABC, AB = 10 cm, BC = 6 cm and ∠ABC = 120°. <b>Find the area of △ABC (in surd form, or correct to 3 significant figures).</b>',
      hint: 'B 是鈍角也可以直接套 ½ × AB × BC × sin B；sin 120° = sin 60°。',
      hintEn: 'The formula ½ × AB × BC × sin B still applies when B is obtuse; sin 120° = sin 60°.',
      answer: { type: 'num', accept: [15 * Math.sqrt(3), 25.9808, 25.98], display: '面積 = 15√3 ≈ 26.0 cm²', displayEn: 'Area = 15√3 ≈ 26.0 cm²' },
      sol: [
        { mk: 'M1', tx: 'B 的兩條夾邊為 AB = 10 與 BC = 6，面積 = ½ × AB × BC × sin B',
          txEn: 'The two sides including B are AB = 10 and BC = 6, so area = ½ × AB × BC × sin B' },
        { mk: 'M1', tx: '面積 = ½ × 10 × 6 × sin 120° = 30 × (√3 ÷ 2)',
          txEn: 'Area = ½ × 10 × 6 × sin 120° = 30 × (√3 ÷ 2)' },
        { mk: 'A1', tx: '面積 = 15√3（因 sin 120° = sin 60° = √3 ÷ 2）',
          txEn: 'Area = 15√3 (since sin 120° = sin 60° = √3 ÷ 2)' },
        { mk: 'A1', tx: '面積 = 15√3 ≈ 26.0 cm²',
          txEn: 'Area = 15√3 ≈ 26.0 cm²' }
      ],
      note: '常見失分：以為鈍角不能套用面積公式。夾角是鈍角時公式仍然成立，直接代入該角的正弦（sin 120° = sin 60°）計算即可，毋須另找補角。',
      noteEn: 'Common loss of marks: assuming that the area formula cannot be used for an obtuse angle. The formula still holds when the included angle is obtuse; just substitute the sine of that angle (sin 120° = sin 60°), with no need to look for a supplementary angle.'
    },

    /* ===== 3.4 解三角形的疑題（SSA 兩解情況）（sc19–sc24） ===== */
    {
      id: 'sc19',
      sub: '3.4 解三角形的疑題（SSA 兩解情況）',
      lv: 3,
      q: '在 △ABC 中，A = 30°，AC = 16 cm，BC = 12 cm。已知此三角形有兩個解。<b>求 B 角的兩個可能值（以遞增次序排列，準確至三位有效數字）。</b>',
      qEn: 'In △ABC, A = 30°, AC = 16 cm and BC = 12 cm. It is given that this triangle has two solutions. <b>Find the two possible values of angle B (in increasing order, correct to 3 significant figures).</b>',
      hint: '正弦法：sin B = AC sin A ÷ BC = 16 × sin 30° ÷ 12。B 的兩個互補角都要檢查能否與 A 構成三角形。',
      hintEn: 'Sine rule: sin B = AC sin A ÷ BC = 16 × sin 30° ÷ 12. Both supplementary values of B must be checked to see whether they can form a triangle with A.',
      answer: { type: 'numbers', accept: [[41.8, 138]], display: 'B ≈ 41.8° 或 B ≈ 138°', displayEn: 'B ≈ 41.8° or B ≈ 138°' },
      sol: [
        { mk: 'M1', tx: 'BC 是 A 的對邊，AC 是 B 的對邊。正弦法：sin B = AC sin A ÷ BC',
          txEn: 'BC is the side opposite A and AC is the side opposite B. Sine rule: sin B = AC sin A ÷ BC' },
        { mk: 'M1', tx: 'sin B = 16 × sin 30° ÷ 12 = 8 ÷ 12 = 2 ÷ 3 ≈ 0.66667',
          txEn: 'sin B = 16 × sin 30° ÷ 12 = 8 ÷ 12 = 2 ÷ 3 ≈ 0.66667' },
        { mk: 'A1', tx: '故 B ≈ 41.810° 或 B ≈ 138.190°',
          txEn: 'Hence B ≈ 41.810° or B ≈ 138.190°' },
        { mk: 'A1', tx: 'B ≈ 138.190° 時 C = 180° − 30° − 138.190° = 11.810° > 0，兩解皆有效；準確至三位有效數字為 B ≈ 41.8° 或 B ≈ 138°',
          txEn: 'When B ≈ 138.190°, C = 180° − 30° − 138.190° = 11.810° > 0, so both solutions are valid; correct to 3 significant figures, B ≈ 41.8° or B ≈ 138°' }
      ],
      note: 'SSA 有兩解的條件是「已知角的對邊短於另一條已知邊，且長於該邊上的高」（此題 12 < 16 且 12 > 8）。',
      noteEn: 'The condition for two solutions in the SSA case is that the side opposite the given angle is shorter than the other given side but longer than the altitude on that side (here 12 < 16 and 12 > 8).'
    },
    {
      id: 'sc20',
      sub: '3.4 解三角形的疑題（SSA 兩解情況）',
      lv: 3,
      q: '在 △ABC 中，A = 45°，AC = 12 cm，BC = 10 cm。已知此三角形有兩個解。<b>求這兩個解中較小的 C 角（準確至三位有效數字）。</b>',
      qEn: 'In △ABC, A = 45°, AC = 12 cm and BC = 10 cm. It is given that this triangle has two solutions. <b>Find the smaller angle C among the two solutions (correct to 3 significant figures).</b>',
      hint: '正弦法：sin B = AC sin A ÷ BC。B 的兩個互補值各對應一個 C，求出全部 C 後取較小者。',
      hintEn: 'Sine rule: sin B = AC sin A ÷ BC. The two supplementary values of B give one C each; find both values of C and take the smaller one.',
      answer: { type: 'num', accept: [13.0519, 13.1], display: '較小的 C ≈ 13.1°', displayEn: 'The smaller C ≈ 13.1°' },
      sol: [
        { mk: 'M1', tx: 'BC 是 A 的對邊，AC 是 B 的對邊。正弦法：sin B = AC sin A ÷ BC',
          txEn: 'BC is the side opposite A and AC is the side opposite B. Sine rule: sin B = AC sin A ÷ BC' },
        { mk: 'M1', tx: 'sin B = 12 × sin 45° ÷ 10 = 12 × 0.70711 ÷ 10 ≈ 0.84853，故 B ≈ 58.052° 或 B ≈ 121.948°',
          txEn: 'sin B = 12 × sin 45° ÷ 10 = 12 × 0.70711 ÷ 10 ≈ 0.84853, so B ≈ 58.052° or B ≈ 121.948°' },
        { mk: 'A1', tx: 'B ≈ 58.052° 時 C = 180° − 45° − 58.052° = 76.948°',
          txEn: 'When B ≈ 58.052°, C = 180° − 45° − 58.052° = 76.948°' },
        { mk: 'A1', tx: 'B ≈ 121.948° 時 C = 180° − 45° − 121.948° = 13.052°，故較小的 C ≈ 13.1°',
          txEn: 'When B ≈ 121.948°, C = 180° − 45° − 121.948° = 13.052°, so the smaller C ≈ 13.1°' }
      ],
      note: '兩個解都必須驗證內角和為 180° 且各內角為正數，才可接納。',
      noteEn: 'Both solutions must be checked to have angle sum 180° with every interior angle positive before they are accepted.'
    },
    {
      id: 'sc21',
      sub: '3.4 解三角形的疑題（SSA 兩解情況）',
      lv: 3,
      q: '在 △ABC 中，A = 30°，BC = 8√3 cm，AC = 16 cm。已知此三角形有兩個解。<b>求這兩個解的 C 角總和（以度數表示）。</b>',
      qEn: 'In △ABC, A = 30°, BC = 8√3 cm and AC = 16 cm. It is given that this triangle has two solutions. <b>Find the sum of the angles C of the two solutions (in degrees).</b>',
      hint: '正弦法：sin B = AC sin A ÷ BC = 1 ÷ √3。B 的兩個互補值各對應一個 C，把兩個 C 相加。',
      hintEn: 'Sine rule: sin B = AC sin A ÷ BC = 1 ÷ √3. The two supplementary values of B give one C each; add the two values of C.',
      answer: { type: 'num', accept: [120, 120.0], display: '兩解 C 之和 = 120°', displayEn: 'Sum of the two values of C = 120°' },
      sol: [
        { mk: 'M1', tx: 'AC 是 B 的對邊，BC 是 A 的對邊。正弦法：sin B = AC sin A ÷ BC',
          txEn: 'AC is the side opposite B and BC is the side opposite A. Sine rule: sin B = AC sin A ÷ BC' },
        { mk: 'M1', tx: 'sin B = 16 × sin 30° ÷ (8√3) = 8 ÷ (8√3) = 1 ÷ √3 ≈ 0.57735',
          txEn: 'sin B = 16 × sin 30° ÷ (8√3) = 8 ÷ (8√3) = 1 ÷ √3 ≈ 0.57735' },
        { mk: 'A1', tx: '故 B ≈ 35.264° 或 B ≈ 144.736°（兩者互補），各對應一個 C',
          txEn: 'Hence B ≈ 35.264° or B ≈ 144.736° (they are supplementary), giving one C each' },
        { mk: 'A1', tx: 'C₁ = 180° − 30° − 35.264° = 114.736°，C₂ = 180° − 30° − 144.736° = 5.264°，總和 = 120°',
          txEn: 'C₁ = 180° − 30° − 35.264° = 114.736° and C₂ = 180° − 30° − 144.736° = 5.264°, so the sum = 120°' }
      ],
      note: 'SSA 兩解中兩個 B 互補；逐個 C 計算可得 C₁ + C₂ = 180° − 2A = 120°，並非直觀的 90°。',
      noteEn: 'In the SSA case with two solutions the two values of B are supplementary; computing each C gives C₁ + C₂ = 180° − 2A = 120°, which is not the intuitive answer 90°.'
    },
    {
      id: 'sc22',
      sub: '3.4 解三角形的疑題（SSA 兩解情況）',
      lv: 3,
      q: '在 △ABC 中，A = 30°，AB = 5 cm，BC = 4 cm。已知此三角形有兩個解。<b>求這兩個解中 B 角的度數差（準確至三位有效數字）。</b>',
      qEn: 'In △ABC, A = 30°, AB = 5 cm and BC = 4 cm. It is given that this triangle has two solutions. <b>Find the difference between the angles B of the two solutions (correct to 3 significant figures).</b>',
      hint: '正弦法：sin C = AB sin A ÷ BC = 0.625。C 的兩個互補值各對應一個 B，再求兩者之差。',
      hintEn: 'Sine rule: sin C = AB sin A ÷ BC = 0.625. The two supplementary values of C give one B each; then find their difference.',
      answer: { type: 'num', accept: [102.6356, 103], display: '兩解 B 之差 ≈ 103°', displayEn: 'Difference between the two values of B ≈ 103°' },
      sol: [
        { mk: 'M1', tx: 'BC 是 A 的對邊，AB 是 C 的對邊。正弦法：sin C = AB sin A ÷ BC',
          txEn: 'BC is the side opposite A and AB is the side opposite C. Sine rule: sin C = AB sin A ÷ BC' },
        { mk: 'M1', tx: 'sin C = 5 × sin 30° ÷ 4 = 2.5 ÷ 4 = 0.625，故 C ≈ 38.682° 或 C ≈ 141.318°',
          txEn: 'sin C = 5 × sin 30° ÷ 4 = 2.5 ÷ 4 = 0.625, so C ≈ 38.682° or C ≈ 141.318°' },
        { mk: 'A1', tx: 'C ≈ 38.682° 時 B = 180° − 30° − 38.682° = 111.318°',
          txEn: 'When C ≈ 38.682°, B = 180° − 30° − 38.682° = 111.318°' },
        { mk: 'A1', tx: 'C ≈ 141.318° 時 B = 180° − 30° − 141.318° = 8.682°，兩者之差 ≈ 103°（準確至三位有效數字）',
          txEn: 'When C ≈ 141.318°, B = 180° − 30° − 141.318° = 8.682°, so the difference ≈ 103° (correct to 3 significant figures)' }
      ],
      note: '求兩解的差時，必須先把兩個 B 都算出來，不可假設兩者互補。',
      noteEn: 'To find the difference between the two solutions, both values of B must be computed first; the two values cannot be assumed to be supplementary.'
    },
    {
      id: 'sc23',
      sub: '3.4 解三角形的疑題（SSA 兩解情況）',
      lv: 3,
      q: '在 △ABC 中，A = 30°，AC = 10 cm，BC = 16 cm。<b>求 B 角（準確至三位有效數字），並說明此題為何只有一個解。</b>',
      qEn: 'In △ABC, A = 30°, AC = 10 cm and BC = 16 cm. <b>Find angle B (correct to 3 significant figures) and explain why this triangle has only one solution.</b>',
      hint: '正弦法：sin B = AC sin A ÷ BC = 0.3125。求出 B 的兩個可能值後，檢查另一個是否令內角和超過 180°。',
      hintEn: 'Sine rule: sin B = AC sin A ÷ BC = 0.3125. After finding the two possible values of B, check whether the other one makes the angle sum exceed 180°.',
      answer: { type: 'num', accept: [18.21, 18.2], display: 'B ≈ 18.2°（另一解使內角和超過 180°，捨去）', displayEn: 'B ≈ 18.2° (the other solution makes the angle sum exceed 180°, so it is rejected)' },
      sol: [
        { mk: 'M1', tx: 'BC 是 A 的對邊，AC 是 B 的對邊。正弦法：sin B = AC sin A ÷ BC',
          txEn: 'BC is the side opposite A and AC is the side opposite B. Sine rule: sin B = AC sin A ÷ BC' },
        { mk: 'M1', tx: 'sin B = 10 × sin 30° ÷ 16 = 5 ÷ 16 = 0.3125，故 B ≈ 18.210° 或 B ≈ 161.790°',
          txEn: 'sin B = 10 × sin 30° ÷ 16 = 5 ÷ 16 = 0.3125, so B ≈ 18.210° or B ≈ 161.790°' },
        { mk: 'A1', tx: '若 B ≈ 161.790°，則 A + B = 30° + 161.790° = 191.790° > 180°，內角和不可能成立',
          txEn: 'If B ≈ 161.790°, then A + B = 30° + 161.790° = 191.790° > 180°, so the angle sum is impossible' },
        { mk: 'A1', tx: '故只有一個解：B ≈ 18.210°，即 B ≈ 18.2°',
          txEn: 'Hence there is only one solution: B ≈ 18.210°, that is B ≈ 18.2°' }
      ],
      note: 'SSA 兩解中，必須每個候選角都通過「其餘內角為正」的檢驗，否則只有一解或無解。',
      noteEn: 'In the SSA case, every candidate angle must pass the test that the remaining interior angles are positive; otherwise there is only one solution or no solution.'
    },
    {
      id: 'sc24',
      sub: '3.4 解三角形的疑題（SSA 兩解情況）',
      lv: 3,
      q: '在 △PQR 中，P = 30°，PQ = 6 cm，QR = 10 cm。<b>求 R 角（準確至三位有效數字），並說明此題為何只有一個解。</b>',
      qEn: 'In △PQR, P = 30°, PQ = 6 cm and QR = 10 cm. <b>Find angle R (correct to 3 significant figures) and explain why this triangle has only one solution.</b>',
      hint: '正弦法：sin R = PQ sin P ÷ QR = 0.3。R 的兩個候選值中，只有一個能令 P + R < 180°。',
      hintEn: 'Sine rule: sin R = PQ sin P ÷ QR = 0.3. Of the two candidate values of R, only one satisfies P + R < 180°.',
      answer: { type: 'num', accept: [17.4576, 17.5], display: 'R ≈ 17.5°（另一解使內角和超過 180°，捨去）', displayEn: 'R ≈ 17.5° (the other solution makes the angle sum exceed 180°, so it is rejected)' },
      sol: [
        { mk: 'M1', tx: 'PQ 是 R 的對邊，QR 是 P 的對邊。正弦法：sin R = PQ sin P ÷ QR',
          txEn: 'PQ is the side opposite R and QR is the side opposite P. Sine rule: sin R = PQ sin P ÷ QR' },
        { mk: 'M1', tx: 'sin R = 6 × sin 30° ÷ 10 = 3 ÷ 10 = 0.3，故 R ≈ 17.458° 或 R ≈ 162.542°',
          txEn: 'sin R = 6 × sin 30° ÷ 10 = 3 ÷ 10 = 0.3, so R ≈ 17.458° or R ≈ 162.542°' },
        { mk: 'A1', tx: '若 R ≈ 162.542°，則 P + R = 30° + 162.542° = 192.542° > 180°，內角和不可能成立',
          txEn: 'If R ≈ 162.542°, then P + R = 30° + 162.542° = 192.542° > 180°, so the angle sum is impossible' },
        { mk: 'A1', tx: '故只有一個解：R ≈ 17.458°，即 R ≈ 17.5°',
          txEn: 'Hence there is only one solution: R ≈ 17.458°, that is R ≈ 17.5°' }
      ],
      note: '已知角的對邊較另一已知邊長（10 > 6）時，SSA 通常只有一解，但仍須逐一驗證。',
      noteEn: 'When the side opposite the given angle is longer than the other given side (10 > 6), the SSA case usually has only one solution, but each candidate must still be checked.'
    },

    /* ===== 3.5 立體與日常應用題（方位角、仰角、斜角）（sc25–sc30） ===== */
    {
      id: 'sc25',
      sub: '3.5 立體與日常應用題（方位角、仰角、斜角）',
      lv: 1,
      q: '一名學生由原點 O 出發向北走 6√2 km 到達 A，再向東走 2 km 到達 B。<b>求 OB 的距離（以根式表示，或準確至三位有效數字）。</b>',
      qEn: 'A student starts from the origin O, walks 6√2 km due north to A, then walks 2 km due east to B. <b>Find the distance OB (in surd form, or correct to 3 significant figures).</b>',
      hint: '「向北」再「向東」是互相垂直的兩段路，可直接用畢氏定理。',
      hintEn: 'Walking due north and then due east gives two perpendicular stages, so the theorem of Pythagoras can be applied directly.',
      answer: { type: 'num', accept: [Math.sqrt(76), 8.7178, 8.72], display: 'OB = √76 ≈ 8.72 km', displayEn: 'OB = √76 ≈ 8.72 km' },
      sol: [
        { mk: 'M1', tx: 'OA 指向北方，AB 指向東方，故 OA ⊥ AB，∠OAB = 90°',
          txEn: 'OA points north and AB points east, so OA ⊥ AB and ∠OAB = 90°' },
        { mk: 'M1', tx: '畢氏定理：OB² = OA² + AB² = (6√2)² + 2²',
          txEn: 'Theorem of Pythagoras: OB² = OA² + AB² = (6√2)² + 2²' },
        { mk: 'A1', tx: 'OB² = 72 + 4 = 76',
          txEn: 'OB² = 72 + 4 = 76' },
        { mk: 'A1', tx: 'OB = √76 ≈ 8.72 km',
          txEn: 'OB = √76 ≈ 8.72 km' }
      ],
      note: '方位角問題要先畫圖標明北方向，才能認出直角、內錯角等關係。',
      noteEn: 'In bearing problems, draw a diagram showing the north direction first so that right angles, alternate angles and other relations can be recognised.'
    },
    {
      id: 'sc26',
      sub: '3.5 立體與日常應用題（方位角、仰角、斜角）',
      lv: 2,
      q: '某船由 O 向北航行 3 km 到 A，然後轉向方位角 120° 航行 8 km 到 B。<b>求 B 與 O 之間的距離（準確至三位有效數字）。</b>',
      qEn: 'A ship sails 3 km due north from O to A, then changes course and sails 8 km on a bearing of 120° to B. <b>Find the distance between B and O (correct to 3 significant figures).</b>',
      hint: '方位角 120° 與北方向的夾角是 120°，故 ∠OAB = 180° − 120° = 60°。用餘弦法求 OB。',
      hintEn: 'A bearing of 120° makes an angle of 120° with the north direction, so ∠OAB = 180° − 120° = 60°. Use the cosine rule to find OB.',
      answer: { type: 'num', accept: [7, 7.00], display: 'OB = 7 km', displayEn: 'OB = 7 km' },
      sol: [
        { mk: 'M1', tx: 'OA 指向北，AB 的方位角為 120°，故 AB 與北方向成 120°，即 ∠OAB = 180° − 120° = 60°',
          txEn: 'OA points north and the bearing of AB is 120°, so AB makes 120° with the north direction, that is ∠OAB = 180° − 120° = 60°' },
        { mk: 'M1', tx: '餘弦法：OB² = OA² + AB² − 2 × OA × AB × cos ∠OAB',
          txEn: 'Cosine rule: OB² = OA² + AB² − 2 × OA × AB × cos ∠OAB' },
        { mk: 'A1', tx: 'OB² = 9 + 64 − 2 × 3 × 8 × cos 60° = 73 − 48 × 0.5 = 49',
          txEn: 'OB² = 9 + 64 − 2 × 3 × 8 × cos 60° = 73 − 48 × 0.5 = 49' },
        { mk: 'A1', tx: 'OB = 7 km',
          txEn: 'OB = 7 km' }
      ],
      note: '方位角是「由北順時針量度」的角度；把它轉成三角形的內角時要取補角。',
      noteEn: 'A bearing is measured clockwise from north; when it is converted into an interior angle of a triangle, the supplementary angle must be taken.'
    },
    {
      id: 'sc27',
      sub: '3.5 立體與日常應用題（方位角、仰角、斜角）',
      lv: 3,
      q: '在正四稜錐 V-ABCD 中，底面 ABCD 是邊長 6√2 cm 的正方形，頂點 V 在底面中心 O 的正上方，VO = 6 cm。<b>求 VA 與底面 ABCD 所成的角（準確至三位有效數字）。</b>',
      qEn: 'In the right pyramid V-ABCD, the base ABCD is a square of side 6√2 cm, the vertex V is vertically above the centre O of the base and VO = 6 cm. <b>Find the angle between VA and the base ABCD (correct to 3 significant figures).</b>',
      hint: 'AO 是正方形外接圓半徑（即對角線的一半），而 VO ⊥ 底面，故所求角就是 ∠VAO。',
      hintEn: 'AO is the circumradius of the square (half of its diagonal) and VO ⊥ the base, so the required angle is ∠VAO.',
      answer: { type: 'num', accept: [45, 45.0], display: 'VA 與底面 ABCD 所成的角 = 45.0°', displayEn: 'Angle between VA and the base ABCD = 45.0°' },
      sol: [
        { mk: 'M1', tx: '設 O 為底面中心，則 VO ⊥ 底面，所求角為 VA 與其投影 AO 所成的 ∠VAO',
          txEn: 'Let O be the centre of the base; then VO ⊥ the base, so the required angle is ∠VAO between VA and its projection AO' },
        { mk: 'M1', tx: '正方形對角線 = 6√2 × √2 = 12，故 AO = 12 ÷ 2 = 6 cm',
          txEn: 'The diagonal of the square = 6√2 × √2 = 12, so AO = 12 ÷ 2 = 6 cm' },
        { mk: 'A1', tx: '在直角三角形 VOA 中，tan ∠VAO = VO ÷ AO = 6 ÷ 6 = 1',
          txEn: 'In the right-angled triangle VOA, tan ∠VAO = VO ÷ AO = 6 ÷ 6 = 1' },
        { mk: 'A1', tx: '∠VAO = 45°，即所求角為 45.0°',
          txEn: '∠VAO = 45°, so the required angle is 45.0°' }
      ],
      note: '正稜錐的高落在底面中心，這是把立體問題化成平面直角三角形的關鍵。',
      noteEn: 'The height of a regular pyramid meets the base at its centre; this is the key to turning a three-dimensional problem into a plane right-angled triangle.'
    },
    {
      id: 'sc28',
      sub: '3.5 立體與日常應用題（方位角、仰角、斜角）',
      lv: 2,
      q: '一個長方體 ABCD-EFGH 中，AB = 4 cm，BC = 6 cm，AE = 8 cm，而 A、B、C、D 為底面的四個頂點，AE 為側稜。<b>求對角線 AG 與底面 ABCD 所成的角（準確至三位有效數字）。</b>',
      qEn: 'In a cuboid ABCD-EFGH, AB = 4 cm, BC = 6 cm and AE = 8 cm, where A, B, C, D are the vertices of the base and AE is a lateral edge. <b>Find the angle between the diagonal AG and the base ABCD (correct to 3 significant figures).</b>',
      hint: 'AG 在底面的投影是對角線 AC；先求 AC，再用 tan θ = AE ÷ AC。',
      hintEn: 'The projection of AG on the base is the diagonal AC; find AC first, then use tan θ = AE ÷ AC.',
      answer: { type: 'num', accept: [47.9689, 48.0], display: 'AG 與底面所成的角 ≈ 48.0°', displayEn: 'Angle between AG and the base ≈ 48.0°' },
      sol: [
        { mk: 'M1', tx: 'AG 在底面 ABCD 的投影是對角線 AC，故所求角 θ = ∠GAC，且 tan θ = GC ÷ AC',
          txEn: 'The projection of AG on the base ABCD is the diagonal AC, so the required angle is θ = ∠GAC and tan θ = GC ÷ AC' },
        { mk: 'M1', tx: 'AC² = AB² + BC² = 16 + 36 = 52，得 AC = 2√13 ≈ 7.2111 cm',
          txEn: 'AC² = AB² + BC² = 16 + 36 = 52, giving AC = 2√13 ≈ 7.2111 cm' },
        { mk: 'A1', tx: 'GC = AE = 8 cm（側稜垂直於底面），故 tan θ = 8 ÷ 7.2111 ≈ 1.10940',
          txEn: 'GC = AE = 8 cm (a lateral edge is perpendicular to the base), so tan θ = 8 ÷ 7.2111 ≈ 1.10940' },
        { mk: 'A1', tx: 'θ ≈ 47.97°，即所求角約為 48.0°',
          txEn: 'θ ≈ 47.97°, so the required angle is about 48.0°' }
      ],
      note: '長方體中每條側稜都垂直於底面，故可在直角三角形 ACG 中解題。',
      noteEn: 'In a cuboid every lateral edge is perpendicular to the base, so the problem can be solved in the right-angled triangle ACG.'
    },
    {
      id: 'sc29',
      sub: '3.5 立體與日常應用題（方位角、仰角、斜角）',
      lv: 1,
      q: '一支 4 m 高的垂直旗桿 AP 豎立於水平地面上，A 為桿腳。地面上一點 C 滿足 AC = 3 m。<b>求 PC 與地面所成的角（準確至三位有效數字）。</b>',
      qEn: 'A vertical flagpole AP of height 4 m stands on horizontal ground, where A is the foot of the pole. A point C on the ground satisfies AC = 3 m. <b>Find the angle between PC and the ground (correct to 3 significant figures).</b>',
      hint: 'AP ⊥ 地面，故 △APC 為直角三角形；所求角是 PC 與其在地面上的投影 AC 所成的 ∠PCA。',
      hintEn: 'AP ⊥ the ground, so △APC is right-angled; the required angle is ∠PCA between PC and its projection AC on the ground.',
      answer: { type: 'num', accept: [53.1301, 53.1], display: 'PC 與地面所成的角 ≈ 53.1°', displayEn: 'Angle between PC and the ground ≈ 53.1°' },
      sol: [
        { mk: 'M1', tx: 'AP ⊥ 地面，故 AP ⊥ AC，△APC 為直角三角形，∠PAC = 90°',
          txEn: 'AP ⊥ the ground, so AP ⊥ AC and △APC is right-angled with ∠PAC = 90°' },
        { mk: 'M1', tx: 'PC 與地面所成的角是 PC 與其投影 AC 所成的 ∠PCA',
          txEn: 'The angle between PC and the ground is ∠PCA between PC and its projection AC' },
        { mk: 'A1', tx: '在 △APC 中，tan ∠PCA = AP ÷ AC = 4 ÷ 3 ≈ 1.33333',
          txEn: 'In △APC, tan ∠PCA = AP ÷ AC = 4 ÷ 3 ≈ 1.33333' },
        { mk: 'A1', tx: '∠PCA ≈ 53.13°，即所求角約為 53.1°',
          txEn: '∠PCA ≈ 53.13°, so the required angle is about 53.1°' }
      ],
      note: '「直線與平面所成的角」定義為斜線與它在該平面上的投影所成的角。',
      noteEn: 'The angle between a line and a plane is defined as the angle between the oblique line and its projection on that plane.'
    },
    {
      id: 'sc30',
      sub: '3.5 立體與日常應用題（方位角、仰角、斜角）',
      lv: 3,
      q: '在水平地面上，一座建築物的底部為 B。A 與 C 在同一條直線上，B 位於 A 與 C 之間，AC = 85 m。由 A 測得建築物頂的仰角為 25°，由 C 測得仰角為 60°。<b>求建築物的高度（準確至三位有效數字）。</b>',
      qEn: 'On horizontal ground, the foot of a building is B. A and C lie on the same straight line with B between A and C, and AC = 85 m. From A the angle of elevation of the top of the building is 25°, and from C it is 60°. <b>Find the height of the building (correct to 3 significant figures).</b>',
      hint: '設高為 h。由 tan 25° 得 AB = h ÷ tan 25°，由 tan 60° 得 BC = h ÷ tan 60°，兩者相加等於 85。',
      hintEn: 'Let the height be h. From tan 25°, AB = h ÷ tan 25°; from tan 60°, BC = h ÷ tan 60°; their sum is 85.',
      answer: { type: 'num', accept: [31.2287, 31.2], display: '建築物高度 ≈ 31.2 m', displayEn: 'Height of the building ≈ 31.2 m' },
      sol: [
        { mk: 'M1', tx: '設建築物高 h m。由 A 點：tan 25° = h ÷ AB，故 AB = h ÷ tan 25°',
          txEn: 'Let the height of the building be h m. From A: tan 25° = h ÷ AB, so AB = h ÷ tan 25°' },
        { mk: 'M1', tx: '由 C 點：tan 60° = h ÷ BC，故 BC = h ÷ tan 60°',
          txEn: 'From C: tan 60° = h ÷ BC, so BC = h ÷ tan 60°' },
        { mk: 'A1', tx: '因 B 在 A 與 C 之間，AB + BC = 85，即 h ÷ tan 25° + h ÷ tan 60° = 85',
          txEn: 'Since B lies between A and C, AB + BC = 85, that is h ÷ tan 25° + h ÷ tan 60° = 85' },
        { mk: 'A1', tx: '解得 h = 85 ÷ (1 ÷ tan 25° + 1 ÷ tan 60°) ≈ 31.2 m',
          txEn: 'Solving gives h = 85 ÷ (1 ÷ tan 25° + 1 ÷ tan 60°) ≈ 31.2 m' }
      ],
      note: '兩個仰角分別對應兩個直角三角形；「B 在 A 與 C 之間」是列出 AB + BC = AC 的依據。',
      noteEn: 'The two angles of elevation correspond to two right-angled triangles; the fact that B lies between A and C is the basis for writing AB + BC = AC.'
    }
  ];
})(typeof window !== 'undefined' ? window : globalThis);
