const history = [
    {
        title: 'Full Stack Developer',
        company: 'Computer Geeks',
        bullets: [
            'Developed and maintain 5+ client websites & apps using modern web technologies including React, JavaScript, PHP, Vue.js, WordPress, and SQL.',
            'Troubleshoot technical issues across front-end and back-end systems, ensuring optimal performance, usability, and cross-browser compatibility.',
            'Collaborate with clients to implement new features, enhance design, and optimize functionality based on evolving business needs.',
            'Perform regular updates, performance tuning, and security checks to ensure reliability and up time.',
            'Manage website hosting environments, including domain setup, DNS configuration, and server-side maintenance to ensure site stability and uptime.'
        ],
        startDate: 'Aug 2024',
        endDate: 'Present',
        isCurrentPosition: true
    },
    {
        title: 'Lead Web Developer Internship',
        company: 'Envision Bible World',
        bullets: [
            'Led the web development process, overseeing all technical aspects and team coordination.',
            'Fixed broken web forms which significantly improved data collection and user interactions.',
            'Boosted website speed by 20% by removing and optimizing current systems, ensuring faster load times and improved performance.',
            'Created comprehensive documentation from scratch, providing clear guidance for future developers and users.',
            'Offered creative feedback to improve website flow and readability.'
        ],
        startDate: 'Apr 2024',
        endDate: 'May 2024',
        isCurrentPosition: false
    }
]

export default function WorkExperience(){
    return(
        <div className="flex flex-col items-center gap-10">
            <h1 className="text-4xl font-semibold text-white">Work History 💼</h1>
            <div className="flex flex-col items-start gap-5">
                {history.map((item, index) => (
                    <div>
                        <h1 className="text-3xl text-white font-semibold">{item.title}</h1>
                        <p className="text-gray-400 font-medium">{item.company}</p>
                        <p className="text-white font-medium">{item.startDate} - <span className={`${item.isCurrentPosition ? 'text-indigo-400' : ''}`}>{item.endDate}</span></p>
                        {item.bullets.map((bullet, index) => (
                            <p className="text-gray-400 m-2 font-medium">• {bullet} </p>
                        ))}
                    </div>
                ))}
            </div>
        </div>  
    )
}