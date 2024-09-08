import '../globalStyles.css';
import './teamStyles.css'

function Team() {
    return (
        <>
            <section className='section' id='introSection'>
                <div className='contentSection'>
                    <div className="welcomeText">Our Team</div>
                    <div class="fade_rule"></div> 
                    <div className="welcomeText">Get to Know the Dedicated Team Behind Key Vault: Your Trusted Partners in Crafting a Secure Password Manager! With Their Expertise and Hard Work, They've Developed an Easy-to-Use Solution Ensuring Your Online Accounts Stay Safe and Secure, Making Digital Security a Breeze!</div>
                </div>
            </section>


            <section className='section' id='cardSection'>
                <div className="contentSection" id='cardHolder'>
                    <card className = 'nameCard' id = "amanCard">
                        <div className="profilePhoto"></div>
                        <div className="name">Aman Kumar</div>
                        <div className="preDescription">-Full Stack Developer</div>
                        <div className="details">Specializing in front-end and Back-end development, excels in designing user interfaces. He combines creativity and technical skills to create engaging websites. Aiming for impactful contributions, showcasing dedication to innovation and user experience.</div>
                    </card>
                    <card className = 'nameCard' id = "anshCard">
                        <div className="profilePhoto"></div>
                        <div className="name">Ansh Shrivastav</div>
                        <div className="preDescription">-Backend Developer</div>
                        <div className="details">Specializes in backend development. He uses his problem-solving skills to make meaningful contributions to tech projects. By aligning his abilities with his goals, he shows his dedication to learning and improving.</div>
                    </card>
                    <card className = 'nameCard' id = "aakashCard">
                        <div className="profilePhoto"></div>
                        <div className="name">Aayush Gupta</div>
                        <div className="preDescription">-Full Stack Developer</div>
                        <div className="details">An IT student passionate about competitive programming and web development, he solves problems with creativity and analysis. Dedicated to learning, he's driven to contribute meaningfully, aligning his skills with tech goals and showcasing innovation.</div>
                    </card>
                </div>
            </section>
        </>
    )
}

export default Team