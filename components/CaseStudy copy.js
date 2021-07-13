
import Image from "next/image";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'



function CaseStudy({ problem, approach, result, problem2, approach2, result2  }) {
  


  // const CustomComponent = ({ imgs, slug, name }) => (
  //   <div className="w-64 my-8 overflow-hidden bg-white rounded-lg shadow-lg image">
  //     <Link to={`/${slug}`}>
  //       <img src={`https:${imgs}`} alt={`${name}`} title={`${name}`} />
  //       <span className="inline-block w-full p-2 text-sm text-center text-gray-700">{`${name}`}</span>
  //     </Link>
  //   </div>
  // )


  // let imgs = data
  
  return (
    <div className="flex flex-col justify-center px-3 bg-gray-100 ">
      <h2 className="container pt-4 mb-4 text-2xl font-extrabold leading-tight tracking-tight text-left text-gray-900 sm:text-3xl">
        Learn how I developed this project
      </h2>
      <section className="container max-w-6xl mb-12">
        <div className="flex flex-col justify-center min-w-full">
          <div className="flex flex-col items-center justify-center py-6 pr-1 text-left bg-orange-200 md:flex-row">
            <div className="relative flex flex-col items-center justify-center md:w-2/5">
              <Image
                src="/boy.png" alt="me"  width="170" height="241"
                alt="boy"
                className="w-48 m-2 mt-6 sm:w-48 md:my-8 md:w-56 lg:mx-20"
              />
            </div>
            <div className="flex flex-col justify-center max-w-2xl ml-5 bg-orange-200 rounded md:w-3/5">
              <div className="text-xs font-bold text-orange-500 uppercase">
                Step 1 - Planning Phase
              </div>
              <div className="text-xl font-bold text-orange-700 md:text-3xl">
                What problem was I trying to solve
              </div>

              <div className="mt-4 text-left text-orange-800">
              {problem2}
                
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center py-6 pr-1 text-left bg-green-200 md:flex-row">
            <div className="relative flex flex-col items-center justify-center md:w-2/5">
            <Image
            src="/girl_sitting.png" alt="me" width="170" height="241"
            alt="boy"
            className="w-48 m-2 mt-6 sm:w-48 md:my-8 md:w-56 lg:mx-20"
          />
            </div>
            <div className="flex flex-col justify-center max-w-2xl ml-5 bg-green-200 rounded md:w-3/5">
              <div className="text-xs font-bold text-green-500 uppercase">
                Step 2 - Project Requirement Phase
              </div>
              <div className="text-xl font-bold text-green-700 md:text-3xl">
                Project Requirements
              </div>

              <div className="mt-4 text-left text-green-800">
                {approach2}
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center py-6 pr-1 text-left bg-indigo-200 md:flex-row">
            <div className="relative flex flex-col items-center justify-center md:w-2/5">
            <Image
            src="/girl.png" alt="me"  width="170" height="241"
            alt="boy"
            className="w-48 m-2 mt-6 sm:w-48 md:my-8 md:w-56 lg:mx-20"
          />
            </div>
            <div className="flex flex-col justify-center max-w-2xl ml-5 bg-indigo-200 rounded md:w-3/5">
              <div className="text-xs font-bold text-indigo-500 uppercase">
                Step 3 - Software selection & Testing Phase
              </div>
              <div className="text-xl font-bold text-indigo-700 md:text-3xl">
                What technology was used
              </div>

              <div className="mt-4 text-left text-indigo-800">
                {result2}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CaseStudy
