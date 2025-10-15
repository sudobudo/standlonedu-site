// Standalone EDU - Main Application Logic

// Application State
let currentGrade = null;
let currentSubject = null;
let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let selectedAnswer = null;
let smartScore = 0;
let consecutiveCorrect = 0;
let consecutiveIncorrect = 0;
let userProgress = {
    totalAnswered: 0,
    totalCorrect: 0,
    totalPoints: 0,
    subjectProgress: {}
};

// DOM Elements
const pages = {
    home: document.getElementById('home-page'),
    subject: document.getElementById('subject-page'),
    practice: document.getElementById('practice-page'),
    milestones: document.getElementById('milestones-page'),
    benchmark: document.getElementById('benchmark-page'),
    progress: document.getElementById('progress-page'),
    friends: document.getElementById('friends-page'),
    admin: document.getElementById('admin-page'),
    standards: document.getElementById('standards-page')
};

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
    initializeAuth();
    initializeNavigation();
    initializeGradeSelection();
    initializeSubjectSelection();
    initializeQuizControls();
    
    // Check if user is logged in
    if (authSystem.isLoggedIn()) {
        loadUserProgress();
        updateProgressDashboard();
        applyUserPreferences();
        document.getElementById('landing-page').classList.remove('show');
        document.querySelector('.main-content').style.display = 'block';
    } else {
        // Show landing page if not logged in
        document.getElementById('landing-page').classList.add('show');
        document.querySelector('.main-content').style.display = 'none';
        
        // Add landing page button handlers
        document.getElementById('landing-signup-btn')?.addEventListener('click', () => {
            showModal('signup-modal');
        });
        
        document.getElementById('landing-login-btn')?.addEventListener('click', () => {
            showModal('login-modal');
        });
        
        document.getElementById('landing-cta-btn')?.addEventListener('click', () => {
            showModal('signup-modal');
        });
    }
    
    updateUIForAuth();
});

// Navigation
function initializeNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const pageName = link.dataset.page;
            
            // Update active nav link
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            
            // Show corresponding page
            Object.values(pages).forEach(page => page.classList.remove('active'));
            if (pageName === 'home') {
                pages.home.classList.add('active');
            } else if (pageName === 'practice') {
                if (currentGrade && currentSubject) {
                    pages.practice.classList.add('active');
                } else {
                    pages.home.classList.add('active');
                }
            } else if (pageName === 'progress') {
                updateProgressDashboard();
                pages.progress.classList.add('active');
            } else if (pageName === 'friends') {
                loadFriendsPage();
                pages.friends.classList.add('active');
            } else if (pageName === 'milestones') {
                pages.milestones.classList.add('active');
            } else if (pageName === 'benchmark') {
                pages.benchmark.classList.add('active');
            } else if (pageName === 'admin') {
                if (authSystem.isAdmin()) {
                    loadAdminPage();
                    pages.admin.classList.add('active');
                } else {
                    pages.home.classList.add('active');
                }
            } else if (pageName === 'standards') {
                pages.standards.classList.add('active');
            }
        });
    });
}

// Grade Selection
function initializeGradeSelection() {
    const gradeCards = document.querySelectorAll('.grade-card');
    gradeCards.forEach(card => {
        card.addEventListener('click', () => {
            currentGrade = card.dataset.grade;
            document.getElementById('selected-grade').textContent = 
                currentGrade === 'K' ? 'Kindergarten' : `Grade ${currentGrade}`;
            showSubjectPage();
        });
    });
}

function showSubjectPage() {
    pages.home.classList.remove('active');
    pages.subject.classList.add('active');
    updateSubjectProgress();
}

// Subject Selection
function initializeSubjectSelection() {
    const subjectCards = document.querySelectorAll('.subject-card');
    subjectCards.forEach(card => {
        card.addEventListener('click', () => {
            currentSubject = card.dataset.subject;
            startQuiz();
        });
    });
    
    // Back buttons
    document.querySelectorAll('.back-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            if (pages.subject.classList.contains('active')) {
                pages.subject.classList.remove('active');
                pages.home.classList.add('active');
            } else if (pages.practice.classList.contains('active')) {
                pages.practice.classList.remove('active');
                pages.subject.classList.add('active');
            }
        });
    });
}

function updateSubjectProgress() {
    const subjects = ['math', 'ela', 'science', 'social-studies'];
    subjects.forEach(subject => {
        const key = `${currentGrade}-${subject}`;
        const progress = userProgress.subjectProgress[key] || { answered: 0, correct: 0 };
        const card = document.querySelector(`[data-subject="${subject}"]`);
        if (card) {
            const progressFill = card.querySelector('.progress-fill');
            const progressText = card.querySelector('.progress-text');
            const percentage = progress.answered > 0 ? 
                Math.round((progress.correct / progress.answered) * 100) : 0;
            if (progressFill) progressFill.style.width = `${percentage}%`;
            if (progressText) progressText.textContent = `${percentage}% Complete`;
        }
    });
}

// Quiz Logic
function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    smartScore = 0;
    consecutiveCorrect = 0;
    consecutiveIncorrect = 0;
    
    // Get questions for selected grade and subject
    if (questionBank[currentGrade] && questionBank[currentGrade][currentSubject]) {
        currentQuestions = [...questionBank[currentGrade][currentSubject]];
        
        // Shuffle questions
        currentQuestions.sort(() => Math.random() - 0.5);
        
        // Limit to 10 questions
        currentQuestions = currentQuestions.slice(0, 10);
    } else {
        alert('No questions available for this grade and subject yet!');
        return;
    }
    
    // Update UI
    document.getElementById('total-questions').textContent = currentQuestions.length;
    document.getElementById('quiz-score').textContent = '0';
    updateSmartScore();
    
    // Show quiz page
    Object.values(pages).forEach(page => page.classList.remove('active'));
    pages.practice.classList.add('active');
    
    // Load first question
    loadQuestion();
}

function updateSmartScore() {
    const smartScoreValue = document.getElementById('smartscore-value');
    const smartScoreFill = document.getElementById('smartscore-fill');
    
    if (smartScoreValue && smartScoreFill) {
        smartScoreValue.textContent = Math.round(smartScore);
        smartScoreFill.style.width = smartScore + '%';
        
        // Update color based on score
        smartScoreFill.className = 'smartscore-fill';
        if (smartScore >= 80) {
            smartScoreFill.classList.add('excellent');
        } else if (smartScore >= 60) {
            smartScoreFill.classList.add('good');
        } else if (smartScore >= 40) {
            smartScoreFill.classList.add('fair');
        } else {
            smartScoreFill.classList.add('needs-work');
        }
    }
}

function loadQuestion() {
    if (currentQuestionIndex >= currentQuestions.length) {
        showQuizComplete();
        return;
    }
    
    const question = currentQuestions[currentQuestionIndex];
    selectedAnswer = null;
    
    // Update question counter
    document.getElementById('current-question').textContent = currentQuestionIndex + 1;
    
    // Update standard
    document.getElementById('quiz-standard').textContent = `Standard: ${question.standard}`;
    
    // Update question text
    document.getElementById('question-text').textContent = question.question;
    
    // Clear and populate answers
    const answersContainer = document.getElementById('answers-container');
    answersContainer.innerHTML = '';
    
    question.answers.forEach((answer, index) => {
        const answerDiv = document.createElement('div');
        answerDiv.className = 'answer-option';
        answerDiv.textContent = answer;
        answerDiv.dataset.index = index;
        
        answerDiv.addEventListener('click', () => selectAnswer(index));
        
        answersContainer.appendChild(answerDiv);
    });
    
    // Hide feedback
    document.getElementById('feedback-container').classList.remove('show', 'correct', 'incorrect');
    
    // Reset submit button
    document.getElementById('submit-answer-btn').disabled = true;
}

function selectAnswer(index) {
    // Remove previous selection
    document.querySelectorAll('.answer-option').forEach(opt => {
        opt.classList.remove('selected');
    });
    
    // Mark new selection
    const options = document.querySelectorAll('.answer-option');
    options[index].classList.add('selected');
    selectedAnswer = index;
    
    // Enable submit button
    document.getElementById('submit-answer-btn').disabled = false;
}

function submitAnswer() {
    if (selectedAnswer === null) return;
    
    const question = currentQuestions[currentQuestionIndex];
    const isCorrect = selectedAnswer === question.correct;
    
    // Update statistics
    userProgress.totalAnswered++;
    const key = `${currentGrade}-${currentSubject}`;
    if (!userProgress.subjectProgress[key]) {
        userProgress.subjectProgress[key] = { answered: 0, correct: 0 };
    }
    userProgress.subjectProgress[key].answered++;
    
    if (isCorrect) {
        score++;
        userProgress.totalCorrect++;
        userProgress.subjectProgress[key].correct++;
        userProgress.totalPoints += 10;
        
        // Update SmartScore for correct answer
        consecutiveCorrect++;
        consecutiveIncorrect = 0;
        
        // SmartScore increases faster with consecutive correct answers
        let increase = 5 + (consecutiveCorrect * 2);
        smartScore = Math.min(100, smartScore + increase);
    } else {
        // Update SmartScore for incorrect answer
        consecutiveIncorrect++;
        consecutiveCorrect = 0;
        
        // SmartScore decreases with incorrect answers
        let decrease = 10 + (consecutiveIncorrect * 3);
        smartScore = Math.max(0, smartScore - decrease);
    }
    
    // Update SmartScore display
    updateSmartScore();
    
    // Save progress
    saveUserProgress();
    
    // Update score display
    document.getElementById('quiz-score').textContent = score;
    
    // Show feedback with celebration for correct answers
    const feedbackContainer = document.getElementById('feedback-container');
    feedbackContainer.innerHTML = `
        <div class="feedback-title">${isCorrect ? '🎉 Correct! Great job!' : '❌ Not quite right'}</div>
        <div class="feedback-text">${question.explanation}</div>
        ${isCorrect ? `<div class="feedback-bonus">+${5 + (consecutiveCorrect * 2)} SmartScore points!</div>` : ''}
    `;
    feedbackContainer.classList.add('show', isCorrect ? 'correct' : 'incorrect');
    
    // Highlight correct/incorrect answers
    const options = document.querySelectorAll('.answer-option');
    options.forEach((opt, idx) => {
        opt.classList.add('disabled');
        if (idx === question.correct) {
            opt.classList.add('correct');
        } else if (idx === selectedAnswer && !isCorrect) {
            opt.classList.add('incorrect');
        }
    });
    
    // Change submit button to next
    const submitBtn = document.getElementById('submit-answer-btn');
    submitBtn.textContent = 'Next Question';
    submitBtn.onclick = nextQuestion;
    submitBtn.disabled = false;
}

function nextQuestion() {
    currentQuestionIndex++;
    
    // Reset submit button
    const submitBtn = document.getElementById('submit-answer-btn');
    submitBtn.textContent = 'Submit Answer';
    submitBtn.onclick = submitAnswer;
    
    loadQuestion();
}

function skipQuestion() {
    currentQuestionIndex++;
    loadQuestion();
}

function showQuizComplete() {
    const percentage = Math.round((score / currentQuestions.length) * 100);
    const feedbackContainer = document.getElementById('feedback-container');
    
    feedbackContainer.innerHTML = `
        <div class="feedback-title">🎉 Quiz Complete!</div>
        <div class="feedback-text">
            <p>You scored ${score} out of ${currentQuestions.length} (${percentage}%)</p>
            <p>${percentage >= 80 ? 'Excellent work!' : percentage >= 60 ? 'Good job!' : 'Keep practicing!'}</p>
        </div>
    `;
    feedbackContainer.classList.add('show', 'correct');
    
    document.getElementById('question-text').textContent = 'Quiz Complete!';
    document.getElementById('answers-container').innerHTML = '';
    
    const submitBtn = document.getElementById('submit-answer-btn');
    submitBtn.textContent = 'Start New Quiz';
    submitBtn.disabled = false;
    submitBtn.onclick = startQuiz;
}

// Quiz Controls
function initializeQuizControls() {
    document.getElementById('submit-answer-btn').addEventListener('click', submitAnswer);
    document.getElementById('skip-btn').addEventListener('click', skipQuestion);
}

// Progress Dashboard
function updateProgressDashboard() {
    document.getElementById('total-answered').textContent = userProgress.totalAnswered;
    document.getElementById('total-correct').textContent = userProgress.totalCorrect;
    document.getElementById('total-points').textContent = userProgress.totalPoints;
    
    const accuracy = userProgress.totalAnswered > 0 ? 
        Math.round((userProgress.totalCorrect / userProgress.totalAnswered) * 100) : 0;
    document.getElementById('accuracy-rate').textContent = `${accuracy}%`;
    
    // Update subject progress list
    const progressList = document.getElementById('subject-progress-list');
    progressList.innerHTML = '';
    
    const subjectNames = {
        'math': 'Mathematics',
        'ela': 'English Language Arts',
        'science': 'Science',
        'social-studies': 'Social Studies'
    };
    
    Object.keys(userProgress.subjectProgress).forEach(key => {
        const [grade, subject] = key.split('-');
        const data = userProgress.subjectProgress[key];
        const percentage = data.answered > 0 ? 
            Math.round((data.correct / data.answered) * 100) : 0;
        
        const item = document.createElement('div');
        item.className = 'subject-progress-item';
        item.innerHTML = `
            <div class="subject-progress-header">
                <span class="subject-progress-name">
                    ${grade === 'K' ? 'Kindergarten' : `Grade ${grade}`} - ${subjectNames[subject] || subject}
                </span>
                <span class="subject-progress-percentage">${percentage}%</span>
            </div>
            <div class="progress-bar">
                <div class="progress-fill" style="width: ${percentage}%"></div>
            </div>
            <p style="margin-top: 0.5rem; color: var(--text-secondary); font-size: 0.9rem;">
                ${data.correct} correct out of ${data.answered} answered
            </p>
        `;
        progressList.appendChild(item);
    });
    
    if (Object.keys(userProgress.subjectProgress).length === 0) {
        progressList.innerHTML = '<p style="text-align: center; color: var(--text-secondary); padding: 2rem;">No progress yet. Start practicing to see your stats!</p>';
    }
}

// Authentication Functions
function initializeAuth() {
    // Login button
    document.getElementById('login-btn')?.addEventListener('click', () => {
        showModal('login-modal');
    });

    // Signup button
    document.getElementById('signup-btn')?.addEventListener('click', () => {
        showModal('signup-modal');
    });

    // Close modal buttons
    document.querySelectorAll('.close-modal').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            hideModal(btn.dataset.modal);
        });
    });

    // Close modal on outside click (but not when selecting text)
    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('mousedown', (e) => {
            if (e.target === modal) {
                // Store the click target
                modal.dataset.clickTarget = 'background';
            }
        });
        
        modal.addEventListener('mouseup', (e) => {
            // Only close if both mousedown and mouseup were on background
            if (e.target === modal && modal.dataset.clickTarget === 'background') {
                hideModal(modal.id);
            }
            delete modal.dataset.clickTarget;
        });
    });

    // Close modal on ESC key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            document.querySelectorAll('.modal.show').forEach(modal => {
                hideModal(modal.id);
            });
        }
    });

    // Show signup from login
    document.getElementById('show-signup')?.addEventListener('click', (e) => {
        e.preventDefault();
        hideModal('login-modal');
        showModal('signup-modal');
    });

    // Show login from signup
    document.getElementById('show-login')?.addEventListener('click', (e) => {
        e.preventDefault();
        hideModal('signup-modal');
        showModal('login-modal');
    });

    // Login form
    document.getElementById('login-form')?.addEventListener('submit', handleLogin);

    // Signup form
    document.getElementById('signup-form')?.addEventListener('submit', handleSignup);

    // Profile link
    document.getElementById('profile-link')?.addEventListener('click', (e) => {
        e.preventDefault();
        showProfileModal();
    });

    // Logout link
    document.getElementById('logout-link')?.addEventListener('click', (e) => {
        e.preventDefault();
        handleLogout();
    });

    // Profile form
    document.getElementById('profile-form')?.addEventListener('submit', handleProfileUpdate);

    // Password form
    document.getElementById('password-form')?.addEventListener('submit', handlePasswordChange);

    // Forgot username link
    document.getElementById('forgot-username-link')?.addEventListener('click', (e) => {
        e.preventDefault();
        hideModal('login-modal');
        showModal('forgot-username-modal');
    });

    // Forgot password link
    document.getElementById('forgot-password-link')?.addEventListener('click', (e) => {
        e.preventDefault();
        hideModal('login-modal');
        showModal('forgot-password-modal');
    });

    // Back to login from username recovery
    document.getElementById('back-to-login-from-username')?.addEventListener('click', (e) => {
        e.preventDefault();
        hideModal('forgot-username-modal');
        showModal('login-modal');
        document.getElementById('username-display').style.display = 'none';
    });

    // Back to login from password reset
    document.getElementById('back-to-login')?.addEventListener('click', (e) => {
        e.preventDefault();
        hideModal('forgot-password-modal');
        showModal('login-modal');
    });

    // Forgot password form
    document.getElementById('forgot-password-form')?.addEventListener('submit', handleForgotPassword);

    // Reset password form
    document.getElementById('reset-password-form')?.addEventListener('submit', handleResetPassword);

    // Forgot username form
    document.getElementById('forgot-username-form')?.addEventListener('submit', handleForgotUsername);

    // Profile picture upload
    document.getElementById('profile-picture-input')?.addEventListener('change', handleProfilePictureUpload);
    
    // Remove profile picture
    document.getElementById('remove-picture-btn')?.addEventListener('click', handleRemoveProfilePicture);
}

function showModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('show');
    }
}

function hideModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('show');
        
        // Clear any form messages in the modal
        const messages = modal.querySelectorAll('.form-message');
        messages.forEach(msg => {
            msg.classList.remove('show', 'success', 'error');
            msg.textContent = '';
        });
        
        // Clear username display if in forgot username modal
        if (modalId === 'forgot-username-modal') {
            const usernameDisplay = document.getElementById('username-display');
            if (usernameDisplay) {
                usernameDisplay.style.display = 'none';
            }
        }
    }
}

function showMessage(elementId, message, type) {
    const element = document.getElementById(elementId);
    if (element) {
        element.textContent = message;
        element.className = 'form-message show ' + type;
        setTimeout(() => {
            element.classList.remove('show');
        }, 5000);
    }
}

function handleLogin(e) {
    e.preventDefault();
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    const result = authSystem.login(username, password);
    
    if (result.success) {
        showMessage('login-message', result.message, 'success');
        setTimeout(() => {
            hideModal('login-modal');
            document.getElementById('landing-page').classList.remove('show');
            document.querySelector('.main-content').style.display = 'block';
            updateUIForAuth();
            loadUserProgress();
            updateProgressDashboard();
            applyUserPreferences();
            document.getElementById('login-form').reset();
        }, 1000);
    } else {
        showMessage('login-message', result.message, 'error');
    }
}

function handleSignup(e) {
    e.preventDefault();
    const fullName = document.getElementById('signup-fullname').value;
    const username = document.getElementById('signup-username').value;
    const email = document.getElementById('signup-email').value;
    const grade = document.getElementById('signup-grade').value;
    const password = document.getElementById('signup-password').value;
    const confirmPassword = document.getElementById('signup-confirm-password').value;

    if (password !== confirmPassword) {
        showMessage('signup-message', 'Passwords do not match!', 'error');
        return;
    }

    const result = authSystem.register(username, email, password, fullName, grade);
    
    if (result.success) {
        showMessage('signup-message', result.message, 'success');
        setTimeout(() => {
            hideModal('signup-modal');
            showModal('login-modal');
            document.getElementById('signup-form').reset();
        }, 1500);
    } else {
        showMessage('signup-message', result.message, 'error');
    }
}

function handleLogout() {
    authSystem.logout();
    userProgress = {
        totalAnswered: 0,
        totalCorrect: 0,
        totalPoints: 0,
        subjectProgress: {}
    };
    updateUIForAuth();
    updateProgressDashboard();
    
    // Hide main content and show landing page
    document.querySelector('.main-content').style.display = 'none';
    document.getElementById('landing-page').classList.add('show');
    
    // Return to home page
    Object.values(pages).forEach(page => page.classList.remove('active'));
    pages.home.classList.add('active');
}

function updateUIForAuth() {
    const loggedIn = authSystem.isLoggedIn();
    const user = authSystem.getCurrentUser();

    if (loggedIn && user) {
        // Hide login/signup buttons
        document.getElementById('user-info').style.display = 'none';
        
        // Show user info
        const userInfoLoggedIn = document.getElementById('user-info-logged-in');
        userInfoLoggedIn.style.display = 'flex';
        
        // Update user name and avatar
        document.getElementById('user-display-name').textContent = user.fullName;
        document.getElementById('user-avatar').textContent = user.fullName.charAt(0).toUpperCase();
        
        // Show admin link if user is admin
        const adminLink = document.querySelector('.admin-only');
        if (adminLink) {
            adminLink.style.display = authSystem.isAdmin() ? 'block' : 'none';
        }
    } else {
        // Show login/signup buttons
        document.getElementById('user-info').style.display = 'flex';
        
        // Hide user info
        document.getElementById('user-info-logged-in').style.display = 'none';
        
        // Hide admin link
        const adminLink = document.querySelector('.admin-only');
        if (adminLink) {
            adminLink.style.display = 'none';
        }
    }
}

function loadUserProgress() {
    if (authSystem.isLoggedIn()) {
        const progress = authSystem.getProgress();
        if (progress) {
            userProgress = progress;
        }
    }
}

function saveUserProgress() {
    if (authSystem.isLoggedIn()) {
        authSystem.updateProgress(userProgress);
    }
}

function showProfileModal() {
    const user = authSystem.getCurrentUser();
    const prefs = authSystem.getPreferences();
    
    if (user) {
        document.getElementById('profile-fullname').value = user.fullName;
        document.getElementById('profile-email').value = user.email;
        document.getElementById('profile-grade').value = user.grade;
        
        if (prefs) {
            document.getElementById('profile-theme').value = prefs.theme || 'light';
            document.getElementById('profile-accent-color').value = prefs.accentColor || 'indigo';
            document.getElementById('profile-avatar-color').value = prefs.avatarColor || 'default';
            
            // Update profile picture preview
            const avatarPreview = document.getElementById('profile-avatar-preview');
            const removePictureBtn = document.getElementById('remove-picture-btn');
            
            if (prefs.profilePicture) {
                avatarPreview.style.backgroundImage = `url(${prefs.profilePicture})`;
                avatarPreview.setAttribute('data-has-image', 'true');
                avatarPreview.textContent = '';
                removePictureBtn.style.display = 'inline-block';
            } else {
                avatarPreview.style.backgroundImage = '';
                avatarPreview.removeAttribute('data-has-image');
                avatarPreview.textContent = user.fullName.charAt(0).toUpperCase();
                removePictureBtn.style.display = 'none';
                
                // Apply avatar color
                if (prefs.avatarColor && prefs.avatarColor !== 'default') {
                    avatarPreview.className = 'user-avatar-large avatar-' + prefs.avatarColor;
                } else {
                    avatarPreview.className = 'user-avatar-large';
                }
            }
        }
        
        showModal('profile-modal');
    }
}

function handleProfileUpdate(e) {
    e.preventDefault();
    const fullName = document.getElementById('profile-fullname').value;
    const email = document.getElementById('profile-email').value;
    const grade = document.getElementById('profile-grade').value;
    const theme = document.getElementById('profile-theme').value;
    const accentColor = document.getElementById('profile-accent-color').value;
    const avatarColor = document.getElementById('profile-avatar-color').value;

    const result = authSystem.updateProfile({ 
        fullName, 
        email, 
        grade, 
        theme, 
        accentColor, 
        avatarColor 
    });
    
    if (result.success) {
        showMessage('profile-message', result.message, 'success');
        updateUIForAuth();
        applyUserPreferences();
    } else {
        showMessage('profile-message', result.message, 'error');
    }
}

function applyUserPreferences() {
    const prefs = authSystem.getPreferences();
    const user = authSystem.getCurrentUser();
    if (!prefs || !user) return;
    
    // Apply theme
    let theme = prefs.theme;
    if (theme === 'auto') {
        // Check system preference
        theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    document.documentElement.setAttribute('data-theme', theme);
    
    // Apply accent color
    document.documentElement.setAttribute('data-accent', prefs.accentColor);
    
    // Apply avatar (profile picture or color)
    const avatar = document.getElementById('user-avatar');
    if (avatar) {
        if (prefs.profilePicture) {
            // Use profile picture
            avatar.style.backgroundImage = `url(${prefs.profilePicture})`;
            avatar.setAttribute('data-has-image', 'true');
            avatar.textContent = '';
        } else {
            // Use colored avatar with initial
            avatar.style.backgroundImage = '';
            avatar.removeAttribute('data-has-image');
            avatar.textContent = user.fullName.charAt(0).toUpperCase();
            
            if (prefs.avatarColor && prefs.avatarColor !== 'default') {
                avatar.className = 'user-avatar avatar-' + prefs.avatarColor;
            } else {
                avatar.className = 'user-avatar';
            }
        }
    }
}

function handleProfilePictureUpload(e) {
    const file = e.target.files[0];
    if (!file) return;
    
    // Check file size (max 2MB)
    if (file.size > 2 * 1024 * 1024) {
        alert('File size must be less than 2MB');
        return;
    }
    
    // Check file type
    if (!file.type.startsWith('image/')) {
        alert('Please upload an image file');
        return;
    }
    
    // Read and convert to base64
    const reader = new FileReader();
    reader.onload = function(event) {
        const base64Image = event.target.result;
        
        // Update preview
        const avatarPreview = document.getElementById('profile-avatar-preview');
        avatarPreview.style.backgroundImage = `url(${base64Image})`;
        avatarPreview.setAttribute('data-has-image', 'true');
        avatarPreview.textContent = '';
        
        // Show remove button
        document.getElementById('remove-picture-btn').style.display = 'inline-block';
        
        // Save to profile
        const result = authSystem.updateProfile({ profilePicture: base64Image });
        if (result.success) {
            applyUserPreferences();
            showMessage('profile-message', 'Profile picture updated!', 'success');
        }
    };
    reader.readAsDataURL(file);
}

function handleRemoveProfilePicture() {
    const user = authSystem.getCurrentUser();
    if (!user) return;
    
    // Remove profile picture
    const result = authSystem.updateProfile({ profilePicture: null });
    
    if (result.success) {
        // Update preview
        const avatarPreview = document.getElementById('profile-avatar-preview');
        const prefs = authSystem.getPreferences();
        
        avatarPreview.style.backgroundImage = '';
        avatarPreview.removeAttribute('data-has-image');
        avatarPreview.textContent = user.fullName.charAt(0).toUpperCase();
        
        // Apply avatar color
        if (prefs && prefs.avatarColor && prefs.avatarColor !== 'default') {
            avatarPreview.className = 'user-avatar-large avatar-' + prefs.avatarColor;
        } else {
            avatarPreview.className = 'user-avatar-large';
        }
        
        // Hide remove button
        document.getElementById('remove-picture-btn').style.display = 'none';
        
        // Clear file input
        document.getElementById('profile-picture-input').value = '';
        
        applyUserPreferences();
        showMessage('profile-message', 'Profile picture removed!', 'success');
    }
}

function handlePasswordChange(e) {
    e.preventDefault();
    const currentPassword = document.getElementById('current-password').value;
    const newPassword = document.getElementById('new-password').value;
    const confirmNewPassword = document.getElementById('confirm-new-password').value;

    if (newPassword !== confirmNewPassword) {
        showMessage('password-message', 'New passwords do not match!', 'error');
        return;
    }

    const result = authSystem.changePassword(currentPassword, newPassword);
    
    if (result.success) {
        showMessage('password-message', result.message, 'success');
        document.getElementById('password-form').reset();
    } else {
        showMessage('password-message', result.message, 'error');
    }
}

// Temporary storage for password reset
let resetUsername = null;

function handleForgotPassword(e) {
    e.preventDefault();
    const username = document.getElementById('forgot-username').value;
    const email = document.getElementById('forgot-email').value;

    const result = authSystem.verifyAccountForReset(username, email);
    
    if (result.success) {
        showMessage('forgot-message', result.message, 'success');
        resetUsername = result.username;
        
        setTimeout(() => {
            hideModal('forgot-password-modal');
            showModal('reset-password-modal');
            document.getElementById('forgot-password-form').reset();
        }, 1000);
    } else {
        showMessage('forgot-message', result.message, 'error');
    }
}

function handleResetPassword(e) {
    e.preventDefault();
    const newPassword = document.getElementById('reset-new-password').value;
    const confirmPassword = document.getElementById('reset-confirm-password').value;

    if (newPassword !== confirmPassword) {
        showMessage('reset-message', 'Passwords do not match!', 'error');
        return;
    }

    if (!resetUsername) {
        showMessage('reset-message', 'Session expired. Please try again.', 'error');
        return;
    }

    const result = authSystem.resetPassword(resetUsername, newPassword);
    
    if (result.success) {
        showMessage('reset-message', result.message, 'success');
        setTimeout(() => {
            hideModal('reset-password-modal');
            showModal('login-modal');
            document.getElementById('reset-password-form').reset();
            resetUsername = null;
            showMessage('login-message', 'Password reset! You can now login with your new password.', 'success');
        }, 1500);
    } else {
        showMessage('reset-message', result.message, 'error');
    }
}

function handleForgotUsername(e) {
    e.preventDefault();
    const email = document.getElementById('recover-email').value;

    const result = authSystem.findUsernameByEmail(email);
    
    if (result.success) {
        showMessage('recover-message', result.message, 'success');
        
        // Display the username
        document.getElementById('recovered-username').textContent = result.username;
        document.getElementById('username-display').style.display = 'block';
        
        // Also pre-fill the login form
        document.getElementById('login-username').value = result.username;
    } else {
        showMessage('recover-message', result.message, 'error');
        document.getElementById('username-display').style.display = 'none';
    }
}

// Friends Page Functions
function loadFriendsPage() {
    loadFriendRequests();
    loadFriendsList();
    
    // Setup search
    document.getElementById('search-users-btn').onclick = searchUsers;
    document.getElementById('user-search-input').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') searchUsers();
    });
}

function loadFriendRequests() {
    const requests = authSystem.getFriendRequests();
    const container = document.getElementById('friend-requests-list');
    
    if (requests.length === 0) {
        container.innerHTML = '<p style="color: var(--text-secondary);">No friend requests</p>';
        return;
    }
    
    container.innerHTML = requests.map(user => `
        <div class="user-card">
            <div class="user-card-avatar" style="${user.profilePicture ? `background-image: url(${user.profilePicture})` : ''}">
                ${!user.profilePicture ? user.fullName.charAt(0).toUpperCase() : ''}
            </div>
            <div class="user-card-info">
                <div class="user-card-name">${user.fullName}</div>
                <div class="user-card-username">@${user.username} • Grade ${user.grade}</div>
            </div>
            <div class="user-card-actions">
                <button class="btn-small btn-accept" onclick="acceptFriend('${user.username}')">Accept</button>
                <button class="btn-small btn-reject" onclick="rejectFriend('${user.username}')">Reject</button>
            </div>
        </div>
    `).join('');
}

function loadFriendsList() {
    const friends = authSystem.getFriends();
    const container = document.getElementById('friends-list');
    
    if (friends.length === 0) {
        container.innerHTML = '<p style="color: var(--text-secondary);">No friends yet. Search for users to add!</p>';
        return;
    }
    
    container.innerHTML = friends.map(user => `
        <div class="user-card">
            <div class="user-card-avatar" style="${user.profilePicture ? `background-image: url(${user.profilePicture})` : ''}">
                ${!user.profilePicture ? user.fullName.charAt(0).toUpperCase() : ''}
            </div>
            <div class="user-card-info">
                <div class="user-card-name">${user.fullName}</div>
                <div class="user-card-username">@${user.username} • Grade ${user.grade}</div>
            </div>
            <div class="user-card-actions">
                <button class="btn-small btn-add" onclick="openChat('${user.username}')">💬 Chat</button>
                <button class="btn-small btn-remove" onclick="removeFriend('${user.username}')">Remove</button>
            </div>
        </div>
    `).join('');
}

function searchUsers() {
    const query = document.getElementById('user-search-input').value;
    const results = authSystem.searchUsers(query);
    const container = document.getElementById('search-results');
    const currentUser = authSystem.getCurrentUser();
    const friends = authSystem.getFriends().map(f => f.username);
    
    if (!query) {
        container.innerHTML = '';
        return;
    }
    
    if (results.length === 0) {
        container.innerHTML = '<p style="color: var(--text-secondary); margin-top: 1rem;">No users found</p>';
        return;
    }
    
    container.innerHTML = results.filter(u => u.username !== currentUser.username).map(user => {
        const isFriend = friends.includes(user.username);
        return `
            <div class="user-card">
                <div class="user-card-avatar" style="${user.profilePicture ? `background-image: url(${user.profilePicture})` : ''}">
                    ${!user.profilePicture ? user.fullName.charAt(0).toUpperCase() : ''}
                </div>
                <div class="user-card-info">
                    <div class="user-card-name">${user.fullName}</div>
                    <div class="user-card-username">@${user.username} • Grade ${user.grade}</div>
                </div>
                <div class="user-card-actions">
                    ${isFriend ? 
                        '<span style="color: var(--secondary-color); font-weight: 600;">✓ Friends</span>' :
                        `<button class="btn-small btn-add" onclick="sendFriendRequest('${user.username}')">Add Friend</button>`
                    }
                </div>
            </div>
        `;
    }).join('');
}

function sendFriendRequest(username) {
    const result = authSystem.sendFriendRequest(username);
    alert(result.message);
    if (result.success) {
        searchUsers(); // Refresh search results
    }
}

function acceptFriend(username) {
    const result = authSystem.acceptFriendRequest(username);
    alert(result.message);
    if (result.success) {
        loadFriendRequests();
        loadFriendsList();
    }
}

function rejectFriend(username) {
    const result = authSystem.rejectFriendRequest(username);
    if (result.success) {
        loadFriendRequests();
    }
}

function removeFriend(username) {
    if (confirm('Are you sure you want to remove this friend?')) {
        const result = authSystem.removeFriend(username);
        alert(result.message);
        if (result.success) {
            loadFriendsList();
            searchUsers(); // Refresh search if active
        }
    }
}

// Admin Page Functions
function loadAdminPage() {
    const result = authSystem.getAllUsers();
    
    if (!result.success) {
        alert(result.message);
        return;
    }
    
    // Update stats
    document.getElementById('admin-total-users').textContent = result.users.length;
    
    // Count total questions
    let totalQuestions = 0;
    for (let grade in questionBank) {
        for (let subject in questionBank[grade]) {
            totalQuestions += questionBank[grade][subject].length;
        }
    }
    document.getElementById('admin-total-questions').textContent = totalQuestions;
    
    // Display users
    const container = document.getElementById('admin-users-list');
    container.innerHTML = result.users.map(user => `
        <div class="admin-user-item">
            <div>
                <strong>${user.fullName}</strong> (@${user.username})
                <br>
                <small style="color: var(--text-secondary);">
                    ${user.email} • Grade ${user.grade} • Joined ${new Date(user.createdAt).toLocaleDateString()}
                </small>
            </div>
            <span class="admin-badge ${user.role}">${user.role}</span>
        </div>
    `).join('');
}

// Chat Functions
let currentChatUser = null;

function openChat(username) {
    currentChatUser = username;
    const user = authSystem.getUserForChat(username);
    
    if (!user) {
        alert('User not found!');
        return;
    }
    
    // Update chat header
    document.getElementById('chat-user-name').textContent = user.fullName;
    const chatAvatar = document.getElementById('chat-user-avatar');
    
    if (user.profilePicture) {
        chatAvatar.style.backgroundImage = `url(${user.profilePicture})`;
        chatAvatar.textContent = '';
    } else {
        chatAvatar.style.backgroundImage = '';
        chatAvatar.textContent = user.fullName.charAt(0).toUpperCase();
    }
    
    // Load messages
    loadChatMessages();
    
    // Setup send button
    document.getElementById('send-message-btn').onclick = sendChatMessage;
    document.getElementById('chat-input').onkeypress = (e) => {
        if (e.key === 'Enter') sendChatMessage();
    };
    
    // Show modal
    showModal('chat-modal');
}

function loadChatMessages() {
    if (!currentChatUser) return;
    
    const messages = authSystem.getMessages(currentChatUser);
    const container = document.getElementById('chat-messages');
    const currentUsername = authSystem.getCurrentUser().username;
    
    if (messages.length === 0) {
        container.innerHTML = '<div class="chat-empty">No messages yet. Start the conversation!</div>';
        return;
    }
    
    container.innerHTML = messages.map(msg => {
        const isSent = msg.from === currentUsername;
        const time = new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        
        return `
            <div class="chat-message ${isSent ? 'sent' : 'received'}">
                <div class="message-bubble">${escapeHtml(msg.message)}</div>
                <div class="message-time">${time}</div>
            </div>
        `;
    }).join('');
    
    // Scroll to bottom
    container.scrollTop = container.scrollHeight;
}

function sendChatMessage() {
    const input = document.getElementById('chat-input');
    const message = input.value.trim();
    
    if (!message || !currentChatUser) return;
    
    const result = authSystem.sendMessage(currentChatUser, message);
    
    if (result.success) {
        input.value = '';
        loadChatMessages();
    } else {
        alert(result.message);
    }
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Georgia Milestones Test Functions
function startMilestones(subject) {
    alert(`🎓 Starting Georgia Milestones ${subject.toUpperCase()} Assessment\n\n` +
          `This is a timed test that simulates real Georgia Milestones conditions.\n\n` +
          `Features:\n` +
          `• Realistic test format\n` +
          `• Timed sections\n` +
          `• Detailed score report\n` +
          `• Performance level (Beginning Learner to Distinguished Learner)\n\n` +
          `Click OK to begin your assessment.`);
    
    // Set up for Milestones test
    currentSubject = subject === 'ela' ? 'ela' : subject;
    currentGrade = authSystem.getCurrentUser()?.grade || '5';
    
    // Start the quiz with Milestones mode
    startQuiz();
}

// NWEA MAP Benchmark Functions
function startBenchmark(subject) {
    alert(`📊 Starting NWEA MAP ${subject.toUpperCase()} Assessment\n\n` +
          `This adaptive test adjusts difficulty based on your responses.\n\n` +
          `Features:\n` +
          `• Adaptive difficulty\n` +
          `• Untimed (take your time!)\n` +
          `• RIT score reporting\n` +
          `• Growth measurement\n\n` +
          `The test will start with medium difficulty and adapt to your level.\n\n` +
          `Click OK to begin your assessment.`);
    
    // Set up for MAP test
    currentSubject = subject === 'reading' ? 'ela' : subject;
    currentGrade = authSystem.getCurrentUser()?.grade || '5';
    
    // Start the quiz with adaptive mode
    startQuiz();
}
