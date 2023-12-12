import '../css/main.css'
export function TimeLine(){
    const timeline = [
        {
          name: 'Inception',
          description:
          'Buffer Company was founded in 2010 by a group of avid travelers who shared a passion for exploring the world\'s wonders. The company began as a small startup with a mission to provide exceptional travel experiences to clients worldwide. During this phase, the team laid the foundation for the company\'s vision and values, establishing key relationships with esteemed partners and building a reputation for excellence.',
          date: 'AUG 2010',
          dateTime: '2010-08',
        },
        {
          name: 'Growth and Expansion',
          description:
            'In 2013, Buffer Company experienced rapid growth and expanded its operations to serve more clients around the globe. This phase marked a period of significant expansion, with the company enhancing its suite of services and streamlining the planning process through innovative technology. The team also grew significantly, attracting talented professionals who shared the company\'s vision for transformative travel experiences.',
          date: 'SEP 2013',
          dateTime: '203-09',
        },
        {
          name: 'Innovation and Integration',
          description:
            'During this phase, Buffer Company focused on innovation and integration, leveraging cutting-edge tools and technologies to enhance the travel experience. The team developed proprietary software to streamline the planning process, providing clients with real-time access to critical information and support. Additionally, the company integrated sustainability and responsible tourism practices into its operations, ensuring that every journey has a positive impact on local communities and the environment.',
          date: 'MAR 2017',
          dateTime: '2017-03',
        },
        {
          name: 'Emergence as a Leader',
          description:
            'In recent years, Buffer Company has emerged as a leader in the travel industry, known for its exceptional service, innovative approach, and commitment to responsible tourism. With a global network of partners and a team of passionate experts, the company continues to provide extraordinary travel experiences that exceed expectations. Looking to the future, the team remains committed to pushing boundaries and unlocking the transformative power of travel for clients worldwide.',
          date: 'FEB 2020',
          dateTime: '2020-02',
        },
      ]
    return(
        <>
            <div className="mx-auto -mt-8 max-w-7xl px-6 lg:px-8 py-16">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-4 title">
                    {timeline.map((item) => (
                    <div key={item.name }> 
                        <time
                        dateTime={item.dateTime}
                        className="flex items-center text-xl font-semibold leading-6 red"
                        >
                        <svg viewBox="0 0 4 4" className="mr-4 h-1 w-1 flex-none" aria-hidden="true">
                            <circle cx={5} cy={5} r={10} fill="currentColor" />
                        </svg>
                        {item.date}
                        <div
                            className="absolute -ml-2 h-px w-screen -translate-x-full bg-gray-900/10 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0"
                            aria-hidden="true"
                        />
                        </time>
                        <p className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">{item.name}</p>
                        <p className="mt-1 text-base leading-7 text-gray-600">{item.description}</p>
                    </div>
                    ))}
                </div>
            </div>
        </>
    );
}