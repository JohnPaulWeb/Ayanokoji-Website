import { Button } from "@/components/ui/button";
import Image from "next/image";
import { redirect } from "next/navigation";

export default function Home() {
  //   const session = await auth()

  //  if(session) {
  //   redirect('/dashboard')
  //  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="px-4 lg:px-6 h-16 flex items-center">
        <div className="flex items-center space-x-2">


          {/* this is the for SVG i dont think this is image or png or jpeg */}

          <span className="font-bold">Ayanokoji</span>
        </div>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Button variant="ghost" asChild>
            <a href="#features">Features</a>
            </Button>
            <Button variant="ghost" asChild>
            <a href="#help">Help Center</a>
            </Button> 
        </nav>
      </header>

      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-4xl font-bold tracking-tighter">Welcome Here in Ayanokoji Anime</h1>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
