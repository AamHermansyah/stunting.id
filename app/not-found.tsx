import { RiEmotionSadLine } from "react-icons/ri";

export default function NotFound() {
  return (
    <div className="p-20 min-h-screen w-full flex flex-col items-center justify-center">
      <h1 className="text-9xl text-primary font-bold flex items-center">
        4<RiEmotionSadLine className="text-[200px]" />4
      </h1>
      <p className="text-muted-foreground">
        Huhuuu... Page not found. Back to <a href="/" className="text-primary underline">Home</a>
      </p>
    </div>
  )
}