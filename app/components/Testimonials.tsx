"use client"

import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Play } from "lucide-react"
import { useState } from "react"


interface Testimonial {
    id: string 
    quote: string 
    videoUrl: string
    thumbnail: string
    author: {
        name: string
        role: string
        avatar?:string
    }

}

const testimonials: Testimonial[] = [
    {
        id: '1',
        quote: "What is your greatest Fear?",
    videoUrl: "#",
    thumbnail: "",
    author: {
      name: "Kiyotaka Ayanokoji",
      role: "Simple Dev",
    }
    },
    {
        id: '2',
        quote: "Let's be here,",
    videoUrl: "#",
    thumbnail: "",
    author: {
      name: "Isagi Yuuchi",
      role: "Wants to be World, Best Striker",
    }
    },
    {
        id: '3',
        quote: "",
        videoUrl: "#",
        thumbnail: "",
        author: {
          name: "",
          role: "",
        }
    },
    {
        id: '4',
        quote: "",
        videoUrl: "#",
        thumbnail: "",
        author: {
          name: "",
          role: "",
        }
    },
 ]
export default function Testimonials() {
    const [selectedVideo, setSelectedVideo] = useState<Testimonial | null>(null)

    return(
        <section className="py-20 px-4">
            <div className="container mx-auto">
                <h2 className="text-4x1 md:text-5xl font-bold text-center mb-12">
                    The Most Exciting Part is to 
                
                <span className="bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
                    Change 
                 </span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {testimonials.map((testimonial) => (
                        <div key={testimonials.id}
                        className="relative group cursor-pointer" onClick={() => setSelectedVideo(testimonial)}>

                            <div className="relative aspect-[3/4] rounded-lg overflow-hidden">
                                <img src={testimonial.thumbnail} alt="" className="absolute inset-0 w-full h-full object-cover transition-transform group-hover:scale-105" />
                                <div className="absolute inset-0 bg-black/60">
                                  <div className="absolute inset-0 flex items-center">
                                    <div className="rounded-full bg-white/10 p-3 backdrop-blur-sm">
                                      <Play className="w-8 h-8 text-white" />
                                    </div>
                                  </div>
                                  <div className="absolute bottom-0 left-0 right-0 p-6">
                                    <p className="text-white text-lg font-medium leading-snug">
                                        "{testimonial.quote}"
                                    </p>
                                    {testimonial.author && (
                                        <div className="mt-4 flex-items-center gap-3">
                                            {testimonial.author.avatar && (
                                                <img src={testimonial.author.avatar} alt={testimonial.author.name} className="w-8 h-8 rounded-full" />
                                            )}
                                            <div className="text-white font-medium">
                                                {testimonial.author.name}
                                            </div>
                                            <div className="text-white/80 text-sm">
                                            {testimonial.author.role}
                                            </div>
                                        </div>
                                    )}
                                  </div>
                                </div>
                            </div>

                            </div>

                    ))}
                </div>
            </div>

            <Dialog open={!!selectedVideo} onOpenChange={() => setSelectedVideo(null)}>
                <DialogContent className="max-w-4xl w-full aspect-video p-0">
                    {selectedVideo && (
                        <div className="w-full h-full flex items-center justify-center bg-black">
                            <div className="text-white">Video Player Here</div>
                        </div>
                    )}
                </DialogContent>
            </Dialog>
        </section>
    )
}