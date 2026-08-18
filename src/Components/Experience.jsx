import { asset } from "../assets/Assets";

const Experience = () => {
  const experience = [
    { id: 1, src: asset.HtmlLogo, title: "Html" },
    { id: 2, src: asset.CssLogo, title: "CSS" },
    { id: 3, src: asset.JsLogo, title: "Javascript" },
    { id: 4, src: asset.reactLogo, title: "React" },
    { id: 5, src: asset.nextJsLogo, title: "NextJs" },
    { id: 6, src: asset.tailwinsCssLogo, title: "Tailwind" },
    { id: 7, src: asset.nodeJsImage, title: "NodeJs" },
    { id: 8, src: asset.GitHubLogo, title: "GitHub" },
  ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-[#0F0A1F] to-[#1E1533] w-full h-full text-white"
    >
      <div className="max-w-screen-lg flex flex-col justify-center mx-auto p-4 w-full h-full">
        <div>
          <div>
            <p className="text-4xl font-bold inline border-b-4 border-[#7C3AED]">
              Experience
            </p>
            <p className="text-xl py-6 text-gray-400">
              Check out some of my skills here
            </p>
          </div>
          <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
            {experience.map(({ id, src, title }) => (
              <div
                key={id}
                className="bg-[#150F26] border border-white/5 shadow-lg shadow-black/30 hover:border-[#7C3AED]/40 hover:shadow-[#7C3AED]/20 hover:-translate-y-1 duration-300 py-4 rounded-xl"
              >
                <img src={src} alt={title} className="mx-auto w-20" />
                <p className="font-bold text-xl pt-4 text-gray-200">
                  {title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;