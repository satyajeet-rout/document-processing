// import { useState, useRef, useEffect } from "react";

// export const LoginPage = ({ onLogin }) => {
//   const [password, setPassword] = useState("");
//   const [userName, setUserName] = useState("");
//   const scrollContainerRef = useRef(null);
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onLogin(password);
//   };

//   const scrollToSlide = (index) => {
//     const container = scrollContainerRef.current;
//     if (container) {
//       container.scrollTo({
//         left: index * container.offsetWidth,
//         behavior: "smooth"
//       });
//       setCurrentSlide(index);
//     }
//   };

//   useEffect(() => {
//     const container = scrollContainerRef.current;
//     if (!container) return;

//     const slides = container.children;
//     const totalSlides = slides.length;

//     const autoSlideInterval = setInterval(() => {
//       const nextSlide = (currentSlide + 1) % totalSlides;
//       scrollToSlide(nextSlide);
//     }, 4000); // Change slide every 5 seconds

//     return () => clearInterval(autoSlideInterval);
//   }, [currentSlide]);

//   const scrollLeft = () => {
//     const container = scrollContainerRef.current;
//     if (container) {
//       const totalSlides = container.children.length;
//       const prevSlide = (currentSlide - 1 + totalSlides) % totalSlides;
//       scrollToSlide(prevSlide);
//     }
//   };

//   const scrollRight = () => {
//     const container = scrollContainerRef.current;
//     if (container) {
//       const totalSlides = container.children.length;
//       const nextSlide = (currentSlide + 1) % totalSlides;
//       scrollToSlide(nextSlide);
//     }
//   };

//   return (
//     <div className="flex w-full h-screen">
//       {/* Left Section - Header and Horizontal Scroll Cards */}
//       <div className="flex flex-col w-3/5 bg-black text-white">
//         {/* Header */}
//         <div className="flex justify-center items-center py-4">
//           <h1
//             className="text-[46px] font-bold text-center py-6 pt-36"
//             style={{
//               color: "#FFFFFF",
//               lineHeight: "40px",
//             }}
//           >
//             Unstructured Data Intelligence
//           </h1>
//         </div>
//         {/* Horizontal Scrollable Cards */}
//         <div className="relative flex justify-center items-center h-[500px]">
//           {/* Left Icon */}
//           <button
//             className="absolute left-0 z-10 text-white rounded-full pl-36 shadow-lg"
//             onClick={scrollLeft}
//             aria-label="Scroll Left"
//           >
//             &lt;
//           </button>

//           {/* Card Container */}
//           <div
//             ref={scrollContainerRef}
//             className="flex overflow-x-scroll snap-x snap-mandatory gap-6 px-4 w-[60%] h-[400px]"
//             style={{
//               scrollSnapType: "x mandatory",
//               scrollBehavior: "smooth",
//               overflowX: "hidden" // Hide scrollbar
//             }}
//           >
//             {/* Card 1 */}
//             <div
//               className="w-[34vw] h-[380px] bg-black text-center flex flex-col justify-center p-6 rounded-lg shadow-lg snap-center"
//               style={{ flex: "0 0 auto", border: "solid 1px #C7C7C7" }}
//             >
//               <h3 className="text-2xl font-bold">AI for Document Extraction</h3>
//               <p className="text-md pt-5 text-left leading-5 text-white px-3 py-1 mb-2 rounded shadow">
//                 InfraHive uses complex Machine Learning models trained on your
//                 business data, and delivers 99%+ accuracy on invoices, receipts,
//                 POs and bank statements.
//               </p>
//             </div>
//             {/* Card 2 */}
//             <div
//               className="w-[34vw] h-[380px] bg-black text-center flex flex-col justify-center p-6 rounded-lg shadow-lg snap-center"
//               style={{ flex: "0 0 auto", border: "solid 1px #C7C7C7" }}
//             >
//               <h3 className="text-2xl font-bold">
//                 AI for Invoice Coding and ERP Sync
//               </h3>
//               <p className="text-md pt-5 text-left leading-5 text-white px-3 py-1 mb-2 rounded shadow">
//                 InfraHive uses complex Machine Learning models trained on your
//                 business data, and delivers 99%+ accuracy on invoices, receipts,
//                 POs and bank statements.
//               </p>
//             </div>
//             {/* Card 3 */}
//             <div
//               className="w-[34vw] h-[380px] bg-black text-center flex flex-col justify-center p-6 rounded-lg shadow-lg snap-center"
//               style={{ flex: "0 0 auto", border: "solid 1px #C7C7C7" }}
//             >
//               <h3 className="text-2xl font-bold">AI for Complex Workflows</h3>
//               <p className="text-md pt-5 text-left leading-5 text-white px-3 py-1 mb-2 rounded shadow">
//                 Ensure accuracy and sync with ERP Master Data, prevent
//                 duplicates and fraud, enforce compliance, and improve audit
//                 readiness. <br /> <br />
//                 InfraHive AI will do all the above - and more - while you focus
//                 on what matters more.
//               </p>
//             </div>
//           </div>

//           {/* Right Icon */}
//           <button
//             className="absolute right-0 z-10 text-white rounded-full pr-36 shadow-lg"
//             onClick={scrollRight}
//             aria-label="Scroll Right"
//           >
//             &gt;
//           </button>

//           {/* Slide Indicators */}
//           <div className="absolute bottom-4 flex space-x-2">
//             {[0, 1, 2].map((index) => (
//               <button
//                 key={index}
//                 onClick={() => scrollToSlide(index)}
//                 className={`w-3 h-3 rounded-full ${
//                   currentSlide === index
//                     ? 'bg-white'
//                     : 'bg-gray-500'
//                 }`}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//       <div className="w-2/5 bg-white flex flex-1 gap-10 flex-col justify-center items-center">
//         <div className="flex justify-center mb-6">
//           <img
//             src="https://www.infrahive.ai/_next/image?url=%2Fimages%2Flogo%2Flogo.png&w=640&q=75"
//             alt="Logo"
//             className="h-16 z-20 bg-white"
//           />
//         </div>

//         <div
//           className="p-8 rounded-lg shadow-lg w-3/4 max-w-md"
//           style={{ backgroundColor: "#FAF5EB" }}
//         >
//           <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
//           <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
//             <input
//               autoFocus
//               className="h-[40px] p-2 border border-gray-300 rounded"
//               type="text"
//               placeholder="Username"
//               value={userName}
//               onChange={(e) => setUserName(e.target.value)}
//             />
//             <input
//               className="h-[40px] p-2 border border-gray-300 rounded"
//               type="password"
//               placeholder="Enter Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//             <button
//               className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded w-full"
//               type="submit"
//             >
//               Login
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const LoginPage = ({ onLogin }) => {
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [error, setError] = useState("");
  const scrollContainerRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // Validate inputs
    if (!userName || !password) {
      setError("Please enter both username and password");
      return;
    }

    // Call the login function
    const loginSuccess = onLogin(password);
    if (loginSuccess) {
      // If login is successful, navigate to home
      navigate("/");
    }
  };

  const scrollToSlide = (index) => {
    const container = scrollContainerRef.current;
    if (container) {
      container.scrollTo({
        left: index * container.offsetWidth,
        behavior: "smooth",
      });
      setCurrentSlide(index);
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const slides = container.children;
    const totalSlides = slides.length;

    const autoSlideInterval = setInterval(() => {
      const nextSlide = (currentSlide + 1) % totalSlides;
      scrollToSlide(nextSlide);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(autoSlideInterval);
  }, [currentSlide]);

  const scrollLeft = () => {
    const container = scrollContainerRef.current;
    if (container) {
      const totalSlides = container.children.length;
      const prevSlide = (currentSlide - 1 + totalSlides) % totalSlides;
      scrollToSlide(prevSlide);
    }
  };

  const scrollRight = () => {
    const container = scrollContainerRef.current;
    if (container) {
      const totalSlides = container.children.length;
      const nextSlide = (currentSlide + 1) % totalSlides;
      scrollToSlide(nextSlide);
    }
  };

  return (
    <div className="flex w-full h-screen">
      {/* Left Section - Header and Horizontal Scroll Cards */}
      <div className="flex flex-col w-3/5 bg-black text-white">
        {/* Header */}
        <div className="flex justify-center items-center py-4">
          <h1
            className="text-[46px] font-bold text-center py-6 pt-36"
            style={{
              color: "#FFFFFF",
              lineHeight: "40px",
            }}
          >
            Unstructured Data Intelligence
          </h1>
        </div>
        {/* Horizontal Scrollable Cards */}
        <div className="relative flex justify-center items-center h-[500px]">
          {/* Left Icon */}
          <button
            className="absolute left-0 z-10 text-white rounded-full pl-36 shadow-lg"
            onClick={scrollLeft}
            aria-label="Scroll Left"
          >
            &lt;
          </button>

          {/* Card Container */}
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-scroll snap-x snap-mandatory gap-6 px-4 w-[60%] h-[400px]"
            style={{
              scrollSnapType: "x mandatory",
              scrollBehavior: "smooth",
              overflowX: "hidden", // Hide scrollbar
            }}
          >
            {/* Card 1 */}
            <div
              className="w-[34vw] h-[380px] bg-black text-center flex flex-col justify-center p-6 rounded-lg shadow-lg snap-center"
              style={{ flex: "0 0 auto", border: "solid 1px #C7C7C7" }}
            >
              <h3 className="text-2xl font-bold">AI for Document Extraction</h3>
              <p className="text-md pt-5 text-left leading-5 text-white px-3 py-1 mb-2 rounded shadow">
                InfraHive uses complex Machine Learning models trained on your
                business data, and delivers 99%+ accuracy on invoices, receipts,
                POs and bank statements.
              </p>
            </div>
            {/* Card 2 */}
            <div
              className="w-[34vw] h-[380px] bg-black text-center flex flex-col justify-center p-6 rounded-lg shadow-lg snap-center"
              style={{ flex: "0 0 auto", border: "solid 1px #C7C7C7" }}
            >
              <h3 className="text-2xl font-bold">
                AI for Invoice Coding and ERP Sync
              </h3>
              <p className="text-md pt-5 text-left leading-5 text-white px-3 py-1 mb-2 rounded shadow">
                InfraHive uses complex Machine Learning models trained on your
                business data, and delivers 99%+ accuracy on invoices, receipts,
                POs and bank statements.
              </p>
            </div>
            {/* Card 3 */}
            <div
              className="w-[34vw] h-[380px] bg-black text-center flex flex-col justify-center p-6 rounded-lg shadow-lg snap-center"
              style={{ flex: "0 0 auto", border: "solid 1px #C7C7C7" }}
            >
              <h3 className="text-2xl font-bold">AI for Complex Workflows</h3>
              <p className="text-md pt-5 text-left leading-5 text-white px-3 py-1 mb-2 rounded shadow">
                Ensure accuracy and sync with ERP Master Data, prevent
                duplicates and fraud, enforce compliance, and improve audit
                readiness. <br /> <br />
                InfraHive AI will do all the above - and more - while you focus
                on what matters more.
              </p>
            </div>
          </div>

          {/* Right Icon */}
          <button
            className="absolute right-0 z-10 text-white rounded-full pr-36 shadow-lg"
            onClick={scrollRight}
            aria-label="Scroll Right"
          >
            &gt;
          </button>

          {/* Slide Indicators */}
          <div className="absolute bottom-4 flex space-x-2">
            {[0, 1, 2].map((index) => (
              <button
                key={index}
                onClick={() => scrollToSlide(index)}
                className={`w-3 h-3 rounded-full ${
                  currentSlide === index ? "bg-white" : "bg-gray-500"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Right Section - Login Form */}
      <div className="w-2/5 bg-white flex flex-1 gap-10 flex-col justify-center items-center">
        <div className="flex justify-center mb-6">
          <img
            src="https://www.infrahive.ai/_next/image?url=%2Fimages%2Flogo%2Flogo.png&w=640&q=75"
            alt="Logo"
            className="h-16 z-20 bg-white"
          />
        </div>

        <div
          className="p-8 rounded-lg shadow-lg w-3/4 max-w-md"
          style={{ backgroundColor: "#FAF5EB" }}
        >
          <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            {error && (
              <div className="text-red-500 text-sm text-center">{error}</div>
            )}
            <input
              autoFocus
              className="h-[40px] p-2 border border-gray-300 rounded"
              type="text"
              placeholder="Username"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            <input
              className="h-[40px] p-2 border border-gray-300 rounded"
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded w-full"
              type="submit"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
