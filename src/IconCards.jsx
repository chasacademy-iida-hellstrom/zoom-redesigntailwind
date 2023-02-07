export default function IconCards({ icon, title }) {
    return (
      <div>
        <div className="flex flex-1 flex-col cursor-pointer mt-10 border items-center 
           text-xl rounded-3xl font-bold p-10 hover:shadow-zoom-blue hover:shadow-sm
          hover:text-zoom-blue">
          <div>{icon}</div>
          {title}
          </div>
        </div>
    );
  }