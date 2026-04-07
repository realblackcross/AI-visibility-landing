import { Search, Zap, BarChart3 } from "lucide-react";
import { BrainCircuit, TrendingDown } from "lucide-react";
import { FileSearch, Rocket } from "lucide-react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

function App() {

const [score, setScore] = useState(null);
const [website, setWebsite] = useState("");
const [error, setError] = useState("");

const checkVisibility = () => {

if (!website.trim()) {
setError("Please enter a website URL");
setScore(null);
return;
}

setError("");

const randomScore = Math.floor(Math.random() * 40) + 60;
setScore(randomScore);
};

/* TYPEWRITER */

const phrases = [
"Improve Your Devtool Visibility",
"Optimize Your Devtool for AI Search",
"Get Recommended by ChatGPT",
"Track Your AI Search Presence",
"Rank Higher in Generative Search"
];

const [currentText,setCurrentText]=useState("");
const [phraseIndex,setPhraseIndex]=useState(0);
const [charIndex,setCharIndex]=useState(0);
const [isDeleting,setIsDeleting]=useState(false);

useEffect(()=>{

const typingSpeed=isDeleting?40:70;

const timeout=setTimeout(()=>{

const currentPhrase=phrases[phraseIndex];

if(!isDeleting){

setCurrentText(currentPhrase.substring(0,charIndex+1));
setCharIndex(charIndex+1);

if(charIndex===currentPhrase.length){
setTimeout(()=>setIsDeleting(true),1500);
}

}else{

setCurrentText(currentPhrase.substring(0,charIndex-1));
setCharIndex(charIndex-1);

if(charIndex===0){
setIsDeleting(false);
setPhraseIndex((phraseIndex+1)%phrases.length);
}

}

},typingSpeed);

return()=>clearTimeout(timeout);

},[charIndex,isDeleting,phraseIndex]);

return (

<div className="font-sans text-gray-800 animate-fadeIn">

{/* BACKGROUND BLOBS */}

<div className="absolute top-10 left-10 w-40 md:w-72 h-40 md:h-72 bg-blue-300 rounded-full blur-3xl opacity-20 animate-pulse"></div>

<div className="absolute bottom-10 right-10 w-40 md:w-72 h-40 md:h-72 bg-purple-300 rounded-full blur-3xl opacity-20 animate-pulse"></div>


{/* NAVBAR */}

<nav className="flex justify-between items-center px-4 md:px-8 py-4 border-b">

<h1 className="text-lg md:text-xl font-bold text-blue-600">
AI Visibility
</h1>

<div className="space-x-6 hidden md:block">
<a className="hover:text-blue-600 cursor-pointer">Features</a>
<a className="hover:text-blue-600 cursor-pointer">Pricing</a>
<a className="hover:text-blue-600 cursor-pointer">Docs</a>
</div>

<button className="bg-blue-600 text-white px-4 md:px-5 py-2 rounded-lg hover:bg-blue-700 transition text-sm md:text-base">
Get Started
</button>

</nav>


{/* HERO */}

<section className="text-center py-20 md:py-24 px-4 md:px-6 bg-gradient-to-b from-blue-50 to-white">

<p className="text-blue-600 font-semibold mb-3">
AI Search Optimization for DevTools
</p>

<h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 leading-tight min-h-[120px]">

{currentText}

<span className="text-blue-600 animate-pulse">|</span>

</h1>

<p className="text-gray-600 mb-8 max-w-2xl mx-auto text-sm md:text-lg">
Help your developer tools appear in ChatGPT, Google SGE and other
generative AI search platforms.
</p>


{/* INPUT */}

<div className="flex flex-col sm:flex-row justify-center gap-3 items-center">

<input
placeholder="Enter your website"
value={website}
onChange={(e)=>setWebsite(e.target.value)}
className="border px-4 py-3 rounded-lg w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-blue-400"
/>

<button
onClick={checkVisibility}
className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition transform hover:scale-105 w-full sm:w-auto"
>
Check AI Visibility
</button>

</div>

{error && (
<p className="mt-3 text-red-500 text-sm">
{error}
</p>
)}

{score && (
<p className="mt-4 text-green-600 font-semibold">
AI Visibility Score: {score}/100
</p>
)}


{/* TRUSTED BY */}

<div className="mt-12 text-gray-500 text-sm">
Trusted by developer teams building modern devtools
</div>

<div className="flex flex-wrap justify-center gap-6 sm:gap-10 mt-6 opacity-60 text-sm">
<span>Stripe</span>
<span>Vercel</span>
<span>Supabase</span>
<span>Hashnode</span>
</div>

</section>


{/* DASHBOARD */}

<section className="py-20 px-4 md:px-6 bg-gradient-to-b from-white to-blue-50">

<div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">

{/* LEFT CONTENT */}

<div>

<p className="text-blue-600 font-semibold mb-3">
AI Visibility Platform
</p>

<h2 className="text-3xl md:text-4xl font-bold mb-6">
Understand How AI Search
Finds Your Devtool
</h2>

<p className="text-gray-600 text-lg mb-8">
Our platform analyzes how developer documentation, APIs,
and product pages appear inside AI search engines like
ChatGPT, Google SGE, and Perplexity.
</p>

<ul className="space-y-4 text-gray-600">

<li className="flex gap-3">
<span className="text-blue-600">✔</span>
Analyze how AI models interpret your documentation
</li>

<li className="flex gap-3">
<span className="text-blue-600">✔</span>
Track visibility across multiple AI assistants
</li>

<li className="flex gap-3">
<span className="text-blue-600">✔</span>
Identify missing signals that prevent AI recommendations
</li>

<li className="flex gap-3">
<span className="text-blue-600">✔</span>
Improve devtool discoverability in generative search
</li>

</ul>

</div>


{/* DASHBOARD CARD */}

<div className="flex justify-center">

<div className="bg-white rounded-2xl shadow-2xl border p-6 md:p-8 w-full max-w-xl transition hover:shadow-blue-200">

{/* header */}
<div className="flex justify-between items-center mb-6">
<h3 className="text-gray-700 font-semibold">AI Visibility Dashboard</h3>
<span className="text-green-500 text-sm font-medium">● Live Scan</span>
</div>

{/* stats */}
<div className="grid grid-cols-3 gap-3 md:gap-4 mb-6">

<div className="bg-blue-50 p-3 md:p-4 rounded-lg">
<p className="text-xs md:text-sm text-gray-500">Visibility Score</p>
<p className="text-lg md:text-xl font-bold text-blue-600">72%</p>
</div>

<div className="bg-indigo-50 p-3 md:p-4 rounded-lg">
<p className="text-xs md:text-sm text-gray-500">AI Mentions</p>
<p className="text-lg md:text-xl font-bold text-indigo-600">124</p>
</div>

<div className="bg-purple-50 p-3 md:p-4 rounded-lg">
<p className="text-xs md:text-sm text-gray-500">Competitors</p>
<p className="text-lg md:text-xl font-bold text-purple-600">8</p>
</div>

</div>

{/* progress bars */}

<div className="space-y-3">

<div>
<p className="text-sm text-gray-500 mb-1">ChatGPT Visibility</p>
<div className="w-full bg-gray-200 rounded-full h-2">
<div className="bg-blue-600 h-2 rounded-full w-[70%]"></div>
</div>
</div>

<div>
<p className="text-sm text-gray-500 mb-1">Google SGE</p>
<div className="w-full bg-gray-200 rounded-full h-2">
<div className="bg-indigo-600 h-2 rounded-full w-[55%]"></div>
</div>
</div>

<div>
<p className="text-sm text-gray-500 mb-1">Perplexity AI</p>
<div className="w-full bg-gray-200 rounded-full h-2">
<div className="bg-purple-600 h-2 rounded-full w-[62%]"></div>
</div>
</div>

</div>

</div>

</div>

</div>

</section>

       
{/* PROBLEM */}
<section className="py-16 md:py-20 px-4 md:px-6 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">

<div className="max-w-6xl mx-auto text-center">

<h2 className="text-3xl md:text-4xl font-bold mb-6">
Why Devtools Struggle with AI Visibility
</h2>

<p className="text-gray-600 text-base md:text-lg mb-12 md:mb-16 max-w-3xl mx-auto">
AI search engines prioritize structured, optimized documentation.
Most devtools miss critical signals that help them appear in
ChatGPT or generative answers.
</p>

</div>

{/* cards */}
<div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">

<div className="bg-white p-6 md:p-8 rounded-xl border shadow-sm hover:shadow-2xl transition transform hover:-translate-y-2">

<div className="w-14 h-14 flex items-center justify-center rounded-xl bg-blue-100 text-blue-600 mb-6">
<BrainCircuit size={28}/>
</div>

<h3 className="text-lg md:text-xl font-semibold mb-3">
Poor AI Indexing
</h3>

<p className="text-gray-600">
Documentation is not structured for LLM retrieval.
AI engines cannot easily understand your devtool.
</p>

</div>

<div className="bg-white p-6 md:p-8 rounded-xl border shadow-sm hover:shadow-2xl transition transform hover:-translate-y-2">

<div className="w-14 h-14 flex items-center justify-center rounded-xl bg-indigo-100 text-indigo-600 mb-6">
<TrendingDown size={28}/>
</div>

<h3 className="text-lg md:text-xl font-semibold mb-3">
Low AI Citations
</h3>

<p className="text-gray-600">
ChatGPT and AI assistants often recommend competitors
because your docs lack AI optimization signals.
</p>

</div>

<div className="bg-white p-6 md:p-8 rounded-xl border shadow-sm hover:shadow-2xl transition transform hover:-translate-y-2">

<div className="w-14 h-14 flex items-center justify-center rounded-xl bg-purple-100 text-purple-600 mb-6">
<Search size={28}/>
</div>

<h3 className="text-lg md:text-xl font-semibold mb-3">
Weak Devtool SEO
</h3>

<p className="text-gray-600">
Traditional SEO doesn't work the same for AI search.
You need AEO and GEO optimization.
</p>

</div>

</div>


{/* visual element */}
<div className="mt-16 md:mt-20 flex justify-center">

<div className="bg-white border rounded-xl shadow-lg p-6 w-full max-w-md md:max-w-lg">

<p className="text-sm text-gray-500 mb-4">
Example AI Recommendation Result
</p>

<div className="bg-gray-100 p-4 rounded-lg text-left text-sm text-gray-700">

<strong>ChatGPT Result:</strong>  
"For API monitoring tools, developers often use **Datadog, PostHog,
and Sentry**."

<br/><br/>

<span className="text-red-500">
Your devtool is missing from AI recommendations.
</span>

</div>

</div>

</div>

</section>



{/* FEATURED / PROMOTIONS SECTION */}

<section className="py-16 md:py-20 px-4 md:px-6 bg-gradient-to-b from-white via-blue-50 to-white">

<div className="max-w-6xl mx-auto text-center mb-12 md:mb-16">

<p className="text-blue-600 font-semibold mb-3">
Featured Capabilities
</p>

<h2 className="text-3xl md:text-4xl font-bold mb-4">
Power Your Devtool with AI Visibility Insights
</h2>

<p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
Discover how your developer product appears across AI assistants
and optimize your documentation to become the recommended tool
in AI-generated answers.
</p>

</div>


{/* Animated Cards Grid */}

<motion.div
initial={{ opacity:0, y:30 }}
animate={{ opacity:1, y:0 }}
transition={{ duration:0.6 }}
className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
>


{/* CARD 1 */}

<motion.div
initial={{ opacity:0, y:60 }}
whileInView={{ opacity:1, y:0 }}
viewport={{ once:true }}
transition={{ duration:0.6 }}
className="group bg-white rounded-xl border shadow-sm hover:shadow-2xl transition duration-300 hover:-translate-y-2 overflow-hidden"
>

<img
src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
alt="AI analytics dashboard"
className="h-44 w-full object-cover"
/>

<div className="p-6">

<div className="flex items-center gap-3 mb-4 text-blue-600">
<Search size={22}/>
<span className="font-semibold">AI Discovery Insights</span>
</div>

<p className="text-gray-600 text-sm">
Understand how ChatGPT, Perplexity and generative AI platforms
discover your developer product and surface it in recommendations.
</p>

</div>

</motion.div>


{/* CARD 2 */}

<motion.div
initial={{ opacity:0, y:60 }}
whileInView={{ opacity:1, y:0 }}
viewport={{ once:true }}
transition={{ duration:0.6, delay:0.2 }}
className="group bg-white rounded-xl border shadow-sm hover:shadow-2xl transition duration-300 hover:-translate-y-2 overflow-hidden"
>

<img
src="https://images.unsplash.com/photo-1555949963-aa79dcee981c"
alt="developer code analytics"
className="h-44 w-full object-cover"
/>

<div className="p-6">

<div className="flex items-center gap-3 mb-4 text-indigo-600">
<Zap size={22}/>
<span className="font-semibold">AEO Optimization Engine</span>
</div>

<p className="text-gray-600 text-sm">
Automatically detect missing signals in your documentation
and optimize them for Answer Engine Optimization (AEO).
</p>

</div>

</motion.div>


{/* CARD 3 */}

<motion.div
initial={{ opacity:0, y:60 }}
whileInView={{ opacity:1, y:0 }}
viewport={{ once:true }}
transition={{ duration:0.9, delay:0.7 }}
className="group bg-white rounded-xl border shadow-sm hover:shadow-2xl transition duration-300 hover:-translate-y-2 overflow-hidden"
>

<img
src="https://images.unsplash.com/photo-1551836022-d5d88e9218df"
alt="analytics dashboard"
className="h-44 w-full object-cover"
/>

<div className="p-6">

<div className="flex items-center gap-3 mb-4 text-purple-600">
<BarChart3 size={22}/>
<span className="font-semibold">Generative Search Analytics</span>
</div>

<p className="text-gray-600 text-sm">
Track when AI assistants mention your devtool,
compare visibility with competitors, and monitor growth.
</p>

</div>

</motion.div>

</motion.div>

</section>

{/* SOLUTION */}
<section className="py-20 md:py-24 px-4 md:px-6 bg-gradient-to-b from-indigo-50 via-white to-blue-50">

<div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">

{/* LEFT CONTENT */}
<div>

<h2 className="text-3xl md:text-4xl font-bold mb-6">
Optimize Your Product for AI Search
</h2>

<p className="text-gray-600 text-base md:text-lg mb-10">
Our platform analyzes developer documentation, API pages, and product
content to improve how AI assistants understand and recommend your devtool.
</p>

<div className="space-y-6">

<div className="flex gap-4">
<div className="bg-blue-100 text-blue-600 w-10 h-10 flex items-center justify-center rounded-lg">
⚡
</div>
<div>
<h3 className="font-semibold">AEO Optimization</h3>
<p className="text-gray-600 text-sm">
Optimize documentation for AI answer engines like ChatGPT.
</p>
</div>
</div>

<div className="flex gap-4">
<div className="bg-indigo-100 text-indigo-600 w-10 h-10 flex items-center justify-center rounded-lg">
📊
</div>
<div>
<h3 className="font-semibold">GEO Insights</h3>
<p className="text-gray-600 text-sm">
Understand how generative search engines rank your content.
</p>
</div>
</div>

<div className="flex gap-4">
<div className="bg-purple-100 text-purple-600 w-10 h-10 flex items-center justify-center rounded-lg">
🚀
</div>
<div>
<h3 className="font-semibold">AI Visibility Tracking</h3>
<p className="text-gray-600 text-sm">
Monitor how often your devtool is recommended by AI assistants.
</p>
</div>
</div>

</div>

</div>


{/* RIGHT SIDE PRODUCT MOCK */}
<div className="flex justify-center">

<div className="bg-white rounded-2xl shadow-xl border p-6 w-full max-w-sm">

<div className="flex justify-between mb-4">
<span className="text-gray-500 text-sm">AI Scan Result</span>
<span className="text-green-500 text-sm">Completed</span>
</div>

<div className="space-y-4">

<div>
<p className="text-sm text-gray-500 mb-1">ChatGPT Ranking</p>
<div className="w-full bg-gray-200 rounded-full h-2">
<div className="bg-blue-600 h-2 rounded-full w-[70%]"></div>
</div>
</div>

<div>
<p className="text-sm text-gray-500 mb-1">Google SGE</p>
<div className="w-full bg-gray-200 rounded-full h-2">
<div className="bg-indigo-600 h-2 rounded-full w-[55%]"></div>
</div>
</div>

<div>
<p className="text-sm text-gray-500 mb-1">Perplexity AI</p>
<div className="w-full bg-gray-200 rounded-full h-2">
<div className="bg-purple-600 h-2 rounded-full w-[62%]"></div>
</div>
</div>

</div>

</div>

</div>

</div>

</section>



{/* FEATURES */}
<section className="py-20 px-4 md:px-6 bg-gradient-to-b from-blue-50 via-white to-indigo-50">

<div className="max-w-6xl mx-auto text-center mb-14 md:mb-16">

<h2 className="text-3xl md:text-4xl font-bold mb-4">
Powerful AI Search Optimization
</h2>

<p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
Everything you need to improve how AI assistants discover,
understand, and recommend your developer tool.
</p>

</div>


<div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">

{/* CARD 1 */}
<div className="bg-white p-6 md:p-8 rounded-xl border shadow-sm hover:shadow-2xl transition duration-300 hover:-translate-y-2">

<div className="w-14 h-14 flex items-center justify-center rounded-xl bg-blue-100 text-blue-600 mb-6">
<Search size={28} />
</div>

<h3 className="text-lg md:text-xl font-semibold mb-3">
AI Visibility Scanner
</h3>

<p className="text-gray-600">
Scan your documentation, API references, and product pages
to measure how visible your devtool is across AI search engines.
</p>

</div>


{/* CARD 2 */}
<div className="bg-white p-6 md:p-8 rounded-xl border shadow-sm hover:shadow-2xl transition duration-300 hover:-translate-y-2">

<div className="w-14 h-14 flex items-center justify-center rounded-xl bg-indigo-100 text-indigo-600 mb-6">
<Zap size={28} />
</div>

<h3 className="text-lg md:text-xl font-semibold mb-3">
AEO Optimization
</h3>

<p className="text-gray-600">
Improve Answer Engine Optimization so ChatGPT,
Perplexity, and AI assistants cite your documentation
in developer recommendations.
</p>

</div>


{/* CARD 3 */}
<div className="bg-white p-6 md:p-8 rounded-xl border shadow-sm hover:shadow-2xl transition duration-300 hover:-translate-y-2">

<div className="w-14 h-14 flex items-center justify-center rounded-xl bg-purple-100 text-purple-600 mb-6">
<BarChart3 size={28} />
</div>

<h3 className="text-lg md:text-xl font-semibold mb-3">
AI Analytics
</h3>

<p className="text-gray-600">
Track when AI assistants mention your product,
compare visibility against competitors,
and identify opportunities to improve ranking.
</p>

</div>

</div>

</section>

{/* HOW IT WORKS */}

<section className="py-20 px-6 bg-gradient-to-b from-blue-50 via-white to-blue-50">

<div className="max-w-6xl mx-auto text-center mb-16">

<h2 className="text-4xl font-bold mb-4">
How It Works
</h2>

<p className="text-gray-600 max-w-2xl mx-auto text-lg">
Optimize your devtool for AI search engines in three simple steps.
Our platform analyzes your documentation, detects missing signals,
and improves how AI assistants recommend your product.
</p>

</div>


<motion.div
initial="hidden"
whileInView="visible"
viewport={{ once: true }}
transition={{ staggerChildren: 0.2 }}
className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10"
>


{/* STEP 1 */}

<motion.div
initial={{ opacity:0, y:50 }}
whileInView={{ opacity:1, y:0 }}
transition={{ duration:0.6 }}
className="bg-white rounded-xl border shadow-sm p-8 text-center hover:shadow-xl transition"
>

<div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-blue-100 text-blue-600 mb-6">
<FileSearch size={30}/>
</div>

<h3 className="text-xl font-semibold mb-3">
Scan Your Documentation
</h3>

<p className="text-gray-600">
Our AI analyzes your documentation, API references,
and developer pages to understand how your tool appears
in generative search engines.
</p>

</motion.div>


{/* STEP 2 */}

<motion.div
initial={{ opacity:0, y:50 }}
whileInView={{ opacity:1, y:0 }}
transition={{ duration:0.6, delay:0.2 }}
className="bg-white rounded-xl border shadow-sm p-8 text-center hover:shadow-xl transition"
>

<div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-indigo-100 text-indigo-600 mb-6">
<BrainCircuit size={30}/>
</div>

<h3 className="text-xl font-semibold mb-3">
Identify Visibility Gaps
</h3>

<p className="text-gray-600">
Our AI detects missing signals that prevent
LLMs like ChatGPT and Perplexity from recommending
your devtool in answers.
</p>

</motion.div>


{/* STEP 3 */}

<motion.div
initial={{ opacity:0, y:50 }}
whileInView={{ opacity:1, y:0 }}
transition={{ duration:0.6, delay:0.4 }}
className="bg-white rounded-xl border shadow-sm p-8 text-center hover:shadow-xl transition"
>

<div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-purple-100 text-purple-600 mb-6">
<Rocket size={30}/>
</div>

<h3 className="text-xl font-semibold mb-3">
Optimize AI Visibility
</h3>

<p className="text-gray-600">
Implement actionable recommendations to improve
AEO and GEO signals so AI engines reference
your product in developer answers.
</p>

</motion.div>


</motion.div>

</section>


{/* TRUSTED BY SECTION */}

<section className="py-16 px-6 bg-gradient-to-b from-white to-gray-50">

<div className="max-w-6xl mx-auto text-center">

<p className="text-sm text-gray-500 uppercase tracking-wider mb-8">
Trusted by developers and teams at
</p>

<div className="flex flex-wrap justify-center items-center gap-10 opacity-70">

<img
src="https://cdn.worldvectorlogo.com/logos/vercel.svg"
alt="Vercel"
className="h-8 grayscale hover:grayscale-0 transition"
/>

<img
src="https://cdn.worldvectorlogo.com/logos/stripe-4.svg"
alt="Stripe"
className="h-8 grayscale hover:grayscale-0 transition"
/>

<img
src="https://cdn.worldvectorlogo.com/logos/netlify.svg"
alt="Netlify"
className="h-8 grayscale hover:grayscale-0 transition"
/>

<img
src="https://cdn.worldvectorlogo.com/logos/github-icon-1.svg"
alt="GitHub"
className="h-8 grayscale hover:grayscale-0 transition"
/>

<img
src="https://cdn.worldvectorlogo.com/logos/docker.svg"
alt="Docker"
className="h-8 grayscale hover:grayscale-0 transition"
/>

<img
src="https://cdn.worldvectorlogo.com/logos/aws-2.svg"
alt="AWS"
className="h-8 grayscale hover:grayscale-0 transition"
/>

</div>

</div>

</section>

      {/* CTA */}
      <section className="text-center py-24 bg-gray-900 text-white px-6">

        <h2 className="text-4xl font-bold mb-6">
          Start Improving Your AI Visibility Today
        </h2>

        <p className="text-gray-300 mb-8">
          Join devtool teams optimizing their presence for AI search.
        </p>

        <button className="bg-blue-600 px-8 py-3 rounded-lg hover:bg-blue-700 transition transform hover:scale-105">
          Get Started
        </button>

      </section>

      {/* FOOTER */}
      <footer className="text-center py-6 text-gray-500 text-sm border-t">
        © 2026 AIVisibility — Built for Devtool Teams
      </footer>

    </div>
  );
}

export default App;