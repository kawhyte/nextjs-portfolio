
import Image from "next/image";



function CaseStudy({ problem, approach, result, problem2, approach2, result2  }) {
  


  // const CustomComponent = ({ imgs, slug, name }) => (
  //   <div className="w-64 my-8 overflow-hidden bg-white rounded-lg shadow-lg image">
  //     <Link to={`/${slug}`}>
  //       <img src={`https:${imgs}`} alt={`${name}`} title={`${name}`} />
  //       <span className="inline-block w-full p-2 text-sm text-center text-gray-700">{`${name}`}</span>
  //     </Link>
  //   </div>
  // )
 console.log(approach)

  // let imgs = data
  
  return (
    <div className="flex flex-col justify-center px-3 bg-gray-100 ">
  
      <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="text-center mb-10">
      <h4 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">Learn how I developed this project</h4>
      <div class="flex mt-6 justify-center">
        <div class="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
      </div>
    </div>
    <div class="flex flex-col  justify-center">

      <div class="p-4 mb-20  flex flex-col text-center items-center">
        <div class="w-28 w- h-28 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-10 flex-shrink-0">
        <Image
        src="/boy.png" alt="me" width="170" height="241"
        alt="boy running"
        className="w-48 m-2 mt-6 sm:w-48 md:my-8 md:w-56 lg:mx-20"
      />
        </div>
        <div class="flex-grow">
          <h3 class="text-gray-900 text-lg title-font font-medium mb-3">Step 1 - Planning Phase</h3>
          <h2 class="text-gray-900 text-base title-font font-normal italic mb-3"> What problem was I trying to solve</h2>
          <p class="leading-relaxed text-base text-left">{problem}</p>
   
        </div>
      </div>
      <div class="p-4 mb-20  flex flex-col text-center items-center">
        <div class="w-28 w- h-28 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-10 flex-shrink-0">
        <Image
        src="/girl_sitting.png" alt="me" width="170" height="241"
        alt="girl sitting"
        className="w-48 m-2 mt-6 sm:w-48 md:my-8 md:w-56 lg:mx-20"
      />
        </div>
        <div class="flex-grow">
          <h3 class="text-gray-900 text-lg title-font font-medium mb-3">Step 2 - Project Requirement Phase</h3>
          <h2 class="text-gray-900 text-base title-font font-normal italic mb-3"> Project Requirements</h2>
          <p class="leading-relaxed text-base text-left">{approach}</p>
   
        </div>
      </div>
      <div class="p-4 mb-20  flex flex-col text-center items-center">
        <div class="w-28 w- h-28 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-10 flex-shrink-0">
        <Image
        src="/girl.png" alt="me" width="170" height="241"
        alt="girl"
        className="w-48 m-2 mt-6 sm:w-48 md:my-8 md:w-56 lg:mx-20"
      />
        </div>
        <div class="flex-grow">
          <h3 class="text-gray-900 text-lg title-font font-medium mb-3">Step 3 - Software selection & Result</h3>
          <h2 class="text-gray-900 text-base title-font font-normal italic mb-3"> What technology was used</h2>
          <p class="leading-relaxed text-base text- text-left">{result}</p>
      
        </div>
      </div>
      


   
    </div>
  </div>
</section>
    </div>
  )
}

export default CaseStudy
