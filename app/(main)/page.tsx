import ContactForm from "./_layouts/contact-form";
import ExpertsSay from "./_components/expert-says";
import Hero from "./_components/hero";
import Statistics from "./_components/statistics";
import StuntingChart from "./_components/stunting-chart";
import VerticalTimeline from "./_components/timeline";

export default function Home() {
  return (
    <>
      <Hero />
      <Statistics />
      <VerticalTimeline />
      <StuntingChart />
      <ExpertsSay />
      <ContactForm />
    </>
  )
}
