// Authentication System for Standalone EDU

class AuthSystem {
    constructor() {
        this.currentUser = null;
        this.users = JSON.parse(localStorage.getItem('standaloneEduUsers')) || {};
        this.chats = JSON.parse(localStorage.getItem('standaloneEduChats')) || {};
        this.loadCurrentUser();
        this.createDefaultAccounts();
    }

    // Save chats to localStorage
    saveChats() {
        localStorage.setItem('standaloneEduChats', JSON.stringify(this.chats));
    }

    // Create default admin and test accounts
    createDefaultAccounts() {
        // Create admin account if doesn't exist
        if (!this.users['Standalonedu']) {
            this.users['Standalonedu'] = {
                username: 'Standalonedu',
                email: 'admin@standaloneedu.com',
                password: this.hashPassword('qwerty1090'),
                fullName: 'Standalone EDU Admin',
                grade: '12',
                role: 'admin',
                createdAt: new Date().toISOString(),
                preferences: {
                    theme: 'dark',
                    accentColor: 'purple',
                    avatarColor: 'purple',
                    profilePicture: null
                },
                friends: [],
                friendRequests: [],
                progress: {
                    totalAnswered: 0,
                    totalCorrect: 0,
                    totalPoints: 0,
                    subjectProgress: {}
                }
            };
        }

        // Create test account if doesn't exist
        if (!this.users['GaDoe Testing']) {
            this.users['GaDoe Testing'] = {
                username: 'GaDoe Testing',
                email: 'testing@gadoe.org',
                password: this.hashPassword('test123'),
                fullName: 'Georgia Department of Education',
                grade: '10',
                role: 'tester',
                createdAt: new Date().toISOString(),
                preferences: {
                    theme: 'light',
                    accentColor: 'blue',
                    avatarColor: 'blue',
                    profilePicture: null
                },
                friends: [],
                friendRequests: [],
                progress: {
                    totalAnswered: 0,
                    totalCorrect: 0,
                    totalPoints: 0,
                    subjectProgress: {}
                }
            };
        }

        this.saveUsers();
    }

    // Load current user from session
    loadCurrentUser() {
        const sessionUser = sessionStorage.getItem('currentUser');
        if (sessionUser) {
            this.currentUser = JSON.parse(sessionUser);
        }
    }

    // Save users to localStorage
    saveUsers() {
        localStorage.setItem('standaloneEduUsers', JSON.stringify(this.users));
    }

    // Save current user to session
    saveSession() {
        sessionStorage.setItem('currentUser', JSON.stringify(this.currentUser));
    }

    // Register new user
    register(username, email, password, fullName, grade) {
        // Validate inputs
        if (!username || !email || !password || !fullName) {
            return { success: false, message: 'All fields are required!' };
        }

        if (username.length < 3) {
            return { success: false, message: 'Username must be at least 3 characters!' };
        }

        if (password.length < 6) {
            return { success: false, message: 'Password must be at least 6 characters!' };
        }

        // Check if username already exists
        if (this.users[username]) {
            return { success: false, message: 'Username already exists!' };
        }

        // Check if email already exists
        for (let user in this.users) {
            if (this.users[user].email === email) {
                return { success: false, message: 'Email already registered!' };
            }
        }

        // Create new user
        this.users[username] = {
            username,
            email,
            password: this.hashPassword(password), // In production, use proper hashing
            fullName,
            grade: grade || 'K',
            role: 'user',
            createdAt: new Date().toISOString(),
            preferences: {
                theme: 'light',
                accentColor: 'indigo',
                avatarColor: 'default',
                profilePicture: null
            },
            friends: [],
            friendRequests: [],
            progress: {
                totalAnswered: 0,
                totalCorrect: 0,
                totalPoints: 0,
                subjectProgress: {}
            }
        };

        this.saveUsers();
        return { success: true, message: 'Account created successfully!' };
    }

    // Login user
    login(username, password) {
        if (!username || !password) {
            return { success: false, message: 'Username and password are required!' };
        }

        const user = this.users[username];
        if (!user) {
            return { success: false, message: 'Invalid username or password!' };
        }

        if (user.password !== this.hashPassword(password)) {
            return { success: false, message: 'Invalid username or password!' };
        }

        // Set current user
        this.currentUser = {
            username: user.username,
            email: user.email,
            fullName: user.fullName,
            grade: user.grade,
            createdAt: user.createdAt
        };

        this.saveSession();
        return { success: true, message: 'Login successful!', user: this.currentUser };
    }

    // Logout user
    logout() {
        this.currentUser = null;
        sessionStorage.removeItem('currentUser');
        return { success: true, message: 'Logged out successfully!' };
    }

    // Simple password hashing (in production, use bcrypt or similar)
    hashPassword(password) {
        let hash = 0;
        for (let i = 0; i < password.length; i++) {
            const char = password.charCodeAt(i);
            hash = ((hash << 5) - hash) + char;
            hash = hash & hash;
        }
        return hash.toString();
    }

    // Check if user is logged in
    isLoggedIn() {
        return this.currentUser !== null;
    }

    // Get current user
    getCurrentUser() {
        return this.currentUser;
    }

    // Update user progress
    updateProgress(progress) {
        if (!this.currentUser) return false;

        const username = this.currentUser.username;
        if (this.users[username]) {
            this.users[username].progress = progress;
            this.saveUsers();
            return true;
        }
        return false;
    }

    // Get user progress
    getProgress() {
        if (!this.currentUser) return null;

        const username = this.currentUser.username;
        return this.users[username]?.progress || {
            totalAnswered: 0,
            totalCorrect: 0,
            totalPoints: 0,
            subjectProgress: {}
        };
    }

    // Update user profile
    updateProfile(updates) {
        if (!this.currentUser) return { success: false, message: 'Not logged in!' };

        const username = this.currentUser.username;
        if (!this.users[username]) {
            return { success: false, message: 'User not found!' };
        }

        // Initialize preferences if not exists
        if (!this.users[username].preferences) {
            this.users[username].preferences = {
                theme: 'light',
                accentColor: 'indigo',
                avatarColor: 'default',
                profilePicture: null
            };
        }

        // Update allowed fields
        if (updates.fullName) this.users[username].fullName = updates.fullName;
        if (updates.email) this.users[username].email = updates.email;
        if (updates.grade) this.users[username].grade = updates.grade;
        if (updates.theme) this.users[username].preferences.theme = updates.theme;
        if (updates.accentColor) this.users[username].preferences.accentColor = updates.accentColor;
        if (updates.avatarColor) this.users[username].preferences.avatarColor = updates.avatarColor;
        if (updates.profilePicture !== undefined) this.users[username].preferences.profilePicture = updates.profilePicture;

        // Update current user session
        this.currentUser.fullName = this.users[username].fullName;
        this.currentUser.email = this.users[username].email;
        this.currentUser.grade = this.users[username].grade;

        this.saveUsers();
        this.saveSession();

        return { success: true, message: 'Profile updated successfully!' };
    }

    // Get user preferences
    getPreferences() {
        if (!this.currentUser) return null;
        const username = this.currentUser.username;
        return this.users[username]?.preferences || {
            theme: 'light',
            accentColor: 'indigo',
            avatarColor: 'default'
        };
    }

    // Change password
    changePassword(oldPassword, newPassword) {
        if (!this.currentUser) return { success: false, message: 'Not logged in!' };

        const username = this.currentUser.username;
        const user = this.users[username];

        if (user.password !== this.hashPassword(oldPassword)) {
            return { success: false, message: 'Current password is incorrect!' };
        }

        if (newPassword.length < 6) {
            return { success: false, message: 'New password must be at least 6 characters!' };
        }

        user.password = this.hashPassword(newPassword);
        this.saveUsers();

        return { success: true, message: 'Password changed successfully!' };
    }

    // Verify account for password reset
    verifyAccountForReset(username, email) {
        if (!username || !email) {
            return { success: false, message: 'Username and email are required!' };
        }

        const user = this.users[username];
        if (!user) {
            return { success: false, message: 'Account not found!' };
        }

        if (user.email !== email) {
            return { success: false, message: 'Email does not match our records!' };
        }

        // In a real app, you would send an email with a reset link
        // For now, we'll just return success and allow direct password reset
        return { success: true, message: 'Account verified!', username: username };
    }

    // Reset password (without needing old password)
    resetPassword(username, newPassword) {
        if (!username || !newPassword) {
            return { success: false, message: 'Username and password are required!' };
        }

        const user = this.users[username];
        if (!user) {
            return { success: false, message: 'Account not found!' };
        }

        if (newPassword.length < 6) {
            return { success: false, message: 'Password must be at least 6 characters!' };
        }

        user.password = this.hashPassword(newPassword);
        this.saveUsers();

        return { success: true, message: 'Password reset successfully!' };
    }

    // Find username by email
    findUsernameByEmail(email) {
        if (!email) {
            return { success: false, message: 'Email is required!' };
        }

        // Search for user with matching email
        for (let username in this.users) {
            if (this.users[username].email === email) {
                return { 
                    success: true, 
                    message: 'Username found!', 
                    username: username,
                    fullName: this.users[username].fullName
                };
            }
        }

        return { success: false, message: 'No account found with that email address!' };
    }

    // Check if user is admin
    isAdmin() {
        if (!this.currentUser) return false;
        const username = this.currentUser.username;
        return this.users[username]?.role === 'admin';
    }

    // Get all users (admin only)
    getAllUsers() {
        if (!this.isAdmin()) return { success: false, message: 'Admin access required!' };
        
        const userList = Object.values(this.users).map(user => ({
            username: user.username,
            fullName: user.fullName,
            email: user.email,
            grade: user.grade,
            role: user.role,
            createdAt: user.createdAt
        }));
        
        return { success: true, users: userList };
    }

    // Send friend request
    sendFriendRequest(targetUsername) {
        if (!this.currentUser) return { success: false, message: 'Not logged in!' };
        
        const currentUsername = this.currentUser.username;
        const targetUser = this.users[targetUsername];
        
        if (!targetUser) {
            return { success: false, message: 'User not found!' };
        }
        
        if (currentUsername === targetUsername) {
            return { success: false, message: 'Cannot add yourself as a friend!' };
        }
        
        // Initialize arrays if not exist
        if (!this.users[currentUsername].friends) this.users[currentUsername].friends = [];
        if (!this.users[currentUsername].friendRequests) this.users[currentUsername].friendRequests = [];
        if (!targetUser.friends) targetUser.friends = [];
        if (!targetUser.friendRequests) targetUser.friendRequests = [];
        
        // Check if already friends
        if (this.users[currentUsername].friends.includes(targetUsername)) {
            return { success: false, message: 'Already friends!' };
        }
        
        // Check if request already sent
        if (targetUser.friendRequests.includes(currentUsername)) {
            return { success: false, message: 'Friend request already sent!' };
        }
        
        // Add friend request
        targetUser.friendRequests.push(currentUsername);
        this.saveUsers();
        
        return { success: true, message: 'Friend request sent!' };
    }

    // Accept friend request
    acceptFriendRequest(requesterUsername) {
        if (!this.currentUser) return { success: false, message: 'Not logged in!' };
        
        const currentUsername = this.currentUser.username;
        const requester = this.users[requesterUsername];
        
        if (!requester) {
            return { success: false, message: 'User not found!' };
        }
        
        // Initialize arrays if not exist
        if (!this.users[currentUsername].friends) this.users[currentUsername].friends = [];
        if (!this.users[currentUsername].friendRequests) this.users[currentUsername].friendRequests = [];
        if (!requester.friends) requester.friends = [];
        
        // Check if request exists
        const requestIndex = this.users[currentUsername].friendRequests.indexOf(requesterUsername);
        if (requestIndex === -1) {
            return { success: false, message: 'No friend request from this user!' };
        }
        
        // Remove from requests
        this.users[currentUsername].friendRequests.splice(requestIndex, 1);
        
        // Add to friends list (both users)
        this.users[currentUsername].friends.push(requesterUsername);
        requester.friends.push(currentUsername);
        
        this.saveUsers();
        
        return { success: true, message: 'Friend request accepted!' };
    }

    // Reject friend request
    rejectFriendRequest(requesterUsername) {
        if (!this.currentUser) return { success: false, message: 'Not logged in!' };
        
        const currentUsername = this.currentUser.username;
        
        if (!this.users[currentUsername].friendRequests) {
            this.users[currentUsername].friendRequests = [];
        }
        
        const requestIndex = this.users[currentUsername].friendRequests.indexOf(requesterUsername);
        if (requestIndex === -1) {
            return { success: false, message: 'No friend request from this user!' };
        }
        
        this.users[currentUsername].friendRequests.splice(requestIndex, 1);
        this.saveUsers();
        
        return { success: true, message: 'Friend request rejected!' };
    }

    // Remove friend
    removeFriend(friendUsername) {
        if (!this.currentUser) return { success: false, message: 'Not logged in!' };
        
        const currentUsername = this.currentUser.username;
        const friend = this.users[friendUsername];
        
        if (!friend) {
            return { success: false, message: 'User not found!' };
        }
        
        // Remove from both friends lists
        const currentFriendIndex = this.users[currentUsername].friends.indexOf(friendUsername);
        const friendIndex = friend.friends.indexOf(currentUsername);
        
        if (currentFriendIndex !== -1) {
            this.users[currentUsername].friends.splice(currentFriendIndex, 1);
        }
        
        if (friendIndex !== -1) {
            friend.friends.splice(friendIndex, 1);
        }
        
        this.saveUsers();
        
        return { success: true, message: 'Friend removed!' };
    }

    // Get friends list
    getFriends() {
        if (!this.currentUser) return [];
        
        const currentUsername = this.currentUser.username;
        const user = this.users[currentUsername];
        
        if (!user || !user.friends) return [];
        
        return user.friends.map(friendUsername => {
            const friend = this.users[friendUsername];
            return {
                username: friend.username,
                fullName: friend.fullName,
                grade: friend.grade,
                profilePicture: friend.preferences?.profilePicture
            };
        });
    }

    // Get friend requests
    getFriendRequests() {
        if (!this.currentUser) return [];
        
        const currentUsername = this.currentUser.username;
        const user = this.users[currentUsername];
        
        if (!user || !user.friendRequests) return [];
        
        return user.friendRequests.map(requesterUsername => {
            const requester = this.users[requesterUsername];
            return {
                username: requester.username,
                fullName: requester.fullName,
                grade: requester.grade,
                profilePicture: requester.preferences?.profilePicture
            };
        });
    }

    // Search users
    searchUsers(query) {
        if (!query) return [];
        
        const lowerQuery = query.toLowerCase();
        const results = [];
        
        for (let username in this.users) {
            const user = this.users[username];
            if (username.toLowerCase().includes(lowerQuery) || 
                user.fullName.toLowerCase().includes(lowerQuery)) {
                results.push({
                    username: user.username,
                    fullName: user.fullName,
                    grade: user.grade,
                    profilePicture: user.preferences?.profilePicture
                });
            }
        }
        
        return results;
    }

    // Get chat key for two users (always same order)
    getChatKey(user1, user2) {
        return [user1, user2].sort().join('_');
    }

    // Send message
    sendMessage(toUsername, message) {
        if (!this.currentUser) return { success: false, message: 'Not logged in!' };
        
        const fromUsername = this.currentUser.username;
        const chatKey = this.getChatKey(fromUsername, toUsername);
        
        if (!this.chats[chatKey]) {
            this.chats[chatKey] = [];
        }
        
        this.chats[chatKey].push({
            from: fromUsername,
            to: toUsername,
            message: message,
            timestamp: new Date().toISOString()
        });
        
        this.saveChats();
        
        return { success: true, message: 'Message sent!' };
    }

    // Get messages with a user
    getMessages(otherUsername) {
        if (!this.currentUser) return [];
        
        const currentUsername = this.currentUser.username;
        const chatKey = this.getChatKey(currentUsername, otherUsername);
        
        return this.chats[chatKey] || [];
    }

    // Get user info for chat
    getUserForChat(username) {
        const user = this.users[username];
        if (!user) return null;
        
        return {
            username: user.username,
            fullName: user.fullName,
            profilePicture: user.preferences?.profilePicture
        };
    }
}

// Initialize auth system
const authSystem = new AuthSystem();
