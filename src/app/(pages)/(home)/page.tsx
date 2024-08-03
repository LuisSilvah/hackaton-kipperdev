import {
  AmbulanceIcon,
  Banner,
  Card,
  CloudLightningIcon,
  EventCard,
  FireExtinguisherIcon,
  FlameIcon,
  HomeIcon,
  LeafIcon,
  ThermometerIcon,
  TreesIcon,
} from "@/app/components";
import Link from "next/link";
import { describe } from "node:test";

export default function Home() {
  const eventos = [
    {
      id: 1,
      title: "Dia de Ação Comunitária Contra Queimadas",
      describe:
        "Participe de mutirões para limpar áreas de risco e criar faixas de proteção. Inclui oficinas práticas e atividades educativas para a comunidade.",
      data: "15/07/2024",
      estado: "SP",
      cidade: "Campinas",
    },
    {
      id: 2,
      title: "Feira de Conscientização Ambiental",
      describe:
        "Feira com exposições e palestras sobre prevenção de queimadas. Atividades interativas e recursos educativos para engajar e informar o público local.",
      data: "16/07/2024",
      estado: "SP",
      cidade: "Campinas",
    },
    {
      id: 3,
      title: "Caminhada Ecológica e Plantio de Árvores",
      describe:
        "Junte-se a uma caminhada ecológica e ajude no plantio de árvores para restaurar áreas afetadas. Envolva-se com sua comunidade na proteção ambiental.",
      data: "17/07/2024",
      estado: "SP",
      cidade: "Campinas",
    },
  ];

  return (
    <main className="flex flex-col min-h-dvh items-center justify-center">
      <Banner />

     
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

    <hr className="bg-black w-full"/>

      <section className="py-6">
        <div className="container space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Eventos Comunitários 
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {eventos.map((item) => {
              return (
                <EventCard
                  title={item.title}
                  describe={item.describe}
                  data={item.data}
                  estado={item.estado}
                  cidade={item.cidade}
                  key={item.id}
                />
              );
            })}
          </div>
        </div>
      </section>
      <section className="py-6 md:py-12 lg:py-16">
        <div className="container text-center space-y-8">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Tome medidas para prevenir queimadas.
          </h2>
          <p className="max-w-3xl mx-auto text-muted-foreground">
          Junte-se a nós em nossa missão de conscientizar e tomar medidas concretas para 
          proteger nossas comunidades e o meio ambiente dos impactos devastadores dos incêndios florestais.
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
              href="#"
              className="inline-flex items-center justify-center rounded-md border border-input bg-gray-800 text-white px-8 py-3 font-medium shadow-sm transition-colors hover:bg-gray-700 hover:text-accent-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-100 focus-visible:ring-offset-2"
              prefetch={false}
            >
              junte-se a nós
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
