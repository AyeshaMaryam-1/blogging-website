import Header from "../components/header";

export default function Responsive2() {
    return (    
        <body>
        <Header/>
            <main className="parentContainer">
                <section className="about-content">
                    <h2>About Us</h2>
                    <p>Welcome to <strong>EduTech Insights</strong>, your trusted source for comprehensive and up-to-date educational content on the most in-demand tech courses. Whether you’re a student, a professional looking to enhance your skills, or someone passionate about technology, our blog offers curated insights and learning resources to help you thrive in your chosen field.</p>

                    <h2>Our Mission</h2>
                    <p>At <strong>EduTech Insights</strong>, our mission is to bridge the gap between traditional learning and the fast-evolving tech world. We aim to provide <strong>easy-to-understand, engaging, and actionable content</strong> that empowers learners to explore and master the latest in technology.</p>

                    <h2>What We Offer</h2>
                    <ul className="course-list">
                        <li><strong>Artificial Intelligence and Machine Learning</strong>: Dive into the world of intelligent systems and machine learning algorithms that are transforming industries.</li>
                        <li><strong>Cybersecurity and Networking</strong>: Learn how to safeguard data and secure networks in the era of increasing cyber threats.</li>
                        <li><strong>Cloud Computing and Architecture</strong>: Explore cloud infrastructure and design scalable, reliable, and efficient cloud systems.</li>
                        <li><strong>Data Science and Analytics</strong>: Harness the power of data to drive decisions and solve complex problems.</li>
                        <li><strong>Digital Marketing and E-Commerce</strong>: Master the tools and techniques to succeed in the digital economy and boost online presence.</li>
                        <li><strong>Full Stack Web Development</strong>: Build end-to-end web applications with a strong foundation in both front-end and back-end technologies.</li>
                    </ul>

                    <h2>Why EduTech Insights?</h2>
                    <ul>
                        <li><strong>Expertly Curated Content</strong>: Our content is created by industry professionals who are passionate about sharing their knowledge and expertise.</li>
                        <li><strong>Actionable Learning</strong>: We break down complex concepts into easily digestible articles and guides.</li>
                        <li><strong>Up-to-Date Information</strong>: We ensure our readers get the latest trends, tools, and technologies.</li>
                        <li><strong>Hands-On Approach</strong>: Our blog emphasizes practical applications and real-world case studies.</li>
                    </ul>

                    <h2>Join Our Learning Community</h2>
                    <p>We believe learning is a journey, and we invite you to join our growing community of tech enthusiasts, learners, and professionals. Stay updated with our latest blog posts by subscribing to our newsletter and following us on social media.</p>

                    <h2>Get in Touch</h2>
                    <p>If you have any questions, suggestions, or would like to collaborate, feel free to reach out. We’re always excited to hear from our readers and fellow learners.</p>
                </section>
            </main>

            <footer>
                <p>&copy; 2024 EduTech Insights. All rights reserved.</p>
            </footer>
            </body>
    
    );
  }