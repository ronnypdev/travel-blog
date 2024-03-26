import TravelBlogLogo from "../assets/travel-blog-logo.png"

export default function Header() {
  return <>
    <header className="w-full mb-11 text-center bg-[color:var(--color-red)] py-4 flex flex-row justify-center items-center">
      <img src={TravelBlogLogo} alt="travel blog logo"/>
      <h4 className="ml-1 text-sm font-medium text-[color:var(--color-white)]">
        my travel journal.
      </h4>
    </header>
  </> 
  
}
