import LapidandoHero from "@/components/lapidando/LapidandoHero";
import LapidandoPainPoints from "@/components/lapidando/LapidandoPainPoints";
import LapidandoResults from "@/components/lapidando/LapidandoResults";
import LapidandoForWho from "@/components/lapidando/LapidandoForWho";
import LapidandoHowItWorks from "@/components/lapidando/LapidandoHowItWorks";
import LapidandoSixSteps from "@/components/lapidando/LapidandoSixSteps";
import LapidandoDeliverables from "@/components/lapidando/LapidandoDeliverables";
import LapidandoWhyGroup from "@/components/lapidando/LapidandoWhyGroup";
import LapidandoMentor from "@/components/lapidando/LapidandoMentor";
import LapidandoApplication from "@/components/lapidando/LapidandoApplication";
import LapidandoFAQ from "@/components/lapidando/LapidandoFAQ";
import LapidandoFinalCTA from "@/components/lapidando/LapidandoFinalCTA";

const LapidandoDiamantes = () => {
  return (
    <main className="min-h-screen" style={{ backgroundColor: "hsl(220, 20%, 6%)", color: "#FAF7F2" }}>
      <LapidandoHero />
      <LapidandoPainPoints />
      <LapidandoResults />
      <LapidandoForWho />
      <LapidandoHowItWorks />
      <LapidandoSixSteps />
      <LapidandoDeliverables />
      <LapidandoWhyGroup />
      <LapidandoApplication />
      <LapidandoMentor />
      <LapidandoFAQ />
      <LapidandoFinalCTA />
    </main>
  );
};

export default LapidandoDiamantes;
