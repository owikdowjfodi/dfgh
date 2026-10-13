/* bank/matrix.js — 矩陣與行列式（30 題）*/
(function (root) {
  var SUB = {
    DEF: '10.1 矩陣的定義、加法與純量乘法',
    MUL: '10.2 矩陣乘法與單位矩陣',
    D2: '10.3 二階行列式與逆矩陣',
    D3: '10.4 三階行列式與逆矩陣',
    PROP: '10.5 行列式的性質',
    APP: '10.6 矩陣的應用（變換與編碼）'
  };
  root.M2Bank = root.M2Bank || {};
  root.M2Bank['matrix'] = [

    /* ═══════ 10.1 矩陣的定義、加法與純量乘法（ma01–ma05）═══════ */
    {
      id: 'ma01',
      sub: SUB.DEF,
      lv: 1,
      q: '設 A = [[2, −1], [3, 4]]，B = [[1, 5], [−2, 0]]。<br><b>求 2A − 3B 的所有元素，依 (1,1)、(1,2)、(2,1)、(2,2) 的次序作答。</b>',
      qEn: 'Let A = [[2, −1], [3, 4]] and B = [[1, 5], [−2, 0]].<br><b>Find all the elements of 2A − 3B, giving them in the order (1,1), (1,2), (2,1), (2,2).</b>',
      hint: '純量乘法是逐項乘以純量；矩陣相減則對應位置的元素相減，注意減去負數時要變號。',
      hintEn: 'Scalar multiplication multiplies every entry by the scalar; for subtraction, subtract the entries in the same positions, and take care with signs when subtracting a negative number.',
      answer: { type: 'numbers', accept: [[1, -17, 12, 8]], display: '2A − 3B = [[1, −17], [12, 8]]', displayEn: '2A − 3B = [[1, −17], [12, 8]]' },
      sol: [
        { mk: 'M1', tx: '純量乘法逐項進行：2A = [[4, −2], [6, 8]]', txEn: 'Perform the scalar multiplication entry by entry: 2A = [[4, −2], [6, 8]]' },
        { mk: 'M1', tx: '3B = [[3, 15], [−6, 0]]', txEn: '3B = [[3, 15], [−6, 0]]' },
        { mk: 'M1', tx: '2A − 3B = [[4 − 3, −2 − 15], [6 − (−6), 8 − 0]]', txEn: '2A − 3B = [[4 − 3, −2 − 15], [6 − (−6), 8 − 0]]' },
        { mk: 'A1', tx: '= [[1, −17], [12, 8]]，即依次為 1、−17、12、8', txEn: '= [[1, −17], [12, 8]], i.e. the entries are 1, −17, 12, 8 in this order' }
      ],
      note: '常見失分：計算 (2,1) 項時寫成 6 − 6 = 0。應為 6 − (−6) = 12，減號要作用於整個純量乘積。',
      noteEn: 'Common loss of marks: writing 6 − 6 = 0 for the (2,1) entry. It should be 6 − (−6) = 12; the minus sign acts on the whole scalar product.'
    },
    {
      id: 'ma02',
      sub: SUB.DEF,
      lv: 1,
      q: '設 A = [[1, 2], [3, 4]]，B = [[0, −1], [2, 5]]，X 為二階矩陣。<br>已知 2X + A = B，<b>求 X 的所有元素，依 (1,1)、(1,2)、(2,1)、(2,2) 的次序作答。</b>',
      qEn: 'Let A = [[1, 2], [3, 4]], B = [[0, −1], [2, 5]] and X be a 2 × 2 matrix.<br>Given that 2X + A = B, <b>find all the elements of X, giving them in the order (1,1), (1,2), (2,1), (2,2).</b>',
      hint: '把 A 移到等號右邊得 2X = B − A，再把整個矩陣逐項除以 2（即乘以 1 ÷ 2）。',
      hintEn: 'Move A to the right-hand side to get 2X = B − A, then divide every entry of the matrix by 2 (that is, multiply by 1 ÷ 2).',
      answer: { type: 'numbers', accept: [[-0.5, -1.5, -0.5, 0.5]], display: 'X = [[−1/2, −3/2], [−1/2, 1/2]]', displayEn: 'X = [[−1/2, −3/2], [−1/2, 1/2]]' },
      sol: [
        { mk: 'M1', tx: '移項得 2X = B − A', txEn: 'Rearranging gives 2X = B − A' },
        { mk: 'M1', tx: 'B − A = [[0 − 1, −1 − 2], [2 − 3, 5 − 4]] = [[−1, −3], [−1, 1]]', txEn: 'B − A = [[0 − 1, −1 − 2], [2 − 3, 5 − 4]] = [[−1, −3], [−1, 1]]' },
        { mk: 'M1', tx: '兩邊乘 1 ÷ 2：X = (1 ÷ 2) × [[−1, −3], [−1, 1]]', txEn: 'Multiply both sides by 1 ÷ 2: X = (1 ÷ 2) × [[−1, −3], [−1, 1]]' },
        { mk: 'A1', tx: 'X = [[−1/2, −3/2], [−1/2, 1/2]]，即依次為 −0.5、−1.5、−0.5、0.5', txEn: 'X = [[−1/2, −3/2], [−1/2, 1/2]], i.e. the entries are −0.5, −1.5, −0.5, 0.5 in this order' }
      ],
      note: '常見失分：只把部分元素除以 2。純量乘法必須作用於矩陣內每一個元素。',
      noteEn: 'Common loss of marks: dividing only some of the entries by 2. Scalar multiplication must be applied to every entry of the matrix.'
    },
    {
      id: 'ma03',
      sub: SUB.DEF,
      lv: 1,
      q: '設 A 為 3 × 2 矩陣，其第 i 行第 j 列的元素為 a(i,j) = 2i − j。<br><b>求 A 的所有元素，依 (1,1)、(1,2)、(2,1)、(2,2)、(3,1)、(3,2) 的次序作答。</b>',
      qEn: 'Let A be a 3 × 2 matrix whose entry in the i-th row and j-th column is a(i,j) = 2i − j.<br><b>Find all the elements of A, giving them in the order (1,1), (1,2), (2,1), (2,2), (3,1), (3,2).</b>',
      hint: 'i 代表行號、j 代表列號，逐一代入 a(i,j) = 2i − j 計算；第 1 行取 i = 1，第 1 列取 j = 1。',
      hintEn: 'i is the row number and j is the column number; substitute into a(i,j) = 2i − j one entry at a time. For the 1st row take i = 1, and for the 1st column take j = 1.',
      answer: { type: 'numbers', accept: [[1, 0, 3, 2, 5, 4]], display: 'A = [[1, 0], [3, 2], [5, 4]]', displayEn: 'A = [[1, 0], [3, 2], [5, 4]]' },
      sol: [
        { mk: 'M1', tx: '第 1 行（i = 1）：a(1,1) = 2 × 1 − 1 = 1，a(1,2) = 2 × 1 − 2 = 0', txEn: '1st row (i = 1): a(1,1) = 2 × 1 − 1 = 1, a(1,2) = 2 × 1 − 2 = 0' },
        { mk: 'M1', tx: '第 2 行（i = 2）：a(2,1) = 2 × 2 − 1 = 3，a(2,2) = 2 × 2 − 2 = 2', txEn: '2nd row (i = 2): a(2,1) = 2 × 2 − 1 = 3, a(2,2) = 2 × 2 − 2 = 2' },
        { mk: 'M1', tx: '第 3 行（i = 3）：a(3,1) = 2 × 3 − 1 = 5，a(3,2) = 2 × 3 − 2 = 4', txEn: '3rd row (i = 3): a(3,1) = 2 × 3 − 1 = 5, a(3,2) = 2 × 3 − 2 = 4' },
        { mk: 'A1', tx: 'A = [[1, 0], [3, 2], [5, 4]]，即依次為 1、0、3、2、5、4', txEn: 'A = [[1, 0], [3, 2], [5, 4]], i.e. the entries are 1, 0, 3, 2, 5, 4 in this order' }
      ],
      note: '常見失分：把 i 當成列號而寫成 a(i,j) = 2j − i。本題以「第 i 行」定義，故第一個下標是行。',
      noteEn: 'Common loss of marks: treating i as the column number and writing a(i,j) = 2j − i. Here the definition uses "the i-th row", so the first subscript is the row.'
    },
    {
      id: 'ma04',
      sub: SUB.DEF,
      lv: 1,
      q: '設 A = [[1, −2], [3, 0]]，B = [[−1, 4], [2, 5]]。<br><b>求 3A − 2B 的主對角線元素之和（即 (1,1) 項與 (2,2) 項之和）。</b>',
      qEn: 'Let A = [[1, −2], [3, 0]] and B = [[−1, 4], [2, 5]].<br><b>Find the sum of the leading-diagonal entries of 3A − 2B (that is, the sum of the (1,1) and (2,2) entries).</b>',
      hint: '先分別算出 3A 與 2B 兩個矩陣，再逐項相減；主對角線指由左上到右下的兩個元素。',
      hintEn: 'First work out the two matrices 3A and 2B, then subtract them entry by entry; the leading diagonal means the two entries from the top-left corner to the bottom-right corner.',
      answer: { type: 'num', accept: [-5, -5.0], display: '−5', displayEn: '−5' },
      sol: [
        { mk: 'M1', tx: '3A = [[3, −6], [9, 0]]', txEn: '3A = [[3, −6], [9, 0]]' },
        { mk: 'M1', tx: '2B = [[−2, 8], [4, 10]]', txEn: '2B = [[−2, 8], [4, 10]]' },
        { mk: 'M1', tx: '3A − 2B = [[3 + 2, −6 − 8], [9 − 4, 0 − 10]] = [[5, −14], [5, −10]]', txEn: '3A − 2B = [[3 + 2, −6 − 8], [9 − 4, 0 − 10]] = [[5, −14], [5, −10]]' },
        { mk: 'A1', tx: '主對角線元素之和 = 5 + (−10) = −5', txEn: 'Sum of the leading-diagonal entries = 5 + (−10) = −5' }
      ],
      note: '常見失分：把 (1,2) 與 (2,1) 的 −14 與 5 也加進去。主對角線只有 (1,1) 與 (2,2) 兩項。',
      noteEn: 'Common loss of marks: including the (1,2) and (2,1) entries −14 and 5 in the sum. The leading diagonal consists of the (1,1) and (2,2) entries only.'
    },
    {
      id: 'ma05',
      sub: SUB.DEF,
      lv: 2,
      q: '設 A = [[2, 1], [−1, 3]]，B = [[0, −2], [4, 1]]。<br><b>化簡 3A − 2(A − B)，並依 (1,1)、(1,2)、(2,1)、(2,2) 的次序寫出結果的元素。</b>',
      qEn: 'Let A = [[2, 1], [−1, 3]] and B = [[0, −2], [4, 1]].<br><b>Simplify 3A − 2(A − B) and write down the entries of the result in the order (1,1), (1,2), (2,1), (2,2).</b>',
      hint: '先用分配律把式子整理成 A + 2B 的形式；展開 −2(A − B) 時，括號內每一項都要乘以 −2。',
      hintEn: 'First use the distributive law to write the expression as A + 2B; when expanding −2(A − B), every entry inside the brackets must be multiplied by −2.',
      answer: { type: 'numbers', accept: [[2, -3, 7, 5]], display: '3A − 2(A − B) = A + 2B = [[2, −3], [7, 5]]', displayEn: '3A − 2(A − B) = A + 2B = [[2, −3], [7, 5]]' },
      sol: [
        { mk: 'M1', tx: '由分配律：3A − 2(A − B) = 3A − 2A + 2B = A + 2B', txEn: 'By the distributive law: 3A − 2(A − B) = 3A − 2A + 2B = A + 2B' },
        { mk: 'M1', tx: '2B = [[0, −4], [8, 2]]', txEn: '2B = [[0, −4], [8, 2]]' },
        { mk: 'M1', tx: 'A + 2B = [[2 + 0, 1 + (−4)], [−1 + 8, 3 + 2]]', txEn: 'A + 2B = [[2 + 0, 1 + (−4)], [−1 + 8, 3 + 2]]' },
        { mk: 'A1', tx: '= [[2, −3], [7, 5]]，即依次為 2、−3、7、5', txEn: '= [[2, −3], [7, 5]], i.e. the entries are 2, −3, 7, 5 in this order' }
      ],
      note: '常見失分：忘記 −2 × (−B) = +2B，把結果寫成 3A − 2A − 2B = A − 2B。符號是本題關鍵。',
      noteEn: 'Common loss of marks: forgetting that −2 × (−B) = +2B and writing the result as 3A − 2A − 2B = A − 2B. Signs are the key point of this question.'
    },

    /* ═══════ 10.2 矩陣乘法與單位矩陣（ma06–ma10）═══════ */
    {
      id: 'ma06',
      sub: SUB.MUL,
      lv: 1,
      q: '設 A = [[1, 2], [3, 4]]，B = [[2, 0], [1, 3]]。<br><b>求 AB 的元素，依 (1,1)、(1,2)、(2,1)、(2,2) 的次序作答。</b>',
      qEn: 'Let A = [[1, 2], [3, 4]] and B = [[2, 0], [1, 3]].<br><b>Find the elements of AB, giving them in the order (1,1), (1,2), (2,1), (2,2).</b>',
      hint: '(AB) 第 i 行第 j 列等於「A 的第 i 行」與「B 的第 j 列」對應元素乘積之和。',
      hintEn: 'The (i,j) entry of AB is the sum of the products of the corresponding entries of "the i-th row of A" and "the j-th column of B".',
      answer: { type: 'numbers', accept: [[4, 6, 10, 12]], display: 'AB = [[4, 6], [10, 12]]', displayEn: 'AB = [[4, 6], [10, 12]]' },
      sol: [
        { mk: 'M1', tx: 'A 的第 1 行取 [[1, 2]]，與 B 的第 1 列 [[2], [1]] 相乘：1 × 2 + 2 × 1 = 4', txEn: 'Take the 1st row of A, [[1, 2]], and the 1st column of B, [[2], [1]]: 1 × 2 + 2 × 1 = 4' },
        { mk: 'M1', tx: '與 B 的第 2 列 [[0], [3]] 相乘：1 × 0 + 2 × 3 = 6', txEn: 'With the 2nd column of B, [[0], [3]]: 1 × 0 + 2 × 3 = 6' },
        { mk: 'M1', tx: 'A 的第 2 行取 [[3, 4]]：3 × 2 + 4 × 1 = 10，3 × 0 + 4 × 3 = 12', txEn: 'Take the 2nd row of A, [[3, 4]]: 3 × 2 + 4 × 1 = 10 and 3 × 0 + 4 × 3 = 12' },
        { mk: 'A1', tx: 'AB = [[4, 6], [10, 12]]，即依次為 4、6、10、12', txEn: 'AB = [[4, 6], [10, 12]], i.e. the entries are 4, 6, 10, 12 in this order' }
      ],
      note: '常見失分：把對應位置的元素直接相乘（寫成 [[2, 0], [3, 12]]）。矩陣乘法必須「列乘行」再求和。',
      noteEn: 'Common loss of marks: multiplying entries in the same positions directly (writing [[2, 0], [3, 12]]). Matrix multiplication must be done "row times column" and then added.'
    },
    {
      id: 'ma07',
      sub: SUB.MUL,
      lv: 2,
      q: '設 A = [[1, 1], [0, 1]]，B = [[1, 0], [1, 1]]。<br><b>求 AB − BA 的元素，依 (1,1)、(1,2)、(2,1)、(2,2) 的次序作答。</b>',
      qEn: 'Let A = [[1, 1], [0, 1]] and B = [[1, 0], [1, 1]].<br><b>Find the elements of AB − BA, giving them in the order (1,1), (1,2), (2,1), (2,2).</b>',
      hint: 'AB 與 BA 要各自按「列乘行」計算，不可假設兩者相等；求出兩個乘積後再逐項相減。',
      hintEn: 'AB and BA must each be found by "row times column", and they must not be assumed equal; work out the two products and then subtract them entry by entry.',
      answer: { type: 'numbers', accept: [[1, 0, 0, -1]], display: 'AB − BA = [[1, 0], [0, −1]]', displayEn: 'AB − BA = [[1, 0], [0, −1]]' },
      sol: [
        { mk: 'M1', tx: 'AB = [[1 × 1 + 1 × 1, 1 × 0 + 1 × 1], [0 × 1 + 1 × 1, 0 × 0 + 1 × 1]] = [[2, 1], [1, 1]]', txEn: 'AB = [[1 × 1 + 1 × 1, 1 × 0 + 1 × 1], [0 × 1 + 1 × 1, 0 × 0 + 1 × 1]] = [[2, 1], [1, 1]]' },
        { mk: 'M1', tx: 'BA = [[1 × 1 + 0 × 0, 1 × 1 + 0 × 1], [1 × 1 + 1 × 0, 1 × 1 + 1 × 1]] = [[1, 1], [1, 2]]', txEn: 'BA = [[1 × 1 + 0 × 0, 1 × 1 + 0 × 1], [1 × 1 + 1 × 0, 1 × 1 + 1 × 1]] = [[1, 1], [1, 2]]' },
        { mk: 'M1', tx: 'AB − BA = [[2 − 1, 1 − 1], [1 − 1, 1 − 2]]', txEn: 'AB − BA = [[2 − 1, 1 − 1], [1 − 1, 1 − 2]]' },
        { mk: 'A1', tx: '= [[1, 0], [0, −1]]，即依次為 1、0、0、−1', txEn: '= [[1, 0], [0, −1]], i.e. the entries are 1, 0, 0, −1 in this order' }
      ],
      note: '本題說明矩陣乘法不滿足交換律：AB 一般不等於 BA，所以 AB − BA 通常不是零矩陣。',
      noteEn: 'This question shows that matrix multiplication is not commutative: AB is not generally equal to BA, so AB − BA is usually not the zero matrix.'
    },
    {
      id: 'ma08',
      sub: SUB.MUL,
      lv: 2,
      q: '設 A = [[3, −1], [−2, 1]]，I 為二階單位矩陣。<br><b>求 A² − 4A + I 的元素，依 (1,1)、(1,2)、(2,1)、(2,2) 的次序作答。</b>',
      qEn: 'Let A = [[3, −1], [−2, 1]] and I be the 2 × 2 identity matrix.<br><b>Find the elements of A² − 4A + I, giving them in the order (1,1), (1,2), (2,1), (2,2).</b>',
      hint: 'A² 就是 A × A，不可把每個元素平方；4A 才是逐項乘 4，而 I = [[1, 0], [0, 1]]。',
      hintEn: 'A² means A × A, so the entries must not be squared individually; 4A means multiplying every entry by 4, and I = [[1, 0], [0, 1]].',
      answer: { type: 'numbers', accept: [[0, 0, 0, 0]], display: 'A² − 4A + I = [[0, 0], [0, 0]]（零矩陣）', displayEn: 'A² − 4A + I = [[0, 0], [0, 0]]  (the zero matrix)' },
      sol: [
        { mk: 'M1', tx: 'A² = A × A = [[9 + 2, −3 − 1], [−6 − 2, 2 + 1]] = [[11, −4], [−8, 3]]', txEn: 'A² = A × A = [[9 + 2, −3 − 1], [−6 − 2, 2 + 1]] = [[11, −4], [−8, 3]]' },
        { mk: 'M1', tx: '4A = [[12, −4], [−8, 4]]，而 I = [[1, 0], [0, 1]]', txEn: '4A = [[12, −4], [−8, 4]] and I = [[1, 0], [0, 1]]' },
        { mk: 'M1', tx: 'A² − 4A + I = [[11 − 12 + 1, −4 + 4 + 0], [−8 + 8 + 0, 3 − 4 + 1]]', txEn: 'A² − 4A + I = [[11 − 12 + 1, −4 + 4 + 0], [−8 + 8 + 0, 3 − 4 + 1]]' },
        { mk: 'A1', tx: '= [[0, 0], [0, 0]]，即 A² = 4A − I，四個元素依次為 0、0、0、0', txEn: '= [[0, 0], [0, 0]], i.e. A² = 4A − I; the four entries are 0, 0, 0, 0 in this order' }
      ],
      note: '常見失分：把 A² 寫成 [[9, 1], [4, 1]]（逐個元素平方）。A² 必須用矩陣乘法計算。',
      noteEn: 'Common loss of marks: writing A² as [[9, 1], [4, 1]] (squaring each entry individually). A² must be found by matrix multiplication.'
    },
    {
      id: 'ma09',
      sub: SUB.MUL,
      lv: 2,
      q: '設 A = [[1, 2, 3], [4, 5, 6]]，B = [[1, 0], [0, 1], [1, 1]]。<br><b>求 AB 的元素，依 (1,1)、(1,2)、(2,1)、(2,2) 的次序作答。</b>',
      qEn: 'Let A = [[1, 2, 3], [4, 5, 6]] and B = [[1, 0], [0, 1], [1, 1]].<br><b>Find the elements of AB, giving them in the order (1,1), (1,2), (2,1), (2,2).</b>',
      hint: '先檢查 A 的列數與 B 的行數是否相同，以決定 AB 的階數，再按「列乘行」逐格計算。',
      hintEn: 'First check whether the number of columns of A equals the number of rows of B in order to determine the order of AB, then compute entry by entry using "row times column".',
      answer: { type: 'numbers', accept: [[4, 5, 10, 11]], display: 'AB = [[4, 5], [10, 11]]', displayEn: 'AB = [[4, 5], [10, 11]]' },
      sol: [
        { mk: 'M1', tx: 'A 是 2 × 3 矩陣，B 是 3 × 2 矩陣，列數與行數相同故可相乘，且 AB 為 2 × 2', txEn: 'A is a 2 × 3 matrix and B is a 3 × 2 matrix; the numbers of columns and rows agree, so AB exists and is a 2 × 2 matrix' },
        { mk: 'M1', tx: 'AB 第 1 行：1 × 1 + 2 × 0 + 3 × 1 = 4；1 × 0 + 2 × 1 + 3 × 1 = 5', txEn: '1st row of AB: 1 × 1 + 2 × 0 + 3 × 1 = 4; 1 × 0 + 2 × 1 + 3 × 1 = 5' },
        { mk: 'M1', tx: 'AB 第 2 行：4 × 1 + 5 × 0 + 6 × 1 = 10；4 × 0 + 5 × 1 + 6 × 1 = 11', txEn: '2nd row of AB: 4 × 1 + 5 × 0 + 6 × 1 = 10; 4 × 0 + 5 × 1 + 6 × 1 = 11' },
        { mk: 'A1', tx: 'AB = [[4, 5], [10, 11]]，即依次為 4、5、10、11', txEn: 'AB = [[4, 5], [10, 11]], i.e. the entries are 4, 5, 10, 11 in this order' }
      ],
      note: '注意 BA 是 3 × 3 矩陣，與 AB 的階數不同，兩者不可混為一談。',
      noteEn: 'Note that BA is a 3 × 3 matrix, which has a different order from AB; the two must not be confused.'
    },
    {
      id: 'ma10',
      sub: SUB.MUL,
      lv: 3,
      q: '設 A = [[1, 2], [3, 4]]，X = [[x], [y]]，且 AX = [[5], [11]]。<br><b>求 x 與 y，依 x、y 的次序作答。</b>',
      qEn: 'Let A = [[1, 2], [3, 4]] and X = [[x], [y]], where AX = [[5], [11]].<br><b>Find x and y, giving them in the order x, y.</b>',
      hint: '按矩陣乘法把 AX 展開成一個 2 × 1 矩陣，令它等於 [[5], [11]]，即得關於 x、y 的二元一次方程組。',
      hintEn: 'Use matrix multiplication to expand AX into a 2 × 1 matrix, set it equal to [[5], [11]], and a system of two linear equations in x and y is obtained.',
      answer: { type: 'numbers', accept: [[1, 2]], display: 'x = 1，y = 2', displayEn: 'x = 1, y = 2' },
      sol: [
        { mk: 'M1', tx: 'AX = [[1 × x + 2 × y], [3 × x + 4 × y]] = [[x + 2y], [3x + 4y]]', txEn: 'AX = [[1 × x + 2 × y], [3 × x + 4 × y]] = [[x + 2y], [3x + 4y]]' },
        { mk: 'M1', tx: '由 AX = [[5], [11]] 得方程組 x + 2y = 5 及 3x + 4y = 11', txEn: 'From AX = [[5], [11]] we obtain the system x + 2y = 5 and 3x + 4y = 11' },
        { mk: 'M1', tx: '第一式乘 3：(3x + 6y) − (3x + 4y) = 15 − 11，即 2y = 4', txEn: 'Multiply the first equation by 3: (3x + 6y) − (3x + 4y) = 15 − 11, i.e. 2y = 4' },
        { mk: 'A1', tx: 'y = 2，代回得 x = 5 − 2 × 2 = 1；故 x = 1、y = 2', txEn: 'y = 2; substituting back gives x = 5 − 2 × 2 = 1. Hence x = 1 and y = 2.' }
      ],
      note: '常見失分：把 AX 當作對應元素相乘，直接寫 x = 5、4y = 11。矩陣乘積一定要先展開成方程組。',
      noteEn: 'Common loss of marks: treating AX as entry-by-entry multiplication and writing x = 5, 4y = 11 directly. A matrix product must first be expanded into a system of equations.'
    },

    /* ═══════ 10.3 二階行列式與逆矩陣（ma11–ma15）═══════ */
    {
      id: 'ma11',
      sub: SUB.D2,
      lv: 1,
      q: '設 A = [[3, 4], [2, 5]]。<br><b>求 det A 的值。</b>',
      qEn: 'Let A = [[3, 4], [2, 5]].<br><b>Find the value of det A.</b>',
      hint: '二階行列式 det [[a, b], [c, d]] = ad − bc，即主對角線乘積減副對角線乘積。',
      hintEn: 'For a 2 × 2 determinant, det [[a, b], [c, d]] = ad − bc, i.e. the product along the leading diagonal minus the product along the other diagonal.',
      answer: { type: 'num', accept: [7, 7.0], display: 'det A = 7', displayEn: 'det A = 7' },
      sol: [
        { mk: 'M1', tx: '對 A = [[a, b], [c, d]]，det A = ad − bc', txEn: 'For A = [[a, b], [c, d]], det A = ad − bc' },
        { mk: 'M1', tx: '代入 a = 3、b = 4、c = 2、d = 5：det A = 3 × 5 − 4 × 2', txEn: 'Put a = 3, b = 4, c = 2 and d = 5: det A = 3 × 5 − 4 × 2' },
        { mk: 'A1', tx: '= 15 − 8 = 7', txEn: '= 15 − 8 = 7' },
        { mk: 'A1', tx: '因 det A = 7 ≠ 0，A 可逆（非奇異矩陣）', txEn: 'Since det A = 7 ≠ 0, A is invertible (non-singular)' }
      ],
      note: '常見失分：寫成 4 × 2 − 3 × 5 = −7，即把主、副對角線的次序顛倒。',
      noteEn: 'Common loss of marks: writing 4 × 2 − 3 × 5 = −7, i.e. reversing the order of the leading and other diagonals.'
    },
    {
      id: 'ma12',
      sub: SUB.D2,
      lv: 2,
      q: '設 A = [[k, 2], [3, k + 1]]。<br><b>求所有使 A 為奇異矩陣（即不可逆）的 k 值，並以小至大的次序作答。</b>',
      qEn: 'Let A = [[k, 2], [3, k + 1]].<br><b>Find all values of k for which A is a singular matrix (that is, not invertible), giving them in ascending order.</b>',
      hint: '矩陣不可逆的充要條件是 det A = 0；先寫出 det A 這個關於 k 的二次式，再解方程。',
      hintEn: 'A matrix is not invertible if and only if det A = 0; first write down det A as a quadratic expression in k, then solve the equation.',
      answer: { type: 'numbers', accept: [[-3, 2]], display: 'k = −3 或 k = 2', displayEn: 'k = −3 or k = 2' },
      sol: [
        { mk: 'M1', tx: 'A 不可逆 ⇔ det A = 0，其中 det A = k(k + 1) − 2 × 3', txEn: 'A is not invertible ⇔ det A = 0, where det A = k(k + 1) − 2 × 3' },
        { mk: 'M1', tx: 'det A = k² + k − 6 = (k + 3)(k − 2)', txEn: 'det A = k² + k − 6 = (k + 3)(k − 2)' },
        { mk: 'M1', tx: '解 (k + 3)(k − 2) = 0', txEn: 'Solve (k + 3)(k − 2) = 0' },
        { mk: 'A1', tx: '得 k = −3 或 k = 2（以小至大次序：−3、2）', txEn: 'This gives k = −3 or k = 2 (in ascending order: −3, 2)' }
      ],
      note: '常見失分：只寫出一個根。二次方程一般有兩個根，題目要求「所有」k 值時必須兩個都寫。',
      noteEn: 'Common loss of marks: giving only one root. A quadratic equation generally has two roots, so both must be given when the question asks for "all" values of k.'
    },
    {
      id: 'ma13',
      sub: SUB.D2,
      lv: 1,
      q: '設 A = [[4, 3], [5, 4]]。<br><b>求 A⁻¹ 的元素，依 (1,1)、(1,2)、(2,1)、(2,2) 的次序作答。</b>',
      qEn: 'Let A = [[4, 3], [5, 4]].<br><b>Find the elements of A⁻¹, giving them in the order (1,1), (1,2), (2,1), (2,2).</b>',
      hint: '先算 det A；若 det A ≠ 0，則 A⁻¹ = (1 ÷ det A) × [[d, −b], [−c, a]]，注意副對角線元素要變號。',
      hintEn: 'First find det A; if det A ≠ 0, then A⁻¹ = (1 ÷ det A) × [[d, −b], [−c, a]]. Note that the entries off the leading diagonal must change sign.',
      answer: { type: 'numbers', accept: [[4, -3, -5, 4]], display: 'A⁻¹ = [[4, −3], [−5, 4]]', displayEn: 'A⁻¹ = [[4, −3], [−5, 4]]' },
      sol: [
        { mk: 'M1', tx: 'det A = 4 × 4 − 3 × 5 = 1 ≠ 0，故 A 可逆', txEn: 'det A = 4 × 4 − 3 × 5 = 1 ≠ 0, so A is invertible' },
        { mk: 'M1', tx: '對 A = [[a, b], [c, d]]，A⁻¹ = (1 ÷ det A) × [[d, −b], [−c, a]]', txEn: 'For A = [[a, b], [c, d]], A⁻¹ = (1 ÷ det A) × [[d, −b], [−c, a]]' },
        { mk: 'M1', tx: 'A⁻¹ = (1 ÷ 1) × [[4, −3], [−5, 4]]', txEn: 'A⁻¹ = (1 ÷ 1) × [[4, −3], [−5, 4]]' },
        { mk: 'A1', tx: 'A⁻¹ = [[4, −3], [−5, 4]]，即依次為 4、−3、−5、4', txEn: 'A⁻¹ = [[4, −3], [−5, 4]], i.e. the entries are 4, −3, −5, 4 in this order' }
      ],
      note: '驗算方法：把 A 與 A⁻¹ 相乘應得單位矩陣 I。若得 [[1, 0], [0, 1]] 即答案正確。',
      noteEn: 'Checking method: multiplying A by A⁻¹ should give the identity matrix I. If the result is [[1, 0], [0, 1]], the answer is correct.'
    },
    {
      id: 'ma14',
      sub: SUB.D2,
      lv: 1,
      q: '設 A = [[4, 2], [3, 2]]。<br><b>求 A⁻¹ 的元素，依 (1,1)、(1,2)、(2,1)、(2,2) 的次序作答，非整數部分可用分數或小數表示。</b>',
      qEn: 'Let A = [[4, 2], [3, 2]].<br><b>Find the elements of A⁻¹, giving them in the order (1,1), (1,2), (2,1), (2,2); non-integer entries may be given as fractions or decimals.</b>',
      hint: 'det A 是 2，所以最後要把伴隨矩陣的每一個元素都除以 2（乘 1 ÷ 2）。',
      hintEn: 'det A is 2, so every entry of the adjoint matrix must finally be divided by 2 (multiplied by 1 ÷ 2).',
      answer: { type: 'numbers', accept: [[1, -1, -1.5, 2]], display: 'A⁻¹ = [[1, −1], [−3/2, 2]]', displayEn: 'A⁻¹ = [[1, −1], [−3/2, 2]]' },
      sol: [
        { mk: 'M1', tx: 'det A = 4 × 2 − 2 × 3 = 8 − 6 = 2 ≠ 0，故 A 可逆', txEn: 'det A = 4 × 2 − 2 × 3 = 8 − 6 = 2 ≠ 0, so A is invertible' },
        { mk: 'M1', tx: 'A⁻¹ = (1 ÷ det A) × [[d, −b], [−c, a]] = (1 ÷ 2) × [[2, −2], [−3, 4]]', txEn: 'A⁻¹ = (1 ÷ det A) × [[d, −b], [−c, a]] = (1 ÷ 2) × [[2, −2], [−3, 4]]' },
        { mk: 'M1', tx: '逐項乘以 1 ÷ 2：[[2 ÷ 2, −2 ÷ 2], [−3 ÷ 2, 4 ÷ 2]]', txEn: 'Multiply every entry by 1 ÷ 2: [[2 ÷ 2, −2 ÷ 2], [−3 ÷ 2, 4 ÷ 2]]' },
        { mk: 'A1', tx: 'A⁻¹ = [[1, −1], [−3/2, 2]]，即依次為 1、−1、−1.5、2', txEn: 'A⁻¹ = [[1, −1], [−3/2, 2]], i.e. the entries are 1, −1, −1.5, 2 in this order' }
      ],
      note: '常見失分：只把第一個元素除以 det A。純量 1 ÷ det A 必須乘到矩陣內全部四個元素。',
      noteEn: 'Common loss of marks: dividing only the first entry by det A. The scalar 1 ÷ det A must multiply all four entries of the matrix.'
    },
    {
      id: 'ma15',
      sub: SUB.D2,
      lv: 2,
      q: '設 A = [[2, 1], [5, 3]]，B = [[1, 1], [2, 3]]。<br><b>求 (AB)⁻¹ 的元素，依 (1,1)、(1,2)、(2,1)、(2,2) 的次序作答。</b>',
      qEn: 'Let A = [[2, 1], [5, 3]] and B = [[1, 1], [2, 3]].<br><b>Find the elements of (AB)⁻¹, giving them in the order (1,1), (1,2), (2,1), (2,2).</b>',
      hint: '先算出乘積 AB，再用二階逆矩陣公式求其逆；亦可用 (AB)⁻¹ = B⁻¹A⁻¹ 驗算。',
      hintEn: 'First work out the product AB, then find its inverse using the 2 × 2 inverse formula; (AB)⁻¹ = B⁻¹A⁻¹ may also be used to check the answer.',
      answer: { type: 'numbers', accept: [[14, -5, -11, 4]], display: '(AB)⁻¹ = [[14, −5], [−11, 4]]', displayEn: '(AB)⁻¹ = [[14, −5], [−11, 4]]' },
      sol: [
        { mk: 'M1', tx: 'AB = [[2 × 1 + 1 × 2, 2 × 1 + 1 × 3], [5 × 1 + 3 × 2, 5 × 1 + 3 × 3]] = [[4, 5], [11, 14]]', txEn: 'AB = [[2 × 1 + 1 × 2, 2 × 1 + 1 × 3], [5 × 1 + 3 × 2, 5 × 1 + 3 × 3]] = [[4, 5], [11, 14]]' },
        { mk: 'M1', tx: 'det(AB) = 4 × 14 − 5 × 11 = 56 − 55 = 1 ≠ 0', txEn: 'det(AB) = 4 × 14 − 5 × 11 = 56 − 55 = 1 ≠ 0' },
        { mk: 'M1', tx: '(AB)⁻¹ = (1 ÷ 1) × [[14, −5], [−11, 4]]', txEn: '(AB)⁻¹ = (1 ÷ 1) × [[14, −5], [−11, 4]]' },
        { mk: 'A1', tx: '(AB)⁻¹ = [[14, −5], [−11, 4]]，即依次為 14、−5、−11、4', txEn: '(AB)⁻¹ = [[14, −5], [−11, 4]], i.e. the entries are 14, −5, −11, 4 in this order' }
      ],
      note: '常見失分：以為 (AB)⁻¹ = A⁻¹B⁻¹。正確次序是 (AB)⁻¹ = B⁻¹A⁻¹，矩陣乘法的次序要反轉。',
      noteEn: 'Common loss of marks: assuming (AB)⁻¹ = A⁻¹B⁻¹. The correct order is (AB)⁻¹ = B⁻¹A⁻¹; the order of the matrix product must be reversed.'
    },

    /* ═══════ 10.4 三階行列式與逆矩陣（ma16–ma20）═══════ */
    {
      id: 'ma16',
      sub: SUB.D3,
      lv: 2,
      q: '設 A = [[1, 2, 3], [0, 1, 4], [5, 6, 0]]。<br><b>求 det A 的值。</b>',
      qEn: 'Let A = [[1, 2, 3], [0, 1, 4], [5, 6, 0]].<br><b>Find the value of det A.</b>',
      hint: '沿第 1 行展開：各項為元素乘以對應的 2 × 2 餘子式，符號依次為 +、−、+。',
      hintEn: 'Expand along the 1st row: each term is an entry multiplied by the corresponding 2 × 2 minor, with signs +, −, + in that order.',
      answer: { type: 'num', accept: [1, 1.0], display: 'det A = 1', displayEn: 'det A = 1' },
      sol: [
        { mk: 'M1', tx: '沿第 1 行展開：det A = 1 × det[[1, 4], [6, 0]] − 2 × det[[0, 4], [5, 0]] + 3 × det[[0, 1], [5, 6]]', txEn: 'Expand along the 1st row: det A = 1 × det[[1, 4], [6, 0]] − 2 × det[[0, 4], [5, 0]] + 3 × det[[0, 1], [5, 6]]' },
        { mk: 'M1', tx: '= 1 × (1 × 0 − 4 × 6) − 2 × (0 × 0 − 4 × 5) + 3 × (0 × 6 − 1 × 5)', txEn: '= 1 × (1 × 0 − 4 × 6) − 2 × (0 × 0 − 4 × 5) + 3 × (0 × 6 − 1 × 5)' },
        { mk: 'M1', tx: '= 1 × (−24) − 2 × (−20) + 3 × (−5) = −24 + 40 − 15', txEn: '= 1 × (−24) − 2 × (−20) + 3 × (−5) = −24 + 40 − 15' },
        { mk: 'A1', tx: 'det A = 1（因 det A ≠ 0，A 可逆）', txEn: 'det A = 1 (since det A ≠ 0, A is invertible)' }
      ],
      note: '常見失分：第二項忘記變號。三階展開的符號規律是 + − +，全部取正號會得到完全不同的結果。',
      noteEn: 'Common loss of marks: forgetting the minus sign in the second term. The sign pattern for a 3 × 3 expansion is + − +; taking all signs as positive gives a completely different result.'
    },
    {
      id: 'ma17',
      sub: SUB.D3,
      lv: 2,
      q: '設 B = [[2, 1, 3], [1, 0, 2], [3, 2, 1]]。<br><b>求 det B 的值。</b>',
      qEn: 'Let B = [[2, 1, 3], [1, 0, 2], [3, 2, 1]].<br><b>Find the value of det B.</b>',
      hint: '同樣沿第 1 行展開；計算每個 2 × 2 餘子式時，先把該元素所在的行與列劃去。',
      hintEn: 'Again expand along the 1st row; when finding each 2 × 2 minor, first cross out the row and the column containing that entry.',
      answer: { type: 'num', accept: [3, 3.0], display: 'det B = 3', displayEn: 'det B = 3' },
      sol: [
        { mk: 'M1', tx: '沿第 1 行展開：det B = 2 × det[[0, 2], [2, 1]] − 1 × det[[1, 2], [3, 1]] + 3 × det[[1, 0], [3, 2]]', txEn: 'Expand along the 1st row: det B = 2 × det[[0, 2], [2, 1]] − 1 × det[[1, 2], [3, 1]] + 3 × det[[1, 0], [3, 2]]' },
        { mk: 'M1', tx: '= 2 × (0 × 1 − 2 × 2) − 1 × (1 × 1 − 2 × 3) + 3 × (1 × 2 − 0 × 3)', txEn: '= 2 × (0 × 1 − 2 × 2) − 1 × (1 × 1 − 2 × 3) + 3 × (1 × 2 − 0 × 3)' },
        { mk: 'M1', tx: '= 2 × (−4) − 1 × (−5) + 3 × 2 = −8 + 5 + 6', txEn: '= 2 × (−4) − 1 × (−5) + 3 × 2 = −8 + 5 + 6' },
        { mk: 'A1', tx: 'det B = 3（因 det B ≠ 0，B 可逆）', txEn: 'det B = 3 (since det B ≠ 0, B is invertible)' }
      ],
      note: '常見失分：處理第二項時把 −1 × (−5) 算成 −5。展開式的負號與餘子式本身的負號要一起處理。',
      noteEn: 'Common loss of marks: treating −1 × (−5) as −5 in the second term. The minus sign of the expansion and the minus sign of the minor itself must be handled together.'
    },
    {
      id: 'ma18',
      sub: SUB.D3,
      lv: 3,
      q: '設 A = [[2, 1, 1], [1, 2, 1], [1, 1, 2]]。<br><b>求 A⁻¹ 的元素，依 (1,1)、(1,2)、(1,3)、(2,1)、(2,2)、(2,3)、(3,1)、(3,2)、(3,3) 的次序作答。</b>',
      qEn: 'Let A = [[2, 1, 1], [1, 2, 1], [1, 1, 2]].<br><b>Find the elements of A⁻¹, giving them in the order (1,1), (1,2), (1,3), (2,1), (2,2), (2,3), (3,1), (3,2), (3,3).</b>',
      hint: '先求 det A，再逐一算出九個餘因子（帶符號的餘子式）組成餘因子矩陣，轉置後得伴隨矩陣，最後整體除以 det A。',
      hintEn: 'First find det A, then work out the nine cofactors to form the cofactor matrix, transpose it to obtain the adjoint matrix, and finally divide the whole matrix by det A.',
      answer: { type: 'numbers', accept: [[0.75, -0.25, -0.25, -0.25, 0.75, -0.25, -0.25, -0.25, 0.75]], display: 'A⁻¹ = [[3/4, −1/4, −1/4], [−1/4, 3/4, −1/4], [−1/4, −1/4, 3/4]]', displayEn: 'A⁻¹ = [[3/4, −1/4, −1/4], [−1/4, 3/4, −1/4], [−1/4, −1/4, 3/4]]' },
      sol: [
        { mk: 'M1', tx: 'det A = 2 × (2 × 2 − 1 × 1) − 1 × (1 × 2 − 1 × 1) + 1 × (1 × 1 − 2 × 1) = 6 − 1 − 1 = 4', txEn: 'det A = 2 × (2 × 2 − 1 × 1) − 1 × (1 × 2 − 1 × 1) + 1 × (1 × 1 − 2 × 1) = 6 − 1 − 1 = 4' },
        { mk: 'M1', tx: '各餘因子：C11 = 3、C12 = −1、C13 = −1、C21 = −1、C22 = 3、C23 = −1、C31 = −1、C32 = −1、C33 = 3', txEn: 'The cofactors are C11 = 3, C12 = −1, C13 = −1, C21 = −1, C22 = 3, C23 = −1, C31 = −1, C32 = −1, C33 = 3' },
        { mk: 'M1', tx: 'A⁻¹ = (1 ÷ 4) × adj A，其中 adj A 為餘因子矩陣的轉置 = [[3, −1, −1], [−1, 3, −1], [−1, −1, 3]]', txEn: 'A⁻¹ = (1 ÷ 4) × adj A, where adj A is the transpose of the matrix of cofactors = [[3, −1, −1], [−1, 3, −1], [−1, −1, 3]]' },
        { mk: 'A1', tx: 'A⁻¹ = [[3/4, −1/4, −1/4], [−1/4, 3/4, −1/4], [−1/4, −1/4, 3/4]]，即依次為 0.75、−0.25、−0.25、−0.25、0.75、−0.25、−0.25、−0.25、0.75', txEn: 'A⁻¹ = [[3/4, −1/4, −1/4], [−1/4, 3/4, −1/4], [−1/4, −1/4, 3/4]], i.e. the entries are 0.75, −0.25, −0.25, −0.25, 0.75, −0.25, −0.25, −0.25, 0.75 in this order' }
      ],
      note: '常見失分：把餘因子矩陣直接當作伴隨矩陣。必須轉置（行與列對調）後才可除以 det A。',
      noteEn: 'Common loss of marks: taking the matrix of cofactors directly as the adjoint matrix. It must be transposed (rows and columns interchanged) before dividing by det A.'
    },
    {
      id: 'ma19',
      sub: SUB.D3,
      lv: 3,
      q: '考慮方程組 x + y + z = 6、2x − y + z = 3、x + 2y − z = 2。<br><b>以矩陣方法求 x、y、z，依 x、y、z 的次序作答。</b>',
      qEn: 'Consider the system x + y + z = 6, 2x − y + z = 3, x + 2y − z = 2.<br><b>Use a matrix method to find x, y and z, giving them in the order x, y, z.</b>',
      hint: '把方程組寫成 AX = B，其中 A 是係數矩陣、B 是常數行；再求 X = A⁻¹B（先確認 det A ≠ 0）。',
      hintEn: 'Write the system as AX = B, where A is the coefficient matrix and B is the constant column; then find X = A⁻¹B (first check that det A ≠ 0).',
      answer: { type: 'numbers', accept: [[1, 2, 3]], display: 'x = 1，y = 2，z = 3', displayEn: 'x = 1, y = 2, z = 3' },
      sol: [
        { mk: 'M1', tx: '寫成 AX = B：A = [[1, 1, 1], [2, −1, 1], [1, 2, −1]]，B = [[6], [3], [2]]', txEn: 'Write it as AX = B: A = [[1, 1, 1], [2, −1, 1], [1, 2, −1]] and B = [[6], [3], [2]]' },
        { mk: 'M1', tx: 'det A = 1 × (1 − 2) − 1 × (−3) + 1 × 5 = −1 + 3 + 5 = 7 ≠ 0，故解唯一', txEn: 'det A = 1 × (1 − 2) − 1 × (−3) + 1 × 5 = −1 + 3 + 5 = 7 ≠ 0, so the solution is unique' },
        { mk: 'M1', tx: 'A⁻¹ = (1 ÷ 7) × [[−1, 3, 2], [3, −2, 1], [5, −1, −3]]', txEn: 'A⁻¹ = (1 ÷ 7) × [[−1, 3, 2], [3, −2, 1], [5, −1, −3]]' },
        { mk: 'A1', tx: 'X = A⁻¹B = (1 ÷ 7) × [[7], [14], [21]] = [[1], [2], [3]]，故 x = 1、y = 2、z = 3', txEn: 'X = A⁻¹B = (1 ÷ 7) × [[7], [14], [21]] = [[1], [2], [3]], so x = 1, y = 2 and z = 3' }
      ],
      note: '求出答案後應代回原方程組驗算：1 + 2 + 3 = 6、2 − 2 + 3 = 3、1 + 4 − 3 = 2，三式均成立。',
      noteEn: 'After finding the answer, substitute it back into the original system to check: 1 + 2 + 3 = 6, 2 − 2 + 3 = 3 and 1 + 4 − 3 = 2 all hold.'
    },
    {
      id: 'ma20',
      sub: SUB.D3,
      lv: 3,
      q: '設 C = [[1, 2, 4], [1, 3, 9], [1, 4, 16]]。<br><b>求 det C 的值。</b>',
      qEn: 'Let C = [[1, 2, 4], [1, 3, 9], [1, 4, 16]].<br><b>Find the value of det C.</b>',
      hint: '沿第 1 行展開即可；這個矩陣的每一行都是 1、t、t² 的形式（t = 2、3、4），可聯想到范德蒙行列式。',
      hintEn: 'Expanding along the 1st row is enough; each row of this matrix has the form 1, t, t² (with t = 2, 3, 4), which suggests a Vandermonde determinant.',
      answer: { type: 'num', accept: [2, 2.0], display: 'det C = 2', displayEn: 'det C = 2' },
      sol: [
        { mk: 'M1', tx: '沿第 1 行展開：det C = 1 × det[[3, 9], [4, 16]] − 2 × det[[1, 9], [1, 16]] + 4 × det[[1, 3], [1, 4]]', txEn: 'Expand along the 1st row: det C = 1 × det[[3, 9], [4, 16]] − 2 × det[[1, 9], [1, 16]] + 4 × det[[1, 3], [1, 4]]' },
        { mk: 'M1', tx: '= 1 × (3 × 16 − 9 × 4) − 2 × (1 × 16 − 9 × 1) + 4 × (1 × 4 − 3 × 1)', txEn: '= 1 × (3 × 16 − 9 × 4) − 2 × (1 × 16 − 9 × 1) + 4 × (1 × 4 − 3 × 1)' },
        { mk: 'M1', tx: '= 12 − 14 + 4', txEn: '= 12 − 14 + 4' },
        { mk: 'A1', tx: 'det C = 2；亦可由范德蒙行列式得 (3 − 2)(4 − 2)(4 − 3) = 1 × 2 × 1 = 2 作驗算', txEn: 'det C = 2; the Vandermonde determinant (3 − 2)(4 − 2)(4 − 3) = 1 × 2 × 1 = 2 may also be used as a check' }
      ],
      note: '這類矩陣源自三點 (t, t²) 的關係。范德蒙公式 (b − a)(c − a)(c − b) 可用來快速驗算結果。',
      noteEn: 'This type of matrix arises from the relation between the three points (t, t²). The Vandermonde formula (b − a)(c − a)(c − b) can be used to check the result quickly.'
    },

    /* ═══════ 10.5 行列式的性質（ma21–ma25）═══════ */
    {
      id: 'ma21',
      sub: SUB.PROP,
      lv: 2,
      q: '設 A 為三階矩陣，且 det A = k。<br><b>求 det(2A)，答案以 k 表示。</b>',
      qEn: 'Let A be a 3 × 3 matrix with det A = k.<br><b>Find det(2A), giving your answer in terms of k.</b>',
      hint: '對 n 階矩陣，det(cA) = cⁿ × det A；本題 A 是幾階矩陣決定了次方數。',
      hintEn: 'For an n × n matrix, det(cA) = cⁿ × det A; the order of the matrix A in this question determines the power.',
      answer: { type: 'symbol', accept: ['8k', '8*k', 'k*8', '2^3k'], display: 'det(2A) = 8k', displayEn: 'det(2A) = 8k' },
      sol: [
        { mk: 'M1', tx: '2A 表示把 A 的每一個元素都乘以 2', txEn: '2A means multiplying every entry of A by 2' },
        { mk: 'M1', tx: '行列式性質：對 n 階矩陣，det(cA) = cⁿ × det A', txEn: 'Property of determinants: for an n × n matrix, det(cA) = cⁿ × det A' },
        { mk: 'M1', tx: '本題 A 為三階（n = 3），c = 2，故 det(2A) = 2³ × det A = 8 × k', txEn: 'Here A is 3 × 3 (n = 3) and c = 2, so det(2A) = 2³ × det A = 8 × k' },
        { mk: 'A1', tx: 'det(2A) = 8k', txEn: 'det(2A) = 8k' }
      ],
      note: '常見失分：誤寫成 det(2A) = 2 det A。純量要取 n 次方，本題為 2³ = 8。',
      noteEn: 'Common loss of marks: writing det(2A) = 2 det A by mistake. The scalar must be raised to the power n, here 2³ = 8.'
    },
    {
      id: 'ma22',
      sub: SUB.PROP,
      lv: 2,
      q: '設 A 為三階矩陣且 det A = 6。B 是把 A 的第 1 行與第 2 行對調所得的矩陣；C 是把 A 的第 3 行全部元素乘以 2 所得的矩陣。<br><b>求 det B + det C 的值。</b>',
      qEn: 'Let A be a 3 × 3 matrix with det A = 6. B is the matrix obtained by interchanging the 1st row and the 2nd row of A; C is the matrix obtained by multiplying every entry of the 3rd row of A by 2.<br><b>Find the value of det B + det C.</b>',
      hint: '對調兩行行列式變號；把某一行乘以純量 m，行列式變為原來的 m 倍。',
      hintEn: 'Interchanging two rows changes the sign of the determinant; multiplying one row by a scalar m multiplies the determinant by m.',
      answer: { type: 'num', accept: [6, 6.0], display: 'det B + det C = 6', displayEn: 'det B + det C = 6' },
      sol: [
        { mk: 'M1', tx: '對調任意兩行，行列式改變符號：det B = −det A = −6', txEn: 'Interchanging any two rows changes the sign of the determinant: det B = −det A = −6' },
        { mk: 'M1', tx: '把某一行的所有元素乘以 2，行列式變為原來的 2 倍：det C = 2 × det A = 12', txEn: 'Multiplying every entry of one row by 2 multiplies the determinant by 2: det C = 2 × det A = 12' },
        { mk: 'M1', tx: 'det B + det C = −6 + 12', txEn: 'det B + det C = −6 + 12' },
        { mk: 'A1', tx: '= 6', txEn: '= 6' }
      ],
      note: '三種行變換要分清：對調變號、乘 m 變 m 倍、把某行的倍數加到另一行則行列式不變。',
      noteEn: 'The three row operations must be distinguished: interchanging two rows changes the sign, multiplying a row by m multiplies the determinant by m, and adding a multiple of one row to another row leaves the determinant unchanged.'
    },
    {
      id: 'ma23',
      sub: SUB.PROP,
      lv: 3,
      q: '設 A、B 均為可逆的二階矩陣，且 det A = 4、det B = −2。<br><b>求 det(A⁻¹B) 的值。</b>',
      qEn: 'Let A and B be invertible 2 × 2 matrices with det A = 4 and det B = −2.<br><b>Find the value of det(A⁻¹B).</b>',
      hint: '用兩個性質：det(A⁻¹) = 1 ÷ det A，以及 det(XY) = det X × det Y。',
      hintEn: 'Use two properties: det(A⁻¹) = 1 ÷ det A, and det(XY) = det X × det Y.',
      answer: { type: 'num', accept: [-0.5, -1 / 2], display: 'det(A⁻¹B) = −1/2', displayEn: 'det(A⁻¹B) = −1/2' },
      sol: [
        { mk: 'M1', tx: '因 det A = 4 ≠ 0，A 可逆，且 det(A⁻¹) = 1 ÷ det A = 1 ÷ 4', txEn: 'Since det A = 4 ≠ 0, A is invertible, and det(A⁻¹) = 1 ÷ det A = 1 ÷ 4' },
        { mk: 'M1', tx: '乘積的行列式性質：det(A⁻¹B) = det(A⁻¹) × det B', txEn: 'Determinant of a product: det(A⁻¹B) = det(A⁻¹) × det B' },
        { mk: 'M1', tx: '= (1 ÷ 4) × (−2)', txEn: '= (1 ÷ 4) × (−2)' },
        { mk: 'A1', tx: '= −1 ÷ 2 = −0.5', txEn: '= −1 ÷ 2 = −0.5' }
      ],
      note: '常見失分：把 det(A⁻¹B) 寫成 det A + det B。行列式對乘積是相乘，對加法一般沒有簡單關係。',
      noteEn: 'Common loss of marks: writing det(A⁻¹B) as det A + det B. Determinants multiply over products; in general there is no simple relation for sums.'
    },
    {
      id: 'ma24',
      sub: SUB.PROP,
      lv: 3,
      q: '設 A = [[1, 2, 3], [2, 4, 6], [1, 0, 1]]。<br><b>不必完整展開，求 det A 的值。</b>',
      qEn: 'Let A = [[1, 2, 3], [2, 4, 6], [1, 0, 1]].<br><b>Without expanding fully, find the value of det A.</b>',
      hint: '比較各行的比例關係；若某兩行成比例（線性相關），行列式的值會是多少？',
      hintEn: 'Compare the ratios between the rows; if two rows are proportional (linearly dependent), what is the value of the determinant?',
      answer: { type: 'num', accept: [0, 0.0], display: 'det A = 0', displayEn: 'det A = 0' },
      sol: [
        { mk: 'M1', tx: '觀察第 2 行的元素：2、4、6，恰為第 1 行 1、2、3 的 2 倍', txEn: 'Look at the entries of the 2nd row: 2, 4, 6, which are exactly twice the 1st row 1, 2, 3' },
        { mk: 'M1', tx: '行列式性質：若有兩行相同或成比例，det A = 0', txEn: 'Property of determinants: if two rows are equal or proportional, det A = 0' },
        { mk: 'A1', tx: '故 det A = 0', txEn: 'Hence det A = 0' },
        { mk: 'A1', tx: '結論：A 為奇異矩陣，不可逆（亦可用展開法核對，結果同為 0）', txEn: 'Conclusion: A is a singular matrix and is not invertible (expansion may also be used to check, giving 0 as well)' }
      ],
      note: '辨析：兩行「成比例」⇔ 行列式為 0。若只是某行較大，並不影響行列式，關鍵在於線性相關。',
      noteEn: 'Key distinction: two rows being "proportional" ⇔ the determinant is 0. Merely having larger entries in a row does not affect the determinant; what matters is linear dependence.'
    },
    {
      id: 'ma25',
      sub: SUB.PROP,
      lv: 3,
      q: '設 A 為三階矩陣且 det A = −3。<br><b>求 det(A²) + det(A³) 的值。</b>',
      qEn: 'Let A be a 3 × 3 matrix with det A = −3.<br><b>Find the value of det(A²) + det(A³).</b>',
      hint: '用 det(XY) = det X × det Y 反覆相乘，可得 det(Aⁿ) = (det A)ⁿ。',
      hintEn: 'Repeated use of det(XY) = det X × det Y gives det(Aⁿ) = (det A)ⁿ.',
      answer: { type: 'num', accept: [-18, -18.0], display: 'det(A²) + det(A³) = −18', displayEn: 'det(A²) + det(A³) = −18' },
      sol: [
        { mk: 'M1', tx: 'det(A²) = det(A × A) = det A × det A = (det A)² = (−3)² = 9', txEn: 'det(A²) = det(A × A) = det A × det A = (det A)² = (−3)² = 9' },
        { mk: 'M1', tx: 'det(A³) = det(A² × A) = 9 × (−3) = −27', txEn: 'det(A³) = det(A² × A) = 9 × (−3) = −27' },
        { mk: 'M1', tx: 'det(A²) + det(A³) = 9 + (−27)', txEn: 'det(A²) + det(A³) = 9 + (−27)' },
        { mk: 'A1', tx: '= −18', txEn: '= −18' }
      ],
      note: '常見失分：把 det(A²) 當成 2 det A = −6。正確是 (det A)²，即使 det A 為負數，平方後仍為正。',
      noteEn: 'Common loss of marks: treating det(A²) as 2 det A = −6. The correct form is (det A)²; even when det A is negative, its square is positive.'
    },

    /* ═══════ 10.6 矩陣的應用（變換與編碼）（ma26–ma30）═══════ */
    {
      id: 'ma26',
      sub: SUB.APP,
      lv: 1,
      q: '平面上點 P(4, −1) 經矩陣 T = [[2, 0], [0, 3]] 所代表的變換後得 P′。<br><b>求 P′ 的坐標，依 x、y 的次序作答。</b>',
      qEn: 'The point P(4, −1) in the plane is transformed by the transformation represented by the matrix T = [[2, 0], [0, 3]] to give P′.<br><b>Find the coordinates of P′, giving them in the order x, y.</b>',
      hint: '把點寫成位置向量 [[x], [y]]，再以 T 左乘該向量，所得 2 × 1 矩陣的兩項就是新坐標。',
      hintEn: 'Write the point as the position vector [[x], [y]], then multiply that vector on the left by T; the two entries of the resulting 2 × 1 matrix are the new coordinates.',
      answer: { type: 'numbers', accept: [[8, -3]], display: 'P′ = (8, −3)', displayEn: 'P′ = (8, −3)' },
      sol: [
        { mk: 'M1', tx: 'P 的位置向量為 [[4], [−1]]', txEn: 'The position vector of P is [[4], [−1]]' },
        { mk: 'M1', tx: 'P′ 的位置向量 = T × [[4], [−1]] = [[2 × 4 + 0 × (−1)], [0 × 4 + 3 × (−1)]]', txEn: 'The position vector of P′ = T × [[4], [−1]] = [[2 × 4 + 0 × (−1)], [0 × 4 + 3 × (−1)]]' },
        { mk: 'M1', tx: '= [[8], [−3]]', txEn: '= [[8], [−3]]' },
        { mk: 'A1', tx: '故 P′ = (8, −3)', txEn: 'Hence P′ = (8, −3)' }
      ],
      note: 'T 代表沿 x 方向放大 2 倍、沿 y 方向放大 3 倍。計算 3 × (−1) 時要保留負號。',
      noteEn: 'T represents an enlargement by a factor of 2 in the x-direction and by a factor of 3 in the y-direction. The minus sign must be kept when calculating 3 × (−1).'
    },
    {
      id: 'ma27',
      sub: SUB.APP,
      lv: 1,
      q: '變換 R 把平面上的點繞原點逆時針旋轉 90°，其矩陣為 R = [[0, −1], [1, 0]]。<br><b>求點 Q(3, 2) 經 R 變換後的像 Q′ 的坐標，依 x、y 的次序作答。</b>',
      qEn: 'The transformation R rotates a point in the plane anticlockwise about the origin through 90°, and its matrix is R = [[0, −1], [1, 0]].<br><b>Find the coordinates of the image Q′ of the point Q(3, 2) under the transformation R, giving them in the order x, y.</b>',
      hint: '用 R 左乘 Q 的位置向量，第一分量由「第 1 行乘向量」得出，第二分量由「第 2 行乘向量」得出。',
      hintEn: 'Multiply the position vector of Q on the left by R; the first component comes from "the 1st row times the vector" and the second component from "the 2nd row times the vector".',
      answer: { type: 'numbers', accept: [[-2, 3]], display: 'Q′ = (−2, 3)', displayEn: 'Q′ = (−2, 3)' },
      sol: [
        { mk: 'M1', tx: 'Q′ 的位置向量 = [[0, −1], [1, 0]] × [[3], [2]]', txEn: 'The position vector of Q′ = [[0, −1], [1, 0]] × [[3], [2]]' },
        { mk: 'M1', tx: '第一分量 = 0 × 3 + (−1) × 2 = −2', txEn: 'First component = 0 × 3 + (−1) × 2 = −2' },
        { mk: 'M1', tx: '第二分量 = 1 × 3 + 0 × 2 = 3', txEn: 'Second component = 1 × 3 + 0 × 2 = 3' },
        { mk: 'A1', tx: '故 Q′ = (−2, 3)', txEn: 'Hence Q′ = (−2, 3)' }
      ],
      note: '常見失分：用錯旋轉方向的矩陣。順時針 90° 的矩陣是 [[0, 1], [−1, 0]]，會得到 (2, −3)。',
      noteEn: 'Common loss of marks: using the matrix for the wrong direction of rotation. The matrix for a clockwise rotation through 90° is [[0, 1], [−1, 0]], which gives (2, −3).'
    },
    {
      id: 'ma28',
      sub: SUB.APP,
      lv: 3,
      q: '在編碼問題中，原文字母對應的數對 (x, y) 經編碼矩陣 A = [[2, 1], [1, 1]] 編成密文 (9, 5)，即 A × [[x], [y]] = [[9], [5]]。<br><b>求原文 (x, y)，依 x、y 的次序作答。</b>',
      qEn: 'In a coding problem, the number pair (x, y) corresponding to a letter of the original message is encoded by the coding matrix A = [[2, 1], [1, 1]] into the coded message (9, 5), that is, A × [[x], [y]] = [[9], [5]].<br><b>Find the original pair (x, y), giving them in the order x, y.</b>',
      hint: '解碼要用 A⁻¹ 左乘密文向量；先算 det A 確認 A 可逆，再用二階逆矩陣公式。',
      hintEn: 'Decoding requires multiplying the coded vector on the left by A⁻¹; first find det A to check that A is invertible, then use the 2 × 2 inverse formula.',
      answer: { type: 'numbers', accept: [[4, 1]], display: '原文為 (x, y) = (4, 1)', displayEn: 'The original pair is (x, y) = (4, 1)' },
      sol: [
        { mk: 'M1', tx: 'det A = 2 × 1 − 1 × 1 = 1 ≠ 0，故 A 可逆，密文可還原', txEn: 'det A = 2 × 1 − 1 × 1 = 1 ≠ 0, so A is invertible and the coded message can be restored' },
        { mk: 'M1', tx: 'A⁻¹ = (1 ÷ 1) × [[1, −1], [−1, 2]] = [[1, −1], [−1, 2]]', txEn: 'A⁻¹ = (1 ÷ 1) × [[1, −1], [−1, 2]] = [[1, −1], [−1, 2]]' },
        { mk: 'M1', tx: '[[x], [y]] = A⁻¹ × [[9], [5]] = [[1 × 9 + (−1) × 5], [−1 × 9 + 2 × 5]] = [[4], [1]]', txEn: '[[x], [y]] = A⁻¹ × [[9], [5]] = [[1 × 9 + (−1) × 5], [−1 × 9 + 2 × 5]] = [[4], [1]]' },
        { mk: 'A1', tx: '故原文為 (x, y) = (4, 1)', txEn: 'Hence the original pair is (x, y) = (4, 1)' }
      ],
      note: '驗算：A × [[4], [1]] = [[2 × 4 + 1], [4 + 1]] = [[9], [5]]，與密文相符。若 det A = 0 則無法解碼。',
      noteEn: 'Check: A × [[4], [1]] = [[2 × 4 + 1], [4 + 1]] = [[9], [5]], which agrees with the coded message. If det A = 0, decoding is impossible.'
    },
    {
      id: 'ma29',
      sub: SUB.APP,
      lv: 3,
      q: '點 P(2, −5) 先經矩陣 M₁ = [[0, −1], [1, 0]] 代表的變換，再經矩陣 M₂ = [[−1, 0], [0, 1]] 代表的變換。<br><b>求最後所得點 P″ 的坐標，依 x、y 的次序作答。</b>',
      qEn: 'The point P(2, −5) first undergoes the transformation represented by the matrix M₁ = [[0, −1], [1, 0]], and then the transformation represented by the matrix M₂ = [[−1, 0], [0, 1]].<br><b>Find the coordinates of the final point P″, giving them in the order x, y.</b>',
      hint: '合成變換的矩陣是 M₂M₁（先作用的變換放在右邊），求出合成矩陣後再左乘 P 的位置向量。',
      hintEn: 'The matrix of the composite transformation is M₂M₁ (the transformation applied first is placed on the right); after finding the composite matrix, multiply the position vector of P on the left by it.',
      answer: { type: 'numbers', accept: [[-5, 2]], display: 'P″ = (−5, 2)', displayEn: 'P″ = (−5, 2)' },
      sol: [
        { mk: 'M1', tx: '依序作用，合成矩陣為 M₂M₁（先作用的 M₁ 在右邊）', txEn: 'Applying them in order, the composite matrix is M₂M₁ (the M₁ applied first is on the right)' },
        { mk: 'M1', tx: 'M₂M₁ = [[−1, 0], [0, 1]] × [[0, −1], [1, 0]] = [[0, 1], [1, 0]]', txEn: 'M₂M₁ = [[−1, 0], [0, 1]] × [[0, −1], [1, 0]] = [[0, 1], [1, 0]]' },
        { mk: 'M1', tx: 'P″ 的位置向量 = [[0, 1], [1, 0]] × [[2], [−5]] = [[−5], [2]]', txEn: 'The position vector of P″ = [[0, 1], [1, 0]] × [[2], [−5]] = [[−5], [2]]' },
        { mk: 'A1', tx: '故 P″ = (−5, 2)', txEn: 'Hence P″ = (−5, 2)' }
      ],
      note: '常見失分：把合成矩陣寫成 M₁M₂ = [[0, −1], [−1, 0]]，令答案變成 (5, −2)。先作用的變換必須放在右邊。',
      noteEn: 'Common loss of marks: writing the composite matrix as M₁M₂ = [[0, −1], [−1, 0]], which makes the answer (5, −2). The transformation applied first must be placed on the right.'
    },
    {
      id: 'ma30',
      sub: SUB.APP,
      lv: 3,
      q: '平面上三點 O(0, 0)、A(1, 2)、B(3, 1)。<br><b>用行列式求三角形 OAB 的面積。</b>',
      qEn: 'Let O(0, 0), A(1, 2) and B(3, 1) be three points in the plane.<br><b>Use a determinant to find the area of the triangle OAB.</b>',
      hint: '以原點為一個頂點時，面積 = (1 ÷ 2) × |det [[x(A), y(A)], [x(B), y(B)]]|，最後要取絕對值。',
      hintEn: 'When the origin is one vertex, the area = (1 ÷ 2) × |det [[x(A), y(A)], [x(B), y(B)]]|, and the absolute value must finally be taken.',
      answer: { type: 'num', accept: [2.5, 5 / 2], display: '面積 = 2.5 平方單位', displayEn: 'Area = 2.5 square units' },
      sol: [
        { mk: 'M1', tx: '以 O 為原點，面積 = (1 ÷ 2) × |det[[x(A), y(A)], [x(B), y(B)]]|', txEn: 'Taking O as the origin, the area = (1 ÷ 2) × |det[[x(A), y(A)], [x(B), y(B)]]|' },
        { mk: 'M1', tx: 'det[[1, 2], [3, 1]] = 1 × 1 − 2 × 3 = 1 − 6 = −5', txEn: 'det[[1, 2], [3, 1]] = 1 × 1 − 2 × 3 = 1 − 6 = −5' },
        { mk: 'M1', tx: '面積 = (1 ÷ 2) × |−5|', txEn: 'Area = (1 ÷ 2) × |−5|' },
        { mk: 'A1', tx: '= 2.5 平方單位', txEn: '= 2.5 square units' }
      ],
      note: '常見失分：忘記取絕對值而寫 −2.5。行列式為負只代表 A、B 的旋轉方向，不影響面積。',
      noteEn: 'Common loss of marks: forgetting the absolute value and writing −2.5. A negative determinant only reflects the direction of rotation from A to B and does not affect the area.'
    }
  ];
})(typeof window !== 'undefined' ? window : globalThis);
