import Magnifi from '../assets/magnifi.png'


const projects = [
    {
        img: Magnifi,
        title: 'Magnifi',
        desc: 'A social network application utilizing spotify listening history to share with others',
        deploy: 'https://magnifi-6c0024370b61.herokuapp.com/',
        repo: 'https://github.com/JoshON5/Magnifi'
    }
]
export default function Project() {
    return (
        <section className="bg-primary text- px-5 py-32" id="projects">
        <div className="container mx-auto grid md:grid-cols-2 items-center md:justify-between">
          <div className="about-info mb-5">
            <h2 className="text-5xl text-raspberry font-bold mb-5 border-b-[5px] w-[180px] border-mantis pb-2 dark:border-raspberry dark:text-saffron">
              Projects
            </h2>
          </div>
  
          <div className="about-img"></div>
        </div>
  
        <div className="projects container mx-auto grid md:grid-cols-3 gap-10">
          {projects.map((project, i) => {
            return (
              <div className="relative" key={i}>
                <img src={project.img} alt={project.title} />
                <div className="flex absolute left-0 right-0 top-[13px] bottom-0 mx-auto w-[90%] h-[90%]  bg-primary  opacity-0 duration-500 justify-center flex-col hover:opacity-100">
                  <p className="py-5 text-center font-bold px-2 text-coral">
                    {project.desc}
                  </p>
  
                  <div className="mx-auto">
                    <a
                      href={project.deploy}
                      className="px-5 py-2 text-coral bg-viridian hover:bg-mantis mr-5 font-bold"
                    >
                      Site
                    </a>
                    <a
                      href={project.repo}
                      className="px-5 py-2 text-coral bg-viridian hover:bg-mantis mr-5 font-bold"
                    >
                      Repo
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    )
}