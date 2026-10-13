/* bank/appdiff.js — 微分法的應用（30 題）*/
(function (root) {
  root.M2Bank = root.M2Bank || {};
  root.M2Bank['appdiff'] = [

    /* ═══════ 7.1 切線與法線（ap01–ap05）═══════ */
    {
      id: 'ap01',
      sub: '7.1 切線與法線',
      lv: 1,
      q: '已知曲線 y = x² − 4x + 5。<br><b>求曲線在 x = 3 處切線的斜率。</b>',
      qEn: 'The curve y = x² − 4x + 5 is given.<br><b>Find the slope of the tangent to the curve at x = 3.</b>',
      hint: '切線斜率等於該點的導數值；先把 y = x² − 4x + 5 求導，再把 x = 3 代入。',
      hintEn: 'The slope of the tangent is the value of the derivative at that point; differentiate y = x² − 4x + 5 first, then substitute x = 3.',
      answer: { type: 'num', accept: [2, 2.0], display: '2', displayEn: '2' },
      sol: [
        { mk: 'M1', tx: 'dy ÷ dx = 2x − 4', txEn: 'dy ÷ dx = 2x − 4' },
        { mk: 'M1', tx: '在 x = 3 處：dy ÷ dx = 2 × 3 − 4 = 6 − 4', txEn: 'At x = 3: dy ÷ dx = 2 × 3 − 4 = 6 − 4' },
        { mk: 'A1', tx: '= 2', txEn: '= 2' },
        { mk: 'A1', tx: '故曲線在 x = 3 處切線的斜率為 2（切點為 (3, 2)）', txEn: 'So the slope of the tangent to the curve at x = 3 is 2 (the point of contact is (3, 2))' }
      ],
      note: '常見失分：把切點的 y 坐標當成斜率。切線斜率是 dy ÷ dx 在該 x 的值，不是函數值 f(3)。',
      noteEn: 'Common loss of marks: taking the y-coordinate of the point of contact as the slope. The slope of the tangent is the value of dy ÷ dx at that x, not the function value f(3).'
    },
    {
      id: 'ap02',
      sub: '7.1 切線與法線',
      lv: 2,
      q: '已知曲線 y = x³ − 2x。<br><b>求曲線在 x = 1 處切線的 y 軸截距。</b>',
      qEn: 'The curve y = x³ − 2x is given.<br><b>Find the y-intercept of the tangent to the curve at x = 1.</b>',
      hint: '先由 dy ÷ dx = 3x² − 2 求切線斜率，再用點斜式寫出切線方程，最後令 x = 0。',
      hintEn: 'First find the slope of the tangent from dy ÷ dx = 3x² − 2, then write the equation of the tangent in point-slope form, and finally put x = 0.',
      answer: { type: 'num', accept: [-2, -2.0], display: '− 2', displayEn: '− 2' },
      sol: [
        { mk: 'M1', tx: 'dy ÷ dx = 3x² − 2，在 x = 1 處斜率 = 3 × 1 − 2 = 1', txEn: 'dy ÷ dx = 3x² − 2; at x = 1 the slope = 3 × 1 − 2 = 1' },
        { mk: 'M1', tx: '求切點：x = 1 時 y = 1³ − 2 × 1 = − 1，即切點為 (1, − 1)', txEn: 'Find the point of contact: when x = 1, y = 1³ − 2 × 1 = − 1, so the point of contact is (1, − 1)' },
        { mk: 'M1', tx: '切線方程：y − (− 1) = 1 × (x − 1)，即 y = x − 2', txEn: 'Equation of the tangent: y − (− 1) = 1 × (x − 1), i.e. y = x − 2' },
        { mk: 'A1', tx: '令 x = 0，得 y = − 2', txEn: 'Put x = 0, giving y = − 2' },
        { mk: 'A1', tx: '故切線的 y 軸截距為 − 2', txEn: 'So the y-intercept of the tangent is − 2' }
      ],
      note: '必須同時用切點的 y 坐標；只憑斜率無法決定切線。點斜式 y − y₁ = m(x − x₁) 是最穩妥的寫法。',
      noteEn: 'You must also use the y-coordinate of the point of contact; the slope alone does not determine the tangent. The point-slope form y − y₁ = m(x − x₁) is the safest way to write it.'
    },
    {
      id: 'ap03',
      sub: '7.1 切線與法線',
      lv: 2,
      q: '已知 P 為曲線 y = x² + 3x 上一點，過 P 的切線平行於直線 y = 5x − 1。<br><b>求 P 的坐標。</b>',
      qEn: 'P is a point on the curve y = x² + 3x such that the tangent at P is parallel to the straight line y = 5x − 1.<br><b>Find the coordinates of P.</b>',
      hint: '平行直線的斜率相同，先令 dy ÷ dx = 2x + 3 = 5 求出 x，再代回曲線方程求 y。',
      hintEn: 'Parallel straight lines have the same slope; put dy ÷ dx = 2x + 3 = 5 to find x, then substitute back into the equation of the curve to find y.',
      answer: { type: 'numbers', accept: [[1, 4], [1.0, 4.0]], display: 'P(1, 4)', displayEn: 'P(1, 4)' },
      sol: [
        { mk: 'M1', tx: 'dy ÷ dx = 2x + 3', txEn: 'dy ÷ dx = 2x + 3' },
        { mk: 'M1', tx: '切線平行於 y = 5x − 1，故斜率等於 5：2x + 3 = 5', txEn: 'The tangent is parallel to y = 5x − 1, so the slope equals 5: 2x + 3 = 5' },
        { mk: 'M1', tx: '解得 x = 1', txEn: 'Solving gives x = 1' },
        { mk: 'A1', tx: '代回曲線：y = 1² + 3 × 1 = 4', txEn: 'Substitute back into the curve: y = 1² + 3 × 1 = 4' },
        { mk: 'A1', tx: '故 P 的坐標為 (1, 4)', txEn: 'So the coordinates of P are (1, 4)' }
      ],
      note: '平行 ⇔ 斜率相等；若寫成「斜率互為負倒數」則是垂直的條件，屬嚴重概念錯誤。',
      noteEn: 'Parallel ⇔ equal slopes; writing that the slopes are negative reciprocals is the condition for perpendicular lines and is a serious conceptual error.'
    },
    {
      id: 'ap04',
      sub: '7.1 切線與法線',
      lv: 2,
      q: '已知點 P(1, 1) 在曲線 y = x³ 上。<br><b>求曲線在 P 點的法線與 x 軸交點的 x 坐標。</b>',
      qEn: 'The point P(1, 1) lies on the curve y = x³.<br><b>Find the x-coordinate of the point where the normal to the curve at P meets the x-axis.</b>',
      hint: '先求切線斜率 dy ÷ dx = 3x² 在 x = 1 的值，法線斜率取其負倒數，寫出法線方程後令 y = 0。',
      hintEn: 'First find the slope of the tangent dy ÷ dx = 3x² at x = 1; the slope of the normal is its negative reciprocal. Write the equation of the normal, then put y = 0.',
      answer: { type: 'num', accept: [4, 4.0], display: '4', displayEn: '4' },
      sol: [
        { mk: 'M1', tx: 'dy ÷ dx = 3x²，在 x = 1 處切線斜率 = 3', txEn: 'dy ÷ dx = 3x²; at x = 1 the slope of the tangent = 3' },
        { mk: 'M1', tx: '法線斜率 = − 1 ÷ 3', txEn: 'Slope of the normal = − 1 ÷ 3' },
        { mk: 'M1', tx: '法線方程：y − 1 = (− 1 ÷ 3)(x − 1)', txEn: 'Equation of the normal: y − 1 = (− 1 ÷ 3)(x − 1)' },
        { mk: 'A1', tx: '令 y = 0：− 1 = (− 1 ÷ 3)(x − 1)，得 x − 1 = 3', txEn: 'Put y = 0: − 1 = (− 1 ÷ 3)(x − 1), giving x − 1 = 3' },
        { mk: 'A1', tx: '故交點的 x 坐標為 4', txEn: 'So the x-coordinate of the point of intersection is 4' }
      ],
      note: '法線斜率是切線斜率的負倒數；若切線斜率為 0（水平切線），法線是鉛直線，須特別處理。',
      noteEn: 'The slope of the normal is the negative reciprocal of the slope of the tangent; if the tangent is horizontal (slope 0), the normal is vertical and needs special treatment.'
    },
    {
      id: 'ap05',
      sub: '7.1 切線與法線',
      lv: 3,
      q: '已知曲線 y = x² + 1。過原點 O(0, 0) 的直線與曲線相切於點 P(a, a² + 1)，其中 a &gt; 0。<br><b>求 a 的值。</b>',
      qEn: 'The curve y = x² + 1 is given. A straight line through the origin O(0, 0) is tangent to the curve at the point P(a, a² + 1), where a &gt; 0.<br><b>Find the value of a.</b>',
      hint: '設切點橫坐標為 a，切線方程為 y = 2a x − a² + 1；因切線經過原點，把 (0, 0) 代入即可求 a。',
      hintEn: 'Let the x-coordinate of the point of contact be a; the equation of the tangent is y = 2a x − a² + 1. Since the tangent passes through the origin, substitute (0, 0) to find a.',
      answer: { type: 'num', accept: [1, 1.0], display: 'a = 1', displayEn: 'a = 1' },
      sol: [
        { mk: 'M1', tx: 'dy ÷ dx = 2x，在 x = a 處切線斜率為 2a', txEn: 'dy ÷ dx = 2x; at x = a the slope of the tangent is 2a' },
        { mk: 'M1', tx: '切點為 (a, a² + 1)，切線方程：y − (a² + 1) = 2a(x − a)', txEn: 'The point of contact is (a, a² + 1); the equation of the tangent is y − (a² + 1) = 2a(x − a)' },
        { mk: 'M1', tx: '化簡得 y = 2a x − a² + 1', txEn: 'Simplifying gives y = 2a x − a² + 1' },
        { mk: 'M1', tx: '切線經過原點，代入 (0, 0)：0 = − a² + 1，即 a² = 1', txEn: 'The tangent passes through the origin; substituting (0, 0): 0 = − a² + 1, i.e. a² = 1' },
        { mk: 'A1', tx: '因 a &gt; 0，故 a = 1（此時切點為 (1, 2)）', txEn: 'Since a &gt; 0, a = 1 (the point of contact is then (1, 2))' }
      ],
      note: '「切線經過某點」不等於「該點在曲線上」；必須以切點 (a, a² + 1) 設方程，不可把原點當作切點。',
      noteEn: 'A tangent passing through a point does not mean that the point lies on the curve; you must set up the equation using the point of contact (a, a² + 1) and must not treat the origin as the point of contact.'
    },

    /* ═══════ 7.2 相關變率（ap06–ap10）═══════ */
    {
      id: 'ap06',
      sub: '7.2 相關變率',
      lv: 1,
      q: '一個正方形的邊長以 0.5 cm/s 的速率增加。<br><b>求當邊長為 10 cm 時，正方形面積的增加率。</b>',
      qEn: 'The side of a square is increasing at a rate of 0.5 cm/s.<br><b>Find the rate of increase of the area of the square when the side is 10 cm.</b>',
      hint: '面積 A = s²，對時間求導得 dA ÷ dt = 2s × (ds ÷ dt)，再把 s 與 ds ÷ dt 的值代入。',
      hintEn: 'The area is A = s²; differentiating with respect to time gives dA ÷ dt = 2s × (ds ÷ dt). Then substitute the values of s and ds ÷ dt.',
      answer: { type: 'num', accept: [10, 10.0], display: '10 cm²/s', displayEn: '10 cm²/s' },
      sol: [
        { mk: 'M1', tx: '設邊長為 s cm，面積 A = s²', txEn: 'Let the side be s cm; the area is A = s²' },
        { mk: 'M1', tx: '對時間 t 求導（連鎖法則）：dA ÷ dt = 2s × (ds ÷ dt)', txEn: 'Differentiate with respect to time t (chain rule): dA ÷ dt = 2s × (ds ÷ dt)' },
        { mk: 'M1', tx: '已知 ds ÷ dt = 0.5，當 s = 10 時：dA ÷ dt = 2 × 10 × 0.5', txEn: 'Given ds ÷ dt = 0.5; when s = 10: dA ÷ dt = 2 × 10 × 0.5' },
        { mk: 'A1', tx: '= 10', txEn: '= 10' },
        { mk: 'A1', tx: '故面積以 10 cm²/s 的速率增加', txEn: 'So the area is increasing at a rate of 10 cm²/s' }
      ],
      note: '相關變率的標準步驟是：寫出關係式 → 對 t 求導 → 最後才代入數值；先代入 s = 10 再求導會得 0。',
      noteEn: 'The standard procedure for related rates is: write down the relation, differentiate with respect to t, and substitute numbers only at the end; substituting s = 10 before differentiating would give 0.'
    },
    {
      id: 'ap07',
      sub: '7.2 相關變率',
      lv: 1,
      q: '一個球體的半徑以 2 cm/s 的速率增加。<br><b>求當半徑為 3 cm 時，球體體積的增加率。</b>',
      qEn: 'The radius of a sphere is increasing at a rate of 2 cm/s.<br><b>Find the rate of increase of the volume of the sphere when the radius is 3 cm.</b>',
      hint: '球體體積 V = (4 ÷ 3)πr³，對 t 求導得 dV ÷ dt = 4πr² × (dr ÷ dt)。',
      hintEn: 'The volume of a sphere is V = (4 ÷ 3)πr³; differentiating with respect to t gives dV ÷ dt = 4πr² × (dr ÷ dt).',
      answer: { type: 'num', accept: [72 * Math.PI, 226.1946711], display: '72π cm³/s （≈ 226.19）', displayEn: '72π cm³/s (≈ 226.19)' },
      sol: [
        { mk: 'M1', tx: 'V = (4 ÷ 3)πr³，對 t 求導：dV ÷ dt = 4πr² × (dr ÷ dt)', txEn: 'V = (4 ÷ 3)πr³; differentiating with respect to t: dV ÷ dt = 4πr² × (dr ÷ dt)' },
        { mk: 'M1', tx: '已知 dr ÷ dt = 2，當 r = 3 時：dV ÷ dt = 4π × 3² × 2', txEn: 'Given dr ÷ dt = 2; when r = 3: dV ÷ dt = 4π × 3² × 2' },
        { mk: 'M1', tx: '= 4π × 9 × 2 = 72π', txEn: '= 4π × 9 × 2 = 72π' },
        { mk: 'A1', tx: '故體積的增加率為 72π cm³/s', txEn: 'So the rate of increase of the volume is 72π cm³/s' },
        { mk: 'A1', tx: '即約 226.19 cm³/s', txEn: 'i.e. about 226.19 cm³/s' }
      ],
      note: 'π 要保留到最後才取近似值；求導後 (4 ÷ 3) 的係數會變成 4，而 r³ 的導數 3r² 與它約去。',
      noteEn: 'Keep π exact until the final step; after differentiating, the coefficient (4 ÷ 3) becomes 4 and cancels with the derivative 3r² of r³.'
    },
    {
      id: 'ap08',
      sub: '7.2 相關變率',
      lv: 2,
      q: '一把長 5 m 的梯子斜靠在鉛直牆上。當梯腳距離牆 3 m 時，梯腳正以 1 m/s 的速率向外滑離牆壁。<br><b>求此刻梯頂沿牆下滑的速率。</b>',
      qEn: 'A ladder of length 5 m leans against a vertical wall. When the foot of the ladder is 3 m from the wall, the foot is sliding away from the wall at 1 m/s.<br><b>Find the rate at which the top of the ladder is sliding down the wall at this instant.</b>',
      hint: '設梯腳離牆 x m、梯頂高 y m，由 x² + y² = 25 對 t 求導；先求 x = 3 時的 y，再代入 dx ÷ dt = 1。',
      hintEn: 'Let the foot of the ladder be x m from the wall and the top be y m above the ground; differentiate x² + y² = 25 with respect to t. First find y when x = 3, then substitute dx ÷ dt = 1.',
      answer: { type: 'num', accept: [0.75, 3 / 4], display: '0.75 m/s （即 3 ÷ 4 m/s）', displayEn: '0.75 m/s (i.e. 3 ÷ 4 m/s)' },
      sol: [
        { mk: 'M1', tx: '設梯腳離牆 x m、梯頂離地 y m，則 x² + y² = 5² = 25', txEn: 'Let the foot of the ladder be x m from the wall and the top be y m above the ground; then x² + y² = 5² = 25' },
        { mk: 'M1', tx: '對 t 求導：2x × (dx ÷ dt) + 2y × (dy ÷ dt) = 0，即 dy ÷ dt = − (x ÷ y) × (dx ÷ dt)', txEn: 'Differentiate with respect to t: 2x × (dx ÷ dt) + 2y × (dy ÷ dt) = 0, i.e. dy ÷ dt = − (x ÷ y) × (dx ÷ dt)' },
        { mk: 'M1', tx: '當 x = 3 時，y = √(25 − 9) = 4；又 dx ÷ dt = 1', txEn: 'When x = 3, y = √(25 − 9) = 4; also dx ÷ dt = 1' },
        { mk: 'M1', tx: 'dy ÷ dt = − (3 ÷ 4) × 1 = − 0.75，負號表示 y 正在減少', txEn: 'dy ÷ dt = − (3 ÷ 4) × 1 = − 0.75; the negative sign shows that y is decreasing' },
        { mk: 'A1', tx: '故梯頂下滑的速率為 0.75 m/s', txEn: 'So the top of the ladder is sliding down at a speed of 0.75 m/s' }
      ],
      note: '「速率」取正數，「變率」則保留負號表示方向；本題問下滑速率，故答 0.75 而非 − 0.75。',
      noteEn: 'A speed is taken as positive while a rate of change keeps the negative sign to show direction; this question asks for the downward speed, so the answer is 0.75 rather than − 0.75.'
    },
    {
      id: 'ap09',
      sub: '7.2 相關變率',
      lv: 3,
      q: '一個正方體的體積以 24 cm³/s 的速率增加。<br><b>求當邊長為 2 cm 時，正方體表面積的增加率。</b>',
      qEn: 'The volume of a cube is increasing at a rate of 24 cm³/s.<br><b>Find the rate of increase of the total surface area of the cube when the side is 2 cm.</b>',
      hint: '由 V = s³ 得 ds ÷ dt = (dV ÷ dt) ÷ (3s²)，再用 S = 6s² 求 dS ÷ dt = 12s × (ds ÷ dt)。',
      hintEn: 'From V = s³ we get ds ÷ dt = (dV ÷ dt) ÷ (3s²); then use S = 6s² to find dS ÷ dt = 12s × (ds ÷ dt).',
      answer: { type: 'num', accept: [48, 48.0], display: '48 cm²/s', displayEn: '48 cm²/s' },
      sol: [
        { mk: 'M1', tx: '設邊長為 s cm，V = s³，故 dV ÷ dt = 3s² × (ds ÷ dt)', txEn: 'Let the side be s cm; V = s³, so dV ÷ dt = 3s² × (ds ÷ dt)' },
        { mk: 'M1', tx: '當 s = 2 且 dV ÷ dt = 24 時：24 = 3 × 2² × (ds ÷ dt)，得 ds ÷ dt = 2', txEn: 'When s = 2 and dV ÷ dt = 24: 24 = 3 × 2² × (ds ÷ dt), giving ds ÷ dt = 2' },
        { mk: 'M1', tx: '表面積 S = 6s²，故 dS ÷ dt = 12s × (ds ÷ dt)', txEn: 'Total surface area S = 6s², so dS ÷ dt = 12s × (ds ÷ dt)' },
        { mk: 'A1', tx: 'dS ÷ dt = 12 × 2 × 2 = 48', txEn: 'dS ÷ dt = 12 × 2 × 2 = 48' },
        { mk: 'A1', tx: '故表面積以 48 cm²/s 的速率增加', txEn: 'So the total surface area is increasing at a rate of 48 cm²/s' }
      ],
      note: '本題有兩個關係式（V 與 s、S 與 s），必須先用體積條件求出「橋樑」ds ÷ dt，才可求 dS ÷ dt。',
      noteEn: 'This question has two relations, V with s and S with s; you must first use the volume condition to find the bridge value ds ÷ dt before you can find dS ÷ dt.'
    },
    {
      id: 'ap10',
      sub: '7.2 相關變率',
      lv: 3,
      q: '一個圓錐形水箱頂點向下，高 4 m，頂部半徑 2 m。水以 2 m³/min 的速率注入箱內。<br><b>求水深 1 m 時水面上升的速率。</b>',
      qEn: 'A conical tank has its vertex downwards, a height of 4 m and a top radius of 2 m. Water is poured into the tank at 2 m³/min.<br><b>Find the rate at which the water level is rising when the water is 1 m deep.</b>',
      hint: '由相似三角形得 r ÷ h = 2 ÷ 4，即 r = h ÷ 2；把 V = (1 ÷ 3)πr²h 化為只含 h 的式子，再對 t 求導。',
      hintEn: 'From similar triangles, r ÷ h = 2 ÷ 4, i.e. r = h ÷ 2; rewrite V = (1 ÷ 3)πr²h in terms of h only, then differentiate with respect to t.',
      answer: { type: 'num', accept: [8 / Math.PI, 2.5464791], display: '8 ÷ π m/min （≈ 2.55 m/min）', displayEn: '8 ÷ π m/min (≈ 2.55 m/min)' },
      sol: [
        { mk: 'M1', tx: '設水深 h m、水面半徑 r m；由相似三角形 r ÷ h = 2 ÷ 4，得 r = h ÷ 2', txEn: 'Let the water depth be h m and the radius of the water surface be r m; by similar triangles r ÷ h = 2 ÷ 4, so r = h ÷ 2' },
        { mk: 'M1', tx: 'V = (1 ÷ 3)πr²h = (1 ÷ 3)π(h ÷ 2)²h = (1 ÷ 12)πh³', txEn: 'V = (1 ÷ 3)πr²h = (1 ÷ 3)π(h ÷ 2)²h = (1 ÷ 12)πh³' },
        { mk: 'M1', tx: '對 t 求導：dV ÷ dt = (1 ÷ 4)πh² × (dh ÷ dt)', txEn: 'Differentiate with respect to t: dV ÷ dt = (1 ÷ 4)πh² × (dh ÷ dt)' },
        { mk: 'M1', tx: '當 h = 1 且 dV ÷ dt = 2 時：2 = (1 ÷ 4)π × (dh ÷ dt)', txEn: 'When h = 1 and dV ÷ dt = 2: 2 = (1 ÷ 4)π × (dh ÷ dt)' },
        { mk: 'A1', tx: '得 dh ÷ dt = 8 ÷ π ≈ 2.55，故水面上升速率為 8 ÷ π m/min', txEn: 'This gives dh ÷ dt = 8 ÷ π ≈ 2.55, so the water level is rising at 8 ÷ π m/min' }
      ],
      note: '必須先用相似三角形把 r 化成 h 的函數，否則 V 中含兩個變數，無法直接對 t 求導。',
      noteEn: 'You must first use similar triangles to express r as a function of h; otherwise V contains two variables and cannot be differentiated directly with respect to t.'
    },

    /* ═══════ 7.3 單調性與極值（一階導數檢驗）（ap11–ap15）═══════ */
    {
      id: 'ap11',
      sub: '7.3 單調性與極值（一階導數檢驗）',
      lv: 1,
      q: '設 f(x) = x² − 6x + 5。<br><b>求 f(x) 的極小值。</b>',
      qEn: 'Let f(x) = x² − 6x + 5.<br><b>Find the minimum value of f(x).</b>',
      hint: '令 f′(x) = 0 求駐點，再用二階導數（或一階導數的變號）判斷它是極小點，最後把 x 代回 f(x)。',
      hintEn: 'Put f′(x) = 0 to find the stationary point, then use the second derivative (or the sign change of the first derivative) to decide that it is a minimum point, and finally substitute x back into f(x).',
      answer: { type: 'num', accept: [-4, -4.0], display: '− 4', displayEn: '− 4' },
      sol: [
        { mk: 'M1', tx: 'f′(x) = 2x − 6', txEn: 'f′(x) = 2x − 6' },
        { mk: 'M1', tx: '令 f′(x) = 0：2x − 6 = 0，得 x = 3', txEn: 'Put f′(x) = 0: 2x − 6 = 0, giving x = 3' },
        { mk: 'M1', tx: 'f′(x) 在 x = 3 由負變正，故 x = 3 為極小點', txEn: 'f′(x) changes from negative to positive at x = 3, so x = 3 is a minimum point' },
        { mk: 'A1', tx: '極小值 = f(3) = 3² − 6 × 3 + 5 = 9 − 18 + 5 = − 4', txEn: 'Minimum value = f(3) = 3² − 6 × 3 + 5 = 9 − 18 + 5 = − 4' },
        { mk: 'A1', tx: '故 f(x) 的極小值為 − 4', txEn: 'So the minimum value of f(x) is − 4' }
      ],
      note: '題目問「極小值」（函數值）而非「極小點」（x 坐標），只答 x = 3 是常見失分。',
      noteEn: 'The question asks for the minimum value (a function value), not the minimum point (an x-coordinate); answering only x = 3 is a common loss of marks.'
    },
    {
      id: 'ap12',
      sub: '7.3 單調性與極值（一階導數檢驗）',
      lv: 2,
      q: '設 f(x) = x³ + 3x² − 9x + 2。<br><b>求 f(x) 的極大值。</b>',
      qEn: 'Let f(x) = x³ + 3x² − 9x + 2.<br><b>Find the maximum value of f(x).</b>',
      hint: 'f′(x) = 3x² + 6x − 9 可因式分解為 3(x + 3)(x − 1)；求出兩個駐點後，用二階導數檢驗哪個是極大點。',
      hintEn: 'f′(x) = 3x² + 6x − 9 factorises as 3(x + 3)(x − 1); after finding the two stationary points, use the second derivative test to decide which one is a maximum point.',
      answer: { type: 'num', accept: [29, 29.0], display: '29', displayEn: '29' },
      sol: [
        { mk: 'M1', tx: 'f′(x) = 3x² + 6x − 9 = 3(x² + 2x − 3) = 3(x + 3)(x − 1)', txEn: 'f′(x) = 3x² + 6x − 9 = 3(x² + 2x − 3) = 3(x + 3)(x − 1)' },
        { mk: 'M1', tx: '令 f′(x) = 0，得駐點 x = − 3 與 x = 1', txEn: 'Put f′(x) = 0, giving the stationary points x = − 3 and x = 1' },
        { mk: 'M1', tx: 'f″(x) = 6x + 6；f″(− 3) = − 12 &lt; 0（極大點），f″(1) = 12 &gt; 0（極小點）', txEn: 'f″(x) = 6x + 6; f″(− 3) = − 12 &lt; 0 (maximum point), f″(1) = 12 &gt; 0 (minimum point)' },
        { mk: 'A1', tx: '極大值 = f(− 3) = − 27 + 27 + 27 + 2 = 29', txEn: 'Maximum value = f(− 3) = − 27 + 27 + 27 + 2 = 29' },
        { mk: 'A1', tx: '故 f(x) 的極大值為 29', txEn: 'So the maximum value of f(x) is 29' }
      ],
      note: '兩個駐點必須逐一檢驗，不能求出駐點就當作極大點或極小點；三次函數的極大值只是局部最大值，並非函數在整個定義域上的最大值（三次函數無上界）。',
      noteEn: 'Each stationary point must be tested separately; you cannot assume a stationary point is a maximum or minimum. The maximum value of a cubic function is only a local maximum, not a greatest value over the whole domain, since a cubic function has no upper bound.'
    },
    {
      id: 'ap13',
      sub: '7.3 單調性與極值（一階導數檢驗）',
      lv: 2,
      q: '設 f(x) = x³ − 3x。<br><b>求 f(x) 的遞減區間（以不等式表示）。</b>',
      qEn: 'Let f(x) = x³ − 3x.<br><b>Find the interval on which f(x) is decreasing (give your answer as an inequality).</b>',
      hint: '遞減表示 f′(x) &lt; 0；先求 f′(x) = 3x² − 3 的零點，再用測試值判斷它在兩個零點之間的符號。',
      hintEn: 'Decreasing means f′(x) &lt; 0; first find the zeros of f′(x) = 3x² − 3, then use a test value to determine its sign between the two zeros.',
      answer: { type: 'symbol', accept: ['-1<x<1', '(-1,1)'], display: '− 1 &lt; x &lt; 1', displayEn: '− 1 &lt; x &lt; 1' },
      sol: [
        { mk: 'M1', tx: 'f′(x) = 3x² − 3 = 3(x − 1)(x + 1)', txEn: 'f′(x) = 3x² − 3 = 3(x − 1)(x + 1)' },
        { mk: 'M1', tx: '令 f′(x) = 0，得 x = − 1 與 x = 1', txEn: 'Put f′(x) = 0, giving x = − 1 and x = 1' },
        { mk: 'M1', tx: '取測試值 x = 0：f′(0) = − 3 &lt; 0，故 − 1 &lt; x &lt; 1 時 f 遞減', txEn: 'Take the test value x = 0: f′(0) = − 3 &lt; 0, so f is decreasing when − 1 &lt; x &lt; 1' },
        { mk: 'M1', tx: '當 x &lt; − 1 或 x &gt; 1 時 f′(x) &gt; 0，函數遞增', txEn: 'When x &lt; − 1 or x &gt; 1, f′(x) &gt; 0 and the function is increasing' },
        { mk: 'A1', tx: '故遞減區間為 − 1 &lt; x &lt; 1', txEn: 'So the interval of decrease is − 1 &lt; x &lt; 1' }
      ],
      note: '判斷符號可用代入測試值的方法；寫區間時不要把端點 x = ± 1 也算進遞減區間（該處 f′ = 0）。',
      noteEn: 'A test value can be used to determine the sign; when writing the interval, do not include the endpoints x = ± 1, where f′ = 0.'
    },
    {
      id: 'ap14',
      sub: '7.3 單調性與極值（一階導數檢驗）',
      lv: 2,
      q: '設 f(x) = x³ + ax² + bx，其中 a、b 為常數。已知 f(x) 的兩個駐點的 x 坐標分別為 1 和 3。<br><b>求 a 和 b 的值。</b>',
      qEn: 'Let f(x) = x³ + ax² + bx, where a and b are constants. The x-coordinates of the two stationary points of f(x) are 1 and 3.<br><b>Find the values of a and b.</b>',
      hint: 'f′(x) = 3x² + 2ax + b 的零點是 1 與 3，故 f′(x) = 3(x − 1)(x − 3)，展開後比較係數。',
      hintEn: 'The zeros of f′(x) = 3x² + 2ax + b are 1 and 3, so f′(x) = 3(x − 1)(x − 3); expand and compare coefficients.',
      answer: { type: 'numbers', accept: [[-6, 9], [-6.0, 9.0]], display: 'a = − 6，b = 9', displayEn: 'a = − 6, b = 9' },
      sol: [
        { mk: 'M1', tx: 'f′(x) = 3x² + 2ax + b', txEn: 'f′(x) = 3x² + 2ax + b' },
        { mk: 'M1', tx: '因 1 與 3 是 f′(x) = 0 的兩根，故 f′(x) = 3(x − 1)(x − 3)', txEn: 'Since 1 and 3 are the roots of f′(x) = 0, f′(x) = 3(x − 1)(x − 3)' },
        { mk: 'M1', tx: '展開：3(x − 1)(x − 3) = 3x² − 12x + 9', txEn: 'Expanding: 3(x − 1)(x − 3) = 3x² − 12x + 9' },
        { mk: 'M1', tx: '比較係數：2a = − 12，得 a = − 6；b = 9', txEn: 'Comparing coefficients: 2a = − 12, giving a = − 6; and b = 9' },
        { mk: 'A1', tx: '故 a = − 6、b = 9', txEn: 'So a = − 6 and b = 9' }
      ],
      note: '先把 f′(x) 寫成 3(x − 1)(x − 3) 再展開比較係數，可避免用「兩根之和 = − 2a ÷ 3」時漏掉負號。',
      noteEn: 'Writing f′(x) as 3(x − 1)(x − 3) first and then expanding to compare coefficients avoids losing the negative sign when using the sum of roots, − 2a ÷ 3.'
    },
    {
      id: 'ap15',
      sub: '7.3 單調性與極值（一階導數檢驗）',
      lv: 3,
      q: '設 f(x) = x³ − 3x² + kx，其中 k 為常數。已知對所有實數 x，f(x) 都是遞增函數。<br><b>求 k 的最小值。</b>',
      qEn: 'Let f(x) = x³ − 3x² + kx, where k is a constant. For all real x, f(x) is an increasing function.<br><b>Find the least value of k.</b>',
      hint: '遞增要求 f′(x) = 3x² − 6x + k ≥ 0 對所有實數 x 成立，故這個二次式的判別式須 ≤ 0。',
      hintEn: 'Increasing requires f′(x) = 3x² − 6x + k ≥ 0 for all real x, so the discriminant of this quadratic must be ≤ 0.',
      answer: { type: 'num', accept: [3, 3.0], display: 'k 的最小值為 3', displayEn: 'The least value of k is 3' },
      sol: [
        { mk: 'M1', tx: 'f′(x) = 3x² − 6x + k；f 遞增 ⇔ f′(x) ≥ 0 對所有實數 x 成立', txEn: 'f′(x) = 3x² − 6x + k; f is increasing ⇔ f′(x) ≥ 0 for all real x' },
        { mk: 'M1', tx: '因二次項係數 3 &gt; 0，開口向上的拋物線恆非負 ⇔ 判別式 ≤ 0', txEn: 'Since the coefficient of x² is 3 &gt; 0, an upward-opening parabola is always non-negative ⇔ the discriminant ≤ 0' },
        { mk: 'M1', tx: '判別式 = (− 6)² − 4 × 3 × k = 36 − 12k', txEn: 'Discriminant = (− 6)² − 4 × 3 × k = 36 − 12k' },
        { mk: 'M1', tx: '令 36 − 12k ≤ 0，解得 k ≥ 3', txEn: 'Put 36 − 12k ≤ 0, giving k ≥ 3' },
        { mk: 'A1', tx: '故 k 的最小值為 3（此時 f′(x) = 3(x − 1)² ≥ 0）', txEn: 'So the least value of k is 3 (then f′(x) = 3(x − 1)² ≥ 0)' }
      ],
      note: 'k = 3 時 f′(1) = 0，但 f′ 不變號，函數仍然遞增；「f′ = 0」不等於「函數不是遞增」。',
      noteEn: 'When k = 3, f′(1) = 0, but f′ does not change sign and the function is still increasing; f′ = 0 does not mean that the function is not increasing.'
    },

    /* ═══════ 7.4 凹凸性與拐點（二階導數檢驗）（ap16–ap20）═══════ */
    {
      id: 'ap16',
      sub: '7.4 凹凸性與拐點（二階導數檢驗）',
      lv: 1,
      q: '設 f(x) = x³ − 3x² + 1。<br><b>求曲線 y = f(x) 的拐點的 x 坐標。</b>',
      qEn: 'Let f(x) = x³ − 3x² + 1.<br><b>Find the x-coordinate of the point of inflexion of the curve y = f(x).</b>',
      hint: '拐點出現在 f″(x) = 0 且 f″ 變號之處；先求 f′(x) 再求 f″(x)，然後解方程。',
      hintEn: 'A point of inflexion occurs where f″(x) = 0 and f″ changes sign; find f′(x) first, then f″(x), and solve the equation.',
      answer: { type: 'num', accept: [1, 1.0], display: 'x = 1', displayEn: 'x = 1' },
      sol: [
        { mk: 'M1', tx: 'f′(x) = 3x² − 6x', txEn: 'f′(x) = 3x² − 6x' },
        { mk: 'M1', tx: 'f″(x) = 6x − 6', txEn: 'f″(x) = 6x − 6' },
        { mk: 'M1', tx: '令 f″(x) = 0：6x − 6 = 0，得 x = 1', txEn: 'Put f″(x) = 0: 6x − 6 = 0, giving x = 1' },
        { mk: 'M1', tx: '當 x &lt; 1 時 f″(x) &lt; 0（凹向下）；當 x &gt; 1 時 f″(x) &gt; 0（凹向上），f″ 變號', txEn: 'When x &lt; 1, f″(x) &lt; 0 (concave downward); when x &gt; 1, f″(x) &gt; 0 (concave upward), so f″ changes sign' },
        { mk: 'A1', tx: '故拐點的 x 坐標為 1（拐點為 (1, − 1)）', txEn: 'So the x-coordinate of the point of inflexion is 1 (the point of inflexion is (1, − 1))' }
      ],
      note: '只寫「f″(x) = 0」不足夠，必須說明 f″ 在該點兩側變號，才能確認是拐點。',
      noteEn: 'Writing f″(x) = 0 alone is not enough; you must state that f″ changes sign on the two sides of the point before it can be confirmed as a point of inflexion.'
    },
    {
      id: 'ap17',
      sub: '7.4 凹凸性與拐點（二階導數檢驗）',
      lv: 1,
      q: '設 f(x) = x³ + 3x² − 9x。<br><b>求曲線 y = f(x) 凹向上（concave upward）的 x 範圍。</b>',
      qEn: 'Let f(x) = x³ + 3x² − 9x.<br><b>Find the range of x for which the curve y = f(x) is concave upward.</b>',
      hint: '凹向上表示 f″(x) &gt; 0；先求 f′(x) 再求 f″(x) = 6x + 6，然後解不等式。',
      hintEn: 'Concave upward means f″(x) &gt; 0; find f′(x) first, then f″(x) = 6x + 6, and solve the inequality.',
      answer: { type: 'symbol', accept: ['x>-1', '(-1,∞)', '(-1,+∞)'], display: 'x &gt; − 1', displayEn: 'x &gt; − 1' },
      sol: [
        { mk: 'M1', tx: 'f′(x) = 3x² + 6x − 9', txEn: 'f′(x) = 3x² + 6x − 9' },
        { mk: 'M1', tx: 'f″(x) = 6x + 6', txEn: 'f″(x) = 6x + 6' },
        { mk: 'M1', tx: '凹向上 ⇔ f″(x) &gt; 0 ⇔ 6x + 6 &gt; 0', txEn: 'Concave upward ⇔ f″(x) &gt; 0 ⇔ 6x + 6 &gt; 0' },
        { mk: 'M1', tx: '解得 x &gt; − 1', txEn: 'Solving gives x &gt; − 1' },
        { mk: 'A1', tx: '故曲線在 x &gt; − 1 的範圍內凹向上（拐點在 x = − 1）', txEn: 'So the curve is concave upward for x &gt; − 1 (the point of inflexion is at x = − 1)' }
      ],
      note: '凹向上看 f″ &gt; 0、凹向下看 f″ &lt; 0；切勿與 f′ &gt; 0（遞增）混淆，兩者是完全不同的資訊。',
      noteEn: 'Concave upward depends on f″ &gt; 0 and concave downward on f″ &lt; 0; do not confuse these with f′ &gt; 0 (increasing), which is entirely different information.'
    },
    {
      id: 'ap18',
      sub: '7.4 凹凸性與拐點（二階導數檢驗）',
      lv: 1,
      q: '設 f(x) = x³ + ax² + 3x + 1，其中 a 為常數。已知曲線 y = f(x) 的拐點的 x 坐標為 2。<br><b>求 a 的值。</b>',
      qEn: 'Let f(x) = x³ + ax² + 3x + 1, where a is a constant. The x-coordinate of the point of inflexion of the curve y = f(x) is 2.<br><b>Find the value of a.</b>',
      hint: '拐點滿足 f″(x) = 0；先求 f′(x) 再求 f″(x) = 6x + 2a，最後代入 x = 2。',
      hintEn: 'A point of inflexion satisfies f″(x) = 0; find f′(x) first, then f″(x) = 6x + 2a, and finally substitute x = 2.',
      answer: { type: 'num', accept: [-6, -6.0], display: 'a = − 6', displayEn: 'a = − 6' },
      sol: [
        { mk: 'M1', tx: 'f′(x) = 3x² + 2ax + 3', txEn: 'f′(x) = 3x² + 2ax + 3' },
        { mk: 'M1', tx: 'f″(x) = 6x + 2a', txEn: 'f″(x) = 6x + 2a' },
        { mk: 'M1', tx: '拐點須滿足 f″(2) = 0，即 6 × 2 + 2a = 0', txEn: 'A point of inflexion must satisfy f″(2) = 0, i.e. 6 × 2 + 2a = 0' },
        { mk: 'A1', tx: '12 + 2a = 0，得 a = − 6', txEn: '12 + 2a = 0, giving a = − 6' },
        { mk: 'A1', tx: '故 a = − 6', txEn: 'So a = − 6' }
      ],
      note: 'ax² 求導得 2ax，再求導得 2a，這個「2」常被漏掉；亦可用 f″(x) = 0 的一階係數反推。',
      noteEn: 'Differentiating ax² gives 2ax and differentiating again gives 2a; this factor 2 is often missed. You can also work backwards from the coefficient of x in f″(x) = 0.'
    },
    {
      id: 'ap19',
      sub: '7.4 凹凸性與拐點（二階導數檢驗）',
      lv: 2,
      q: '設 f(x) = x³ − 6x² + 9x + 1。<br><b>求曲線 y = f(x) 的拐點的坐標。</b>',
      qEn: 'Let f(x) = x³ − 6x² + 9x + 1.<br><b>Find the coordinates of the point of inflexion of the curve y = f(x).</b>',
      hint: '解 f″(x) = 0 得 x，確認 f″ 變號後，再把 x 代入 f(x) 求 y。',
      hintEn: 'Solve f″(x) = 0 for x, confirm that f″ changes sign, then substitute x into f(x) to find y.',
      answer: { type: 'numbers', accept: [[2, 3], [2.0, 3.0]], display: '拐點為 (2, 3)', displayEn: 'The point of inflexion is (2, 3)' },
      sol: [
        { mk: 'M1', tx: 'f′(x) = 3x² − 12x + 9', txEn: 'f′(x) = 3x² − 12x + 9' },
        { mk: 'M1', tx: 'f″(x) = 6x − 12；令 f″(x) = 0 得 x = 2', txEn: 'f″(x) = 6x − 12; putting f″(x) = 0 gives x = 2' },
        { mk: 'M1', tx: 'x &lt; 2 時 f″ &lt; 0、x &gt; 2 時 f″ &gt; 0，f″ 變號，故 x = 2 對應拐點', txEn: 'When x &lt; 2, f″ &lt; 0 and when x &gt; 2, f″ &gt; 0, so f″ changes sign and x = 2 corresponds to a point of inflexion' },
        { mk: 'M1', tx: 'y = f(2) = 2³ − 6 × 2² + 9 × 2 + 1 = 8 − 24 + 18 + 1 = 3', txEn: 'y = f(2) = 2³ − 6 × 2² + 9 × 2 + 1 = 8 − 24 + 18 + 1 = 3' },
        { mk: 'A1', tx: '故拐點為 (2, 3)', txEn: 'So the point of inflexion is (2, 3)' }
      ],
      note: '只答 x = 2 不完整；題目問「坐標」時必須同時寫出 y = 3，並確認 f″ 確有變號。',
      noteEn: 'Answering only x = 2 is incomplete; when the question asks for coordinates you must also give y = 3, and confirm that f″ really changes sign.'
    },
    {
      id: 'ap20',
      sub: '7.4 凹凸性與拐點（二階導數檢驗）',
      lv: 3,
      q: '設 f(x) = x³ + px² + qx，其中 p、q 為常數。已知 f(x) 在 x = 1 取得極小值，且曲線 y = f(x) 在 x = − 1 有拐點。<br><b>求 p 和 q 的值。</b>',
      qEn: 'Let f(x) = x³ + px² + qx, where p and q are constants. f(x) attains a minimum value at x = 1, and the curve y = f(x) has a point of inflexion at x = − 1.<br><b>Find the values of p and q.</b>',
      hint: '極小值處 f′(1) = 0 且 f″(1) &gt; 0；拐點處 f″(− 1) = 0。先用 f″(− 1) = 0 求 p，再求 q。',
      hintEn: 'At a minimum point, f′(1) = 0 and f″(1) &gt; 0; at a point of inflexion, f″(− 1) = 0. First use f″(− 1) = 0 to find p, then find q.',
      answer: { type: 'numbers', accept: [[3, -9], [3.0, -9.0]], display: 'p = 3，q = − 9', displayEn: 'p = 3, q = − 9' },
      sol: [
        { mk: 'M1', tx: 'f′(x) = 3x² + 2px + q，f″(x) = 6x + 2p', txEn: 'f′(x) = 3x² + 2px + q, f″(x) = 6x + 2p' },
        { mk: 'M1', tx: '拐點條件：f″(− 1) = − 6 + 2p = 0，得 p = 3', txEn: 'Point of inflexion condition: f″(− 1) = − 6 + 2p = 0, giving p = 3' },
        { mk: 'M1', tx: '極小值條件：f′(1) = 3 + 2p + q = 0，代入 p = 3 得 3 + 6 + q = 0', txEn: 'Minimum condition: f′(1) = 3 + 2p + q = 0; substituting p = 3 gives 3 + 6 + q = 0' },
        { mk: 'A1', tx: '故 q = − 9', txEn: 'So q = − 9' },
        { mk: 'M1', tx: '檢驗：f″(1) = 6 + 6 = 12 &gt; 0，故 x = 1 確為極小點', txEn: 'Check: f″(1) = 6 + 6 = 12 &gt; 0, so x = 1 is indeed a minimum point' },
        { mk: 'A1', tx: '故 p = 3、q = − 9', txEn: 'So p = 3 and q = − 9' }
      ],
      note: '必須回頭用 f″(1) &gt; 0 檢驗 x = 1 真的是極小點；只寫 f′(1) = 0 只能說明它是駐點。',
      noteEn: 'You must go back and use f″(1) &gt; 0 to check that x = 1 really is a minimum point; f′(1) = 0 alone only shows that it is a stationary point.'
    },

    /* ═══════ 7.5 最大最小值應用題（ap21–ap25）═══════ */
    {
      id: 'ap21',
      sub: '7.5 最大最小值應用題',
      lv: 2,
      q: '一個矩形的周長為 20 cm。<br><b>求此矩形可能的最大面積。</b>',
      qEn: 'The perimeter of a rectangle is 20 cm.<br><b>Find the greatest possible area of this rectangle.</b>',
      hint: '設長為 x cm，則闊為 (20 − 2x) ÷ 2 = 10 − x；面積 A(x) = x(10 − x)，再求極大值。',
      hintEn: 'Let the length be x cm; then the width is (20 − 2x) ÷ 2 = 10 − x, and the area is A(x) = x(10 − x). Find its maximum value.',
      answer: { type: 'num', accept: [25, 25.0], display: '25 cm²', displayEn: '25 cm²' },
      sol: [
        { mk: 'M1', tx: '設長為 x cm（0 &lt; x &lt; 10），則闊為 10 − x cm', txEn: 'Let the length be x cm (0 &lt; x &lt; 10); then the width is 10 − x cm' },
        { mk: 'M1', tx: '面積 A(x) = x(10 − x) = 10x − x²', txEn: 'Area A(x) = x(10 − x) = 10x − x²' },
        { mk: 'M1', tx: 'A′(x) = 10 − 2x；令 A′(x) = 0，得 x = 5', txEn: 'A′(x) = 10 − 2x; putting A′(x) = 0 gives x = 5' },
        { mk: 'M1', tx: 'A″(x) = − 2 &lt; 0，故 x = 5 為極大點', txEn: 'A″(x) = − 2 &lt; 0, so x = 5 is a maximum point' },
        { mk: 'A1', tx: '最大面積 = 5 × (10 − 5) = 25 cm²', txEn: 'Greatest area = 5 × (10 − 5) = 25 cm²' }
      ],
      note: '應用題必須交代變數的取值範圍，並用二階導數（或比較端點）確認是極大值而非極小值。',
      noteEn: 'In an applied problem you must state the range of the variable and use the second derivative (or compare with the endpoints) to confirm a maximum rather than a minimum.'
    },
    {
      id: 'ap22',
      sub: '7.5 最大最小值應用題',
      lv: 2,
      q: '農夫用長 60 m 的籬笆，以一道筆直的牆作為矩形圍欄的一邊，圍出一個矩形。<br><b>求圍欄可能的最大面積。</b>',
      qEn: 'A farmer uses a fence of length 60 m and a straight wall as one side to build a rectangular enclosure.<br><b>Find the greatest possible area of the enclosure.</b>',
      hint: '設垂直於牆的兩邊各長 x m，則與牆平行的一邊長 (60 − 2x) m；面積 A(x) = x(60 − 2x)。',
      hintEn: 'Let each of the two sides perpendicular to the wall be x m; then the side parallel to the wall is (60 − 2x) m, and the area is A(x) = x(60 − 2x).',
      answer: { type: 'num', accept: [450, 450.0], display: '450 m²', displayEn: '450 m²' },
      sol: [
        { mk: 'M1', tx: '設垂直於牆的一邊長 x m（0 &lt; x &lt; 30），則另一邊長 (60 − 2x) m', txEn: 'Let one side perpendicular to the wall be x m (0 &lt; x &lt; 30); then the other side is (60 − 2x) m' },
        { mk: 'M1', tx: '面積 A(x) = x(60 − 2x) = 60x − 2x²', txEn: 'Area A(x) = x(60 − 2x) = 60x − 2x²' },
        { mk: 'M1', tx: 'A′(x) = 60 − 4x；令 A′(x) = 0，得 x = 15', txEn: 'A′(x) = 60 − 4x; putting A′(x) = 0 gives x = 15' },
        { mk: 'M1', tx: 'A″(x) = − 4 &lt; 0，故 x = 15 為極大點；此時另一邊長 60 − 30 = 30', txEn: 'A″(x) = − 4 &lt; 0, so x = 15 is a maximum point; the other side is then 60 − 30 = 30' },
        { mk: 'A1', tx: '最大面積 = 15 × 30 = 450 m²', txEn: 'Greatest area = 15 × 30 = 450 m²' }
      ],
      note: '靠牆的一邊不需籬笆，籬笆只用於三邊；誤用「周長 60」會得出完全不同的答案。',
      noteEn: 'The side against the wall needs no fencing, so the fence is used for three sides only; wrongly using a perimeter of 60 gives a completely different answer.'
    },
    {
      id: 'ap23',
      sub: '7.5 最大最小值應用題',
      lv: 3,
      q: '一個無蓋的長方體盒子，底面為正方形，體積為 32 cm³。<br><b>求此盒子的最小表面積。</b>',
      qEn: 'An open box is a cuboid with a square base and a volume of 32 cm³.<br><b>Find the least possible total surface area of this box.</b>',
      hint: '設底面邊長 x cm，由 x²h = 32 得高 h = 32 ÷ x²；無蓋盒子的表面積為 x² + 4xh，化為 x 的函數後求極小。',
      hintEn: 'Let the side of the base be x cm; from x²h = 32 the height is h = 32 ÷ x². The surface area of the open box is x² + 4xh; express it as a function of x and minimise it.',
      answer: { type: 'num', accept: [48, 48.0], display: '48 cm²', displayEn: '48 cm²' },
      sol: [
        { mk: 'M1', tx: '設底面邊長 x cm、高 h cm；由體積 x²h = 32 得 h = 32 ÷ x²', txEn: 'Let the side of the base be x cm and the height be h cm; from the volume x²h = 32, h = 32 ÷ x²' },
        { mk: 'M1', tx: '無蓋盒子表面積 S = x² + 4xh = x² + 128 ÷ x', txEn: 'Surface area of the open box: S = x² + 4xh = x² + 128 ÷ x' },
        { mk: 'M1', tx: 'S′(x) = 2x − 128 ÷ x²；令 S′(x) = 0 得 x³ = 64，即 x = 4', txEn: 'S′(x) = 2x − 128 ÷ x²; putting S′(x) = 0 gives x³ = 64, i.e. x = 4' },
        { mk: 'M1', tx: 'S″(x) = 2 + 256 ÷ x³ &gt; 0，故 x = 4 為極小點；此時 h = 32 ÷ 16 = 2', txEn: 'S″(x) = 2 + 256 ÷ x³ &gt; 0, so x = 4 is a minimum point; then h = 32 ÷ 16 = 2' },
        { mk: 'A1', tx: '最小表面積 = 4² + 128 ÷ 4 = 16 + 32 = 48 cm²', txEn: 'Least surface area = 4² + 128 ÷ 4 = 16 + 32 = 48 cm²' }
      ],
      note: '無蓋盒子只有一個底面，表面積是 x² + 4xh；若誤當成有蓋（加上第二個底面）便會得出不同結果。',
      noteEn: 'An open box has only one base, so its surface area is x² + 4xh; mistaking it for a closed box and adding a second base gives a different result.'
    },
    {
      id: 'ap24',
      sub: '7.5 最大最小值應用題',
      lv: 3,
      q: '一個矩形的四個頂點都在半徑為 5 的圓上。<br><b>求此矩形可能的最大面積。</b>',
      qEn: 'All four vertices of a rectangle lie on a circle of radius 5.<br><b>Find the greatest possible area of this rectangle.</b>',
      hint: '內接矩形的對角線是圓的直徑 10；設兩邊長的一半為 x、y，則 x² + y² = 25，面積為 4xy。',
      hintEn: 'The diagonal of an inscribed rectangle is a diameter of the circle, 10; let half of the two sides be x and y, so that x² + y² = 25 and the area is 4xy.',
      answer: { type: 'num', accept: [50, 50.0], display: '50 平方單位', displayEn: '50 square units' },
      sol: [
        { mk: 'M1', tx: '矩形內接於圓，其對角線等於圓的直徑 10', txEn: 'The rectangle is inscribed in the circle, so its diagonal equals the diameter of the circle, 10' },
        { mk: 'M1', tx: '設兩邊長為 2x、2y，則 (2x)² + (2y)² = 10²，即 x² + y² = 25', txEn: 'Let the two sides be 2x and 2y; then (2x)² + (2y)² = 10², i.e. x² + y² = 25' },
        { mk: 'M1', tx: '面積 A = 4xy，由 y = √(25 − x²) 得 A² = 16x²(25 − x²)；令 u = x² 得 A² = 16u(25 − u)', txEn: 'Area A = 4xy; from y = √(25 − x²), A² = 16x²(25 − x²); putting u = x² gives A² = 16u(25 − u)' },
        { mk: 'M1', tx: 'd(A²) ÷ du = 400 − 32u = 0，得 u = 12.5，即 x² = y² = 25 ÷ 2', txEn: 'd(A²) ÷ du = 400 − 32u = 0, giving u = 12.5, i.e. x² = y² = 25 ÷ 2' },
        { mk: 'A1', tx: 'A² = 16 × 12.5 × 12.5 = 2500，故最大面積 = 50 平方單位', txEn: 'A² = 16 × 12.5 × 12.5 = 2500, so the greatest area is 50 square units' }
      ],
      note: '把 A² 化為 u = x² 的二次函數可避免根式求導；最大面積在 x = y 時出現，即矩形為正方形。',
      noteEn: 'Writing A² as a quadratic in u = x² avoids differentiating a surd; the greatest area occurs when x = y, i.e. when the rectangle is a square.'
    },
    {
      id: 'ap25',
      sub: '7.5 最大最小值應用題',
      lv: 3,
      q: '一扇窗由一個矩形加上一個半圓組成：半圓的直徑等於矩形的闊度，半圓在矩形之上。窗的周界（矩形底邊、兩條側邊與半圓弧）總長為 12 m。<br><b>求此窗可能的最大面積。</b>',
      qEn: 'A window consists of a rectangle with a semicircle on top, the diameter of the semicircle being equal to the width of the rectangle. The perimeter of the window (the bottom side and the two vertical sides of the rectangle, together with the arc of the semicircle) is 12 m in total.<br><b>Find the greatest possible area of this window.</b>',
      hint: '設半圓半徑為 r m，則矩形闊 2r m、高 h m；由周界 2r + 2h + πr = 12 把 h 用 r 表示，再寫出面積函數。',
      hintEn: 'Let the radius of the semicircle be r m; then the width of the rectangle is 2r m and its height is h m. Use the perimeter 2r + 2h + πr = 12 to express h in terms of r, then write down the area function.',
      answer: { type: 'num', accept: [72 / (4 + Math.PI), 10.0817848], display: '72 ÷ (4 + π) m² （≈ 10.08 m²）', displayEn: '72 ÷ (4 + π) m² (≈ 10.08 m²)' },
      sol: [
        { mk: 'M1', tx: '設半圓半徑 r m，則矩形闊 2r m、高 h m', txEn: 'Let the radius of the semicircle be r m; then the width of the rectangle is 2r m and its height is h m' },
        { mk: 'M1', tx: '周界：2r + 2h + πr = 12，故 h = (12 − 2r − πr) ÷ 2 = 6 − r − (π ÷ 2)r', txEn: 'Perimeter: 2r + 2h + πr = 12, so h = (12 − 2r − πr) ÷ 2 = 6 − r − (π ÷ 2)r' },
        { mk: 'M1', tx: '面積 A = 2rh + (1 ÷ 2)πr² = 12r − 2r² − (π ÷ 2)r²', txEn: 'Area A = 2rh + (1 ÷ 2)πr² = 12r − 2r² − (π ÷ 2)r²' },
        { mk: 'M1', tx: 'A′(r) = 12 − 4r − πr；令 A′(r) = 0 得 r = 12 ÷ (4 + π) ≈ 1.68', txEn: 'A′(r) = 12 − 4r − πr; putting A′(r) = 0 gives r = 12 ÷ (4 + π) ≈ 1.68' },
        { mk: 'M1', tx: 'A″(r) = − 4 − π &lt; 0，故 r = 12 ÷ (4 + π) 為極大點', txEn: 'A″(r) = − 4 − π &lt; 0, so r = 12 ÷ (4 + π) is a maximum point' },
        { mk: 'A1', tx: '最大面積 = 144 ÷ (4 + π) − 72 ÷ (4 + π) = 72 ÷ (4 + π) ≈ 10.08 m²', txEn: 'Greatest area = 144 ÷ (4 + π) − 72 ÷ (4 + π) = 72 ÷ (4 + π) ≈ 10.08 m²' }
      ],
      note: '周界不計半圓的直徑（它與矩形頂邊重合），而面積是矩形加半圓；這兩個式子的差異是本題最大的陷阱。',
      noteEn: 'The perimeter does not include the diameter of the semicircle, which coincides with the top side of the rectangle, while the area is the rectangle plus the semicircle; the difference between these two expressions is the biggest trap in this question.'
    },

    /* ═══════ 7.6 洛必達法則（ap26–ap30）═══════ */
    {
      id: 'ap26',
      sub: '7.6 洛必達法則',
      lv: 1,
      q: '<b>求 lim<sub>x→0</sub> sin(5x) ÷ (2x)。</b>',
      qEn: '<b>Find lim<sub>x→0</sub> sin(5x) ÷ (2x).</b>',
      hint: '這是 0 ÷ 0 型不定式，可用洛必達法則：分子、分母分別對 x 求導後再取極限。',
      hintEn: 'This is an indeterminate form of the type 0 ÷ 0, so L\'Hôpital\'s rule can be used: differentiate the numerator and the denominator with respect to x, then take the limit.',
      answer: { type: 'num', accept: [2.5, 5 / 2], display: '5 ÷ 2 = 2.5', displayEn: '5 ÷ 2 = 2.5' },
      sol: [
        { mk: 'M1', tx: '當 x → 0 時，sin(5x) → 0 且 2x → 0，屬 0 ÷ 0 型不定式', txEn: 'As x → 0, sin(5x) → 0 and 2x → 0, so this is an indeterminate form of the type 0 ÷ 0' },
        { mk: 'M1', tx: '由洛必達法則：lim(x→0) sin(5x) ÷ (2x) = lim(x→0) 5cos(5x) ÷ 2', txEn: 'By L\'Hôpital\'s rule: lim(x→0) sin(5x) ÷ (2x) = lim(x→0) 5cos(5x) ÷ 2' },
        { mk: 'M1', tx: '當 x → 0 時 cos(5x) → cos 0 = 1', txEn: 'As x → 0, cos(5x) → cos 0 = 1' },
        { mk: 'A1', tx: '極限 = (5 × 1) ÷ 2 = 5 ÷ 2', txEn: 'Limit = (5 × 1) ÷ 2 = 5 ÷ 2' },
        { mk: 'A1', tx: '故 lim(x→0) sin(5x) ÷ (2x) = 5 ÷ 2 = 2.5', txEn: 'So lim(x→0) sin(5x) ÷ (2x) = 5 ÷ 2 = 2.5' }
      ],
      note: '用洛必達法則前必須先確認是 0 ÷ 0 或 ∞ ÷ ∞ 型；亦可利用 sin(5x) ÷ (5x) → 1，再乘以 5 ÷ 2。',
      noteEn: 'Before using L\'Hôpital\'s rule you must first check that the form is 0 ÷ 0 or ∞ ÷ ∞; alternatively, use sin(5x) ÷ (5x) → 1 and multiply by 5 ÷ 2.'
    },
    {
      id: 'ap27',
      sub: '7.6 洛必達法則',
      lv: 1,
      q: '<b>求 lim<sub>x→0</sub> (e<sup>2x</sup> − 1) ÷ x。</b>',
      qEn: '<b>Find lim<sub>x→0</sub> (e<sup>2x</sup> − 1) ÷ x.</b>',
      hint: '代入 x = 0 得 0 ÷ 0 型；用洛必達法則，分子 e<sup>2x</sup> − 1 的導數是 2e<sup>2x</sup>。',
      hintEn: 'Substituting x = 0 gives the form 0 ÷ 0; use L\'Hôpital\'s rule. The derivative of e<sup>2x</sup> − 1 is 2e<sup>2x</sup>.',
      answer: { type: 'num', accept: [2, 2.0], display: '2', displayEn: '2' },
      sol: [
        { mk: 'M1', tx: '當 x → 0 時，e^(2x) − 1 → 0 且 x → 0，屬 0 ÷ 0 型不定式', txEn: 'As x → 0, e^(2x) − 1 → 0 and x → 0, so this is an indeterminate form of the type 0 ÷ 0' },
        { mk: 'M1', tx: '由洛必達法則：lim(x→0) (e^(2x) − 1) ÷ x = lim(x→0) 2e^(2x) ÷ 1', txEn: 'By L\'Hôpital\'s rule: lim(x→0) (e^(2x) − 1) ÷ x = lim(x→0) 2e^(2x) ÷ 1' },
        { mk: 'M1', tx: '當 x → 0 時，e^(2x) → e^0 = 1', txEn: 'As x → 0, e^(2x) → e^0 = 1' },
        { mk: 'A1', tx: '極限 = 2 × 1 = 2', txEn: 'Limit = 2 × 1 = 2' },
        { mk: 'A1', tx: '故 lim(x→0) (e^(2x) − 1) ÷ x = 2', txEn: 'So lim(x→0) (e^(2x) − 1) ÷ x = 2' }
      ],
      note: 'e^(2x) 求導時要用連鎖法則乘上 2；漏掉這個 2 會誤得 1，是最常見的失分。',
      noteEn: 'Differentiating e^(2x) requires the chain rule, which brings out a factor 2; missing this 2 gives the wrong answer 1 and is the most common loss of marks.'
    },
    {
      id: 'ap28',
      sub: '7.6 洛必達法則',
      lv: 1,
      q: '<b>求 lim<sub>x→∞</sub> (㏑ x) ÷ x。</b>',
      qEn: '<b>Find lim<sub>x→∞</sub> (ln x) ÷ x.</b>',
      hint: '當 x → ∞ 時分子、分母都趨向 ∞，屬 ∞ ÷ ∞ 型，可用洛必達法則。',
      hintEn: 'As x → ∞ both the numerator and the denominator tend to ∞, so this is of the type ∞ ÷ ∞ and L\'Hôpital\'s rule can be used.',
      answer: { type: 'num', accept: [0, 0.0], display: '0', displayEn: '0' },
      sol: [
        { mk: 'M1', tx: '當 x → ∞ 時，㏑ x → ∞ 且 x → ∞，屬 ∞ ÷ ∞ 型不定式', txEn: 'As x → ∞, ln x → ∞ and x → ∞, so this is an indeterminate form of the type ∞ ÷ ∞' },
        { mk: 'M1', tx: '由洛必達法則：lim(x→∞) (㏑ x) ÷ x = lim(x→∞) (1 ÷ x) ÷ 1', txEn: 'By L\'Hôpital\'s rule: lim(x→∞) (ln x) ÷ x = lim(x→∞) (1 ÷ x) ÷ 1' },
        { mk: 'M1', tx: '= lim(x→∞) 1 ÷ x', txEn: '= lim(x→∞) 1 ÷ x' },
        { mk: 'A1', tx: '當 x → ∞ 時，1 ÷ x → 0', txEn: 'As x → ∞, 1 ÷ x → 0' },
        { mk: 'A1', tx: '故 lim(x→∞) (㏑ x) ÷ x = 0', txEn: 'So lim(x→∞) (ln x) ÷ x = 0' }
      ],
      note: '㏑ x 的增長比任何正次冪 x 都慢；洛必達法則把「增長速度」的比較化成導數之比，是處理這類題的關鍵。',
      noteEn: 'ln x grows more slowly than any positive power of x; L\'Hôpital\'s rule turns the comparison of growth rates into a ratio of derivatives, which is the key to this type of question.'
    },
    {
      id: 'ap29',
      sub: '7.6 洛必達法則',
      lv: 3,
      q: '<b>求 lim<sub>x→0</sub> (x − sin x) ÷ x³。</b>',
      qEn: '<b>Find lim<sub>x→0</sub> (x − sin x) ÷ x³.</b>',
      hint: '屬 0 ÷ 0 型；用一次洛必達法則後仍是 0 ÷ 0 型，須再用一次，並注意 cos 0 = 1。',
      hintEn: 'This is of the type 0 ÷ 0; after applying L\'Hôpital\'s rule once the form is still 0 ÷ 0, so it must be applied again. Note that cos 0 = 1.',
      answer: { type: 'num', accept: [1 / 6, 0.1666667], display: '1 ÷ 6 （≈ 0.167）', displayEn: '1 ÷ 6 (≈ 0.167)' },
      sol: [
        { mk: 'M1', tx: '當 x → 0 時分子、分母皆 → 0，屬 0 ÷ 0 型，可用洛必達法則', txEn: 'As x → 0 both the numerator and the denominator → 0, so this is of the type 0 ÷ 0 and L\'Hôpital\'s rule can be used' },
        { mk: 'M1', tx: '第一次：lim(x→0) (1 − cos x) ÷ (3x²)；代入 x = 0 仍為 0 ÷ 0 型', txEn: 'First application: lim(x→0) (1 − cos x) ÷ (3x²); substituting x = 0 still gives the form 0 ÷ 0' },
        { mk: 'M1', tx: '第二次：lim(x→0) (sin x) ÷ (6x)', txEn: 'Second application: lim(x→0) (sin x) ÷ (6x)' },
        { mk: 'M1', tx: '由基本極限 lim(x→0) (sin x) ÷ x = 1，得 (sin x) ÷ (6x) → 1 ÷ 6', txEn: 'Using the basic limit lim(x→0) (sin x) ÷ x = 1, we get (sin x) ÷ (6x) → 1 ÷ 6' },
        { mk: 'A1', tx: '故原極限 = 1 ÷ 6 ≈ 0.167', txEn: 'So the original limit = 1 ÷ 6 ≈ 0.167' }
      ],
      note: '洛必達法則可連續使用，但每次使用前都要重新確認仍是 0 ÷ 0 或 ∞ ÷ ∞ 型，否則結果必錯。',
      noteEn: 'L\'Hôpital\'s rule may be applied repeatedly, but before each application you must check again that the form is still 0 ÷ 0 or ∞ ÷ ∞, otherwise the result will certainly be wrong.'
    },
    {
      id: 'ap30',
      sub: '7.6 洛必達法則',
      lv: 3,
      q: '<b>求 lim<sub>x→0</sub> (tan x − x) ÷ x³。</b>',
      qEn: '<b>Find lim<sub>x→0</sub> (tan x − x) ÷ x³.</b>',
      hint: '0 ÷ 0 型；tan x 的導數是 sec²x，配合恆等式 sec²x − 1 = tan²x，再用 (tan x) ÷ x → 1。',
      hintEn: 'This is of the type 0 ÷ 0; the derivative of tan x is sec²x. Use the identity sec²x − 1 = tan²x, and then (tan x) ÷ x → 1.',
      answer: { type: 'num', accept: [1 / 3, 0.3333333], display: '1 ÷ 3 （≈ 0.333）', displayEn: '1 ÷ 3 (≈ 0.333)' },
      sol: [
        { mk: 'M1', tx: '當 x → 0 時分子、分母皆 → 0，屬 0 ÷ 0 型，可用洛必達法則', txEn: 'As x → 0 both the numerator and the denominator → 0, so this is of the type 0 ÷ 0 and L\'Hôpital\'s rule can be used' },
        { mk: 'M1', tx: '第一次：lim(x→0) (sec²x − 1) ÷ (3x²)；代入 x = 0 仍為 0 ÷ 0 型', txEn: 'First application: lim(x→0) (sec²x − 1) ÷ (3x²); substituting x = 0 still gives the form 0 ÷ 0' },
        { mk: 'M1', tx: '由恆等式 sec²x − 1 = tan²x，得 lim(x→0) (tan²x) ÷ (3x²)', txEn: 'By the identity sec²x − 1 = tan²x, we get lim(x→0) (tan²x) ÷ (3x²)' },
        { mk: 'M1', tx: '= (1 ÷ 3) × [lim(x→0) (tan x) ÷ x]² = (1 ÷ 3) × 1²', txEn: '= (1 ÷ 3) × [lim(x→0) (tan x) ÷ x]² = (1 ÷ 3) × 1²' },
        { mk: 'A1', tx: '故原極限 = 1 ÷ 3 ≈ 0.333', txEn: 'So the original limit = 1 ÷ 3 ≈ 0.333' }
      ],
      note: '切勿把 sec²x − 1 直接當作 0；必須化成 tan²x 才能與 x² 比較，並用到 (tan x) ÷ x → 1。',
      noteEn: 'Do not treat sec²x − 1 as 0 directly; it must be rewritten as tan²x before it can be compared with x², and then (tan x) ÷ x → 1 is used.'
    }

  ];
})(typeof window !== 'undefined' ? window : globalThis);
