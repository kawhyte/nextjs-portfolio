import React from "react"
// import photo from "../images/bubble.png";


function Section() {
  return (
    <div className="bg-gradient ">
      <section className="max-w-6xl min-w-0 mx-auto mb-8 ">
        <div className="grid grid-cols-1 py-12 mx-8 sm:mx-20 md:mx-20 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
        <section className="my-4 overflow-hidden bg-white  md:mx-4">
        <p className="py-2 text-lg font-extrabold text-center bg-yellow-50 sm:py-4 md:text-md font-Montserrat">
        Observational Astronomer
        </p>
        
        <div className="p-5 font-light text-gray-700 break-words text-md font-Montserrat">
        <span>
        {" "}
        I&apos;m a Software Developer by day and an amateur astronomer
        by night.
        </span>
        <span className="hidden pl-4 m-4 italic text-left text-gray-700 border-l-4 border-orange-300 rounded md:block">
        {" "}
        &quot;The good thing about science is that it&apos;s true
        whether or not you believe in it&quot;. ~ Neil deGrasse Tyson
        </span>
        </div>
        </section>
        <section className="my-4 overflow-hidden bg-white  rounded-lg  md:mx-4">
          <p className="py-2 text-lg font-extrabold text-center bg-yellow-50 sm:py-4 md:text-md font-Montserrat ">
            Software Engineer{" "}
          </p>

          <div className="p-5 font-light text-gray-700 break-words text-md font-Montserrat">
            Currently, I&apos;m focused on developing web applications with
            C#, .NET Core, Node.js, and React/NextJS/Gatsby.
            <span className="hidden pl-4 m-4 italic text-left text-gray-700 border-l-4 border-orange-300 rounded md:block">
              {" "}
              &quot;A good programmer is someone who always looks both ways
              before crossing a one-way street&quot;. ~ Doug Linder
            </span>
          </div>
        </section>
          <section className="my-4 overflow-hidden bg-white md:mx-4">
            <p className="py-2 text-lg font-extrabold text-center bg-yellow-50 sm:py-4 md:text-md font-Montserrat">
              Nintendo Enthusiast
            </p>

            <div className="p-5 font-light text-gray-700 break-words text-md font-Montserrat">
              Games with Mario, Zelda or Metriod... Nintendo all the way! <span role="img" aria-label="game"> ✌🏽+ 🎮</span>
              <span className="hidden pl-4 m-4 italic text-left text-gray-700 border-l-4 border-orange-300 rounded md:block">
                {" "}
                &quot;When my dad was young he shot marbles. When I was young I
                played Marble Madness on my Nintendo Entertainment System&quot;.
                ~ Kevin James Breaux
              </span>
            </div>
          </section>
        </div>
      </section>
    </div>
  )
}

export default Section
