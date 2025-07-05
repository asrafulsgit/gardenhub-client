import { useContext } from "react";
import { AuthContext } from "../config/AuthProvider";
import { Helmet } from "react-helmet";

const AboutPage = () => {
  const { isDark } = useContext(AuthContext);
  return (
   <> 
   <Helmet>
      <title>Gargen Hub | About Us </title>
    </Helmet>
   
   <div className={`page-section min-h-screen 
    ${isDark ? "bg-black" : "bg-gray-100"} py-12 px-5 `}>
      {/* Header */}
      <section className="max-w-5xl mx-auto text-center mb-10">
        <h1 className={`text-[26px] md:text-[30px] ${
            isDark ? "text-gray-400" : "text-[#111827]"
          } mb-2 
      font-[700] nunito-family`}>
          About GardenHub
        </h1>
        <p className={`md:text-[18px] font-[400] ${
            isDark ? "text-gray-500" : "text-[#4b5563]"
          }  roboto-family`}>
          Connecting gardeners, sharing wisdom, and growing communities.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="max-w-5xl mx-auto mb-12 grid gap-6 md:grid-cols-2">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold text-[#0A6B01] dark:text-[#2BC854] mb-2">
            🌱 Our Mission
          </h2>
          <p className="text-gray-700 dark:text-gray-300">
            To empower people of all ages to explore gardening by providing a
            friendly platform to share tips, discover events, and connect with
            local gardeners.
          </p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold text-[#0A6B01] dark:text-[#2BC854] mb-2">
            🌿 Our Vision
          </h2>
          <p className="text-gray-700 dark:text-gray-300">
            We envision a world where gardening knowledge is easily accessible,
            sustainable practices are promoted, and every community is greener
            through shared passion.
          </p>
        </div>
      </section>

      {/* Why GardenHub */}
      <section className="max-w-5xl mx-auto mb-12">
        <h2 className="text-2xl font-semibold mb-5 text-[#0A6B01] dark:text-[#2BC854]">
          Why GardenHub?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className={`bg-gray-900 p-6 rounded-lg shadow hover:shadow-md transition`}>
            <h3 className="font-bold text-[#0A6B01] dark:text-[#2BC854] mb-2">
              Expert Gardening Tips
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Learn from experienced gardeners and specialists who share real
              tips that work in your local climate.
            </p>
          </div>
          <div className={`bg-gray-900 p-6 rounded-lg shadow hover:shadow-md transition`}>
            <h3 className="font-bold text-[#0A6B01] dark:text-[#2BC854] mb-2">
              Community Events
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Attend or host gardening workshops, contests, and eco-initiatives
              happening near you.
            </p>
          </div>
          <div className={`bg-gray-900 p-6 rounded-lg shadow hover:shadow-md transition`}>
            <h3 className="font-bold text-[#0A6B01] dark:text-[#2BC854] mb-2">
              Share Your Journey
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Post your gardening tips, success stories, or ask questions – and
              get inspired by others.
            </p>
          </div>
          <div className={`bg-gray-900 p-6 rounded-lg shadow hover:shadow-md transition`}>
            <h3 className="font-bold text-[#0A6B01] dark:text-[#2BC854] mb-2">
              Find & Connect with Gardeners
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Explore other gardeners based on specialties, location, or rating,
              and grow together.
            </p>
          </div>
        </div>
      </section>

      {/* (Optional) Team Section */}

      {/* <section className="max-w-5xl mx-auto text-center">
        <h2 className="text-2xl font-semibold mb-6 text-[#0A6B01] dark:text-[#2BC854]">
          Meet the Team
        </h2>
        You can add team member cards here if needed
      </section> */}
    </div></>
  );
};

export default AboutPage;

// export default function AboutPage() {
//   return (
//     <div className="min-h-screen px-4 py-12 bg-[#E4FEEC] dark:bg-gray-900 text-gray-800 dark:text-white transition">
//       {/* Intro Section */}
//       <section className="max-w-4xl mx-auto text-center mb-12">
//         <h1 className="text-3xl md:text-4xl font-bold text-[#0A6B01] dark:text-[#2BC854] mb-4">
//           About GardenHub
//         </h1>
//         <p className="text-lg text-gray-700 dark:text-gray-300">
//           GardenHub is your one-stop digital platform for all things gardening. From discovering expert tips to joining local garden events – we bring the green community together.
//         </p>
//       </section>

//       {/* Mission Section */}
//       <section className="max-w-5xl mx-auto mb-12">
//         <h2 className="text-2xl font-semibold mb-3 text-[#0A6B01] dark:text-[#2BC854]">Our Mission</h2>
//         <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
//           Our mission is to build a connected community of passionate gardeners by sharing knowledge, celebrating achievements, and promoting sustainable gardening practices. Whether you're a beginner or a seasoned green thumb, GardenHub empowers you with the tools and inspiration to grow.
//         </p>
//       </section>

//       {/* Why GardenHub Section */}
//       <section className="max-w-5xl mx-auto mb-12">
//         <h2 className="text-2xl font-semibold mb-5 text-[#0A6B01] dark:text-[#2BC854]">Why GardenHub?</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-md transition">
//             <h3 className="font-bold text-[#0A6B01] dark:text-[#2BC854] mb-2">Expert Gardening Tips</h3>
//             <p className="text-gray-700 dark:text-gray-300">
//               Learn from experienced gardeners and specialists who share real tips that work in your local climate.
//             </p>
//           </div>
//           <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-md transition">
//             <h3 className="font-bold text-[#0A6B01] dark:text-[#2BC854] mb-2">Community Events</h3>
//             <p className="text-gray-700 dark:text-gray-300">
//               Attend or host gardening workshops, contests, and eco-initiatives happening near you.
//             </p>
//           </div>
//           <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-md transition">
//             <h3 className="font-bold text-[#0A6B01] dark:text-[#2BC854] mb-2">Share Your Journey</h3>
//             <p className="text-gray-700 dark:text-gray-300">
//               Post your gardening tips, success stories, or ask questions – and get inspired by others.
//             </p>
//           </div>
//           <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-md transition">
//             <h3 className="font-bold text-[#0A6B01] dark:text-[#2BC854] mb-2">Find & Connect with Gardeners</h3>
//             <p className="text-gray-700 dark:text-gray-300">
//               Explore other gardeners based on specialties, location, or rating, and grow together.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* (Optional) Team Section */}
//       {/* <section className="max-w-5xl mx-auto text-center">
//         <h2 className="text-2xl font-semibold mb-6 text-[#0A6B01] dark:text-[#2BC854]">Meet the Team</h2>
//         // You can add team member cards here if needed
//       </section> */}
//     </div>
//   );
// }
