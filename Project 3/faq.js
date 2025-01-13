document.addEventListener('DOMContentLoaded', function() {
    fetch('faq-data.json')
        .then(response => response.json())
        .then(faqs => {
            const container = document.getElementById('faq-container');
            faqs.forEach(faq => {
                const questionElement = document.createElement('div');
                questionElement.className = 'faq-question';
                questionElement.textContent = faq.question;
                questionElement.innerHTML += '<span class="faq-toggle-icon">+</span>';  // Add toggle icon

                const answerElement = document.createElement('div');
                answerElement.className = 'faq-answer';
                answerElement.textContent = faq.answer;

                questionElement.addEventListener('click', () => {
                    // Check if the answer is currently shown
                    let isShown = answerElement.style.display === 'block';

                    // Toggle display of the answer
                    answerElement.style.display = isShown ? 'none' : 'block';
                    questionElement.classList.toggle('open');  // Toggle the open class to change the icon

                    // Update the icon based on the open state
                    questionElement.querySelector('.faq-toggle-icon').textContent = isShown ? '+' : '−';

                    // Adding a CSS transition effect if desired
                    if (!isShown) {
                        answerElement.style.height = 'auto';
                        answerElement.style.opacity = '1';
                        answerElement.classList.remove('collapsing');
                    } else {
                        answerElement.classList.add('collapsing');
                        setTimeout(() => {
                            answerElement.style.display = 'none';
                        }, 500); // Adjust this time to match CSS transition
                    }
                });

                container.appendChild(questionElement);
                container.appendChild(answerElement);
            });
        })
        .catch(error => console.error('Error loading the FAQ data:', error));
});
