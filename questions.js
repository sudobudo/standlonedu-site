// GADOE Standards Aligned Question Bank
const questionBank = {
    'K': {
        'math': [
            { standard: 'MGSEK.CC.1', question: 'Count the apples: 🍎🍎🍎🍎🍎', answers: ['3', '5', '7', '4'], correct: 1, explanation: 'There are 5 apples.' },
            { standard: 'MGSEK.CC.4', question: 'Which number comes after 3?', answers: ['2', '4', '5', '1'], correct: 1, explanation: 'The number after 3 is 4.' },
            { standard: 'MGSEK.OA.1', question: 'If you have 2 toys and get 1 more, how many toys do you have?', answers: ['1', '2', '3', '4'], correct: 2, explanation: '2 + 1 = 3 toys.' },
            { standard: 'MGSEK.CC.2', question: 'Count the stars: ⭐⭐⭐', answers: ['2', '3', '4', '5'], correct: 1, explanation: 'There are 3 stars.' },
            { standard: 'MGSEK.CC.3', question: 'Which number is bigger: 7 or 4?', answers: ['4', '7', 'Same', 'Neither'], correct: 1, explanation: '7 is bigger than 4.' },
            { standard: 'MGSEK.OA.2', question: 'What is 5 - 2?', answers: ['2', '3', '4', '5'], correct: 1, explanation: '5 - 2 = 3.' },
            { standard: 'MGSEK.G.1', question: 'Which shape is a circle?', answers: ['⬛', '🔺', '⭕', '⬜'], correct: 2, explanation: 'A circle is round.' },
            { standard: 'MGSEK.MD.1', question: 'Which is longer: a pencil or a car?', answers: ['Pencil', 'Car', 'Same', 'Neither'], correct: 1, explanation: 'A car is longer than a pencil.' },
            { standard: 'MGSEK.CC.1', question: 'Count the hearts: ❤️❤️❤️❤️', answers: ['3', '4', '5', '6'], correct: 1, explanation: 'There are 4 hearts.' },
            { standard: 'MGSEK.OA.1', question: 'What is 3 + 2?', answers: ['4', '5', '6', '7'], correct: 1, explanation: '3 + 2 = 5.' },
            { standard: 'MGSEK.CC.4', question: 'Which number comes before 5?', answers: ['3', '4', '6', '7'], correct: 1, explanation: 'The number before 5 is 4.' },
            { standard: 'MGSEK.OA.2', question: 'What is 4 - 1?', answers: ['2', '3', '4', '5'], correct: 1, explanation: '4 - 1 = 3.' },
            { standard: 'MGSEK.G.1', question: 'How many sides does a square have?', answers: ['2', '3', '4', '5'], correct: 2, explanation: 'A square has 4 sides.' },
            { standard: 'MGSEK.CC.3', question: 'Which number is smaller: 2 or 6?', answers: ['2', '6', 'Same', 'Neither'], correct: 0, explanation: '2 is smaller than 6.' },
            { standard: 'MGSEK.OA.1', question: 'What is 1 + 1?', answers: ['1', '2', '3', '4'], correct: 1, explanation: '1 + 1 = 2.' }
        ],
        'ela': [
            { standard: 'ELAGSE.K.RF.2', question: 'Which word rhymes with "cat"?', answers: ['dog', 'hat', 'pig', 'cow'], correct: 1, explanation: '"Hat" rhymes with "cat".' },
            { standard: 'ELAGSE.K.RF.3', question: 'What letter does "Apple" start with?', answers: ['B', 'A', 'C', 'D'], correct: 1, explanation: 'Apple starts with A.' },
            { standard: 'ELAGSE.K.RF.1', question: 'Which word rhymes with "dog"?', answers: ['cat', 'log', 'bird', 'fish'], correct: 1, explanation: '"Log" rhymes with "dog".' },
            { standard: 'ELAGSE.K.L.1', question: 'What letter does "Ball" start with?', answers: ['A', 'B', 'C', 'D'], correct: 1, explanation: 'Ball starts with B.' },
            { standard: 'ELAGSE.K.RF.2', question: 'Which word rhymes with "sun"?', answers: ['moon', 'run', 'star', 'sky'], correct: 1, explanation: '"Run" rhymes with "sun".' },
            { standard: 'ELAGSE.K.RF.3', question: 'What letter does "Dog" start with?', answers: ['C', 'D', 'E', 'F'], correct: 1, explanation: 'Dog starts with D.' },
            { standard: 'ELAGSE.K.RF.2', question: 'Which word rhymes with "car"?', answers: ['bus', 'star', 'bike', 'train'], correct: 1, explanation: '"Star" rhymes with "car".' },
            { standard: 'ELAGSE.K.RF.3', question: 'What letter does "Egg" start with?', answers: ['D', 'E', 'F', 'G'], correct: 1, explanation: 'Egg starts with E.' },
            { standard: 'ELAGSE.K.RF.2', question: 'Which word rhymes with "book"?', answers: ['pen', 'look', 'read', 'write'], correct: 1, explanation: '"Look" rhymes with "book".' },
            { standard: 'ELAGSE.K.L.1', question: 'What letter does "Fish" start with?', answers: ['E', 'F', 'G', 'H'], correct: 1, explanation: 'Fish starts with F.' },
            { standard: 'ELAGSE.K.RF.2', question: 'Which word rhymes with "tree"?', answers: ['leaf', 'bee', 'branch', 'root'], correct: 1, explanation: '"Bee" rhymes with "tree".' }
        ],
        'science': [
            { standard: 'SKP1', question: 'Which object is heavy?', answers: ['Feather', 'Elephant', 'Leaf', 'Balloon'], correct: 1, explanation: 'An elephant is heavy.' },
            { standard: 'SKP2', question: 'What do plants need to grow?', answers: ['Toys', 'Sunlight', 'Books', 'Cars'], correct: 1, explanation: 'Plants need sunlight to grow.' },
            { standard: 'SKL1', question: 'Which animal can fly?', answers: ['Dog', 'Cat', 'Bird', 'Fish'], correct: 2, explanation: 'Birds can fly.' },
            { standard: 'SKP1', question: 'Which object is light?', answers: ['Rock', 'Feather', 'Book', 'Chair'], correct: 1, explanation: 'A feather is light.' },
            { standard: 'SKL1', question: 'Which animal lives in water?', answers: ['Dog', 'Cat', 'Bird', 'Fish'], correct: 3, explanation: 'Fish live in water.' },
            { standard: 'SKP2', question: 'What do we need to see?', answers: ['Sound', 'Light', 'Smell', 'Touch'], correct: 1, explanation: 'We need light to see.' },
            { standard: 'SKL1', question: 'Which animal has fur?', answers: ['Fish', 'Bird', 'Dog', 'Snake'], correct: 2, explanation: 'Dogs have fur.' },
            { standard: 'SKP1', question: 'What happens when you push a ball?', answers: ['It stays still', 'It moves', 'It disappears', 'It grows'], correct: 1, explanation: 'Pushing makes the ball move.' },
            { standard: 'SKL1', question: 'What do plants need besides sunlight?', answers: ['Toys', 'Water', 'Shoes', 'Books'], correct: 1, explanation: 'Plants need water to grow.' },
            { standard: 'SKP2', question: 'Which is hot?', answers: ['Ice', 'Snow', 'Sun', 'Water'], correct: 2, explanation: 'The sun is hot.' },
            { standard: 'SKL1', question: 'Which animal can swim?', answers: ['Cat', 'Dog', 'Duck', 'Rabbit'], correct: 2, explanation: 'Ducks can swim.' }
        ],
        'social-studies': [
            { standard: 'SSKH1a', question: 'What do we call the place where we live?', answers: ['School', 'Home', 'Store', 'Park'], correct: 1, explanation: 'We live at home. (Gallopade GA)' },
            { standard: 'SSKH2a', question: 'Who helps us when we are sick?', answers: ['Teacher', 'Doctor', 'Chef', 'Driver'], correct: 1, explanation: 'Doctors help us when we are sick. (Gallopade GA)' },
            { standard: 'SSKH3a', question: 'What is a community helper?', answers: ['Someone who helps people', 'A toy', 'A building', 'A pet'], correct: 0, explanation: 'Community helpers are people who help others. (Gallopade GA)' },
            { standard: 'SSKH1a', question: 'Who helps us learn?', answers: ['Doctor', 'Teacher', 'Chef', 'Driver'], correct: 1, explanation: 'Teachers help us learn. (Gallopade GA)' },
            { standard: 'SSKH2a', question: 'Who puts out fires?', answers: ['Teacher', 'Doctor', 'Firefighter', 'Chef'], correct: 2, explanation: 'Firefighters put out fires. (Gallopade GA)' },
            { standard: 'SSKH1a', question: 'Where do we go to learn?', answers: ['Store', 'School', 'Park', 'Home'], correct: 1, explanation: 'We go to school to learn. (Gallopade GA)' },
            { standard: 'SSKH2a', question: 'Who helps keep us safe?', answers: ['Chef', 'Police Officer', 'Teacher', 'Doctor'], correct: 1, explanation: 'Police officers help keep us safe. (Gallopade GA)' },
            { standard: 'SSKH3a', question: 'Who delivers mail?', answers: ['Teacher', 'Mail Carrier', 'Doctor', 'Chef'], correct: 1, explanation: 'Mail carriers deliver mail. (Gallopade GA)' },
            { standard: 'SSKH1a', question: 'What do we call our town or city?', answers: ['School', 'Community', 'House', 'Store'], correct: 1, explanation: 'Our town or city is our community. (Gallopade GA)' },
            { standard: 'SSKH2a', question: 'Who grows food for us?', answers: ['Teacher', 'Farmer', 'Doctor', 'Driver'], correct: 1, explanation: 'Farmers grow food for us. (Gallopade GA)' },
            { standard: 'SSKH3a', question: 'Who drives the school bus?', answers: ['Teacher', 'Bus Driver', 'Doctor', 'Chef'], correct: 1, explanation: 'Bus drivers drive the school bus. (Gallopade GA)' }
        ]
    },
    '1': {
        'math': [
            { standard: 'MGSE1.OA.1', question: 'What is 7 + 5?', answers: ['10', '11', '12', '13'], correct: 2, explanation: '7 + 5 = 12.' },
            { standard: 'MGSE1.NBT.1', question: 'How many tens are in 30?', answers: ['1', '2', '3', '4'], correct: 2, explanation: '30 has 3 tens.' },
            { standard: 'MGSE1.OA.3', question: 'What is 9 + 4?', answers: ['12', '13', '14', '15'], correct: 1, explanation: '9 + 4 = 13.' },
            { standard: 'MGSE1.OA.6', question: 'What is 15 - 7?', answers: ['6', '7', '8', '9'], correct: 2, explanation: '15 - 7 = 8.' },
            { standard: 'MGSE1.NBT.3', question: 'Which number is greater: 45 or 54?', answers: ['45', '54', 'Same', 'Neither'], correct: 1, explanation: '54 is greater than 45.' },
            { standard: 'MGSE1.MD.1', question: 'How many inches are in 1 foot?', answers: ['10', '12', '15', '20'], correct: 1, explanation: 'There are 12 inches in 1 foot.' },
            { standard: 'MGSE1.OA.1', question: 'What is 8 + 6?', answers: ['12', '13', '14', '15'], correct: 2, explanation: '8 + 6 = 14.' },
            { standard: 'MGSE1.OA.6', question: 'What is 12 - 5?', answers: ['5', '6', '7', '8'], correct: 2, explanation: '12 - 5 = 7.' },
            { standard: 'MGSE1.NBT.1', question: 'What is 10 + 10?', answers: ['10', '15', '20', '25'], correct: 2, explanation: '10 + 10 = 20.' },
            { standard: 'MGSE1.OA.3', question: 'What is 5 + 5 + 5?', answers: ['10', '12', '15', '20'], correct: 2, explanation: '5 + 5 + 5 = 15.' }
        ],
        'ela': [
            { standard: 'ELAGSE1.RF.3', question: 'Which word has a long "a" sound?', answers: ['cat', 'cake', 'can', 'cap'], correct: 1, explanation: '"Cake" has a long "a" sound.' },
            { standard: 'ELAGSE1.RF.2', question: 'How many syllables in "butterfly"?', answers: ['1', '2', '3', '4'], correct: 2, explanation: 'But-ter-fly has 3 syllables.' },
            { standard: 'ELAGSE1.L.1', question: 'Which is a complete sentence?', answers: ['Run fast', 'The dog runs.', 'Big cat', 'Jump high'], correct: 1, explanation: '"The dog runs." has a subject and verb.' },
            { standard: 'ELAGSE1.L.2', question: 'Which word should be capitalized?', answers: ['dog', 'cat', 'john', 'book'], correct: 2, explanation: 'Names like "John" are capitalized.' },
            { standard: 'ELAGSE1.RF.3', question: 'Which word has a long "e" sound?', answers: ['bed', 'bee', 'pet', 'red'], correct: 1, explanation: '"Bee" has a long "e" sound.' },
            { standard: 'ELAGSE1.RF.2', question: 'How many syllables in "elephant"?', answers: ['2', '3', '4', '5'], correct: 1, explanation: 'El-e-phant has 3 syllables.' },
            { standard: 'ELAGSE1.L.1', question: 'Which word is a noun?', answers: ['run', 'jump', 'apple', 'fast'], correct: 2, explanation: '"Apple" is a thing (noun).' },
            { standard: 'ELAGSE1.L.2', question: 'What comes at the end of a sentence?', answers: ['Comma', 'Period', 'Question', 'Letter'], correct: 1, explanation: 'A period comes at the end of a sentence.' },
            { standard: 'ELAGSE1.RF.3', question: 'Which word has a long "i" sound?', answers: ['sit', 'kite', 'pin', 'big'], correct: 1, explanation: '"Kite" has a long "i" sound.' },
            { standard: 'ELAGSE1.L.1', question: 'Which word is a verb?', answers: ['book', 'run', 'desk', 'pencil'], correct: 1, explanation: '"Run" is an action word (verb).' },
            { standard: 'ELAGSE1.RF.2', question: 'How many syllables in "pizza"?', answers: ['1', '2', '3', '4'], correct: 1, explanation: 'Piz-za has 2 syllables.' }
        ],
        'science': [
            { standard: 'S1P1', question: 'What do we use to see?', answers: ['Sound', 'Light', 'Smell', 'Taste'], correct: 1, explanation: 'We need light to see.' },
            { standard: 'S1P2', question: 'What happens to ice when it gets warm?', answers: ['It freezes', 'It melts', 'It grows', 'It shrinks'], correct: 1, explanation: 'Ice melts when it gets warm.' },
            { standard: 'S1L1', question: 'What do all living things need?', answers: ['Toys', 'Water', 'Cars', 'Books'], correct: 1, explanation: 'All living things need water.' },
            { standard: 'S1P1', question: 'What do we use to hear?', answers: ['Eyes', 'Ears', 'Nose', 'Mouth'], correct: 1, explanation: 'We use our ears to hear.' },
            { standard: 'S1P2', question: 'What happens to water when it gets very cold?', answers: ['It boils', 'It freezes', 'It evaporates', 'It disappears'], correct: 1, explanation: 'Water freezes when it gets very cold.' },
            { standard: 'S1L1', question: 'Which is a living thing?', answers: ['Rock', 'Tree', 'Water', 'Air'], correct: 1, explanation: 'A tree is a living thing.' },
            { standard: 'S1P1', question: 'What makes things move?', answers: ['Color', 'Force', 'Size', 'Shape'], correct: 1, explanation: 'A force makes things move.' },
            { standard: 'S1P2', question: 'Which is a solid?', answers: ['Water', 'Air', 'Rock', 'Juice'], correct: 2, explanation: 'A rock is a solid.' },
            { standard: 'S1L1', question: 'What do animals need to survive?', answers: ['Toys', 'Food', 'Books', 'Clothes'], correct: 1, explanation: 'Animals need food to survive.' },
            { standard: 'S1P1', question: 'What do we use to smell?', answers: ['Eyes', 'Ears', 'Nose', 'Mouth'], correct: 2, explanation: 'We use our nose to smell.' },
            { standard: 'S1L1', question: 'Which animal is a mammal?', answers: ['Fish', 'Bird', 'Dog', 'Snake'], correct: 2, explanation: 'A dog is a mammal.' }
        ],
        'social-studies': [
            { standard: 'SS1H1a', question: 'What is a map used for?', answers: ['Eating', 'Finding places', 'Sleeping', 'Playing'], correct: 1, explanation: 'Maps help us find places. (Gallopade GA)' },
            { standard: 'SS1CG1a', question: 'Who makes rules in a classroom?', answers: ['Students', 'Teacher', 'Janitor', 'Cook'], correct: 1, explanation: 'Teachers make classroom rules. (Gallopade GA)' },
            { standard: 'SS1G1a', question: 'What are the 4 cardinal directions?', answers: ['Up, Down, Left, Right', 'North, South, East, West', 'Front, Back, Side, Top', 'In, Out, Over, Under'], correct: 1, explanation: 'The cardinal directions are North, South, East, and West. (Gallopade GA)' },
            { standard: 'SS1H1a', question: 'What is a globe?', answers: ['A flat map', 'A round model of Earth', 'A book', 'A picture'], correct: 1, explanation: 'A globe is a round model of Earth. (Gallopade GA)' },
            { standard: 'SS1CG1a', question: 'Why do we have rules?', answers: ['To have fun', 'To keep us safe', 'To play games', 'To eat food'], correct: 1, explanation: 'Rules keep us safe. (Gallopade GA)' },
            { standard: 'SS1G1a', question: 'Which direction does the sun rise?', answers: ['North', 'South', 'East', 'West'], correct: 2, explanation: 'The sun rises in the East. (Gallopade GA)' },
            { standard: 'SS1H1a', question: 'What shows water on a map?', answers: ['Red', 'Blue', 'Green', 'Yellow'], correct: 1, explanation: 'Blue shows water on a map. (Gallopade GA)' },
            { standard: 'SS1CG1a', question: 'Who is the leader of our country?', answers: ['Teacher', 'President', 'Mayor', 'Principal'], correct: 1, explanation: 'The President is the leader of our country. (Gallopade GA)' },
            { standard: 'SS1G1a', question: 'Which direction does the sun set?', answers: ['North', 'South', 'East', 'West'], correct: 3, explanation: 'The sun sets in the West. (Gallopade GA)' },
            { standard: 'SS1H1a', question: 'What shows land on a map?', answers: ['Blue', 'Green or Brown', 'Red', 'Yellow'], correct: 1, explanation: 'Green or brown shows land on a map. (Gallopade GA)' },
            { standard: 'SS1CG1a', question: 'What do good citizens do?', answers: ['Break rules', 'Follow rules', 'Ignore rules', 'Make fun of rules'], correct: 1, explanation: 'Good citizens follow rules. (Gallopade GA)' }
        ]
    },
    '2': {
        'math': [
            { standard: 'MGSE2.OA.1', question: 'What is 25 + 37?', answers: ['52', '62', '72', '82'], correct: 1, explanation: '25 + 37 = 62.' },
            { standard: 'MGSE2.NBT.5', question: 'What comes next? 5, 10, 15, 20, ___', answers: ['22', '23', '24', '25'], correct: 3, explanation: 'Counting by 5s: 25.' },
            { standard: 'MGSE2.OA.2', question: 'What is 48 - 19?', answers: ['27', '28', '29', '30'], correct: 2, explanation: '48 - 19 = 29.' },
            { standard: 'MGSE2.NBT.1', question: 'What is 100 + 200?', answers: ['200', '300', '400', '500'], correct: 1, explanation: '100 + 200 = 300.' },
            { standard: 'MGSE2.MD.8', question: 'How many cents in a dollar?', answers: ['50', '75', '100', '125'], correct: 2, explanation: 'There are 100 cents in a dollar.' },
            { standard: 'MGSE2.G.1', question: 'How many sides does a triangle have?', answers: ['2', '3', '4', '5'], correct: 1, explanation: 'A triangle has 3 sides.' }
        ],
        'ela': [
            { standard: 'ELAGSE2.RL.1', question: 'What do we call the beginning of a story?', answers: ['Middle', 'Introduction', 'Conclusion', 'Summary'], correct: 1, explanation: 'The introduction is the beginning.' },
            { standard: 'ELAGSE2.L.1', question: 'Which is a verb?', answers: ['happy', 'run', 'blue', 'big'], correct: 1, explanation: '"Run" is an action word (verb).' },
            { standard: 'ELAGSE2.L.2', question: 'Which sentence is correct?', answers: ['i like pizza', 'I like pizza.', 'i Like Pizza', 'I like pizza'], correct: 1, explanation: 'Sentences start with capital and end with period.' },
            { standard: 'ELAGSE2.RF.3', question: 'Which word has a short "i" sound?', answers: ['kite', 'sit', 'pie', 'ice'], correct: 1, explanation: '"Sit" has a short "i" sound.' }
        ],
        'science': [
            { standard: 'S2P1', question: 'Which state of matter has a definite shape?', answers: ['Solid', 'Liquid', 'Gas', 'Plasma'], correct: 0, explanation: 'A solid has a definite shape.' },
            { standard: 'S2E1', question: 'What causes day and night?', answers: ['Moon moving', 'Earth spinning', 'Sun moving', 'Stars shining'], correct: 1, explanation: 'Earth spinning causes day and night.' },
            { standard: 'S2L1', question: 'What do animals need to survive?', answers: ['Toys', 'Food and water', 'Books', 'Money'], correct: 1, explanation: 'Animals need food and water to survive.' }
        ],
        'social-studies': [
            { standard: 'SS2H1a', question: 'Who was the first President?', answers: ['Lincoln', 'Washington', 'Jefferson', 'Adams'], correct: 1, explanation: 'George Washington was first. (Gallopade GA)' },
            { standard: 'SS2CG1a', question: 'What is a law?', answers: ['A game', 'A rule we must follow', 'A story', 'A song'], correct: 1, explanation: 'A law is a rule everyone must follow. (Gallopade GA)' },
            { standard: 'SS2G1a', question: 'What is a continent?', answers: ['A country', 'A large land mass', 'An ocean', 'A city'], correct: 1, explanation: 'A continent is a large land mass. (Gallopade GA)' }
        ]
    },
    '3': {
        'math': [
            { standard: 'MGSE3.OA.3', question: 'What is 6 × 7?', answers: ['35', '42', '48', '54'], correct: 1, explanation: '6 × 7 = 42.' },
            { standard: 'MGSE3.NF.1', question: 'Which fraction represents one-half?', answers: ['1/3', '1/2', '1/4', '2/3'], correct: 1, explanation: '1/2 is one-half.' },
            { standard: 'MGSE3.MD.7', question: 'Area of rectangle 4×3?', answers: ['7', '10', '12', '14'], correct: 2, explanation: '4 × 3 = 12 square units.' },
            { standard: 'MGSE3.OA.3', question: 'What is 8 × 9?', answers: ['63', '72', '81', '90'], correct: 1, explanation: '8 × 9 = 72.' },
            { standard: 'MGSE3.OA.7', question: 'What is 56 ÷ 8?', answers: ['6', '7', '8', '9'], correct: 1, explanation: '56 ÷ 8 = 7.' },
            { standard: 'MGSE3.NF.1', question: 'Which fraction is larger: 1/2 or 1/4?', answers: ['1/2', '1/4', 'Same', 'Neither'], correct: 0, explanation: '1/2 is larger than 1/4.' },
            { standard: 'MGSE3.OA.1', question: 'What is 125 + 78?', answers: ['193', '203', '213', '223'], correct: 1, explanation: '125 + 78 = 203.' },
            { standard: 'MGSE3.MD.1', question: 'How many minutes in 1 hour?', answers: ['30', '45', '60', '90'], correct: 2, explanation: 'There are 60 minutes in 1 hour.' }
        ],
        'ela': [
            { standard: 'ELAGSE3.RL.2', question: 'The lesson in a story is called the:', answers: ['character', 'setting', 'theme', 'conflict'], correct: 2, explanation: 'The theme is the lesson.' },
            { standard: 'ELAGSE3.L.1', question: 'Which word is a noun?', answers: ['run', 'happy', 'book', 'quickly'], correct: 2, explanation: '"Book" is a thing (noun).' }
        ],
        'science': [
            { standard: 'S3P1', question: 'What force pulls objects toward Earth?', answers: ['Magnetism', 'Gravity', 'Friction', 'Electricity'], correct: 1, explanation: 'Gravity pulls objects down.' }
        ],
        'social-studies': [
            { standard: 'SS3G1a', question: 'Which continent is the US on?', answers: ['Africa', 'North America', 'Europe', 'Asia'], correct: 1, explanation: 'US is on North America. (Gallopade GA)' },
            { standard: 'SS3H1a', question: 'What is a historical figure?', answers: ['A number', 'A famous person from the past', 'A shape', 'A building'], correct: 1, explanation: 'A historical figure is a famous person from the past. (Gallopade GA)' }
        ]
    },
    '4': {
        'math': [
            { standard: 'MGSE4.NBT.5', question: 'What is 24 × 15?', answers: ['340', '350', '360', '370'], correct: 2, explanation: '24 × 15 = 360.' },
            { standard: 'MGSE4.NF.3', question: 'What is 2/5 + 1/5?', answers: ['3/10', '3/5', '2/5', '1/5'], correct: 1, explanation: '2/5 + 1/5 = 3/5.' },
            { standard: 'MGSE4.OA.3', question: 'What is 144 ÷ 12?', answers: ['10', '11', '12', '13'], correct: 2, explanation: '144 ÷ 12 = 12.' },
            { standard: 'MGSE4.NBT.1', question: 'What is 10 times 1,000?', answers: ['1,000', '10,000', '100,000', '1,000,000'], correct: 1, explanation: '10 × 1,000 = 10,000.' },
            { standard: 'MGSE4.NF.4', question: 'What is 3 × 1/4?', answers: ['1/4', '2/4', '3/4', '4/4'], correct: 2, explanation: '3 × 1/4 = 3/4.' },
            { standard: 'MGSE4.MD.2', question: 'How many feet in 3 yards?', answers: ['3', '6', '9', '12'], correct: 2, explanation: '1 yard = 3 feet, so 3 yards = 9 feet.' }
        ],
        'ela': [
            { standard: 'ELAGSE4.RL.5', question: 'What is a stanza in poetry?', answers: ['A line', 'A group of lines', 'A rhyme', 'A title'], correct: 1, explanation: 'A stanza is a group of lines.' }
        ],
        'science': [
            { standard: 'S4P1', question: 'What energy does a battery have?', answers: ['Kinetic', 'Chemical', 'Sound', 'Light'], correct: 1, explanation: 'Battery has chemical energy.' }
        ],
        'social-studies': [
            { standard: 'SS4H1a', question: 'What is the capital of Georgia?', answers: ['Savannah', 'Augusta', 'Atlanta', 'Macon'], correct: 2, explanation: 'Atlanta is the capital of Georgia. (Gallopade GA)' },
            { standard: 'SS4G1a', question: 'What are Georgia\'s 5 geographic regions?', answers: ['Mountains, Rivers, Lakes, Oceans, Deserts', 'Coastal Plain, Piedmont, Blue Ridge, Valley & Ridge, Appalachian Plateau', 'North, South, East, West, Central', 'Urban, Suburban, Rural, Industrial, Agricultural'], correct: 1, explanation: 'Georgia has 5 regions: Coastal Plain, Piedmont, Blue Ridge, Valley & Ridge, and Appalachian Plateau. (Gallopade GA)' },
            { standard: 'SS4E1a', question: 'What does specialization mean?', answers: ['Being special', 'Focusing on one job or task', 'Going to school', 'Playing sports'], correct: 1, explanation: 'Specialization means focusing on one specific job or task. (Gallopade GA)' }
        ]
    },
    '5': {
        'math': [
            { standard: 'MGSE5.NBT.7', question: 'What is 3.5 + 2.8?', answers: ['5.3', '6.3', '5.13', '6.13'], correct: 1, explanation: '3.5 + 2.8 = 6.3.' },
            { standard: 'MGSE5.NF.4', question: 'What is 1/2 × 3/4?', answers: ['3/8', '3/6', '4/6', '2/8'], correct: 0, explanation: '1×3=3, 2×4=8, so 3/8.' },
            { standard: 'MGSE5.G.3', question: 'Volume of 5×3×2 prism?', answers: ['10', '20', '30', '15'], correct: 2, explanation: '5×3×2 = 30 cubic units.' }
        ],
        'ela': [
            { standard: 'ELAGSE5.RL.4', question: '"Wind whispered" is what type of figurative language?', answers: ['Simile', 'Metaphor', 'Personification', 'Hyperbole'], correct: 2, explanation: 'Personification gives human qualities.' }
        ],
        'science': [
            { standard: 'S5P2', question: 'What energy does the sun produce?', answers: ['Sound', 'Light', 'Mechanical', 'Nuclear'], correct: 1, explanation: 'Sun produces light energy.' }
        ],
        'social-studies': [
            { standard: 'SS5H1', question: 'First US President?', answers: ['Jefferson', 'Franklin', 'Washington', 'Adams'], correct: 2, explanation: 'George Washington was first.' }
        ]
    },
    '6': {
        'math': [
            { standard: 'MGSE6.RP.3', question: 'If 3 apples cost $2, how much for 9 apples?', answers: ['$4', '$5', '$6', '$7'], correct: 2, explanation: '3×3 apples = $2×3 = $6.' },
            { standard: 'MGSE6.NS.3', question: 'What is 4.5 ÷ 0.5?', answers: ['7', '8', '9', '10'], correct: 2, explanation: '4.5 ÷ 0.5 = 9.' }
        ],
        'ela': [
            { standard: 'ELAGSE6.RL.6', question: 'Story told using "I" and "me" is what POV?', answers: ['First person', 'Second person', 'Third person', 'Omniscient'], correct: 0, explanation: 'First person uses "I".' }
        ],
        'science': [
            { standard: 'S6E1', question: 'What causes day and night?', answers: ['Earth\'s orbit', 'Earth\'s rotation', 'Moon\'s orbit', 'Eclipses'], correct: 1, explanation: 'Earth rotates causing day/night.' }
        ],
        'social-studies': [
            { standard: 'SS6G1', question: 'Ocean on east coast of South America?', answers: ['Pacific', 'Atlantic', 'Indian', 'Arctic'], correct: 1, explanation: 'Atlantic Ocean is on the east.' }
        ]
    },
    '7': {
        'math': [
            { standard: 'MGSE7.NS.1', question: 'What is -5 + 8?', answers: ['-13', '-3', '3', '13'], correct: 2, explanation: '8 - 5 = 3.' },
            { standard: 'MGSE7.EE.4', question: 'Solve: 2x + 5 = 13', answers: ['x=3', 'x=4', 'x=5', 'x=6'], correct: 1, explanation: '2x = 8, x = 4.' },
            { standard: 'MGSE7.G.6', question: 'Circumference of circle r=5? (π≈3.14)', answers: ['15.7', '31.4', '78.5', '25'], correct: 1, explanation: '2πr = 2×3.14×5 = 31.4.' }
        ],
        'ela': [
            { standard: 'ELAGSE7.RL.3', question: 'Character that changes is called:', answers: ['Static', 'Dynamic', 'Flat', 'Minor'], correct: 1, explanation: 'Dynamic characters change.' }
        ],
        'science': [
            { standard: 'S7L1', question: 'What is the basic unit of life?', answers: ['Atom', 'Cell', 'Molecule', 'Organ'], correct: 1, explanation: 'Cell is the basic unit.' }
        ],
        'social-studies': [
            { standard: 'SS7CG4', question: 'Three branches of US government?', answers: ['Federal/State/Local', 'Executive/Legislative/Judicial', 'President/Congress/Court', 'Senate/House/Supreme'], correct: 1, explanation: 'Executive, Legislative, Judicial.' }
        ]
    },
    '8': {
        'math': [
            { standard: 'MGSE8.EE.7', question: 'Solve: 3x - 7 = 14', answers: ['x=5', 'x=6', 'x=7', 'x=8'], correct: 2, explanation: '3x = 21, x = 7.' },
            { standard: 'MGSE8.G.7', question: 'Right triangle legs 3,4. Hypotenuse?', answers: ['5', '6', '7', '8'], correct: 0, explanation: '3²+4²=25, √25=5.' }
        ],
        'ela': [
            { standard: 'ELAGSE8.RI.8', question: 'What is a claim in an argument?', answers: ['Evidence', 'Main point being argued', 'Counterargument', 'Conclusion'], correct: 1, explanation: 'Claim is the main point.' }
        ],
        'science': [
            { standard: 'S8P1', question: 'Smallest particle of an element?', answers: ['Molecule', 'Atom', 'Cell', 'Electron'], correct: 1, explanation: 'Atom is the smallest particle.' }
        ],
        'social-studies': [
            { standard: 'SS8H1', question: 'Native American group in Georgia?', answers: ['Sioux', 'Cherokee', 'Navajo', 'Apache'], correct: 1, explanation: 'Cherokee lived in Georgia.' }
        ]
    },
    '9': {
        'math': [
            { standard: 'MGSE9-12.A.REI.3', question: 'Solve: x+y=5 and x-y=1', answers: ['x=2,y=3', 'x=3,y=2', 'x=4,y=1', 'x=1,y=4'], correct: 1, explanation: 'x=3, y=2.' }
        ],
        'ela': [
            { standard: 'ELAGSE9-10.RL.4', question: 'Effect of vivid verbs in writing?', answers: ['Boring', 'Stronger imagery', 'Confuses', 'Longer'], correct: 1, explanation: 'Vivid verbs create imagery.' }
        ],
        'science': [
            { standard: 'SPS1', question: 'How many protons does carbon have?', answers: ['4', '6', '8', '12'], correct: 1, explanation: 'Carbon has 6 protons.' }
        ],
        'social-studies': [
            { standard: 'SSWH1', question: 'Which civilization built pyramids?', answers: ['Romans', 'Greeks', 'Egyptians', 'Persians'], correct: 2, explanation: 'Egyptians built pyramids.' }
        ]
    },
    '10': {
        'math': [
            { standard: 'MGSE10.A.SSE.3', question: 'Solutions to x²-5x+6=0?', answers: ['x=1,6', 'x=2,3', 'x=-2,-3', 'x=1,5'], correct: 1, explanation: '(x-2)(x-3)=0, x=2 or 3.' },
            { standard: 'MGSE10.G.SRT.6', question: 'In right triangle, sin(θ) equals?', answers: ['adj/hyp', 'opp/hyp', 'opp/adj', 'hyp/opp'], correct: 1, explanation: 'sin=opposite/hypotenuse.' }
        ],
        'ela': [
            { standard: 'ELAGSE10.RL.2', question: 'Device using object for abstract idea?', answers: ['Alliteration', 'Symbolism', 'Onomatopoeia', 'Allusion'], correct: 1, explanation: 'Symbolism uses objects for ideas.' }
        ],
        'science': [
            { standard: 'SB1', question: 'Process plants make food?', answers: ['Respiration', 'Photosynthesis', 'Digestion', 'Fermentation'], correct: 1, explanation: 'Photosynthesis makes food.' }
        ],
        'social-studies': [
            { standard: 'SSWH15', question: 'What started WWI?', answers: ['Lusitania', 'Archduke assassination', 'Versailles', 'Russian Revolution'], correct: 1, explanation: 'Archduke assassination started WWI.' }
        ]
    },
    '11': {
        'math': [
            { standard: 'MGSE11-12.F.TF.2', question: 'Period of y=sin(x)?', answers: ['π', '2π', 'π/2', '4π'], correct: 1, explanation: 'Sine period is 2π.' }
        ],
        'ela': [
            { standard: 'ELAGSE11-12.RI.6', question: 'Rhetorical appeal using logic?', answers: ['Ethos', 'Pathos', 'Logos', 'Kairos'], correct: 2, explanation: 'Logos uses logic.' }
        ],
        'science': [
            { standard: 'SP2', question: 'Newton\'s Second Law?', answers: ['F=ma', 'E=mc²', 'v=d/t', 'P=mv'], correct: 0, explanation: 'F=ma is Second Law.' }
        ],
        'social-studies': [
            { standard: 'SSUSH5', question: 'Document declaring independence 1776?', answers: ['Constitution', 'Bill of Rights', 'Declaration of Independence', 'Articles'], correct: 2, explanation: 'Declaration of Independence.' }
        ]
    },
    '12': {
        'math': [
            { standard: 'MGSE12.S.CP.1', question: 'Probability of rolling 6 on die?', answers: ['1/2', '1/3', '1/6', '1/12'], correct: 2, explanation: '1 out of 6 sides = 1/6.' }
        ],
        'ela': [
            { standard: 'ELAGSE11-12.W.1', question: 'Most important in thesis statement?', answers: ['Length', 'Complexity', 'Clear position', 'Multiple topics'], correct: 2, explanation: 'Clear position is key.' }
        ],
        'science': [
            { standard: 'SB4', question: 'Primary energy source for ecosystems?', answers: ['Water', 'Soil', 'Sun', 'Wind'], correct: 2, explanation: 'Sun is primary energy source.' }
        ],
        'social-studies': [
            { standard: 'SSCG1', question: 'How many amendments in Bill of Rights?', answers: ['5', '10', '15', '27'], correct: 1, explanation: 'Bill of Rights has 10 amendments.' }
        ]
    }
};
