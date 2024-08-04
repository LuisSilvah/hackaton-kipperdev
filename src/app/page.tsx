import {
  Banner,
  Card,
  EventCard,
  LeafIcon,
  ThermometerIcon,
  ChatDialog,
  AmbulanceIcon,
} from "@/app/components";
import Link from "next/link";
import { FadeUp } from "./components/Animations/FadeUp";
import { HeroComponent } from "../components/component/hero-component";
import { ComponentTopic } from "../components/component/component-topic";
import TextReveal from "@/components/magicui/text-reveal";

export default function Home() {
  return (
    <FadeUp>
      <main className="flex flex-col min-h-dvh items-center justify-center">
        <Banner />
        {/* <HeroComponent /> */}

        <div className="fixed bottom-10 right-10 z-50 bg-opacity-50 rounded-xl ">
          <ChatDialog />
        </div>
        <ComponentTopic>
          <div className="space-y-12 ">
            <h1 className="text-4xl font-extrabold tracking-tight text-primary-foreground sm:text-5xl lg:text-6xl">
              <TextReveal
                style="from-[#a1cde3] via-gray-500 to-[#cbdfd1]"
                // o que define style de ser a cor escolhida é a direção das cores
                text="O desastre avança  mais que a evolução da natureza"
              />
            </h1>

            <div className=" p-[100px] mx-auto text-4xl font-extrabold tracking-tight text-primary-foreground sm:text-5xl lg:text-6xl">
              <TextReveal
                style="from-[#6b22fc] via-gray-500 to-[#3e51e3]"
                className="relative top-10"
                text="As mudanças climáticas são um dos problemas mais urgentes do nosso tempo, afetando todos os aspectos da vida na Terra. ."
              />
            </div>
            <div className="space-y-8">
              <TextReveal
                style="from-red-600 via-gray-500 to-amber-400"
                text="Embora as mudanças climáticas sejam um fenômeno natural, evidências científicas mostram que as atividades humanas estão atualmente impulsionando uma taxa de mudança sem precedentes."
              />
              <TextReveal
                style="from-lime-600 via-gray-500 to-green-400"
                text="A queima de combustíveis fósseis, como carvão, petróleo e gás natural para energia, é a maior fonte de emissões de gases de efeito estufa. "
              />
            </div>
          </div>
        </ComponentTopic>

        <section className="py-6 md:py-12 lg:py-16">
          <div className="container space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Como Proteger-se da Poluição do Ar
              </h2>
              <p className="mt-4 max-w-3xl mx-auto text-muted-foreground">
                Se o ar está poluído, considere as seguintes ações para proteger
                sua saúde e mitigar os impactos.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card
                icon={<ThermometerIcon className="w-12 h-12 text-primary" />}
                title="Evitar Exposição ao Ar Externo"
                describe="Reduza atividades ao ar livre, especialmente em áreas afetadas por alta poluição."
              />

              <Card
                icon={<AmbulanceIcon className="w-12 h-12 text-primary" />}
                title="Adotar Medidas de Proteção Pessoal"
                describe="Beba bastante água e mantenha uma dieta saudável para ajudar o corpo a combater os efeitos da poluição."
              />

              <Card
                icon={<LeafIcon className="w-12 h-12 text-primary" />}
                title="Monitorar a Qualidade do Ar"
                describe="Adapte suas atividades e horários com base nos níveis de poluição, evitando exercícios intensos durante períodos críticos."
              />
            </div>
          </div>
        </section>
        <ComponentTopic>
          <div className="space-y-12 ">
            <h1 className="text-4xl font-extrabold tracking-tight text-primary-foreground sm:text-5xl lg:text-6xl">
              <TextReveal
                style="from-blue-600 via-gray-800 to-sky-200"
                text="A interrupção dos meios de subsistência, o deslocamento devido a eventos climáticos extremos e os riscos aumentados à saúde são alguns dos impactos humanos que precisam ser abordados através da contação de histórias."
              />
            </h1>

            <div className=" p-[100px] mx-auto text-4xl font-extrabold tracking-tight text-primary-foreground sm:text-5xl lg:text-6xl">
              <TextReveal
                style="from-red-600 via-gray-800 to-lime-200"
                className="relative top-10"
                text="A importância de reduzir as emissões não pode ser exagerada. Mitigar as mudanças climáticas requer um esforço concentrado para reduzir as emissões de gases de efeito estufa em todos os setores da sociedade."
              />
            </div>
            <div className="space-y-8">
              <TextReveal
                style="from-green-600 via-gray-800 to-blue-500"
                text="Os esforços de remoção de dióxido de carbono (CDR) baseados na natureza são igualmente essenciais."
              />
              <TextReveal
                style="from-violet-600 via-gray-800 to-lime-500"
                text="A queima de combustíveis fósseis, como carvão, petróleo e gás natural para energia, é a maior fonte de emissões de gases de efeito estufa. "
              />
            </div>
          </div>
        </ComponentTopic>

        <hr className="bg-black w-full" />

        <section className="py-6">
          <div className="container space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Eventos Comunitários
              </h2>
            </div>
            <EventCard />
          </div>
        </section>
        <section className="py-6 md:py-12 lg:py-16">
          <div className="container text-center space-y-8">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Tome medidas para prevenir queimadas.
            </h2>
            <p className="max-w-3xl mx-auto text-muted-foreground">
              Junte-se a nós em nossa missão de conscientizar e tomar medidas
              concretas para proteger nossas comunidades e o meio ambiente dos
              impactos devastadores dos incêndios florestais.
            </p>
            <div className="flex justify-center gap-4">
              <Link
                href="#"
                className="inline-flex items-center justify-center rounded-md bg-slate-100 px-8 py-3 font-medium text-primary-foreground shadow-sm transition-colors hover:bg-slate-100/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-100 focus-visible:ring-offset-2"
                prefetch={false}
              >
                Donate
              </Link>
              <Link
                href="https://chat.whatsapp.com/F3cwyRNThgxAuaNWxFBL2S"
                className="inline-flex items-center justify-center rounded-md border border-input bg-gray-800 text-white px-8 py-3 font-medium shadow-sm transition-colors hover:bg-gray-700 hover:text-accent-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-100 focus-visible:ring-offset-2"
                prefetch={false}
                target="_blank"
              >
                junte-se a nós
              </Link>
            </div>
          </div>
        </section>
      </main>
    </FadeUp>
  );
}
