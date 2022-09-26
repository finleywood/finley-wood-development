import Image from 'next/image';
import Footer from '../components/Footer';


export default function Home() {
  return (
    <div className="w-full h-max flex justify-center">
      <div className='w-3/4 md:w-2/4 mb h-full flex flex-col justify-start pt-10'>
        <div className='w-full h-full flex flex-row justify-start items-center'>
          <Image blurDataURL='/profilepic_blurred.jpg' placeholder='blur' src="/profilepic.jpg" width={150} height={150} alt="Profile Picture" />
        </div>
        <div className='flex flex-col justify-evenly items-center pt-5'>
          <p className='font-poppins'>I am a software developer and University student at the University of Southampton, United Kingdom
            who enjoys web development and infrastructure. I am proficient in a variety of languages and frameworks, including but not limited to;
            JavaScript, Golang, Java, Python, C/C++, SQL, React and Svelte. I am also farily experienced with cloud tools such as AWS, GCP, Debian and Red Hat based linux distributions, Kubernetes
            and Docker. I am currently in the process of looking for a summer internship for 2023 and am open to any opportunities.
            My most prolific and largest projects are: TetrECS; a JavaFX based Tetris game and LinkBulb a link shortening service with a frotend written in React and a backend written in Golang (both WIP).
          </p>
        </div>
        <div className='font-poppins mt-5 mb-5'>
          For enquiries and possible consultancy please email me at: <a href='mailto:hello@finleywood.dev' className='font-poppins text-blue-500 underline'>hello@finleywood.dev</a>
        </div>
        <Footer />
      </div>
    </div>
  )
}
