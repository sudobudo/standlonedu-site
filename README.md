# Standalone EDU 📚

A comprehensive K-12 learning platform aligned with Georgia Department of Education (GADOE) standards. This platform combines the best features of IXL and iReady to provide an engaging, standards-based learning experience for students from Kindergarten through 12th grade.

## Features ✨

### 🎓 Grade Levels
- **K-12 Coverage**: Complete curriculum from Kindergarten through Grade 12
- **Grade-Specific Content**: Questions and standards tailored to each grade level
- **Easy Navigation**: Intuitive grade selection interface

### 📖 Subject Areas
- **Mathematics**: Algebra, Geometry, Statistics, Number Operations
- **English Language Arts**: Reading, Writing, Grammar, Literature
- **Science**: Physical Science, Life Science, Earth Science
- **Social Studies**: History, Geography, Government, Economics

### 🎯 GADOE Standards Alignment
All questions are aligned with:
- **Mathematics**: Georgia Standards of Excellence (GSE)
- **ELA**: Georgia ELA Standards (ELAGSE)
- **Science**: Georgia Performance Standards
- **Social Studies**: Georgia Social Studies Standards

### 📊 Progress Tracking
- **Real-time Scoring**: Instant feedback on answers
- **Progress Dashboard**: Track performance across subjects
- **Accuracy Metrics**: Monitor correct answer percentages
- **Points System**: Earn points for correct answers
- **Local Storage**: Progress saved automatically in browser

### 💡 Interactive Learning
- **Multiple Choice Questions**: Clear, grade-appropriate questions
- **Instant Feedback**: Immediate explanations for all answers
- **Skip Option**: Move past difficult questions
- **Randomized Questions**: Different experience each session

## Getting Started 🚀

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No installation required - runs entirely in the browser!

### Running the Application

1. **Clone or Download** the repository to your computer

2. **Open the application**:
   - Simply open `index.html` in your web browser
   - Or use a local server (recommended):
     ```bash
     # Using Python 3
     python3 -m http.server 8000
     
     # Using Node.js (with http-server)
     npx http-server
     ```

3. **Access the application**:
   - Direct file: Open `index.html` in your browser
   - Local server: Navigate to `http://localhost:8000`

## How to Use 📝

### For Students

1. **Select Your Grade**
   - Click on your grade level from the home page
   - Grades range from Kindergarten to Grade 12

2. **Choose a Subject**
   - Select from Math, ELA, Science, or Social Studies
   - View your progress for each subject

3. **Start Practicing**
   - Answer questions aligned with GADOE standards
   - Get instant feedback on your answers
   - Learn from detailed explanations

4. **Track Your Progress**
   - View your statistics in the Progress tab
   - See accuracy rates and points earned
   - Monitor improvement over time

### Navigation

- **Home**: Select grade level and start learning
- **Practice**: Active quiz interface (shown when in a quiz)
- **Progress**: View your statistics and achievements
- **Standards**: Learn about GADOE standards alignment

## Project Structure 📁

```
standalone-edu/
├── index.html          # Main HTML structure
├── style.css           # Styling and responsive design
├── script.js           # Application logic and quiz functionality
├── questions.js        # GADOE-aligned question bank
└── README.md          # This file
```

## Technology Stack 💻

- **HTML5**: Semantic markup and structure
- **CSS3**: Modern styling with CSS Grid and Flexbox
- **Vanilla JavaScript**: No frameworks - pure JS for maximum performance
- **Local Storage API**: Client-side data persistence
- **Google Fonts**: Poppins font family for clean typography

## Features in Detail 🔍

### Question Bank
- **Comprehensive Coverage**: Questions for all K-12 grades
- **Multiple Subjects**: Math, ELA, Science, Social Studies
- **Standards-Based**: Each question tagged with specific GADOE standard
- **Explanations**: Detailed explanations for every answer

### Progress System
- **Persistent Storage**: Progress saved in browser localStorage
- **Detailed Analytics**: 
  - Total questions answered
  - Total correct answers
  - Accuracy percentage
  - Points earned
  - Subject-specific progress

### User Interface
- **Modern Design**: Clean, professional educational interface
- **Responsive**: Works on desktop, tablet, and mobile devices
- **Accessible**: High contrast, readable fonts, clear navigation
- **Intuitive**: Easy to use for students of all ages

## Customization 🎨

### Adding More Questions

Edit `questions.js` to add questions:

```javascript
questionBank['5']['math'].push({
    standard: 'MGSE5.NBT.7',
    question: 'Your question here?',
    answers: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
    correct: 1, // Index of correct answer (0-3)
    explanation: 'Explanation of the correct answer.'
});
```

### Styling

Modify `style.css` to change:
- Colors (CSS variables in `:root`)
- Fonts
- Layout and spacing
- Animations

### Functionality

Edit `script.js` to modify:
- Quiz logic
- Scoring system
- Progress tracking
- Navigation behavior

## Browser Support 🌐

- ✅ Chrome (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Opera

## Future Enhancements 🚀

Potential features for future versions:
- [ ] User accounts and authentication
- [ ] Teacher dashboard for monitoring students
- [ ] More question types (fill-in-blank, drag-and-drop)
- [ ] Timed quizzes and challenges
- [ ] Badges and achievements
- [ ] Printable worksheets
- [ ] Parent reports
- [ ] Video explanations
- [ ] Study mode vs. test mode
- [ ] Adaptive difficulty

## Standards References 📚

### GADOE Resources
- [Georgia Standards of Excellence](https://www.georgiastandards.org/)
- [Mathematics Standards](https://www.georgiastandards.org/Georgia-Standards/Pages/Math.aspx)
- [ELA Standards](https://www.georgiastandards.org/Georgia-Standards/Pages/ELA.aspx)
- [Science Standards](https://www.georgiastandards.org/Georgia-Standards/Pages/Science.aspx)
- [Social Studies Standards](https://www.georgiastandards.org/Georgia-Standards/Pages/Social-Studies.aspx)

## License 📄

This project is created for educational purposes. Feel free to use and modify for your educational needs.

## Contributing 🤝

Contributions are welcome! To contribute:
1. Fork the repository
2. Create a feature branch
3. Add your questions or features
4. Test thoroughly
5. Submit a pull request

## Support 💬

For questions or issues:
- Check the documentation above
- Review the code comments
- Test in different browsers

## Acknowledgments 🙏

- Inspired by IXL and iReady learning platforms
- Aligned with Georgia Department of Education standards
- Built with modern web technologies
- Designed for student success

---

**Standalone EDU** - Empowering K-12 learners with standards-based education! 🎓✨
