import SkillImg from '../assets/skills.jpg';
import Html from '../assets/html5.png';
import Css from '../assets/css.webp';
import Js from '../assets/js.png';
import Tailwind from '../assets/tailwind.webp';
import React from '../assets/react.webp'
import Express from '../assets/express.png'
import Node from '../assets/node.png'
import Mongodb from '../assets/mongodbb.png'
import Bootstrap from '../assets/bootstrap.jpeg'
import Redux from '../assets/react-redux.png'


function Skills() {
    const config = {
        image1:Html,
        image2:Css,
        image3:Js,
        image4:Tailwind,
        image5:React,
        image6:Express,
        image7:Node,
        image8:Mongodb,
        image9:Bootstrap,
        image10:Redux,
}

  return <section className='flex flex-col md:flex-row bg-secondary px-5' id='skills'>
  <div className='py-5 px-10 md:w-1/3'>
      <img src={SkillImg} alt={""} />
  </div>
  <div className='md:w-1/2 flex justify-center'>
      <div className='flex flex-col justify-center text-white'>
          <h1 className='text-4xl border-b-4  border-primary  mb-5 w-[90px] font-bold'>Skills</h1>

          <div className="gap-3 columns-10">
          <img className='h-full w-full' src={config.image1} alt={""}/> 
          <img className='h-full w-full' src={config.image2} alt={""}/>
          <img className='h-full w-full' src={config.image3} alt={""}/>
          <img className='h-full w-full' src={config.image4} alt={""}/>
          <img className='h-full w-full' src={config.image5} alt={""}/>
          <img className='h-full w-full' src={config.image6} alt={""}/>
          <img className='h-full w-full' src={config.image7} alt={""}/>
          <img className='h-full w-full' src={config.image8} alt={""}/>
          <img className='h-full w-full' src={config.image9} alt={""}/>
          <img className='h-full w-full' src={config.image10} alt={""}/>
          </div>

      </div>
  </div>
</section>
}

export default Skills;