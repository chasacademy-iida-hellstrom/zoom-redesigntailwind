import { RxHamburgerMenu } from "react-icons/rx";
import { FaGraduationCap } from "react-icons/fa";
import { FaMoneyBillWave } from "react-icons/fa";
import { RiGovernmentLine } from "react-icons/ri";
import { AiFillMedicineBox } from "react-icons/ai";
import { BsBox } from "react-icons/bs";
import { AiFillTag } from "react-icons/ai";
import IconCards from "./IconCards";





function App() {

 return (

 
    <div className="flex flex-col">
      
      
  
      
      <nav className="flex flex-row text-center mx-8 justify-between">
      <img src="https://st2.zoom.us/static/6.3.10815/image/new/topNav/Zoom_logo.svg"
          alt="Zoomlogo"/>
     
        <ul className="flex gap-8 p-6 m-4">
        <li><button className="hover:text-zoom-blue p-2 hidden 
         lg:block">Products</button></li>
        <li><button className="hover:text-zoom-blue p-2 hidden 
         lg:block">Solutions</button></li>
        <li><button className="hover:text-zoom-blue p-2 hidden 
         lg:block">Resources</button></li>
        <li><button className="hover:text-zoom-blue p-2 hidden xl:block">Plans & 
         Pricing</button></li>
        </ul>                                  

        <div className="flex gap-10 m-6 p-4">
        <button className="hover:bg-blue-100 text-blue-700 font-semibold 
        px-4 border border-blue-500 rounded-full h-10 w-34 hidden md:block">Contact Sales</button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 
        px-4 rounded-full h-10 w-34 hidden md:block">Sign up free</button>
        </div>
        
        <div className="text-4xl m-6 text-blue-500 hover:text-blue-200 md:hidden  ">
          <RxHamburgerMenu />
        </div>
        </nav>
      
        <div className="flex justify-between md:flex-row ">
        <div>
           <b><h1 className="flex flex-col text-7xl ml-10 mr-10 mt-10">
            One platform<br /> to <span className="text-zoom-blue">connect</span>
          </h1></b>
          <p className="p-12 text-xl">
            Bring teams together, reimagine workspaces, <br /> engage new
            audiences, and delight your coustomers <br /> - all on Zoom platform
            you know you love.
          </p>
        </div>
        <div className="mr-40">
          <img src="https://st1.zoom.us/static/6.3.11147/image/home2/img1.jpg" alt="zoomcat" 
          style={{ width: "450px" }} className="rounded-2xl mr-2 hidden md:block"/>
          <div className="flex md:hidden w-52 md:mt-12 mb-10 ml-16">
           
          </div>
        </div>
      </div>
      <div className="flex flex-row mb-16 m-10 space-x-4">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 
        px-4 rounded-full h-10 w-34">
          Plans & Pricing
        </button>
        <button className=" text-blue-700 font-semibold 
        px-4 h-10 w-34 hover:text-blue-300">
          Sign up, it's free
        </button>
      </div>

      <div className="flex flex-col">
      <div className="flex flex-col md:flex-row bg-black order-b-4 text-lg">
        <div>
          <img
            src="https://st2.zoom.us/static/6.3.11147/image/home2/zm-product-wheel.png"
            alt="wheel"
            style={{ width: "450px" }} 
            className="flex justify-start"
          />
        </div>
        <div className=" flex flex-col p-20 self-center text-blue-100 md:p-15 md:ml-10 ">
          <h1 className=" text-5xl font-semibold pb-10">Make work less work</h1>
          <p className="text-xl ">
            Securely connect and collaborate so you can work better together.
            <br />
            Simple to manage and delightful to use, Zoom powers the modern
            workforce. <br />
            <br />
            <button className="hover:text-blue-200 mt-5">
              Discover the Possibilities
            </button>
          </p>
        </div>
      </div>
    </div>
    <div className="flex flex-1 justify-between text-lg mb-10 flex-col md:flex-row">
    <div className="p-10">
      <section className="flex flex-col ml-10 ">
        <h1 className="font-semibold text-5xl mt-20 mb-5 ">
          Powering organizations <br />across industries and <br /> geographies
        </h1>
      </section>
      <section className="flex ml-10">
        <h2 className="flex text-2xl">
          Zoom helps consolidate communications, connect people, <br /> and
          collaborate better together in the boardroom, classroom, <br /> operating
          room, and everywhere in between.
        </h2>
      </section>
      <div className="flex flex-col">
        <button className="h-12 w-80 px-2 text-center rounded-full bg-teal-200
         hover:bg-teal-300 text-blue-900 mt-10 ml-8">
          Explore Industry Solutions
        </button>
        </div>
        </div>

        
        <div className="grid grid-cols-2 grid-rows-3 md:mr-10 gap-x-5 text-center ">
          <IconCards icon={<FaGraduationCap size={40} />} title={"Education"} />
          <IconCards icon={<FaMoneyBillWave size={40} />} title={"Financial Services"}/>
          <IconCards icon={<RiGovernmentLine size={40} />} title={"Government"} />
          <IconCards icon={<AiFillMedicineBox size={40} />} title={"Healthcare"} />
          <IconCards icon={<BsBox size={40} />} title={"Manufacturing"} />
          <IconCards icon={<AiFillTag size={40} />} title={"Retail"} />
        </div>
      </div>
     
  

     </div>
   

   
  );
}

export default App;


